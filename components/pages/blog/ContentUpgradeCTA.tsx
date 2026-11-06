'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const asks = [
  { title: 'Interconnect details', body: 'Technical details for connecting to our network.' },
  { title: 'A rate deck', body: 'Rates for the corridors and services you care about.' },
  { title: 'Technical documentation', body: 'API and integration documentation for the services you take.' },
];

export default function ContentUpgradeCTA() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-navy-DEFAULT font-bold text-3xl md:text-4xl mb-10">Ask us for what you need.</h2>

          <div className="grid gap-px overflow-hidden rounded-md border border-navy-100 bg-navy-100 md:grid-cols-3">
            {asks.map((a) => (
              <div key={a.title} className="bg-white p-8">
                <h3 className="text-navy-DEFAULT font-bold text-lg">{a.title}</h3>
                <p className="mt-3 text-navy-600 text-[15px] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-navy-DEFAULT px-7 text-[15px] font-medium text-white transition-colors hover:bg-navy-700"
            >
              Get in touch
            </Link>
            <Link
              href="/developers"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-navy-DEFAULT/30 px-7 text-[15px] font-medium text-navy-DEFAULT transition-colors hover:border-navy-DEFAULT"
            >
              Developer overview
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
