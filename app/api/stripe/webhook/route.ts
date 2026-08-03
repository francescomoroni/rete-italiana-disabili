import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
// import {
//   EMAIL_FROM,
//   EMAIL_TO,
//   escapeHtml,
//   getResend,
// } from '@/lib/email'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('[stripe/webhook] STRIPE_WEBHOOK_SECRET non configurata')
    return NextResponse.json(
      { error: 'Webhook non configurato.' },
      { status: 500 },
    )
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json(
      { error: 'Firma Stripe mancante.' },
      { status: 400 },
    )
  }

  const payload = await request.text()
  const stripe = getStripe()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)
  } catch (error) {
    console.error('[stripe/webhook] Verifica firma fallita:', error)
    return NextResponse.json(
      { error: 'Firma webhook non valida.' },
      { status: 400 },
    )
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      // TODO: riattivare notifica email Resend quando pronto
      // const session = event.data.object as Stripe.Checkout.Session
      // await notifyDonationReceived(session)
      break
    }
    default:
      break
  }

  return NextResponse.json({ received: true })
}

/*
async function notifyDonationReceived(session: Stripe.Checkout.Session) {
  const amountCents =
    session.amount_total ??
    (session.metadata?.amount_eur
      ? Math.round(Number(session.metadata.amount_eur) * 100)
      : null)

  const amountLabel =
    amountCents !== null && Number.isFinite(amountCents)
      ? new Intl.NumberFormat('it-IT', {
          style: 'currency',
          currency: (session.currency ?? 'eur').toUpperCase(),
        }).format(amountCents / 100)
      : 'non disponibile'

  const donorEmail =
    session.customer_details?.email ??
    session.customer_email ??
    'non fornita'

  const donorName = session.customer_details?.name ?? 'non fornito'
  const sessionId = session.id

  const resend = getResend()
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: [EMAIL_TO],
    subject: `[Donazione] Hai ricevuto una donazione di ${amountLabel}`,
    html: `
      <h2>Hai ricevuto una nuova donazione</h2>
      <p>Una donazione è stata completata con successo tramite Stripe Checkout.</p>
      <p><strong>Importo:</strong> ${escapeHtml(amountLabel)}</p>
      <p><strong>Donatore:</strong> ${escapeHtml(donorName)}</p>
      <p><strong>Email donatore:</strong> ${escapeHtml(donorEmail)}</p>
      <p><strong>Session ID:</strong> ${escapeHtml(sessionId)}</p>
      <p><strong>Stato pagamento:</strong> ${escapeHtml(session.payment_status)}</p>
    `,
  })

  if (error) {
    throw new Error(error.message)
  }
}
*/
