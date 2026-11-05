'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type TabType = 'voice' | 'sms' | 'airtime' | 'dids';

interface Region {
  name: string;
  count: number;
  items: string[];
}

export const voiceRoutes: Record<string, Region> = {
  Africa: { name: 'Africa', count: 40, items: ['Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Uganda'] },
  'South Asia': { name: 'South Asia', count: 15, items: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka'] },
  'Latin America': { name: 'Latin America', count: 25, items: ['Mexico', 'Brazil', 'Colombia', 'Argentina', 'Chile'] },
  'Middle East': { name: 'Middle East', count: 20, items: ['UAE', 'Saudi Arabia', 'Egypt', 'Israel', 'Morocco'] }
};

export const smsCarriers: Record<string, Region> = {
  Africa: { name: 'Africa', count: 35, items: ['Vodafone', 'MTN', 'Airtel', 'Orange', 'Etisalat'] },
  'South Asia': { name: 'South Asia', count: 18, items: ['BSNL', 'Jio', 'Vodafone IN', 'Airtel IN', 'PTCL'] },
  'Latin America': { name: 'Latin America', count: 22, items: ['Telcel', 'Vivo', 'Claro', 'Personal', 'Entel'] },
  'Middle East': { name: 'Middle East', count: 16, items: ['Etisalat', 'Zain', 'STC', 'Vodafone ME', 'Maroc Telecom'] }
};

export const airtimeOperators: Record<string, Region> = {
  Africa: { name: 'Africa', count: 30, items: ['MTN', 'Airtel', 'Glo', '9mobile', 'Vodafone'] },
  'South Asia': { name: 'South Asia', count: 12, items: ['Jio', 'Airtel', 'Vodafone', 'Idea', 'BSNL'] },
  'Latin America': { name: 'Latin America', count: 20, items: ['Telcel', 'Vivo', 'Claro', 'Movistar', 'Personal'] },
  'Middle East': { name: 'Middle East', count: 14, items: ['Zain', 'STC', 'Etisalat', 'Ooredoo', 'Virgin'] }
};

export const didCountries: Record<string, Region> = {
  Africa: { name: 'Africa', count: 12, items: ['Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Ivory Coast'] },
  'South Asia': { name: 'South Asia', count: 8, items: ['India', 'Bangladesh', 'Pakistan', 'Sri Lanka'] },
  'Latin America': { name: 'Latin America', count: 18, items: ['Mexico', 'Brazil', 'Colombia', 'Argentina', 'Chile'] },
  'Middle East': { name: 'Middle East', count: 10, items: ['UAE', 'Saudi Arabia', 'Egypt', 'Israel', 'Morocco'] }
};

export default function CoverageByProduct() {
  const [activeTab, setActiveTab] = useState<TabType>('voice');
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const getData = () => {
    switch (activeTab) {
      case 'voice': return voiceRoutes;
      case 'sms': return smsCarriers;
      case 'airtime': return airtimeOperators;
      case 'dids': return didCountries;
    }
  };

  const data = getData();
  const tabs: { id: TabType; label: string }[] = [
    { id: 'voice', label: 'Voice Routes' },
    { id: 'sms', label: 'SMS' },
    { id: 'airtime', label: 'Airtime' },
    { id: 'dids', label: 'DIDs' }
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-8">
            Coverage by product
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-navy-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-semibold text-sm transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'text-cyan-DEFAULT border-cyan-DEFAULT'
                    : 'text-navy-600 border-transparent hover:text-navy-DEFAULT'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(data).map((region, idx) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-navy-50/40 rounded-xl border border-navy-100"
            >
              <h3 className="text-navy-DEFAULT font-bold text-lg mb-2">{region.name}</h3>
              <p className="text-cyan-DEFAULT font-semibold text-sm mb-4">
                {region.count}+ destinations
              </p>
              <ul className="space-y-2 mb-4">
                {region.items.slice(0, 5).map((item) => (
                  <li key={item} className="text-navy-600 text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
              {region.count > 5 && (
                <button
                  onClick={() => setExpandedRegion(expandedRegion === region.name ? null : region.name)}
                  className="text-cyan-DEFAULT text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  Show all {region.count} →
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
