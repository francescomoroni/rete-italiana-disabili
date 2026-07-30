type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/** Server-safe JSON-LD script for structured data. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
