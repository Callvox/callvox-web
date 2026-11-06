import { Metadata } from 'next';
import Nav from '@/components/Nav';
import DeveloperHero from '@/components/pages/developers/DeveloperHero';
import ConnectionMethods from '@/components/pages/developers/ConnectionMethods';
import PlatformCapabilities from '@/components/pages/developers/PlatformCapabilities';
import OnboardingFlow from '@/components/pages/developers/OnboardingFlow';
import DeveloperCTABand from '@/components/pages/developers/DeveloperCTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Developers | REST API, SMPP & SIP Integration',
  description: 'Connect by REST API, SMPP, SIP trunk or IP peering. Voice, SMS, airtime, eSIM and numbers, with billing, CDR and webhook APIs.',
};

export default function DevelopersPage() {
  return (
    <main>
      <Nav />
      <DeveloperHero />
      <ConnectionMethods />
      <PlatformCapabilities />
      <OnboardingFlow />
      <DeveloperCTABand />
      <Footer />
    </main>
  );
}
