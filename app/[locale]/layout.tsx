import '../globals.css'
import { ThemeProvider } from '../../components/providers/ThemeProvider'
import type { Metadata } from 'next'
import Script from 'next/script'
import { localeMetadata } from '../i18n/config'
import type { Locale } from '../i18n/config'

// 使用 Next.js 内置的类型
type Props = {
  children: React.ReactNode
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
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
        es: `${url}/es`,
        fr: `${url}/fr`,
        ja: `${url}/ja`,
        de: `${url}/de`,
        hi: `${url}/hi`,
        id: `${url}/id`,
        tl: `${url}/tl`,
        pt: `${url}/pt`
      }
    }
  }
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
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