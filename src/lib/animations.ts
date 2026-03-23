import { EASE_SMOOTH } from './constants';

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
};

export const fadeUpBlur = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delay },
  },
});

export const springs = {
  gentle: { type: 'spring' as const, stiffness: 120, damping: 20, mass: 1 },
  snappy: { type: 'spring' as const, stiffness: 300, damping: 30, mass: 0.8 },
  bouncy: { type: 'spring' as const, stiffness: 400, damping: 15, mass: 0.5 },
};
