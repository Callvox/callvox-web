'use client';

import { motion } from 'framer-motion';

export function TechnicalSpecsESIM() {
  const specs = [
    {
      label: 'Profile delivery',
      value: 'Over-the-air (OTA), no physical shipping',
    },
    {
      label: 'API',
      value: 'REST API for profile orders and webhooks',
    },
    {
      label: 'Use cases',
      value: 'MVNOs, travel operators, enterprise IoT',
    },
    {
      label: 'Platform options',
      value: 'Discuss white-label requirements with our team',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {specs.map((spec, idx) => (
                <div key={idx} className="border-b border-navy-100 pb-4 last:border-0">
                  <div className="text-sm font-semibold text-navy-600 mb-2">{spec.label}</div>
                  <div className="text-base text-navy-DEFAULT">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-navy-DEFAULT text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Integration details</h3>
              <p className="text-sm text-navy-100 leading-relaxed">
                Technical details are shared for your use case and integration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
