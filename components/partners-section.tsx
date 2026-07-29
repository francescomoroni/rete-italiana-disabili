'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SPONSORS } from '@/lib/data'

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
            Sponsor e partner
          </p>
        </motion.div>

        <ul
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"
          role="list"
          aria-label="Sponsor e partner di Rete Italiana Disabili ETS"
        >
          {SPONSORS.map((sponsor, i) => (
            <motion.li
              key={sponsor.logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <article className="flex flex-col items-center justify-center gap-2 h-24 sm:h-28 p-3 rounded-xl border border-[#1a3a6b]/10 bg-white hover:border-[#1a3a6b]/20 hover:shadow-sm transition-all">
                <div className="relative w-full h-9 sm:h-10">
                  <Image
                    src={sponsor.logo}
                    alt={`Logo di ${sponsor.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 150px"
                  />
                </div>
                <p className="text-center text-[10px] sm:text-xs font-medium text-[#1a3a6b]/65 leading-tight line-clamp-2">
                  {sponsor.name}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
