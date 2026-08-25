import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalDocument } from '@/components/layout/LegalDocument';
import { pageMetadata } from '@/lib/seo';
import { site, siteUrl } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Términos y Condiciones de Uso | BUBO Legal',
  description:
    'Términos y condiciones de uso del sitio web de BUBO Legal: alcance de la información, propiedad intelectual y limitación de responsabilidad.',
  path: '/terminos-y-condiciones',
});

export default function TerminosPage() {
  return (
    <LegalDocument
      title="Términos y Condiciones de Uso"
      updatedAt="16 de agosto de 2026"
      crumbs={[
        { name: 'Inicio', path: '/' },
        { name: 'Términos y condiciones', path: '/terminos-y-condiciones' },
      ]}
    >
      <p>
        El acceso y uso de {siteUrl} implica la aceptación plena de estos términos y condiciones. Si
        no estás de acuerdo con ellos, te pedimos abstenerte de usar el sitio.
      </p>

      <h2>1. Titular del sitio</h2>
      <p>
        El sitio es operado por {site.legalName}, con domicilio en {site.address.street},{' '}
        {site.address.city}, Colombia. Contacto:{' '}
        <Link href={`mailto:${site.email}`}>{site.email}</Link>.
      </p>

      <h2>2. Carácter informativo del contenido</h2>
      <p>
        Los contenidos publicados —incluidos artículos del blog, guías, calculadoras y respuestas
        frecuentes— tienen finalidad exclusivamente informativa y general. No constituyen asesoría
        jurídica, no crean relación abogado-cliente y no deben usarse como sustituto de una consulta
        profesional sobre un caso concreto.
      </p>

      <h2>3. Herramientas de cálculo</h2>
      <p>
        La calculadora de liquidación entrega estimaciones aproximadas a partir de los datos que
        ingresas y de supuestos generales de la legislación laboral colombiana. Los valores reales
        pueden variar según el contrato, los pagos variables, los descuentos y la causa de
        terminación. BUBO Legal no responde por decisiones tomadas exclusivamente con base en esos
        resultados.
      </p>

      <h2>4. Relación abogado-cliente</h2>
      <p>
        La relación profesional solo surge una vez suscrito el respectivo contrato de prestación de
        servicios jurídicos o poder, previa evaluación del caso y verificación de la ausencia de
        conflictos de interés. El envío de un formulario no genera, por sí mismo, dicha relación.
      </p>

      <h2>5. Uso permitido</h2>
      <ul>
        <li>No utilizar el sitio para fines ilícitos o contrarios a la buena fe.</li>
        <li>
          No intentar acceder de manera no autorizada a los sistemas, ni interferir en su
          funcionamiento.
        </li>
        <li>No enviar información falsa, de terceros sin autorización, ni contenido malicioso.</li>
      </ul>

      <h2>6. Propiedad intelectual</h2>
      <p>
        La marca BUBO Legal, los textos, la identidad visual y el diseño del sitio están protegidos
        por la normativa de propiedad intelectual. Se permite citar fragmentos con atribución y
        enlace a la fuente; queda prohibida la reproducción total con fines comerciales sin
        autorización escrita.
      </p>

      <h2>7. Enlaces a terceros</h2>
      <p>
        El sitio puede incluir enlaces a páginas de terceros (por ejemplo, normas oficiales o redes
        sociales). No controlamos su contenido ni asumimos responsabilidad por él.
      </p>

      <h2>8. Limitación de responsabilidad</h2>
      <p>
        BUBO Legal no garantiza la disponibilidad ininterrumpida del sitio ni la ausencia de errores
        tipográficos o de actualización normativa. En la máxima medida permitida por la ley, no
        responde por daños derivados del uso o imposibilidad de uso del sitio.
      </p>

      <h2>9. Protección de datos</h2>
      <p>
        El tratamiento de datos personales se rige por nuestra{' '}
        <Link href="/politica-de-privacidad">Política de Privacidad</Link>, conforme a la Ley 1581
        de 2012.
      </p>

      <h2>10. Ley aplicable y jurisdicción</h2>
      <p>
        Estos términos se rigen por la legislación colombiana. Cualquier controversia se someterá a
        los jueces competentes de la ciudad de {site.address.city}, Colombia.
      </p>

      <h2>11. Modificaciones</h2>
      <p>
        Podemos actualizar estos términos en cualquier momento. La versión vigente será siempre la
        publicada en esta página, con su fecha de actualización.
      </p>
    </LegalDocument>
  );
}
