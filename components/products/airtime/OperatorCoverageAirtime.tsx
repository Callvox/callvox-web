'use client'

import { m as motion } from 'framer-motion'
import { STATS } from '@/lib/stats'
import { regions } from '@/lib/coverage'

export default function OperatorCoverageAirtime() {
  return (
    <section className="surface-ink bg-navy-DEFAULT py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-end gap-10 lg:grid-cols-[auto_1fr] lg:gap-16"
        >
          <div className="font-data text-7xl font-medium leading-none text-white lg:text-8xl">
            {STATS.operators.value}
          </div>
          <div>
            <h2 className="display-h2 text-white">Operators across four regions.</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-200">
              Top-ups delivered to mobile operators across {regions.map((r) => r.title).slice(0, 3).join(', ')} and the{' '}
              {regions[3].title}.
            </p>
          </div>
        </motion.div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-navy-200">
          Full operator list available on request.
        </p>
      </div>
    </section>
  )
}
