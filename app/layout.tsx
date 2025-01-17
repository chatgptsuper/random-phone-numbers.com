import './globals.css'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://random-phone-numbers.com'),
  title: 'Random Phone Number Generator - Free Phone Number Generator Tool',
  description: 'Generate random phone numbers for multiple countries. Create fake phone numbers for testing. Features include bulk generation, US/UK/international phone numbers, customizable formats and Excel export.',
  keywords: [
    'random phone numbers',
    'phone number generator', 
    'random phone number',
    'fake phone number generator',
    'phone number maker',
    'usa phone number generator',
    'us phone number generator',
    'random usa phone number',
    'fake phone number us',
    'generate telephone number'
  ].join(', '),
  authors: [{ name: 'SirGhazian' }],
  creator: 'SirGhazian',
  publisher: 'SirGhazian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Random Phone Number Generator - Free Phone Number Generator Tool',
    description: 'Generate random phone numbers for multiple countries. Create fake phone numbers for testing. Features include bulk generation, US/UK/international phone numbers and Excel export.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Random Phone Numbers',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Random Phone Number Generator Tool Preview',
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
  name: 'Random Phone Number Generator',
  description: 'Free tool to generate random phone numbers for multiple countries. Create fake phone numbers for testing purposes.',
  applicationCategory: 'UtilityApplication',
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
    'Generate random phone numbers for multiple countries',
    'US, UK, China, India phone number formats',
    'Bulk phone number generation',
    'Customizable number formats',
    'Excel export feature',
    'Copy to clipboard function',
    'Free to use'
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