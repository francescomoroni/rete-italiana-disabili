import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, User, Building2, HeartHandshake } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import ServicesSection from '@/components/services-section'
import FinalCTA from '@/components/final-cta'
import MembershipForm from '@/components/membership-form'

import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Diventa Socio',
  description:
    "Unisciti a Rete Italiana Disabili APS come socio o volontario e contribuisci attivamente alla promozione dei diritti e dell'inclusione delle persone con disabilità.",
  path: '/diventa-socio',
})

const MODULI = [
  {
    title: 'Persone fisiche',
    description: 'Modulo per qualsiasi persona che desidera associarsi',
    href: '/documents/modulo-iscrizione-persona.pdf',
    icon: User,
  },
  {
    title: 'APS e persone giuridiche',
    description: 'Riservato ad Enti del Terzo Settore (APS) e persone giuridiche',
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="moduli-heading" className="text-3xl font-extrabold text-brand-blue mb-4">
                Scarica il modulo di ammissione
              </h2>
              <p className="text-lg text-brand-blue/65 leading-relaxed">
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
                  <article className="flex flex-col items-center gap-4 rounded-2xl border border-brand-blue/8 bg-brand-surface p-8 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-muted flex items-center justify-center">
                      <modulo.icon className="w-6 h-6 text-brand-blue" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-blue">{modulo.title}</h3>
                    <p className="text-sm text-brand-blue/65 leading-relaxed flex-1">
                      {modulo.description}
                    </p>
                    <a
                      href={modulo.href}
                      download
                      aria-label={`Scarica ${modulo.title} in formato PDF`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-green-dark transition-colors mt-2"
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
                className="text-brand-blue font-semibold hover:text-accent-green transition-colors underline-offset-4 hover:underline"
              >
                Contattaci per info
              </Link>
            </p>
          </div>
        </section>

        {/* Registration form */}
        <section aria-labelledby="form-heading" className="py-20 bg-brand-surface">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 id="form-heading" className="text-3xl font-extrabold text-brand-blue mb-2 text-center">
              Richiesta di iscrizione
            </h2>
            <p className="text-brand-blue/60 text-center mb-10">
              Preferisci compilare online? Inviaci la richiesta e ti contatteremo entro 48 ore.
            </p>

            <MembershipForm />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
