import type { ReactNode } from 'react'
import { CTA, type CTAType } from '@/components/CTA'
import { HeroBackdrop } from '@/components/sections/HeroBackdrop'

/**
 * The one hero used by every page: one heading, one
 * paragraph, one CTA. No eyebrow pills or breadcrumbs (the nav and heading already
 * say where you are), no repeated stat blocks, and no width caps on the
 * heading or paragraph so lines only wrap at the page edge.
 * Pass `aside` for a right-hand column (7/5 split).
 */
export function PageHero({
  title,
  body,
  cta,
  tone = 'dark',
  align = 'left',
  aside,
  compact = false,
}: {
  title: ReactNode
  body?: ReactNode
  cta?: { type?: CTAType } | false
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  aside?: ReactNode
  compact?: boolean
}) {
  const dark = tone === 'dark'
  const center = align === 'center' && !aside
  const text = (
    <div className={center ? 'text-center' : ''}>
      <h1 className={`display-h1 ${dark ? 'text-white' : 'text-navy-DEFAULT'}`}>{title}</h1>
      {body && (
        <p className={`mt-6 text-lg leading-relaxed md:text-xl ${center ? 'text-balance' : ''} ${dark ? 'text-navy-200' : 'text-navy-600'}`}>{body}</p>
      )}
      {cta !== false && cta !== undefined && (
        <div className={`mt-10 flex ${center ? 'justify-center' : ''}`}>
          <CTA type={cta.type} tone={tone} />
        </div>
      )}
    </div>
  )

  return (
    <section
      className={`relative overflow-hidden ${
        dark ? 'surface-ink bg-navy-DEFAULT' : 'bg-white'
      } ${compact ? 'pb-4 pt-14' : 'py-20 md:py-28'}`}
    >
      {dark && <HeroBackdrop />}
      <div className="hero-inner relative z-10">
        {aside ? (
          <div className="grid items-center gap-12 lg:grid-cols-[7fr_5fr]">
            {text}
            <div className="hidden lg:block">{aside}</div>
          </div>
        ) : (
          text
        )}
      </div>
    </section>
  )
}
