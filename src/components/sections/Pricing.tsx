'use client';

import { PRICING_TIERS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-cream" aria-label="Pricing">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Pricing"
          title="Simple, Transparent Pricing"
          description="No hidden fees. No contracts. Cancel anytime."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <TiltCard
                className={`h-full flex flex-col ${
                  tier.highlighted
                    ? 'ring-2 ring-sage shadow-xl shadow-sage/10'
                    : ''
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-2xl font-bold text-forest">
                  {tier.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-forest">
                    ${tier.price}
                  </span>
                  <span className="text-earth">{tier.period}</span>
                </div>

                <p className="mt-2 text-sm text-earth">{tier.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <MagneticButton
                    href="#"
                    variant={tier.highlighted ? 'primary' : 'ghost'}
                    className="w-full"
                  >
                    Get Started
                  </MagneticButton>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
