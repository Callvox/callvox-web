import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/sections/Hero'

export const metadata: Metadata = {
  title: 'Callvox',
  // Only shown to visitors in the US; keep it out of search results.
  robots: { index: false, follow: false },
}

// US homepage: the homepage hero only. No navigation, no Contact us button,
// no links to other pages. The logo is a plain, unlinked image.
export default function UsHome() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex h-20 w-full max-w-page items-center px-4 sm:px-6 lg:px-8">
          <Image
            src="/callvox-logo-white.png"
            alt="Callvox"
            width={599}
            height={134}
            priority
            className="h-auto w-[136px]"
          />
        </div>
      </header>
      <main id="main-content">
        <Hero />
      </main>
    </>
  )
}
