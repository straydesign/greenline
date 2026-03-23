'use client';

import { type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { SmoothScroll } from './SmoothScroll';
import ScrollProgress from './ScrollProgress';

const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((mod) => ({ default: mod.CustomCursor })),
  { ssr: false }
);

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}
