import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import EventsSection from '@/components/events-section'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Eventi',
  description:
    'Prossimi eventi di Rete Italiana Disabili: A Tutto Campo Speciale Serale e corso di padel inclusivo al Tennis Club Vigna Fiorita di Ciampino.',
  alternates: { canonical: '/eventi' },
}

export default function EventiPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Prossimi eventi"
          title="Vieni a conoscerci di persona"
          description="Le occasioni in cui Rete Italiana Disabili scende in campo per costruire comunità, sport e inclusione."
          breadcrumbs={[{ label: 'Eventi' }]}
          accentColor="#f07030"
        />
        <EventsSection showAllLink={false} showHeading={false} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
