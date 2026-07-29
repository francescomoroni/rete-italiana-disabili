'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { NEWS } from '@/lib/data'

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  blue: { bg: '#e8edf5', text: '#1a3a6b' },
  green: { bg: '#e8f5ed', text: '#27a55a' },
  sky: { bg: '#e8f5fb', text: '#1e9ed6' },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const NEWS_IMAGES: Record<string, string> = {
  'convenzione-onu-aggiornamento-2025': '/images/news/onu.png',
  'nuovo-progetto-sport-2025': '/images/news/sport-news.png',
  'accessibilita-turismo': '/images/news/tourism.png',
}

export default function NewsSection() {
  return (
    <section
      aria-labelledby="news-heading"
      className="py-20 md:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-[#1e9ed6] font-semibold text-sm uppercase tracking-widest mb-3">
              Aggiornamenti
            </p>
            <h2
              id="news-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] text-balance"
            >
              Ultime notizie
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#1a3a6b] font-semibold hover:gap-3 transition-all group shrink-0"
            aria-label="Vai a tutte le notizie"
          >
            Tutte le notizie
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {NEWS.map((article, i) => {
            const colors = CATEGORY_COLORS[article.categoryColor] || CATEGORY_COLORS.blue
            return (
              <motion.article
                key={article.id}
                className="group bg-white rounded-2xl border border-[#1a3a6b]/8 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="relative h-48 overflow-hidden bg-[#e8edf5]">
                  <Image
                    src={NEWS_IMAGES[article.id] || '/images/hero.png'}
                    alt={`Immagine per: ${article.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide mb-4"
                    style={{ backgroundColor: colors.bg, color: colors.text }}
                  >
                    {article.category}
                  </span>

                  <h3 className="font-bold text-lg text-[#1a3a6b] mb-3 leading-snug group-hover:text-[#2952a3] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[#1a3a6b]/60 text-base leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#1a3a6b]/8">
                    <div className="flex items-center gap-3 text-xs text-[#1a3a6b]/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </span>
                    </div>
                    <Link
                      href={article.href}
                      className="inline-flex items-center gap-1.5 text-[#1a3a6b] font-semibold text-sm hover:gap-2.5 transition-all group/link"
                      aria-label={`Leggi: ${article.title}`}
                    >
                      Leggi
                      <ArrowRight
                        className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
