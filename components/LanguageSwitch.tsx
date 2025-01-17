'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { localeNames, Locale } from '../app/i18n/config'
import { saveLanguagePreference } from '../app/i18n/utils'

export default function LanguageSwitch() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] as Locale
  
  const handleLanguageChange = (newLocale: Locale) => {
    saveLanguagePreference(newLocale)
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }
  
  return (
    <select 
      value={currentLocale}
      onChange={(e) => handleLanguageChange(e.target.value as Locale)}
      className="select select-sm select-bordered"
    >
      {Object.entries(localeNames).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  )
} 