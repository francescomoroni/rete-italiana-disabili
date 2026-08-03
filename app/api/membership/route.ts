import { NextResponse } from 'next/server'
import {
  EMAIL_FROM,
  EMAIL_TO,
  escapeHtml,
  getResend,
  isValidEmail,
} from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const nome = String(body.nome ?? '').trim()
    const cognome = String(body.cognome ?? '').trim()
    const email = String(body.email ?? '').trim()
    const telefono = String(body.telefono ?? '').trim()
    const motivazione = String(body.motivazione ?? '').trim()
    const privacy = Boolean(body.privacy)

    if (!nome || !cognome || !email || !privacy) {
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

    const fullName = `${nome} ${cognome}`
    const resend = getResend()

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      replyTo: email,
      subject: `[Iscrizione] Richiesta socio — ${fullName}`,
      html: `
        <h2>Nuova richiesta di iscrizione</h2>
        <p><strong>Nome:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(telefono || '—')}</p>
        <p><strong>Motivazione:</strong></p>
        <p>${escapeHtml(motivazione || '—').replaceAll('\n', '<br />')}</p>
      `,
    })

    if (error) {
      console.error('[membership] Resend error:', error)
      return NextResponse.json(
        { error: 'Invio non riuscito. Riprova più tardi.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[membership] Unexpected error:', error)
    const message =
      error instanceof Error && error.message.includes('RESEND_API_KEY')
        ? 'Servizio email non configurato.'
        : 'Invio non riuscito. Riprova più tardi.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
