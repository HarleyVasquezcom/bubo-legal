import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';

export function LegalDocument({
  title,
  updatedAt,
  crumbs,
  children,
}: {
  title: string;
  updatedAt: string;
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-black-600 bg-black-900 pb-10 pt-32">
        <div className="container-bubo">
          <Breadcrumbs items={crumbs} />
          <h1 className="heading-display text-3xl sm:text-4xl">{title}</h1>
          <p className="mt-3 text-xs uppercase tracking-widest text-gold-500">
            Última actualización: {updatedAt}
          </p>
        </div>
      </section>
      <div className="container-bubo py-14">
        <article className="prose prose-invert max-w-3xl prose-headings:font-serif">
          {children}
        </article>
      </div>
    </>
  );
}
