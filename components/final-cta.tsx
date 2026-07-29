'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[#1a3a6b] to-[#0f2347] px-8 py-16 md:py-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Colored dots */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-6 left-12 w-3 h-3 rounded-full bg-[#27a55a]/60" />
            <div className="absolute top-12 right-20 w-4 h-4 rounded-full bg-[#f5b800]/60" />
            <div className="absolute bottom-8 left-24 w-3 h-3 rounded-full bg-[#e84c5a]/60" />
            <div className="absolute bottom-14 right-10 w-5 h-5 rounded-full bg-[#1e9ed6]/50" />
            <div className="absolute top-1/2 left-6 w-2 h-2 rounded-full bg-[#c0287a]/60" />
          </div>

          <p className="text-[#27a55a] font-semibold text-sm uppercase tracking-widest mb-5">
            Unisciti a noi
          </p>
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-balance max-w-3xl mx-auto"
          >
            Insieme possiamo costruire
            una società più inclusiva.
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
            Ogni persona che si unisce, ogni donazione, ogni voce alzata contribuisce
            a un&apos;Italia più giusta per tutti.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/diventa-socio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a3a6b] font-bold rounded-2xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl text-base"
            >
              <Users className="w-5 h-5" aria-hidden="true" />
              Diventa Socio
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all text-base"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Contattaci
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
