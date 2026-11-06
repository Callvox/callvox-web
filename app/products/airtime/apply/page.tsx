import { redirect } from 'next/navigation'

export default function AirtimeApplyPage() {
  redirect('/get-started?type=carrier')
}
