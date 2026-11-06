import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import AirtimeTransactionsView from '@/components/products/airtime/transactions/AirtimeTransactionsView'

export const metadata = {
  title: 'Sandbox Transactions — Airtime',
  description: 'Preview your airtime sandbox transaction log.',
}

export default function AirtimeTransactionsPage() {
  return (
    <>
      <Nav />
      <section className="bg-white px-4 pt-16 pb-4">
        <div className="hero-inner">
          <div className="text-sm text-navy-400 mb-4">
            Products → Airtime Top-Ups → Transactions
          </div>
          <h1 className="text-navy-DEFAULT font-bold text-3xl md:text-4xl">
            Your airtime transactions.
          </h1>
        </div>
      </section>
      <AirtimeTransactionsView />
      <Footer />
    </>
  )
}
