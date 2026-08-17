'use client';

import Link from 'next/link';
import { CheckCircle2, Loader2, Lock, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { consultaTypes } from '@/lib/services';
import { cn } from '@/lib/utils';

export type ExtraField = 'organizacion' | 'cargo' | 'empresa' | 'nit' | 'tamano' | 'fechaDespido';

const extraFieldLabels: Record<ExtraField, string> = {
  organizacion: 'Organización o sindicato',
  cargo: 'Cargo',
  empresa: 'Empresa',
  nit: 'NIT',
  tamano: 'Tamaño de la empresa',
  fechaDespido: 'Fecha del despido',
};

const empresaSizes = ['1 a 10 empleados', '11 a 50', '51 a 200', '201 a 1.000', 'Más de 1.000'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm({
  source,
  variant = 'full',
  extraFields = [],
  submitLabel = 'Enviar consulta',
  defaultTipo,
  withAttachment = false,
  className,
}: {
  source: string;
  variant?: 'full' | 'compact';
  extraFields?: ExtraField[];
  submitLabel?: string;
  defaultTipo?: string;
  withAttachment?: boolean;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('loading');
    setError(null);

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        body: new FormData(form),
      });
      const payload = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error ?? 'No pudimos enviar tu consulta.');
      }
      form.reset();
      setStatus('success');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Error inesperado.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className={cn(
          'flex flex-col items-center gap-3 rounded-sm border border-gold-600/50 bg-black-800 p-8 text-center',
          className,
        )}
      >
        <CheckCircle2 className="h-10 w-10 text-gold-500" aria-hidden />
        <p className="font-serif text-xl text-gold-400">Recibimos tu consulta</p>
        <p className="text-sm text-gray-300">
          Un abogado de BUBO Legal se comunicará contigo en menos de 24 horas hábiles.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn('space-y-4', className)} noValidate={false}>
      <input type="hidden" name="origen" value={source} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="nombre" label="Nombre completo" required autoComplete="name" />
        <Field name="telefono" label="Teléfono / WhatsApp" required type="tel" autoComplete="tel" />
        <Field name="email" label="Correo electrónico" required type="email" autoComplete="email" />
        {variant === 'full' ? (
          <Field name="ciudad" label="Ciudad" required autoComplete="address-level2" />
        ) : null}
        {extraFields.map((field) =>
          field === 'tamano' ? (
            <div key={field}>
              <label className="field-label" htmlFor={field}>
                {extraFieldLabels[field]}
              </label>
              <select id={field} name={field} className="field">
                <option value="">Selecciona una opción</option>
                {empresaSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <Field
              key={field}
              name={field}
              label={extraFieldLabels[field]}
              type={field === 'fechaDespido' ? 'date' : 'text'}
            />
          ),
        )}
        <div className={variant === 'full' ? 'sm:col-span-2' : undefined}>
          <label className="field-label" htmlFor="tipoConsulta">
            Tipo de consulta
          </label>
          <select
            id="tipoConsulta"
            name="tipoConsulta"
            className="field"
            defaultValue={defaultTipo ?? ''}
            required
          >
            <option value="">Selecciona el área</option>
            {consultaTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="mensaje">
          Descripción del caso
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={variant === 'full' ? 5 : 3}
          maxLength={500}
          required
          placeholder="Cuéntanos brevemente qué ocurrió (máximo 500 caracteres)."
          className="field resize-y"
        />
      </div>

      {withAttachment ? (
        <div>
          <label className="field-label" htmlFor="adjunto">
            Adjuntar documento (opcional — PDF, Word o imagen, máx. 4 MB)
          </label>
          <input
            id="adjunto"
            name="adjunto"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="field file:mr-3 file:rounded-sm file:border-0 file:bg-gold-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:text-black-900"
          />
        </div>
      ) : null}

      <label className="flex items-start gap-3 text-xs leading-relaxed text-gray-300">
        <input
          type="checkbox"
          name="politica"
          required
          value="aceptada"
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold-500"
        />
        <span>
          Acepto la{' '}
          <Link href="/politica-de-privacidad" className="text-gold-400 underline">
            Política de Privacidad
          </Link>{' '}
          y el tratamiento de mis datos personales conforme a la Ley 1581 de 2012.
        </span>
      </label>

      {status === 'error' && error ? (
        <p className="flex items-center gap-2 text-sm text-gold-400" role="alert">
          <TriangleAlert className="h-4 w-4" aria-hidden />
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Enviando…
          </>
        ) : (
          submitLabel
        )}
      </Button>

      <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-500">
        <Lock className="h-3.5 w-3.5 text-gold-600" aria-hidden />
        Tu información es confidencial y está protegida por el secreto profesional del abogado.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
        {required ? <span className="text-gold-500"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field"
      />
    </div>
  );
}
