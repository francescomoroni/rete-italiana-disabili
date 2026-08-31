import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ClipboardCheck } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import FinalCTA from '@/components/final-cta'
import JsonLd from '@/components/json-ld'
import {
  absoluteUrl,
  breadcrumbJsonLd,
  DEFAULT_OG_IMAGE,
  ORGANIZATION,
  pageMetadata,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo'

const VOLONTARI_DESCRIPTION =
  'Percorso formativo gratuito per volontari, operatori e giovani: "Camminare Insieme nel Welfare Rigenerativo". Scarica il corso, supera il test di verifica e ottieni l\'attestato di partecipazione con Rete Italiana Disabili APS.'

const COURSE_NAME = 'Camminare Insieme nel Welfare Rigenerativo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Volontari — Formazione e Test di Verifica',
    description: VOLONTARI_DESCRIPTION,
    path: '/volontari',
  }),
  keywords: [
    ...SITE_KEYWORDS,
    'formazione volontari',
    'corso volontariato disabilità',
    'welfare rigenerativo',
    'test volontari',
    'attestato volontariato',
    'respite care',
    'inclusione sociale',
    COURSE_NAME,
  ],
}

const volontariJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/volontari#webpage`,
    url: `${SITE_URL}/volontari`,
    name: 'Volontari — Formazione e Test di Verifica',
    description: VOLONTARI_DESCRIPTION,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/volontari#course` },
    inLanguage: 'it-IT',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(DEFAULT_OG_IMAGE.url),
      width: DEFAULT_OG_IMAGE.width,
      height: DEFAULT_OG_IMAGE.height,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${SITE_URL}/volontari#course`,
    name: COURSE_NAME,
    description:
      'Percorso di preparazione per volontari, operatori e giovani sul modello del welfare rigenerativo, empowerment, autodeterminazione e inclusione delle persone con disabilità.',
    url: `${SITE_URL}/volontari`,
    inLanguage: 'it-IT',
    isAccessibleForFree: true,
    courseMode: 'online',
    educationalLevel: 'Beginner',
    provider: {
      '@type': 'NGO',
      name: SITE_NAME,
      url: SITE_URL,
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
      address: {
        '@type': 'PostalAddress',
        ...ORGANIZATION.address,
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/volontari`,
    },
    hasPart: [
      {
        '@type': 'LearningResource',
        name: 'Materiale formativo del corso',
        learningResourceType: 'Documentazione',
        url: absoluteUrl('/documents/corso.pdf'),
        inLanguage: 'it-IT',
      },
      {
        '@type': 'LearningResource',
        name: 'Test di verifica a risposta multipla',
        learningResourceType: 'Quiz',
        url: `${SITE_URL}/volontari/test`,
        inLanguage: 'it-IT',
      },
    ],
  },
  breadcrumbJsonLd([{ name: 'Volontari', path: '/volontari' }]),
]

const COURSE_PDF = '/documents/corso.pdf'
const TEST_URL = '/volontari/test'

const PILASTRI = [
  {
    title: 'Il Cambiamento Culturale e il Modello Sociale',
    text: 'Abbandonare la visione medica della disabilità per concentrarsi sulla rimozione attiva delle barriere ambientali, culturali e sociali.',
  },
  {
    title: 'Comprendere la Disabilità Cognitiva e le Neurodivergenze',
    text: "Adottare l'approccio bio-psico-sociale (ICF dell'OMS) per decodificare i bisogni complessi ed esprimere empatia anche oltre i limiti della parola parlata.",
  },
  {
    title: 'Sostegno al Caregiver (Respite Care)',
    text: 'Comprendere il valore cruciale dei weekend di sollievo per tutelare la salute psico-fisica dei caregiver e dell\'intero nucleo familiare (filosofia della "Big Family").',
  },
  {
    title: "Accoglienza e Relazione d'Aiuto",
    text: "Strutturare un'accoglienza basata sul rispetto dello spazio personale (prossemica), la prevedibilità ambientale e l'ascolto attivo.",
  },
  {
    title: 'Gestione delle Emozioni e Crisi',
    text: 'Acquisire protocolli di de-escalation e l\'uso di kit sensoriali o CAA (Comunicazione Aumentativa Alternativa) per affrontare i sovraccarichi sensoriali leggendo il comportamento come un messaggio di comunicazione profonda.',
  },
  {
    title: "Transizione all'Età Adulta",
    text: 'Accompagnare i giovani nella "doppia transizione" scolastica e sociale, promuovendo l\'autonomia possibile.',
  },
]

const DESTINATARI = [
  'Volontari, soci e giovani studenti dai 16 anni in su, chiamati a muovere i primi passi come facilitatori di inclusione durante i soggiorni e le attività di sollievo.',
  'Operatori, educatori e professionisti del Terzo Settore che desiderano condividere buone pratiche e sguardi inclusivi avanzati.',
  'Famiglie e cittadini che intendono avvicinarsi al mondo della disabilità con competenza, rispetto e spirito di condivisione.',
]

export default function VolontariPage() {
  return (
    <>
      <JsonLd data={volontariJsonLd} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Formazione"
          title="Camminare Insieme nel Welfare Rigenerativo"
          description="Percorso di Preparazione per Volontari, Operatori e Giovani — Rete Italiana Disabili APS"
          breadcrumbs={[{ label: 'Volontari' }]}
          accentColor="#27a55a"
        />

        <section aria-labelledby="citazione-heading" className="py-16 bg-white border-b border-brand-blue/8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <blockquote className="relative pl-6 border-l-4 border-accent-green">
              <p id="citazione-heading" className="text-xl sm:text-2xl text-brand-blue/80 leading-relaxed italic">
                &ldquo;Il vero cambiamento non nasce dall&apos;assistenza, ma dalla capacità di camminare insieme,
                riconoscendo in ogni persona una risorsa unica e irripetibile.&rdquo;
              </p>
              <footer className="mt-4 text-brand-blue/60 font-medium not-italic">
                — Katiuscia Girolametti (Presidente Nazionale e ideatrice del modello)
              </footer>
            </blockquote>
          </div>
        </section>

        <section aria-labelledby="missione-heading" className="py-20 bg-brand-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="missione-heading" className="text-3xl font-extrabold text-brand-blue mb-6">
              1. A cosa serve questa formazione e qual è la sua missione?
            </h2>
            <div className="space-y-4 text-brand-blue/70 text-lg leading-relaxed">
              <p>
                In linea con i principi internazionali di tutela dei diritti umani e protezione della dignità
                della persona (ispirati alle migliori pratiche di advocacy), il percorso formativo
                &ldquo;Camminare Insieme nel Welfare Rigenerativo&rdquo; nasce per rispondere a un&apos;urgente
                necessità sociale: trasformare radicalmente il modo in cui la comunità si accosta alla disabilità.
              </p>
              <p>
                Troppo spesso il volontariato e l&apos;intervento sociale rischiano di scivolare in logiche di
                stampo paternalistico o puramente assistenzialista. Questo corso serve a formare coscienze critiche
                e operatori competenti capaci di superare il pietismo, promuovendo invece un modello basato
                sull&apos;empowerment, sull&apos;autodeterminazione e sui diritti inalienabili sanciti dalla
                Convenzione ONU.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="pilastri-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 id="pilastri-heading" className="text-3xl font-extrabold text-brand-blue mb-4">
                2. I Pilastri e gli Obiettivi Chiave del Percorso
              </h2>
              <p className="text-lg text-brand-blue/65 leading-relaxed">
                Il programma formativo fornisce ai partecipanti strumenti teorici e pratici immediati attraverso
                moduli mirati:
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto" role="list">
              {PILASTRI.map((pilastro) => (
                <li key={pilastro.title}>
                  <article className="h-full p-6 rounded-2xl border border-brand-blue/8 bg-brand-surface shadow-sm">
                    <h3 className="font-bold text-brand-blue text-lg mb-3">{pilastro.title}</h3>
                    <p className="text-brand-blue/65 leading-relaxed">{pilastro.text}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="destinatari-heading" className="py-20 bg-brand-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="destinatari-heading" className="text-3xl font-extrabold text-brand-blue mb-4">
              3. A chi è rivolto il corso?
            </h2>
            <p className="text-lg text-brand-blue/65 leading-relaxed mb-8">
              La Rete Italiana Disabili APS crede fortemente nel valore intergenerazionale della solidarietà e
              dell&apos;inclusione reale. Per questo motivo, la formazione è aperta a:
            </p>
            <ul className="space-y-4" role="list">
              {DESTINATARI.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 p-5 bg-white rounded-2xl border border-brand-blue/8 text-brand-blue/70 leading-relaxed"
                >
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full bg-accent-green shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="attestato-heading" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="attestato-heading" className="text-3xl font-extrabold text-brand-blue mb-6">
              4. Modalità di Verifica e Rilascio dell&apos;Attestato
            </h2>
            <p className="text-lg text-brand-blue/70 leading-relaxed">
              Il percorso prevede un questionario di autovalutazione finale (Test di Verifica) volto a consolidare
              le competenze acquisite sui moduli trattati con rilascio di attestato.
            </p>
          </div>
        </section>

        <section aria-labelledby="azioni-heading" className="py-20 bg-brand-surface border-t border-brand-blue/8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="azioni-heading" className="sr-only">
              Scarica il corso ed effettua il test
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COURSE_PDF}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-green px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-green-dark transition-colors w-full sm:w-auto"
                aria-label="Scarica il corso in formato PDF"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                Scarica il corso
              </a>
              <Link
                href={TEST_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-blue-dark transition-colors w-full sm:w-auto"
              >
                <ClipboardCheck className="w-5 h-5" aria-hidden="true" />
                Effettua il test
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
