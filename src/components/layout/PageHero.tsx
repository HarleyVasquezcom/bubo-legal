import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';
import { cn } from '@/lib/utils';

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  overlay = 'bg-black-900/65',
  crumbs,
  badge,
  compact = false,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  overlay?: string;
  crumbs: Crumb[];
  badge?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        'relative flex items-end overflow-hidden',
        compact ? 'min-h-[42vh] pt-28' : 'min-h-[70vh] pt-32',
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className={cn('absolute inset-0', overlay)} />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/50 to-transparent"
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black-800 to-black-900"
          aria-hidden
        />
      )}

      <div className="container-bubo relative z-10 pb-14">
        <Breadcrumbs items={crumbs} />
        {badge ? <Badge className="mb-4">{badge}</Badge> : null}
        <h1 className="heading-display max-w-4xl text-3xl sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl font-serif text-lg text-gold-100 sm:text-xl">{subtitle}</p>
        ) : null}
      </div>

      {compact ? null : (
        <ChevronDown
          className="absolute bottom-5 left-1/2 z-10 h-6 w-6 -translate-x-1/2 animate-scroll-hint text-gold-500"
          aria-hidden
        />
      )}
    </section>
  );
}
