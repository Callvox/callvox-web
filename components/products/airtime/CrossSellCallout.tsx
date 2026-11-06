'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowsHorizontal } from '@phosphor-icons/react'
import Link from 'next/link'

export default function CrossSellCallout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="bg-navy-50 border border-cyan-DEFAULT/30 rounded-2xl p-10"
        >
          <div className="flex gap-6 items-start mb-6">
            <ArrowsHorizontal size={32} weight="bold" className="text-cyan-DEFAULT flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-navy-DEFAULT mb-3">
                Already routing voice to Africa or South Asia?
              </h3>
              <p className="text-lg text-navy-600 mb-6">
                Add airtime top-up alongside your voice routing, with one wholesale partner and one invoice.
              </p>
              <Link href="/get-started?type=carrier" className="inline-flex items-center justify-center font-medium rounded-sm transition-colors duration-200 h-10 px-5 text-sm bg-navy-DEFAULT text-white hover:bg-navy-600">
                Talk to a specialist
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
