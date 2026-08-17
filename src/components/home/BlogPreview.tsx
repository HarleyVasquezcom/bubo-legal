import { PostCard } from '@/components/blog/PostCard';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { getAllPosts } from '@/lib/blog';

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section tone="darker">
      <SectionHeading
        eyebrow="Blog jurídico"
        title="Últimos artículos"
        intro="Guías y análisis sobre derecho laboral colombiano, escritos por nuestros abogados."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.06} className="h-full">
            <PostCard post={post} className="h-full" />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <ButtonLink href="/blog" variant="outline">
          Ver todos los artículos
        </ButtonLink>
      </div>
    </Section>
  );
}
