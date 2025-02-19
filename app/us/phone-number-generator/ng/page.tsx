import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Nigeria Phone Number Generator - Generate Random Nigerian Phone Numbers',
  description: 'Generate random Nigerian phone numbers with our free generator. Create MTN, Glo, Airtel, 9mobile numbers with proper formats for testing and development.',
  keywords: [
    'nigeria phone number generator',
    'nigerian mobile numbers',
    'random nigeria numbers',
    'mtn nigeria numbers',
    'glo mobile numbers',
    'airtel nigeria numbers',
    'test phone numbers nigeria',
    'fake nigerian numbers'
  ].join(', ')
}

export default function NigeriaPage() {
  const country = getCountryInfo('ng')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Nigerian Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Nigerian phone numbers with valid network prefixes and proper formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="NG" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Nigerian Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Nigerian Phone Number Format Guide</h2>
          <p>
            Nigerian phone numbers follow specific formats based on the network provider:
          </p>
          <ul>
            <li>MTN: Starts with 0703, 0706, 0803, 0806</li>
            <li>Glo: Starts with 0705, 0805, 0807</li>
            <li>Airtel: Starts with 0701, 0708, 0802, 0808</li>
            <li>9mobile: Starts with 0809, 0817, 0818</li>
          </ul>
          
          <h3>Major Network Providers</h3>
          <ul>
            <li>MTN Nigeria - Largest network</li>
            <li>Globacom (Glo) - Indigenous operator</li>
            <li>Airtel Nigeria - Pan-African network</li>
            <li>9mobile - Fourth major operator</li>
          </ul>

          <h3>Common Use Cases</h3>
          <p>
            Our Nigerian phone number generator is commonly used for:
          </p>
          <ul>
            <li>Testing fintech applications</li>
            <li>E-commerce platform development</li>
            <li>Mobile banking testing</li>
            <li>SMS gateway integration</li>
            <li>Customer database testing</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 