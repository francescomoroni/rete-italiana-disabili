import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import MembershipCTA from '@/components/membership-cta'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Diventa Socio',
  description:
    'Unisciti a Rete Italiana Disabili ETS come socio e contribuisci attivamente alla promozione dei diritti e dell\'inclusione delle persone con disabilità.',
  alternates: { canonical: '/diventa-socio' },
}

export default function DiventaSocioPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Unisciti a noi"
          title="Diventa socio e fai la differenza."
          description="Entrare in Rete Italiana Disabili ETS significa scegliere di essere parte attiva del cambiamento. Ogni socio conta, ogni voce amplifica la nostra."
          breadcrumbs={[{ label: 'Diventa Socio' }]}
          accentColor="#27a55a"
        />

        <MembershipCTA />

        {/* Registration form */}
        <section aria-labelledby="form-heading" className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 id="form-heading" className="text-3xl font-extrabold text-[#1a3a6b] mb-2 text-center">
              Richiesta di iscrizione
            </h2>
            <p className="text-[#1a3a6b]/60 text-center mb-10">
              Compila il modulo. Ti contatteremo entro 48 ore per completare l&apos;iscrizione.
            </p>

            <form
              className="flex flex-col gap-5 bg-[#F8FAFC] p-8 rounded-2xl border border-[#1a3a6b]/8"
              aria-label="Modulo di richiesta iscrizione"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                    Nome <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                    <span className="sr-only">(obbligatorio)</span>
                  </label>
                  <input
                    id="nome"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="cognome" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                    Cognome <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                    <span className="sr-only">(obbligatorio)</span>
                  </label>
                  <input
                    id="cognome"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                  Email <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                  <span className="sr-only">(obbligatorio)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                  Telefono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                />
              </div>

              <div>
                <fieldset>
                  <legend className="block text-sm font-semibold text-[#1a3a6b] mb-2">
                    Tipo di iscrizione <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                    <span className="sr-only">(obbligatorio)</span>
                  </legend>
                  <div className="flex flex-col gap-2">
                    {['Socio Sostenitore (€30/anno)', 'Socio Ordinario (€60/anno)', 'Socio Fondatore (€150/anno)'].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="tipo-iscrizione"
                          value={opt}
                          className="w-4 h-4 accent-[#1a3a6b]"
                          aria-label={opt}
                        />
                        <span className="text-[#1a3a6b] text-base">{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div>
                <label htmlFor="motivazione" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                  Perché vuoi diventare socio?
                </label>
                <textarea
                  id="motivazione"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base resize-none"
                  aria-describedby="motivazione-hint"
                />
                <p id="motivazione-hint" className="text-xs text-[#1a3a6b]/40 mt-1">Facoltativo, ma ci aiuta a conoscerti meglio.</p>
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 mt-1 accent-[#1a3a6b]"
                    aria-required="true"
                  />
                  <span className="text-sm text-[#1a3a6b]/70">
                    Accetto il trattamento dei dati personali secondo la{' '}
                    <a href="/privacy" className="underline text-[#1a3a6b] hover:text-[#2952a3]">
                      Privacy Policy
                    </a>
                    {' '}(obbligatorio)
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1a3a6b] text-white font-bold rounded-xl hover:bg-[#0f2347] transition-colors shadow-lg text-base"
              >
                Invia la richiesta di iscrizione
              </button>
            </form>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
