'use client'

import type { ReactNode } from 'react'
import { LazyMotion } from 'framer-motion'

// Loads Framer Motion's animation features on demand instead of bundling them into every `motion` component.
const loadFeatures = () => import('@/lib/motion-features').then((m) => m.default)

export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}
