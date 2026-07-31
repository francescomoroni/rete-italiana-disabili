import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'

import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'Informativa sulla privacy di Rete Italiana Disabili APS ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Informativa"
          title="Privacy Policy"
          description="Come trattiamo i dati personali degli utenti del sito e dei soggetti che interagiscono con l'Associazione."
          breadcrumbs={[{ label: 'Privacy Policy' }]}
        />

        <section className="py-16 md:py-20 bg-white" aria-label="Contenuto Privacy Policy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-legal">
            <p className="text-sm text-brand-blue/50 mb-10">
              Ultimo aggiornamento: 29 luglio 2026
            </p>

            <div className="flex flex-col gap-10 text-brand-blue/75 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">1. Titolare del trattamento</h2>
                <p>
                  Il Titolare del trattamento dei dati personali è <strong className="text-brand-blue">Rete Italiana Disabili APS</strong>
                  (di seguito anche &quot;Associazione&quot; o &quot;Titolare&quot;).
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li>Email: <a href="mailto:info@reteitalianadisabili.it" className="text-accent-sky hover:underline">info@reteitalianadisabili.it</a></li>
                  <li>Sito web: <a href="https://reteitalianadisabili.vercel.app/" className="text-accent-sky hover:underline">reteitalianadisabili.vercel.app</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">2. Tipologie di dati raccolti</h2>
                <p>Attraverso il sito e i canali dell&apos;Associazione possiamo trattare:</p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-brand-blue">Dati di navigazione</strong> — indirizzo IP, tipo di browser,
                    sistema operativo, pagine visitate, data e ora di accesso, raccolti in forma aggregata e/o
                    mediante cookie tecnici (si veda la{' '}
                    <Link href="/cookie" className="text-accent-sky hover:underline">Cookie Policy</Link>).
                  </li>
                  <li>
                    <strong className="text-brand-blue">Dati forniti volontariamente</strong> — nome, cognome,
                    indirizzo email, numero di telefono, messaggio e ogni altro dato inserito nei moduli di contatto,
                    iscrizione o donazione.
                  </li>
                  <li>
                    <strong className="text-brand-blue">Dati relativi alle donazioni e alle adesioni</strong> —
                    dati anagrafici e di pagamento necessari per gestire donazioni, tessere associative e
                    adempimenti fiscali, nei limiti di legge.
                  </li>
                </ul>
                <p className="mt-3">
                  Non richiediamo dati appartenenti a categorie particolari (art. 9 GDPR), salvo che l&apos;interessato
                  li comunichi spontaneamente (ad esempio nel testo di un messaggio). In tal caso li tratteremo
                  solo per evadere la richiesta e nel rispetto della normativa vigente.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">3. Finalità e base giuridica</h2>
                <p>I dati sono trattati per le seguenti finalità:</p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-brand-blue">Rispondere alle richieste</strong> — esecuzione di misure
                    precontrattuali o legittimo interesse a gestire le comunicazioni (art. 6, par. 1, lett. b) e f) GDPR).
                  </li>
                  <li>
                    <strong className="text-brand-blue">Gestione soci e donazioni</strong> — adempimento di obblighi
                    contrattuali e di legge (art. 6, par. 1, lett. b) e c) GDPR).
                  </li>
                  <li>
                    <strong className="text-brand-blue">Invio di comunicazioni informative o newsletter</strong> —
                    previo consenso dell&apos;interessato, revocabile in qualsiasi momento (art. 6, par. 1, lett. a) GDPR).
                  </li>
                  <li>
                    <strong className="text-brand-blue">Sicurezza e funzionamento del sito</strong> — legittimo interesse
                    del Titolare (art. 6, par. 1, lett. f) GDPR).
                  </li>
                  <li>
                    <strong className="text-brand-blue">Adempimenti di legge</strong> — obblighi contabili, fiscali e di
                    trasparenza previsti per gli enti del Terzo Settore (art. 6, par. 1, lett. c) GDPR).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">4. Modalità del trattamento</h2>
                <p>
                  Il trattamento avviene con strumenti informatici e/o cartacei, adottando misure tecniche e
                  organizzative adeguate a garantire la sicurezza, la riservatezza e l&apos;integrità dei dati.
                  I dati non sono oggetto di processi decisionali automatizzati né di profilazione.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">5. Destinatari dei dati</h2>
                <p>
                  I dati possono essere conosciuti da collaboratori e volontari autorizzati del Titolare, nonché —
                  nei limiti strettamente necessari — da fornitori di servizi (hosting, email, pagamenti, contabilità)
                  nominati responsabili del trattamento ai sensi dell&apos;art. 28 GDPR. I dati non sono diffusi
                  pubblicamente, salvo obblighi di legge o consenso espresso.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">6. Trasferimenti extra-UE</h2>
                <p>
                  Qualora alcuni servizi comportino il trasferimento di dati fuori dallo Spazio Economico Europeo,
                  il Titolare garantisce che ciò avvenga nel rispetto degli artt. 44 e ss. GDPR (decisioni di
                  adeguatezza, Clausole Contrattuali Standard o altre garanzie previste).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">7. Periodo di conservazione</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Richieste di contatto: fino a 24 mesi dalla chiusura della pratica, salvo esigenze ulteriori.</li>
                  <li>Dati soci e donazioni: per il tempo necessario agli adempimenti civilistici e fiscali (di norma 10 anni).</li>
                  <li>Newsletter: fino alla revoca del consenso.</li>
                  <li>Log di navigazione e cookie tecnici: secondo i tempi indicati nella Cookie Policy.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">8. Diritti dell&apos;interessato</h2>
                <p>
                  Ai sensi degli artt. 15–22 GDPR, l&apos;interessato può chiedere al Titolare: accesso, rettifica,
                  cancellazione, limitazione del trattamento, portabilità dei dati, opposizione al trattamento e
                  revoca del consenso. Ha inoltre il diritto di proporre reclamo al Garante per la protezione dei
                  dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-accent-sky hover:underline">www.garanteprivacy.it</a>).
                </p>
                <p className="mt-3">
                  Per esercitare i diritti è sufficiente scrivere a{' '}
                  <a href="mailto:info@reteitalianadisabili.it" className="text-accent-sky hover:underline">info@reteitalianadisabili.it</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">9. Minori</h2>
                <p>
                  I servizi del sito non sono destinati a minori di 14 anni. Qualora venissero raccolti dati di minori
                  senza il consenso di chi esercita la responsabilità genitoriale, il Titolare provvederà alla
                  cancellazione tempestiva appena ne abbia conoscenza.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">10. Modifiche</h2>
                <p>
                  La presente informativa può essere aggiornata. La versione vigente è sempre pubblicata su questa
                  pagina, con indicazione della data di ultimo aggiornamento.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
