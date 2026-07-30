import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'

const STATIC_ROUTES: {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/chi-siamo', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/missione', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/progetti', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/eventi', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/diventa-socio', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sostienici', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sponsor', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contatti', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trasparenza', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookie', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/progetti/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.8 : 0.6,
    images: project.image ? [absoluteImage(project.image)] : undefined,
  }))

  return [...staticEntries, ...projectEntries]
}

function absoluteImage(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`
}
