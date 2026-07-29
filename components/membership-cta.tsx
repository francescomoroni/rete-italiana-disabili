'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { MEMBERSHIP_TIERS } from '@/lib/data'

const TIER_COLORS: Record<string, { border: string; bg: string; badge: string; text: string }> = {
  sky: { border: '#1e9ed6', bg: '#e8f5fb', badge: '#1e9ed6', text: '#0a6fa3' },
  blue: { border: '#1a3a6b', bg: '#1a3a6b', badge: '#27a55a', text: '#ffffff' },
  coral: { border: '#e84c5a', bg: '#fdeaec', badge: '#e84c5a', text: '#b52f3a' },
}

export default function MembershipCTA() {
  return (
    <section
      aria-labelledby="membership-heading"
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
          <p className="text-[#27a55a] font-semibold text-sm uppercase tracking-widest mb-3">
            Unisciti a noi
          </p>
          <h2
            id="membership-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] mb-5 text-balance"
          >
            Diventa parte
            <br />
            del cambiamento.
          </h2>
          <p className="text-lg text-[#1a3a6b]/65 max-w-2xl mx-auto leading-relaxed">
            Ogni socio rafforza la nostra voce. Insieme arriviamo dove nessuno
            può arrivare da solo. Scegli il tuo livello di impegno.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7 items-start">
          {MEMBERSHIP_TIERS.map((tier, i) => {
            const colors = TIER_COLORS[tier.color]
            const isFeatured = !!tier.featured
            return (
              <motion.article
                key={tier.id}
                className={`rounded-2xl overflow-hidden ${isFeatured ? 'shadow-2xl ring-2 ring-[#1a3a6b]' : 'border border-[#1a3a6b]/10 shadow-sm'} transition-shadow hover:shadow-xl`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                style={{ backgroundColor: isFeatured ? colors.bg : 'white' }}
              >
                {isFeatured && (
                  <div className="flex items-center justify-center gap-2 py-2.5 bg-[#27a55a] text-white text-sm font-bold">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    Più scelto
                  </div>
                )}
                <div className="p-7">
                  <h3
                    className="font-bold text-xl mb-1"
                    style={{ color: isFeatured ? '#ffffff' : '#1a3a6b' }}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 my-4">
                    <span
                      className="text-5xl font-extrabold"
                      style={{ color: isFeatured ? '#ffffff' : '#1a3a6b' }}
                    >
                      €{tier.price}
                    </span>
                    <span
                      className="text-base font-medium"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.7)' : '#1a3a6b80' }}
                    >
                      /{tier.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3 mb-7" role="list">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-base"
                        style={{ color: isFeatured ? 'rgba(255,255,255,0.85)' : '#1a3a6b99' }}
                      >
                        <Check
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: isFeatured ? '#27a55a' : colors.badge }}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/diventa-socio?tier=${tier.id}`}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-base transition-all ${
                      isFeatured
                        ? 'bg-white text-[#1a3a6b] hover:bg-white/90 shadow-lg'
                        : 'bg-[#1a3a6b] text-white hover:bg-[#0f2347]'
                    }`}
                    aria-label={`Diventa ${tier.name} per €${tier.price} all'anno`}
                  >
                    Iscriviti ora
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
