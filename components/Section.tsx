'use client'

import type { ReactNode } from 'react'
import { m as motion } from 'framer-motion'

/**
 * Shared page-section primitives so every page has the same rhythm:
 * one wrapper width (matches Nav, Footer and PageHero), one vertical padding,
 * one heading style, left-aligned.
 *
 * <Section tone="tint">
 *   <SectionHeader title="..." intro="..." />
 *   ...content
 * </Section>
 */
export function Section({
  tone = 'white',
  children,
  className = '',
}: {
  tone?: 'white' | 'tint'
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`${tone === 'tint' ? 'bg-navy-50/40' : 'bg-white'} py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeader({
  title,
  intro,
  className = 'mb-12 md:mb-16',
}: {
  title: ReactNode
  intro?: ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <h2 className="display-h2 font-bold text-navy-DEFAULT">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-navy-600">{intro}</p>}
    </motion.div>
  )
}
