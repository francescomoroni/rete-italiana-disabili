import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Rete Italiana Disabili ETS – Inclusione, Diritti e Sostegno',
    template: '%s | Rete Italiana Disabili ETS',
  },
  description:
    'Rete Italiana Disabili ETS promuove diritti, inclusione, sostegno alle famiglie e progetti concreti per migliorare la qualità della vita delle persone con disabilità in Italia.',
  keywords: [
    'disabilità',
    'inclusione',
    'diritti disabili',
    'nonprofit disabilità',
    'associazione disabili Italia',
    'sostegno famiglie',
    'accessibilità',
    'ETS',
  ],
  authors: [{ name: 'Rete Italiana Disabili ETS' }],
  creator: 'Rete Italiana Disabili ETS',
  publisher: 'Rete Italiana Disabili ETS',
  metadataBase: new URL('https://reteitalianadisabili.it'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://reteitalianadisabili.it',
    siteName: 'Rete Italiana Disabili ETS',
    title: 'Rete Italiana Disabili ETS – Inclusione, Diritti e Sostegno',
    description:
      'Promuoviamo diritti, inclusione e sostegno concreto per le persone con disabilità in Italia.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Rete Italiana Disabili ETS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rete Italiana Disabili ETS',
    description: 'Promuoviamo diritti, inclusione e sostegno per le persone con disabilità.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a3a6b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} bg-background font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Rete Italiana Disabili ETS',
              url: 'https://reteitalianadisabili.it',
              logo: 'https://reteitalianadisabili.it/logo.png',
              description:
                'Associazione nazionale per la promozione dei diritti e dell\'inclusione delle persone con disabilità.',
              address: { '@type': 'PostalAddress', addressCountry: 'IT' },
              sameAs: [
                'https://www.facebook.com/reteitalianadisabili',
                'https://www.instagram.com/reteitalianadisabili',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <a href="#main-content" className="skip-link">
          Vai al contenuto principale
        </a>
        {children}
      </body>
    </html>
  )
}
