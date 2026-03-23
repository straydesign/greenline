'use client';

import AnimateIn from '@/components/ui/AnimateIn';
import GradientText from '@/components/ui/GradientText';
import MagneticButton from '@/components/ui/MagneticButton';
import GrainOverlay from '@/components/ui/GrainOverlay';

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-forest py-24 md:py-32"
      aria-label="Call to action"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        src="/videos/grass-closeup.mp4"
        poster="/images/parallax-2.jpg"
      />
      <GrainOverlay />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <AnimateIn>
          <h2 className="font-display text-3xl font-bold text-cream md:text-5xl lg:text-6xl">
            Ready for a Yard{' '}
            <GradientText scrollLinked>You&apos;re Proud Of?</GradientText>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="mt-6 text-lg text-cream/70">
            Get a free walkthrough and estimate. No pressure, no commitment — just a plan for a better lawn.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton href="#" size="lg" className="bg-amber hover:bg-amber/90 shadow-amber/25 hover:shadow-amber/30">
              Schedule Free Walkthrough
            </MagneticButton>
            <MagneticButton href="tel:8145550147" variant="ghost" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
              Call (814) 555-0147
            </MagneticButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
