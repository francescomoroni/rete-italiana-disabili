import { NextResponse } from 'next/server'
import { validateDonationAmount } from '@/lib/donation-amount'
import { getCheckoutBaseUrl, getStripe } from '@/lib/stripe'

type CheckoutBody = {
  amount?: unknown
}

export async function POST(request: Request) {
  try {
    let body: CheckoutBody
    try {
      body = (await request.json()) as CheckoutBody
    } catch {
      return NextResponse.json(
        { error: 'Corpo della richiesta non valido.' },
        { status: 400 },
      )
    }

    const validation = validateDonationAmount(body.amount)
    if (!validation.ok) {
      return NextResponse.json(
        { error: 'Importo non valido. Inserisci un valore tra €1 e €5000 (max 2 decimali).' },
        { status: 400 },
      )
    }

    const stripe = getStripe()
    const baseUrl = getCheckoutBaseUrl(request)

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: validation.unitAmount,
            product_data: {
              name: 'Donazione a Rete Italiana Disabili APS',
              description: 'Grazie per sostenere le nostre attività.',
            },
          },
        },
      ],
      success_url: `${baseUrl}/sostienici?status=success`,
      cancel_url: `${baseUrl}/sostienici?status=cancel`,
      metadata: {
        type: 'donation',
        amount_eur: String(validation.amount),
      },
    })

    if (!session.url) {
      return NextResponse.json(
        { error: 'Impossibile creare la sessione di pagamento.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[create-checkout-session]', error)

    const message =
      error instanceof Error && error.message.includes('STRIPE_SECRET_KEY')
        ? 'Pagamenti non configurati.'
        : 'Si è verificato un problema durante la preparazione del pagamento.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
