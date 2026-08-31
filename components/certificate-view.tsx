'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Printer } from 'lucide-react'
import {
  EXAM_PARTICIPANT_STORAGE_KEY,
  EXAM_RESULT_STORAGE_KEY,
  type ExamParticipant,
} from '@/lib/exam-data'

interface ExamResult {
  score: number
  total: number
  passed: boolean
  completedAt?: string
}

function formatCertificateDate(value?: string) {
  const date = value ? new Date(value) : new Date()
  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export default function CertificateView() {
  const router = useRouter()
  const [participant, setParticipant] = useState<ExamParticipant | null>(null)
  const [completedAt, setCompletedAt] = useState<string | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedParticipant = sessionStorage.getItem(EXAM_PARTICIPANT_STORAGE_KEY)
    const storedResult = sessionStorage.getItem(EXAM_RESULT_STORAGE_KEY)

    if (!storedParticipant || !storedResult) {
      router.replace('/volontari/test')
      return
    }

    try {
      const parsedParticipant = JSON.parse(storedParticipant) as ExamParticipant
      const parsedResult = JSON.parse(storedResult) as ExamResult

      if (!parsedResult.passed) {
        router.replace('/esame')
        return
      }

      setParticipant(parsedParticipant)
      setCompletedAt(parsedResult.completedAt)
      setLoading(false)
    } catch {
      router.replace('/volontari/test')
    }
  }, [router])

  if (loading || !participant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#eef2f8]">
        <p className="text-brand-blue/60 font-[family-name:var(--font-certificate-body)]" role="status">
          Caricamento attestato…
        </p>
      </div>
    )
  }

  const fullName = `${participant.nome} ${participant.cognome}`
  const certificateDate = formatCertificateDate(completedAt)

  return (
    <div className="min-h-screen bg-[#eef2f8] print:bg-white print:min-h-0">
      <div className="print:hidden sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-brand-blue/10 bg-white/90 px-4 py-3 backdrop-blur-md sm:px-6">
        <p className="text-sm font-medium text-brand-blue/70">Attestato di partecipazione</p>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/15 bg-white px-3 py-2 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue/5 sm:px-4"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Stampa</span>
          </button>
          <Link
            href="/volontari"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark sm:px-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Torna a Volontari</span>
            <span className="sm:hidden">Volontari</span>
          </Link>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-57px)] items-center justify-center p-4 sm:p-8 print:min-h-0 print:p-0">
        <article
          className="certificate-paper relative aspect-[1.414/1] w-full max-w-6xl overflow-hidden bg-white shadow-[0_24px_80px_rgba(26,58,107,0.14)] print:max-w-none print:shadow-none"
          aria-label={`Attestato di partecipazione per ${fullName}`}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#a855f7] via-[#ec4899] to-[#f97316] opacity-90 blur-[1px]" />
            <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-gradient-to-bl from-[#38bdf8] via-[#818cf8] to-[#c084fc] opacity-90 blur-[1px]" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-tr from-[#fb923c] via-[#f472b6] to-[#a78bfa] opacity-90 blur-[1px]" />
            <div className="absolute -bottom-20 -right-24 h-80 w-80 rounded-full bg-gradient-to-tl from-[#60a5fa] via-[#34d399] to-[#a855f7] opacity-90 blur-[1px]" />
            <div className="absolute inset-5 bg-white sm:inset-7" />
          </div>

          <div className="relative z-10 flex h-full flex-col px-8 py-8 sm:px-14 sm:py-12">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1" />
              <div className="shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Rete Italiana Disabili APS"
                  width={120}
                  height={120}
                  className="h-20 w-20 rounded-full bg-white object-contain sm:h-28 sm:w-28"
                  priority
                />
              </div>
            </div>

            <header className="mt-2 text-center sm:mt-0">
              <p
                className="font-[family-name:var(--font-certificate-display)] text-4xl font-bold tracking-[0.12em] text-[#1a1a1a] sm:text-6xl"
                style={{ fontFamily: 'var(--font-certificate-display), Georgia, serif' }}
              >
                CERTIFICATO
              </p>
              <p
                className="mt-1 font-[family-name:var(--font-certificate-display)] text-2xl font-semibold tracking-[0.18em] text-[#1a1a1a] sm:text-4xl"
                style={{ fontFamily: 'var(--font-certificate-display), Georgia, serif' }}
              >
                DI PARTECIPAZIONE
              </p>
              <p
                className="mt-5 text-lg tracking-[0.08em] text-[#2a2a2a] sm:text-2xl"
                style={{ fontFamily: 'var(--font-certificate-body), Georgia, serif' }}
              >
                SI ATTESTA CHE
              </p>
            </header>

            <div className="mt-8 flex flex-1 flex-col items-center justify-center text-center sm:mt-10">
              <p
                id="participant-name"
                className="min-h-[2.5rem] w-full max-w-3xl border-b border-[#1a1a1a] px-4 pb-2 text-2xl font-semibold text-[#1a1a1a] sm:min-h-[3rem] sm:text-4xl"
                style={{ fontFamily: 'var(--font-certificate-body), Georgia, serif' }}
              >
                {fullName}
              </p>

              <div
                className="mt-8 max-w-3xl space-y-2 text-base leading-relaxed text-[#2a2a2a] sm:mt-10 sm:text-xl"
                style={{ fontFamily: 'var(--font-certificate-body), Georgia, serif' }}
              >
                <p>ha completato con successo il percorso formativo per volontari</p>
                <p className="font-medium">
                  &ldquo;Camminare Insieme nel Welfare Rigenerativo&rdquo;
                </p>
              </div>
            </div>

            <footer className="mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
              <p
                id="current-date"
                className="text-base text-[#2a2a2a] sm:text-lg"
                style={{ fontFamily: 'var(--font-certificate-body), Georgia, serif' }}
              >
                <span className="font-semibold">Data</span> {certificateDate}
              </p>

              <div
                className="text-left sm:text-right"
                style={{ fontFamily: 'var(--font-certificate-body), Georgia, serif' }}
              >
                <p className="text-lg font-semibold text-[#1a1a1a] sm:text-xl">Katiuscia Girolametti</p>
                <p className="mt-1 text-sm leading-snug text-[#2a2a2a] sm:text-base">
                  Presidente
                  <br />
                  Nazionale Rete
                  <br />
                  Italiana Disabili
                </p>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </div>
  )
}
