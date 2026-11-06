'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

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

export default function TechnicalIntegration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-navy-DEFAULT text-4xl mb-16"
        >
          API-first. SMPP + REST.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  custom={1 + i}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="border-l-2 border-cyan-DEFAULT pl-4 py-2"
                >
                  <div className="text-sm font-semibold text-cyan-DEFAULT">{spec.label}</div>
                  <div className="text-navy-600 text-sm">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            custom={9}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-navy-50/50 p-6 rounded-lg border border-navy-100 font-mono text-sm overflow-x-auto"
          >
            <pre className="text-navy-300">
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
      </div>
    </section>
  );
}
