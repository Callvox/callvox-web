import { Metadata } from 'next'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import CarriersHero from '@/components/solutions/carriers/CarriersHero'
import PainPoints from '@/components/solutions/carriers/PainPoints'
import WhatYouGet from '@/components/solutions/carriers/WhatYouGet'
import CarriersProducts from '@/components/solutions/carriers/CarriersProducts'
import CarriersOnboarding from '@/components/solutions/carriers/CarriersOnboarding'
import CarriersCTABand from '@/components/solutions/carriers/CarriersCTABand'

export const metadata: Metadata = {
  title: 'For Carriers & Telecom Operators',
  description:
    '500+ direct routes across 190+ countries, since 2007. Wholesale voice, SMS, airtime, eSIM and numbers from one team, built for carrier-to-carrier relationships.',
  openGraph: {
    title: 'For Carriers & Telecom Operators | Callvox',
    description:
      'Direct routes, one integration and one team to call. Wholesale voice, SMS, airtime, eSIM and numbers for carriers.',
    type: 'website',
  },
}

export default function CarriersPage() {
  return (
    <>
      <Nav />
      <main>
        <CarriersHero />
        <PainPoints />
        <WhatYouGet />
        <CarriersProducts />
        <CarriersOnboarding />
        <CarriersCTABand />
      </main>
      <Footer />
    </>
  )
}
