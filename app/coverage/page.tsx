import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import CoverageHero from '@/components/pages/coverage/CoverageHero';
import InteractiveMap from '@/components/pages/coverage/InteractiveMap';
import CoverageByProduct from '@/components/pages/coverage/CoverageByProduct';
import RateFinderCTA from '@/components/pages/coverage/RateFinderCTA';
import { STATS } from '@/lib/stats';

export const metadata = {
  title: 'Global Coverage',
  // Hidden for now: not linked from the nav or footer, and kept out of the sitemap and search results.
  robots: { index: false, follow: false },
  description: `${STATS.routes.value} direct voice routes across Latin America, Africa, South Asia and the Middle East, ${STATS.operators.value} airtime operators and ${STATS.countries.value} countries reached through one platform.`,
};

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <CoverageHero />
      <InteractiveMap />
      <CoverageByProduct />
      <RateFinderCTA />
      <Footer />
    </main>
  );
}
