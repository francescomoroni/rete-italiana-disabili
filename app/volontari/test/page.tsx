import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import VolontariTestForm from '@/components/volontari-test-form'
import JsonLd from '@/components/json-ld'
import { breadcrumbJsonLd, pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo'

const TEST_DESCRIPTION =
  'Accedi al test di verifica del percorso formativo "Camminare Insieme nel Welfare Rigenerativo". Inserisci i tuoi dati, completa il questionario a risposta multipla e ottieni l\'attestato di partecipazione.'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Test di Verifica — Volontari',
    description: TEST_DESCRIPTION,
    path: '/volontari/test',
  }),
  keywords: [
    'test volontari',
    'questionario volontariato',
    'attestato volontari',
    'formazione disabilità',
    'Rete Italiana Disabili',
    'Camminare Insieme nel Welfare Rigenerativo',
  ],
}

const testJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${SITE_URL}/volontari/test`,
    name: 'Test di Verifica — Volontari',
    description: TEST_DESCRIPTION,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'it-IT',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'Test di Verifica — Camminare Insieme nel Welfare Rigenerativo',
    description: TEST_DESCRIPTION,
    educationalLevel: 'Beginner',
    inLanguage: 'it-IT',
    about: {
      '@type': 'Course',
      name: 'Camminare Insieme nel Welfare Rigenerativo',
      provider: {
        '@type': 'NGO',
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  },
  breadcrumbJsonLd([
    { name: 'Volontari', path: '/volontari' },
    { name: 'Test di Verifica', path: '/volontari/test' },
  ]),
]

export default function VolontariTestPage() {
  return (
    <>
      <JsonLd data={testJsonLd} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Verifica competenze"
          title="Test di Verifica"
          description="Compila i dati richiesti per accedere al questionario a risposta multipla e ottenere l'attestato."
          breadcrumbs={[
            { label: 'Volontari', href: '/volontari' },
            { label: 'Test di Verifica' },
          ]}
          accentColor="#27a55a"
        />

        <section aria-labelledby="test-form-heading" className="py-20 bg-brand-surface">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 id="test-form-heading" className="sr-only">
              Dati per accedere al test
            </h2>
            <VolontariTestForm />
            <p className="text-center mt-8">
              <Link
                href="/volontari"
                className="inline-flex items-center justify-center gap-2 text-brand-blue font-semibold hover:text-accent-green transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Torna alla pagina Volontari
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
