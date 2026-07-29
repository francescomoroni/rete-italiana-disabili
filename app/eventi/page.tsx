import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import EventsSection from '@/components/events-section'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Eventi',
  description:
    'Scopri i prossimi eventi di Rete Italiana Disabili ETS: convegni, sportelli, maratone e incontri su diritti e inclusione in tutta Italia.',
  alternates: { canonical: '/eventi' },
}

export default function EventiPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="In agenda"
          title="Eventi, incontri, opportunità."
          description="Partecipa agli eventi di Rete Italiana Disabili ETS. Ogni appuntamento è un'occasione per conoscerci, imparare e agire insieme."
          breadcrumbs={[{ label: 'Eventi' }]}
          accentColor="#f07030"
        />
        <EventsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
