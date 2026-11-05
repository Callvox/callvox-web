'use client'

import { useEffect, useRef } from 'react'
import { DOTS, DOT_COLS, DOT_ROWS, DOT_STEP, DOT_LON0, DOT_LAT0 } from '@/lib/world-dots'

/**
 * Dot-matrix world map with animated route arcs.
 * Illustrative only: hubs and routes are decorative and do not represent
 * a specific PoP or interconnect inventory.
 */

type Hub = { name: string; lon: number; lat: number }

const HUBS: Hub[] = [
  { name: 'Miami', lon: -80.2, lat: 25.8 },
  { name: 'Mexico City', lon: -99.1, lat: 19.4 },
  { name: 'São Paulo', lon: -46.6, lat: -23.5 },
  { name: 'London', lon: -0.1, lat: 51.5 },
  { name: 'Lagos', lon: 3.4, lat: 6.5 },
  { name: 'Nairobi', lon: 36.8, lat: -1.3 },
  { name: 'Johannesburg', lon: 28.0, lat: -26.2 },
  { name: 'Dubai', lon: 55.3, lat: 25.2 },
  { name: 'Mumbai', lon: 72.8, lat: 19.1 },
  { name: 'Dhaka', lon: 90.4, lat: 23.8 },
  { name: 'Singapore', lon: 103.8, lat: 1.35 },
  { name: 'Manila', lon: 121.0, lat: 14.6 },
]

// pairs of hub indices
const ROUTES: [number, number][] = [
  [0, 2], [0, 3], [1, 0], [3, 4], [3, 7], [4, 5], [4, 6], [5, 7],
  [7, 8], [8, 9], [8, 10], [10, 11], [2, 4], [7, 10], [0, 4],
]

const LAT_MIN = DOT_LAT0 - (DOT_ROWS - 1) * DOT_STEP // -58

const dots: [number, number][] = DOTS.split(' ').map((p) => {
  const [c, r] = p.split(',').map(Number)
  return [c, r]
})

export function NetworkMap({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let visible = true
    let w = 0
    let h = 0
    let dpr = 1
    const start = performance.now()

    const project = (lon: number, lat: number): [number, number] => [
      ((lon - DOT_LON0) / 360) * w,
      ((DOT_LAT0 - lat) / (DOT_LAT0 - LAT_MIN)) * h,
    ]

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const arc = (a: [number, number], b: [number, number]) => {
      const mx = (a[0] + b[0]) / 2
      const my = (a[1] + b[1]) / 2
      const dist = Math.hypot(b[0] - a[0], b[1] - a[1])
      return { cx: mx, cy: my - dist * 0.28 }
    }

    const quad = (a: [number, number], c: { cx: number; cy: number }, b: [number, number], t: number): [number, number] => {
      const u = 1 - t
      return [u * u * a[0] + 2 * u * t * c.cx + t * t * b[0], u * u * a[1] + 2 * u * t * c.cy + t * t * b[1]]
    }

    const draw = (now: number) => {
      const t = reduced ? 0 : (now - start) / 1000
      ctx.clearRect(0, 0, w, h)

      // land dots
      const cell = (w / DOT_COLS)
      const rad = Math.max(0.7, cell * 0.2)
      ctx.fillStyle = 'rgba(164, 198, 238, 0.5)'
      for (const [c, r] of dots) {
        const x = c * (w / DOT_COLS)
        const y = (r / (DOT_ROWS - 1)) * h
        ctx.beginPath()
        ctx.arc(x, y, rad, 0, Math.PI * 2)
        ctx.fill()
      }

      const pts = HUBS.map((hub) => project(hub.lon, hub.lat))

      // routes
      ROUTES.forEach(([i, j], idx) => {
        const a = pts[i]
        const b = pts[j]
        const c = arc(a, b)
        ctx.beginPath()
        ctx.moveTo(a[0], a[1])
        ctx.quadraticCurveTo(c.cx, c.cy, b[0], b[1])
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.28)'
        ctx.lineWidth = 1
        ctx.stroke()

        // travelling packet with short tail
        const period = 4.5 + (idx % 5) * 0.7
        const p = reduced ? 0.5 : ((t + idx * 0.83) % period) / period
        for (let k = 0; k < 8; k++) {
          const tt = p - k * 0.012
          if (tt < 0) break
          const [x, y] = quad(a, c, b, tt)
          ctx.beginPath()
          ctx.arc(x, y, Math.max(0.6, 2 - k * 0.22), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(56, 189, 248, ${0.95 - k * 0.11})`
          ctx.fill()
        }
      })

      // hubs
      pts.forEach(([x, y], i) => {
        const pulse = reduced ? 0.5 : (Math.sin(t * 1.6 + i) + 1) / 2
        ctx.beginPath()
        ctx.arc(x, y, 4 + pulse * 6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56, 189, 248, ${0.1 * (1 - pulse) + 0.03})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x, y, 2.6, 0, Math.PI * 2)
        ctx.fillStyle = '#38bdf8'
        ctx.fill()
      })
    }

    const loop = (now: number) => {
      if (visible) draw(now)
      raf = requestAnimationFrame(loop)
    }

    resize()
    draw(performance.now())
    if (!reduced) raf = requestAnimationFrame(loop)

    const ro = new ResizeObserver(() => {
      resize()
      draw(performance.now())
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
    })
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Illustrative map of Callvox wholesale routes connecting Latin America, Africa, the Middle East and Asia"
      className={className}
      style={{ aspectRatio: `${DOT_COLS} / ${DOT_ROWS}` }}
    />
  )
}
