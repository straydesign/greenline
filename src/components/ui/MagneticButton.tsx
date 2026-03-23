'use client';

import { useRef, useState, type ReactNode, type CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { isMobile, prefersReducedMotion } from '@/lib/mobile';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = '',
  style,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mobile = isMobile();
  const reduced = prefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    if (dist > 80) {
      setPosition({ x: 0, y: 0 });
      return;
    }
    const strength = 0.15 * (1 - dist / 80);
    setPosition({ x: distX * strength, y: distY * strength });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary:
      'bg-sage text-white hover:bg-sage-light shadow-lg shadow-sage/25 hover:shadow-xl hover:shadow-sage/30',
    secondary:
      'bg-forest text-white hover:bg-forest/90 shadow-lg shadow-forest/25',
    ghost:
      'bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-white',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-6 py-3.5 text-base sm:px-9 sm:py-4.5 sm:text-lg',
  };

  const buttonClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const isInternal = href?.startsWith('/') || href?.startsWith('#');

  const innerElement = href && isInternal ? (
    <Link href={href} className={buttonClasses} style={style} onClick={onClick}>
      {children}
    </Link>
  ) : href ? (
    <a href={href} className={buttonClasses} style={style} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={buttonClasses} style={style} disabled={disabled}>
      {children}
    </button>
  );

  if (mobile) return <div>{innerElement}</div>;

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {innerElement}
    </motion.div>
  );
}
