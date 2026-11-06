import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { ESIMHero } from '@/components/products/esim/ESIMHero';
import { WhoItsForESIM } from '@/components/products/esim/WhoItsForESIM';
import { TechnicalArchitecture } from '@/components/products/esim/TechnicalArchitecture';
import { TechnicalSpecsESIM } from '@/components/products/esim/TechnicalSpecsESIM';
import { BusinessModels } from '@/components/products/esim/BusinessModels';
import { ESIMCTABand } from '@/components/products/esim/ESIMCTABand';

export const metadata: Metadata = {
  title: 'Wholesale eSIM Provisioning',
  description:
    'Wholesale eSIM provisioning with over-the-air profile delivery for MVNOs, travel operators and enterprise IoT.',
  openGraph: {
    title: 'Wholesale eSIM Provisioning | Callvox',
    description:
      'Wholesale eSIM provisioning with over-the-air profile delivery for MVNOs and enterprises.',
    type: 'website',
  },
};

export default function ESIMPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <ESIMHero />
      <WhoItsForESIM />
      <TechnicalArchitecture />
      <TechnicalSpecsESIM />
      <BusinessModels />
      <ESIMCTABand />
      <Footer />
    </main>
  );
}
