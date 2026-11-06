import { PageHero } from '@/components/PageHero'

export default function DIDsHero() {
  return (
    <PageHero
      breadcrumb={[{ label: 'Products' }, { label: 'DIDs / Numbers' }]}
      title="Virtual numbers for carriers and platforms."
      body="Wholesale DID numbers for carriers, UCaaS platforms, resellers and enterprises. Local, national, toll-free, mobile and UIFN numbers, with availability varying by country."
      cta={{ type: 'carrier' }}
    />
  )
}
