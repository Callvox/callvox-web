'use client'

import { motion, useInView } from 'framer-motion'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRef } from 'react'

export default function SLADetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-navy-DEFAULT mb-6 text-balance">
            Service terms, agreed up front.
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            Quality targets, support escalation and commercial terms are set with you before you send traffic.
            Ask for our interconnect details and service terms and we&apos;ll send them with your rate deck.
          </p>
          <Link
            href="/get-started?type=carrier"
            className="inline-flex items-center gap-1 text-cyan-DEFAULT hover:opacity-80 font-semibold"
          >
            Request interconnect details and service terms
            <CaretRight size={16} weight="fill" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
