import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Home, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pagina non trovata (404)',
  description: 'La pagina che cerchi non esiste. Torna alla homepage di Rete Italiana Disabili ETS.',
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen flex items-center justify-center bg-[#F8FAFC] pt-20"
      >
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <p className="text-8xl font-extrabold text-[#1a3a6b]/10 mb-0 leading-none select-none" aria-hidden="true">
            404
          </p>
          <p className="text-[#1e9ed6] font-semibold text-sm uppercase tracking-widest mb-3">
            Pagina non trovata
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a6b] mb-4 text-balance">
            Questa pagina non esiste.
          </h1>
          <p className="text-lg text-[#1a3a6b]/60 leading-relaxed mb-10">
            Forse hai seguito un link sbagliato o la pagina è stata spostata.
            Torna alla homepage per trovare quello che cerchi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3a6b] text-white font-bold rounded-2xl hover:bg-[#0f2347] transition-colors shadow-lg"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              Torna alla Homepage
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1a3a6b] font-semibold rounded-2xl border-2 border-[#1a3a6b]/15 hover:border-[#1a3a6b] hover:bg-[#e8edf5] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Contattaci
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
