'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Accessibility, Home, Building2, Heart, ArrowRight } from 'lucide-react'
import { WHO_WE_HELP } from '@/lib/data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: string }>> = {
  accessibility: Accessibility,
  home: Home,
  building: Building2,
  heart: Heart,
}

const COLOR_MAP: Record<string, { bg: string; text: string; accent: string }> = {
  blue: { bg: '#1a3a6b', text: '#ffffff', accent: '#27a55a' },
  green: { bg: '#27a55a', text: '#ffffff', accent: '#f5b800' },
  orange: { bg: '#f07030', text: '#ffffff', accent: '#1e9ed6' },
  coral: { bg: '#e84c5a', text: '#ffffff', accent: '#f5b800' },
}

export default function WhoWeHelp() {
  return (
    <section
      aria-labelledby="who-we-help-heading"
      className="py-20 md:py-28 bg-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-sky font-semibold text-sm uppercase tracking-widest mb-3">
            A chi ci rivolgiamo
          </p>
          <h2
            id="who-we-help-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue text-balance"
          >
            Siamo qui per te,
            <br />
            qualunque sia la tua storia.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_WE_HELP.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            const colors = COLOR_MAP[item.color]
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col h-full p-7 rounded-2xl text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
                  style={{ backgroundColor: colors.bg }}
                  aria-label={`${item.title} – ${item.description}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    {Icon && <Icon className="w-6 h-6 text-white" aria-hidden="true" />}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-white/80 text-base leading-relaxed flex-grow">{item.description}</p>
                  <div className="flex items-center gap-2 mt-5 font-semibold text-sm">
                    Scopri di più
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
