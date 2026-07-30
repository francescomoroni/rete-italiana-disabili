import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectDetail from '@/components/project-detail'
import JsonLd from '@/components/json-ld'
import { PROJECTS } from '@/lib/data'
import { absoluteUrl, pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return { robots: { index: false, follow: false } }

  const description =
    project.description.length > 155
      ? `${project.description.slice(0, 152)}…`
      : project.description

  return pageMetadata({
    title: project.title,
    description,
    path: `/progetti/${slug}`,
    image: {
      url: project.image,
      width: 1200,
      height: 630,
      alt: project.title,
    },
    type: 'article',
  })
}

export default async function ProgettoDetailPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  const pageUrl = `${SITE_URL}/progetti/${slug}`
  const imageUrl = absoluteUrl(project.image)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: project.title,
      description: project.description,
      image: imageUrl,
      datePublished: project.year ? `${project.year}-01-01` : undefined,
      author: {
        '@type': 'NGO',
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'NGO',
        name: SITE_NAME,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logo.jpg`,
        },
      },
      mainEntityOfPage: pageUrl,
      keywords: project.tags?.join(', '),
      about: project.category,
      inLanguage: 'it-IT',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Progetti',
          item: `${SITE_URL}/progetti`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.title,
          item: pageUrl,
        },
      ],
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}
