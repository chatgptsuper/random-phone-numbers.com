import type { CountryInfo } from '@/utils/countryUtils'

interface CountryInfoProps {
  country: CountryInfo
}

export default function CountryInfo({ country }: CountryInfoProps) {
  return (
    <div className="prose max-w-none">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl">{country.flag}</span>
        <div>
          <h3 className="text-2xl font-semibold mb-2">{country.name} Phone Format</h3>
          <p className="text-base-content/70">{country.format}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-base-100 p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Example</h4>
          <p className="font-mono text-lg">{country.example}</p>
        </div>
        <div className="bg-base-100 p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Format Details</h4>
          <p>{country.description}</p>
        </div>
      </div>
    </div>
  )
} 