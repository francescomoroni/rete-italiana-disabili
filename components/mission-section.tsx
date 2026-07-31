'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Shield, Handshake, ArrowRight } from 'lucide-react'
import { MISSION_CARDS } from '@/lib/data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: string }>> = {
  users: Users,
  shield: Shield,
  handshake: Handshake,
}

const COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  sky: { bg: '#e8f5fb', text: '#1e9ed6', border: '#1e9ed6' },
  blue: { bg: '#e8edf5', text: '#1a3a6b', border: '#1a3a6b' },
  green: { bg: '#e8f5ed', text: '#27a55a', border: '#27a55a' },
}

export default function MissionSection() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent-sky font-semibold text-sm uppercase tracking-widest mb-3">
              La nostra missione
            </p>
            <h2
              id="mission-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue mb-6 text-balance"
            >
              Ogni persona merita
              <br />
              di vivere pienamente.
            </h2>
            <p className="text-lg text-brand-blue/70 leading-relaxed mb-6">
              Rete Italiana Disabili APS nasce dalla convinzione che l&apos;inclusione non sia
              un&apos;utopia, ma un obiettivo concreto e raggiungibile. Lavoriamo con le persone,
              non per le persone — ascoltando, coordinando e agendo.
            </p>
            <p className="text-lg text-brand-blue/70 leading-relaxed mb-8">
              Dal 2010 costruiamo ponti tra cittadini, istituzioni e aziende per trasformare i
              diritti in realtà quotidiana.
            </p>
            <Link
              href="/missione"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all group"
              aria-label="Scopri di più sulla nostra missione"
            >
              Scopri di più sulla missione
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          {/* Cards side */}
          <div className="flex flex-col gap-5">
            {MISSION_CARDS.map((card, i) => {
              const Icon = ICON_MAP[card.icon]
              const colors = COLOR_MAP[card.color]
              return (
                <motion.article
                  key={card.title}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-brand-blue/8 bg-brand-surface hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  aria-label={`${card.title}: ${card.description}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.bg }}
                  >
                    {Icon && (
                      <Icon
                        className="w-6 h-6"
                        style={{ color: colors.text } as React.CSSProperties}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue text-lg mb-1">{card.title}</h3>
                    <p className="text-brand-blue/65 text-base leading-relaxed">{card.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
