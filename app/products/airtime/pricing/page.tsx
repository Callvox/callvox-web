import { redirect } from 'next/navigation'

// Rates change constantly, so there is no public pricing page. Everything goes to the signup form.
export default function AirtimePricingPage() {
  redirect('/get-started?type=carrier')
}
