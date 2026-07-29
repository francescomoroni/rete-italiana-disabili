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
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-[#1a3a6b]">Intestatario</dt>
                  <dd className="text-[#1a3a6b]/70">Rete Italiana Disabili ETS</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-[#1a3a6b]">IBAN</dt>
                  <dd className="text-[#1a3a6b]/70 font-mono">IT00 X000 0000 0000 0000 0000 000</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-[#1a3a6b]">Causale</dt>
                  <dd className="text-[#1a3a6b]/70">Donazione liberale</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-[#1a3a6b]">Codice Fiscale</dt>
                  <dd className="text-[#1a3a6b]/70">00000000000</dd>
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
