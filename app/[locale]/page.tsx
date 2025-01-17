import ThemeController from '../../components/themeController'
import MainGenerator from '../../components/mainGenerator'
import LanguageSwitch from '../../components/LanguageSwitch'
import { getTranslations } from '../i18n/utils'
import type { Locale } from '../i18n/config'

export default async function LocalePage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(locale)

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <LanguageSwitch />
        <ThemeController />
      </div>
      <MainGenerator locale={locale} translations={translations} />
    </main>
  )
} 