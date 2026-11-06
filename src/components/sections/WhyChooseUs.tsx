import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { VALUES } from '@/data/content';

const VALUES_IMAGE =
  'https://images.pexels.com/photos/7147587/pexels-photo-7147587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <img
            src={VALUES_IMAGE}
            alt="Dressmaker working at a desk with a flexible ruler in a studio"
            width={940}
            height={650}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>Craftsmanship and Values</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-ink-900 sm:text-5xl">
              Care in Every Stitch. Attention in Every Detail.
            </h2>
          </Reveal>

          <ol className="mt-12">
            {VALUES.map((value, index) => (
              <li key={value.title} className="border-t border-ink-200">
                <Reveal delay={index * 80} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr] sm:gap-6">
                  <span className="font-serif text-2xl font-medium text-champagne-700">
                    {`0${index + 1}`}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-ink-900">{value.title}</h3>
                    <p className="mt-2 leading-[1.6] text-ink-500">{value.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
