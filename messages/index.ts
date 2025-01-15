import { Language, defaultLanguage } from '../config/languages';
import type { Messages } from './types';

// 导入所有翻译文件
import { messages as enUS } from './en-US';
import { messages as zhCN } from './zh-CN';
import { messages as zhTW } from './zh-TW';
import { messages as hiIN } from './hi-IN';
import { messages as idID } from './id-ID';
import { messages as ptBR } from './pt-BR';
import { messages as filPH } from './fil-PH';
import { messages as msMS } from './ms-MY';
import { messages as thTH } from './th-TH';
import { messages as viVN } from './vi-VN';
import { messages as es } from './es';
import { messages as fr } from './fr';
import { messages as de } from './de';
import { messages as it } from './it';
import { messages as ja } from './ja';
import { messages as ko } from './ko';
import { messages as ar } from './ar';
import { messages as ru } from './ru';
import { messages as tr } from './tr';

// 翻译映射
const translations: Record<Language, Messages> = {
  // 英语变体统一使用美式英语
  'en-US': enUS,
  'en-GB': enUS,
  'en-CA': enUS,
  'en-AU': enUS,
  'en-IN': enUS,
  'en-PH': enUS,
  'en-NG': enUS,
  'en-GH': enUS,
  
  // 中文变体
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'zh-HK': zhTW,
  
  // 印度语言
  'hi-IN': hiIN,
  
  // 东南亚语言
  'id-ID': idID,
  'fil-PH': filPH,
  'ms-MY': msMS,
  'th-TH': thTH,
  'vi-VN': viVN,
  
  // 欧洲语言
  'pt-BR': ptBR,
  'es': es,
  'fr': fr,
  'de': de,
  'it': it,
  
  // 东亚语言
  'ja': ja,
  'ko': ko,
  
  // 其他主要语言
  'ar': ar,
  'ru': ru,
  'tr': tr,
} as const;

export function getTranslations(locale: string = defaultLanguage): Messages {
  // 获取语言的基础代码（例如：zh-CN -> zh）
  const baseCode = locale.split('-')[0];
  
  // 1. 尝试完全匹配
  if (locale in translations) {
    return translations[locale as Language];
  }
  
  // 2. 尝试匹配语言基础代码
  const fallbackLocale = Object.keys(translations).find(key => key.startsWith(baseCode + '-'));
  if (fallbackLocale) {
    return translations[fallbackLocale as Language];
  }
  
  // 3. 如果都没有匹配，返回默认语言
  return translations[defaultLanguage];
} 