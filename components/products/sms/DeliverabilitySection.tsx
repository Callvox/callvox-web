'use client';

import { motion } from 'framer-motion';
import { ChatDots, ArrowRight } from '@phosphor-icons/react';

const features = [
  {
    title: 'Direct carrier connections',
    desc: 'Direct operator connections, without third-party hubs between your traffic and the destination carrier.',
  },
  {
    title: 'HLR / MNP pre-validation',
    desc: 'Validate every number before send. Reduce failed deliveries and wasted spend on invalid or ported numbers.',
  },
  {
    title: 'DLR webhooks',
    desc: 'Delivery receipts pushed to your endpoint, with delivery state visibility: delivered, failed, pending, expired.',
  },
];

const codeBlock = `POST /v1/sms/send HTTP/1.1
Content-Type: application/json

{
  "to": "+1234567890",
  "from": "YourBrand",
  "text": "Your OTP: 123456"
}

// DLR Webhook Response
{
  "message_id": "msg_abc123xyz",
  "status": "delivered",
  "timestamp": "2024-01-15T14:32:45Z"
}`;

export default function DeliverabilitySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-page mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="display-h2 text-navy-DEFAULT font-semibold mb-6">Delivery is the product.</h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Grey routes are cheap until carrier filtering blocks them, and your clients' campaigns with them. Callvox routes through direct carrier connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <ChatDots size={24} weight="duotone" className="text-cyan-DEFAULT" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-DEFAULT mb-2">{feature.title}</h3>
                  <p className="text-navy-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-navy-900 rounded-lg p-6 overflow-auto"
          >
            <pre className="text-cyan-DEFAULT text-xs font-mono leading-relaxed whitespace-pre-wrap break-words">
              <code>{codeBlock}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
