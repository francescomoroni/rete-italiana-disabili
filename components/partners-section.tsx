'use client'

import { motion } from 'framer-motion'
import { PARTNERS } from '@/lib/data'

export default function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="py-16 md:py-20 bg-[#F8FAFC] border-t border-[#1a3a6b]/8"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-[#1a3a6b]/50 uppercase tracking-widest">
            I nostri partner istituzionali
          </p>
        </motion.div>

        <ul
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          role="list"
          aria-label="Partner istituzionali di Rete Italiana Disabili ETS"
        >
          {PARTNERS.map((partner, i) => (
            <motion.li
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <a
                href={partner.href}
                className="px-5 py-3 rounded-xl bg-white border border-[#1a3a6b]/10 text-[#1a3a6b]/60 font-semibold text-sm hover:text-[#1a3a6b] hover:border-[#1a3a6b]/30 hover:shadow-md transition-all"
                aria-label={`Sito web di ${partner.name}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {partner.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
