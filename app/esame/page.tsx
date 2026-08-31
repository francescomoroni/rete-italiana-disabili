import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import ExamForm from '@/components/exam-form'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Test di Verifica — Esame',
  description:
    'Questionario a risposta multipla del percorso formativo "Camminare Insieme nel Welfare Rigenerativo".',
  path: '/esame',
  noIndex: true,
})

export default function EsamePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Verifica competenze"
          title="Questionario di Valutazione"
          description="Test di verifica a risposta multipla — Camminare Insieme nel Welfare Rigenerativo"
          breadcrumbs={[
            { label: 'Volontari', href: '/volontari' },
            { label: 'Test di Verifica', href: '/volontari/test' },
            { label: 'Esame' },
          ]}
          accentColor="#27a55a"
        />

        <section aria-labelledby="esame-heading" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="esame-heading" className="sr-only">
              Domande del test di verifica
            </h2>
            <ExamForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
