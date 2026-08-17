import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';
import { serviceHref, type Service } from '@/lib/services';
import { cn } from '@/lib/utils';

export function ServiceCard({
  service,
  className,
  compact = false,
}: {
  service: Pick<Service, 'slug' | 'title' | 'excerpt' | 'icon'>;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={serviceHref(service.slug)}
      className={cn(
        'group flex flex-col gap-3 rounded-sm border border-black-600 bg-black-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]',
        className,
      )}
    >
      <Icon
        name={service.icon}
        className="h-8 w-8 text-gold-500 transition-colors group-hover:text-gold-400"
      />
      <h3 className="font-serif text-xl font-semibold text-white">{service.title}</h3>
      {compact ? null : <p className="text-sm leading-relaxed text-gray-300">{service.excerpt}</p>}
      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-widest text-gold-500">
        Ver servicio
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
