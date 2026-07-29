import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, User, Building2, HeartHandshake } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import ServicesSection from '@/components/services-section'
import FinalCTA from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Diventa Socio',
  description:
    'Unisciti a Rete Italiana Disabili ETS come socio e contribuisci attivamente alla promozione dei diritti e dell\'inclusione delle persone con disabilità.',
  alternates: { canonical: '/diventa-socio' },
}

const MODULI = [
  {
    title: 'Persone fisiche',
    description: 'Modulo per qualsiasi persona che desidera associarsi',
    href: '/documents/modulo-iscrizione-persona.pdf',
    icon: User,
  },
  {
    title: 'ETS e persone giuridiche',
    description: 'Riservato ad Enti del Terzo Settore (ETS) e persone giuridiche',
    href: '/documents/modulo-iscrizione-ets.pdf',
    icon: Building2,
  },
  {
    title: 'Volontari',
    description: 'Modulo per chi desidera prestare attività di volontariato',
    href: '/documents/modulo-volontario.pdf',
    icon: HeartHandshake,
  },
]

export default function DiventaSocioPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Unisciti a noi"
          title="Diventa socio!"
          description="Unisciti a noi nell'opera di sensibilizzazione e supporto alle persone con disabilità. Scarica il modulo di richiesta ammissione, compilalo e invialo per entrare a far parte della nostra rete."
          breadcrumbs={[{ label: 'Diventa Socio' }]}
          accentColor="#27a55a"
        />

        <ServicesSection />

        {/* Download moduli */}
        <section aria-labelledby="moduli-heading" className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="moduli-heading" className="text-3xl font-extrabold text-[#1a3a6b] mb-4">
                Scarica il modulo di ammissione
              </h2>
              <p className="text-lg text-[#1a3a6b]/65 leading-relaxed">
                Insieme possiamo fare la differenza e promuovere l&apos;inclusione in tutta Italia.
                Compila il modulo e inviaci la richiesta di iscrizione.
              </p>
            </div>

            <ul
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              role="list"
            >
              {MODULI.map((modulo) => (
                <li key={modulo.href}>
                  <article className="flex flex-col items-center gap-4 rounded-2xl border border-[#1a3a6b]/8 bg-[#F8FAFC] p-8 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#e8edf5] flex items-center justify-center">
                      <modulo.icon className="w-6 h-6 text-[#1a3a6b]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a3a6b]">{modulo.title}</h3>
                    <p className="text-sm text-[#1a3a6b]/65 leading-relaxed flex-1">
                      {modulo.description}
                    </p>
                    <a
                      href={modulo.href}
                      download
                      aria-label={`Scarica ${modulo.title} in formato PDF`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#27a55a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1e8a4a] transition-colors mt-2"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      Scarica modulo
                    </a>
                  </article>
                </li>
              ))}
            </ul>

            <p className="text-center mt-10">
              <Link
                href="/contatti"
                className="text-[#1a3a6b] font-semibold hover:text-[#27a55a] transition-colors underline-offset-4 hover:underline"
              >
                Contattaci per info
              </Link>
            </p>
          </div>
        </section>

        {/* Registration form */}
        <section aria-labelledby="form-heading" className="py-20 bg-[#F8FAFC]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 id="form-heading" className="text-3xl font-extrabold text-[#1a3a6b] mb-2 text-center">
              Richiesta di iscrizione
            </h2>
            <p className="text-[#1a3a6b]/60 text-center mb-10">
              Preferisci compilare online? Inviaci la richiesta e ti contatteremo entro 48 ore.
            </p>

            <form
              className="flex flex-col gap-5 bg-white p-8 rounded-2xl border border-[#1a3a6b]/8"
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
