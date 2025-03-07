'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const countries = [
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'gh', name: 'Ghana', flag: '🇬🇭' },
  { code: 'cn', name: 'China', flag: '🇨🇳' },
  { code: 'in', name: 'India', flag: '🇮🇳' },
  { code: 'ng', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'br', name: 'Brazil', flag: '🇧🇷' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  { code: 'au', name: 'Australia', flag: '🇦🇺' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵' },
  { code: 'sg', name: 'Singapore', flag: '🇸🇬' },
  { code: 'my', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'ph', name: 'Philippines', flag: '🇵🇭' },

  // ... 其他国家
]

// 导出国家列表以便在其他组件中使用
export { countries }

export default function CountryGrid() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchTerm = searchParams.get('search') || ''
  const [filteredCountries, setFilteredCountries] = useState(countries)
  
  // 当搜索词变化时过滤国家 - 同时支持名称和代码搜索
  useEffect(() => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      const filtered = countries.filter(country => 
        country.name.toLowerCase().includes(searchLower) || 
        country.code.toLowerCase().includes(searchLower)
      )
      setFilteredCountries(filtered)
    } else {
      setFilteredCountries(countries)
    }
  }, [searchTerm])

  return (
    <div>
      {searchTerm && (
        <div className="mb-6 text-center">
          <p className="text-base-content/80">
            Showing results for: <span className="font-semibold">{searchTerm}</span>
          </p>
          <button 
            onClick={() => router.push('/phone-number-generator')}
            className="text-primary hover:underline mt-2"
          >
            Clear search
          </button>
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredCountries.map(country => (
          <Link
            key={country.code}
            href={`/phone-number-generator/${country.code}`}
            className="flex flex-col items-center p-4 bg-base-200 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <span className="text-3xl mb-2">{country.flag}</span>
            <span className="text-center font-medium">{country.name}</span>
            <span className="text-xs text-base-content/60">({country.code})</span>
          </Link>
        ))}
        
        {filteredCountries.length === 0 && (
          <div className="col-span-full text-center py-8">
            <p className="text-base-content/70">No countries found matching &quot;{searchTerm}&quot;</p>
          </div>
        )}
      </div>
    </div>
  )
}