'use client'

import { useState } from 'react'
import { Share2 } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/social-icons'

const INSTAGRAM_URL = 'https://www.instagram.com/reteitalianadisabili/'

const iconBtnClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/12 text-brand-blue/70 transition-all hover:border-brand-blue/30 hover:bg-brand-blue-muted hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40'

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(textarea)
      return ok
    } catch {
      return false
    }
  }
}

export default function SocialShareButtons({
  title,
  url,
  text,
}: {
  title: string
  url: string
  text?: string
}) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const shareText = text ?? title
  const encodedUrl = encodeURIComponent(url)
  const encodedWhatsApp = encodeURIComponent(`${shareText}\n${url}`)

  function showStatus(message: string) {
    setStatusMessage(message)
    window.setTimeout(() => setStatusMessage(null), 3500)
  }

  async function shareGeneral() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url,
        })
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }

    const copied = await copyToClipboard(url)
    showStatus(copied ? 'Link copiato' : 'Impossibile condividere')
  }

  function shareOnFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  async function shareOnInstagram() {
    const copied = await copyToClipboard(url)

    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title,
          text: `${shareText}\n${url}`,
          url,
        })
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }

    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')
    showStatus(
      copied
        ? 'Link copiato — incollalo nella storia o nel post'
        : `Copia il link: ${url}`
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-brand-blue/55">
        Condividi
      </span>
      <button
        type="button"
        onClick={shareGeneral}
        className={iconBtnClass}
        aria-label={`Condividi ${title}`}
        title="Condividi"
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={shareOnFacebook}
        className={iconBtnClass}
        aria-label={`Condividi ${title} su Facebook`}
        title="Condividi su Facebook"
      >
        <FacebookIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={shareOnInstagram}
        className={iconBtnClass}
        aria-label={`Condividi ${title} su Instagram`}
        title="Copia il link e apri Instagram"
      >
        <InstagramIcon className="h-4 w-4" />
      </button>
      <a
        href={`https://wa.me/?text=${encodedWhatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtnClass}
        aria-label={`Condividi ${title} su WhatsApp`}
        title="Condividi su WhatsApp"
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      {statusMessage && (
        <span className="text-xs font-medium text-accent-sky" role="status">
          {statusMessage}
        </span>
      )}
    </div>
  )
}
