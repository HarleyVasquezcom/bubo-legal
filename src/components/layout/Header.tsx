'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/layout/Logo';
import { ButtonLink } from '@/components/ui/Button';
import { serviceHref, services } from '@/lib/services';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const solid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-black-600 bg-black-900/95 backdrop-blur supports-[backdrop-filter]:bg-black-900/80'
          : 'bg-gradient-to-b from-black-900/80 to-transparent',
      )}
    >
      <div className="container-bubo flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(0, 1).map((link) => (
            <HeaderLink key={link.href} {...link} active={pathname === link.href} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors',
                pathname.startsWith('/servicios')
                  ? 'text-gold-400'
                  : 'text-white hover:text-gold-400',
              )}
            >
              Servicios
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')}
                aria-hidden
              />
            </button>
            <AnimatePresence>
              {servicesOpen ? (
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full w-80 overflow-hidden rounded-sm border border-black-600 bg-black-800 py-2 shadow-2xl"
                >
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={serviceHref(service.slug)}
                        className="block px-4 py-2.5 text-sm text-gray-300 transition-colors hover:bg-black-700 hover:text-gold-400"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <HeaderLink key={link.href} {...link} active={pathname === link.href} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm text-gray-300 transition-colors hover:text-gold-400 xl:flex"
          >
            <Phone className="h-4 w-4 text-gold-500" aria-hidden />
            {site.phone}
          </a>
          <ButtonLink href="/contacto" size="sm" className="hidden sm:inline-flex">
            Consulta gratuita
          </ButtonLink>
          <button
            type="button"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-sm border border-gold-600/50 p-2 text-gold-400 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto border-t border-black-600 bg-black-900 px-5 py-6 lg:hidden"
          >
            <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
              <MobileLink href="/">Inicio</MobileLink>
              <p className="mt-4 px-3 text-[11px] uppercase tracking-[0.25em] text-gold-500">
                Servicios
              </p>
              {services.map((service) => (
                <MobileLink key={service.slug} href={serviceHref(service.slug)}>
                  {service.title}
                </MobileLink>
              ))}
              <div className="my-3 h-px bg-black-600" />
              <MobileLink href="/nosotros">Nosotros</MobileLink>
              <MobileLink href="/blog">Blog</MobileLink>
              <MobileLink href="/preguntas-frecuentes">Preguntas frecuentes</MobileLink>
              <MobileLink href="/contacto">Contacto</MobileLink>
              <ButtonLink href="/contacto" className="mt-6 w-full" size="lg">
                Consulta gratuita
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-300"
              >
                <Phone className="h-4 w-4 text-gold-500" aria-hidden />
                {site.phone}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeaderLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors',
        active ? 'text-gold-400' : 'text-white hover:text-gold-400',
      )}
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="rounded-sm px-3 py-2.5 text-base text-gray-300 transition-colors hover:bg-black-800 hover:text-gold-400"
    >
      {children}
    </Link>
  );
}
