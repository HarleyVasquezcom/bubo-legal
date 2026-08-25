import { AlertTriangle, CheckCircle2, Quote } from 'lucide-react';
import { AcosoChecklist } from '@/components/services/AcosoChecklist';
import { LiquidacionCalculator } from '@/components/services/LiquidacionCalculator';
import { Accordion } from '@/components/ui/Accordion';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';
import type { ServiceSection } from '@/lib/services';
import { cn } from '@/lib/utils';

const columnClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

export function ServiceSections({ sections }: { sections: ServiceSection[] }) {
  return (
    <>
      {sections.map((section, index) => (
        <Section key={index} tone={index % 2 === 0 ? 'dark' : 'darker'}>
          <ServiceSectionBody section={section} />
        </Section>
      ))}
    </>
  );
}

function ServiceSectionBody({ section }: { section: ServiceSection }) {
  switch (section.kind) {
    case 'prose':
      return (
        <div>
          <SectionHeading title={section.title} />
          <div className="max-w-3xl space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      );

    case 'cards':
      return (
        <div>
          <SectionHeading title={section.title} intro={section.intro} />
          <div className={cn('grid gap-6', columnClasses[section.columns ?? 3])}>
            {section.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-sm border border-black-600 bg-black-800 p-6 transition-colors hover:border-gold-600/60">
                  <Icon name={item.icon} className="h-7 w-7 text-gold-500" />
                  <h3 className="font-serif text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case 'list': {
      const isAlert = section.variant === 'alert';
      return (
        <div>
          <SectionHeading title={section.title} intro={section.intro} />
          <ul
            className={cn(
              'grid gap-3 rounded-sm border p-6 sm:grid-cols-2',
              isAlert ? 'border-gold-600/60 bg-black-800' : 'border-black-600 bg-black-800',
            )}
          >
            {section.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                {isAlert ? (
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                ) : (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                )}
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case 'timeline':
      return (
        <div>
          <SectionHeading title={section.title} intro={section.intro} />
          <Timeline steps={section.steps} />
        </div>
      );

    case 'accordion':
      return (
        <div>
          <SectionHeading title={section.title} intro={section.intro} />
          <Accordion items={section.items} />
        </div>
      );

    case 'split':
      return (
        <div>
          <SectionHeading title={section.title} />
          <div className="grid gap-6 md:grid-cols-2">
            {section.panels.map((panel) => (
              <div
                key={panel.title}
                className="rounded-sm border border-black-600 bg-black-800 p-8"
              >
                <Icon name={panel.icon} className="h-8 w-8 text-gold-500" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-white">{panel.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{panel.body}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'table':
      return (
        <div>
          <SectionHeading title={section.title} intro={section.intro} />
          <div className="hidden overflow-hidden rounded-sm border border-black-600 md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-gold-600/20 text-gold-400">
                <tr>
                  {section.head.map((heading) => (
                    <th key={heading} scope="col" className="px-5 py-3 font-semibold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black-600 bg-black-800 text-gray-300">
                {section.rows.map((row) => (
                  <tr key={row.join('-')}>
                    {row.map((cell) => (
                      <td key={cell} className="px-5 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-4 md:hidden">
            {section.rows.map((row) => (
              <dl
                key={row.join('-')}
                className="rounded-sm border border-black-600 bg-black-800 p-5"
              >
                {row.map((cell, index) => (
                  <div key={cell} className="flex justify-between gap-4 py-1 text-sm">
                    <dt className="text-gray-500">{section.head[index]}</dt>
                    <dd className="text-right text-gray-300">{cell}</dd>
                  </div>
                ))}
              </dl>
            ))}
          </div>
        </div>
      );

    case 'pricing':
      return (
        <div>
          <SectionHeading title={section.title} intro={section.intro} />
          <div className="grid gap-6 lg:grid-cols-3">
            {section.plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.05} className="h-full">
                <div
                  className={cn(
                    'flex h-full flex-col rounded-sm border p-8',
                    index === 1 ? 'border-gold-500 bg-black-800' : 'border-black-600 bg-black-800',
                  )}
                >
                  <h3 className="font-serif text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 font-display text-2xl font-bold text-gold-500">{plan.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{plan.body}</p>
                  <ul className="mt-5 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-gray-300">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/contacto"
                    variant={index === 1 ? 'primary' : 'outline'}
                    className="mt-7"
                  >
                    Solicitar información
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case 'quotes':
      return (
        <div>
          <SectionHeading title={section.title} />
          <div className="grid gap-6 md:grid-cols-3">
            {section.items.map((item) => (
              <figure
                key={item.author}
                className="flex h-full flex-col gap-4 rounded-sm border border-black-600 bg-black-800 p-7"
              >
                <Quote className="h-6 w-6 text-gold-600" aria-hidden />
                <blockquote className="text-sm leading-relaxed text-gray-300">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-auto">
                  <span className="font-serif text-base text-gold-400">{item.author}</span>
                  <span className="block text-xs uppercase tracking-widest text-gray-500">
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      );

    case 'calculator':
      return (
        <div>
          <SectionHeading
            title="Calcula tu liquidación"
            intro="Estima cesantías, intereses, prima, vacaciones e indemnización según la legislación laboral colombiana."
          />
          <LiquidacionCalculator />
        </div>
      );

    case 'checklist':
      return (
        <div>
          <SectionHeading title={section.title} intro={section.intro} />
          <div className="max-w-3xl">
            <AcosoChecklist items={section.items} outcome={section.outcome} />
          </div>
        </div>
      );
  }
}
