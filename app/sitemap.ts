import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://callvox.net'
  const lastModified = new Date()

  // Core pages
  const corePages = [
    '',
    '/about',
    '/coverage',
    '/developers',
    '/pricing',
    '/get-started',
    '/privacy',
    '/terms',
    '/dpa',
  ]

  // Product pages
  const productPages = [
    '/products/voice',
    '/products/sms',
    '/products/airtime',
    '/products/esim',
    '/products/dids',
  ]

  // Solution pages
  const solutionPages = [
    '/solutions/carriers',
    '/solutions/mvnos',
    '/solutions/resellers',
    '/solutions/enterprises',
  ]

  const allPages = [...corePages, ...productPages, ...solutionPages]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/products') ? 0.9 : 0.8,
  }))
}
