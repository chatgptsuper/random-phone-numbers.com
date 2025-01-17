'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, defaultLocale } from '../app/i18n/config'

export default function LanguageSwitch() {
  const pathname = usePathname() || ''
  const router = useRouter()

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/')
    const currentPath = segments.length > 2 ? segments.slice(2).join('/') : ''
    router.push(`/${newLocale}/${currentPath}`)
  }

  const currentLocale = pathname.split('/')[1] || defaultLocale

  return (
    <select 
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="select select-bordered select-sm"
      value={currentLocale}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {localeNames[locale]}
        </option>
      ))}
    </select>
  )
} 