import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site, siteUrl, whatsappNumber } from '@/lib/site';

const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;

const fieldLabels: Record<string, string> = {
  nombre: 'Nombre',
  email: 'Correo',
  telefono: 'Teléfono',
  ciudad: 'Ciudad',
  tipoConsulta: 'Tipo de consulta',
  mensaje: 'Descripción del caso',
  organizacion: 'Organización',
  cargo: 'Cargo',
  empresa: 'Empresa',
  nit: 'NIT',
  tamano: 'Tamaño de la empresa',
  fechaDespido: 'Fecha del despido',
  origen: 'Origen del formulario',
};

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Solicitud inválida.' }, { status: 400 });
  }

  const value = (key: string) => {
    const raw = form.get(key);
    return typeof raw === 'string' ? raw.trim() : '';
  };

  const nombre = value('nombre');
  const email = value('email');
  const telefono = value('telefono');
  const mensaje = value('mensaje');

  if (!nombre || !email || !telefono || !mensaje) {
    return NextResponse.json(
      { ok: false, error: 'Completa nombre, correo, teléfono y descripción del caso.' },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'El correo no es válido.' }, { status: 422 });
  }

  if (form.get('politica') !== 'aceptada') {
    return NextResponse.json(
      { ok: false, error: 'Debes aceptar la política de privacidad.' },
      { status: 422 },
    );
  }

  const lines = Object.keys(fieldLabels)
    .map((key) => ({ label: fieldLabels[key], text: value(key) }))
    .filter((entry) => entry.text.length > 0)
    .map((entry) => `<p><strong>${entry.label}:</strong> ${escapeHtml(entry.text)}</p>`)
    .join('\n');

  const attachment = form.get('adjunto');
  let attachments: { filename: string; content: string }[] | undefined;
  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { ok: false, error: 'El archivo adjunto supera 4 MB.' },
        { status: 422 },
      );
    }
    const buffer = Buffer.from(await attachment.arrayBuffer());
    attachments = [{ filename: attachment.name, content: buffer.toString('base64') }];
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info('[contacto] Consulta recibida sin RESEND_API_KEY configurada', {
      nombre,
      email,
      telefono,
      origen: value('origen'),
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const from = process.env.CONTACT_FROM_EMAIL ?? 'BUBO Legal <onboarding@resend.dev>';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      replyTo: email,
      subject: `Nueva consulta laboral — ${nombre}`,
      html: `<h2>Nueva consulta desde ${siteUrl}</h2>${lines}`,
      ...(attachments ? { attachments } : {}),
    });

    if (!error) {
      // La confirmación al usuario es secundaria: si falla, la consulta ya quedó recibida.
      const confirmation = await resend.emails.send({
        from,
        to: [email],
        replyTo: site.email,
        subject: 'Recibimos tu consulta — BUBO Legal',
        html: confirmationHtml(nombre),
      });
      if (confirmation.error) {
        console.error(
          '[contacto] No se pudo enviar la confirmación al usuario',
          confirmation.error,
        );
      }
    }

    if (error) {
      console.error('[contacto] Resend respondió con error', error);
      return NextResponse.json(
        { ok: false, error: 'No pudimos enviar tu consulta. Escríbenos por WhatsApp.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (sendError) {
    console.error('[contacto] Error inesperado enviando el correo', sendError);
    return NextResponse.json(
      {
        ok: false,
        error: 'No pudimos enviar tu consulta. Intenta de nuevo o escríbenos por WhatsApp.',
      },
      { status: 500 },
    );
  }
}

function confirmationHtml(nombre: string) {
  return `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#111111;line-height:1.6">
      <h2 style="color:#A07830">Recibimos tu consulta</h2>
      <p>Hola ${escapeHtml(nombre)},</p>
      <p>
        Gracias por escribir a ${site.name}. Un abogado laboralista revisará tu caso y se comunicará
        contigo en menos de 24 horas hábiles.
      </p>
      <p>
        Si tu situación es urgente, puedes escribirnos por WhatsApp al
        <a href="https://wa.me/${whatsappNumber}">+${whatsappNumber}</a> o llamarnos al ${site.phone}.
      </p>
      <p style="font-size:12px;color:#6B7280">
        Este mensaje confirma la recepción de tu consulta y no constituye asesoría jurídica. Tu
        información está protegida por el secreto profesional del abogado (Decreto 196 de 1971).
      </p>
      <p style="font-size:12px;color:#6B7280">${site.legalName} · ${siteUrl}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
