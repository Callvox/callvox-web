'use client';

import { motion } from 'framer-motion';

export default function PricingHero() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-navy-DEFAULT font-bold text-5xl md:text-6xl mb-6">
            Rates built around your corridors.
          </h1>

          <p className="text-navy-600 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Wholesale pricing is quoted by destination, service and volume. Tell us where your traffic goes and we will send a rate deck for the corridors that matter to you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
