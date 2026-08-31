import { Playfair_Display, Lora } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-certificate-display',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-certificate-body',
  display: 'swap',
})

export default function AttestatoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${lora.variable} min-h-screen`}>{children}</div>
  )
}
