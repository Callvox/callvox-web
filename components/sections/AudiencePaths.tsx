import Link from 'next/link'

const audiences = [
  {
    name: 'Carriers',
    href: '/get-started?type=carrier',
    points: ['Direct interconnects, not aggregated routes', 'One team to call when it matters'],
    cta: 'Request interconnect details',
    primary: true,
  },
  {
    name: 'MVNOs',
    href: '/solutions/mvnos',
    points: ['Voice, SMS, airtime and eSIM on one integration', 'One invoice and one support contact'],
    cta: 'MVNO solutions',
  },
  {
    name: 'Resellers',
    href: '/solutions/resellers',
    points: ['Voice, SMS, airtime and numbers from one partner', 'Rates quoted by corridor and volume'],
    cta: 'Become a partner',
  },
  {
    name: 'Enterprises',
    href: '/solutions/enterprises',
    points: ['Voice and numbers from one wholesale partner', 'One integration, one invoice'],
    cta: 'Enterprise solutions',
  },
]

export function AudiencePaths() {
  return (
    <section className="bg-paper py-28 lg:py-40">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <p className="label text-cyan-DEFAULT">03 — Who we serve</p>
          <h2 className="mt-5 text-5xl leading-[1.02] text-navy-DEFAULT lg:text-6xl">
            Start with <em>your</em> corridors.
          </h2>
        </div>

        <ul className="border-t border-navy-DEFAULT lg:col-span-8">
          {audiences.map((a, i) => (
            <li key={a.name} className="border-b border-navy-100">
              <Link
                href={a.href}
                className="group grid gap-4 py-8 transition-colors hover:bg-navy-50/70 md:grid-cols-12 md:items-baseline md:gap-6 md:px-4"
              >
                <span className="font-data text-xs text-navy-400 md:col-span-1">0{i + 1}</span>
                <span className="font-display text-4xl leading-none text-navy-DEFAULT md:col-span-4 lg:text-5xl">
                  {a.name}
                  {a.primary && <span className="label ml-3 align-middle text-cyan-DEFAULT">Primary focus</span>}
                </span>
                <ul className="space-y-1.5 text-[15px] text-navy-600 md:col-span-5">
                  {a.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <span className="label text-navy-DEFAULT transition-colors group-hover:text-cyan-DEFAULT md:col-span-2 md:text-right">
                  {a.cta} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
