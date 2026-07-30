import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import ProjectsSection from '@/components/projects-section'
import FinalCTA from '@/components/final-cta'
import JsonLd from '@/components/json-ld'
import { PROJECTS } from '@/lib/data'
import { absoluteUrl, pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Progetti di inclusione',
  description:
    'Scopri i progetti di Rete Italiana Disabili ETS: sport inclusivo, cultura, salute, turismo accessibile e iniziative di solidarietà in tutta Italia.',
  path: '/progetti',
})

const progettiJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Progetti di inclusione',
  description:
    'Progetti di sport inclusivo, cultura, salute e solidarietà di Rete Italiana Disabili ETS.',
  url: `${SITE_URL}/progetti`,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: {
    '@type': 'NGO',
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.slice(0, 20).map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}/progetti/${project.slug}`,
      name: project.title,
      image: absoluteUrl(project.image),
    })),
  },
}

export default function ProgettiPage() {
  return (
    <>
      <JsonLd data={progettiJsonLd} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Cosa facciamo"
          title="I Progetti"
          description="Dal 2020 abbiamo lavorato a 50 progetti di cooperazione in rete e inclusione sociale."
          breadcrumbs={[{ label: 'Progetti' }]}
        />
        <ProjectsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
