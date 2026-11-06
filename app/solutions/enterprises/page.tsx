import EnterprisesHero from '@/components/solutions/enterprises/EnterprisesHero';
import EnterprisesFeatures from '@/components/solutions/enterprises/EnterprisesFeatures';
import EnterprisesUseCases from '@/components/solutions/enterprises/EnterprisesUseCases';
import IntegrationCompatibility from '@/components/solutions/enterprises/IntegrationCompatibility';
import EnterprisesCTABand from '@/components/solutions/enterprises/EnterprisesCTABand';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
  title: 'Enterprise Voice & Numbers',
  description: 'SIP trunking, virtual numbers and voice for businesses, from a wholesale carrier operating since 2007. One provider, one invoice, one support contact.',
};

export default function EnterprisesPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Nav />
      <EnterprisesHero />
      <EnterprisesFeatures />
      <EnterprisesUseCases />
      <IntegrationCompatibility />
      <EnterprisesCTABand />
      <Footer />
    </main>
  );
}
