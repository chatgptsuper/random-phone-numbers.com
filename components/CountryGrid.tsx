import Link from 'next/link'

const countries = [
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'cn', name: 'China', flag: '🇨🇳' },
  { code: 'in', name: 'India', flag: '🇮🇳' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵' },
  { code: 'sg', name: 'Singapore', flag: '🇸🇬' },
  { code: 'my', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'ph', name: 'Philippines', flag: '🇵🇭' },
  // ... 其他国家
]

export default function CountryGrid() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {countries.map(country => (
        <Link 
          key={country.code}
          href={`/phone-number-generator/${country.code}`}
          className="p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{country.flag}</span>
            <div>
              <h3 className="font-medium">{country.name}</h3>
              <p className="text-sm text-base-content/70">
                Generate {country.name} Numbers
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 