import type { Metadata } from 'next'
import Header from '@/components/header'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import ImpactNumbers from '@/components/impact-numbers'
import MissionSection from '@/components/mission-section'
import WhoWeHelp from '@/components/who-we-help'
import ServicesSection from '@/components/services-section'
import ProjectsSection from '@/components/projects-section'
import EventsSection from '@/components/events-section'
import DonationsSection from '@/components/donations-section'
import TestimonialsSection from '@/components/testimonials-section'
import PartnersSection from '@/components/partners-section'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'
import { pageMetadata, SITE_NAME, SITE_TAGLINE } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: `${SITE_NAME} – ${SITE_TAGLINE}`,
  description:
    'Rete Italiana Disabili ETS: promuoviamo diritti, inclusione e sostegno concreto per le persone con disabilità in Italia. Scopri i nostri progetti, eventi e come diventare socio.',
  path: '/',
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustBar />
        <ImpactNumbers />
        <MissionSection />
        <WhoWeHelp />
        <ServicesSection />
        <EventsSection mobileLimit={2} />
        <ProjectsSection mobileLimit={4} showAllLink />
        <DonationsSection mobilePreview />
        <TestimonialsSection />
        <PartnersSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
