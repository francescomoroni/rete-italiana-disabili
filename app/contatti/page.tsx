import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import { SOCIAL_LINKS } from '@/components/social-icons'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Contatta Rete Italiana Disabili ETS: email, telefono, indirizzo. Siamo qui per rispondere alle tue domande su diritti, servizi e come diventare socio.',
  alternates: { canonical: '/contatti' },
}

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
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14">
              {/* Contact info */}
              <div>
                <h2 id="contatti-section" className="text-2xl font-extrabold text-[#1a3a6b] mb-8">
                  I nostri riferimenti
                </h2>

                <address className="not-italic flex flex-col gap-5">
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#e8edf5] flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#1a3a6b]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1a3a6b]/50 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[#1a3a6b] font-medium hover:text-[#2952a3] transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#1a3a6b]/75 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </address>

                <div className="mt-8 pt-8 border-t border-[#1a3a6b]/8">
                  <p className="text-sm font-bold text-[#1a3a6b] mb-4">Seguici sui social</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-[#e8edf5] flex items-center justify-center text-[#1a3a6b] hover:bg-[#1a3a6b] hover:text-white transition-all"
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
                <h2 className="text-2xl font-extrabold text-[#1a3a6b] mb-8">
                  Inviaci un messaggio
                </h2>
                <form
                  className="flex flex-col gap-5"
                  aria-label="Modulo di contatto"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                        Nome <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                        <span className="sr-only">(obbligatorio)</span>
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="cognome" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                        Cognome
                      </label>
                      <input
                        id="cognome"
                        name="cognome"
                        type="text"
                        autoComplete="family-name"
                        className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email-contatto" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                      Email <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                      <span className="sr-only">(obbligatorio)</span>
                    </label>
                    <input
                      id="email-contatto"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono-contatto" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                      Telefono
                    </label>
                    <input
                      id="telefono-contatto"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="oggetto" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                      Oggetto <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                      <span className="sr-only">(obbligatorio)</span>
                    </label>
                    <select
                      id="oggetto"
                      name="oggetto"
                      required
                      className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base"
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
                    <label htmlFor="messaggio" className="block text-sm font-semibold text-[#1a3a6b] mb-1.5">
                      Messaggio <span aria-hidden="true" className="text-[#e84c5a]">*</span>
                      <span className="sr-only">(obbligatorio)</span>
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border-2 border-[#1a3a6b]/15 rounded-xl text-[#1a3a6b] focus:border-[#1a3a6b] focus:outline-none transition-colors bg-white text-base resize-none"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        className="w-4 h-4 mt-1 accent-[#1a3a6b]"
                        aria-required="true"
                      />
                      <span className="text-sm text-[#1a3a6b]/70">
                        Ho letto e accetto la{' '}
                        <a href="/privacy" className="underline text-[#1a3a6b] hover:text-[#2952a3]">
                          Privacy Policy
                        </a>
                        {' '}(obbligatorio)
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1a3a6b] text-white font-bold rounded-xl hover:bg-[#0f2347] transition-colors shadow-lg text-base"
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
