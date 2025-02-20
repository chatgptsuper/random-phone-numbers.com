import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Chinese Phone Number Generator - Generate Random China Phone Numbers',
  description: 'Generate random Chinese phone numbers with our free generator. Create mobile numbers with valid carrier prefixes and proper formats for China.',
  keywords: [
    'chinese phone number generator',
    'china phone numbers',
    'random chinese phone numbers',
    'fake chinese phone numbers',
    'china mobile numbers'
  ].join(', ')
}

export default function CNPage() {
  const country = getCountryInfo('cn')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Chinese Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Chinese phone numbers with proper carrier prefixes and formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="CN" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Chinese Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Chinese Phone Number Format Guide</h2>
          <p>
            Chinese mobile phone numbers follow a specific structure:
          </p>
          <ul>
            <li>All numbers start with +86 (country code)</li>
            <li>Mobile numbers are 11 digits long</li>
            <li>Starts with carrier-specific prefixes (13x, 14x, 15x, etc.)</li>
            <li>Different prefixes represent different carriers</li>
          </ul>
          
          <h3>Mobile Carrier Prefixes</h3>
          <ul>
            <li>China Mobile: 134-139, 150-153, 157-159, 182-184</li>
            <li>China Unicom: 130-132, 155-156, 185-186</li>
            <li>China Telecom: 133, 180-181, 189</li>
            <li>Virtual Operators: 170-171, 175-177, 178, 179</li>
          </ul>

          <h3>Common Use Cases</h3>
          <p>
            Our Chinese phone number generator is perfect for:
          </p>
          <ul>
            <li>Testing applications for the Chinese market</li>
            <li>Validating Chinese phone formats</li>
            <li>Creating test data for Asian market applications</li>
            <li>Testing international SMS services</li>
            <li>Database testing with Chinese formats</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 