'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';

const specs = [
  { label: 'Voice API', value: 'SIP trunk, CDR API' },
  { label: 'SMS', value: 'REST + SMPP v3.4/5.0' },
  { label: 'Airtime', value: 'REST API, webhook delivery' },
  { label: 'DIDs', value: 'REST API' },
  { label: 'Billing API', value: 'Usage data, invoice generation, balance queries' },
  { label: 'CDRs', value: 'Per-tenant, exportable JSON/CSV' },
  { label: 'Webhooks', value: 'Delivery receipts, usage alerts, balance warnings' },
  { label: 'Auth', value: 'API keys per sub-account, IP whitelisting' },
];

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay: i * 0.06 },
});

export default function TechnicalIntegration() {
  return (
    <Section>
      <SectionHeader title="API-first. SMPP + REST." />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          {specs.map((spec, i) => (
            <motion.div key={spec.label} {...fadeUp(i)} className="border-l-2 border-cyan-DEFAULT py-2 pl-4">
              <div className="text-sm font-semibold text-cyan-DEFAULT">{spec.label}</div>
              <div className="text-sm text-navy-600">{spec.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(2)}
          className="overflow-x-auto rounded-lg border border-navy-100 bg-navy-50/50 p-6 font-mono text-sm"
        >
          <pre className="text-navy-600">
{`POST /v1/accounts/sub-accounts HTTP/1.1
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "name": "Client ABC"
}

---

GET /v1/accounts/sub-accounts/{id}/usage?month=2026-04 HTTP/1.1
Authorization: Bearer YOUR_API_KEY

{
  "voice_minutes": 125430,
  "sms_count": 89023,
  "airtime_value": 34500
}`}
            </pre>
        </motion.div>
      </div>
    </Section>
  );
}
