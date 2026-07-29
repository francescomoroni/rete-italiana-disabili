'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Tag } from 'lucide-react'
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

// Images are now embedded directly in the PROJECTS data objects in lib/data.ts

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Tutti')

  const filtered = activeCategory === 'Tutti'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

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
          <Link
            href="/progetti"
            className="inline-flex items-center gap-2 text-[#1a3a6b] font-semibold hover:gap-3 transition-all group shrink-0"
            aria-label="Vedi tutti i progetti"
          >
            Vedi tutti
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Filter */}
        <div
          role="group"
          aria-label="Filtra progetti per categoria"
          className="flex flex-wrap gap-2 mb-10"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#1a3a6b] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-[#1a3a6b]/70 hover:bg-[#1a3a6b]/10 hover:text-[#1a3a6b]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const colors = CATEGORY_COLORS[project.categoryColor] || CATEGORY_COLORS.blue
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
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-[#e8edf5]">
                    <Image
                      src={project.image || '/images/hero.png'}
                      alt={`Progetto: ${project.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-3.5 h-3.5 shrink-0" style={{ color: colors.text }} aria-hidden="true" />
                      <span
                        className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg"
                        style={{ backgroundColor: colors.bg, color: colors.text }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-[#1a3a6b] mb-3 group-hover:text-[#2952a3] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#1a3a6b]/65 text-base leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-[#1a3a6b] font-semibold text-sm hover:gap-3 transition-all group/link"
                      aria-label={`Leggi di più su ${project.title}`}
                    >
                      Leggi di più
                      <ArrowRight
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
