import '../globals.css'
import { ThemeProvider } from '../../components/providers/ThemeProvider'
import type { Metadata } from 'next'
import Script from 'next/script'
import { localeMetadata } from '../i18n/config'
import type { Locale } from '../i18n/config'

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const meta = localeMetadata[locale]
  const url = 'https://random-phone-numbers.com'
  
  return {
    ...meta,
    alternates: {
      canonical: `${url}/${locale}`,
      languages: {
        'x-default': url,
        en: `${url}/en`,
        zh: `${url}/zh`,
        // ... 其他语言
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