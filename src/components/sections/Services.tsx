import { Check } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { SERVICES } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/contact';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-ink-100 bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-ink-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-6 text-base leading-[1.6] text-ink-500 sm:text-lg">
            Thoughtful craftsmanship and practical clothing solutions, with attention to fit, finish and detail.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <Reveal key={service.id}>
                <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                  <div className={`border border-ink-100 bg-ivory-50 md:col-span-6 ${isReversed ? 'md:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width={940}
                      height={650}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-contain"
                    />
                  </div>

                  <div className="md:col-span-6">
                    <p className="font-serif text-lg font-medium text-champagne-700">
                      {`0${index + 1}`}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-medium text-ink-900 sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-[1.6] text-ink-500">{service.summary}</p>

                    <ul className="mt-6 space-y-3 border-t border-ink-100 pt-6">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm text-ink-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success-600" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ButtonLink
                      variant="secondary"
                      href={buildWhatsAppUrl(
                        `Hello Heavens Gate Atelier. I would like to enquire about your ${service.title} service.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 px-5 py-3"
                    >
                      Enquire About This Service
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
