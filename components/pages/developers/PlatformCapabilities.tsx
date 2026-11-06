import { Section, SectionHeader } from '@/components/Section'

const capabilities = [
  { label: 'Billing API', value: 'Usage data, invoice generation, balance queries' },
  { label: 'CDRs', value: 'Exportable JSON/CSV' },
  { label: 'Webhooks', value: 'Delivery receipts, usage alerts, balance warnings' },
  { label: 'Auth', value: 'API keys per sub-account, IP whitelisting' },
]

export default function PlatformCapabilities() {
  return (
    <Section tone="tint">
      <SectionHeader
        title="Account and billing, in the API."
        intro="Alongside the product connections, the platform covers usage, billing and access control."
      />
      <dl className="grid grid-cols-1 border-t border-navy-100 md:grid-cols-2 md:gap-x-12">
        {capabilities.map((c) => (
          <div key={c.label} className="border-b border-navy-100 py-5">
            <dt className="mb-1 text-sm font-semibold text-navy-DEFAULT">{c.label}</dt>
            <dd className="text-navy-600">{c.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
