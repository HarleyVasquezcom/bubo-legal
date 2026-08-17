import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
  tone = 'gold',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'gold' | 'outline';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest',
        tone === 'gold' ? 'bg-gold-500 text-black-900' : 'border border-gold-600/60 text-gold-400',
        className,
      )}
    >
      {children}
    </span>
  );
}
