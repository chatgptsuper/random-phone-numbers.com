import './globals.css'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://random-phone-numbers.com'),
  title: 'Phone Number Generator - Free International Phone Number Generator Tool',
  description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more. Perfect for testing and development purposes. Features include bulk generation, Excel export, and customizable formats.',
  keywords: 'phone number generator, random phone numbers, international phone numbers, test data generator, development tools, bulk phone numbers, phone number format, phone number validation',
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
    description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more. Features include bulk generation and Excel export.',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Phone Number Generator',
  description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  url: 'https://random-phone-numbers.com',
  author: {
    '@type': 'Person',
    name: 'SirGhazian',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Multiple country support',
    'Customizable format',
    'Bulk generation',
    'Excel export',
    'Copy to clipboard',
    'Dark mode support'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/webico.ico" />
        <link rel="canonical" href="https://random-phone-numbers.com" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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