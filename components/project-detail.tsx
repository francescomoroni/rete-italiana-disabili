'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Tag,
  Users,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Link2,
} from 'lucide-react'
import type { Project } from '@/lib/data'
import { PROJECTS } from '@/lib/data'

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  sky:     { bg: '#e8f5fb', text: '#1e9ed6', border: '#b8dff2' },
  green:   { bg: '#e8f5ed', text: '#27a55a', border: '#b2e0c4' },
  orange:  { bg: '#fdf0e8', text: '#f07030', border: '#f5c8a8' },
  yellow:  { bg: '#fdf8e1', text: '#d9a800', border: '#f0dc88' },
  coral:   { bg: '#fdeaec', text: '#e84c5a', border: '#f5b8be' },
  magenta: { bg: '#f9e8f2', text: '#c0287a', border: '#e8aacc' },
  blue:    { bg: '#e8edf5', text: '#1a3a6b', border: '#b8c8e0' },
  purple:  { bg: '#f0ebfa', text: '#7c3aed', border: '#cdb8f0' },
}

function formatDate(dateStr?: string) {
  if (!dateStr) return null
  return new Date(dateStr).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function ShareButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1a3a6b]/12 text-[#1a3a6b]/70 hover:text-[#1a3a6b] hover:border-[#1a3a6b]/30 hover:bg-[#f0f4fa] transition-all text-sm font-medium"
    >
      {children}
    </a>
  )
}

export default function ProjectDetail({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const colors = CATEGORY_COLORS[project.categoryColor] || CATEGORY_COLORS.blue
  const gallery = project.gallery ?? []
  const related = PROJECTS.filter(
    (p) => p.id !== project.id && p.category === project.category
  ).slice(0, 3)

  const pageUrl = typeof window !== 'undefined'
    ? window.location.href
    : `https://reteitalianadisabili.it/progetti/${project.slug}`

  const shareTitle = encodeURIComponent(project.title)
  const shareUrl = encodeURIComponent(pageUrl)

  function openLightbox(i: number) { setLightboxIndex(i) }
  function closeLightbox() { setLightboxIndex(null) }
  function prevImage() {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length))
  }
  function nextImage() {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % gallery.length))
  }

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative w-full h-[340px] sm:h-[480px] lg:h-[580px] overflow-hidden bg-[#e8edf5]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2347]/70 via-[#0f2347]/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-4 sm:left-8 lg:left-12">
          <Link
            href="/progetti"
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#1a3a6b] px-4 py-2 rounded-xl font-semibold text-sm shadow hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Tutti i progetti
          </Link>
        </div>

        {/* Hero caption */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-lg mb-4"
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {project.category}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance max-w-4xl leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-white/80 text-sm">
            {project.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {formatDate(project.date)}
              </span>
            )}
            {project.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                {project.location}
              </span>
            )}
            {project.category && (
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" aria-hidden="true" />
                {project.category}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

          {/* Left – article */}
          <div>
            {/* Lead */}
            <p className="text-xl sm:text-2xl text-[#1a3a6b] font-medium leading-relaxed mb-8 border-l-4 pl-6"
               style={{ borderColor: colors.text }}>
              {project.description}
            </p>

            {/* Full description */}
            {project.fullDescription && (
              <div className="space-y-5">
                {project.fullDescription.map((para, i) => (
                  <p key={i} className="text-[#1a3a6b]/75 text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* External link */}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: colors.text }}
              >
                Visita la risorsa esterna
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}

            {/* ── Gallery ─────────────────────────────────── */}
            {gallery.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-extrabold text-[#1a3a6b] mb-6">Galleria fotografica</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => openLightbox(i)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#e8edf5] focus-visible:ring-2 focus-visible:ring-[#1a3a6b]"
                      aria-label={`Apri immagine: ${img.alt}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#1a3a6b]/0 group-hover:bg-[#1a3a6b]/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="sr-only">Espandi</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Social share ─────────────────────────────── */}
            <div className="mt-14 pt-8 border-t border-[#1a3a6b]/8">
              <h2 className="text-base font-bold text-[#1a3a6b] uppercase tracking-widest mb-4">
                Condividi questo progetto
              </h2>
              <div className="flex flex-wrap gap-3">
                <ShareButton
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  label="Condividi su Facebook"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  Facebook
                </ShareButton>
                <ShareButton
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                  label="Condividi su X / Twitter"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  X / Twitter
                </ShareButton>
                <ShareButton
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  label="Condividi su LinkedIn"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  LinkedIn
                </ShareButton>
                <ShareButton
                  href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                  label="Condividi su WhatsApp"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </ShareButton>
                <button
                  type="button"
                  onClick={copyLink}
                  aria-label="Copia il link"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1a3a6b]/12 text-[#1a3a6b]/70 hover:text-[#1a3a6b] hover:border-[#1a3a6b]/30 hover:bg-[#f0f4fa] transition-all text-sm font-medium"
                >
                  <Link2 className="w-4 h-4" aria-hidden="true" />
                  {copied ? 'Link copiato!' : 'Copia link'}
                </button>
              </div>
            </div>
          </div>

          {/* Right – sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#1a3a6b]/8">
                <h2 className="text-sm font-bold text-[#1a3a6b] uppercase tracking-widest mb-5">
                  In sintesi
                </h2>
                <div className="space-y-4">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-2xl font-extrabold text-[#1a3a6b]" style={{ color: colors.text }}>
                        {h.value}
                      </span>
                      <span className="text-sm text-[#1a3a6b]/60 mt-0.5">{h.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Partners */}
            {project.partners && project.partners.length > 0 && (
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#1a3a6b]/8">
                <h2 className="text-sm font-bold text-[#1a3a6b] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  Partner del progetto
                </h2>
                <ul className="space-y-2" role="list">
                  {project.partners.map((p, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#1a3a6b]/75 py-2 border-b border-[#1a3a6b]/6 last:border-0"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: colors.text }}
            >
              <h2 className="font-extrabold text-lg mb-2">Vuoi supportare questo progetto?</h2>
              <p className="text-sm text-white/80 mb-5 leading-relaxed">
                Con una donazione o diventando socio contribuisci a rendere concreti i nostri progetti.
              </p>
              <Link
                href="/sostienici"
                className="block w-full text-center bg-white font-bold text-sm py-3 rounded-xl transition-opacity hover:opacity-90"
                style={{ color: colors.text }}
              >
                Sostienici
              </Link>
              <Link
                href="/diventa-socio"
                className="block w-full text-center border border-white/40 font-semibold text-sm py-3 rounded-xl mt-3 transition-colors hover:bg-white/10"
              >
                Diventa socio
              </Link>
            </div>
          </aside>
        </div>

        {/* ── Related projects ─────────────────────────────── */}
        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-20 pt-12 border-t border-[#1a3a6b]/8">
            <h2 id="related-heading" className="text-2xl font-extrabold text-[#1a3a6b] mb-8">
              Progetti correlati
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => {
                const c = CATEGORY_COLORS[p.categoryColor] || CATEGORY_COLORS.blue
                return (
                  <Link
                    key={p.id}
                    href={p.href}
                    className="group bg-white rounded-2xl border border-[#1a3a6b]/8 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-44 bg-[#e8edf5] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span
                        className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg"
                        style={{ backgroundColor: c.bg, color: c.text }}
                      >
                        {p.category}
                      </span>
                      <h3 className="font-bold text-[#1a3a6b] mt-3 group-hover:text-[#2952a3] transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Visualizzatore immagini"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Chiudi visualizzatore"
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-colors"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Prev */}
            {gallery.length > 1 && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                aria-label="Immagine precedente"
                className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="relative w-[90vw] max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                fill
                className="object-contain rounded-xl"
                sizes="90vw"
              />
              {/* Caption */}
              <p className="absolute -bottom-8 left-0 right-0 text-center text-white/70 text-sm">
                {gallery[lightboxIndex].alt}
              </p>
            </motion.div>

            {/* Next */}
            {gallery.length > 1 && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                aria-label="Immagine successiva"
                className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            )}

            {/* Dots */}
            {gallery.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2" aria-hidden="true">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === lightboxIndex ? 'bg-white scale-125' : 'bg-white/40'
                    }`}
                    aria-label={`Vai all'immagine ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
