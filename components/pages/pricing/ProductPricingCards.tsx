'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ChatCircle, DeviceMobile, SimCard, PhoneIncoming, CheckCircle, type Icon } from '@phosphor-icons/react';
import { STATS } from '@/lib/stats';

interface ProductPricingCard {
  icon: Icon;
  name: string;
  basis: string;
  features: string[];
}

const products: ProductPricingCard[] = [
  {
    icon: Phone,
    name: 'Voice',
    basis: 'Quoted per destination',
    features: [`${STATS.routes.value} direct routes`, 'SIP trunk or IP peering', 'Volume-based rates'],
  },
  {
    icon: ChatCircle,
    name: 'SMS',
    basis: 'Quoted per destination',
    features: ['SMPP and REST API', 'Delivery receipts', 'Volume-based rates'],
  },
  {
    icon: DeviceMobile,
    name: 'Airtime',
    basis: 'Quoted by operator and volume',
    features: [`${STATS.operators.value} operators`, 'Top-ups through one API', 'Delivery status by API'],
  },
  {
    icon: SimCard,
    name: 'eSIM',
    basis: 'Quoted by project',
    features: ['Profile provisioning by API', 'Activation by LPA string', 'Platform and profile pricing'],
  },
  {
    icon: PhoneIncoming,
    name: 'DIDs',
    basis: 'Quoted by country and number type',
    features: ['Numbers provisioned on demand', 'Route to your trunk', 'Order by API or portal'],
  },
];

export default function ProductPricingCards() {
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="border border-navy-100 rounded-md p-8 bg-white hover:shadow-lg transition-shadow"
              >
                <Icon size={36} weight="duotone" className="text-navy-600 mb-4" />
                <h3 className="text-navy-DEFAULT font-bold text-xl mb-3">{product.name}</h3>

                <p className="mb-6 text-navy-400 text-sm">{product.basis}</p>

                <ul className="mb-6 space-y-3">
                  {product.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-3 items-start">
                      <CheckCircle size={16} weight="fill" className="text-cyan-DEFAULT flex-shrink-0 mt-1" />
                      <span className="text-navy-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/get-started" className="text-cyan-DEFAULT font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Request rates
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-navy-400 text-xs text-center mt-8 max-w-2xl mx-auto"
        >
          Pricing depends on destination, service and volume. Request a rate deck for exact quotes.
        </motion.p>
      </div>
    </section>
  );
}
