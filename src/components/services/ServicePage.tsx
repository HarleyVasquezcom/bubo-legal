import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { ServiceSections } from '@/components/services/ServiceSections';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { getService, serviceHref, type Service } from '@/lib/services';
import { site, siteUrl } from '@/lib/site';

export function ServicePage({ service }: { service: Service }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.excerpt,
          serviceType: service.title,
          areaServed: { '@type': 'Country', name: 'Colombia' },
          url: `${siteUrl}${serviceHref(service.slug)}`,
          provider: { '@type': 'LegalService', name: site.name, url: siteUrl },
        }}
      />

      <PageHero
        title={service.title}
        subtitle={service.heroSubtitle}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
        overlay={service.overlay}
        badge={service.badge}
        crumbs={[
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/#servicios' },
          { name: service.shortTitle, path: serviceHref(service.slug) },
        ]}
      />

      <ServiceSections sections={service.sections} />

      <section className="bg-gradient-to-br from-black-900 via-black-800 to-gold-600/30 py-16 sm:py-24">
        <div className="container-bubo grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Consulta gratuita</p>
            <h2 className="heading-display text-3xl sm:text-4xl">{service.cta.title}</h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-gray-300">{service.cta.body}</p>
            <p className="mt-6 text-xs leading-relaxed text-gray-500">
              Tu información está protegida por el secreto profesional del abogado (Decreto 196 de
              1971). No compartimos datos con terceros.
            </p>
          </div>
          <div className="rounded-sm border border-gold-600/40 bg-black-900/80 p-6 backdrop-blur sm:p-8">
            <ContactForm
              source={`servicio-${service.slug}`}
              extraFields={service.cta.extraFields}
              submitLabel={service.cta.submitLabel}
              defaultTipo={service.shortTitle}
              withAttachment={service.slug === 'contratos-de-trabajo'}
            />
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <Section tone="darker">
          <SectionHeading title="Servicios relacionados" align="center" as="h2" />
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} compact className="h-full" />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
