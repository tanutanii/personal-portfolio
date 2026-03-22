import type { Metadata } from 'next'
import './globals.css'
import CursorSpotlight from '@/components/CursorSpotlight'

const metadata: Metadata = {
  title: 'Tanish Chaudhary - Personal Portfolio',
  description: 'Learning fast and building faster',
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
      <body className="bg-primary-dark text-white min-h-screen noise-overlay">
        <CursorSpotlight />
        {children}
      </body>
    </html>
  )
}
