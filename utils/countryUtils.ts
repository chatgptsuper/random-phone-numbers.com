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
    example: '+1 555 123 4567',
    description: 'US phone numbers are 10 digits long: 3-digit area code + 7-digit local number.'
  },
  uk: {
    example: '+44 7911 123456',
    description: 'UK mobile numbers start with 7 and are 10 digits long excluding country code.'
  },
  cn: {
    example: '+86 139 1234 5678',
    description: 'Chinese mobile numbers are 11 digits long, starting with 13-19.'
  },
  jp: {
    example: '+81 90 1234 5678',
    description: 'Japanese mobile numbers are 11 digits long, starting with 070, 080, or 090.'
  },
  sg: {
    example: '+65 8123 4567',
    description: 'Singapore mobile numbers are 8 digits long, starting with 8 or 9.'
  },
  gh: {
    example: '+233 24 123 4567',
    description: 'Ghana mobile numbers are 10 digits long, with network-specific prefixes like 024 (MTN), 020 (Vodafone), and 027 (AirtelTigo).'
  },
  ng: {
    example: '+234 803 123 4567',
    description: 'Nigerian mobile numbers are 11 digits long, with network-specific prefixes like 0803 (MTN), 0805 (Glo), 0802 (Airtel), and 0809 (9mobile).'
  },
  br: {
    example: '+55 (11) 98765 4321',
    description: 'Brazilian mobile numbers are 11 digits long (including area code), with mobile numbers starting with 9 after the area code. Major area codes include 11 (São Paulo) and 21 (Rio).'
  },
  ca: {
    example: '+1 (416) 123 4567',
    description: 'Canadian numbers follow the North American format with area codes like 416/647 (Toronto), 604 (Vancouver), and 514 (Montreal).'
  },
  au: {
    example: '+61 412 345 678',
    description: 'Australian mobile numbers start with 04 and are 10 digits long. Area codes include 02 (Sydney), 03 (Melbourne), and 07 (Brisbane).'
  },
  in: {
    example: "+91 98765 4321",
    description: "Indian mobile numbers are 10 digits long, starting with 7, 8, or 9. Major carriers include Jio, Airtel, Vodafone, BSNL, and Vi, with region-specific prefixes."
  },
  ph: {
    example: '+63 912 345 6789',
    description: 'Philippine mobile numbers are 10 digits long (including area code), starting with 9. Major carriers include Globe, Smart, and Sun, with region-specific prefixes like 917 (Globe) and 920 (Smart).'
  },
  my: {
    example: '+60 12 3456 789',
    description: 'Malaysian mobile numbers are 9 digits long (including area code), starting with 01. Major carriers include Maxis (012-019), Celcom (017-019), and Digi (010-019).'
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