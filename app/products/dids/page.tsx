import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import DIDsHero from '@/components/products/dids/DIDsHero';
import NumberTypes from '@/components/products/dids/NumberTypes';
import DIDsUseCases from '@/components/products/dids/DIDsUseCases';
import TechnicalSpecsDIDs from '@/components/products/dids/TechnicalSpecsDIDs';
import DIDsCTABand from '@/components/products/dids/DIDsCTABand';
import HowDIDsWork from '@/components/products/dids/HowDIDsWork';

export const metadata: Metadata = {
  title: 'Wholesale DIDs & Virtual Numbers | Local, Toll-Free, Mobile',
  description:
    'Wholesale DID numbers for carriers, UCaaS platforms, resellers and enterprises. Local, national, toll-free, mobile and UIFN numbers, ordered by API or portal.',
  openGraph: {
    title: 'Wholesale DIDs & Virtual Numbers | Callvox',
    description:
      'Wholesale DID numbers for carriers, UCaaS platforms, resellers and enterprises, ordered by API or portal.',
    type: 'website',
  },
};

export default function DIDsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <DIDsHero />
      <HowDIDsWork />
      <NumberTypes />
      <DIDsUseCases />
      <TechnicalSpecsDIDs />
      <DIDsCTABand />
      <Footer />
    </main>
  );
}
