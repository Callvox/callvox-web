import { STATS } from '@/lib/stats'
import { PageHero } from '@/components/PageHero'

export default function CoverageHero() {
  return (
    <PageHero
      title="Coverage across emerging markets."
      body={`${STATS.routes.value} voice routes, ${STATS.operators.value} airtime operators and ${STATS.countries.value} countries. Built for the corridors that matter most.`}
      cta={{ type: 'carrier' }}
    />
  )
}
