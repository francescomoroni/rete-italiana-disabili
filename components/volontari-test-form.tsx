'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  EXAM_PARTICIPANT_STORAGE_KEY,
  type ExamParticipant,
} from '@/lib/exam-data'
import { isValidCodiceFiscale, isValidEmail } from '@/lib/validation'

const inputClassName =
  'w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base'

export default function VolontariTestForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const nome = String(data.get('nome') ?? '').trim()
    const cognome = String(data.get('cognome') ?? '').trim()
    const dataNascita = String(data.get('dataNascita') ?? '').trim()
    const codiceFiscale = String(data.get('codiceFiscale') ?? '').trim().toUpperCase()
    const email = String(data.get('email') ?? '').trim()

    if (!nome || !cognome || !dataNascita || !codiceFiscale || !email) {
      setErrorMessage('Compila tutti i campi obbligatori.')
      return
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Indirizzo email non valido.')
      return
    }

    if (!isValidCodiceFiscale(codiceFiscale)) {
      setErrorMessage('Codice fiscale non valido.')
      return
    }

    const participant: ExamParticipant = {
      nome,
      cognome,
      dataNascita,
      codiceFiscale,
      email,
    }

    sessionStorage.setItem(EXAM_PARTICIPANT_STORAGE_KEY, JSON.stringify(participant))
    router.push('/esame')
  }

  return (
    <form
      className="flex flex-col gap-5 bg-white p-8 rounded-2xl border border-brand-blue/8"
      aria-label="Dati per accedere al test di verifica"
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

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="dataNascita" className="block text-sm font-semibold text-brand-blue mb-1.5">
            Data di nascita <span aria-hidden="true" className="text-accent-coral">*</span>
            <span className="sr-only">(obbligatorio)</span>
          </label>
          <input
            id="dataNascita"
            name="dataNascita"
            type="date"
            autoComplete="bday"
            required
            max={new Date().toISOString().split('T')[0]}
            className={inputClassName}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="codiceFiscale" className="block text-sm font-semibold text-brand-blue mb-1.5">
            Codice fiscale <span aria-hidden="true" className="text-accent-coral">*</span>
            <span className="sr-only">(obbligatorio)</span>
          </label>
          <input
            id="codiceFiscale"
            name="codiceFiscale"
            type="text"
            autoComplete="off"
            required
            maxLength={16}
            className={`${inputClassName} uppercase`}
            aria-required="true"
            aria-describedby="codice-fiscale-hint"
          />
          <p id="codice-fiscale-hint" className="text-xs text-brand-blue/40 mt-1">
            16 caratteri alfanumerici.
          </p>
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

      {errorMessage && (
        <p className="text-sm text-accent-coral" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-dark transition-colors shadow-lg text-base"
      >
        Inizia il test
      </button>
    </form>
  )
}
