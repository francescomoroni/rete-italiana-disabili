import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import TeamSection from '@/components/team-section'
import StatutoSection from '@/components/statuto-section'
import FinalCTA from '@/components/final-cta'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Chi Siamo',
  description:
    "Scopri la storia, i valori e il team di Rete Italiana Disabili APS. Un'associazione nata dalla passione per i diritti e la dignità delle persone con disabilità.",
  path: '/chi-siamo',
})

const VALUES = [
  { title: 'Dignità', description: 'Ogni persona ha un valore intrinseco che va riconosciuto e rispettato incondizionatamente.' },
  { title: 'Partecipazione', description: 'Le persone con disabilità non sono beneficiarie passive, ma protagoniste del cambiamento.' },
  { title: 'Trasparenza', description: 'Rendiamo pubblici i nostri bilanci e le nostre attività perché la fiducia si guadagna.' },
  { title: 'Innovazione', description: 'Cerchiamo soluzioni nuove a problemi antichi, usando la tecnologia al servizio dell\'uomo.' },
]

export default function ChiSiamoPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="La nostra storia"
          title="Chi siamo e perché esistiamo."
          description="Rete Italiana Disabili APS nasce nel 2020 da un gruppo di persone con disabilità, famiglie e professionisti stanchi di aspettare cambiamenti che non arrivavano."
          breadcrumbs={[{ label: 'Chi Siamo' }]}
        />

        {/* Storia */}
        <section aria-labelledby="storia-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 id="storia-heading" className="text-3xl font-extrabold text-brand-blue mb-6">
                  Una storia nata dall&apos;esperienza diretta
                </h2>
                <div className="prose prose-lg max-w-none text-brand-blue/70 space-y-4">
                  <p>
                    Nel 2020, un piccolo gruppo di persone si riunì a Roma con un obiettivo chiaro:
                    creare una rete nazionale capace di dare voce a chi troppo spesso non viene ascoltato.
                    Non esperti calati dall&apos;alto, ma persone che vivevano sulla propria pelle le difficoltà
                    quotidiane di una società ancora lontana dall&apos;essere davvero inclusiva.
                  </p>
                  <p>
                    In pochi anni siamo cresciuti fino a diventare uno dei riferimenti nazionali per
                    le politiche sulla disabilità, partecipando ai tavoli istituzionali, collaborando
                    con le università e portando la nostra esperienza in tutta Italia.
                  </p>
                  <p>
                    Oggi contiamo oltre 2.000 sostenitori, 55 partner e piu di 500 persone supportate
                    attraverso progetti concreti sul territorio. Ma la nostra essenza è rimasta la stessa:
                    essere al fianco delle persone, sempre.
                  </p>
                </div>
              </div>

              {/* Timeline milestones */}
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-6">Le tappe principali</h3>
                <ol className="relative border-l-2 border-brand-blue/15 pl-6 flex flex-col gap-6" role="list">
                  {[
                    { year: '2020', text: 'Fondazione a Roma da 12 soci fondatori' },
                    { year: '2021', text: 'Riconoscimento come Ente del Terzo Settore' },
                    { year: '2026', text: 'Superata la soglia dei 2.000 sostenitori attivi' },
                  ].map((milestone) => (
                    <li key={milestone.year} className="relative">
                      <div className="absolute -left-9 w-4 h-4 rounded-full bg-brand-blue border-4 border-white shadow" aria-hidden="true" />
                      <time dateTime={milestone.year} className="text-xs font-bold text-accent-sky uppercase tracking-widest">
                        {milestone.year}
                      </time>
                      <p className="text-brand-blue/75 mt-1">{milestone.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section aria-labelledby="values-heading" className="py-20 bg-brand-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="values-heading" className="text-3xl font-extrabold text-brand-blue">
                I nostri valori fondanti
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v) => (
                <article key={v.title} className="p-7 bg-white rounded-2xl border border-brand-blue/8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-brand-blue text-xl mb-3">{v.title}</h3>
                  <p className="text-brand-blue/65 leading-relaxed">{v.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        <StatutoSection />

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
