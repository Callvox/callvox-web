'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OperatorCoverageAirtime() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const regions = [
    {
      title: 'Africa',
      operators: 'MTN, Airtel, Glo, 9mobile (Nigeria) · Safaricom (Kenya) · Vodacom (SA) · Orange (multiple)',
    },
    {
      title: 'South Asia',
      operators: 'Jio, Airtel, Vi (India) · Jazz, Telenor (Pakistan) · Banglalink, Robi (BD)',
    },
    {
      title: 'Latin America',
      operators: 'Telcel, Movistar (Mexico) · Claro, TIM (Brazil)',
    },
    {
      title: 'Middle East & others',
      operators: 'Etisalat, du (UAE) · STC (Saudi) · Zain (multiple)',
    },
  ]

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-20">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="display-h2 font-bold text-white mb-12 md:mb-16"
        >
          Operators across four regions.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: (i + 1) * 0.1 }}
              className="border-l-4 border-cyan-DEFAULT pl-4 py-2"
            >
              <h3 className="text-sm font-semibold tracking-wide text-cyan-DEFAULT mb-2">{region.title}</h3>
              <p className="text-sm text-navy-200 leading-relaxed">{region.operators}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xs italic text-navy-300 mb-4"
        >
          Full operator list available on request.
        </motion.p>
      </div>
    </section>
  )
}
