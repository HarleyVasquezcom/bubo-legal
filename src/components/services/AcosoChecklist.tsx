'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function AcosoChecklist({ items, outcome }: { items: string[]; outcome: string }) {
  const [checked, setChecked] = useState<number[]>([]);
  const toggle = (index: number) =>
    setChecked((current) =>
      current.includes(index) ? current.filter((value) => value !== index) : [...current, index],
    );

  const flagged = checked.length >= 2;

  return (
    <div>
      <ul className="space-y-3">
        {items.map((item, index) => {
          const isChecked = checked.includes(index);
          return (
            <li key={item}>
              <button
                type="button"
                aria-pressed={isChecked}
                onClick={() => toggle(index)}
                className={cn(
                  'flex w-full items-start gap-3 rounded-sm border p-4 text-left transition-colors',
                  isChecked
                    ? 'border-gold-500 bg-gold-600/10'
                    : 'border-black-600 bg-black-800 hover:border-gold-600/60',
                )}
              >
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border',
                    isChecked ? 'border-gold-500 bg-gold-500' : 'border-gold-600/60',
                  )}
                >
                  {isChecked ? <Check className="h-3.5 w-3.5 text-black-900" aria-hidden /> : null}
                </span>
                <span className="text-sm leading-relaxed text-gray-300">{item}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {flagged ? (
        <div
          aria-live="polite"
          className="mt-6 rounded-sm border border-gold-500 bg-gold-600/10 p-6"
        >
          <p className="font-serif text-lg text-gold-400">{outcome}</p>
          <ButtonLink href="/contacto" className="mt-4">
            Habla con un abogado
          </ButtonLink>
        </div>
      ) : (
        <p className="mt-6 text-xs text-gray-500" aria-live="polite">
          Marca las situaciones que reconoces en tu día a día laboral. Nadie más ve tus respuestas.
        </p>
      )}
    </div>
  );
}
