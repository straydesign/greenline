'use client';

import { SERVICES } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream" aria-label="Services">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="What We Do"
          title="Lawn Care, Done Right"
          description="From weekly mowing to full-property maintenance — we handle every blade so you don't have to."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard className="h-full">
                <span className="mb-4 block text-3xl">{service.icon}</span>
                <h3 className="font-display text-xl font-bold text-forest">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-earth">
                  {service.description}
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
