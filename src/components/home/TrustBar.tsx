import { site } from '@/lib/site';

export function TrustBar() {
  return (
    <div className="border-y border-gold-600/30 bg-black-800">
      <dl className="container-bubo grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-3xl font-bold text-gold-500 sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-widest text-gray-300">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
