import { createTranslator } from 'next-intl'
import { Locale, defaultLocale, locales } from './config'

// 定义翻译消息的类型接口
interface TranslationMessages {
  app: {
    title: string
    description: string
    total: string
    generate: string
    copy: string
    excel: string
    options: {
      plusSymbol: string
      countryPrefix: string
      separateByComma: string
    }
    meta: {
      keywords: string
      description: string
    }
  }
}

export async function getTranslations(locale: Locale) {
  return (await import(`./locales/${locale}.json`)).default as TranslationMessages
}

export function getTranslator(messages: TranslationMessages, locale: Locale) {
  return createTranslator({ locale, messages })
}

// 获取浏览器语言
export function getBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  
  // 获取浏览器语言设置
  const browserLang = navigator.language.split('-')[0]
  
  // 检查是否支持该语言
  if (locales.includes(browserLang as Locale)) {
    return browserLang as Locale
  }
  
  return defaultLocale
}

// 保存语言偏好
export function saveLanguagePreference(locale: Locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', locale)
  }
}

// 获取语言偏好
export function getLanguagePreference(): Locale | null {
  if (typeof window === 'undefined') return null
  
  const saved = localStorage.getItem('preferred-language')
  if (saved && locales.includes(saved as Locale)) {
    return saved as Locale
  }
  
  return null
} 