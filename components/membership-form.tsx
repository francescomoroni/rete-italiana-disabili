'use client'

import { FormEvent, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClassName =
  'w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base'

export default function MembershipForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.get('nome'),
          cognome: data.get('cognome'),
          email: data.get('email'),
          telefono: data.get('telefono'),
          motivazione: data.get('motivazione'),
          privacy: data.get('privacy') === 'on',
        }),
      })

      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(result.error || 'Invio non riuscito. Riprova più tardi.')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Invio non riuscito. Controlla la connessione e riprova.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl border border-accent-green/30 bg-white p-8 text-brand-blue"
        role="status"
      >
        <p className="font-bold text-lg mb-1">Richiesta inviata</p>
        <p className="text-brand-blue/70">
          Grazie per il tuo interesse. Ti contatteremo entro 48 ore.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-blue-light"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    )
  }

  return (
    <form
      className="flex flex-col gap-5 bg-white p-8 rounded-2xl border border-brand-blue/8"
      aria-label="Modulo di richiesta iscrizione"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className="block text-sm font-semibold text-brand-blue mb-1.5">
            Nome <span aria-hidden="true" className="text-accent-coral">*</span>
            <span className="sr-only">(obbligatorio)</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="given-name"
            required
            className={inputClassName}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="cognome" className="block text-sm font-semibold text-brand-blue mb-1.5">
            Cognome <span aria-hidden="true" className="text-accent-coral">*</span>
            <span className="sr-only">(obbligatorio)</span>
          </label>
          <input
            id="cognome"
            name="cognome"
            type="text"
            autoComplete="family-name"
            required
            className={inputClassName}
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-blue mb-1.5">
          Email <span aria-hidden="true" className="text-accent-coral">*</span>
          <span className="sr-only">(obbligatorio)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClassName}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-semibold text-brand-blue mb-1.5">
          Telefono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="motivazione" className="block text-sm font-semibold text-brand-blue mb-1.5">
          Perché vuoi diventare socio?
        </label>
        <textarea
          id="motivazione"
          name="motivazione"
          rows={4}
          className={`${inputClassName} resize-none`}
          aria-describedby="motivazione-hint"
        />
        <p id="motivazione-hint" className="text-xs text-brand-blue/40 mt-1">
          Facoltativo, ma ci aiuta a conoscerti meglio.
        </p>
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            required
            className="w-4 h-4 mt-1 accent-brand-blue"
            aria-required="true"
          />
          <span className="text-sm text-brand-blue/70">
            Accetto il trattamento dei dati personali secondo la{' '}
            <a href="/privacy" className="underline text-brand-blue hover:text-brand-blue-light">
              Privacy Policy
            </a>
            {' '}(obbligatorio)
          </span>
        </label>
      </div>

      {status === 'error' && (
        <p className="text-sm text-accent-coral" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-dark transition-colors shadow-lg text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Invio in corso…' : 'Invia la richiesta di iscrizione'}
      </button>
    </form>
  )
}
