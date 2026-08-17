import type { Metadata } from 'next';
import { FaqExplorer } from '@/components/faq/FaqExplorer';
import { PageHero } from '@/components/layout/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { allFaqItems, faqCategories } from '@/lib/faq';
import { faqSchema, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Preguntas Frecuentes sobre Derecho Laboral | BUBO Legal',
  description:
    'Respuestas claras a las dudas más comunes sobre contratos, despidos, liquidaciones, pensiones y acoso laboral en Colombia.',
  path: '/preguntas-frecuentes',
  keywords: [
    'preguntas frecuentes derecho laboral',
    'dudas laborales Colombia',
    'liquidación laboral preguntas',
    'pensión Colpensiones dudas',
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqItems)} />
      <PageHero
        compact
        title="Preguntas frecuentes"
        subtitle="Las dudas laborales más comunes en Colombia, respondidas por nuestros abogados."
        crumbs={[
          { name: 'Inicio', path: '/' },
          { name: 'Preguntas frecuentes', path: '/preguntas-frecuentes' },
        ]}
      />
      <Section>
        <FaqExplorer categories={faqCategories} />
      </Section>
    </>
  );
}
