import { Section, SectionHeader } from '@/components/Section';

const types = [
  { title: 'One-time passcodes', body: 'Verification codes for sign-in and transactions.' },
  { title: 'Alerts and notifications', body: 'Account, order, appointment and service messages.' },
  { title: 'Marketing campaigns', body: 'Promotional messages sent in bulk, with sender ID handled per destination.' },
];

export default function SMSTrafficTypes() {
  return (
    <Section tone="tint">
      <SectionHeader title="Built for application-to-person traffic." />
      <dl className="grid border-t border-navy-100 md:grid-cols-3">
        {types.map((t, i) => (
          <div
            key={t.title}
            className={`py-8 md:px-8 ${i > 0 ? 'border-t border-navy-100 md:border-l md:border-t-0' : 'md:pl-0'}`}
          >
            <dt className="label text-cyan-DEFAULT">{t.title}</dt>
            <dd className="mt-3 leading-relaxed text-navy-600">{t.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
