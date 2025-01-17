import { createTranslator } from 'next-intl'
import { Locale } from './config'

export async function getTranslations(locale: Locale) {
  return (await import(`./locales/${locale}.json`)).default
}

export function getTranslator(messages: any, locale: Locale) {
  return createTranslator({ locale, messages })
} 