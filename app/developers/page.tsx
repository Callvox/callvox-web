import { Metadata } from 'next';
import Nav from '@/components/Nav';
import DeveloperHero from '@/components/pages/developers/DeveloperHero';
import ConnectionMethods from '@/components/pages/developers/ConnectionMethods';
import OnboardingFlow from '@/components/pages/developers/OnboardingFlow';
import DeveloperCTABand from '@/components/pages/developers/DeveloperCTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'REST APIs for voice, SMS, airtime, eSIM and DIDs, with SMPP for messaging. Get started.',
};

export default function DevelopersPage() {
  return (
    <main>
      <Nav />
      <DeveloperHero />
      <ConnectionMethods />
      <OnboardingFlow />
      <DeveloperCTABand />
      <Footer />
    </main>
  );
}
