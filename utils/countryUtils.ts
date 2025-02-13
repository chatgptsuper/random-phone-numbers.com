import { countryCode } from '@/data/countryCode'

// 定义国家数据的接口
interface CountryData {
  prefix: string
  length: number
  suffix: string[]
  format?: string
  flag?: string
  name?: string
}

// 定义完整的国家信息接口
export interface CountryInfo {
  code: string
  prefix: string
  length: number
  suffix: string[]
  format: string
  flag: string
  name: string
  example: string
  description: string
}

// 添加国家详细信息映射
const countryDetails: Record<string, Partial<CountryInfo>> = {
  us: {
    example: '+1 (555) 123-4567',
    description: 'US phone numbers consist of a 3-digit area code and a 7-digit local number.'
  },
  uk: {
    example: '+44 7911 123456',
    description: 'UK mobile numbers start with 07, followed by 9 more digits.'
  },
  cn: {
    example: '+86 138 1234 5678',
    description: 'Chinese mobile numbers are 11 digits long, starting with 13-19.'
  },
  jp: {
    example: '+81 90-1234-5678',
    description: 'Japanese mobile numbers are 11 digits long, starting with 070, 080, or 090.'
  },
  sg: {
    example: '+65 8123 4567',
    description: 'Singapore mobile numbers are 8 digits long, starting with 8 or 9.'
  }
}

export function getCountryInfo(code: string): CountryInfo {
  const countryKey = code.toUpperCase()
  const countryData = countryCode[countryKey as keyof typeof countryCode] as CountryData
  const details = countryDetails[code.toLowerCase()]
  
  if (!countryData) {
    throw new Error(`Country code ${code} not found`)
  }

  // 构建默认格式
  const defaultFormat = `+${countryData.prefix} ${'X'.repeat(countryData.length)}`

  return {
    code: countryKey,
    prefix: countryData.prefix,
    length: countryData.length,
    suffix: countryData.suffix,
    format: countryData.format || defaultFormat,
    flag: countryData.flag || '🏳️',
    name: countryData.name || code.toUpperCase(),
    example: details?.example || defaultFormat.replace(/X/g, '0'),
    description: details?.description || `${code.toUpperCase()} phone numbers follow standard international format.`
  }
} 