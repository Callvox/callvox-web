'use client';

import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import DIDsHero from '@/components/products/dids/DIDsHero';
import NumberTypes from '@/components/products/dids/NumberTypes';
import TechnicalSpecsDIDs from '@/components/products/dids/TechnicalSpecsDIDs';
import DIDsCTABand from '@/components/products/dids/DIDsCTABand';
import HowDIDsWork from '@/components/products/dids/HowDIDsWork';

export default function DIDsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <DIDsHero />
      <HowDIDsWork />
      <NumberTypes />
      <TechnicalSpecsDIDs />
      <DIDsCTABand />
      <Footer />
    </main>
  );
}
