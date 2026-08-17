import type { Metadata, Viewport } from 'next'
import { Unbounded, Manrope, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import SmoothScroll from '@/components/SmoothScroll'
import { SITE_URL, SITE_NAME } from '@/lib/config'

/* ── Google Fonts ────────────────────────────────────────── */
const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-display',
  display: 'swap',
})
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

/* ── Site-level metadata (pages can override) ────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/favicon.png',
  },
  title: {
    default: `DJ Academy in Ahmedabad | ${SITE_NAME} — Powered by DJ Glory`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Affection The DJ Academy in Ahmedabad, powered by DJ Glory. Practical DJ training for beginners and aspiring professional DJs — weddings, clubs, festivals, commercial events and music production.',
  keywords: [
    'DJ academy Ahmedabad',
    'DJ training Ahmedabad',
    'learn DJing Gujarat',
    'wedding DJ course',
    'Garba DJ training',
    'Affection DJ Academy',
    'DJ Glory',
    'beatmatching course',
    'music production Ahmedabad',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Ahmedabad`,
    description: 'Learn DJing. Practice on real decks. Prepare for the real event floor.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Ahmedabad`,
    description: 'Learn DJing. Practice on real decks. Prepare for the real event floor.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#14101F',
}

/* ── JSON-LD schema ──────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_NAME,
  url: SITE_URL,
  description: 'Practical DJ training in Ahmedabad for beginners and aspiring professional DJs.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  brand: { '@type': 'Brand', name: SITE_NAME },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${unbounded.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{
          fontFamily: '"Manrope", system-ui, sans-serif',
          backgroundColor: '#14101F',
          color: '#EDEAF5',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <a className="skip-link" href="#main">Skip to content</a>
        <SmoothScroll />
        <Navbar />
        <main id="main" style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
