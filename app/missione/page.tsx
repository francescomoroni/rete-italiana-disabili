import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import MissionSection from '@/components/mission-section'
import FinalCTA from '@/components/final-cta'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Missione',
  description:
    'La missione di Rete Italiana Disabili ETS: promuovere inclusione, difendere i diritti e favorire la partecipazione delle persone con disabilità.',
  path: '/missione',
})

export default function MissionePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Perché esistiamo"
          title="La nostra missione: un'Italia inclusiva."
          description="Lavoriamo perché ogni persona con disabilità possa vivere pienamente, esercitare i propri diritti e contribuire alla società."
          breadcrumbs={[{ label: 'Missione' }]}
          accentColor="#27a55a"
        />
        <MissionSection />

        {/* Detailed mission content */}
        <section aria-labelledby="strategia-heading" className="py-20 bg-brand-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 id="strategia-heading" className="text-3xl font-extrabold text-brand-blue mb-8 text-center">
                La nostra strategia
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Ascoltiamo',
                    text: 'Prima di agire, ascoltiamo le persone con disabilità e le loro famiglie. I loro bisogni guidano ogni nostra scelta.',
                  },
                  {
                    num: '02',
                    title: 'Progettiamo',
                    text: 'Traduciamo i bisogni in progetti concreti, misurabili, con obiettivi chiari e responsabilità definite.',
                  },
                  {
                    num: '03',
                    title: 'Coinvolgiamo',
                    text: 'Costruiamo alleanze con istituzioni, aziende e società civile per moltiplicare l\'impatto delle nostre azioni.',
                  },
                  {
                    num: '04',
                    title: 'Misuriamo',
                    text: 'Rendiamo conto dei risultati ogni anno attraverso il Bilancio Sociale. La trasparenza è un dovere, non un optional.',
                  },
                ].map((step) => (
                  <article key={step.num} className="p-6 bg-white rounded-2xl border border-brand-blue/8 shadow-sm">
                    <span className="text-4xl font-extrabold text-brand-blue/10">{step.num}</span>
                    <h3 className="font-bold text-brand-blue text-xl mt-2 mb-3">{step.title}</h3>
                    <p className="text-brand-blue/65 leading-relaxed">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
