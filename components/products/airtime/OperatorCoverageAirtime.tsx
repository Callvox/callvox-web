'use client'

import { m as motion } from 'framer-motion'

const regions = [
  {
    title: 'Latin America',
    operators: ['Telcel, Movistar (Mexico)', 'Claro, TIM (Brazil)'],
  },
  {
    title: 'Africa',
    operators: [
      'MTN, Airtel, Glo, 9mobile (Nigeria)',
      'Safaricom (Kenya)',
      'Vodacom (South Africa)',
      'Orange (multiple countries)',
    ],
  },
  {
    title: 'South Asia',
    operators: ['Jio, Airtel, Vi (India)', 'Jazz, Telenor (Pakistan)', 'Banglalink, Robi (Bangladesh)'],
  },
  {
    title: 'Middle East',
    operators: ['Etisalat, du (UAE)', 'STC (Saudi Arabia)', 'Zain (multiple countries)'],
  },
]

export default function OperatorCoverageAirtime() {
  return (
    <section className="surface-ink bg-navy-DEFAULT py-20 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-h2 mb-12 text-white md:mb-14"
        >
          Operators across four regions.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="border-b border-white/10 pb-4 text-xl font-semibold text-white">{region.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {region.operators.map((op) => (
                  <li key={op} className="flex items-start gap-3 text-[15px] text-navy-100">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-DEFAULT" />
                    {op}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-sm text-navy-200">Representative operators. Full operator list available on request.</p>
      </div>
    </section>
  )
}
