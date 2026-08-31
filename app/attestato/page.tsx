import type { Metadata } from 'next'
import CertificateView from '@/components/certificate-view'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Attestato di Partecipazione',
  description:
    'Attestato di partecipazione al percorso formativo "Camminare Insieme nel Welfare Rigenerativo".',
  path: '/attestato',
  noIndex: true,
})

export default function AttestatoPage() {
  return <CertificateView />
}
