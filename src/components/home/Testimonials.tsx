import { Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

const testimonials = [
  {
    quote:
      'Me despidieron después de siete años sin justa causa y la empresa me ofreció una liquidación incompleta. BUBO Legal logró la indemnización completa en conciliación, sin llegar a juicio.',
    author: 'Carlos M.',
    city: 'Bogotá',
    matter: 'Despido sin justa causa',
  },
  {
    quote:
      'Colpensiones me negó la pensión de vejez dos veces. Reconstruyeron mi historia laboral, encontraron 96 semanas que no estaban reportadas y hoy recibo mi pensión con retroactivo.',
    author: 'Gloria P.',
    city: 'Medellín',
    matter: 'Pensión de vejez',
  },
  {
    quote:
      'Viví dos años de acoso de mi jefe directo. Me acompañaron ante el Comité de Convivencia y el Ministerio de Trabajo con una estrategia clara y mucho respeto por mi situación.',
    author: 'Andrés R.',
    city: 'Cali',
    matter: 'Acoso laboral',
  },
  {
    quote:
      'Como empresa necesitábamos ordenar contratos y reglamento interno. La auditoría laboral nos evitó problemas que ni sabíamos que teníamos.',
    author: 'Marcela V.',
    city: 'Barranquilla',
    matter: 'Consultoría empresarial',
  },
];

export function Testimonials() {
  return (
    <Section tone="dark">
      <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestros clientes" align="center" />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 0.06} className="h-full">
            <figure className="flex h-full flex-col gap-4 rounded-sm border border-black-600 bg-black-800 p-7">
              <Quote className="h-7 w-7 text-gold-600" aria-hidden />
              <blockquote className="text-sm leading-relaxed text-gray-300">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto">
                <div className="mb-1 flex gap-0.5" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-3.5 w-3.5 fill-gold-500 text-gold-500"
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="font-serif text-base text-gold-400">{testimonial.author}</span>
                <span className="block text-xs uppercase tracking-widest text-gray-500">
                  {testimonial.city} · {testimonial.matter}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
