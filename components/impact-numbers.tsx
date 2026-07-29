'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { IMPACT_STATS } from '@/lib/data'

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(value)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {count.toLocaleString('it-IT')}
      {suffix}
    </span>
  )
}

export default function ImpactNumbers() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="py-20 md:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#1e9ed6] font-semibold text-sm uppercase tracking-widest mb-3">
            Il nostro impatto
          </p>
          <h2
            id="impact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] text-balance"
          >
            Numeri che raccontano
            <br />
            una storia reale
          </h2>
        </motion.div>

        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {IMPACT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-[#1a3a6b]/6 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p
                  className="text-4xl sm:text-5xl font-extrabold text-[#1a3a6b] leading-none mb-2"
                  aria-hidden="true"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-bold text-[#1a3a6b] mb-1">{stat.label}</p>
                <p className="text-xs text-[#1a3a6b]/55">{stat.description}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
