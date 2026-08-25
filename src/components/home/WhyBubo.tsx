import { Section, SectionHeading } from '@/components/ui/Section';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';

const pillars: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'scale',
    title: 'Expertise Laboral',
    body: 'Nos dedicamos exclusivamente al derecho laboral y la seguridad social colombiana. Conocemos el Código Sustantivo del Trabajo, la jurisprudencia de la Sala Laboral y la práctica real de los juzgados.',
  },
  {
    icon: 'award',
    title: 'Resultados Comprobados',
    body: 'Más de 2.000 casos resueltos entre conciliaciones, tutelas y demandas ordinarias, con una tasa de éxito del 98% en los procesos que asumimos.',
  },
  {
    icon: 'hands',
    title: 'Atención Personalizada',
    body: 'Cada caso lo lleva un abogado con nombre propio. Respondemos por WhatsApp, explicamos sin tecnicismos y te informamos en cada etapa del proceso.',
  },
];

export function WhyBubo() {
  return (
    <Section id="por-que-bubo" tone="dark">
      <SectionHeading
        eyebrow="Por qué BUBO Legal"
        title="Tres razones para confiarnos tu caso"
        align="center"
      />
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <div className="flex h-full flex-col items-center gap-4 rounded-sm border border-black-600 bg-black-800 p-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-600/50">
                <Icon name={pillar.icon} className="h-7 w-7 text-gold-500" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{pillar.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
