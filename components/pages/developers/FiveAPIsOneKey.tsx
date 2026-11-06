'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const apis = [
  { method: 'POST', endpoint: '/v1/voice/calls', description: 'Initiate or route an outbound call' },
  { method: 'POST', endpoint: '/v1/sms/send', description: 'Send an A2P SMS message' },
  { method: 'POST', endpoint: '/v1/airtime/topup', description: 'Deliver a mobile top-up' },
  { method: 'POST', endpoint: '/v1/esim/profiles', description: 'Provision an eSIM profile OTA' },
  { method: 'GET', endpoint: '/v1/numbers/search', description: 'Search available DID numbers' }
];

const getMethodColor = (method: string) => {
  if (method === 'GET') return 'bg-green-100 text-green-700';
  return 'bg-cyan-DEFAULT/10 text-cyan-DEFAULT';
};

export default function FiveAPIsOneKey() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-cyan-DEFAULT text-xs font-bold uppercase tracking-widest mb-4">
            The Platform API
          </div>
          <h2 className="text-navy-DEFAULT font-bold text-5xl mb-4">
            Every product. One API key.
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl">
            Authenticate once. Access all five services through a unified REST API. Each product has its own endpoint namespace — use one, some, or all.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-navy-200 rounded-xl overflow-hidden mb-6"
        >
          {apis.map((api, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-6 p-6 border-b border-navy-100 hover:bg-navy-50/40 transition-colors ${
                idx === apis.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <span className={`font-mono font-bold text-xs px-3 py-1 rounded ${getMethodColor(api.method)}`}>
                {api.method}
              </span>
              <span className="font-mono text-navy-DEFAULT font-semibold flex-1">
                {api.endpoint}
              </span>
              <span className="text-navy-600 text-sm">
                {api.description}
              </span>
            </div>
          ))}
        </motion.div>

        <Link
          href="/get-started?type=other"
          className="text-cyan-DEFAULT font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          Request API documentation
        </Link>
      </div>
    </section>
  );
}
