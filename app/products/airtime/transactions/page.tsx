import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import AirtimeTransactionsView from '@/components/products/airtime/transactions/AirtimeTransactionsView'
import { PageHero } from '@/components/PageHero'

export const metadata = {
  title: 'Sandbox Transactions — Airtime',
  description: 'Preview your airtime sandbox transaction log.',
  robots: { index: false, follow: false },
}

export default function AirtimeTransactionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          tone="light"
          compact
          title="Your airtime transactions."
        />
        <AirtimeTransactionsView />
      </main>
      <Footer />
    </>
  )
}
