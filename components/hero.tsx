'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'

const DOTS = [
  { cx: '8%', cy: '18%', r: 10, color: '#27a55a', delay: 0 },
  { cx: '92%', cy: '22%', r: 7, color: '#f5b800', delay: 0.4 },
  { cx: '4%', cy: '72%', r: 13, color: '#1e9ed6', delay: 0.8 },
  { cx: '95%', cy: '65%', r: 9, color: '#e84c5a', delay: 0.2 },
  { cx: '15%', cy: '88%', r: 6, color: '#c0287a', delay: 1.0 },
  { cx: '85%', cy: '85%', r: 11, color: '#f07030', delay: 0.6 },
  { cx: '50%', cy: '6%', r: 8, color: '#27a55a', delay: 1.2 },
]

export default function Hero() {
  return (
    <section
      aria-label="Benvenuto in Rete Italiana Disabili ETS"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Persone con disabilità che partecipano attivamente alla vita sociale"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2347]/85 via-[#1a3a6b]/70 to-[#1a3a6b]/30" />
      </div>

      {/* Floating colored dots inspired by logo diversity */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        {DOTS.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-70"
            style={{
              left: dot.cx,
              top: dot.cy,
              width: dot.r * 2,
              height: dot.r * 2,
              backgroundColor: dot.color,
              filter: 'blur(1px)',
            }}
            animate={{ y: [0, -12, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#27a55a] inline-block" aria-hidden="true" />
              Associazione di Ente del Terzo Settore
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight text-balance mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Costruiamo insieme{' '}
            <span className="text-[#27a55a]">un&apos;Italia</span>
            {' '}davvero inclusiva.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Rete Italiana Disabili ETS promuove diritti, inclusione e sostegno alle famiglie.
            Lavoriamo ogni giorno per migliorare concretamente la qualità della vita delle persone
            con disabilità in tutta Italia.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/diventa-socio"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#1a3a6b] font-bold rounded-2xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl text-base"
            >
              <Users className="w-5 h-5" aria-hidden="true" />
              Diventa Socio
            </Link>
            <Link
              href="/progetti"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all text-base"
            >
              Scopri i Progetti
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="w-0.5 h-10 bg-white/50 rounded-full origin-top"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
