/**
 * Single source of truth for the four core regions and their example destinations.
 * Example destinations are representative, not an exhaustive route list.
 * Verified totals (routes, countries, operators) live in lib/stats.ts. Do not add
 * per-region counts here until they are verified.
 */
export type RegionName = 'Latin America' | 'Africa' | 'South Asia' | 'Middle East'

export const regions: { title: RegionName; destinations: string[] }[] = [
  { title: 'Latin America', destinations: ['Mexico', 'Brazil', 'Colombia', 'Peru', 'Argentina', 'Ecuador'] },
  { title: 'Africa', destinations: ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt', 'Tanzania', 'Ethiopia'] },
  { title: 'South Asia', destinations: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal'] },
  { title: 'Middle East', destinations: ['UAE', 'Saudi Arabia', 'Kuwait', 'Jordan', 'Lebanon', 'Oman'] },
]
