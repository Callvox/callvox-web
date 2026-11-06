'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="label text-cyan-DEFAULT mb-6">Resources</p>

          <h1 className="text-navy-DEFAULT font-bold text-4xl md:text-6xl mb-6">
            Guides for wholesale buyers, coming soon.
          </h1>

          <p className="text-navy-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We are building a library of technical and commercial guides for carriers, MVNOs and resellers. Until then, the fastest way to get what you need is to ask us directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
