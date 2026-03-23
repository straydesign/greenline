'use client';

import { PORTFOLIO_ITEMS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import BeforeAfter from '@/components/ui/BeforeAfter';
import AnimateIn from '@/components/ui/AnimateIn';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-warm-white" aria-label="Portfolio">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Our Work"
          title="See the Difference"
          description="Drag the slider to compare before and after. Real properties, real results."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.15}>
              <div>
                <BeforeAfter
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
                <h3 className="mt-4 font-display text-lg font-bold text-forest">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-earth">{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
