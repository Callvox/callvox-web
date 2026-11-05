const proofs = [
  {
    number: '99.99%',
    label: 'Uptime SLA',
    body: 'Carrier-grade infrastructure with geo-redundant PoPs, 24/7 NOC support and contractual SLA penalties. Your reputation depends on ours.',
  },
  {
    number: '20 yrs',
    label: 'Emerging-market depth',
    body: 'Direct routes across Latin America, Africa, South Asia and the Middle East — the corridors where prepaid mobile dominates and termination demand grows fastest.',
  },
  {
    number: '1',
    label: 'Platform, API and invoice',
    body: 'Replace 3–5 fragmented vendor relationships with a single platform, a single API key and a single support contact across all five services.',
  },
]

export function WhyCallvox() {
  return (
    <section className="surface-ink bg-grid-ink bg-navy-DEFAULT py-28 text-white lg:py-40">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <p className="label text-signal">02 — Why Callvox</p>
        <h2 className="mt-5 max-w-4xl text-5xl leading-[1.02] lg:text-7xl">
          Built for the markets <em className="text-signal">others ignore.</em>
        </h2>

        <div className="mt-20 grid border-t border-white/15 md:grid-cols-3">
          {proofs.map((p, i) => (
            <div
              key={p.label}
              className={`py-10 md:px-8 md:py-12 ${i > 0 ? 'border-t border-white/15 md:border-l md:border-t-0' : 'md:pl-0'}`}
            >
              <div className="font-data text-6xl font-medium tracking-tight text-white lg:text-7xl">{p.number}</div>
              <div className="label mt-5 text-signal">{p.label}</div>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-navy-200">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
