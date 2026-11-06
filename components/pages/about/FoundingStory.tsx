'use client';

import { m as motion } from 'framer-motion';
import { Section } from '@/components/Section';

export default function FoundingStory() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16"
      >
        <h2 className="display-h2 text-navy-DEFAULT">Why we started where we did.</h2>

        <div className="space-y-6 text-lg leading-relaxed text-navy-600">
          <p>
            Callvox was founded in 2007 with a specific thesis: the wholesale telecom industry was focused on US and
            European traffic, and Latin America and Africa were being under-served.
          </p>
          <p>
            We built direct interconnects in these markets corridor by corridor, before it was fashionable. Our
            corridors now include South Asia and the Middle East, and that depth is what makes our coverage different.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
