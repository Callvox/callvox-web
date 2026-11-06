'use client'

import { motion } from 'framer-motion'
import type { Icon } from '@phosphor-icons/react'

export type FlowStep = { title: string; description: string; icon: Icon }

/**
 * Equal-size step cards joined by connector lines. The lines draw in on scroll,
 * then a packet travels each link in turn (see .flow-packet / .flow-node in globals.css).
 */
export function FlowSteps({ steps }: { steps: FlowStep[] }) {
  const cols = steps.length === 4 ? 'md:grid-cols-4 md:gap-12' : 'md:grid-cols-3 md:gap-16'
  const gap = steps.length === 4 ? '-right-12 w-12' : '-right-16 w-16'
  return (
    <div className={`grid grid-cols-1 gap-6 ${cols}`}>
      {steps.map((step, index) => {
        const Icon = step.icon
        const last = index === steps.length - 1
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative"
          >
            {!last && (
              <div aria-hidden className={`absolute top-[3.9rem] z-10 hidden h-px md:block ${gap}`}>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.3, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="h-px w-full origin-left bg-cyan-DEFAULT/40"
                />
                <span
                  className="flow-packet absolute -top-[3px] h-2 w-2 rounded-full bg-cyan-DEFAULT"
                  style={{ animationDelay: `${1.2 + index * 1.2}s` }}
                />
              </div>
            )}

            <div className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-DEFAULT/40 hover:shadow-[0_12px_32px_-12px_rgba(13,43,78,0.25)]">
              <div
                className="flow-node mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-light ring-1 ring-cyan-DEFAULT/20 transition-colors duration-300 group-hover:bg-cyan-DEFAULT"
                style={{ animationDelay: `${(1.2 * index - 0.29).toFixed(2)}s` }}
              >
                <Icon size={30} weight="duotone" className="text-cyan-DEFAULT transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-navy-DEFAULT">{step.title}</h3>
              <p className="leading-relaxed text-navy-600">{step.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
