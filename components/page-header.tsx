'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  accentColor?: string
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  accentColor = '#1e9ed6',
}: PageHeaderProps) {
  return (
    <section
      className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F8FAFC] border-b border-[#1a3a6b]/8"
      aria-label={`Intestazione pagina: ${title}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Percorso di navigazione" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#1a3a6b]/50" role="list">
              <li>
                <Link href="/" className="hover:text-[#1a3a6b] transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#1a3a6b] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#1a3a6b] font-medium" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <p
              className="font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ color: accentColor }}
            >
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a3a6b] text-balance max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-[#1a3a6b]/65 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
