'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import type { FaqCategory } from '@/lib/faq';
import { serviceHref } from '@/lib/services';

export function FaqExplorer({ categories }: { categories: FaqCategory[] }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return categories;
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          `${item.q} ${item.a}`.toLowerCase().includes(needle),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, query]);

  const total = filtered.reduce((count, category) => count + category.items.length, 0);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div>
        <div className="relative mb-8">
          <Search
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Busca tu pregunta: liquidación, pensión, acoso…"
            aria-label="Buscar preguntas frecuentes"
            className="field pl-11"
          />
          <p className="mt-2 text-xs text-gray-500" aria-live="polite">
            {total} {total === 1 ? 'pregunta encontrada' : 'preguntas encontradas'}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-sm border border-black-600 bg-black-800 p-8 text-center text-sm text-gray-300">
            No encontramos una respuesta para esa búsqueda. Escríbenos y te respondemos
            directamente.
          </p>
        ) : (
          <div className="space-y-12">
            {filtered.map((category) => (
              <section key={category.id} id={category.id}>
                <div className="mb-4 flex items-center gap-3">
                  <Icon name={category.icon} className="h-6 w-6 text-gold-500" />
                  <h2 className="font-display text-2xl font-bold text-white">{category.title}</h2>
                </div>
                <Accordion items={category.items} />
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/contacto" size="sm">
                    Consulta gratuita
                  </ButtonLink>
                  {category.relatedService ? (
                    <ButtonLink
                      href={serviceHref(category.relatedService)}
                      size="sm"
                      variant="outline"
                    >
                      Ver el servicio
                    </ButtonLink>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      <aside className="h-fit rounded-sm border border-black-600 bg-black-800 p-6 lg:sticky lg:top-28">
        <h2 className="mb-4 font-serif text-lg font-semibold text-gold-400">Categorías</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`#${category.id}`}
                className="text-sm text-gray-300 transition-colors hover:text-gold-400"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-black-600 pt-6">
          <p className="text-sm text-gray-300">
            ¿No encuentras tu respuesta? La primera consulta con un abogado es gratuita.
          </p>
          <ButtonLink href="/contacto" size="sm" className="mt-4 w-full">
            Escríbenos
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}
