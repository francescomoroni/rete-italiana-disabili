'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  const testimonial = TESTIMONIALS[current]

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-sky font-semibold text-sm uppercase tracking-widest mb-3">
            Storie vere
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue text-balance"
          >
            Le persone al centro
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div
            aria-live="polite"
            aria-atomic="true"
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-surface rounded-3xl p-8 md:p-12 text-center border border-brand-blue/8"
              >
                <Quote
                  className="w-10 h-10 text-brand-blue/20 mx-auto mb-6"
                  aria-hidden="true"
                />
                <p className="text-xl md:text-2xl text-brand-blue leading-relaxed font-medium mb-8">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer>
                  <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <cite className="not-italic">
                    <p className="font-bold text-brand-blue">{testimonial.name}</p>
                    <p className="text-brand-blue/55 text-sm">{testimonial.role}</p>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-brand-blue/20 flex items-center justify-center text-brand-blue hover:border-brand-blue hover:bg-brand-blue-muted transition-all"
              aria-label="Testimonianza precedente"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Seleziona testimonianza">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonianza ${i + 1} di ${TESTIMONIALS.length}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'w-8 bg-brand-blue' : 'w-2 bg-brand-blue/25 hover:bg-brand-blue/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-brand-blue/20 flex items-center justify-center text-brand-blue hover:border-brand-blue hover:bg-brand-blue-muted transition-all"
              aria-label="Testimonianza successiva"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
