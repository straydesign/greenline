let _isMobile: boolean | null = null;

export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  if (_isMobile === null) {
    _isMobile = window.innerWidth < 768;
  }
  return _isMobile;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
