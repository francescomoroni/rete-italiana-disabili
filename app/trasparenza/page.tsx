import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import FinalCTA from '@/components/final-cta'

import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Trasparenza',
  description:
    'Documenti e bilanci di Rete Italiana Disabili APS. In conformità al D.Lgs. 117/2017 pubblichiamo i bilanci annuali a disposizione di soci e cittadini.',
  path: '/trasparenza',
})

const BILANCI = [
  { year: 2025, href: '/documents/bilancio-2025.pdf' },
  { year: 2024, href: '/documents/bilancio-2024.pdf' },
  { year: 2023, href: '/documents/bilancio-2023.pdf' },
  { year: 2022, href: '/documents/bilancio-2022.pdf' },
]

export default function TrasparenzaPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Documenti ufficiali"
          title="Trasparenza"
          description="Documenti e bilanci dell'Associazione"
          breadcrumbs={[{ label: 'Trasparenza' }]}
        />

        <section aria-labelledby="bilanci-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="bilanci-heading" className="text-3xl font-extrabold text-brand-blue mb-4">
                Bilanci
              </h2>
              <p className="text-lg text-brand-blue/65 leading-relaxed">
                In conformità al D.Lgs. 117/2017, pubblichiamo i bilanci annuali dell&apos;Associazione
                a disposizione di soci e cittadini.
              </p>
            </div>

            <ul
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              role="list"
            >
              {BILANCI.map((bilancio) => (
                <li key={bilancio.year}>
                  <article className="flex flex-col items-center gap-4 rounded-2xl border border-brand-blue/8 bg-brand-surface p-8 text-center h-full">
                    <span className="text-3xl font-extrabold text-brand-blue">{bilancio.year}</span>
                    <a
                      href={bilancio.href}
                      download
                      aria-label={`Scarica Bilancio ${bilancio.year} in formato PDF`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-sky transition-colors"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      Bilancio {bilancio.year}
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
