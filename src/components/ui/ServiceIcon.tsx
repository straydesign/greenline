import type { ReactNode } from 'react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

const icons: Record<string, ReactNode> = {
  mowing: (
    <path
      d="M3 21h18M4 18h1a2 2 0 002-2v-1a2 2 0 00-2-2H4m16 5h-1a2 2 0 01-2-2v-1a2 2 0 012-2h1M9 13V3m6 10V3M9 3h6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  flask: (
    <path
      d="M9 3h6m-5 0v6.5L4 18a1 1 0 001 1h14a1 1 0 001-1l-6-8.5V3m-4 0h6M8.5 14h7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  leaf: (
    <path
      d="M11 20A7 7 0 019.8 6.9C15.5 4.9 20 2 20 2s-1.2 8.5-5.5 13.5M12 10l-2.5 2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  layers: (
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  droplet: (
    <path
      d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function ServiceIcon({ name, className = '' }: ServiceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      {icons[name] ?? icons.leaf}
    </svg>
  );
}
