import { PageHero } from '@/components/PageHero'

export function ESIMHero() {
  return (
    <PageHero
      breadcrumb={[{ label: 'Products' }, { label: 'eSIM' }]}
      title="eSIM profiles, provisioned by API."
      body="Wholesale eSIM provisioning for MVNOs, travel operators, and enterprise IoT. Over-the-air profile delivery, available through the same integration as voice, SMS, airtime and numbers."
      cta={{ type: 'mvno' }}
    />
  )
}
