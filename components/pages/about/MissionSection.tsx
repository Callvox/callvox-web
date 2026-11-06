'use client';

import { m as motion } from 'framer-motion';
import { Section } from '@/components/Section';

export default function MissionSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <blockquote className="mb-10 border-l-4 border-cyan-DEFAULT pl-8">
          <p className="text-2xl font-light leading-relaxed text-navy-DEFAULT md:text-3xl">
            The wholesale telecom market is fragmented by design. Five vendors for five services, five invoices, five
            support contacts, five procurement cycles. We built Callvox to fix that for the markets that need
            simplification most.
          </p>
        </blockquote>

        <p className="pl-9 text-lg leading-relaxed text-navy-600">
          Our mission is straightforward: be the wholesale platform carriers, MVNOs, resellers and enterprises rely on
          in the markets we serve.
        </p>
      </motion.div>
    </Section>
  );
}
