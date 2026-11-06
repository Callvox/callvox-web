import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import MVNOsHero from '@/components/solutions/mvnos/MVNOsHero';
import MVNOStack from '@/components/solutions/mvnos/MVNOStack';
import ESIMFocus from '@/components/solutions/mvnos/ESIMFocus';
import MVNOsCTABand from '@/components/solutions/mvnos/MVNOsCTABand';

export const metadata: Metadata = {
  title: 'Wholesale Voice, SMS & eSIM for MVNOs',
  description:
    'Voice termination, A2P SMS, eSIM, airtime and numbers for MVNOs, from one wholesale partner with one integration and one invoice.',
  openGraph: {
    title: 'Wholesale Services for MVNOs | Callvox',
    description:
      'Wholesale voice, SMS, eSIM, airtime and numbers for MVNOs, from one partner.',
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
        <MVNOsCTABand />
      </main>
      <Footer />
    </>
  );
}
