import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { ESIMHero } from '@/components/products/esim/ESIMHero';
import { WhoItsForESIM } from '@/components/products/esim/WhoItsForESIM';
import { TechnicalArchitecture } from '@/components/products/esim/TechnicalArchitecture';
import { TechnicalSpecsESIM } from '@/components/products/esim/TechnicalSpecsESIM';
import { BusinessModels } from '@/components/products/esim/BusinessModels';
import { ESIMHowItWorks } from '@/components/products/esim/ESIMHowItWorks';
import { ESIMPairing } from '@/components/products/esim/ESIMPairing';
import { ESIMOnboarding } from '@/components/products/esim/ESIMOnboarding';
import { ESIMCTABand } from '@/components/products/esim/ESIMCTABand';

export const metadata: Metadata = {
  title: 'Wholesale eSIM Provisioning | REST API & OTA Delivery',
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
      <ESIMHowItWorks />
      <TechnicalArchitecture />
      <ESIMPairing />
      <TechnicalSpecsESIM />
      <BusinessModels />
      <ESIMOnboarding />
      <ESIMCTABand />
      <Footer />
    </main>
  );
}
