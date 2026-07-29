'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { EVENTS } from '@/lib/data'

type EventItem = (typeof EVENTS)[number]

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const isExternal = (href: string) => href.startsWith('http')

  return (
    <motion.article
      className={`overflow-hidden rounded-2xl border border-[#1a3a6b]/10 bg-[#F8FAFC] shadow-sm ${
        event.featured ? 'ring-2 ring-[#1e9ed6]/25' : ''
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
    >
      <div className={`grid gap-0 ${event.featured ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-2'}`}>
        {/* Media */}
        <div className="relative aspect-[4/5] w-full bg-[#e8edf5] lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={event.featured}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div>
            {event.featured && (
              <span className="mb-3 inline-flex rounded-lg bg-[#1e9ed6] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                In evidenza
              </span>
            )}
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1e9ed6]">
              {event.eyebrow}
            </p>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1a3a6b] sm:text-3xl">
              {event.title}
            </h3>
          </div>

          <dl className="grid gap-3 text-sm text-[#1a3a6b]/75">
            <div className="flex items-start gap-2">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#1e9ed6]" aria-hidden="true" />
              <div>
                <dt className="sr-only">Data</dt>
                <dd>
                  <time dateTime={event.date}>{event.dateLabel}</time>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#1e9ed6]" aria-hidden="true" />
              <div>
                <dt className="sr-only">Orario</dt>
                <dd>{event.time}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1e9ed6]" aria-hidden="true" />
              <div>
                <dt className="sr-only">Luogo</dt>
                <dd>{event.location}</dd>
              </div>
            </div>
          </dl>

          <p className="text-base leading-relaxed text-[#1a3a6b]/70">{event.description}</p>

          {'video' in event && event.video && (
            <div>
              {'videoCaption' in event && event.videoCaption && (
                <p className="mb-2 text-sm font-semibold text-[#1a3a6b]">
                  {event.videoCaption}
                </p>
              )}
              <video
                controls
                playsInline
                preload="metadata"
                src={event.video}
                className="aspect-[9/16] w-full max-w-[240px] rounded-lg border border-[#1a3a6b]/10 bg-black"
              >
                Il tuo browser non supporta la riproduzione video.
              </video>
            </div>
          )}

          {'gallery' in event && event.gallery && event.gallery.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-semibold text-[#1a3a6b]">
                Sfoglia le card dell&apos;iniziativa
              </p>
              <ul className="grid grid-cols-4 gap-2" role="list">
                {event.gallery.map((item) => (
                  <li key={item.src}>
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-lg border border-[#1a3a6b]/10"
                    >
                      <div className="relative aspect-[4/5] w-full bg-[#e8edf5]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="120px"
                        />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            {isExternal(event.ctaPrimary.href) ? (
              <a
                href={event.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1a3a6b] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0f2347]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {event.ctaPrimary.label}
              </a>
            ) : (
              <Link
                href={event.ctaPrimary.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1a3a6b] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0f2347]"
              >
                {event.ctaPrimary.label}
              </Link>
            )}

            {isExternal(event.ctaSecondary.href) ? (
              <a
                href={event.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-[#1a3a6b]/15 bg-white px-6 text-sm font-semibold text-[#1a3a6b] transition-colors hover:border-[#1a3a6b]/30 hover:bg-[#e8edf5]"
              >
                {event.ctaSecondary.label}
              </a>
            ) : (
              <Link
                href={event.ctaSecondary.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-[#1a3a6b]/15 bg-white px-6 text-sm font-semibold text-[#1a3a6b] transition-colors hover:border-[#1a3a6b]/30 hover:bg-[#e8edf5]"
              >
                {event.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function EventsSection({
  showAllLink = true,
  showHeading = true,
}: {
  showAllLink?: boolean
  showHeading?: boolean
}) {
  return (
    <section
      aria-labelledby={showHeading ? 'events-heading' : undefined}
      aria-label={showHeading ? undefined : 'Prossimi eventi'}
      className={`bg-white ${showHeading ? 'py-20 md:py-28' : 'py-12 md:py-16'}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1e9ed6]">
                Prossimi eventi
              </p>
              <h2
                id="events-heading"
                className="text-balance text-3xl font-extrabold text-[#1a3a6b] sm:text-4xl lg:text-5xl"
              >
                Vieni a conoscerci di persona
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#1a3a6b]/65">
                Le occasioni in cui Rete Italiana Disabili scende in campo per costruire comunità,
                sport e inclusione.
              </p>
            </div>
            {showAllLink && (
              <Link
                href="/eventi"
                className="group inline-flex shrink-0 items-center gap-2 font-semibold text-[#1a3a6b] transition-all hover:gap-3"
                aria-label="Vedi tutti gli eventi"
              >
                Tutti gli eventi
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        )}

        <div className="flex flex-col gap-8">
          {EVENTS.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
