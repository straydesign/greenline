'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="section-padding bg-cream overflow-hidden" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Reviews"
          title="What Our Clients Say"
        />
      </div>

      {/* Horizontal scrolling carousel */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide md:px-[calc(50vw-36rem)]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            className="w-80 shrink-0 rounded-xl border border-border bg-surface p-6 shadow-sm"
            style={{ scrollSnapAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Stars */}
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <svg key={j} className="h-4 w-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-foreground">
              &ldquo;{testimonial.text}&rdquo;
            </p>

            <div className="mt-4 border-t border-border pt-3">
              <p className="text-sm font-semibold text-forest">{testimonial.name}</p>
              <p className="text-xs text-earth">{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
