import { NextResponse } from 'next/server'
import { EXAM_QUESTIONS } from '@/lib/exam-data'
import {
  EMAIL_FROM,
  escapeHtml,
  getResend,
  isValidEmail,
} from '@/lib/email'
import { isValidCodiceFiscale } from '@/lib/validation'

const EXAM_EMAIL_TO =
  process.env.EXAM_EMAIL_TO ?? process.env.EMAIL_TO ?? 'lazioreteitalianadisabili@gmail.com'

const CORRECT_ANSWERS: Record<number, string> = {
  1: 'B',
  2: 'B',
  3: 'B',
  4: 'A',
  5: 'B',
  6: 'A',
}

const PASSING_SCORE = 4

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const participant = body.participant ?? {}
    const answers = body.answers ?? {}

    const nome = String(participant.nome ?? '').trim()
    const cognome = String(participant.cognome ?? '').trim()
    const dataNascita = String(participant.dataNascita ?? '').trim()
    const codiceFiscale = String(participant.codiceFiscale ?? '').trim().toUpperCase()
    const email = String(participant.email ?? '').trim()

    if (!nome || !cognome || !dataNascita || !codiceFiscale || !email) {
      return NextResponse.json({ error: 'Dati partecipante incompleti.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Indirizzo email non valido.' }, { status: 400 })
    }

    if (!isValidCodiceFiscale(codiceFiscale)) {
      return NextResponse.json({ error: 'Codice fiscale non valido.' }, { status: 400 })
    }

    let score = 0
    const answerDetails: string[] = []

    for (const question of EXAM_QUESTIONS) {
      const given = String(answers[String(question.id)] ?? '').trim().toUpperCase()
      const correct = CORRECT_ANSWERS[question.id]
      const isCorrect = given === correct

      if (isCorrect) score += 1

      answerDetails.push(
        `<li><strong>Domanda ${question.id}:</strong> risposta ${escapeHtml(given || '—')} ${isCorrect ? '(corretta)' : `(errata, corretta: ${correct})`}</li>`,
      )
    }

    const total = EXAM_QUESTIONS.length
    const passed = score >= PASSING_SCORE
    const fullName = `${nome} ${cognome}`

    if (passed) {
      const resend = getResend()
      const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: [EXAM_EMAIL_TO],
        replyTo: email,
        subject: `[Test Volontari] ${fullName} — ${score}/${total}`,
        html: `
          <h2>Nuovo test di verifica completato</h2>
          <h3>Dati partecipante</h3>
          <p><strong>Nome:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Data di nascita:</strong> ${escapeHtml(dataNascita)}</p>
          <p><strong>Codice fiscale:</strong> ${escapeHtml(codiceFiscale)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <h3>Risultato</h3>
          <p><strong>Punteggio:</strong> ${score}/${total}</p>
          <p><strong>Esito:</strong> Superato</p>
          <h3>Dettaglio risposte</h3>
          <ul>${answerDetails.join('')}</ul>
        `,
      })

      if (error) {
        console.error('[exam] Resend error:', error)
        return NextResponse.json(
          { error: 'Invio non riuscito. Riprova più tardi.' },
          { status: 500 },
        )
      }
    }

    return NextResponse.json({ ok: true, score, total, passed })
  } catch (error) {
    console.error('[exam] Unexpected error:', error)
    const message =
      error instanceof Error && error.message.includes('RESEND_API_KEY')
        ? 'Servizio email non configurato.'
        : 'Invio non riuscito. Riprova più tardi.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
