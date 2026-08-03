'use client'

import { useId, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Loader2,
  Lock,
  RefreshCw,
  X,
  XCircle,
} from 'lucide-react'
import {
  QUICK_AMOUNTS,
  donationAmountErrorMessage,
  validateDonationAmount,
  type DonationAmountError,
} from '@/lib/donation-amount'

const HOW_HELPS = [
  { amount: '€10', impact: 'copre i materiali per un laboratorio didattico' },
  { amount: '€25', impact: 'finanzia una consulenza legale per una famiglia' },
  { amount: '€50', impact: 'supporta una settimana di sportello di ascolto' },
  { amount: '€100', impact: 'finanzia un evento di sensibilizzazione locale' },
]

export type CheckoutStatus = 'success' | 'cancel'

type DonationsSectionProps = {
  /** On viewports below `md`, show a shorter teaser and link to /sostienici. */
  mobilePreview?: boolean
  checkoutStatus?: CheckoutStatus | null
}

export default function DonationsSection({
  mobilePreview = false,
  checkoutStatus = null,
}: DonationsSectionProps = {}) {
  return (
    <section
      aria-labelledby="donations-heading"
      className="py-20 md:py-28 bg-brand-blue relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/3 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/3 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {checkoutStatus && (
          <div className="mb-10 max-w-3xl mx-auto lg:mx-0 lg:max-w-none">
            <DonationStatusAlert initialStatus={checkoutStatus} />
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

          <motion.div
            className={`bg-white rounded-2xl p-8 shadow-2xl ${
              mobilePreview ? 'hidden md:block' : ''
            }`}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <DonationCheckoutForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DonationCheckoutForm() {
  const amountId = useId()
  const errorId = useId()
  const [amount, setAmount] = useState('')
  const [fieldError, setFieldError] = useState<DonationAmountError | null>(null)
  const [apiError, setApiError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function selectQuickAmount(value: number) {
    setAmount(String(value))
    setFieldError(null)
    setApiError(false)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setApiError(false)

    const validation = validateDonationAmount(amount)
    if (!validation.ok) {
      setFieldError(validation.error)
      return
    }

    setFieldError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: validation.amount }),
      })

      if (!response.ok) {
        setApiError(true)
        setIsLoading(false)
        return
      }

      const data = (await response.json()) as { url?: string }
      if (!data.url) {
        setApiError(true)
        setIsLoading(false)
        return
      }

      window.location.assign(data.url)
    } catch {
      setApiError(true)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent-coral/15 flex items-center justify-center">
          <Heart className="w-5 h-5 text-accent-coral" aria-hidden="true" />
        </div>
        <div>
          <p className="font-bold text-brand-blue">Sostieni i nostri progetti</p>
          <p className="text-xs text-brand-blue/50">Detraibile fiscalmente · Pagamento sicuro</p>
        </div>
      </div>

      <p className="text-sm text-brand-blue/70 leading-relaxed mb-6">
        Ogni contributo, piccolo o grande, ci aiuta a promuovere i diritti delle persone con
        disabilità e a realizzare progetti concreti sul territorio.
      </p>

      {apiError && (
        <div
          role="alert"
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          Si è verificato un problema durante la preparazione del pagamento. Riprova tra qualche
          minuto.
        </div>
      )}

      <fieldset className="mb-5" disabled={isLoading}>
        <legend className="text-sm font-semibold text-brand-blue mb-3">Importo rapido</legend>
        <div className="grid grid-cols-4 gap-2">
          {QUICK_AMOUNTS.map((quickAmount) => {
            const selected = amount === String(quickAmount)
            return (
              <button
                key={quickAmount}
                type="button"
                onClick={() => selectQuickAmount(quickAmount)}
                className={`py-2.5 rounded-xl border-2 font-bold text-sm transition-all focus-visible:ring-2 focus-visible:ring-brand-blue ${
                  selected
                    ? 'border-brand-blue bg-brand-blue text-white'
                    : 'border-brand-blue/15 text-brand-blue hover:border-brand-blue hover:bg-brand-blue-muted'
                }`}
                aria-pressed={selected}
                aria-label={`Dona ${quickAmount} euro`}
              >
                {quickAmount}€
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="mb-5">
        <label htmlFor={amountId} className="text-sm font-semibold text-brand-blue mb-2 block">
          Importo (€)
        </label>
        <div className="relative">
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-brand-blue/40 text-lg"
            aria-hidden="true"
          >
            €
          </span>
          <input
            id={amountId}
            name="amount"
            type="number"
            inputMode="decimal"
            min={1}
            max={5000}
            step="0.01"
            placeholder="Es. 20"
            value={amount}
            disabled={isLoading}
            onChange={(event) => {
              setAmount(event.target.value)
              setFieldError(null)
              setApiError(false)
            }}
            className={`w-full pl-8 pr-4 py-3.5 border-2 rounded-xl text-brand-blue font-bold text-lg focus:outline-none transition-colors disabled:opacity-60 ${
              fieldError
                ? 'border-red-400 focus:border-red-500'
                : 'border-brand-blue/15 focus:border-brand-blue'
            }`}
            aria-invalid={fieldError ? true : undefined}
            aria-describedby={fieldError ? errorId : undefined}
            required
          />
        </div>
        {fieldError ? (
          <p id={errorId} role="alert" className="text-xs text-red-600 mt-1.5">
            {donationAmountErrorMessage(fieldError)}
          </p>
        ) : (
          <p className="text-xs text-brand-blue/40 mt-1">Da €1 a €5.000 · max due decimali</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-3 w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-dark transition-colors shadow-lg text-base disabled:opacity-70 disabled:cursor-not-allowed"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Reindirizzamento...
          </>
        ) : (
          <>
            <Heart className="w-5 h-5" aria-hidden="true" />
            Dona ora
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-brand-blue/40 mt-4">
        Pagamento sicuro tramite Stripe. Puoi anche donare con bonifico bancario più sotto.
      </p>
    </form>
  )
}

function DonationStatusAlert({ initialStatus }: { initialStatus: CheckoutStatus }) {
  const router = useRouter()
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  function dismiss() {
    setVisible(false)
    router.replace('/sostienici', { scroll: false })
  }

  if (initialStatus === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="relative rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-6 sm:px-7 sm:py-7 shadow-sm"
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-3 right-3 rounded-lg p-1.5 text-emerald-700/60 hover:bg-emerald-100 hover:text-emerald-900 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-600"
          aria-label="Chiudi messaggio di ringraziamento"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        <div className="flex gap-4 pr-8">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-emerald-900 mb-3">
              ❤️ Grazie di cuore!
            </h3>
            <div className="text-sm sm:text-base text-emerald-900/80 leading-relaxed space-y-3">
              <p>La tua donazione è stata ricevuta con successo.</p>
              <p>
                Con il tuo gesto stai contribuendo concretamente a costruire una società più
                inclusiva, sostenendo i diritti delle persone con disabilità e aiutandoci a portare
                avanti progetti, iniziative e servizi rivolti a chi ne ha più bisogno.
              </p>
              <p>
                Ogni contributo, indipendentemente dall&apos;importo, ha un valore enorme per la
                nostra associazione.
              </p>
              <p className="font-semibold text-emerald-900">
                Grazie per aver scelto di camminare insieme a noi.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5 sm:px-7 sm:py-6 shadow-sm"
    >
      <button
        type="button"
        onClick={dismiss}
        className="absolute top-3 right-3 rounded-lg p-1.5 text-amber-800/60 hover:bg-amber-100 hover:text-amber-950 transition-colors focus-visible:ring-2 focus-visible:ring-amber-600"
        aria-label="Chiudi messaggio di pagamento annullato"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>

      <div className="flex gap-4 pr-8">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">
          <XCircle className="w-6 h-6 text-amber-600" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-amber-950 mb-2">Pagamento annullato</h3>
          <p className="text-sm sm:text-base text-amber-950/75 leading-relaxed">
            La donazione non è stata completata. Nessun importo è stato addebitato. Se lo desideri
            puoi riprovare in qualsiasi momento.
          </p>
        </div>
      </div>
    </div>
  )
}
