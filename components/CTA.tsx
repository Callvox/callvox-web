import Link from 'next/link'

/**
 * The one call-to-action used across the site. Always reads "Contact us" and
 * always leads to the signup form. `type` pre-selects the buyer type in the form.
 *
 * tone="dark"  -> for navy / dark surfaces
 * tone="light" -> for white / paper surfaces
 * size="md"    -> default (page CTAs); size="sm" -> compact (navigation)
 */
export type CTAType = 'carrier' | 'mvno' | 'reseller' | 'enterprise' | 'other'

const base =
  'inline-flex items-center justify-center rounded-md font-medium tracking-[-0.005em] ' +
  'transition-all duration-200 ease-out active:translate-y-px ' +
  'motion-reduce:transition-colors motion-reduce:transform-none'

const sizes = {
  md: 'h-12 px-7 text-[15px]',
  sm: 'h-10 px-5 text-sm',
}

const tones = {
  dark:
    'bg-signal text-navy-DEFAULT ' +
    'shadow-[0_0_0_1px_rgba(56,189,248,0.4),0_8px_24px_-8px_rgba(56,189,248,0.5)] ' +
    'hover:-translate-y-px hover:brightness-110 ' +
    'hover:shadow-[0_0_0_1px_rgba(56,189,248,0.6),0_12px_28px_-8px_rgba(56,189,248,0.7)] ' +
    'motion-reduce:hover:translate-y-0',
  light:
    'text-white bg-gradient-to-b from-navy-700 to-navy-DEFAULT ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_2px_rgba(13,43,78,0.25)] ' +
    'hover:from-navy-600 hover:to-navy-700 hover:-translate-y-px ' +
    'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_16px_-6px_rgba(13,43,78,0.45)] ' +
    'motion-reduce:hover:translate-y-0',
}

export function CTA({
  type,
  tone = 'light',
  size = 'md',
  className = '',
  onClick,
}: {
  type?: CTAType
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md'
  className?: string
  onClick?: () => void
}) {
  const href = type ? `/get-started?type=${type}` : '/get-started'
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${tones[tone]} ${className}`}
    >
      Contact us
    </Link>
  )
}
