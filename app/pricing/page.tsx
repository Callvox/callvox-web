import { Metadata } from 'next';
import Nav from '@/components/Nav';
import PricingHero from '@/components/pages/pricing/PricingHero';
import HowEachProductIsQuoted from '@/components/pages/pricing/HowEachProductIsQuoted';
import PricingSteps from '@/components/pages/pricing/PricingSteps';
import PricingCTABand from '@/components/pages/pricing/PricingCTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Wholesale Pricing | Rate Decks by Corridor and Volume',
  description: 'Wholesale rates for voice, SMS, airtime, eSIM and numbers, quoted by corridor and volume. Request a rate deck.',
};

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PricingHero />
      <HowEachProductIsQuoted />
      <PricingSteps />
      <PricingCTABand />
      <Footer />
    </main>
  );
}
