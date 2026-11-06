import Nav from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { WhyCallvox } from '@/components/sections/WhyCallvox'
import { AudiencePaths } from '@/components/sections/AudiencePaths'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { TrustBar } from '@/components/sections/TrustBar'
import { Footer } from '@/components/sections/Footer'
import { OrganizationJsonLd } from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Nav />
      <main id="main-content">
        <Hero />
        <ProductGrid />
        <WhyCallvox />
        <AudiencePaths />
        <CaseStudy />
        <TrustBar />
      </main>
      <Footer />
    </>
  )
}
