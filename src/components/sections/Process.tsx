'use client';

import { PROCESS_STEPS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateIn from '@/components/ui/AnimateIn';

export default function Process() {
  return (
    <section id="process" className="section-padding bg-warm-white" aria-label="Process">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label="How It Works"
          title="Four Steps to a Better Lawn"
          description="No contracts, no hassle. Here's how we get started."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <AnimateIn
                key={step.step}
                delay={i * 0.15}
                direction={i % 2 === 0 ? 'left' : 'right'}
              >
                <div className="relative flex gap-6 md:gap-12">
                  {/* Step number */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-lg font-bold text-white shadow-lg shadow-sage/25">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="font-display text-xl font-bold text-forest">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-earth">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
