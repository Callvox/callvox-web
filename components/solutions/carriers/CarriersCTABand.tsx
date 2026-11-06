'use client'

import { motion } from 'framer-motion'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CarriersCTABand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Let's talk interconnect.
          </h2>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Tell us your corridors and we'll send interconnect details and a rate deck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/get-started?type=carrier"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-7 text-[15px] font-medium text-navy-DEFAULT transition-colors hover:bg-signal"
            >
              Request interconnect details
              <CaretRight size={18} weight="fill" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
