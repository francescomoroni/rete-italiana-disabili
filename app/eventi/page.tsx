import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import EventsSection from '@/components/events-section'
import FinalCTA from '@/components/final-cta'
import JsonLd from '@/components/json-ld'
import { EVENTS } from '@/lib/data'
import { absoluteUrl, ORGANIZATION, pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Eventi',
  description:
    'Prossimi eventi di Rete Italiana Disabili ETS: A Tutto Campo Speciale Serale e corso di padel inclusivo al Tennis Club Vigna Fiorita di Ciampino.',
  path: '/eventi',
})

const eventsJsonLd = EVENTS.map((event) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.title,
  description: event.description,
  image: absoluteUrl(event.image),
  startDate: event.date,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: event.location.split(',')[0]?.trim() ?? event.location,
    address: {
      '@type': 'PostalAddress',
      streetAddress: event.location,
      addressLocality: 'Ciampino',
      addressRegion: 'RM',
      addressCountry: 'IT',
    },
  },
  organizer: {
    '@type': 'NGO',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: ORGANIZATION.telephone,
  },
  offers: {
    '@type': 'Offer',
    url: `${SITE_URL}/eventi`,
    availability: 'https://schema.org/InStock',
  },
  inLanguage: 'it-IT',
}))

export default function EventiPage() {
  return (
    <>
      <JsonLd data={eventsJsonLd} />
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
