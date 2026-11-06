import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import ResellersHero from '@/components/solutions/resellers/ResellersHero';
import ResellerAdvantage from '@/components/solutions/resellers/ResellerAdvantage';
import WhiteLabelCapabilities from '@/components/solutions/resellers/WhiteLabelCapabilities';
import TechnicalIntegration from '@/components/solutions/resellers/TechnicalIntegration';
import ResellersCTABand from '@/components/solutions/resellers/ResellersCTABand';

export const metadata = {
  title: 'For Resellers & Aggregators',
  description: 'Wholesale voice, SMS, airtime, eSIM and numbers from one partner, with 1700+ operators and 190+ countries. One integration, one invoice, one support contact.',
};

export default function ResellersPage() {
  return (
    <main>
      <Nav />
      <ResellersHero />
      <ResellerAdvantage />
      <WhiteLabelCapabilities />
      <TechnicalIntegration />
      <ResellersCTABand />
      <Footer />
    </main>
  );
}
