import { PageHero } from '@/components/PageHero'

export function VoiceHero() {
  return (
    <PageHero
      breadcrumb={[{ label: 'Products' }, { label: 'Voice' }]}
      title="Premium CLI routes to every market that matters."
      body="500+ direct voice routes across Africa, Latin America, South Asia & the Middle East, with SIP trunk or IP peering interconnect."
      cta={{ type: 'carrier' }}
    />
  )
}
