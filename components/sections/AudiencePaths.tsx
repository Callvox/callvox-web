'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

const audiences = [
  {
    name: 'Carriers',
    href: '/solutions/carriers',
    points: ['Direct interconnects, not aggregated routes', 'One team to call when it matters'],
    cta: 'Carrier solutions',
  },
  {
    name: 'MVNOs',
    href: '/solutions/mvnos',
    points: ['Voice, SMS, airtime and eSIM on one integration', 'One invoice and one support contact'],
    cta: 'MVNO solutions',
  },
  {
    name: 'Resellers',
    href: '/solutions/resellers',
    points: ['Voice, SMS, airtime and numbers from one partner', 'Rates quoted by corridor and volume'],
    cta: 'Reseller solutions',
  },
  {
    name: 'Enterprises',
    href: '/solutions/enterprises',
    points: ['Voice and numbers from one wholesale partner', 'One integration, one invoice'],
    cta: 'Enterprise solutions',
  },
]

export function AudiencePaths() {
  return (
    <section className="bg-paper py-28 lg:py-40">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <h2 className="display-h2 mb-14 text-navy-DEFAULT">
          Who we <em>work with.</em>
        </h2>

        <div className="relative">
          {/* Top rule draws in from the left */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="h-px origin-left bg-navy-DEFAULT"
          />

          <ul>
            {audiences.map((a, i) => (
              <motion.li
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                viewport={{ once: true, margin: '-40px' }}
                className="border-b border-navy-100"
              >
                <Link
                  href={a.href}
                  className="group relative grid items-center gap-x-10 gap-y-5 px-0 py-10 transition-colors duration-300 hover:bg-white md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_15rem] md:px-6"
                >
                  {/* Accent line that grows under the row on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-cyan-DEFAULT transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-display text-4xl leading-none text-navy-DEFAULT transition-transform duration-300 group-hover:translate-x-1.5 lg:text-5xl">
                      {a.name}
                    </span>
                  </div>

                  <ul className="space-y-2 text-base text-navy-600">
                    {a.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-cyan-DEFAULT" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <span className="label flex items-center justify-between gap-4 whitespace-nowrap text-navy-DEFAULT transition-colors duration-300 group-hover:text-cyan-DEFAULT md:justify-end">
                    {a.cta}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-DEFAULT/20 transition-all duration-300 group-hover:border-cyan-DEFAULT group-hover:bg-cyan-DEFAULT group-hover:text-white">
                      <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
