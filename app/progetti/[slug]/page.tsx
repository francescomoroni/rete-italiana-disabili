import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectDetail from '@/components/project-detail'
import { PROJECTS } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Progetti`,
    description: project.description,
    alternates: { canonical: `/progetti/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  }
}

export default async function ProgettoDetailPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}
