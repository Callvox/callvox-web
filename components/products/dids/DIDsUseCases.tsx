import { Section, SectionHeader } from '@/components/Section';

const uses = [
  { title: 'Local presence', body: 'Give customers in each country a number that looks local.' },
  { title: 'Inbound lines', body: 'Toll-free and local lines for contact centres and helplines.' },
  { title: 'Number inventory', body: 'Numbers for UCaaS platforms and resellers to provision to their own customers.' },
];

export default function DIDsUseCases() {
  return (
    <Section tone="tint">
      <SectionHeader title="What numbers are used for." />
      <dl className="grid border-t border-navy-100 md:grid-cols-3">
        {uses.map((u, i) => (
          <div
            key={u.title}
            className={`py-8 md:px-8 ${i > 0 ? 'border-t border-navy-100 md:border-l md:border-t-0' : 'md:pl-0'}`}
          >
            <dt className="label text-cyan-DEFAULT">{u.title}</dt>
            <dd className="mt-3 leading-relaxed text-navy-600">{u.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
