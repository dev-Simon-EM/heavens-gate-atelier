import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { CELEBRATIONS } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/contact';

export default function Celebrations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CELEBRATIONS[activeIndex];

  return (
    <section id="celebrations" className="scroll-mt-20 border-t border-ink-100 bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Occasions</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-ink-900 sm:text-5xl">
              Dressed With Intention for Every Occasion
            </h2>
            <p className="mt-6 leading-[1.6] text-ink-500">
              Festive seasons and special days are a chance to express your style. Bring us the outfit you have in
              mind and we will refine the fit and finish so that you feel confident from the first moment.
            </p>

            <div
              role="tablist"
              aria-label="Celebrations"
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-ink-200"
            >
              {CELEBRATIONS.map((celebration, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={celebration.id}
                    type="button"
                    role="tab"
                    id={`celebration-tab-${celebration.id}`}
                    aria-selected={isActive}
                    aria-controls="celebration-panel"
                    onClick={() => setActiveIndex(index)}
                    className={`relative -mb-px py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600 ${
                      isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                    }`}
                  >
                    {celebration.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-champagne-600 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div
            id="celebration-panel"
            role="tabpanel"
            aria-labelledby={`celebration-tab-${active.id}`}
            className="lg:col-span-7"
          >
            <div key={active.id} className="panel-enter grid gap-8 md:grid-cols-12 md:gap-10">
              <div className="border border-ink-100 bg-ivory-50 md:col-span-6">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  width={940}
                  height={650}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center md:col-span-6">
                <h3 className="font-serif text-3xl font-medium text-ink-900">{active.title}</h3>
                <p className="mt-4 leading-[1.6] text-ink-500">{active.summary}</p>
                <ButtonLink
                  variant="primary"
                  href={buildWhatsAppUrl(
                    `Hello Heavens Gate Atelier. I would like to enquire about styling and fit for ${active.title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 self-start"
                >
                  Plan Your Look
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
