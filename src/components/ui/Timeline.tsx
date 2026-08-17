import { Reveal } from '@/components/ui/Reveal';

export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="relative space-y-8 border-l border-gold-600/40 pl-8">
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-gold-500 bg-black-900 font-serif text-sm font-semibold text-gold-400">
            {index + 1}
          </span>
          <Reveal delay={index * 0.05}>
            <h3 className="font-serif text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-300">{step.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
