export const locales = ['en', 'zh', 'es', 'fr', 'ja', 'de', 'hi', 'id', 'tl', 'pt'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  ja: '日本語',
  de: 'Deutsch',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
  tl: 'Tagalog',
  pt: 'Português'
}

export const localeMetadata: Record<Locale, {
  title: string,
  description: string,
  keywords: string,
  ogTitle: string,
  ogDescription: string
}> = {
  en: {
    title: 'Random Phone Number Generator - Free Phone Number Generator Tool',
    description: 'Generate random phone numbers for multiple countries. Create fake phone numbers for testing. Features include bulk generation, US/UK/international phone numbers, customizable formats and Excel export.',
    keywords: 'random phone numbers, phone number generator, random phone number, fake phone number generator, phone number maker, usa phone number generator',
    ogTitle: 'Random Phone Number Generator - Free Tool',
    ogDescription: 'Generate random phone numbers for multiple countries. Perfect for testing and development.'
  },
  zh: {
    title: '随机电话号码生成器 - 免费电话号码生成工具',
    description: '为多个国家生成随机电话号码。支持美国、英国、中国等国家的号码格式，可批量生成并导出Excel。适合开发测试使用。',
    keywords: '随机电话号码,电话号码生成器,手机号码生成器,测试号码,虚拟号码,批量生成电话号码',
    ogTitle: '随机电话号码生成器 - 免费工具',
    ogDescription: '生成多国随机电话号码，完美支持开发测试需求。'
  },
  es: {
    title: 'Generador de Números de Teléfono Aleatorios - Herramienta Gratuita',
    description: 'Genere números de teléfono aleatorios para diferentes países. Ideal para pruebas y desarrollo. Incluye generación masiva y exportación a Excel.',
    keywords: 'números de teléfono aleatorios,generador de números,números de teléfono falsos,generador de teléfonos,números para pruebas',
    ogTitle: 'Generador de Números de Teléfono - Herramienta Gratuita',
    ogDescription: 'Genere números de teléfono aleatorios para diferentes países. Perfecto para pruebas.'
  },
  fr: {
    title: 'Générateur de Numéros de Téléphone Aléatoires - Outil Gratuit',
    description: 'Générez des numéros de téléphone aléatoires pour différents pays. Idéal pour les tests. Inclut la génération en masse et l\'export Excel.',
    keywords: 'numéros de téléphone aléatoires,générateur de numéros,numéros de téléphone factices,générateur téléphone,numéros pour tests',
    ogTitle: 'Générateur de Numéros de Téléphone - Outil Gratuit',
    ogDescription: 'Générez des numéros de téléphone aléatoires pour différents pays. Parfait pour les tests.'
  },
  ja: {
    title: 'ランダム電話番号ジェネレーター - 無料ツール',
    description: '複数の国のランダムな電話番号を生成。テスト用の仮想電話番号を作成。一括生成やExcelエクスポートなどの機能を搭載。',
    keywords: 'ランダム電話番号,電話番号ジェネレーター,テスト用電話番号,仮想電話番号,一括生成',
    ogTitle: 'ランダム電話番号ジェネレーター - 無料ツール',
    ogDescription: '複数の国のランダムな電話番号を生成。テストに最適。'
  },
  de: {
    title: 'Zufällige Telefonnummer Generator - Kostenloses Tool',
    description: 'Generieren Sie zufällige Telefonnummern für verschiedene Länder. Ideal für Tests. Mit Massengenerierung und Excel-Export.',
    keywords: 'zufällige Telefonnummern,Telefonnummer Generator,Test Telefonnummern,Telefonnummer erstellen,Nummern für Tests',
    ogTitle: 'Telefonnummer Generator - Kostenloses Tool',
    ogDescription: 'Generieren Sie zufällige Telefonnummern für verschiedene Länder. Perfekt für Tests.'
  },
  hi: {
    title: 'रैंडम फोन नंबर जनरेटर - मुफ्त टूल',
    description: 'विभिन्न देशों के लिए रैंडम फोन नंबर जनरेट करें। टेस्टिंग के लिए फर्जी फोन नंबर बनाएं।',
    keywords: 'रैंडम फोन नंबर,फोन नंबर जनरेटर,फर्जी फोन नंबर,टेस्ट नंबर',
    ogTitle: 'फोन नंबर जनरेटर - मुफ्त टूल',
    ogDescription: 'विभिन्न देशों के लिए रैंडम फोन नंबर जनरेट करें।'
  },
  id: {
    title: 'Generator Nomor Telepon Acak - Alat Gratis',
    description: 'Hasilkan nomor telepon acak untuk berbagai negara. Buat nomor telepon palsu untuk pengujian.',
    keywords: 'nomor telepon acak,generator nomor telepon,nomor telepon palsu,nomor tes',
    ogTitle: 'Generator Nomor Telepon - Alat Gratis',
    ogDescription: 'Hasilkan nomor telepon acak untuk berbagai negara.'
  },
  tl: {
    title: 'Random Phone Number Generator - Libreng Tool',
    description: 'Gumawa ng random na numero ng telepono para sa iba\'t ibang bansa. Gumawa ng pekeng numero para sa testing.',
    keywords: 'random na numero ng telepono,phone number generator,pekeng numero ng telepono,test number',
    ogTitle: 'Phone Number Generator - Libreng Tool',
    ogDescription: 'Gumawa ng random na numero ng telepono para sa iba\'t ibang bansa.'
  },
  pt: {
    title: 'Gerador de Números de Telefone Aleatórios - Ferramenta Gratuita',
    description: 'Gere números de telefone aleatórios para vários países. Crie números falsos para testes.',
    keywords: 'números de telefone aleatórios,gerador de números,números de telefone falsos,números para teste',
    ogTitle: 'Gerador de Números de Telefone - Ferramenta Gratuita',
    ogDescription: 'Gere números de telefone aleatórios para vários países.'
  }
} 