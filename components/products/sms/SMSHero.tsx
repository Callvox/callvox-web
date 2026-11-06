import { PageHero } from '@/components/PageHero'

export default function SMSHero() {
  return (
    <PageHero
      title="Direct routes for A2P messaging."
      body="Wholesale A2P messaging for carriers, aggregators and platforms, delivered over SMPP and a REST API."
      cta={{ type: 'carrier' }}
    />
  )
}
