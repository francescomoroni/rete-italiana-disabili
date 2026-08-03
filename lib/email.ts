import { Resend } from 'resend'
import { ORGANIZATION, SITE_NAME } from '@/lib/seo'

export const EMAIL_TO =
  process.env.EMAIL_TO ?? ORGANIZATION.email

export const EMAIL_FROM =
  process.env.EMAIL_FROM ?? `${SITE_NAME} <onboarding@resend.dev>`

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY non configurata')
  }
  return new Resend(apiKey)
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
