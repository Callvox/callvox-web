import { Metadata } from 'next';
import Nav from '@/components/Nav';
import DeveloperHero from '@/components/pages/developers/DeveloperHero';
import FiveAPIsOneKey from '@/components/pages/developers/FiveAPIsOneKey';
import OnboardingFlow from '@/components/pages/developers/OnboardingFlow';
import DeveloperCTABand from '@/components/pages/developers/DeveloperCTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Developer Portal',
  description: 'REST APIs for voice, SMS, airtime, eSIM and DIDs, with SMPP for messaging. Request API access.',
};

export default function DevelopersPage() {
  return (
    <main>
      <Nav />
      <DeveloperHero />
      <FiveAPIsOneKey />
      <OnboardingFlow />
      <DeveloperCTABand />
      <Footer />
    </main>
  );
}
