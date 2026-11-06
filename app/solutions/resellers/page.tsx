import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import ResellersHero from '@/components/solutions/resellers/ResellersHero';
import ResellerAdvantage from '@/components/solutions/resellers/ResellerAdvantage';
import WhiteLabelCapabilities from '@/components/solutions/resellers/WhiteLabelCapabilities';
import TechnicalIntegration from '@/components/solutions/resellers/TechnicalIntegration';
import ResellersCTABand from '@/components/solutions/resellers/ResellersCTABand';

export const metadata = {
  title: 'Wholesale Voice, SMS & Airtime for Resellers & Aggregators',
  description: 'Wholesale voice, SMS, airtime, eSIM and numbers for resellers and aggregators, across 190+ countries. One partner, one invoice.',
};

export default function ResellersPage() {
  return (
    <>
      <Nav />
      <main>
        <ResellersHero />
        <ResellerAdvantage />
        <WhiteLabelCapabilities />
        <TechnicalIntegration />
        <ResellersCTABand />
      </main>
      <Footer />
    </>
  );
}
