import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  id,
  tone = 'dark',
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: 'dark' | 'darker' | 'transparent';
}) {
  const tones = {
    dark: 'bg-black-900',
    darker: 'bg-black-800',
    transparent: '',
  } as const;

  return (
    <section id={id} className={cn('py-16 sm:py-24', tones[tone], className)}>
      <div className="container-bubo">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  as?: 'h2' | 'h3';
}) {
  return (
    <div className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Tag className="heading-display text-2xl sm:text-3xl md:text-4xl">{title}</Tag>
      <div className={cn('gold-rule mt-5', align === 'center' && 'mx-auto')} />
      {intro ? <p className="mt-5 text-base leading-relaxed text-gray-300">{intro}</p> : null}
    </div>
  );
}
