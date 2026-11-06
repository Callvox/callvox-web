import { PageHero } from '@/components/PageHero'

export default function PricingHero() {
  return (
    <PageHero
      tone="light"
      align="center"
      title="Rates built around your corridors."
      body="Wholesale pricing is quoted by destination, service and volume. Tell us where your traffic goes and we will send a rate deck for the corridors that matter to you."
      cta={{ type: 'carrier' }}
    />
  )
}
