import { Section, SectionHeader } from '@/components/Section';

const pairs = [
  { title: 'Voice', body: 'Direct voice routes into emerging markets, from the same wholesale partner.' },
  { title: 'SMS', body: 'A2P messaging over SMPP or REST, alongside your eSIM profiles.' },
  { title: 'Numbers', body: 'Virtual numbers by country, routed to your trunk.' },
];

export function ESIMPairing() {
  return (
    <Section tone="tint">
      <SectionHeader
        title="Pair eSIM with the rest of the stack."
        intro="Add voice, messaging and numbers to your eSIM offer through the same integration and invoice."
      />
      <dl className="grid border-t border-navy-100 md:grid-cols-3">
        {pairs.map((p, i) => (
          <div
            key={p.title}
            className={`py-8 md:px-8 ${i > 0 ? 'border-t border-navy-100 md:border-l md:border-t-0' : 'md:pl-0'}`}
          >
            <dt className="label text-cyan-DEFAULT">{p.title}</dt>
            <dd className="mt-3 leading-relaxed text-navy-600">{p.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
