'use client';

import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote className="mb-10 border-l-4 border-cyan-DEFAULT pl-8">
            <p className="text-navy-DEFAULT font-light text-2xl md:text-3xl leading-relaxed">
              The wholesale telecom market is fragmented by design. Five vendors for five services, five invoices, five support contacts, five procurement cycles. We built Callvox to fix that for the markets that need simplification most.
            </p>
          </blockquote>

          <p className="pl-9 text-navy-600 text-lg leading-relaxed">
            Our mission is straightforward: be the most reliable wholesale platform in the markets our competitors ignore.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
