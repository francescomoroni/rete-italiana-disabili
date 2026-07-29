'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/data'

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  sky: { bg: '#e8f5fb', text: '#1e9ed6' },
  green: { bg: '#e8f5ed', text: '#27a55a' },
  orange: { bg: '#fdf0e8', text: '#f07030' },
  yellow: { bg: '#fdf8e1', text: '#d9a800' },
  coral: { bg: '#fdeaec', text: '#e84c5a' },
  magenta: { bg: '#f9e8f2', text: '#c0287a' },
  blue: { bg: '#e8edf5', text: '#1a3a6b' },
  purple: { bg: '#f0ebfa', text: '#7c3aed' },
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Tutti')
  const [imageAttemptByProject, setImageAttemptByProject] = useState<
    Record<string, number>
  >({})

  const filtered =
    activeCategory === 'Tutti'
      ? PROJECTS
      : PROJECTS.filter((p) => p.year === activeCategory)

  function getImageCandidates(project: (typeof PROJECTS)[number]) {
    const isPlaceholderCover =
      typeof project.image === 'string' &&
      project.image.toLowerCase().endsWith('/cover.jpg')

    return [
      isPlaceholderCover ? undefined : project.image,
      project.gallery?.[0]?.src,
      '/images/logo.jpg',
    ].filter(Boolean) as string[]
  }

  return (
    <section
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <p className="text-[#1e9ed6] font-semibold text-sm uppercase tracking-widest mb-3">
              Cosa facciamo
            </p>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] text-balance"
            >
              I nostri progetti
            </h2>
          </div>
          {/* <Link
            href="/progetti"
            className="inline-flex items-center gap-2 text-[#1a3a6b] font-semibold hover:gap-3 transition-all group shrink-0"
          >
            Tutti i progetti
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link> */}
        </div>

        {/* Year filters */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filtra per anno"
        >
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#1a3a6b] text-white shadow'
                    : 'bg-[#F8FAFC] text-[#1a3a6b]/70 hover:bg-[#e8edf5] border border-[#1a3a6b]/8'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const colors =
                CATEGORY_COLORS[project.categoryColor] || CATEGORY_COLORS.blue
              const candidates = getImageCandidates(project)
              const currentAttempt = imageAttemptByProject[project.id] ?? 0
              const safeAttempt = Math.min(currentAttempt, candidates.length - 1)
              const cardImage = candidates[safeAttempt]
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group bg-white rounded-2xl border border-[#1a3a6b]/8 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link href={project.href} className="block">
                    <div className="relative h-52 overflow-hidden bg-[#e8edf5]">
                      <Image
                        src={cardImage}
                        alt={`Progetto: ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() => {
                          setImageAttemptByProject((prev) => {
                            const attempt = prev[project.id] ?? 0
                            if (attempt >= candidates.length - 1) return prev
                            return { ...prev, [project.id]: attempt + 1 }
                          })
                        }}
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-lg"
                            style={{
                              backgroundColor: colors.bg,
                              color: colors.text,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-xl text-[#1a3a6b] mb-3 group-hover:text-[#2952a3] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#1a3a6b]/65 text-base leading-relaxed mb-4">
                        {project.description}
                      </p>
                      {(project.location || project.year) && (
                        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#1a3a6b]/55 mb-4">
                          {project.location && (
                            <span className="inline-flex items-center gap-1">
                              <MapPin
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                              />
                              {project.location}
                            </span>
                          )}
                          {project.year && (
                            <span className="inline-flex items-center gap-1">
                              <Calendar
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                              />
                              {project.year}
                            </span>
                          )}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-2 text-[#1a3a6b] font-semibold text-sm group-hover:gap-3 transition-all">
                        Leggi di più
                        <ArrowRight
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
