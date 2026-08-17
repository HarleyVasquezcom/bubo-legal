import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/lib/services';

export function ServicesGrid() {
  const featured = services.filter((service) => service.featured).slice(0, 6);

  return (
    <Section id="servicios" tone="darker">
      <SectionHeading
        eyebrow="Áreas de práctica"
        title="Nuestros servicios"
        intro="Siete áreas especializadas de derecho laboral y seguridad social, para trabajadores, sindicatos y empresas."
        align="center"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05} className="h-full">
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <ButtonLink href="/servicios/contratos-de-trabajo" variant="outline">
          Ver también contratos de trabajo
        </ButtonLink>
      </div>
    </Section>
  );
}
