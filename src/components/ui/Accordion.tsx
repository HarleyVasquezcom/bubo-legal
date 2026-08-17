'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export type AccordionItem = { q: string; a: string };

export function Accordion({
  items,
  className,
  defaultOpen,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);

  return (
    <div
      className={cn(
        'divide-y divide-black-600 overflow-hidden rounded-sm border border-black-600',
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="bg-black-800">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-black-700"
              >
                <span className="font-serif text-lg font-semibold text-gold-400">{item.q}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-gray-300">{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
