import './globals.css'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phone Number Generator - Free International Phone Number Generator Tool',
  description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more. Free tool for testing and development purposes.',
  keywords: 'phone number generator, random phone numbers, international phone numbers, test data generator, development tools',
  authors: [{ name: 'SirGhazian' }],
  openGraph: {
    title: 'Phone Number Generator - Free International Phone Number Generator Tool',
    description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Phone Number Generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phone Number Generator',
    description: 'Generate random phone numbers for multiple countries',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-site-verification', // 需要替换为实际的验证码
  },
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
        <link rel="canonical" href="https://your-domain.com" /> {/* 需要替换为实际域名 */}
      </head>
      <body className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}