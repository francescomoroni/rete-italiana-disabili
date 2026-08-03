'use client'

import { FormEvent, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClassName =
  'w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.get('nome'),
          cognome: data.get('cognome'),
          email: data.get('email'),
          telefono: data.get('telefono'),
          oggetto: data.get('oggetto'),
          messaggio: data.get('messaggio'),
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
        className="rounded-xl border border-accent-green/30 bg-accent-green/10 p-6 text-brand-blue"
        role="status"
      >
        <p className="font-bold text-lg mb-1">Messaggio inviato</p>
        <p className="text-brand-blue/70">
          Grazie per averci scritto. Ti risponderemo entro 48 ore.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-blue-light"
        >
          Invia un altro messaggio
        </button>
      </div>
    )
  }

  return (
    <form
      className="flex flex-col gap-5"
      aria-label="Modulo di contatto"
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
            Cognome
          </label>
          <input
            id="cognome"
            name="cognome"
            type="text"
            autoComplete="family-name"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email-contatto" className="block text-sm font-semibold text-brand-blue mb-1.5">
          Email <span aria-hidden="true" className="text-accent-coral">*</span>
          <span className="sr-only">(obbligatorio)</span>
        </label>
        <input
          id="email-contatto"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClassName}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="telefono-contatto" className="block text-sm font-semibold text-brand-blue mb-1.5">
          Telefono
        </label>
        <input
          id="telefono-contatto"
          name="telefono"
          type="tel"
          autoComplete="tel"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="oggetto" className="block text-sm font-semibold text-brand-blue mb-1.5">
          Oggetto <span aria-hidden="true" className="text-accent-coral">*</span>
          <span className="sr-only">(obbligatorio)</span>
        </label>
        <select
          id="oggetto"
          name="oggetto"
          required
          className={inputClassName}
          aria-required="true"
          defaultValue=""
        >
          <option value="" disabled>
            Seleziona un argomento
          </option>
          <option value="informazioni">Richiesta informazioni generali</option>
          <option value="iscrizione">Iscrizione come socio</option>
          <option value="donazione">Donazioni</option>
          <option value="progetti">Collaborazione su progetti</option>
          <option value="eventi">Eventi</option>
          <option value="media">Richiesta media/stampa</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <div>
        <label htmlFor="messaggio" className="block text-sm font-semibold text-brand-blue mb-1.5">
          Messaggio <span aria-hidden="true" className="text-accent-coral">*</span>
          <span className="sr-only">(obbligatorio)</span>
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          required
          className={`${inputClassName} resize-none`}
          aria-required="true"
        />
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
            Ho letto e accetto la{' '}
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
        {status === 'loading' ? 'Invio in corso…' : 'Invia messaggio'}
      </button>
    </form>
  )
}
