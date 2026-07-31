import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'

import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy',
  description:
    'Informativa sui cookie utilizzati dal sito di Rete Italiana Disabili APS, in conformità al GDPR e alle Linee guida del Garante Privacy.',
  path: '/cookie',
})

export default function CookiePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Informativa"
          title="Cookie Policy"
          description="Cosa sono i cookie, quali utilizziamo su questo sito e come puoi gestirli."
          breadcrumbs={[{ label: 'Cookie Policy' }]}
        />

        <section className="py-16 md:py-20 bg-white" aria-label="Contenuto Cookie Policy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-brand-blue/50 mb-10">
              Ultimo aggiornamento: 29 luglio 2026
            </p>

            <div className="flex flex-col gap-10 text-brand-blue/75 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">1. Cosa sono i cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell&apos;utente
                  (computer, tablet, smartphone) quando vengono visitati. Permettono al sito di ricordare
                  azioni o preferenze per un periodo di tempo limitato.
                </p>
                <p className="mt-3">
                  Possono essere installati dal titolare del sito (cookie di prima parte) oppure da soggetti
                  terzi (cookie di terza parte). Questa informativa integra la{' '}
                  <Link href="/privacy" className="text-accent-sky hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">2. Titolare</h2>
                <p>
                  Il Titolare del trattamento è <strong className="text-brand-blue">Rete Italiana Disabili APS</strong>.
                  Per contatti: {' '}
                  <a href="mailto:info@reteitalianadisabili.it" className="text-accent-sky hover:underline">info@reteitalianadisabili.it</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">3. Tipologie di cookie utilizzati</h2>

                <h3 className="text-lg font-semibold text-brand-blue mt-6 mb-2">3.1 Cookie tecnici (necessari)</h3>
                <p>
                  Sono indispensabili per il funzionamento del sito e non richiedono il consenso dell&apos;utente
                  (art. 122 D.Lgs. 196/2003 e Linee guida del Garante Privacy). Includono, a titolo esemplificativo:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>cookie di sessione per la navigazione e la sicurezza;</li>
                  <li>cookie che memorizzano le preferenze di consenso ai cookie;</li>
                  <li>cookie legati a funzionalità essenziali (es. bilanciamento del carico).</li>
                </ul>
                <p className="mt-3">
                  Durata: di sessione oppure fino a 12 mesi per le preferenze di consenso.
                </p>

                <h3 className="text-lg font-semibold text-brand-blue mt-6 mb-2">3.2 Cookie analitici</h3>
                <p>
                  Servono a raccogliere informazioni in forma aggregata e anonima sull&apos;uso del sito
                  (pagine visitate, tempo di permanenza, errori tecnici), per migliorarne i contenuti e
                  l&apos;accessibilità. Se configurati in modo da non consentire l&apos;identificazione
                  dell&apos;interessato, possono essere equiparati ai cookie tecnici; in caso contrario,
                  saranno attivati solo previo consenso.
                </p>

                <h3 className="text-lg font-semibold text-brand-blue mt-6 mb-2">3.3 Cookie di profilazione / marketing</h3>
                <p>
                  Al momento <strong className="text-brand-blue">questo sito non utilizza cookie di profilazione
                  o di marketing</strong>. Qualora in futuro venissero introdotti, verrà richiesto il consenso
                  preventivo tramite banner e l&apos;elenco sarà aggiornato in questa pagina.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">4. Base giuridica</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Cookie tecnici: legittimo interesse / necessità di fornire il servizio richiesto
                    (art. 6, par. 1, lett. f) GDPR).
                  </li>
                  <li>
                    Cookie analitici non anonimizzati e cookie di profilazione (se presenti): consenso
                    dell&apos;interessato (art. 6, par. 1, lett. a) GDPR), revocabile in qualsiasi momento.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">5. Come gestire i cookie</h2>
                <p>
                  Puoi gestire o eliminare i cookie dalle impostazioni del browser. La disabilitazione dei
                  cookie tecnici può compromettere alcune funzionalità del sito.
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent-sky hover:underline">Google Chrome</a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-accent-sky hover:underline">Mozilla Firefox</a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent-sky hover:underline">Safari</a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent-sky hover:underline">Microsoft Edge</a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">6. Diritti dell&apos;interessato</h2>
                <p>
                  Per l&apos;esercizio dei diritti previsti dal GDPR (accesso, rettifica, cancellazione,
                  limitazione, opposizione, portabilità e reclamo al Garante) si rinvia alla{' '}
                  <Link href="/privacy" className="text-accent-sky hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-blue mb-3">7. Aggiornamenti</h2>
                <p>
                  Questa Cookie Policy può essere modificata in seguito a variazioni normative o tecniche.
                  Ti invitiamo a consultarla periodicamente: la data di ultimo aggiornamento è indicata in cima alla pagina.
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
