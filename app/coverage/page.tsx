import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import CoverageHero from '@/components/pages/coverage/CoverageHero';
import InteractiveMap from '@/components/pages/coverage/InteractiveMap';
import CoverageByProduct from '@/components/pages/coverage/CoverageByProduct';
import RateFinderCTA from '@/components/pages/coverage/RateFinderCTA';
import NetworkInfrastructure from '@/components/pages/coverage/NetworkInfrastructure';

export const metadata = {
  title: 'Global Coverage',
  description: '500+ voice routes, 1700+ airtime operators and 190+ countries. Built for emerging markets.',
};

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <CoverageHero />
      <InteractiveMap />
      <CoverageByProduct />
      <RateFinderCTA />
      <NetworkInfrastructure />
      <Footer />
    </main>
  );
}
