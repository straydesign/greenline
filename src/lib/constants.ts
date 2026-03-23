export const SPRING_CONFIG = {
  gentle: { stiffness: 120, damping: 20, mass: 1 },
  snappy: { stiffness: 300, damping: 30, mass: 0.8 },
  bouncy: { stiffness: 400, damping: 15, mass: 0.5 },
} as const;

export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;
