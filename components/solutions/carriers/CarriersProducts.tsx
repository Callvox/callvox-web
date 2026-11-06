import { STATS } from '@/lib/stats'
import { Section, SectionHeader } from '@/components/Section'

const products = [
  { title: 'Voice', body: 'Termination and origination over direct routes, by SIP trunk or IP peering.' },
  { title: 'SMS', body: 'A2P messaging over SMPP or REST.' },
  { title: 'Numbers', body: 'DIDs by country and number type.' },
  { title: 'Airtime', body: `Top-ups across ${STATS.operators.value} operators.` },
  { title: 'eSIM', body: 'Profiles ordered by API.' },
]

export default function CarriersProducts() {
  return (
    <Section>
      <SectionHeader title="What carriers buy from us." />
      <dl className="grid border-t border-navy-100 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((p, i) => (
          <div
            key={p.title}
            className={`border-b border-navy-100 py-8 lg:border-b-0 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-navy-100' : 'lg:pl-0'}`}
          >
            <dt className="label text-cyan-DEFAULT">{p.title}</dt>
            <dd className="mt-3 leading-relaxed text-navy-600">{p.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
