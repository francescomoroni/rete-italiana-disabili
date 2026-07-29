import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import DonationsSection from '@/components/donations-section'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Sostienici',
  description:
    'Dona a Rete Italiana Disabili ETS e aiutaci a promuovere i diritti delle persone con disabilità. Donazione detraibile fiscalmente, pagamento sicuro.',
  alternates: { canonical: '/sostienici' },
}

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
            <h2 id="bonifico-heading" className="text-2xl font-extrabold text-[#1a3a6b] mb-6">
              Dona tramite bonifico bancario
            </h2>
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#1a3a6b]/8 text-left">
              <dl className="flex flex-col gap-3 text-base">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-[#1a3a6b] shrink-0">Intestatario</dt>
                  <dd className="text-[#1a3a6b]/70 sm:text-right">
                    RETE ITALIANA DISABILI — Filiale Ciampino
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-[#1a3a6b] shrink-0">IBAN</dt>
                  <dd className="text-[#1a3a6b]/70 font-mono sm:text-right break-all">
                    IT63I0503439550000000011249
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-[#1a3a6b] shrink-0">Causale</dt>
                  <dd className="text-[#1a3a6b]/70 sm:text-right">Donazione liberale</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-semibold text-[#1a3a6b] shrink-0">Codice Fiscale</dt>
                  <dd className="text-[#1a3a6b]/70 sm:text-right">94083440589</dd>
                </div>
              </dl>
            </div>
            <p className="text-sm text-[#1a3a6b]/50 mt-4">
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
