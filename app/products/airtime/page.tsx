import Nav from '@/components/Nav'
import AirtimeHero from '@/components/products/airtime/AirtimeHero'
import UseCasesAirtime from '@/components/products/airtime/UseCasesAirtime'
import HowItWorksAirtime from '@/components/products/airtime/HowItWorksAirtime'
import OperatorCoverageAirtime from '@/components/products/airtime/OperatorCoverageAirtime'
import TechnicalSpecsAirtime from '@/components/products/airtime/TechnicalSpecsAirtime'
import CrossSellCallout from '@/components/products/airtime/CrossSellCallout'
import AirtimeCTABand from '@/components/products/airtime/AirtimeCTABand'
import { Footer } from '@/components/sections/Footer'

export const metadata = {
  title: 'Airtime Top-Ups',
  description: 'Wholesale airtime top-up API for diaspora remittance platforms, mobile money operators, and international resellers. 1700+ operators.',
}

export default function AirtimePage() {
  return (
    <>
      <Nav />
      <AirtimeHero />
      <UseCasesAirtime />
      <HowItWorksAirtime />
      <OperatorCoverageAirtime />
      <TechnicalSpecsAirtime />
      <CrossSellCallout />
      <AirtimeCTABand />
      <Footer />
    </>
  )
}
