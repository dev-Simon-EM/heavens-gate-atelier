import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import BrandMark from '@/components/ui/BrandMark';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink-100 bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <Reveal className="flex justify-center lg:col-span-5">
          <BrandMark variant="full" className="w-full max-w-sm" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-ink-900 sm:text-5xl">
            Where Elegance Meets Craftsmanship.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-[1.6] text-ink-500 sm:text-lg">
            <p>
              Heavens Gate Atelier is inspired by the beauty of clothing, the confidence that comes with personal
              style and the thoughtful craftsmanship behind every detail.
            </p>
            <p>
              We believe clothing is more than something we wear. It is an expression of personality, elegance and
              individuality. From the choice of fabric to the smallest finishing detail, every element contributes
              to how a garment looks, feels and comes together.
            </p>
            <p>
              Our approach combines an appreciation for aesthetics with a commitment to quality workmanship,
              attention to detail and customer satisfaction.
            </p>
            <p>
              Whether it is creating a beautiful garment, refining its fit or giving an existing piece the attention
              it needs, our goal is to help people feel comfortable, confident and well presented.
            </p>
          </div>
          <p className="mt-10 border-l-2 border-champagne-500 pl-5 font-serif text-xl italic text-ink-700">
            Refined in style. Thoughtful in craft. Open to the future.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
