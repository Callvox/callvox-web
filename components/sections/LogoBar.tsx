const corridors = [
  'Latin America',
  'Sub-Saharan Africa',
  'South Asia',
  'Middle East & North Africa',
  'Southeast Asia',
  'Caribbean',
  'Eastern Europe',
  'Central Asia',
]

export function LogoBar() {
  const items = [...corridors, ...corridors]
  return (
    <section aria-label="Core corridors" className="overflow-hidden border-y border-navy-100 bg-paper py-5">
      <div className="flex w-max animate-marquee items-center">
        {items.map((c, i) => (
          <span key={`${c}-${i}`} className="label flex items-center whitespace-nowrap text-navy-500">
            <span className="px-8">{c}</span>
            <span className="text-cyan-DEFAULT" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
