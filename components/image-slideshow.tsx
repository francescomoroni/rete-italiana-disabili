'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = { src: string; alt: string }

export default function ImageSlideshow({
  slides,
  alt = '',
  priority = false,
  className = '',
  objectFit = 'cover',
  intervalMs = 4500,
}: {
  slides: Slide[]
  alt?: string
  priority?: boolean
  className?: string
  objectFit?: 'cover' | 'contain'
  intervalMs?: number
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  useEffect(() => {
    if (count <= 1 || paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [count, paused, intervalMs])

  if (count === 0) return null

  const current = slides[index] ?? slides[0]
  const goTo = (next: number) => setIndex((next + count) % count)

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Galleria immagini"
      className={`relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div aria-live="polite" className="sr-only">
        Immagine {index + 1} di {count}: {current.alt || alt}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src={current.src}
            alt={current.alt || alt}
            fill
            priority={priority && index === 0}
            className={objectFit === 'contain' ? 'object-contain' : 'object-cover'}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Immagine precedente"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Immagine successiva"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5"
            role="tablist"
            aria-label="Seleziona immagine"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Vai all'immagine ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                  i === index ? 'w-5 bg-white' : 'w-2 bg-white/55 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
