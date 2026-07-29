import type { Metadata } from 'next'
import Header from '@/components/header'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import ImpactNumbers from '@/components/impact-numbers'
import MissionSection from '@/components/mission-section'
import WhoWeHelp from '@/components/who-we-help'
import ProjectsSection from '@/components/projects-section'
import NewsSection from '@/components/news-section'
import EventsSection from '@/components/events-section'
import MembershipCTA from '@/components/membership-cta'
import DonationsSection from '@/components/donations-section'
import TestimonialsSection from '@/components/testimonials-section'
import PartnersSection from '@/components/partners-section'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Home – Inclusione, Diritti e Sostegno per le Persone con Disabilità',
  description:
    'Rete Italiana Disabili ETS: promuoviamo diritti, inclusione e sostegno concreto per le persone con disabilità in Italia. Scopri i nostri progetti, unisciti a noi.',
  alternates: { canonical: '/' },
}

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
        <ProjectsSection />
        <NewsSection />
        <EventsSection />
        <MembershipCTA />
        <DonationsSection />
        <TestimonialsSection />
        <PartnersSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
