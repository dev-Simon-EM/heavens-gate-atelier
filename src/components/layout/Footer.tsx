import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import BrandMark from '@/components/ui/BrandMark';
import { NAV_ITEMS, SERVICES } from '@/data/content';
import { BUSINESS, buildWhatsAppUrl } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ivory-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <BrandMark variant="full" className="h-28 w-28" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-500">
            A fashion atelier in Maitama, Abuja. Refined in style, thoughtful in craft, open to the future.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne-700">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-700 transition-colors duration-300 hover:text-champagne-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne-700">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="text-sm text-ink-700 transition-colors duration-300 hover:text-champagne-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne-700">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-ink-700">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-700" aria-hidden="true" />
              <a
                href={BUSINESS.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-champagne-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600"
              >
                {BUSINESS.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne-700" aria-hidden="true" />
              <a
                href={BUSINESS.phoneHref}
                className="transition-colors duration-300 hover:text-champagne-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-champagne-700" aria-hidden="true" />
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-ink-900 transition-colors duration-300 hover:text-champagne-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600"
              >
                Chat on WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Heavens Gate Atelier. All rights reserved.</p>
          <p>Elegance in every detail.</p>
        </div>
      </div>
    </footer>
  );
}
