import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { site } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&w=1920&q=70"
        alt="Panorámica de Bogotá al atardecer"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black-900/75" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/40 to-black-900/70"
        aria-hidden
      />

      <div className="container-bubo relative z-10 flex flex-col items-center py-28 text-center">
        <Image
          src="/images/bubo-logo.png"
          alt="Emblema de BUBO Legal"
          width={110}
          height={110}
          priority
          className="mb-6 h-24 w-24 object-contain"
        />
        <p className="eyebrow mb-4 animate-fade-up">Abogados laboralistas en Colombia</p>
        <h1 className="heading-display animate-fade-up text-4xl sm:text-5xl md:text-6xl">
          BUBO <span className="text-gold-500">Legal</span>
        </h1>
        <p className="mt-5 max-w-2xl animate-fade-up font-serif text-xl text-gold-100 sm:text-2xl md:text-3xl">
          {site.tagline}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300">
          Especialistas en derecho laboral y seguridad social. Representamos trabajadores,
          sindicatos y empresas en todo el territorio colombiano.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contacto" size="lg">
            Consulta gratuita
          </ButtonLink>
          <ButtonLink href="#servicios" variant="outline" size="lg">
            Conoce nuestros servicios
          </ButtonLink>
        </div>
      </div>

      <ChevronDown
        className="absolute bottom-6 left-1/2 z-10 h-7 w-7 -translate-x-1/2 animate-scroll-hint text-gold-500"
        aria-hidden
      />
    </section>
  );
}
