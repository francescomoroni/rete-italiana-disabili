'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { EVENTS } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'
import SocialShareButtons from '@/components/social-share-buttons'

type EventItem = (typeof EVENTS)[number]

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const isExternal = (href: string) => href.startsWith('http')
  const eventsPageUrl = `${SITE_URL}/eventi`

  return (
    <motion.article
      id={event.id}
      className={`overflow-hidden rounded-2xl border border-brand-blue/10 bg-brand-surface shadow-sm scroll-mt-28 ${
        event.featured ? 'ring-2 ring-accent-sky/25' : ''
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
    >
      <div className={`grid gap-0 ${event.featured ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-2'}`}>
        {/* Media */}
        <div className="relative aspect-[4/5] w-full bg-brand-blue-muted lg:aspect-auto lg:min-h-[420px]">
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
              <span className="mb-3 inline-flex rounded-lg bg-accent-sky px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                In evidenza
              </span>
            )}
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-sky">
              {event.eyebrow}
            </p>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-blue sm:text-3xl">
              {event.title}
            </h3>
          </div>

          <dl className="grid gap-3 text-sm text-brand-blue/75">
            <div className="flex items-start gap-2">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-accent-sky" aria-hidden="true" />
              <div>
                <dt className="sr-only">Data</dt>
                <dd>
                  <time dateTime={event.date}>{event.dateLabel}</time>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-sky" aria-hidden="true" />
              <div>
                <dt className="sr-only">Orario</dt>
                <dd>{event.time}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-sky" aria-hidden="true" />
              <div>
                <dt className="sr-only">Luogo</dt>
                <dd>{event.location}</dd>
              </div>
            </div>
          </dl>

          <p className="text-base leading-relaxed text-brand-blue/70">{event.description}</p>

          {'video' in event && event.video && (
            <div>
              {'videoCaption' in event && event.videoCaption && (
                <p className="mb-2 text-sm font-semibold text-brand-blue">
                  {event.videoCaption}
                </p>
              )}
              <video
                controls
                playsInline
                preload="metadata"
                src={event.video}
                className="aspect-[9/16] w-full max-w-[240px] rounded-lg border border-brand-blue/10 bg-black"
              >
                Il tuo browser non supporta la riproduzione video.
              </video>
            </div>
          )}

          {'gallery' in event && event.gallery && event.gallery.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-semibold text-brand-blue">
                Sfoglia le card dell&apos;iniziativa
              </p>
              <ul className="grid grid-cols-4 gap-2" role="list">
                {event.gallery.map((item) => (
                  <li key={item.src}>
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-lg border border-brand-blue/10"
                    >
                      <div className="relative aspect-[4/5] w-full bg-brand-blue-muted">
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

          <div className="mt-auto flex flex-col gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              {isExternal(event.ctaPrimary.href) ? (
                <a
                  href={event.ctaPrimary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {event.ctaPrimary.label}
                </a>
              ) : (
                <Link
                  href={event.ctaPrimary.href}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
                >
                  {event.ctaPrimary.label}
                </Link>
              )}

              {isExternal(event.ctaSecondary.href) ? (
                <a
                  href={event.ctaSecondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-brand-blue/15 bg-white px-6 text-sm font-semibold text-brand-blue transition-colors hover:border-brand-blue/30 hover:bg-brand-blue-muted"
                >
                  {event.ctaSecondary.label}
                </a>
              ) : (
                <Link
                  href={event.ctaSecondary.href}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-brand-blue/15 bg-white px-6 text-sm font-semibold text-brand-blue transition-colors hover:border-brand-blue/30 hover:bg-brand-blue-muted"
                >
                  {event.ctaSecondary.label}
                </Link>
              )}
            </div>

            <SocialShareButtons
              title={event.title}
              url={eventsPageUrl}
              text={`${event.title} — ${event.dateLabel}`}
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function EventsSection({
  showAllLink = true,
  showHeading = true,
  mobileLimit,
}: {
  showAllLink?: boolean
  showHeading?: boolean
  /** On viewports below `md`, only the first N events are shown. */
  mobileLimit?: number
}) {
  const isTruncatedOnMobile =
    typeof mobileLimit === 'number' && mobileLimit < EVENTS.length

  return (
    <section
      aria-labelledby={showHeading ? 'events-heading' : undefined}
      aria-label={showHeading ? undefined : 'Prossimi eventi'}
      className={`bg-white ${showHeading ? 'py-20 md:py-28' : 'py-12 md:py-16'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-sky">
                Prossimi eventi
              </p>
              <h2
                id="events-heading"
                className="text-balance text-3xl font-extrabold text-brand-blue sm:text-4xl lg:text-5xl"
              >
                Vieni a conoscerci di persona
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-blue/65">
                Le occasioni in cui Rete Italiana Disabili scende in campo per costruire comunità,
                sport e inclusione.
              </p>
            </div>
            {showAllLink && (
              <Link
                href="/eventi"
                className="group hidden shrink-0 items-center gap-2 font-semibold text-brand-blue transition-all hover:gap-3 md:inline-flex"
                aria-label="Vedi tutti gli eventi"
              >
                Vedi tutto
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
            <div
              key={event.id}
              className={
                isTruncatedOnMobile && i >= mobileLimit! ? 'hidden md:block' : undefined
              }
            >
              <EventCard event={event} index={i} />
            </div>
          ))}
        </div>

        {isTruncatedOnMobile && (
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/eventi"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-brand-blue/15 bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition-all hover:border-brand-blue/30 hover:bg-brand-blue-muted"
            >
              Vedi tutto
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
