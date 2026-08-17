import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CalendarDays, Clock, TriangleAlert, UserRound } from 'lucide-react';
import { PostCard } from '@/components/blog/PostCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { getAllPosts, getPost, getRelatedPosts } from '@/lib/blog';
import { articleSchema, pageMetadata } from '@/lib/seo';
import { disclaimer, site } from '@/lib/site';
import { formatDate } from '@/lib/utils';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return pageMetadata({
    title: `${post.title} | BUBO Legal`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
  });
}

export default function BlogPostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          date: post.date,
          author: post.author,
          image: post.image,
        })}
      />

      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-32">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black-900/70" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/50 to-transparent"
          aria-hidden
        />
        <div className="container-bubo relative z-10 pb-12">
          <Breadcrumbs
            items={[
              { name: 'Inicio', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="heading-display max-w-4xl text-3xl sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <ul className="mt-6 flex flex-wrap gap-5 text-xs text-gray-300">
            <li className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-gold-500" aria-hidden />
              {post.author}
            </li>
            <li className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold-500" aria-hidden />
              {formatDate(post.date)}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-500" aria-hidden />
              {post.readingMinutes} min de lectura
            </li>
          </ul>
        </div>
      </section>

      <div className="container-bubo grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="prose prose-invert max-w-none prose-headings:font-serif prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-sm border border-black-600 bg-black-800 p-6">
            <h2 className="font-serif text-lg font-semibold text-gold-400">Sobre el autor</h2>
            <p className="mt-2 text-sm text-gray-300">{post.author}</p>
            <p className="text-xs text-gray-500">{post.authorRole}</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              {site.name} es una firma dedicada exclusivamente al derecho laboral colombiano.
            </p>
          </div>

          <div className="rounded-sm border border-gold-600/50 bg-gradient-to-br from-black-800 to-gold-600/10 p-6">
            <h2 className="font-serif text-lg font-semibold text-gold-400">
              ¿Tu caso se parece a esto?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              La primera consulta es gratuita, confidencial y sin compromiso.
            </p>
            <ButtonLink href="/contacto" size="sm" className="mt-4 w-full">
              Consulta gratuita
            </ButtonLink>
          </div>

          <div className="rounded-sm border border-black-600 bg-black-800 p-6">
            <h2 className="font-serif text-lg font-semibold text-gold-400">Temas</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-full border border-gold-600/40 px-3 py-1 text-xs text-gold-400"
                >
                  {keyword}
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-gold-500 hover:text-gold-400"
            >
              Ver todo el blog
            </Link>
          </div>
        </aside>
      </div>

      <div className="container-bubo pb-16">
        <p className="flex gap-3 rounded-sm border border-gold-600/40 bg-black-800 p-5 text-xs leading-relaxed text-gray-300">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
          Este artículo es informativo y no constituye asesoría jurídica. {disclaimer}
        </p>
      </div>

      {related.length > 0 ? (
        <section className="bg-black-800 py-16">
          <div className="container-bubo">
            <h2 className="heading-display mb-8 text-2xl sm:text-3xl">Artículos relacionados</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} className="h-full" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
