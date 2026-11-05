/**
 * DRAFT case study — NOT PUBLISHED.
 * Every bracketed value is a placeholder, not a real result. Do not set PUBLISHED = true
 * until each [bracket] is replaced with a verified figure the customer has approved.
 */
const PUBLISHED = false

const study = {
  customer: 'A regional carrier in [region]',
  challenge:
    'Their traffic to [corridor] was routed through multiple intermediaries, which added latency and made call quality inconsistent for their subscribers.',
  solution:
    'Callvox replaced the aggregated path with a direct interconnect into [destination network], and consolidated their [services] onto one integration and one invoice.',
  result: '[Verified metric, e.g. "completion rate improved from X% to Y% on [corridor]"] within [timeframe].',
}

export function CaseStudy() {
  if (!PUBLISHED) return null
  return (
    <section className="bg-paper py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <p className="label text-cyan-DEFAULT">Customer story</p>
        <h2 className="mt-5 max-w-3xl text-5xl text-navy-DEFAULT lg:text-6xl">{study.customer}</h2>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-md border border-navy-100 bg-navy-100 md:grid-cols-3">
          {[
            ['Challenge', study.challenge],
            ['Solution', study.solution],
            ['Result', study.result],
          ].map(([k, v]) => (
            <div key={k} className="bg-white p-8">
              <dt className="label text-cyan-DEFAULT">{k}</dt>
              <dd className="mt-4 text-[15px] leading-relaxed text-navy-600">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
