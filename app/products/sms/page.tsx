import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import SMSHero from '@/components/products/sms/SMSHero';
import DeliverabilitySection from '@/components/products/sms/DeliverabilitySection';
import SMSTechnicalSpecs from '@/components/products/sms/SMSTechnicalSpecs';
import SMSPricing from '@/components/products/sms/SMSPricing';
import SMSCTABand from '@/components/products/sms/SMSCTABand';

export const metadata: Metadata = {
  title: 'A2P SMS & Wholesale Messaging',
  description:
    'Wholesale A2P SMS and messaging for carriers, aggregators and platforms. Direct carrier connections, SMPP and REST API.',
  openGraph: {
    title: 'A2P SMS & Wholesale Messaging | Callvox',
    description:
      'Wholesale A2P SMS and messaging for carriers, aggregators and platforms. SMPP and REST API.',
    type: 'website',
  },
};

export default function SMSPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <SMSHero />
      <DeliverabilitySection />
      <SMSTechnicalSpecs />
      <SMSPricing />
      <SMSCTABand />
      <Footer />
    </main>
  );
}
