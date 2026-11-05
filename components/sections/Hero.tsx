import Link from 'next/link'
import { NetworkMap } from './NetworkMap'

const stats = [
  { value: '500+', label: 'Routes' },
  { value: '150+', label: 'Countries' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '20 yrs', label: 'In emerging markets' },
]

// Illustrative sample values — not live traffic.
const corridors = [
  { route: 'US → NG', asr: '61.4', acd: '3:42', pdd: '2.1' },
  { route: 'UK → IN', asr: '58.9', acd: '4:05', pdd: '2.4' },
  { route: 'AE → PK', asr: '63.2', acd: '3:18', pdd: '1.9' },
  { route: 'ES → CO', asr: '66.7', acd: '5:11', pdd: '1.7' },
  { route: 'US → PH', asr: '57.8', acd: '4:27', pdd: '2.6' },
]

export function Hero() {
  return (
    <section className="surface-ink relative overflow-hidden bg-navy-DEFAULT text-white">
      <div className="bg-grid-ink absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />

      {/* Network map */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 flex items-end justify-center lg:top-16 lg:items-center">
        <NetworkMap className="w-[170%] max-w-none sm:w-[130%] lg:w-[112%]" />
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_45%,rgba(11,20,36,0.94)_0%,rgba(11,20,36,0.7)_32%,rgba(11,20,36,0)_62%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[88rem] gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-28 lg:pt-48">
        <div className="lg:col-span-7">
          <p className="label text-signal">Wholesale telecom infrastructure</p>
          <h1 className="mt-6 text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.98] text-white">
            <span className="reveal-line"><span>Every route.</span></span>
            <span className="reveal-line"><span style={{ animationDelay: '0.1s' }}>One <em className="text-signal">interconnect.</em></span></span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy-200">
            Voice, messaging, airtime, eSIM and numbers for carriers, MVNOs and resellers —
            built for the world&apos;s fastest-growing markets, delivered through one API and one invoice.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-signal px-7 text-[15px] font-semibold text-navy-DEFAULT transition-colors hover:bg-white"
            >
              Work with us
            </Link>
            <Link
              href="/coverage"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-7 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Explore coverage
            </Link>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="label text-navy-300">{s.label}</dt>
                <dd className="font-data mt-2 text-3xl font-medium tracking-tight text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Telemetry panel */}
        <div className="lg:col-span-5 lg:self-end">
          <div className="rounded-md border border-white/15 bg-navy-900/80 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <span className="label flex items-center gap-2 text-navy-200">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" aria-hidden />
                Route quality
              </span>
              <span className="label text-navy-300">Sample data</span>
            </div>
            <table className="font-data w-full text-sm">
              <thead>
                <tr className="label text-navy-300">
                  <th className="px-5 py-3 text-left font-normal">Corridor</th>
                  <th className="px-2 py-3 text-right font-normal">ASR %</th>
                  <th className="px-2 py-3 text-right font-normal">ACD</th>
                  <th className="px-5 py-3 text-right font-normal">PDD s</th>
                </tr>
              </thead>
              <tbody>
                {corridors.map((c) => (
                  <tr key={c.route} className="border-t border-white/10">
                    <td className="px-5 py-3 text-white">{c.route}</td>
                    <td className="px-2 py-3 text-right text-signal">{c.asr}</td>
                    <td className="px-2 py-3 text-right text-navy-200">{c.acd}</td>
                    <td className="px-5 py-3 text-right text-navy-200">{c.pdd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
