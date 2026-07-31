'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Globe, Accessibility, Building2, HeartHandshake } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Award, label: 'Associazione Riconosciuta', color: '#1a3a6b' },
  { icon: Shield, label: 'APS Certificata', color: '#27a55a' },
  { icon: HeartHandshake, label: 'Trasparenza Totale', color: '#1e9ed6' },
  { icon: Globe, label: 'Inclusione Attiva', color: '#f07030' },
  { icon: Accessibility, label: 'Accessibilità WCAG 2.2', color: '#c0287a' },
  { icon: Building2, label: 'Presenza Nazionale', color: '#f5b800' },
]

export default function TrustBar() {
  return (
    <section
      aria-label="Garanzie e certificazioni"
      className="bg-white border-b border-brand-blue/8 py-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          role="list"
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.li
              key={item.label}
              className="flex items-center gap-2.5 text-sm font-medium text-brand-blue/75"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <item.icon
                className="w-4 h-4 shrink-0"
                style={{ color: item.color }}
                aria-hidden="true"
              />
              {item.label}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
