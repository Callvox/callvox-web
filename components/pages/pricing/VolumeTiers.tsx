'use client';

import { motion } from 'framer-motion';

const steps = [
  { title: 'Tell us your corridors', body: 'Which destinations, which services, and roughly how much traffic you expect.' },
  { title: 'Receive a rate deck', body: 'Rates for the corridors you asked about, quoted by destination and volume.' },
  { title: 'Connect and test', body: 'One integration for every service you take, on one invoice with one support contact.' },
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
          <h2 className="display-h2 text-navy-DEFAULT font-bold mb-4">How pricing works.</h2>
          <p className="text-navy-600 text-lg">Wholesale rates move by corridor, so we quote them that way.</p>
        </motion.div>

        <ol className="divide-y divide-navy-100 border-y border-navy-100">
          {steps.map((s) => (
            <li key={s.title} className="grid gap-2 py-6 md:grid-cols-[18rem_1fr] md:gap-10">
              <h3 className="text-navy-DEFAULT font-bold text-xl">{s.title}</h3>
              <p className="text-navy-600 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
