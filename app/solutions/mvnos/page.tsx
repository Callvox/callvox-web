import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import MVNOsHero from '@/components/solutions/mvnos/MVNOsHero';
import MVNOStack from '@/components/solutions/mvnos/MVNOStack';
import ESIMFocus from '@/components/solutions/mvnos/ESIMFocus';
import PricingPhilosophy from '@/components/solutions/mvnos/PricingPhilosophy';
import MVNOsCTABand from '@/components/solutions/mvnos/MVNOsCTABand';

export const metadata: Metadata = {
  title: 'For MVNOs',
  description:
    'Voice, SMS, eSIM, airtime and numbers from one wholesale partner. One integration, one invoice and one support contact for MVNOs.',
  openGraph: {
    title: 'For MVNOs | Callvox',
    description:
      'Voice, SMS, eSIM, airtime and numbers from one wholesale partner, built for MVNOs.',
    type: 'website',
  },
};

export default function MVNOsPage() {
  return (
    <>
      <Nav />
      <main>
        <MVNOsHero />
        <MVNOStack />
        <ESIMFocus />
        <PricingPhilosophy />
        <MVNOsCTABand />
      </main>
      <Footer />
    </>
  );
}
