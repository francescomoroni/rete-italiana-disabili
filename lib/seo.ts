import type { Metadata } from 'next'

export const SITE_URL = 'https://reteitalianadisabili.vercel.app'
export const SITE_NAME = 'Rete Italiana Disabili APS'
export const SITE_TAGLINE = 'Inclusione, Diritti e Sostegno'

export const SITE_DESCRIPTION =
  'Rete Italiana Disabili APS promuove diritti, inclusione, sostegno alle famiglie e progetti concreti per migliorare la qualità della vita delle persone con disabilità in Italia.'

export const SITE_KEYWORDS = [
  'disabilità',
  'inclusione',
  'diritti disabili',
  'associazione disabili Italia',
  'APS disabilità',
  'sostegno famiglie disabilità',
  'accessibilità',
  'terzo settore',
  'volontariato disabilità',
  'progetti inclusione',
  'Roma',
  'Ciampino',
]

export const DEFAULT_OG_IMAGE = {
  url: '/images/hero.webp',
  width: 1920,
  height: 1080,
  alt: 'Persone con disabilità che partecipano attivamente alla vita sociale - Rete Italiana Disabili APS',
} as const

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: 'Rete Italiana Disabili APS',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: 'inforeteitalianadisabili@gmail.com',
  telephone: '+39-333-296-7651',
  address: {
    streetAddress: 'Via Liberiana 17',
    addressLocality: 'Roma',
    postalCode: '00185',
    addressRegion: 'RM',
    addressCountry: 'IT',
  },
  sameAs: [
    'https://www.facebook.com/people/Rete-Italiana-Disabili-ets/61579720119544/',
    'https://www.instagram.com/reteitalianadisabili/',
  ],
} as const

type PageMetaInput = {
  title: string
  description: string
  path: string
  image?: { url: string; width?: number; height?: number; alt?: string }
  /** Use absolute title (no template suffix). Useful for homepage. */
  absoluteTitle?: boolean
  noIndex?: boolean
  type?: 'website' | 'article'
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  absoluteTitle = false,
  noIndex = false,
  type = 'website',
}: PageMetaInput): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const ogImage = {
    url: image.url,
    width: image.width ?? 1200,
    height: image.height ?? 630,
    alt: image.alt ?? title,
  }

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      languages: { 'it-IT': path },
    },
    openGraph: {
      type,
      locale: 'it_IT',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  }
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return path === '/' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
