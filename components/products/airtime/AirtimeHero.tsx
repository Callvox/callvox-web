import { STATS } from '@/lib/stats'
import { PageHero } from '@/components/PageHero'

export default function AirtimeHero() {
  return (
    <PageHero
      title={`${STATS.operators.value} operators. Built for remittance corridors.`}
      body="Wholesale airtime top-up API for diaspora remittance platforms, mobile money operators, and international resellers. Africa, South Asia, Latin America and the Middle East covered."
      cta={{ type: 'reseller' }}
    />
  )
}
