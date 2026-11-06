import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandMark from '@/components/ui/BrandMark';
import ButtonLink from '@/components/ui/ButtonLink';
import { NAV_ITEMS } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/contact';

const CONTACT_MESSAGE = 'Hello Heavens Gate Atelier. I would like to enquire about your services.';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-[box-shadow,background-color] duration-300 ${
        isScrolled ? 'bg-ivory-100/95 shadow-header backdrop-blur-md' : 'bg-ivory-100'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600"
          aria-label="Heavens Gate Atelier, back to top"
        >
          <BrandMark className="h-11 w-11 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-wide text-ink-900">
              Heavens Gate
            </span>
            <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-champagne-700">
              Atelier
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm font-medium tracking-wide text-ink-700 transition-colors duration-300 hover:text-ink-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne-600"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-champagne-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href={buildWhatsAppUrl(CONTACT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-5 py-2.5 md:inline-flex"
          >
            Contact Us
          </ButtonLink>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink-900 transition-colors duration-300 hover:bg-ivory-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-600 md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink-100 bg-ivory-100 transition-[max-height,opacity,visibility] duration-300 ease-out md:hidden ${
          isMenuOpen ? 'max-h-[32rem] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="px-5 pb-8 pt-2 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block border-b border-ink-100 py-4 font-serif text-2xl text-ink-900 transition-colors duration-300 hover:text-champagne-700"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href={buildWhatsAppUrl(CONTACT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 w-full"
          >
            Contact Us
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
