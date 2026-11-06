import { Metadata } from 'next';
import Nav from '@/components/Nav';
import BlogHero from '@/components/pages/blog/BlogHero';
import ContentUpgradeCTA from '@/components/pages/blog/ContentUpgradeCTA';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Guides for wholesale telecom buyers are coming soon. In the meantime, request interconnect details, a rate deck or technical documentation.',
  // Thin page until the library exists
  robots: { index: false, follow: true },
};

export default function ResourcesPage() {
  return (
    <main>
      <Nav />
      <BlogHero />
      <ContentUpgradeCTA />
      <Footer />
    </main>
  );
}
