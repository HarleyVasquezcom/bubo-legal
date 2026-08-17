import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Lock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { ContactForm } from '@/components/forms/ContactForm';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ButtonLink } from '@/components/ui/Button';
import { pageMetadata } from '@/lib/seo';
import { site, whatsappNumber, whatsappUrl } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Contacto — Consulta Laboral Gratuita | BUBO Legal',
  description:
    'Contacta a BUBO Legal en Bogotá. Primera consulta laboral gratuita y confidencial. Teléfono, WhatsApp, email y formulario en línea.',
  path: '/contacto',
  keywords: [
    'consulta laboral gratis Colombia',
    'abogado laboral Bogotá contacto',
    'asesoría laboral WhatsApp',
  ],
});

const mapsQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}, Colombia`);
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const mapSrc = mapsApiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${mapsQuery}&zoom=16`
  : `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;

const socials = [
  { href: site.social.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: site.social.facebook, label: 'Facebook', Icon: FacebookIcon },
];

export default function ContactoPage() {
  return (
    <>
      <section className="border-b border-black-600 bg-black-900 pb-10 pt-32">
        <div className="container-bubo">
          <Breadcrumbs
            items={[
              { name: 'Inicio', path: '/' },
              { name: 'Contacto', path: '/contacto' },
            ]}
          />
          <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl">Contáctenos</h1>
          <p className="mt-4 max-w-2xl font-serif text-lg text-gold-100">
            Estamos aquí para escucharte. Primera consulta gratuita y confidencial.
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-2">
        <section className="relative bg-black-900 px-5 py-14 sm:px-8 lg:py-20 lg:pl-[max(1.25rem,calc((100vw-1200px)/2))]">
          <span
            className="absolute bottom-10 right-0 top-10 hidden w-px bg-gradient-to-b from-transparent via-gold-600 to-transparent lg:block"
            aria-hidden
          />
          <div className="mx-auto max-w-xl lg:mx-0">
            <p className="eyebrow mb-3">Oficina principal</p>
            <h2 className="heading-serif text-2xl">Bogotá, Colombia</h2>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                <div>
                  <p className="text-sm text-gray-300">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region}
                  </p>
                  <Link
                    href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs font-semibold uppercase tracking-widest text-gold-500 hover:text-gold-400"
                  >
                    Cómo llegar
                  </Link>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                <div className="text-sm text-gray-300">
                  <Link href={site.phoneHref} className="hover:text-gold-400">
                    {site.phone}
                  </Link>
                  <span className="block text-gray-500">Fijo {site.landline}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                <div>
                  <p className="text-sm text-gray-300">WhatsApp Business +{whatsappNumber}</p>
                  <ButtonLink
                    href={whatsappUrl()}
                    variant="whatsapp"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2"
                  >
                    Escribir por WhatsApp
                  </ButtonLink>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                <Link
                  href={`mailto:${site.email}`}
                  className="text-sm text-gray-300 hover:text-gold-400"
                >
                  {site.email}
                </Link>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                <p className="text-sm text-gray-300">{site.hours}</p>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-sm border border-black-600">
              <iframe
                title="Ubicación de la oficina de BUBO Legal en Bogotá"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[0.6] hue-rotate-180 invert-[0.9]"
              />
            </div>

            <div className="mt-8">
              <p className="eyebrow mb-3">Síguenos</p>
              <ul className="flex gap-4">
                {socials.map(({ href, label, Icon: SocialIcon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold-600/50 text-gold-500 transition-colors hover:border-gold-500 hover:text-gold-400"
                    >
                      <SocialIcon className="h-4 w-4" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black-800 px-5 py-14 sm:px-8 lg:py-20 lg:pr-[max(1.25rem,calc((100vw-1200px)/2))]">
          <div className="mx-auto max-w-xl lg:mx-0">
            <h2 className="heading-serif text-2xl">Cuéntanos tu caso</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Un abogado laboralista revisa cada consulta y responde en menos de 24 horas hábiles.
            </p>
            <div className="mt-8">
              <ContactForm source="contacto" withAttachment />
            </div>

            <div className="mt-8 flex gap-3 rounded-sm border border-gold-600/40 bg-black-900 p-5">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
              <p className="text-xs leading-relaxed text-gray-300">
                Tu información es 100% confidencial bajo el secreto profesional del abogado (Decreto
                196 de 1971). Tratamos tus datos personales conforme a la Ley 1581 de 2012 y a
                nuestra{' '}
                <Link href="/politica-de-privacidad" className="text-gold-500 hover:text-gold-400">
                  Política de Privacidad
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
