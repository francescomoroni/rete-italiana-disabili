import type { Metadata } from 'next'
import Image from 'next/image'
import { Download } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import FinalCTA from '@/components/final-cta'
import { SPONSORS } from '@/lib/data'

import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Sponsor e partner',
  description:
    'I progetti di inclusione di Rete Italiana Disabili ETS sono realizzati grazie al supporto di sponsor, partner istituzionali e patrocini.',
  path: '/sponsor',
})

export default function SponsorPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Collaborazioni"
          title="I nostri sponsor e partner"
          description="I nostri progetti di inclusione sono realizzati grazie al continuo supporto di sponsor, partner e patrocini."
          breadcrumbs={[{ label: 'Sponsor e partner' }]}
        />

        <section aria-labelledby="diventa-sponsor-heading" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2
              id="diventa-sponsor-heading"
              className="text-2xl sm:text-3xl font-extrabold text-brand-blue mb-4"
            >
              Vuoi diventare nostro sponsor?
            </h2>
            <p className="text-lg text-brand-blue/65 leading-relaxed mb-8">
              Scarica la brochure di presentazione dell&apos;associazione per conoscere meglio i
              nostri progetti e le opportunità di collaborazione.
            </p>
            <a
              href="/documents/presentazione-rete-italiana-disabili.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Scarica presentazione (PDF)
            </a>
          </div>
        </section>

        <section aria-labelledby="sponsor-grid-heading" className="py-16 md:py-20 bg-brand-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="sponsor-grid-heading" className="sr-only">
              Elenco sponsor e partner
            </h2>
            <ul
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
              role="list"
            >
              {SPONSORS.map((sponsor) => (
                <li key={sponsor.logo}>
                  <article className="flex flex-col items-center justify-center gap-3 h-full min-h-[140px] p-5 rounded-2xl border border-brand-blue/8 bg-white shadow-sm hover:shadow-md hover:border-brand-blue/15 transition-all">
                    <div className="relative w-full h-16">
                      <Image
                        src={sponsor.logo}
                        alt={`Logo di ${sponsor.name}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 160px"
                      />
                    </div>
                    <p className="text-center text-xs font-medium text-brand-blue/60 leading-snug line-clamp-2">
                      {sponsor.name}
                    </p>
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
