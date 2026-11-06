'use client';

import { m as motion } from 'framer-motion';
import { STATS } from '@/lib/stats';
import { Section, SectionHeader } from '@/components/Section';

const services = [
  { name: 'Voice', desc: "Direct routes for your subscribers' calls." },
  { name: 'SMS', desc: 'Send A2P messages by SMPP or REST.' },
  { name: 'eSIM', desc: 'Order profiles by API, with data connectivity.' },
  { name: 'Airtime', desc: `Top-ups across ${STATS.operators.value} operators.` },
  { name: 'Numbers', desc: 'Virtual numbers by country, routed to your trunk.' },
];

export default function MVNOStack() {
  return (
    <Section>
      <SectionHeader
        title="Your wholesale stack from one vendor."
        intro="Callvox supplies the wholesale services behind your MVNO. You run the brand and the customer relationship."
      />

      <dl className="grid border-t border-navy-100 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`border-b border-navy-100 py-8 lg:border-b-0 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-navy-100' : 'lg:pl-0'}`}
          >
            <dt className="label text-cyan-DEFAULT">{s.name}</dt>
            <dd className="mt-3 leading-relaxed text-navy-600">{s.desc}</dd>
          </motion.div>
        ))}
      </dl>
    </Section>
  );
}
