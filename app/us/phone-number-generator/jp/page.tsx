import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Japanese Phone Number Generator - Generate Random Japan Phone Numbers',
  description: 'Generate random Japanese phone numbers with our free generator. Create mobile numbers with valid carrier prefixes and proper formats for Japan.',
  keywords: [
    'japanese phone number generator',
    'japan phone numbers',
    'random japanese phone numbers',
    'fake japanese phone numbers',
    'japan mobile numbers',
    'japan cell phone numbers',
    'japanese mobile generator',
    'tokyo phone numbers'
  ].join(', ')
}

export default function JPPage() {
  const country = getCountryInfo('jp')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Japanese Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Japanese phone numbers with proper carrier prefixes and formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="JP" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Japanese Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Japanese Phone Number Format Guide</h2>
          <p>
            Japanese mobile phone numbers follow a specific structure:
          </p>
          <ul>
            <li>All numbers start with +81 (country code)</li>
            <li>Mobile numbers are typically 11 digits long</li>
            <li>Mobile numbers start with 070, 080, or 090</li>
          </ul>
          
          <h3>Mobile Carrier Prefixes</h3>
          <ul>
            <li>NTT Docomo: 090, 080, 070</li>
            <li>au (KDDI): 080, 090</li>
            <li>SoftBank: 070, 080, 090</li>
          </ul>

          <h3>Regional Area Codes</h3>
          <ul>
            <li>Tokyo: 03</li>
            <li>Osaka: 06</li>
            <li>Yokohama: 045</li>
            <li>Nagoya: 052</li>
            <li>Sapporo: 011</li>
          </ul>

          <h3>Common Use Cases</h3>
          <p>
            Our Japanese phone number generator is perfect for:
          </p>
          <ul>
            <li>Testing applications for the Japanese market</li>
            <li>Validating Japanese phone formats</li>
            <li>Creating test data for Asian market applications</li>
            <li>Testing international SMS services</li>
            <li>Database testing with Japanese formats</li>
            <li>Mobile app development for Japan</li>
          </ul>

          <h3>Phone Number Validation</h3>
          <p>
            When validating Japanese phone numbers, consider these rules:
          </p>
          <ul>
            <li>Mobile numbers must start with 070, 080, or 090</li>
            <li>Total length should be 11 digits (excluding country code)</li>
            <li>Area codes vary in length from 2-5 digits</li>
            <li>No spaces or special characters allowed</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 