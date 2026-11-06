import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import AirtimeCoverageHero from '@/components/products/airtime/coverage/AirtimeCoverageHero'
import AirtimeCoverageTable from '@/components/products/airtime/coverage/AirtimeCoverageTable'

export const metadata = {
  title: 'Airtime Operator Coverage',
  description:
    'Live and coming-soon airtime top-up operator coverage across Africa, South Asia, Latin America, and the Middle East.',
}

export default function AirtimeCoveragePage() {
  return (
    <>
      <Nav />
      <main>
        <AirtimeCoverageHero />
        <AirtimeCoverageTable />
      </main>
      <Footer />
    </>
  )
}
