'use client';

import { m as motion } from 'framer-motion';

const regions = [
  {
    title: 'Latin America',
    destinations: ['Mexico', 'Brazil', 'Colombia', 'Peru', 'Argentina', 'Ecuador'],
  },
  {
    title: 'Africa',
    destinations: ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt', 'Tanzania', 'Ethiopia'],
  },
  {
    title: 'South Asia',
    destinations: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal'],
  },
  {
    title: 'Middle East',
    destinations: ['UAE', 'Saudi Arabia', 'Kuwait', 'Jordan', 'Lebanon', 'Oman'],
  },
];

export function RouteCoverage() {
  return (
    <section className="surface-ink bg-navy-DEFAULT py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-14"
        >
          <h2 className="display-h2 text-white">500+ direct routes into emerging markets.</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-200">
            Our route network is designed around the world&apos;s highest-growth termination corridors, not just the easy markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="border-b border-white/10 pb-4 text-xl font-semibold text-white">{region.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {region.destinations.map((country) => (
                  <li key={country} className="flex items-center gap-3 text-[15px] text-navy-100">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-DEFAULT" />
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy-200">Representative destinations. Full route list on request.</p>
      </div>
    </section>
  );
}
