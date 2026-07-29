import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import NewsSection from '@/components/news-section'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'News',
  description:
    'Le ultime notizie e aggiornamenti da Rete Italiana Disabili ETS: diritti, inclusione, accessibilità e nuovi progetti per le persone con disabilità in Italia.',
  alternates: { canonical: '/news' },
}

export default function NewsPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Aggiornamenti"
          title="Notizie, approfondimenti e storie."
          description="Restiamo informati per poter agire meglio. Qui trovi gli aggiornamenti del mondo della disabilità in Italia e i nostri contributi."
          breadcrumbs={[{ label: 'News' }]}
          accentColor="#27a55a"
        />
        <NewsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
