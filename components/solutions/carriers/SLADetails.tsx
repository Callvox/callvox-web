'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SLADetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-h2 font-bold text-navy-DEFAULT mb-6">
            Service terms, agreed up front.
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed">
            Quality targets, support escalation and commercial terms are set with you before you send traffic.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
