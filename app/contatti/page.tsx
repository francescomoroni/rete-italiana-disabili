import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import JsonLd from '@/components/json-ld'
import { SOCIAL_LINKS } from '@/components/social-icons'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ORGANIZATION, pageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Contatti',
  description:
    'Contatta Rete Italiana Disabili ETS: email, telefono e sede a Roma. Rispondiamo a domande su diritti, servizi, volontariato e come diventare socio.',
  path: '/contatti',
})

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 333 296 7651',
    href: 'tel:+393332967651',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'inforeteitalianadisabili@gmail.com',
    href: 'mailto:inforeteitalianadisabili@gmail.com',
  },
  {
    icon: Mail,
    label: 'PEC',
    value: 'reteitalianadisabili@pec.it',
    href: 'mailto:reteitalianadisabili@pec.it',
  },
  {
    icon: MapPin,
    label: 'Sede legale',
    value: 'Via Liberiana 17, 00185 Roma (RM)',
    href: null,
  },
  {
    icon: Clock,
    label: 'Orari',
    value: 'Lun – Ven: 9:00 – 18:00',
    href: null,
  },
]

export default function ContattiPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contatti',
          url: `${SITE_URL}/contatti`,
          description:
            'Contatta Rete Italiana Disabili ETS: email, telefono e sede a Roma.',
          mainEntity: {
            '@type': 'NGO',
            name: SITE_NAME,
            email: ORGANIZATION.email,
            telephone: ORGANIZATION.telephone,
            address: {
              '@type': 'PostalAddress',
              ...ORGANIZATION.address,
            },
            sameAs: ORGANIZATION.sameAs,
          },
        }}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHeader
          eyebrow="Siamo qui"
          title="Parlaci. Siamo in ascolto."
          description="Hai domande, vuoi collaborare o hai bisogno di supporto? Scrivici: risponderemo entro 48 ore."
          breadcrumbs={[{ label: 'Contatti' }]}
          accentColor="#f07030"
        />

        <section aria-labelledby="contatti-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14">
              {/* Contact info */}
              <div>
                <h2 id="contatti-section" className="text-2xl font-extrabold text-brand-blue mb-8">
                  I nostri riferimenti
                </h2>

                <address className="not-italic flex flex-col gap-5">
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-blue-muted flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-blue/50 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-brand-blue font-medium hover:text-brand-blue-light transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-blue/75 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </address>

                <div className="mt-8 pt-8 border-t border-brand-blue/8">
                  <p className="text-sm font-bold text-brand-blue mb-4">Seguici sui social</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-brand-blue-muted flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                        aria-label={`Seguici su ${label}`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div>
                <h2 className="text-2xl font-extrabold text-brand-blue mb-8">
                  Inviaci un messaggio
                </h2>
                <form
                  className="flex flex-col gap-5"
                  aria-label="Modulo di contatto"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-brand-blue mb-1.5">
                        Nome <span aria-hidden="true" className="text-accent-coral">*</span>
                        <span className="sr-only">(obbligatorio)</span>
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="cognome" className="block text-sm font-semibold text-brand-blue mb-1.5">
                        Cognome
                      </label>
                      <input
                        id="cognome"
                        name="cognome"
                        type="text"
                        autoComplete="family-name"
                        className="w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email-contatto" className="block text-sm font-semibold text-brand-blue mb-1.5">
                      Email <span aria-hidden="true" className="text-accent-coral">*</span>
                      <span className="sr-only">(obbligatorio)</span>
                    </label>
                    <input
                      id="email-contatto"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono-contatto" className="block text-sm font-semibold text-brand-blue mb-1.5">
                      Telefono
                    </label>
                    <input
                      id="telefono-contatto"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="oggetto" className="block text-sm font-semibold text-brand-blue mb-1.5">
                      Oggetto <span aria-hidden="true" className="text-accent-coral">*</span>
                      <span className="sr-only">(obbligatorio)</span>
                    </label>
                    <select
                      id="oggetto"
                      name="oggetto"
                      required
                      className="w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base"
                      aria-required="true"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleziona un argomento
                      </option>
                      <option value="informazioni">Richiesta informazioni generali</option>
                      <option value="iscrizione">Iscrizione come socio</option>
                      <option value="donazione">Donazioni</option>
                      <option value="progetti">Collaborazione su progetti</option>
                      <option value="eventi">Eventi</option>
                      <option value="media">Richiesta media/stampa</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-semibold text-brand-blue mb-1.5">
                      Messaggio <span aria-hidden="true" className="text-accent-coral">*</span>
                      <span className="sr-only">(obbligatorio)</span>
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border-2 border-brand-blue/15 rounded-xl text-brand-blue focus:border-brand-blue focus:outline-none transition-colors bg-white text-base resize-none"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        className="w-4 h-4 mt-1 accent-brand-blue"
                        aria-required="true"
                      />
                      <span className="text-sm text-brand-blue/70">
                        Ho letto e accetto la{' '}
                        <a href="/privacy" className="underline text-brand-blue hover:text-brand-blue-light">
                          Privacy Policy
                        </a>
                        {' '}(obbligatorio)
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-dark transition-colors shadow-lg text-base"
                  >
                    Invia messaggio
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
