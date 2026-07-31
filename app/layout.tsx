import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import JsonLd from '@/components/json-ld'
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: 'nonprofit',
  metadataBase: new URL(SITE_URL),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – ${SITE_TAGLINE}`,
    description:
      'Promuoviamo diritti, inclusione e sostegno concreto per le persone con disabilità in Italia.',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Promuoviamo diritti, inclusione e sostegno per le persone con disabilità.',
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IT-62',
    'geo.placename': 'Roma',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a3a6b',
  width: 'device-width',
  initialScale: 1,
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${SITE_URL}/#organization`,
  name: ORGANIZATION.name,
  legalName: ORGANIZATION.legalName,
  alternateName: ['Rete Italiana Disabili', 'RID APS', 'Noi Siamo Rete'],
  url: ORGANIZATION.url,
  logo: {
    '@type': 'ImageObject',
    url: ORGANIZATION.logo,
  },
  image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
  description:
    "Associazione nazionale Ente del Terzo Settore per la promozione dei diritti e dell'inclusione delle persone con disabilità.",
  email: ORGANIZATION.email,
  telephone: ORGANIZATION.telephone,
  address: {
    '@type': 'PostalAddress',
    ...ORGANIZATION.address,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Italia',
  },
  sameAs: ORGANIZATION.sameAs,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: ORGANIZATION.telephone,
      email: ORGANIZATION.email,
      contactType: 'customer service',
      availableLanguage: ['Italian'],
      areaServed: 'IT',
    },
  ],
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roma',
      addressCountry: 'IT',
    },
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: 'it-IT',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${inter.variable} bg-background font-sans`}
    >
      <head>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
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
