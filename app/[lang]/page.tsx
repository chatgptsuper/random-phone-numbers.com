import { Metadata } from 'next'
import MainGenerator from '../../components/mainGenerator'
import MainLayout from '../../components/layouts/MainLayout'
import { getTranslations } from '../../messages'
import { languages, defaultLanguage, type Language } from '../../config/languages'

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const messages = getTranslations(params.lang || defaultLanguage)
  const currentLang = params.lang || defaultLanguage
  
  // 构建语言替代链接
  const languageAlternates: Record<string, string> = {}
  Object.keys(languages).forEach((lang) => {
    languageAlternates[lang] = `/${lang}`
  })
  
  // 构建关键词列表
  const keywordsList = [
    'random phone number',
    'phone number generator',
    'fake phone number generator',
    'random phone numbers',
    'phone number maker',
    'phone number creator',
    `${currentLang.includes('US') ? 'us phone number generator' : ''}`,
    `${currentLang.includes('US') ? 'random usa phone number' : ''}`,
    `${currentLang.includes('US') ? 'fake phone number us' : ''}`,
    `${currentLang.includes('US') ? 'usa free phone number' : ''}`
  ].filter(Boolean).join(', ')
  
  return {
    title: messages.metadata.title || 'Random Phone Number Generator - Free Phone Number Generator Tool',
    description: messages.metadata.description || 'Generate random phone numbers for US, UK, and worldwide. Free phone number generator tool for creating fake phone numbers and test data.',
    keywords: messages.metadata.keywords || keywordsList,
    alternates: {
      canonical: `https://random-phone-numbers.com/${currentLang}`,
      languages: languageAlternates,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || '',
    },
    other: {
      'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
      'yandex-verification': process.env.YANDEX_SITE_VERIFICATION || '',
    }
  }
}

// 生成静态页面参数
export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang: lang === defaultLanguage ? '' : lang,
  }))
}

// 生成结构化数据
function generateStructuredData(messages: Messages, lang: string) {
  const langInfo = languages[lang as keyof typeof languages]
  const region = langInfo?.region || 'Worldwide'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: messages.metadata.title || 'Random Phone Number Generator',
    description: messages.metadata.description || 'Generate random phone numbers instantly',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    url: `https://random-phone-numbers.com/${lang}`,
    inLanguage: lang,
    author: {
      '@type': 'Person',
      name: 'SirGhazian',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    keywords: messages.metadata.keywords,
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: region
      }
    },
    potentialAction: {
      '@type': 'UseAction',
      actionStatus: 'PotentialActionStatus',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://random-phone-numbers.com/${lang}`,
        description: `Generate random phone numbers for ${region}`
      }
    }
  }
}

export default function Page({ params: { lang } }: Props) {
  const actualLang = lang || defaultLanguage
  const messages = getTranslations(actualLang)
  
  if (!messages || !messages.ui) {
    console.error('Failed to load translations for language:', actualLang)
    const fallbackMessages = getTranslations(defaultLanguage)
    return (
      <MainLayout>
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateStructuredData(fallbackMessages, defaultLanguage))
            }}
          />
          <MainGenerator messages={fallbackMessages.ui} />
        </div>
      </MainLayout>
    )
  }
  
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(messages, actualLang))
          }}
        />
        <MainGenerator messages={messages.ui} />
      </div>
    </MainLayout>
  )
} 