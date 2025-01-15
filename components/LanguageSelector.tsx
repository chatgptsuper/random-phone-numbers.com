'use client'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { languages, Language, defaultLanguage } from '../config/languages'

// 简化的语言列表（按照指定顺序排列）
const languageList = [
  // 第一列（优先显示的语言）
  { code: 'en-US', label: 'English' },
  { code: 'pt-BR', label: 'Português' },
  { code: 'fil-PH', label: 'Filipino' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  // 第二列
  { code: 'it', label: 'Italiano' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi-IN', label: 'हिंदी' },
  { code: 'id-ID', label: 'Indonesia' },
  { code: 'ms-MY', label: 'Melayu' },
  { code: 'th-TH', label: 'ไทย' },
  { code: 'vi-VN', label: 'Tiếng Việt' },
  { code: 'tr', label: 'Türkçe' },
] as const;

// 将语言列表分成两列
const firstColumn = languageList.slice(0, 10);
const secondColumn = languageList.slice(10);

export default function LanguageSelector() {
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1] || defaultLanguage

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="btn btn-ghost h-8 px-2 min-h-[2rem]">
        <span className="text-lg">{languages[currentLang as Language]?.flag}</span>
        <span className="ml-2 text-sm">
          {languageList.find(lang => lang.code === currentLang)?.label || 'English'}
        </span>
      </button>
      <div tabIndex={0} className="dropdown-content z-[1] shadow bg-base-200 rounded-box p-2">
        <div className="flex gap-2">
          {/* 第一列 */}
          <ul className="menu menu-sm w-36">
            {firstColumn.map(({ code, label }) => (
              <li key={code}>
                <Link
                  href={code === defaultLanguage ? '/' : `/${code}`}
                  className={`flex items-center gap-2 py-1 ${currentLang === code ? 'active bg-base-content/10' : ''}`}
                >
                  <span className="text-base">{languages[code as Language].flag}</span>
                  <span className="text-sm whitespace-nowrap">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* 第二列 */}
          <ul className="menu menu-sm w-36">
            {secondColumn.map(({ code, label }) => (
              <li key={code}>
                <Link
                  href={code === defaultLanguage ? '/' : `/${code}`}
                  className={`flex items-center gap-2 py-1 ${currentLang === code ? 'active bg-base-content/10' : ''}`}
                >
                  <span className="text-base">{languages[code as Language].flag}</span>
                  <span className="text-sm whitespace-nowrap">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 