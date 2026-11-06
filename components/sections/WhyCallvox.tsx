import { STATS } from '@/lib/stats'

const proofs = [
  {
    number: STATS.routes.value,
    label: 'Direct routes',
    body: 'Voice interconnects built corridor by corridor, across Latin America, Africa, South Asia and the Middle East.',
  },
  {
    number: STATS.countries.value,
    label: 'Countries',
    body: 'One platform and one invoice for destinations around the world, with a single team to call when it matters.',
  },
  {
    number: STATS.operators.value,
    label: 'Operators',
    body: 'Airtime top-ups across the mobile operators your customers actually use, delivered through one API.',
  },
]

export function WhyCallvox() {
  return (
    <section className="surface-ink bg-grid-ink bg-navy-DEFAULT py-28 text-white lg:py-40">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <h2 className="display-h2">
          Latin America and Africa <em className="text-signal">came first.</em>
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-navy-200">
          Callvox started in 2007 as a voice carrier focused on Latin America and Africa, before most
          wholesale providers invested there. Prepaid mobile dominates these corridors, and that is
          where we have built our depth.
        </p>

        <div className="mt-16 grid border-t border-white/15 md:grid-cols-3">
          {proofs.map((p, i) => (
            <div
              key={p.label}
              className={`py-10 md:px-8 md:py-12 ${i > 0 ? 'border-t border-white/15 md:border-l md:border-t-0' : 'md:pl-0'}`}
            >
              <div className="font-data text-6xl font-medium tracking-tight text-white lg:text-7xl">{p.number}</div>
              <div className="label mt-5 text-signal">{p.label}</div>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-200">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
