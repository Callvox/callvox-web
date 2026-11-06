import { Metadata } from 'next';
import Nav from '@/components/Nav';
import PricingHero from '@/components/pages/pricing/PricingHero';
import ProductPricingCards from '@/components/pages/pricing/ProductPricingCards';
import VolumeTiers from '@/components/pages/pricing/VolumeTiers';
import IncludedFeatures from '@/components/pages/pricing/IncludedFeatures';
import PricingCTABand from '@/components/pages/pricing/PricingCTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Wholesale pricing',
  description: 'Wholesale rates for voice, SMS, airtime, eSIM and numbers, quoted by corridor and volume. Request a rate deck.',
};

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PricingHero />
      <ProductPricingCards />
      <VolumeTiers />
      <IncludedFeatures />
      <PricingCTABand />
      <Footer />
    </main>
  );
}
