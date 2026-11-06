import { CTA } from '@/components/CTA'
import { NetworkMap } from './NetworkMap'
import { STATS } from '@/lib/stats'

const stats = [
  { ...STATS.routes, note: 'Direct voice routes' },
  { ...STATS.countries, note: 'Reached through one platform' },
  { ...STATS.operators, note: 'Mobile operators for airtime' },
]

export function Hero() {
  return (
    <section className="surface-ink relative overflow-hidden bg-navy-DEFAULT text-white">
      <div className="bg-grid-ink absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 flex items-end justify-center lg:top-16 lg:items-center">
        <NetworkMap className="w-[170%] max-w-none sm:w-[130%] lg:w-[112%]" />
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_45%,rgba(13,43,78,0.94)_0%,rgba(13,43,78,0.7)_32%,rgba(13,43,78,0)_62%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-page gap-14 pb-20 pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-48 px-4 sm:px-6 lg:px-8">
        <div className="lg:col-span-8">
          <h1 className="text-[clamp(3rem,5.8vw,6.25rem)] leading-[0.98] text-white">
            <span className="reveal-line"><span>Direct routes to the</span></span>
            <span className="reveal-line"><span style={{ animationDelay: '0.1s' }}>world&apos;s <em className="whitespace-nowrap text-signal">fastest‑growing</em></span></span>
            <span className="reveal-line"><span style={{ animationDelay: '0.2s' }}>markets.</span></span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-navy-200">
            Voice, SMS, airtime, eSIM and numbers from one wholesale partner. One integration,
            one invoice and one support contact, built for carriers.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTA type="carrier" tone="dark" />
          </div>
        </div>

        <dl className="grid gap-px self-end overflow-hidden rounded-md border border-white/15 bg-white/15 lg:col-span-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy-900/85 px-6 py-5 backdrop-blur-sm">
              <dt className="label text-navy-300">{s.label}</dt>
              <dd className="font-data mt-1 text-5xl font-medium tracking-tight text-white">{s.value}</dd>
              <p className="mt-1 text-sm text-navy-200">{s.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
