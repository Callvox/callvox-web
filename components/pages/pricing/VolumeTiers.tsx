'use client';

import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: 'Tell us your corridors', body: 'Which destinations, which services, and roughly how much traffic you expect.' },
  { n: '02', title: 'Receive a rate deck', body: 'Rates for the corridors you asked about, quoted by destination and volume.' },
  { n: '03', title: 'Connect and test', body: 'One integration for every service you take, on one invoice with one support contact.' },
];

export default function VolumeTiers() {
  return (
    <section className="bg-navy-50/40 py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-navy-DEFAULT font-bold text-5xl mb-4">How pricing works.</h2>
          <p className="text-navy-600 text-lg">Wholesale rates move by corridor, so we quote them that way.</p>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-md border border-navy-100 bg-navy-100 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-white p-8">
              <div className="font-data text-xs text-navy-400">{s.n}</div>
              <h3 className="mt-3 text-navy-DEFAULT font-bold text-xl">{s.title}</h3>
              <p className="mt-3 text-navy-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
