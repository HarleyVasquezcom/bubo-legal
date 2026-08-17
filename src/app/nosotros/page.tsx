import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LinkedinIcon } from '@/components/ui/SocialIcons';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { milestones, recognitions, team } from '@/lib/team';

export const metadata: Metadata = pageMetadata({
  title: 'Nosotros — Abogados Laboralistas en Colombia | BUBO Legal',
  description:
    'Conoce a BUBO Legal: más de 15 años defendiendo los derechos de los trabajadores colombianos. Historia, valores y equipo de abogados laboralistas en Bogotá.',
  path: '/nosotros',
  keywords: [
    'abogados laboralistas Colombia',
    'firma de abogados Bogotá',
    'equipo abogados laborales',
    'BUBO Legal',
  ],
});

const pillars = [
  {
    icon: 'target' as const,
    title: 'Misión',
    body: 'Garantizar el acceso a la justicia laboral para todos los colombianos, con excelencia jurídica y compromiso humano.',
  },
  {
    icon: 'scale' as const,
    title: 'Visión',
    body: 'Ser la firma de derecho laboral de referencia en Colombia para 2030.',
  },
  {
    icon: 'award' as const,
    title: 'Valores',
    body: 'Integridad · Excelencia · Confidencialidad · Compromiso · Acceso a la justicia.',
  },
];

const highlights = [
  { value: 15, prefix: '+', label: 'años de experiencia en derecho laboral colombiano' },
  { value: 2000, prefix: '+', label: 'clientes satisfechos en todo el país' },
  { value: 98, suffix: '%', label: 'tasa de éxito en conciliaciones y demandas' },
  { value: 7, label: 'áreas de práctica laboral especializada' },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Conoce a BUBO Legal"
        subtitle="Más de una década defendiendo los derechos de los trabajadores colombianos."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=70"
        imageAlt="Equipo de abogados reunido en una oficina profesional"
        crumbs={[
          { name: 'Inicio', path: '/' },
          { name: 'Nosotros', path: '/nosotros' },
        ]}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <SectionHeading eyebrow="Nuestra historia" title="Nacimos para equilibrar la balanza" />
            <div className="space-y-4 text-base leading-relaxed text-gray-300">
              <p>
                BUBO Legal nació en Bogotá en 2011, cuando un grupo de abogados laboralistas
                comprobó que la mayoría de los trabajadores colombianos desconocía sus derechos y
                renunciaba a reclamarlos por miedo o desinformación. Desde el primer día decidimos
                dedicarnos exclusivamente al derecho laboral: una sola materia, estudiada a fondo.
              </p>
              <p>
                Con los años ampliamos la práctica hacia el derecho colectivo, la seguridad social y
                la consultoría empresarial preventiva. Hoy acompañamos tanto a trabajadores que
                enfrentan un despido o un caso de acoso, como a empresas que quieren cumplir la ley
                y evitar litigios.
              </p>
              <p>
                Atendemos casos en todo el país con atención virtual y presencial, y mantenemos la
                misma promesa del primer día: la primera consulta es gratuita, confidencial y sin
                compromiso.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-black-600">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=70"
              alt="Biblioteca jurídica con volúmenes de derecho laboral"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black-900/30" aria-hidden />
          </div>
        </div>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 0.05} className="h-full">
              <li className="h-full rounded-sm border border-black-600 bg-black-800 p-6">
                <span className="font-display text-2xl font-bold text-gold-500">
                  {milestone.year}
                </span>
                <h3 className="mt-2 font-serif text-lg font-semibold text-white">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{milestone.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="darker">
        <SectionHeading eyebrow="Principios" title="Misión, visión y valores" align="center" />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col items-center gap-4 rounded-sm border border-black-600 bg-black-900 p-8 text-center">
                <Icon name={pillar.icon} className="h-9 w-9 text-gold-500" />
                <h3 className="font-serif text-xl font-semibold text-gold-400">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="El equipo"
          title="Abogados que litigan tu caso, no un call center"
          intro="Cada proceso lo lleva un abogado con tarjeta profesional vigente, que te informa personalmente sobre cada avance."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.04} className="h-full">
              <article className="group flex h-full flex-col items-center rounded-sm border border-black-600 bg-black-800 p-7 text-center transition-colors hover:border-gold-500">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-gold-500">
                  <Image
                    src={member.image}
                    alt={`Retrato de ${member.name}`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-gray-300">{member.specialty}</p>
                <p className="mt-2 text-xs text-gray-500">{member.license}</p>

                <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-focus-within:max-h-64 group-focus-within:opacity-100 group-hover:max-h-64 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-gray-300">{member.bio}</p>
                  <ul className="mt-3 flex flex-wrap justify-center gap-2">
                    {member.areas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-gold-600/50 px-3 py-1 text-xs text-gold-400"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                  className="mt-5 text-gold-500 transition-colors hover:text-gold-400"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="darker">
        <SectionHeading title="Reconocimientos y membresías" align="center" />
        <ul className="flex snap-x gap-4 overflow-x-auto pb-2 md:justify-center md:overflow-visible">
          {recognitions.map((item) => (
            <li
              key={item}
              className="min-w-[220px] snap-center rounded-sm border border-black-600 bg-black-900 px-6 py-5 text-center font-serif text-sm text-gold-400 md:min-w-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-gray-500">{site.registration}</p>
      </Section>

      <Section>
        <SectionHeading title="¿Por qué elegirnos?" align="center" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <Counter
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                className="font-display text-4xl font-bold text-gold-500"
              />
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-to-br from-black-900 via-black-800 to-gold-600/30 py-16 text-center sm:py-20">
        <div className="container-bubo">
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl">
            ¿Listo para trabajar con los mejores en derecho laboral?
          </h2>
          <ButtonLink href="/contacto" size="lg" className="mt-8">
            Solicita tu consulta gratuita
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
