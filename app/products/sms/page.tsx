import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import SMSHero from '@/components/products/sms/SMSHero';
import DeliverabilitySection from '@/components/products/sms/DeliverabilitySection';
import SMSTechnicalSpecs from '@/components/products/sms/SMSTechnicalSpecs';
import SMSHowItWorks from '@/components/products/sms/SMSHowItWorks';
import SMSTrafficTypes from '@/components/products/sms/SMSTrafficTypes';
import SMSOnboarding from '@/components/products/sms/SMSOnboarding';
import SMSCTABand from '@/components/products/sms/SMSCTABand';

export const metadata: Metadata = {
  title: 'A2P SMS & Wholesale Messaging | SMPP & REST',
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
      <SMSHowItWorks />
      <DeliverabilitySection />
      <SMSTrafficTypes />
      <SMSTechnicalSpecs />
      <SMSOnboarding />
      <SMSCTABand />
      <Footer />
    </main>
  );
}
