'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Link2,
  Users,
} from 'lucide-react'
import type { Project } from '@/lib/data'
import { PROJECTS } from '@/lib/data'

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  sky: { bg: '#e8f5fb', text: '#1e9ed6' },
  green: { bg: '#e8f5ed', text: '#27a55a' },
  orange: { bg: '#fdf0e8', text: '#f07030' },
  yellow: { bg: '#fdf8e1', text: '#d9a800' },
  coral: { bg: '#fdeaec', text: '#e84c5a' },
  magenta: { bg: '#f9e8f2', text: '#c0287a' },
  blue: { bg: '#e8edf5', text: '#1a3a6b' },
  purple: { bg: '#f0ebfa', text: '#7c3aed' },
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
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-blue/12 text-brand-blue/70 hover:text-brand-blue hover:border-brand-blue/30 hover:bg-brand-blue-soft transition-all text-sm font-medium"
    >
      {children}
    </a>
  )
}

export default function ProjectDetail({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [heroImageAttempt, setHeroImageAttempt] = useState(0)
  const [pageUrl, setPageUrl] = useState(
    `https://reteitalianadisabili.it/progetti/${project.slug}`
  )

  const colors = TAG_COLORS[project.categoryColor] || TAG_COLORS.blue
  const gallery = project.gallery ?? []
  const isPlaceholderCover =
    typeof project.image === 'string' &&
    project.image.toLowerCase().endsWith('/cover.jpg')
  const heroImageCandidates = [
    isPlaceholderCover ? undefined : project.image,
    gallery[0]?.src,
    '/images/logo.jpg',
  ].filter(Boolean) as string[]
  const heroImage = heroImageCandidates[
    Math.min(heroImageAttempt, heroImageCandidates.length - 1)
  ]
  const related = PROJECTS.filter(
    (p) =>
      p.id !== project.id &&
      p.tags.some((t) => project.tags.includes(t))
  ).slice(0, 3)

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) =>
          i === null ? 0 : (i - 1 + gallery.length) % gallery.length
        )
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((i) =>
          i === null ? 0 : (i + 1) % gallery.length
        )
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, gallery.length])

  const shareTitle = encodeURIComponent(project.title)
  const shareUrl = encodeURIComponent(pageUrl)

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <article className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Link
          href="/progetti"
          className="inline-flex items-center gap-2 text-brand-blue/70 hover:text-brand-blue font-semibold text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Tutti i progetti
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue text-balance leading-tight mb-5">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-brand-blue/65 text-sm">
            {project.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                {project.location}
              </span>
            )}
            {(project.date || project.year) && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                {project.date || project.year}
              </span>
            )}
          </div>
        </header>

        {/* Central hero photo */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-brand-blue-muted mb-10">
          <Image
            src={heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            onError={() => {
              setHeroImageAttempt((prev) =>
                prev >= heroImageCandidates.length - 1 ? prev : prev + 1
              )
            }}
          />
        </div>

        {/* Body */}
        {project.fullDescription && (
          <div className="space-y-5 mb-10">
            {project.fullDescription.map((para, i) => (
              <p
                key={i}
                className="text-brand-blue/80 text-lg leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Partners */}
        {project.partners && project.partners.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" aria-hidden="true" />
              Partner
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.partners.map((partner) => (
                <span
                  key={partner}
                  className="px-3 py-1.5 rounded-xl border border-brand-blue/12 bg-brand-surface text-sm font-medium text-brand-blue/80"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold text-brand-blue mb-2">
              Galleria
            </h2>
            <p className="text-sm text-brand-blue/55 mb-6">
              {gallery.length} foto — clicca per ingrandire
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={`${img.src}-${i}`}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-blue-muted focus-visible:ring-2 focus-visible:ring-brand-blue"
                  aria-label={`Apri immagine ${i + 1}: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 250px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Social share */}
        <div className="pt-8 border-t border-brand-blue/8">
          <h2 className="text-base font-bold text-brand-blue uppercase tracking-widest mb-4">
            Condividi
          </h2>
          <div className="flex flex-wrap gap-3">
            <ShareButton
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              label="Condividi su Facebook"
            >
              Facebook
            </ShareButton>
            <ShareButton
              href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
              label="Condividi su X / Twitter"
            >
              X / Twitter
            </ShareButton>
            <ShareButton
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              label="Condividi su LinkedIn"
            >
              LinkedIn
            </ShareButton>
            <ShareButton
              href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
              label="Condividi su WhatsApp"
            >
              WhatsApp
            </ShareButton>
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copia il link"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-blue/12 text-brand-blue/70 hover:text-brand-blue hover:border-brand-blue/30 hover:bg-brand-blue-soft transition-all text-sm font-medium"
            >
              <Link2 className="w-4 h-4" aria-hidden="true" />
              {copied ? 'Link copiato!' : 'Copia link'}
            </button>
          </div>
        </div>
      </div>

      {/* Related projects */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-t border-brand-blue/8 bg-brand-surface"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2
              id="related-heading"
              className="text-2xl font-extrabold text-brand-blue mb-8"
            >
              Altri progetti
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => {
                const c = TAG_COLORS[p.categoryColor] || TAG_COLORS.blue
                return (
                  <Link
                    key={p.id}
                    href={p.href}
                    className="group bg-white rounded-2xl border border-brand-blue/8 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-44 bg-brand-blue-muted overflow-hidden">
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
                        {p.tags[0]}
                      </span>
                      <h3 className="font-bold text-brand-blue mt-3 group-hover:text-brand-blue-light transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
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
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Chiudi visualizzatore"
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-colors z-10"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(
                    (lightboxIndex - 1 + gallery.length) % gallery.length
                  )
                }}
                aria-label="Immagine precedente"
                className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="relative w-[90vw] max-w-5xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((lightboxIndex + 1) % gallery.length)
                }}
                aria-label="Immagine successiva"
                className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            )}

            <p className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
              {lightboxIndex + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
