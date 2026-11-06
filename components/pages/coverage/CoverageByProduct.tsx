'use client';

import { m as motion } from 'framer-motion';
import { STATS } from '@/lib/stats';
import { Section, SectionHeader } from '@/components/Section';

// Verified figures only (lib/stats.ts). No per-product regional counts until confirmed.
const products = [
  { name: 'Voice', value: STATS.routes.value, line: 'direct routes across Latin America, Africa, South Asia and the Middle East.' },
  { name: 'SMS', value: 'Direct', line: 'operator routes over SMPP or REST. Destinations confirmed per corridor on request.' },
  { name: 'Airtime', value: STATS.operators.value, line: 'mobile operators for top-ups. Full operator list available on request.' },
  { name: 'Numbers', value: 'Varies', line: 'by country and number type. Availability confirmed per country on request.' },
];

export default function CoverageByProduct() {
  return (
    <Section tone="tint">
      <SectionHeader title="Coverage by product." />

      <dl className="grid border-t border-navy-100 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`border-b border-navy-100 py-8 lg:border-b-0 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-navy-100' : 'lg:pl-0'}`}
          >
            <dt className="label text-cyan-DEFAULT">{p.name}</dt>
            <dd className="mt-3">
              <span className="font-data text-4xl font-medium text-navy-DEFAULT">{p.value}</span>
              <p className="mt-2 leading-relaxed text-navy-600">{p.line}</p>
            </dd>
          </motion.div>
        ))}
      </dl>
    </Section>
  );
}
