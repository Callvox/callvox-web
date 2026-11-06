import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { VoiceHero } from '@/components/products/VoiceHero';
import { HowItWorks } from '@/components/products/HowItWorks';
import { TechnicalSpecs } from '@/components/products/TechnicalSpecs';
import { RouteCoverage } from '@/components/products/RouteCoverage';
import { VoiceOnboarding } from '@/components/products/VoiceOnboarding';
import { CTABand } from '@/components/products/CTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Wholesale Voice Termination | SIP & IP Peering',
  description:
    'Wholesale voice termination and CLI routes across 500+ direct routes in Latin America, Africa, South Asia and the Middle East. SIP trunk or IP peering.',
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
        <VoiceOnboarding />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
