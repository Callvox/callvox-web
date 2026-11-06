import { STATS } from '@/lib/stats'
import { PageHero } from '@/components/PageHero'

export default function CoverageHero() {
  return (
    <PageHero
      title="Coverage across emerging markets."
      body={`${STATS.routes.value} direct voice routes across four regions, ${STATS.operators.value} airtime operators, and ${STATS.countries.value} countries reached through one platform.`}
      cta={false}
    />
  )
}
