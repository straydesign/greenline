'use client';

import { STATS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import CountUp from '@/components/ui/CountUp';
import AnimateIn from '@/components/ui/AnimateIn';

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream" aria-label="About">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Why Greenline"
          title="Your Neighbors Already Know"
          description="We've been keeping lawns in Erie County looking their best for over a decade. The results speak for themselves."
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-forest md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-earth">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
