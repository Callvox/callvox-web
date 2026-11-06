'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
              <div className="text-xs font-bold uppercase tracking-wider mb-4 opacity-80">
                Technical details
              </div>
              <h3 className="text-xl font-bold mb-6">Need more detail?</h3>
              <p className="text-sm text-navy-100 leading-relaxed mb-6">
                Tell us about your use case and we will share technical details for your integration.
              </p>
              <Link href="/get-started?type=mvno" className="text-cyan-DEFAULT text-sm font-semibold hover:opacity-80 transition-opacity">
                Talk to an eSIM specialist →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
