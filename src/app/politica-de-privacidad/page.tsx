import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalDocument } from '@/components/layout/LegalDocument';
import { pageMetadata } from '@/lib/seo';
import { site, siteUrl } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Política de Privacidad y Tratamiento de Datos | BUBO Legal',
  description:
    'Política de tratamiento de datos personales de BUBO Legal conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.',
  path: '/politica-de-privacidad',
});

export default function PoliticaPrivacidadPage() {
  return (
    <LegalDocument
      title="Política de Privacidad y Tratamiento de Datos Personales"
      updatedAt="16 de agosto de 2026"
      crumbs={[
        { name: 'Inicio', path: '/' },
        { name: 'Política de privacidad', path: '/politica-de-privacidad' },
      ]}
    >
      <p>
        {site.legalName} (en adelante «BUBO Legal»), responsable del tratamiento de datos
        personales, adopta la presente política en cumplimiento de la Ley 1581 de 2012, el Decreto
        1377 de 2013 y demás normas concordantes del régimen colombiano de protección de datos
        personales.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>Razón social: {site.legalName}</li>
        <li>
          Domicilio: {site.address.street}, {site.address.city}, {site.address.region}, Colombia
        </li>
        <li>Correo electrónico: {site.email}</li>
        <li>Teléfono: {site.phone}</li>
        <li>Sitio web: {siteUrl}</li>
      </ul>

      <h2>2. Datos personales que recolectamos</h2>
      <p>
        A través de los formularios del sitio web, WhatsApp, correo electrónico o llamadas
        telefónicas podemos recolectar:
      </p>
      <ul>
        <li>Datos de identificación: nombre completo y ciudad de residencia.</li>
        <li>Datos de contacto: correo electrónico y número de teléfono o WhatsApp.</li>
        <li>
          Información del caso: descripción de los hechos laborales y documentos que decidas
          adjuntar voluntariamente.
        </li>
        <li>
          Datos de navegación: dirección IP, tipo de dispositivo y páginas visitadas, cuando las
          herramientas de analítica están habilitadas.
        </li>
      </ul>
      <p>
        La información del caso puede incluir <strong>datos sensibles</strong> (por ejemplo, datos
        de salud en casos de incapacidad, invalidez o acoso laboral). Su tratamiento es facultativo
        y requiere tu autorización expresa, la cual otorgas al enviar el formulario.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <ul>
        <li>Atender, evaluar y responder tu consulta jurídica.</li>
        <li>Contactarte por teléfono, WhatsApp o correo electrónico para agendar la consulta.</li>
        <li>Prestar los servicios legales contratados y adelantar la gestión del proceso.</li>
        <li>Cumplir obligaciones legales, contables y de prevención de conflictos de interés.</li>
        <li>
          Enviar información jurídica de interés, siempre que lo hayas autorizado y con opción de
          retiro en cualquier momento.
        </li>
      </ul>

      <h2>4. Autorización del titular</h2>
      <p>
        La autorización se obtiene mediante la casilla de aceptación incluida en los formularios del
        sitio. Sin dicha autorización no es posible enviar la consulta ni iniciar el tratamiento de
        los datos.
      </p>

      <h2>5. Derechos del titular</h2>
      <p>Como titular de los datos personales tienes derecho a:</p>
      <ul>
        <li>Conocer, actualizar y rectificar tus datos personales.</li>
        <li>Solicitar prueba de la autorización otorgada.</li>
        <li>Ser informado sobre el uso que se ha dado a tus datos.</li>
        <li>
          Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones al
          régimen de protección de datos.
        </li>
        <li>
          Revocar la autorización o solicitar la supresión de los datos, salvo cuando exista un
          deber legal o contractual de conservarlos.
        </li>
        <li>Acceder de forma gratuita a los datos que hayan sido objeto de tratamiento.</li>
      </ul>

      <h2>6. Procedimiento para ejercer tus derechos</h2>
      <p>
        Envía tu solicitud al correo <Link href={`mailto:${site.email}`}>{site.email}</Link>{' '}
        indicando tu nombre, medio de contacto y la petición concreta. Las consultas se atienden en
        un máximo de diez (10) días hábiles y los reclamos en quince (15) días hábiles, prorrogables
        conforme a la ley.
      </p>

      <h2>7. Confidencialidad y secreto profesional</h2>
      <p>
        La información que compartes está amparada por el secreto profesional del abogado (Decreto
        196 de 1971). No vendemos, arrendamos ni compartimos tus datos con terceros con fines
        comerciales.
      </p>

      <h2>8. Encargados y transferencias</h2>
      <p>
        Utilizamos proveedores tecnológicos que actúan como encargados del tratamiento —alojamiento
        del sitio web, envío de correos transaccionales y analítica— vinculados por obligaciones de
        confidencialidad y seguridad. Algunos de estos proveedores pueden operar servidores fuera de
        Colombia, con niveles adecuados de protección.
      </p>

      <h2>9. Seguridad de la información</h2>
      <p>
        Aplicamos medidas técnicas, humanas y administrativas razonables para proteger los datos
        contra pérdida, acceso no autorizado, alteración o uso fraudulento, incluyendo cifrado en
        tránsito y control de acceso a la información de los casos.
      </p>

      <h2>10. Cookies y analítica</h2>
      <p>
        El sitio puede utilizar cookies propias y de terceros con fines técnicos y estadísticos.
        Puedes bloquearlas o eliminarlas desde la configuración de tu navegador; algunas funciones
        podrían verse afectadas.
      </p>

      <h2>11. Vigencia y conservación</h2>
      <p>
        Esta política rige desde su publicación. Los datos se conservan mientras exista la relación
        profesional y por los plazos legales de conservación documental aplicables a la práctica de
        la abogacía en Colombia.
      </p>

      <h2>12. Cambios en la política</h2>
      <p>
        Cualquier modificación sustancial será publicada en esta misma página con su nueva fecha de
        actualización.
      </p>
    </LegalDocument>
  );
}
