import type { Metadata } from 'next'
import './globals.css'

const metadata: Metadata = {
  title: 'Tanish Chaudhary - Personal Portfolio',
  description: 'Exploring AI, Policy and Finance | IIM Indore',
  viewport: 'width=device-width, initial-scale=1',
}

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-primary-dark text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
