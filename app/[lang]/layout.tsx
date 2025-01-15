import '../globals.css'
import { ThemeProvider } from '../../components/providers/ThemeProvider'
import { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { languages } from '../../config/languages'
import LanguageSelector from '../../components/LanguageSelector'

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }))
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://random-phone-numbers.com'),
  title: 'Phone Number Generator - Free International Phone Number Generator Tool',
  description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more. Perfect for testing and development purposes.',
  keywords: 'phone number generator, random phone numbers, international phone numbers, test data generator',
  authors: [{ name: 'SirGhazian' }],
  creator: 'SirGhazian',
  publisher: 'SirGhazian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Phone Number Generator - Free International Phone Number Generator Tool',
    description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Phone Number Generator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Phone Number Generator Tool Preview',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/webico.ico" />
        <link rel="canonical" href={`https://random-phone-numbers.com${lang === 'en' ? '' : '/' + lang}`} />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <LanguageSelector />
        </div>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WRR1YQ8W48"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WRR1YQ8W48');
          `}
        </Script>
      </body>
    </html>
  )
} 