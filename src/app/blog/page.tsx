import type { Metadata } from 'next';
import { BlogExplorer } from '@/components/blog/BlogExplorer';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/Section';
import { getAllPosts, getCategories } from '@/lib/blog';
import { pageMetadata } from '@/lib/seo';
import { disclaimer } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Blog Jurídico Laboral | BUBO Legal',
  description:
    'Artículos y guías prácticas sobre derecho laboral colombiano: liquidaciones, despidos, pensiones, acoso laboral y contratos.',
  path: '/blog',
  keywords: [
    'blog derecho laboral Colombia',
    'guías laborales Colombia',
    'liquidación laboral Colombia',
    'noticias laborales Colombia',
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        compact
        title="Blog jurídico laboral"
        subtitle="Análisis y guías prácticas escritas por los abogados de BUBO Legal."
        crumbs={[
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />
      <Section>
        <BlogExplorer posts={posts} categories={getCategories(posts)} />
        <p className="mt-12 text-xs text-gray-500">{disclaimer}</p>
      </Section>
    </>
  );
}
