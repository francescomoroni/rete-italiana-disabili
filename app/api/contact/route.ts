import { NextResponse } from 'next/server'
import {
  EMAIL_FROM,
  EMAIL_TO,
  escapeHtml,
  getResend,
  isValidEmail,
} from '@/lib/email'

const SUBJECT_LABELS: Record<string, string> = {
  informazioni: 'Richiesta informazioni generali',
  iscrizione: 'Iscrizione come socio',
  donazione: 'Donazioni',
  progetti: 'Collaborazione su progetti',
  eventi: 'Eventi',
  media: 'Richiesta media/stampa',
  altro: 'Altro',
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const nome = String(body.nome ?? '').trim()
    const cognome = String(body.cognome ?? '').trim()
    const email = String(body.email ?? '').trim()
    const telefono = String(body.telefono ?? '').trim()
    const oggetto = String(body.oggetto ?? '').trim()
    const messaggio = String(body.messaggio ?? '').trim()
    const privacy = Boolean(body.privacy)

    if (!nome || !email || !oggetto || !messaggio || !privacy) {
      return NextResponse.json(
        { error: 'Compila tutti i campi obbligatori.' },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Indirizzo email non valido.' },
        { status: 400 },
      )
    }

    if (!SUBJECT_LABELS[oggetto]) {
      return NextResponse.json(
        { error: 'Oggetto non valido.' },
        { status: 400 },
      )
    }

    const fullName = [nome, cognome].filter(Boolean).join(' ')
    const subjectLabel = SUBJECT_LABELS[oggetto]
    const resend = getResend()

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      replyTo: email,
      subject: `[Contatti] ${subjectLabel} — ${fullName}`,
      html: `
        <h2>Nuovo messaggio dal form Contatti</h2>
        <p><strong>Nome:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(telefono || '—')}</p>
        <p><strong>Oggetto:</strong> ${escapeHtml(subjectLabel)}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(messaggio).replaceAll('\n', '<br />')}</p>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        { error: 'Invio non riuscito. Riprova più tardi.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)
    const message =
      error instanceof Error && error.message.includes('RESEND_API_KEY')
        ? 'Servizio email non configurato.'
        : 'Invio non riuscito. Riprova più tardi.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
