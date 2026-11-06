import { CTA, type CTAType } from '@/components/CTA'

/**
 * The single closing band used by every page. Flat, left-aligned, no card.
 * Each page passes its own heading and one sentence of body copy.
 */
export function PageCTA({
  title,
  body,
  type,
  tone = 'dark',
}: {
  title: string
  body: string
  type?: CTAType
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <section
      className={
        dark
          ? 'surface-ink bg-navy-DEFAULT text-white'
          : 'border-t border-navy-100 bg-paper text-navy-DEFAULT'
      }
    >
      <div className="mx-auto grid max-w-page items-end gap-8 py-16 md:grid-cols-[1fr_auto] md:py-20 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="display-h2">{title}</h2>
          <p className={`mt-4 text-lg ${dark ? 'text-navy-200' : 'text-navy-600'}`}>{body}</p>
        </div>
        <div>
          <CTA type={type} tone={tone} />
        </div>
      </div>
    </section>
  )
}
