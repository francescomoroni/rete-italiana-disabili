import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import DonationsSection from '@/components/donations-section'
import FinalCTA from '@/components/final-cta'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Sostienici',
  description:
    'Dona a Rete Italiana Disabili APS e aiutaci a promuovere i diritti delle persone con disabilità. Donazione detraibile fiscalmente, pagamento sicuro.',
  path: '/sostienici',
})

export default function SostieniciPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Sostienici"
          title="Il tuo contributo fa la differenza."
          description="Ogni donazione si trasforma in progetti concreti, in persone supportate, in diritti difesi. Grazie per scegliere di essere parte di questo cambiamento."
          breadcrumbs={[{ label: 'Sostienici' }]}
          accentColor="#e84c5a"
        />

        <DonationsSection />

        {/* Bank transfer info */}
        <section aria-labelledby="bonifico-heading" className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 id="bonifico-heading" className="text-2xl font-extrabold text-brand-blue mb-6">
              Dona tramite bonifico bancario
            </h2>
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-blue/8 text-left">
              <dl className="flex flex-col gap-3 text-base">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-brand-blue shrink-0">Intestatario</dt>
                  <dd className="text-brand-blue/70 sm:text-right">
                    RETE ITALIANA DISABILI — Filiale Ciampino
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-brand-blue shrink-0">IBAN</dt>
                  <dd className="text-brand-blue/70 font-mono sm:text-right break-all">
                    IT63I0503439550000000011249
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-brand-blue shrink-0">Causale</dt>
                  <dd className="text-brand-blue/70 sm:text-right">Donazione liberale</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-brand-blue shrink-0">Codice Fiscale</dt>
                  <dd className="text-brand-blue/70 sm:text-right">94083440589</dd>
                </div>
              </dl>
            </div>
            <p className="text-sm text-brand-blue/50 mt-4">
              Le donazioni sono detraibili ai sensi del D.Lgs. 117/2017. Conserva la ricevuta della tua donazione.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
