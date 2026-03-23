'use client';

import WordReveal from '@/components/ui/WordReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import HeroCarousel from '@/components/ui/HeroCarousel';
import AnimateIn from '@/components/ui/AnimateIn';
import { HERO_IMAGES, SITE } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <HeroCarousel images={HERO_IMAGES} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimateIn delay={0.2}>
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-sage-light">
            {SITE.serviceArea}
          </p>
        </AnimateIn>

        <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          <WordReveal text={SITE.tagline} delay={0.4} stagger={0.12} />
        </h1>

        <AnimateIn delay={1}>
          <p className="mt-6 text-lg text-cream/80 md:text-xl">
            Professional lawn care that keeps your property looking sharp — without you lifting a finger.
          </p>
        </AnimateIn>

        <AnimateIn delay={1.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton href="#pricing" size="lg">
              Get Free Estimate
            </MagneticButton>
            <MagneticButton href="#portfolio" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-forest">
              See Our Work
            </MagneticButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
