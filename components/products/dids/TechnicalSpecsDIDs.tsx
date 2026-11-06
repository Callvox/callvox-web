'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function TechnicalSpecsDIDs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('search');

  const specs = [
    { label: 'Signalling', value: 'SIP (RFC 3261), TLS transport' },
    { label: 'Encryption', value: 'TLS + SRTP' },
    { label: 'Portability', value: 'Number porting, with terms confirmed per country' },
    { label: 'CDRs', value: 'API-accessible, exportable CSV/JSON' },
    { label: 'Provisioning', value: 'Via portal or REST API' },
  ];

  const snippets = {
    search: "GET /v1/numbers/search?country=US&type=local&area_code=212",
    provision: "POST /v1/numbers/provision\n{ \"number\": \"+12125551234\" }",
    port: "POST /v1/numbers/port\n{ \"number\": \"+12125559876\", \"losing_carrier\": \"...\" }",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="bg-navy-50/40 py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="display-h2 text-navy-DEFAULT font-bold mb-12 md:mb-16"
        >
          Technical Specifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {specs.map((spec, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-DEFAULT"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-DEFAULT text-sm">{spec.label}</div>
                    <div className="text-gray-600 text-sm mt-1">{spec.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-lg p-6 border border-navy-200"
          >
            <div className="flex gap-2 mb-6 border-b border-navy-100">
              {['search', 'provision', 'port'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-cyan-DEFAULT text-cyan-DEFAULT'
                      : 'border-transparent text-gray-600 hover:text-navy-DEFAULT'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-navy-900 rounded p-4 overflow-x-auto">
              <code className="text-cyan-DEFAULT font-mono text-sm whitespace-pre-wrap break-words">
                {snippets[activeTab as keyof typeof snippets]}
              </code>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
