'use client'

import { useState } from 'react'
import { m as motion } from 'framer-motion'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/callvox-ui/Button'
import { Badge } from '@/components/callvox-ui/Badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Transaction {
  id: string
  msisdn: string
  operator: string
  amount: string
  status: 'delivered' | 'failed' | 'pending'
  reference: string
  timestamp: string
}

export default function AirtimeTransactionsView() {
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [transactions, setTransactions] = useState<Transaction[] | null>(null)

  async function loadTransactions(e: React.FormEvent) {
    e.preventDefault()
    if (!apiKey.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/airtime/transactions?key=${encodeURIComponent(apiKey)}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error ?? 'Could not load transactions')
      setTransactions(data.transactions)
    } catch {
      setError('Could not load transactions for that key.')
    } finally {
      setLoading(false)
    }
  }

  const statusBadge = (s: Transaction['status']) => {
    if (s === 'delivered') return <Badge variant="cyan">Delivered</Badge>
    if (s === 'pending') return <Badge variant="default">Pending</Badge>
    return <Badge variant="navy">Failed</Badge>
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        {!transactions && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center border border-navy-100 rounded-2xl p-10"
          >
            <MagnifyingGlass size={28} className="text-navy-400 mx-auto mb-4" />
            <h2 className="text-navy-DEFAULT font-bold text-xl mb-2">
              Enter your sandbox API key
            </h2>
            <p className="text-navy-600 text-sm mb-6">
              Paste the sandbox API key from your application confirmation to preview recent
              transactions.
            </p>
            <form onSubmit={loadTransactions} className="flex gap-3">
              <Input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sbx_key_…"
              />
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Loading…' : 'View'}
              </Button>
            </form>
            {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
            <p className="text-navy-400 text-xs mt-6">
              Sandbox keys are issued once your account is set up.
            </p>
          </motion.div>
        )}

        {transactions && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h2 className="text-navy-DEFAULT font-bold text-2xl">Recent transactions</h2>
              <Button variant="ghost" size="sm" onClick={() => setTransactions(null)}>
                Use a different key
              </Button>
            </div>

            <div className="border border-navy-100 rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>MSISDN</TableHead>
                    <TableHead>Operator</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="font-mono text-sm text-navy-600">{t.msisdn}</TableCell>
                      <TableCell className="text-navy-600">{t.operator}</TableCell>
                      <TableCell className="text-navy-600">{t.amount}</TableCell>
                      <TableCell>{statusBadge(t.status)}</TableCell>
                      <TableCell className="font-mono text-xs text-navy-400">{t.reference}</TableCell>
                      <TableCell className="text-navy-400 text-xs">
                        {new Date(t.timestamp).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="text-navy-400 text-xs mt-6">
              This is a lightweight preview scoped to airtime only, ahead of the full customer
              portal (usage analytics, billing, key management).
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
