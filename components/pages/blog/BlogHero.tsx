import { PageHero } from '@/components/PageHero'

export default function BlogHero() {
  return (
    <PageHero
      tone="light"
      align="center"
      title="Guides for wholesale buyers, coming soon."
      body="We are building a library of technical and commercial guides for carriers, MVNOs and resellers. Until then, the fastest way to get what you need is to ask us directly."
      cta={false}
    />
  )
}
