export const languages = {
  // English (All variants use en-US translations)
  'en-US': { name: 'English (US)', flag: '🇺🇸', region: 'United States', translationKey: 'en-US' },
  'en-GB': { name: 'English (UK)', flag: '🇬🇧', region: 'United Kingdom', translationKey: 'en-US' },
  'en-CA': { name: 'English (CA)', flag: '🇨🇦', region: 'Canada', translationKey: 'en-US' },
  'en-AU': { name: 'English (AU)', flag: '🇦🇺', region: 'Australia', translationKey: 'en-US' },
  'en-IN': { name: 'English (IN)', flag: '🇮🇳', region: 'India', translationKey: 'en-US' },
  'en-PH': { name: 'English (PH)', flag: '🇵🇭', region: 'Philippines', translationKey: 'en-US' },
  'en-NG': { name: 'English (NG)', flag: '🇳🇬', region: 'Nigeria', translationKey: 'en-US' },
  'en-GH': { name: 'English (GH)', flag: '🇬🇭', region: 'Ghana', translationKey: 'en-US' },
  
  // Chinese Variants
  'zh-CN': { name: '简体中文', flag: '🇨🇳', region: 'China Mainland', translationKey: 'zh-CN' },
  'zh-TW': { name: '繁體中文', flag: '🇹🇼', region: 'Taiwan', translationKey: 'zh-TW' },
  'zh-HK': { name: '繁體中文(香港)', flag: '🇭🇰', region: 'Hong Kong', translationKey: 'zh-TW' },
  
  // Indian Languages
  'hi-IN': { name: 'हिंदी', flag: '🇮🇳', region: 'India', translationKey: 'hi-IN' },
  
  // Southeast Asian Languages
  'id-ID': { name: 'Bahasa Indonesia', flag: '🇮🇩', region: 'Indonesia', translationKey: 'id-ID' },
  'fil-PH': { name: 'Filipino', flag: '🇵🇭', region: 'Philippines', translationKey: 'fil-PH' },
  'ms-MY': { name: 'Bahasa Melayu', flag: '🇲🇾', region: 'Malaysia', translationKey: 'ms-MY' },
  'th-TH': { name: 'ไทย', flag: '🇹🇭', region: 'Thailand', translationKey: 'th-TH' },
  'vi-VN': { name: 'Tiếng Việt', flag: '🇻🇳', region: 'Vietnam', translationKey: 'vi-VN' },
  
  // European Languages
  'pt-BR': { name: 'Português (BR)', flag: '🇧🇷', region: 'Brazil', translationKey: 'pt-BR' },
  'es': { name: 'Español', flag: '🇪🇸', region: 'Spanish', translationKey: 'es' },
  'fr': { name: 'Français', flag: '🇫🇷', region: 'French', translationKey: 'fr' },
  'de': { name: 'Deutsch', flag: '🇩🇪', region: 'German', translationKey: 'de' },
  'it': { name: 'Italiano', flag: '🇮🇹', region: 'Italian', translationKey: 'it' },
  
  // East Asian Languages
  'ja': { name: '日本語', flag: '🇯🇵', region: 'Japanese', translationKey: 'ja' },
  'ko': { name: '한국어', flag: '🇰🇷', region: 'Korean', translationKey: 'ko' },
  
  // Other Major Languages
  'ar': { name: 'العربية', flag: '🇸🇦', region: 'Arabic', translationKey: 'ar' },
  'ru': { name: 'Русский', flag: '🇷🇺', region: 'Russian', translationKey: 'ru' },
  'tr': { name: 'Türkçe', flag: '🇹🇷', region: 'Turkish', translationKey: 'tr' },
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage = 'en-US';

// 获取用户的首选语言
export function getPreferredLanguage(userLocale: string): Language {
  // 首先尝试完全匹配
  if (userLocale in languages) {
    return userLocale as Language;
  }

  // 尝试匹配语言代码（不考虑地区）
  const langCode = userLocale.split('-')[0];
  const match = Object.keys(languages).find(key => key.startsWith(langCode + '-'));
  if (match) {
    return match as Language;
  }

  // 如果没有匹配，返回默认语言
  return defaultLanguage;
}

// 获取语言的翻译键
export function getTranslationKey(lang: Language): string {
  return languages[lang].translationKey || lang;
} 