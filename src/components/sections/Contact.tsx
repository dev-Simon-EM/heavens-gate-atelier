import { ArrowRight, MapPin, Phone } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import EnquiryForm from '@/components/sections/EnquiryForm';
import { BUSINESS, buildWhatsAppUrl } from '@/lib/contact';

const CONTACT_MESSAGE =
  'Hello Heavens Gate Atelier. I would like to enquire about your services.';

const linkClasses =
  'underline decoration-champagne-400 underline-offset-4 transition-colors duration-300 hover:text-champagne-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-300';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-ink-800 bg-ink-900 py-24 text-ivory-50 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel tone="dark">Contact and Location</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-ivory-50 sm:text-5xl">
            Let’s Begin a Conversation About Your Style.
          </h2>
          <p className="mt-6 leading-[1.6] text-ink-300">
            WhatsApp is the easiest way to reach us. Send a message, share a photo of the piece you have in mind if
            you have one, and we will get back to you personally.
          </p>

          <ButtonLink
            variant="light"
            href={buildWhatsAppUrl(CONTACT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10"
          >
            Chat on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </ButtonLink>

          <dl className="mt-14 space-y-8 border-t border-ink-800 pt-10">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-champagne-300" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-champagne-300">Location</dt>
                <dd className="mt-2 leading-[1.6] text-ivory-100">
                  <p>Business: Heavens Gate Atelier</p>
                  <p>{BUSINESS.address}</p>
                  <a
                    href={BUSINESS.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 inline-block text-sm font-semibold ${linkClasses}`}
                  >
                    View on Google Maps
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-champagne-300" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-champagne-300">Phone and WhatsApp</dt>
                <dd className="mt-2">
                  <a href={BUSINESS.phoneHref} className={`text-lg text-ivory-50 ${linkClasses}`}>
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
