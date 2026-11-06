import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import AirtimePricingHero from '@/components/products/airtime/pricing/AirtimePricingHero'
import AirtimeRateDeckForm from '@/components/products/airtime/pricing/AirtimeRateDeckForm'

export const metadata = {
  title: 'Airtime Pricing',
  description:
    'Airtime rates change with the market and vary by corridor. Request a current rate deck for wholesale airtime top-up.',
}

export default function AirtimePricingPage() {
  return (
    <>
      <Nav />
      <AirtimePricingHero />
      <AirtimeRateDeckForm />
      <Footer />
    </>
  )
}
