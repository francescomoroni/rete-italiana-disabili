'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Calendar, Tag } from 'lucide-react'
import { EVENTS } from '@/lib/data'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return {
    day: d.toLocaleDateString('it-IT', { day: '2-digit' }),
    month: d.toLocaleDateString('it-IT', { month: 'short' }),
    year: d.toLocaleDateString('it-IT', { year: 'numeric' }),
    full: d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

export default function EventsSection() {
  return (
    <section
      aria-labelledby="events-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-[#1e9ed6] font-semibold text-sm uppercase tracking-widest mb-3">
              In agenda
            </p>
            <h2
              id="events-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] text-balance"
            >
              Prossimi eventi
            </h2>
          </div>
          <Link
            href="/eventi"
            className="inline-flex items-center gap-2 text-[#1a3a6b] font-semibold hover:gap-3 transition-all group shrink-0"
            aria-label="Vedi tutti gli eventi"
          >
            Tutti gli eventi
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {EVENTS.map((event, i) => {
            const date = formatDate(event.date)
            return (
              <motion.article
                key={event.id}
                className="group flex flex-col sm:flex-row gap-5 p-6 rounded-2xl border border-[#1a3a6b]/8 bg-[#F8FAFC] hover:shadow-lg hover:border-[#1a3a6b]/20 transition-all duration-300"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                {/* Date badge */}
                <div
                  className="flex flex-row sm:flex-col items-center sm:items-center justify-start gap-3 sm:gap-0 shrink-0 w-full sm:w-20"
                  aria-hidden="true"
                >
                  <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-[#1a3a6b] text-white">
                    <span className="text-2xl font-extrabold leading-none">{date.day}</span>
                    <span className="text-xs font-medium uppercase tracking-wide">{date.month}</span>
                  </div>
                  <span className="text-sm text-[#1a3a6b]/50 sm:mt-1">{date.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#e8edf5] text-[#1a3a6b] text-xs font-bold uppercase tracking-wide">
                      <Tag className="w-3 h-3" aria-hidden="true" />
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-[#1a3a6b] mb-2 group-hover:text-[#2952a3] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-[#1a3a6b]/65 text-base leading-relaxed mb-3">{event.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#1a3a6b]/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime={event.date}>{date.full}</time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center shrink-0">
                  <Link
                    href={event.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a3a6b] text-white font-semibold rounded-xl text-sm hover:bg-[#0f2347] transition-colors whitespace-nowrap"
                    aria-label={`Iscriviti a ${event.title}`}
                  >
                    Iscriviti
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
