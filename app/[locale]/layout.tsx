import '../globals.css'
import { ThemeProvider } from '../../components/providers/ThemeProvider'
import type { Metadata } from 'next'
import Script from 'next/script'
import { localeMetadata, locales } from '../i18n/config'
import type { Locale } from '../i18n/config'

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const meta = localeMetadata[locale]
  
  return {
    metadataBase: new URL('https://random-phone-numbers.com'),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'SirGhazian' }],
    creator: 'SirGhazian',
    publisher: 'SirGhazian',
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: locale,
      alternateLocale: locales.filter(l => l !== locale),
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
  }
}

// 完整的布局组件
export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/webico.ico" />
        <link rel="canonical" href={`https://random-phone-numbers.com/${locale}`} />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
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