import { PageHero } from '@/components/PageHero'

export default function ResellersHero() {
  return (
    <PageHero
      breadcrumb={[{ label: 'Solutions' }, { label: 'For Resellers' }]}
      title="Margin-first wholesale. Built for resellers."
      body="Voice, SMS, airtime, eSIM and numbers from one wholesale partner, with one integration, one invoice and one support contact. Tell us your corridors and we will send a rate deck."
      cta={{ type: 'reseller' }}
    />
  )
}
