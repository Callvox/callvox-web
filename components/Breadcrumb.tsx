import Link from 'next/link'

export type Crumb = { label: string; href?: string }

/**
 * Site-wide breadcrumb. Small mono caps, a signal hairline as a marker, thin
 * slash separators, and the current page set apart in full-strength colour.
 * Parent crumbs without an href (e.g. "Products", which has no index page)
 * render as plain text.
 */
export function Breadcrumb({
  items,
  tone = 'dark',
  align = 'left',
  className = '',
}: {
  items: Crumb[]
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
}) {
  const dark = tone === 'dark'
  const rule = dark ? 'bg-signal' : 'bg-cyan-DEFAULT'
  const parent = dark ? 'text-navy-300 hover:text-white' : 'text-navy-400 hover:text-navy-DEFAULT'
  const current = dark ? 'text-white' : 'text-navy-DEFAULT'
  const sep = dark ? 'text-white/25' : 'text-navy-DEFAULT/25'

  return (
    <nav aria-label="Breadcrumb" className={`${align === 'center' ? 'flex justify-center' : ''} ${className}`}>
      <ol className="font-data flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.18em]">
        <li aria-hidden className={`mr-1 h-px w-8 ${rule}`} />
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-3">
              {item.href && !last ? (
                <Link href={item.href} className={`${parent} underline-offset-4 transition-colors hover:underline`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? current : parent.split(' ')[0]}>
                  {item.label}
                </span>
              )}
              {!last && (
                <span aria-hidden className={sep}>
                  /
                </span>
              )}
            </li>
          )
        })}
        {align === 'center' && <li aria-hidden className={`ml-1 h-px w-8 ${rule}`} />}
      </ol>
    </nav>
  )
}
