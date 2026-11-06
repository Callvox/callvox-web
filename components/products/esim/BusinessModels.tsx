'use client';

import { m as motion } from 'framer-motion';

const models = [
  { title: 'Per-profile provisioning', description: 'Pay per eSIM profile delivered.' },
  { title: 'White-label RSP platform', description: 'A branded eSIM provisioning platform for your subscribers.' },
  { title: 'Connectivity bundling', description: 'Bundle an eSIM profile with a data plan.' },
  { title: 'IoT fleet management', description: 'Profile management and over-the-air updates for connected devices.' },
];

export function BusinessModels() {
  return (
    <section className="surface-ink bg-navy-DEFAULT py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="display-h2 mb-12 text-white md:mb-14"
        >
          Commercial models.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {models.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">{model.title}</h3>
              <p className="text-[15px] leading-relaxed text-navy-200">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
