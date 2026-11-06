'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, DownloadSimple } from '@phosphor-icons/react'
import { Button } from '@/components/callvox-ui/Button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const schema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Your name is required'),
  email: z.string().email('Enter a valid work email'),
})

type FormValues = z.infer<typeof schema>

export default function AirtimeRateDeckForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { companyName: '', contactName: '', email: '' },
  })

  async function onSubmit(values: FormValues) {
    setError(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'rate-deck', ...values }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong — please try again in a moment.')
    }
  }

  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white font-bold text-3xl md:text-4xl mb-4"
          >
            Get the airtime rate deck.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-navy-200 mb-10"
          >
            Corridor-by-corridor commission rates and FX spreads, sent to your inbox.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center gap-3"
            >
              <CheckCircle size={32} weight="fill" className="text-cyan-DEFAULT" />
              <p className="text-white font-semibold">Request received.</p>
              <p className="text-navy-200 text-sm max-w-sm">
                A specialist will send the rate deck to your email once your request is reviewed.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-left"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-100">Company name</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-white" />
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
                          <FormLabel className="text-navy-100">Your name</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-100">Work email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && <p className="text-red-300 text-sm">{error}</p>}

                  <Button
                    type="submit"
                    variant="white"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    <DownloadSimple size={18} className="mr-2" />
                    {form.formState.isSubmitting ? 'Sending…' : 'Download rate deck'}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
