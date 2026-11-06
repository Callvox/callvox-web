import { PageHero } from '@/components/PageHero'

export default function MVNOsHero() {
  return (
    <PageHero
      breadcrumb={[{ label: 'Solutions' }, { label: 'For MVNOs' }]}
      title="Wholesale services for MVNOs."
      body="Everything an MVNO needs from one wholesale partner: voice termination, A2P messaging, eSIM provisioning, airtime and virtual numbers. One integration, one invoice, one support contact."
      cta={{ type: 'mvno' }}
    />
  )
}
