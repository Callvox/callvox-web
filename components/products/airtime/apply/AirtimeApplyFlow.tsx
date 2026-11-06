'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, Copy, ShieldCheck, ArrowRight, ArrowLeft } from '@phosphor-icons/react'
import { Button } from '@/components/callvox-ui/Button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { corridors } from '@/lib/data/airtime-coverage'

const schema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().optional(),
  corridors: z.array(z.string()).min(1, 'Select at least one corridor'),
  monthlyVolume: z.string().min(1, 'Select an estimated monthly volume'),
  businessRegistrationName: z.string().min(1, 'Registered business name is required'),
  businessRegistrationNumber: z.string().min(1, 'Business registration number is required'),
  registrationCountry: z.string().min(1, 'Country of registration is required'),
})

type FormValues = z.infer<typeof schema>

const STEP_FIELDS: Record<number, (keyof FormValues)[]> = {
  1: ['companyName', 'contactName', 'email', 'corridors', 'monthlyVolume'],
  2: ['businessRegistrationName', 'businessRegistrationNumber', 'registrationCountry'],
}

const volumeOptions = [
  '<$25,000 / month',
  '$25,000–$100,000 / month',
  '$100,000–$250,000 / month',
  '$250,000+ / month',
]

interface ApplyResult {
  referenceId: string
  kycMessage: string
  sandbox: { apiKey: string; apiSecret: string; environment: string }
}

const steps = ['Qualification', 'KYC intake', 'Sandbox access', 'Confirmation']

export default function AirtimeApplyFlow() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [result, setResult] = useState<ApplyResult | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      corridors: [],
      monthlyVolume: '',
      businessRegistrationName: '',
      businessRegistrationNumber: '',
      registrationCountry: '',
    },
  })

  async function goNext() {
    const fields = STEP_FIELDS[step]
    if (fields) {
      const valid = await form.trigger(fields)
      if (!valid) return
    }
    if (step === 2) {
      await submitApplication()
      return
    }
    setStep((s) => s + 1)
  }

  function goBack() {
    setStep((s) => Math.max(1, s - 1))
  }

  async function submitApplication() {
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/airtime/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.getValues()),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error ?? 'Submission failed')
      }
      setResult(data)
      setStep(3)
    } catch (e) {
      setSubmitError('Something went wrong submitting your application — please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function copy(value: string, label: string) {
    navigator.clipboard.writeText(value)
    setCopied(label)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container max-w-2xl">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-12">
          {steps.map((label, idx) => {
            const n = idx + 1
            const active = n === step || (n < step)
            return (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                    n < step
                      ? 'bg-cyan-DEFAULT text-white'
                      : n === step
                        ? 'bg-navy-DEFAULT text-white'
                        : 'bg-navy-50 text-navy-400'
                  }`}
                >
                  {n < step ? <Check size={16} weight="bold" /> : n}
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-px flex-1 ${n < step ? 'bg-cyan-DEFAULT' : 'bg-navy-100'}`} />
                )}
              </div>
            )
          })}
        </div>
        <p className="text-navy-400 text-sm mb-8 -mt-8">{steps[step - 1]}</p>

        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-navy-DEFAULT font-bold text-2xl mb-2">
                    Tell us about your business.
                  </h2>
                  <p className="text-navy-600 text-sm mb-6">
                    This also lets us route your account to the right specialist.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work email</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (optional)</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="corridors"
                    render={() => (
                      <FormItem>
                        <FormLabel>Intended corridor(s)</FormLabel>
                        <div className="grid grid-cols-2 gap-3 mt-1">
                          {corridors.map((c) => {
                            const selected = form.watch('corridors')?.includes(c)
                            return (
                              <label
                                key={c}
                                className="flex items-center gap-2 border border-navy-100 rounded-lg px-3 py-2 cursor-pointer hover:bg-navy-50/50"
                              >
                                <Checkbox
                                  checked={selected}
                                  onCheckedChange={(checked) => {
                                    const current = form.getValues('corridors') || []
                                    if (checked) {
                                      form.setValue('corridors', [...current, c], { shouldValidate: true })
                                    } else {
                                      form.setValue(
                                        'corridors',
                                        current.filter((v) => v !== c),
                                        { shouldValidate: true }
                                      )
                                    }
                                  }}
                                />
                                <span className="text-sm text-navy-600">{c}</span>
                              </label>
                            )
                          })}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="monthlyVolume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated monthly transaction volume</FormLabel>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {volumeOptions.map((v) => (
                              <SelectItem key={v} value={v}>
                                {v}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-navy-DEFAULT font-bold text-2xl mb-2">
                    Business verification (KYC).
                  </h2>
                  <div className="flex gap-3 bg-navy-50/60 border border-navy-100 rounded-lg p-4 mb-2">
                    <ShieldCheck size={20} className="text-navy-600 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-600 text-sm leading-relaxed">
                      <span className="font-semibold text-navy-DEFAULT">
                        Required before production access.
                      </span>{' '}
                      Sandbox credentials are issued right after this step regardless — but moving
                      real transactions requires our compliance team to confirm these details
                      first.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="businessRegistrationName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registered business name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="businessRegistrationNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business registration number</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="registrationCountry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country of registration</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {submitError && <p className="text-red-600 text-sm">{submitError}</p>}
                </motion.div>
              )}

              {step === 3 && result && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-navy-DEFAULT font-bold text-2xl mb-2">
                    Sandbox access is ready.
                  </h2>
                  <p className="text-navy-600 text-sm mb-4">
                    Use these credentials against the sandbox environment right away. They will not
                    process real transactions.
                  </p>

                  <div className="bg-navy-DEFAULT rounded-xl p-6 space-y-4">
                    {(['apiKey', 'apiSecret'] as const).map((k) => (
                      <div key={k}>
                        <div className="text-navy-300 text-xs uppercase tracking-wide mb-1">
                          {k === 'apiKey' ? 'Sandbox API key' : 'Sandbox API secret'}
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 text-cyan-DEFAULT text-sm bg-black/20 rounded px-3 py-2 overflow-x-auto">
                            {result.sandbox[k]}
                          </code>
                          <button
                            type="button"
                            onClick={() => copy(result.sandbox[k], k)}
                            className="text-white/70 hover:text-white transition-colors flex-shrink-0"
                          >
                            {copied === k ? <Check size={18} /> : <Copy size={18} />}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-navy-50/60 border border-navy-100 rounded-lg p-4">
                    <p className="text-navy-600 text-sm">{result.kycMessage}</p>
                  </div>

                  <p className="text-navy-400 text-xs">
                    Reference ID: <span className="font-mono">{result.referenceId}</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-10">
              {step > 1 && step < 3 ? (
                <Button variant="ghost" type="button" onClick={goBack}>
                  <ArrowLeft size={16} className="mr-2" /> Back
                </Button>
              ) : (
                <span />
              )}

              {step < 3 ? (
                <Button variant="primary" type="button" onClick={goNext} disabled={submitting}>
                  {submitting
                    ? 'Submitting…'
                    : step === 2
                      ? 'Submit & get sandbox access'
                      : 'Continue'}
                  {!submitting && <ArrowRight size={16} className="ml-2" />}
                </Button>
              ) : (
                <Button variant="primary" type="button" onClick={() => setStep(4)}>
                  Done <ArrowRight size={16} className="ml-2" />
                </Button>
              )}
            </div>

            {step === 4 && result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 text-center border-t border-navy-100 pt-10"
              >
                <h3 className="text-navy-DEFAULT font-bold text-xl mb-2">You&apos;re all set.</h3>
                <p className="text-navy-600 text-sm mb-6 max-w-md mx-auto">
                  Your application ({result.referenceId}) is with compliance. Start building in
                  sandbox now — you&apos;ll get an email as soon as production access unlocks.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <a href="/developers">
                    <Button variant="ghost">View API docs</Button>
                  </a>
                  <a href="/products/airtime/transactions">
                    <Button variant="primary">View sandbox transactions</Button>
                  </a>
                </div>
              </motion.div>
            )}
          </form>
        </Form>
      </div>
    </section>
  )
}
