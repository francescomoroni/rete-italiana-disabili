import { NextResponse } from 'next/server'
import { EXAM_CORRECT_ANSWERS } from '@/lib/exam-scoring'
import {
  EMAIL_FROM,
  escapeHtml,
  getResend,
  isValidEmail,
} from '@/lib/email'
import { isValidCodiceFiscale } from '@/lib/validation'

const EXAM_EMAIL_TO = 'inforeteitalianadisabili@gmail.com'

/** Invia notifica email all'associazione quando un volontario supera il test. */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const participant = body.participant ?? {}
    const answers = body.answers ?? {}
    const score = Number(body.score ?? 0)
    const total = Number(body.total ?? Object.keys(EXAM_CORRECT_ANSWERS).length)

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

    const fullName = `${nome} ${cognome}`
    const answerDetails: string[] = []

    for (const [questionId, correct] of Object.entries(EXAM_CORRECT_ANSWERS)) {
      const given = String(answers[questionId] ?? '').trim().toUpperCase()
      const isCorrect = given === correct
      answerDetails.push(
        `<li><strong>Domanda ${questionId}:</strong> risposta ${escapeHtml(given || '—')} ${isCorrect ? '(corretta)' : `(errata, corretta: ${correct})`}</li>`,
      )
    }

    let emailed = false

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = getResend()
        const { error } = await resend.emails.send({
          from: EMAIL_FROM,
          to: [EXAM_EMAIL_TO],
          replyTo: email,
          subject: `[Test Volontari] ${fullName} — ${score}/${total}`,
          html: `
            <h2>Nuovo test di verifica superato</h2>
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

        if (!error) emailed = true
        else console.error('[exam] Resend error:', error)
      } catch (error) {
        console.error('[exam] Email send failed:', error)
      }
    } else {
      console.warn('[exam] RESEND_API_KEY non configurata: email non inviata.')
    }

    return NextResponse.json({ ok: true, emailed })
  } catch (error) {
    console.error('[exam] Unexpected error:', error)
    return NextResponse.json({ error: 'Richiesta non valida.' }, { status: 400 })
  }
}
