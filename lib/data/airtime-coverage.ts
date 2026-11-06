// Airtime operator coverage dataset.
//
// PLACEHOLDER DATA: statuses and notes below are illustrative, built to show the
// shape of real coverage (per-country live/coming-soon status, delivery time,
// regulatory caveats). Before launch this must be replaced with confirmed data
// from the actual aggregator/MNO agreements in hand — do not treat this as a
// verified operator list.
//
// Schema is intentionally generic (country / operator / product / status / notes)
// so it can be extended with voice, SMS, eSIM, and DID rows later and power a
// single site-wide /coverage page without a rework.

export type CoverageStatus = 'live' | 'coming-soon'

export type Corridor = 'Africa' | 'South Asia' | 'Latin America' | 'Middle East'

export interface CoverageRow {
  id: string
  corridor: Corridor
  country: string
  operator: string
  product: 'airtime'
  status: CoverageStatus
  avgDeliveryTime: string | null // null when not yet live
  notes: string
}

export const airtimeCoverage: CoverageRow[] = [
  // Africa
  { id: 'ng-mtn', corridor: 'Africa', country: 'Nigeria', operator: 'MTN', product: 'airtime', status: 'live', avgDeliveryTime: '1.8s', notes: 'Enhanced KYC tier applies for higher-value transactions.' },
  { id: 'ng-airtel', corridor: 'Africa', country: 'Nigeria', operator: 'Airtel', product: 'airtime', status: 'live', avgDeliveryTime: '2.1s', notes: 'Enhanced KYC tier applies for higher-value transactions.' },
  { id: 'ng-glo', corridor: 'Africa', country: 'Nigeria', operator: 'Glo', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'ng-9mobile', corridor: 'Africa', country: 'Nigeria', operator: '9mobile', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'ke-safaricom', corridor: 'Africa', country: 'Kenya', operator: 'Safaricom', product: 'airtime', status: 'live', avgDeliveryTime: '1.6s', notes: 'Standard KYC tier; M-Pesa-linked daily limits apply.' },
  { id: 'ke-airtel', corridor: 'Africa', country: 'Kenya', operator: 'Airtel', product: 'airtime', status: 'live', avgDeliveryTime: '2.0s', notes: 'Standard KYC tier.' },
  { id: 'za-vodacom', corridor: 'Africa', country: 'South Africa', operator: 'Vodacom', product: 'airtime', status: 'live', avgDeliveryTime: '1.9s', notes: 'Standard KYC tier.' },
  { id: 'za-mtn', corridor: 'Africa', country: 'South Africa', operator: 'MTN', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'gh-mtn', corridor: 'Africa', country: 'Ghana', operator: 'MTN', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Direct MNO agreement pending.' },
  { id: 'gh-airteltigo', corridor: 'Africa', country: 'Ghana', operator: 'AirtelTigo', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Direct MNO agreement pending.' },
  { id: 'ug-airtel', corridor: 'Africa', country: 'Uganda', operator: 'Airtel', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },

  // South Asia
  { id: 'in-jio', corridor: 'South Asia', country: 'India', operator: 'Jio', product: 'airtime', status: 'live', avgDeliveryTime: '1.4s', notes: 'RBI-aligned remittance-linked daily limits apply.' },
  { id: 'in-airtel', corridor: 'South Asia', country: 'India', operator: 'Airtel', product: 'airtime', status: 'live', avgDeliveryTime: '1.5s', notes: 'RBI-aligned remittance-linked daily limits apply.' },
  { id: 'in-vi', corridor: 'South Asia', country: 'India', operator: 'Vi (Vodafone Idea)', product: 'airtime', status: 'live', avgDeliveryTime: '2.2s', notes: 'RBI-aligned remittance-linked daily limits apply.' },
  { id: 'pk-jazz', corridor: 'South Asia', country: 'Pakistan', operator: 'Jazz', product: 'airtime', status: 'live', avgDeliveryTime: '2.0s', notes: 'Standard KYC tier.' },
  { id: 'pk-telenor', corridor: 'South Asia', country: 'Pakistan', operator: 'Telenor', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'bd-banglalink', corridor: 'South Asia', country: 'Bangladesh', operator: 'Banglalink', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'bd-robi', corridor: 'South Asia', country: 'Bangladesh', operator: 'Robi', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'lk-dialog', corridor: 'South Asia', country: 'Sri Lanka', operator: 'Dialog', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Direct MNO agreement pending.' },

  // Latin America
  { id: 'mx-telcel', corridor: 'Latin America', country: 'Mexico', operator: 'Telcel', product: 'airtime', status: 'live', avgDeliveryTime: '1.7s', notes: 'Standard KYC tier.' },
  { id: 'mx-movistar', corridor: 'Latin America', country: 'Mexico', operator: 'Movistar', product: 'airtime', status: 'live', avgDeliveryTime: '2.3s', notes: 'Standard KYC tier.' },
  { id: 'br-claro', corridor: 'Latin America', country: 'Brazil', operator: 'Claro', product: 'airtime', status: 'live', avgDeliveryTime: '2.1s', notes: 'Regulatory reporting thresholds apply.' },
  { id: 'br-tim', corridor: 'Latin America', country: 'Brazil', operator: 'TIM', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'co-claro', corridor: 'Latin America', country: 'Colombia', operator: 'Claro', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Direct MNO agreement pending.' },
  { id: 'ar-personal', corridor: 'Latin America', country: 'Argentina', operator: 'Personal', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },

  // Middle East
  { id: 'ae-etisalat', corridor: 'Middle East', country: 'UAE', operator: 'Etisalat', product: 'airtime', status: 'live', avgDeliveryTime: '1.3s', notes: 'Standard KYC tier.' },
  { id: 'ae-du', corridor: 'Middle East', country: 'UAE', operator: 'du', product: 'airtime', status: 'live', avgDeliveryTime: '1.5s', notes: 'Standard KYC tier.' },
  { id: 'sa-stc', corridor: 'Middle East', country: 'Saudi Arabia', operator: 'STC', product: 'airtime', status: 'live', avgDeliveryTime: '1.9s', notes: 'Standard KYC tier.' },
  { id: 'sa-zain', corridor: 'Middle East', country: 'Saudi Arabia', operator: 'Zain', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
  { id: 'eg-vodafone', corridor: 'Middle East', country: 'Egypt', operator: 'Vodafone', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Direct MNO agreement pending.' },
  { id: 'ma-orange', corridor: 'Middle East', country: 'Morocco', operator: 'Orange', product: 'airtime', status: 'coming-soon', avgDeliveryTime: null, notes: 'Aggregator onboarding in progress.' },
]

export const corridors: Corridor[] = ['Africa', 'South Asia', 'Latin America', 'Middle East']

export function summarize(rows: CoverageRow[]) {
  const live = rows.filter((r) => r.status === 'live').length
  const comingSoon = rows.filter((r) => r.status === 'coming-soon').length
  const countries = new Set(rows.map((r) => r.country)).size
  return { live, comingSoon, countries, total: rows.length }
}
