import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { defaultLocale, locales } from './i18n/config'

export default function RootPage() {
  // 获取 Accept-Language header
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language')
  
  // 解析用户偏好语言
  let userLocale = defaultLocale
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(',')
      .map(item => item.split(';')[0].trim().substring(0, 2))
    
    // 查找第一个支持的语言
    const matchedLocale = preferredLocales.find(locale => 
      locales.includes(locale as any)
    )
    
    if (matchedLocale) {
      userLocale = matchedLocale as typeof defaultLocale
    }
  }

  // 重定向到适当的语言版本
  redirect(`/${userLocale}`)
}