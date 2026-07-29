import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import ProjectsSection from '@/components/projects-section'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Progetti',
  description:
    'Tutti i progetti di Rete Italiana Disabili ETS: accessibilità digitale, sport adattato, inclusione lavorativa, educazione inclusiva e molto altro.',
  alternates: { canonical: '/progetti' },
}

export default function ProgettiPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Cosa facciamo"
          title="Progetti concreti,
impatto reale."
          description="Non solo parole. Ogni progetto nasce da un bisogno reale e si traduce in azioni misurabili che cambiano la vita delle persone."
          breadcrumbs={[{ label: 'Progetti' }]}
        />
        <ProjectsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
