import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { VoiceHero } from '@/components/products/VoiceHero';
import { HowItWorks } from '@/components/products/HowItWorks';
import { TechnicalSpecs } from '@/components/products/TechnicalSpecs';
import { RouteCoverage } from '@/components/products/RouteCoverage';
import { CTABand } from '@/components/products/CTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Wholesale Voice Termination',
  description:
    'Wholesale voice termination across 500+ direct routes. Africa, Latin America, South Asia and the Middle East. SIP trunking and IP peering.',
  openGraph: {
    title: 'Wholesale Voice Termination | Callvox',
    description:
      'Wholesale voice termination across 500+ direct routes. Africa, Latin America, South Asia and the Middle East.',
    type: 'website',
  },
};

export default function VoicePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <VoiceHero />
        <HowItWorks />
        <TechnicalSpecs />
        <RouteCoverage />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
