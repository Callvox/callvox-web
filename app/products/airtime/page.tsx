import Nav from '@/components/Nav'
import AirtimeHero from '@/components/products/airtime/AirtimeHero'
import UseCasesAirtime from '@/components/products/airtime/UseCasesAirtime'
import HowItWorksAirtime from '@/components/products/airtime/HowItWorksAirtime'
import OperatorCoverageAirtime from '@/components/products/airtime/OperatorCoverageAirtime'
import TechnicalSpecsAirtime from '@/components/products/airtime/TechnicalSpecsAirtime'
import AirtimeCTABand from '@/components/products/airtime/AirtimeCTABand'
import { Footer } from '@/components/sections/Footer'

export const metadata = {
  title: 'Wholesale Airtime Top-Up API',
  description: 'Wholesale airtime top-up REST API with webhook confirmation for remittance platforms, mobile money operators and resellers. 1700+ operators across Africa, South Asia, Latin America and the Middle East.',
}

export default function AirtimePage() {
  return (
    <>
      <Nav />
      <main>
        <AirtimeHero />
        <UseCasesAirtime />
        <HowItWorksAirtime />
        <OperatorCoverageAirtime />
        <TechnicalSpecsAirtime />
        <AirtimeCTABand />
      </main>
      <Footer />
    </>
  )
}
