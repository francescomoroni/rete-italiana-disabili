import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { SOCIAL_LINKS, WhatsAppIcon } from '@/components/social-icons'

const FOOTER_LINKS = {
  Organizzazione: [
    { label: 'Chi Siamo', href: '/chi-siamo' },
    { label: 'Missione e Valori', href: '/missione' },
    { label: 'Trasparenza', href: '/trasparenza' },
    {
      label: 'Presentazione',
      href: '/documents/presentazione-rete-italiana-disabili.pdf',
      download: true,
    },
  ],
  Attività: [
    { label: 'Progetti', href: '/progetti' },
    { label: 'Eventi', href: '/eventi' },
    { label: 'Sponsor e partner', href: '/sponsor' },
  ],
  Supporto: [
    { label: 'Contatti', href: '/contatti' },
    { label: 'Diventa Socio', href: '/diventa-socio' },
    { label: 'Sostienici', href: '/sostienici' },
  ],
  Legale: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="bg-[#0f2347] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-flex mb-5" aria-label="Rete Italiana Disabili ETS – Homepage">
              <Image
                src="/images/logo.jpg"
                alt="Rete Italiana Disabili ETS – Noi Siamo Rete"
                width={72}
                height={72}
                className="rounded-full object-contain bg-white p-0.5"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Promuoviamo diritti, inclusione e sostegno per le persone con disabilità in tutta Italia dal 2020.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={label === 'WhatsApp' ? 'Contattaci su WhatsApp' : `Seguici su ${label}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`Link ${category}`}>
              <h3 className="font-bold text-sm text-white/90 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    {'download' in link && link.download ? (
                      <a
                        href={link.href}
                        download
                        className="text-sm text-white/55 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} Rete Italiana Disabili ETS – C.F. 94083440589 – Tutti i diritti riservati
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5">
            Fatto con
            <Heart className="w-3 h-3 text-[#e84c5a]" aria-hidden="true" />
            per l&apos;inclusione da{' '}
            <a
              href="https://2morrowlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              2morrowLabs
            </a>
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/393332967651"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:shadow-xl hover:scale-110 transition-all"
        aria-label="Contattaci su WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </footer>
  )
}
