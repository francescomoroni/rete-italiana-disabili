'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, RefreshCw, Lock, ArrowRight } from 'lucide-react'

const AMOUNTS = ['10', '25', '50', '100', '250']

const HOW_HELPS = [
  { amount: '€10', impact: 'copre i materiali per un laboratorio didattico' },
  { amount: '€25', impact: 'finanzia una consulenza legale per una famiglia' },
  { amount: '€50', impact: 'supporta una settimana di sportello di ascolto' },
  { amount: '€100', impact: 'finanzia un evento di sensibilizzazione locale' },
]

export default function DonationsSection() {
  return (
    <section
      aria-labelledby="donations-heading"
      className="py-20 md:py-28 bg-[#1a3a6b] relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/3 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/3 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#27a55a] font-semibold text-sm uppercase tracking-widest mb-3">
              Sostienici
            </p>
            <h2
              id="donations-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-balance"
            >
              La tua donazione
              <br />
              cambia le cose.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Ogni contributo, grande o piccolo, si trasforma in azioni concrete.
              Rendiamo pubbliche le nostre spese perché la trasparenza è il fondamento
              della fiducia che ci accordi.
            </p>

            {/* How it helps */}
            <ul className="flex flex-col gap-3 mb-8" role="list" aria-label="Come viene usata la donazione">
              {HOW_HELPS.map((item) => (
                <li key={item.amount} className="flex items-start gap-3 text-white/80 text-base">
                  <span className="font-bold text-[#27a55a] shrink-0 w-12">{item.amount}</span>
                  <span>{item.impact}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-5 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" aria-hidden="true" />
                Pagamento sicuro
              </span>
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                Donazione ricorrente disponibile
              </span>
            </div>
          </motion.div>

          {/* Right side — donation widget */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#e84c5a]/15 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#e84c5a]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-[#1a3a6b]">Fai una donazione</p>
                <p className="text-xs text-[#1a3a6b]/50">Detraibile fiscalmente</p>
              </div>
            </div>

            <fieldset className="mb-5">
              <legend className="text-sm font-semibold text-[#1a3a6b] mb-3">Scegli l&apos;importo</legend>
              <div className="grid grid-cols-5 gap-2">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="py-2.5 rounded-xl border-2 border-[#1a3a6b]/15 text-[#1a3a6b] font-bold text-sm hover:border-[#1a3a6b] hover:bg-[#e8edf5] transition-all focus-visible:ring-2 focus-visible:ring-[#1a3a6b]"
                    aria-label={`Dona €${amount}`}
                  >
                    €{amount}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mb-5">
              <label htmlFor="custom-amount" className="text-sm font-semibold text-[#1a3a6b] mb-2 block">
                Importo personalizzato
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#1a3a6b]/40 text-lg" aria-hidden="true">€</span>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  placeholder="0"
                  className="w-full pl-8 pr-4 py-3.5 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] font-bold text-lg focus:border-[#1a3a6b] focus:outline-none transition-colors"
                  aria-describedby="amount-hint"
                />
              </div>
              <p id="amount-hint" className="text-xs text-[#1a3a6b]/40 mt-1">Inserisci qualsiasi importo a partire da €1</p>
            </div>

            <Link
              href="/sostienici"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#1a3a6b] text-white font-bold rounded-xl hover:bg-[#0f2347] transition-colors shadow-lg text-base"
              aria-label="Procedi con la donazione"
            >
              <Heart className="w-5 h-5" aria-hidden="true" />
              Dona ora
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <p className="text-center text-xs text-[#1a3a6b]/40 mt-4">
              Bonifico bancario e donazione ricorrente disponibili nella pagina dedicata.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
