import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Rete Italiana Disabili APS - Inclusione, Diritti e Sostegno'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public/images/logo.png'), 'base64')
  const logoSrc = `data:image/jpeg;base64,${logoData}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0f2347 0%, #1a3a6b 55%, #2952a3 100%)',
          gap: 28,
        }}
      >
        <img
          src={logoSrc}
          width={220}
          height={220}
          alt=""
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            color: 'white',
            textAlign: 'center',
            padding: '0 48px',
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Rete Italiana Disabili APS
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              opacity: 0.9,
              lineHeight: 1.3,
            }}
          >
            Inclusione, diritti e sostegno
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
