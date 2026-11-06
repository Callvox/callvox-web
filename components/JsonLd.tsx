interface OrganizationJsonLdProps {
  type?: 'Organization' | 'Corporation'
}

export function OrganizationJsonLd({ type = 'Organization' }: OrganizationJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Callvox',
    url: 'https://callvox.net',
    logo: 'https://callvox.net/icon.png',
    description:
      'The unified wholesale platform built for the world\'s fastest-growing markets. Voice, SMS, airtime, eSIM & DIDs on one platform.',
    foundingDate: '2007',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://callvox.net/get-started',
    },
    areaServed: [
      { '@type': 'Continent', name: 'Africa' },
      { '@type': 'Continent', name: 'South America' },
      { '@type': 'GeoShape', name: 'Middle East' },
      { '@type': 'GeoShape', name: 'South Asia' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ProductJsonLdProps {
  name: string
  description: string
  url: string
}

export function ProductJsonLd({ name, description, url }: ProductJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    brand: {
      '@type': 'Brand',
      name: 'Callvox',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Callvox',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface WebPageJsonLdProps {
  title: string
  description: string
  url: string
}

export function WebPageJsonLd({ title, description, url }: WebPageJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Callvox',
      url: 'https://callvox.net',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
