'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { isMobile, prefersReducedMotion } from '@/lib/mobile';

interface ParallaxWindowProps {
  imageUrl: string;
  videoUrl?: string;
  alt: string;
  height?: string;
  overlayOpacity?: number;
}

function ParallaxWindowDesktop({
  imageUrl,
  videoUrl,
  alt,
  height = '60vh',
  overlayOpacity = 0.15,
}: ParallaxWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height }}
      role="img"
      aria-label={alt}
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            style={{ height: '130%', top: '-15%', position: 'absolute' }}
            src={videoUrl}
            poster={imageUrl}
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})`, height: '130%', top: '-15%' }}
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-forest" style={{ opacity: overlayOpacity }} />
    </div>
  );
}

function ParallaxWindowStatic({
  imageUrl,
  videoUrl,
  alt,
  height = '60vh',
  overlayOpacity = 0.15,
}: ParallaxWindowProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src={videoUrl}
            poster={imageUrl}
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-forest" style={{ opacity: overlayOpacity }} />
    </div>
  );
}

export default function ParallaxWindow(props: ParallaxWindowProps) {
  if (isMobile() || prefersReducedMotion()) return <ParallaxWindowStatic {...props} />;
  return <ParallaxWindowDesktop {...props} />;
}
