import './globals.css'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://random-phone-numbers.com'),
  title: 'Random Phone Number Generator - Free Phone Number Generator Tool',
  description: 'Generate random phone numbers for US, UK, and worldwide. Free phone number generator tool for creating fake phone numbers, test data, and random US phone numbers. Perfect for developers and testers.',
  keywords: 'random phone number, phone number generator, fake phone number generator, random phone numbers, phone number maker, phone number creator, us phone number generator, random usa phone number, fake phone number us, usa free phone number',
  authors: [{ name: 'SirGhazian' }],
  creator: 'SirGhazian',
  publisher: 'SirGhazian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://random-phone-numbers.com',
    languages: {
      'en-US': '/en-US',
      'zh-CN': '/zh-CN',
      'es-ES': '/es-ES',
      'ja': '/ja',
    },
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
  description: 'Generate random phone numbers for US, UK, and worldwide. Free phone number generator tool for creating fake phone numbers and test data.',
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
  keywords: 'random phone number, phone number generator, fake phone number generator, random phone numbers, phone number maker',
  featureList: [
    'Generate random US phone numbers',
    'Create fake phone numbers',
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