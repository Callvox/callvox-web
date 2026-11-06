'use client';

import { motion } from 'framer-motion';

export function BusinessModels() {
  const models = [
    {
      title: 'Per-profile provisioning',
      description: 'Pay per eSIM profile delivered.',
    },
    {
      title: 'White-label RSP platform',
      description: 'A branded eSIM provisioning platform for your subscribers.',
    },
    {
      title: 'Connectivity bundling',
      description: 'Bundle an eSIM profile with a data plan.',
    },
    {
      title: 'IoT fleet management',
      description: 'Profile management and over-the-air updates for connected devices.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-navy-DEFAULT py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-h2 font-bold text-white">
            Four ways to monetise eSIM.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-navy-800 rounded-lg p-6 border border-navy-700 hover:border-cyan-DEFAULT transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{model.title}</h3>
              <p className="text-navy-200 text-sm leading-relaxed">{model.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
