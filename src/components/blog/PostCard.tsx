import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { PostMeta } from '@/lib/blog';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';

export function PostCard({
  post,
  featured = false,
  className,
}: {
  post: PostMeta;
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-sm border border-black-600 bg-black-800 transition-colors hover:border-gold-600/60',
        featured && 'md:flex-row',
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'relative block aspect-[16/9] overflow-hidden',
          featured && 'md:aspect-auto md:w-1/2',
        )}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={featured ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-black-900/40" aria-hidden />
      </Link>

      <div className={cn('flex flex-1 flex-col gap-3 p-6', featured && 'md:justify-center md:p-8')}>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{post.category}</Badge>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {post.readingMinutes} min de lectura
          </span>
        </div>
        <h3
          className={cn(
            'font-serif font-semibold text-gold-400',
            featured ? 'text-2xl' : 'text-xl',
          )}
        >
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold-100">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-gray-300">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-widest text-gold-500"
        >
          Leer más
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
