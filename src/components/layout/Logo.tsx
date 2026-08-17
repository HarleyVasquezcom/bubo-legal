import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — inicio`}>
      <Image
        src="/images/bubo-logo.png"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 object-contain"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-wide text-white">
          BUBO <span className="text-gold-500">Legal</span>
        </span>
        {compact ? null : (
          <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gray-300">
            Abogados Laboralistas
          </span>
        )}
      </span>
    </Link>
  );
}
