import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { STEPS } from '@/data/content';

export default function HowItWorks() {
  return (
    <section className="border-t border-ink-800 bg-ink-900 py-24 text-ivory-50 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <SectionLabel tone="dark">How It Works</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-ivory-50 sm:text-5xl">
            From First Conversation to Finished Piece
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative">
                <Reveal delay={index * 120} className="flex h-full flex-col">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne-400 bg-ink-800 text-champagne-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="hidden h-px flex-1 bg-champagne-400/60 md:block" aria-hidden="true" />
                  </div>
                  <p className="mt-6 font-serif text-lg font-medium text-champagne-300">
                    {`Step ${index + 1}`}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-medium text-ivory-50">{step.title}</h3>
                  <p className="mt-3 leading-[1.6] text-ink-300">{step.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
