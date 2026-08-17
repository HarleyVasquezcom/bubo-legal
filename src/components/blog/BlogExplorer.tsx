'use client';

import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PostCard } from '@/components/blog/PostCard';
import type { PostMeta } from '@/lib/blog';
import { cn } from '@/lib/utils';

export function BlogExplorer({ posts, categories }: { posts: PostMeta[]; categories: string[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === 'Todos' || post.category === category;
      const matchesQuery =
        needle.length === 0 ||
        `${post.title} ${post.description} ${post.keywords.join(' ')}`
          .toLowerCase()
          .includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  const [featured, ...rest] = filtered;

  return (
    <div>
      <div className="relative mb-6 max-w-xl">
        <Search
          className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar artículos por tema o palabra clave"
          aria-label="Buscar artículos"
          className="field pl-11"
        />
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {['Todos', ...categories].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={cn(
              'rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors',
              category === item
                ? 'border-gold-500 bg-gold-500 text-black-900'
                : 'border-black-600 text-gray-300 hover:border-gold-600 hover:text-gold-400',
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-sm border border-black-600 bg-black-800 p-8 text-center text-sm text-gray-300">
          No encontramos artículos para esa búsqueda. Prueba con otra palabra clave.
        </p>
      ) : (
        <div className="space-y-8">
          <PostCard post={featured} featured />
          {rest.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
