'use client'

import { useMemo, useState } from 'react'
import { m as motion } from 'framer-motion'
import { MagnifyingGlass } from '@phosphor-icons/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/callvox-ui/Badge'
import { airtimeCoverage, corridors, type CoverageStatus } from '@/lib/data/airtime-coverage'

export default function AirtimeCoverageTable() {
  const [corridor, setCorridor] = useState<string>('all')
  const [status, setStatus] = useState<string>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return airtimeCoverage.filter((row) => {
      if (corridor !== 'all' && row.corridor !== corridor) return false
      if (status !== 'all' && row.status !== status) return false
      if (query.trim()) {
        const q = query.trim().toLowerCase()
        if (!row.country.toLowerCase().includes(q) && !row.operator.toLowerCase().includes(q)) {
          return false
        }
      }
      return true
    })
  }, [corridor, status, query])

  const statusBadge = (s: CoverageStatus) =>
    s === 'live' ? (
      <Badge variant="cyan">Live</Badge>
    ) : (
      <Badge variant="default">Coming soon</Badge>
    )

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <MagnifyingGlass
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
            />
            <Input
              placeholder="Search country or operator…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={corridor} onValueChange={setCorridor}>
            <SelectTrigger className="w-full sm:w-56">
              <SelectValue placeholder="All corridors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All corridors</SelectItem>
              {corridors.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="coming-soon">Coming soon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border border-navy-100 rounded-xl overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Corridor</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Operator</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="text-navy-600">{row.corridor}</TableCell>
                  <TableCell className="font-medium text-navy-DEFAULT">{row.country}</TableCell>
                  <TableCell className="text-navy-600">{row.operator}</TableCell>
                  <TableCell>{statusBadge(row.status)}</TableCell>
                  <TableCell className="text-navy-400 text-sm max-w-xs">{row.notes}</TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-navy-400 py-10">
                    No operators match those filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </motion.div>

        <p className="text-navy-400 text-xs mt-6">
          Coverage above reflects operators genuinely live today vs. those still being onboarded.
          &quot;1700+ operators&quot; describes the aggregate network reachable across all corridors,
          not all-at-once day-one availability per operator. Limits vary per market; see notes
          above for market-specific caveats.
        </p>
      </div>
    </section>
  )
}
