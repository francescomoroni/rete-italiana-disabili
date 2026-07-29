'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Heart } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Only use transparent header on the homepage hero
  const isHomepage = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || !isHomepage
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1a3a6b]/8'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Rete Italiana Disabili ETS – Homepage"
          >
            <Image
              src="/images/logo.jpg"
              alt="Rete Italiana Disabili ETS – Noi Siamo Rete"
              width={52}
              height={52}
              className="rounded-full object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-[#1a3a6b]/10',
                  scrolled || !isHomepage ? 'text-[#1a3a6b]/80 hover:text-[#1a3a6b]' : 'text-white/90 hover:text-white hover:bg-white/15'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/sostienici"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#1a3a6b] text-white text-sm font-semibold rounded-xl hover:bg-[#0f2347] transition-colors shadow-md hover:shadow-lg"
              aria-label="Dona ora a Rete Italiana Disabili ETS"
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              Dona Ora
            </Link>
            <button
              type="button"
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                scrolled || !isHomepage ? 'text-[#1a3a6b] hover:bg-[#1a3a6b]/10' : 'text-white hover:bg-white/15'
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu di navigazione'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione mobile"
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#1a3a6b]/10',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-[#1a3a6b] font-medium rounded-xl hover:bg-[#1a3a6b]/8 transition-colors text-base"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sostienici"
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-[#1a3a6b] text-white font-semibold rounded-xl hover:bg-[#0f2347] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <Heart className="w-4 h-4" aria-hidden="true" />
            Dona Ora
          </Link>
        </nav>
      </div>
    </header>
  )
}
