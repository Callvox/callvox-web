import { PageHero } from '@/components/PageHero'

export default function EnterprisesHero() {
  return (
    <PageHero
      breadcrumb={[{ label: 'Solutions' }, { label: 'For Enterprises' }]}
      title="Business voice and numbers, direct from a wholesale carrier."
      body="SIP trunking, virtual numbers and voice for businesses running on legacy PSTN or fragmented UCaaS providers. One provider, one invoice, one support contact."
      cta={{ type: 'enterprise' }}
    />
  )
}
