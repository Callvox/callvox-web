import { summarize, airtimeCoverage } from '@/lib/data/airtime-coverage'
import { PageHero } from '@/components/PageHero'

export default function AirtimeCoverageHero() {
  const { live, comingSoon, countries } = summarize(airtimeCoverage)
  return (
    <PageHero
      breadcrumb={[{ label: 'Products' }, { label: 'Airtime Top-Ups', href: '/products/airtime' }, { label: 'Coverage' }]}
      title="Operator coverage, by corridor."
      body={`${live} operators are live today across ${countries} countries. ${comingSoon} more are in active onboarding. We don't count "coming soon" as "live."`}
      cta={false}
    />
  )
}
