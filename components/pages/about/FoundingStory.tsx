'use client';

import { motion } from 'framer-motion';

const timeline = [
  { year: '2007', label: 'Founded as a voice-only wholesale carrier focused on Latin America and Africa' },
  { year: 'Today', label: 'Voice, SMS, airtime, eSIM and numbers on one platform, with one invoice and one support contact' }
];

export default function FoundingStory() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16"
        >
          <h2 className="display-h2 text-navy-DEFAULT font-bold">
            Why we started where we did.
          </h2>

          <div className="space-y-6 text-navy-600 leading-relaxed text-lg">
            <p>
              Callvox was founded in 2007 with a specific thesis: the wholesale telecom industry was obsessed with US and European traffic, and almost everyone was under-investing in Latin America, Africa, South Asia, and the Middle East. These were the fastest-growing mobile markets in the world. They were being served by aggregators with shallow coverage and inconsistent quality.
            </p>
            <p>
              We built direct interconnects in these markets corridor by corridor, before it was fashionable. That depth is what makes our coverage different, and it&apos;s why we keep investing where others don&apos;t.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {timeline.map((item) => (
            <div key={item.year} className="rounded-lg border border-cyan-DEFAULT/30 bg-cyan-DEFAULT/10 p-6">
              <div className="mb-2 text-2xl font-bold text-cyan-DEFAULT">{item.year}</div>
              <p className="text-navy-600">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
