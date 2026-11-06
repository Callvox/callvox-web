import { Metadata } from 'next'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import CarriersHero from '@/components/solutions/carriers/CarriersHero'
import PainPoints from '@/components/solutions/carriers/PainPoints'
import WhatYouGet from '@/components/solutions/carriers/WhatYouGet'
import SLADetails from '@/components/solutions/carriers/SLADetails'
import CarriersCTABand from '@/components/solutions/carriers/CarriersCTABand'

export const metadata: Metadata = {
  title: 'For Carriers & Telecom Operators',
  description:
    'Direct routes to 190+ countries and 1700+ operators. Wholesale voice, SMS and numbers from one team, built for carrier-to-carrier relationships.',
  openGraph: {
    title: 'For Carriers & Telecom Operators | Callvox',
    description:
      'Direct routes, one integration and one team to call. Wholesale voice, SMS and numbers for carriers.',
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
        <SLADetails />
        <CarriersCTABand />
      </main>
      <Footer />
    </>
  )
}
