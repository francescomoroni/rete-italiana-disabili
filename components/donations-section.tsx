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

export default function DonationsSection({
  mobilePreview = false,
}: {
  /** On viewports below `md`, show a shorter teaser and link to /sostienici. */
  mobilePreview?: boolean
} = {}) {
  return (
    <section
      aria-labelledby="donations-heading"
      className="py-20 md:py-28 bg-brand-blue relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/3 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/3 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent-green font-semibold text-sm uppercase tracking-widest mb-3">
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
              {HOW_HELPS.map((item, index) => (
                <li
                  key={item.amount}
                  className={`flex items-start gap-3 text-white/80 text-base ${
                    mobilePreview && index >= 2 ? 'hidden md:flex' : ''
                  }`}
                >
                  <span className="font-bold text-accent-green shrink-0 w-12">{item.amount}</span>
                  <span>{item.impact}</span>
                </li>
              ))}
            </ul>

            <div
              className={`flex-wrap gap-5 text-sm text-white/60 ${
                mobilePreview ? 'hidden md:flex' : 'flex'
              }`}
            >
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" aria-hidden="true" />
                Pagamento sicuro
              </span>
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                Donazione ricorrente disponibile
              </span>
            </div>

            {mobilePreview && (
              <div className="mt-8 md:hidden">
                <Link
                  href="/sostienici"
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/15"
                >
                  Vedi tutto
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            )}
          </motion.div>

          {/* Right side — donation widget */}
          <motion.div
            className={`bg-white rounded-2xl p-8 shadow-2xl ${
              mobilePreview ? 'hidden md:block' : ''
            }`}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-coral/15 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-coral" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-brand-blue">Fai una donazione</p>
                <p className="text-xs text-brand-blue/50">Detraibile fiscalmente</p>
              </div>
            </div>

            <fieldset className="mb-5">
              <legend className="text-sm font-semibold text-brand-blue mb-3">Scegli l&apos;importo</legend>
              <div className="grid grid-cols-5 gap-2">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="py-2.5 rounded-xl border-2 border-brand-blue/15 text-brand-blue font-bold text-sm hover:border-brand-blue hover:bg-brand-blue-muted transition-all focus-visible:ring-2 focus-visible:ring-brand-blue"
                    aria-label={`Dona €${amount}`}
                  >
                    €{amount}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mb-5">
              <label htmlFor="custom-amount" className="text-sm font-semibold text-brand-blue mb-2 block">
                Importo personalizzato
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-brand-blue/40 text-lg" aria-hidden="true">€</span>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  placeholder="0"
                  className="w-full pl-8 pr-4 py-3.5 border-2 border-brand-blue/15 rounded-xl text-brand-blue font-bold text-lg focus:border-brand-blue focus:outline-none transition-colors"
                  aria-describedby="amount-hint"
                />
              </div>
              <p id="amount-hint" className="text-xs text-brand-blue/40 mt-1">Inserisci qualsiasi importo a partire da €1</p>
            </div>

            <Link
              href="/sostienici"
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-dark transition-colors shadow-lg text-base"
              aria-label="Procedi con la donazione"
            >
              <Heart className="w-5 h-5" aria-hidden="true" />
              Dona ora
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <p className="text-center text-xs text-brand-blue/40 mt-4">
              Bonifico bancario e donazione ricorrente disponibili nella pagina dedicata.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
