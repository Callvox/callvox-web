'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { DOTS, DOT_COLS, DOT_ROWS, DOT_STEP, DOT_LON0, DOT_LAT0 } from '@/lib/world-dots'
import { STATS } from '@/lib/stats'
import { regions } from '@/lib/coverage'
import { Section } from '@/components/Section'

type RegionKey = 'Africa' | 'South Asia' | 'Latin America' | 'Middle East'

// Longitude/latitude boxes used to light up land dots. Approximate, for illustration.
const BOXES: Record<RegionKey, { lon: [number, number]; lat: [number, number] }[]> = {
  // Middle East is listed first so the Arabian Peninsula and the Levant are not claimed by the wider Africa box.
  'Middle East': [
    { lon: [35.5, 60], lat: [20, 38] },
    { lon: [34.2, 60], lat: [29, 38] },
    { lon: [41, 55], lat: [12, 20] },
  ],
  Africa: [{ lon: [-18, 52], lat: [-35, 33] }],
  'South Asia': [{ lon: [60, 93], lat: [5, 37] }],
  'Latin America': [{ lon: [-118, -34], lat: [-56, 30] }],
}

const REGIONS: RegionKey[] = ['Latin America', 'Africa', 'South Asia', 'Middle East']

const MARKETS = [
  { name: 'Lagos', lon: 3.4, lat: 6.5 },
  { name: 'Nairobi', lon: 36.8, lat: -1.3 },
  { name: 'Johannesburg', lon: 28, lat: -26.2 },
  { name: 'Mumbai', lon: 72.8, lat: 19.1 },
  { name: 'Delhi', lon: 77.2, lat: 28.6 },
  { name: 'Dhaka', lon: 90.4, lat: 23.8 },
  { name: 'Mexico City', lon: -99.1, lat: 19.4 },
  { name: 'São Paulo', lon: -46.6, lat: -23.5 },
  { name: 'Dubai', lon: 55.3, lat: 25.2 },
  { name: 'Cairo', lon: 31.2, lat: 30 },
]

const LAT_MIN = DOT_LAT0 - (DOT_ROWS - 1) * DOT_STEP

function regionOf(lon: number, lat: number): RegionKey | null {
  for (const r of REGIONS)
    for (const b of BOXES[r])
      if (lon >= b.lon[0] && lon <= b.lon[1] && lat >= b.lat[0] && lat <= b.lat[1]) return r
  return null
}

export default function InteractiveMap() {
  const [active, setActive] = useState<RegionKey>('Latin America')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const dots = useMemo(
    () =>
      DOTS.split(' ').map((p) => {
        const [c, r] = p.split(',').map(Number)
        const lon = DOT_LON0 + c * DOT_STEP
        const lat = DOT_LAT0 - r * DOT_STEP
        return { c, r, region: regionOf(lon, lat) }
      }),
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const w = rect.width
      const h = rect.height
      ctx.clearRect(0, 0, w, h)
      const rad = Math.max(0.8, (w / DOT_COLS) * 0.22)
      for (const d of dots) {
        const on = d.region === active
        ctx.fillStyle = on ? 'rgba(56,189,248,0.95)' : d.region ? 'rgba(164,198,238,0.4)' : 'rgba(164,198,238,0.2)'
        ctx.beginPath()
        ctx.arc(d.c * (w / DOT_COLS), (d.r / (DOT_ROWS - 1)) * h, on ? rad * 1.25 : rad, 0, Math.PI * 2)
        ctx.fill()
      }
      for (const m of MARKETS) {
        const reg = regionOf(m.lon, m.lat)
        const x = ((m.lon - DOT_LON0) / 360) * w
        const y = ((DOT_LAT0 - m.lat) / (DOT_LAT0 - LAT_MIN)) * h
        const on = reg === active
        ctx.beginPath()
        ctx.arc(x, y, on ? 4 : 2.5, 0, Math.PI * 2)
        ctx.fillStyle = on ? '#ffffff' : 'rgba(255,255,255,0.55)'
        ctx.fill()
        if (on) {
          ctx.beginPath()
          ctx.arc(x, y, 9, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgba(56,189,248,0.8)'
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }
    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [active, dots])

  const examples = regions.find((r) => r.title === active)?.destinations ?? []
  const totals = [
    { label: 'Direct routes', value: STATS.routes.value },
    { label: 'Airtime operators', value: STATS.operators.value },
    { label: 'Countries', value: STATS.countries.value },
  ]

  return (
    <Section>
      <div>
        <div className="surface-ink overflow-hidden rounded-md bg-navy-DEFAULT text-white">
          <div role="tablist" aria-label="Region" className="flex flex-wrap border-b border-white/10">
            {REGIONS.map((r) => (
              <button
                key={r}
                role="tab"
                aria-selected={active === r}
                onClick={() => setActive(r)}
                onMouseEnter={() => setActive(r)}
                className={`label border-r border-white/10 px-5 py-4 transition-colors ${
                  active === r ? 'bg-white/10 text-signal' : 'text-navy-200 hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="bg-grid-ink grid lg:grid-cols-12">
            <div className="p-4 lg:col-span-8 lg:p-8">
              <canvas
                ref={canvasRef}
                role="img"
                aria-label={`World map highlighting ${active}`}
                className="w-full"
                style={{ aspectRatio: `${DOT_COLS} / ${DOT_ROWS}` }}
              />
            </div>
            <div className="border-t border-white/10 lg:col-span-4 lg:border-l lg:border-t-0">
              <div className="border-b border-white/10 p-6">
                <p className="label text-navy-300">Example destinations</p>
                <ul className="mt-4 space-y-2">
                  {examples.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-navy-100">
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-DEFAULT" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <dl className="grid grid-cols-3 lg:grid-cols-1">
                {totals.map((t) => (
                  <div key={t.label} className="border-b border-white/10 p-6 last:border-b-0 lg:last:border-b-0">
                    <dt className="label text-navy-300">{t.label}</dt>
                    <dd className="font-data mt-2 text-3xl font-medium">{t.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <p className="label border-t border-white/10 px-5 py-3 text-navy-300">
            Region shading is approximate · example destinations are representative, not a full route list
          </p>
        </div>
      </div>
    </Section>
  )
}
