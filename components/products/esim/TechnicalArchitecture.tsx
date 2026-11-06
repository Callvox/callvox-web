'use client';

import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

export function TechnicalArchitecture() {
  const specs = [
    'Consumer eSIM profile provisioning',
    'IoT eSIM profile provisioning',
    'Over-the-air profile delivery',
    'REST API integration',
  ];

  const layers = [
    {
      title: 'Your Platform / MVNO / Device',
      bgColor: 'bg-navy-100',
      isHighlight: false,
    },
    {
      title: 'LPA (Local Profile Assistant)',
      subtitle: 'device-side',
      bgColor: 'bg-navy-50',
      isHighlight: false,
    },
    {
      title: 'Callvox SM-DP+',
      subtitle: 'profile server',
      bgColor: 'bg-navy-50',
      borderColor: 'border-cyan-DEFAULT',
      isHighlight: true,
    },
    {
      title: 'eUICC',
      subtitle: 'embedded SIM chip in device',
      bgColor: 'bg-navy-50',
      isHighlight: false,
    },
  ];

  return (
    <section className="bg-navy-50 py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="display-h2 font-bold text-navy-DEFAULT mb-6">
            The eSIM stack, explained.
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            eSIM provisioning involves several layers, from your platform to the chip in the device. Callvox provides profile provisioning through an SM-DP+ (Subscription Manager Data Preparation+) server.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div>
              {layers.map((layer, idx) => (
                <div key={layer.title}>
                  <div
                    className={`${layer.bgColor} ${
                      layer.isHighlight ? `border-2 ${layer.borderColor}` : 'border border-navy-100'
                    } flow-node flex min-h-[5.5rem] flex-col justify-center rounded-lg px-6 py-4`}
                    style={{ animationDelay: `${(1.2 * idx - 0.29).toFixed(2)}s` }}
                  >
                    <h3 className={`font-semibold text-base ${layer.isHighlight ? 'text-navy-DEFAULT' : 'text-navy-600'}`}>
                      {layer.title}
                    </h3>
                    {layer.subtitle && (
                      <p className="mt-1 text-sm text-navy-500">{layer.subtitle}</p>
                    )}
                  </div>
                  {idx < layers.length - 1 && (
                    <div aria-hidden className="relative mx-auto h-10 w-px">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + idx * 0.25, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full w-px origin-top bg-cyan-DEFAULT/40"
                      />
                      <span
                        className="flow-packet-y absolute -left-[3px] h-2 w-2 rounded-full bg-cyan-DEFAULT"
                        style={{ animationDelay: `${1.2 + idx * 1.2}s` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="border border-navy-100 bg-white rounded-lg px-4 py-3 flex items-start gap-3"
              >
                <Check weight="bold" size={18} className="text-cyan-DEFAULT flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-600">{spec}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
