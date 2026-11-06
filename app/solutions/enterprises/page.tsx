import EnterprisesHero from '@/components/solutions/enterprises/EnterprisesHero';
import EnterprisesFeatures from '@/components/solutions/enterprises/EnterprisesFeatures';
import EnterprisesUseCases from '@/components/solutions/enterprises/EnterprisesUseCases';
import IntegrationCompatibility from '@/components/solutions/enterprises/IntegrationCompatibility';
import EnterprisesCTABand from '@/components/solutions/enterprises/EnterprisesCTABand';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
  title: 'Enterprise SIP Trunking & Virtual Numbers',
  description: 'SIP trunking, virtual numbers and voice for businesses, from a wholesale carrier operating since 2007.',
};

export default function EnterprisesPage() {
  return (
    <>
      <Nav />
      <main>
        <EnterprisesHero />
        <EnterprisesFeatures />
        <EnterprisesUseCases />
        <IntegrationCompatibility />
        <EnterprisesCTABand />
      </main>
      <Footer />
    </>
  );
}
