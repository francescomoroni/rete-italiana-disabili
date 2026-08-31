'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RotateCcw, XCircle } from 'lucide-react'
import {
  EXAM_PARTICIPANT_STORAGE_KEY,
  EXAM_QUESTIONS,
  EXAM_RESULT_STORAGE_KEY,
  type ExamParticipant,
} from '@/lib/exam-data'

type Status = 'loading' | 'ready' | 'submitting' | 'success'

const optionClassName =
  'flex items-start gap-3 p-4 rounded-xl border-2 border-brand-blue/10 bg-white cursor-pointer hover:border-brand-blue/25 transition-colors has-checked:border-brand-blue has-checked:bg-brand-blue/5'

export default function ExamForm() {
  const router = useRouter()
  const [status, setStatus] = useState<Status>('loading')
  const [participant, setParticipant] = useState<ExamParticipant | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [result, setResult] = useState<{ score: number; total: number; passed: boolean } | null>(
    null,
  )
  const [formKey, setFormKey] = useState(0)

  useEffect(() => {
    const stored = sessionStorage.getItem(EXAM_PARTICIPANT_STORAGE_KEY)
    if (!stored) {
      router.replace('/volontari/test')
      return
    }

    try {
      setParticipant(JSON.parse(stored) as ExamParticipant)
      setStatus('ready')
    } catch {
      sessionStorage.removeItem(EXAM_PARTICIPANT_STORAGE_KEY)
      router.replace('/volontari/test')
    }
  }, [router])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!participant) return

    const form = event.currentTarget
    const data = new FormData(form)
    const answers: Record<string, string> = {}

    for (const question of EXAM_QUESTIONS) {
      const answer = String(data.get(`question-${question.id}`) ?? '').trim()
      if (!answer) {
        setErrorMessage('Rispondi a tutte le domande prima di inviare.')
        return
      }
      answers[String(question.id)] = answer
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ participant, answers }),
      })

      const body = (await response.json()) as {
        error?: string
        score?: number
        total?: number
        passed?: boolean
      }

      if (!response.ok) {
        setStatus('ready')
        setErrorMessage(body.error || 'Invio non riuscito. Riprova più tardi.')
        return
      }

      const examResult = {
        score: body.score ?? 0,
        total: body.total ?? EXAM_QUESTIONS.length,
        passed: Boolean(body.passed),
        completedAt: new Date().toISOString(),
      }

      if (examResult.passed) {
        sessionStorage.setItem(EXAM_RESULT_STORAGE_KEY, JSON.stringify(examResult))
        router.push('/attestato')
        return
      }

      setResult(examResult)
      setStatus('success')
    } catch {
      setStatus('ready')
      setErrorMessage('Invio non riuscito. Controlla la connessione e riprova.')
    }
  }

  function handleRetry() {
    setResult(null)
    setErrorMessage('')
    setFormKey((key) => key + 1)
    setStatus('ready')
  }

  if (status === 'loading') {
    return (
      <p className="text-center text-brand-blue/60 py-12" role="status">
        Caricamento del test…
      </p>
    )
  }

  if (status === 'success' && result && !result.passed) {
    return (
      <div
        className="rounded-2xl border border-accent-coral/30 bg-white p-8 text-center text-brand-blue"
        role="status"
      >
        <XCircle className="w-12 h-12 text-accent-coral mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-2xl font-extrabold mb-2">Test non superato</h2>
        <p className="text-brand-blue/70 leading-relaxed mb-2">
          Hai risposto correttamente a <strong>{result.score}</strong> domande su{' '}
          <strong>{result.total}</strong>.
        </p>
        <p className="text-brand-blue/70 leading-relaxed mb-8">
          Non hai raggiunto il punteggio minimo richiesto. Puoi ripetere il test: le risposte
          precedenti verranno cancellate.
        </p>
        <button
          type="button"
          onClick={handleRetry}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-3.5 text-base font-bold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
        >
          <RotateCcw className="w-5 h-5" aria-hidden="true" />
          RIPROVA
        </button>
      </div>
    )
  }

  return (
    <form
      key={formKey}
      className="flex flex-col gap-10"
      aria-label="Questionario di verifica a risposta multipla"
      noValidate
      onSubmit={handleSubmit}
    >
      {participant && (
        <p className="text-sm text-brand-blue/60 text-center">
          Partecipante:{' '}
          <span className="font-semibold text-brand-blue">
            {participant.nome} {participant.cognome}
          </span>
        </p>
      )}

      <ol className="flex flex-col gap-10" role="list">
        {EXAM_QUESTIONS.map((question, index) => (
          <li key={question.id}>
            <fieldset className="rounded-2xl border border-brand-blue/8 bg-brand-surface p-6 sm:p-8">
              <legend className="text-lg font-bold text-brand-blue mb-5 leading-relaxed">
                {index + 1}. {question.question}
              </legend>
              <div className="flex flex-col gap-3">
                {question.options.map((option) => (
                  <label key={option.id} className={optionClassName}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      required
                      className="mt-1 accent-brand-blue"
                      disabled={status === 'submitting'}
                    />
                    <span className="text-brand-blue/75 leading-relaxed">
                      <span className="font-semibold text-brand-blue mr-1">{option.id})</span>
                      {option.text}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      {errorMessage && (
        <p className="text-sm text-accent-coral text-center" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-green px-10 py-4 text-base font-bold text-white hover:bg-accent-green-dark transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Invio in corso…' : 'Invia'}
        </button>
      </div>
    </form>
  )
}
