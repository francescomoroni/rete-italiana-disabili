import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import ProjectsSection from '@/components/projects-section'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Progetti',
  description:
    'Dal 2020 abbiamo lavorato a 50 progetti di cooperazione in rete e inclusione sociale.',
  alternates: { canonical: '/progetti' },
}

export default function ProgettiPage() {
  return (
    <>
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
