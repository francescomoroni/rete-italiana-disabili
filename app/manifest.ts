import type { MetadataRoute } from 'next'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'RID APS',
    description: `${SITE_TAGLINE}. ${SITE_DESCRIPTION}`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a3a6b',
    lang: 'it',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
  }
}
