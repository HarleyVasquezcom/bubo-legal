import Link from 'next/link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { Logo } from '@/components/layout/Logo';
import { serviceHref, services } from '@/lib/services';
import { site } from '@/lib/site';

const companyLinks = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
  { label: 'Contacto', href: '/contacto' },
];

const legalLinks = [
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
];

export function Footer() {
  return (
    <footer className="border-t border-black-600 bg-black-800">
      <div className="container-bubo grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-gray-300">{site.tagline}</p>
          <p className="text-sm leading-relaxed text-gray-500">{site.description}</p>
          <div className="flex gap-3">
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="text-gold-500 transition-colors hover:text-gold-400"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="text-gold-500 transition-colors hover:text-gold-400"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="text-gold-500 transition-colors hover:text-gold-400"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <FooterColumn title="Servicios">
          {services.map((service) => (
            <FooterLink key={service.slug} href={serviceHref(service.slug)}>
              {service.shortTitle}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Firma">
          {companyLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
          {legalLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Contacto">
          <li className="flex gap-2.5 text-sm text-gray-300">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
            <span>
              {site.address.street}
              <br />
              {site.address.city}, Colombia
            </span>
          </li>
          <li className="flex gap-2.5 text-sm text-gray-300">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
            <a href={site.phoneHref} className="transition-colors hover:text-gold-400">
              {site.phone}
            </a>
          </li>
          <li className="flex gap-2.5 text-sm text-gray-300">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-400">
              {site.email}
            </a>
          </li>
          <li className="flex gap-2.5 text-sm text-gray-300">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
            <span>{site.hours}</span>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-black-600">
        <div className="container-bubo flex flex-col gap-3 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
          </p>
          <p className="sm:text-right">{site.registration}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-serif text-lg font-semibold text-gold-400">{title}</h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-gray-300 transition-colors hover:text-gold-400">
        {children}
      </Link>
    </li>
  );
}
