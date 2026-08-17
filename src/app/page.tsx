import type { Metadata } from 'next';
import { BlogPreview } from '@/components/home/BlogPreview';
import { ConsultaCTA } from '@/components/home/ConsultaCTA';
import { Hero } from '@/components/home/Hero';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { Testimonials } from '@/components/home/Testimonials';
import { TrustBar } from '@/components/home/TrustBar';
import { WhyBubo } from '@/components/home/WhyBubo';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'BUBO Legal — Abogados Laboralistas en Colombia',
  description:
    'Firma especializada en derecho laboral colombiano. Despidos, pensiones, acoso laboral. Primera consulta gratis. Bogotá, Colombia.',
  path: '/',
  keywords: [
    'abogado laboral Colombia',
    'abogados laboralistas Bogotá',
    'consulta laboral gratis',
    'derecho laboral colombiano',
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyBubo />
      <ServicesGrid />
      <ConsultaCTA />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
