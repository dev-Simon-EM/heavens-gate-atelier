import { ArrowRight } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';

const HERO_IMAGE =
  'https://images.pexels.com/photos/17474229/pexels-photo-17474229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const COVERED = ['Clothing Repairs', 'Alterations', 'School Uniforms', 'Zips and Buttons', 'Personal Style'];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 md:pt-14 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:pb-20 lg:pt-16">
        <Reveal className="lg:col-span-6">
          <SectionLabel>A fashion atelier in Maitama, Abuja</SectionLabel>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.08] text-ink-900 sm:text-6xl lg:text-7xl">
            Elegance in <span className="italic text-champagne-700">Every Detail.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-ink-500 sm:text-lg">
            Thoughtfully crafted clothing, refined details and a personal approach to style. Discover the art of
            looking and feeling your best with Heavens Gate Atelier.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#services" className="group">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink variant="secondary" href="#contact">
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6">
          <div className="relative overflow-hidden border border-ink-100">
            <img
              src={HERO_IMAGE}
              alt="Woman in a white turtleneck and dark trousers posing elegantly in a studio"
              width={940}
              height={650}
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03] sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
        </Reveal>
      </div>

      <div className="border-t border-ink-100 bg-ivory-50">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-700 sm:px-8 lg:px-12">
          {COVERED.map((item, index) => (
            <li key={item} className="flex items-center gap-8">
              {item}
              {index < COVERED.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-champagne-500 sm:block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
