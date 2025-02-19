import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Indian Phone Number Generator - Generate Random India Phone Numbers',
  description: 'Generate random Indian phone numbers with our free generator. Create mobile numbers with valid carrier prefixes and proper formats for India.',
  keywords: [
    'indian phone number generator',
    'india phone numbers',
    'random indian phone numbers',
    'fake indian phone numbers',
    'india mobile numbers'
  ].join(', ')
}

export default function INPage() {
  const country = getCountryInfo('in')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Indian Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Indian phone numbers with proper carrier prefixes and formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="IN" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Indian Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Indian Phone Number Format Guide</h2>
          <p>
            Indian mobile phone numbers follow a specific structure:
          </p>
          <ul>
            <li>All numbers start with +91 (country code)</li>
            <li>Mobile numbers are 10 digits long</li>
            <li>First digit is always between 6-9</li>
            <li>Different prefixes for different carriers and circles</li>
          </ul>
          
          <h3>Mobile Carrier Prefixes</h3>
          <ul>
            <li>Jio: 89, 90, 70, 71, 72</li>
            <li>Airtel: 98, 99, 80, 81, 82</li>
            <li>Vodafone: 97, 96, 95, 91</li>
            <li>BSNL: 94, 93, 91, 92</li>
            <li>Vi (formerly Vodafone Idea): 70, 71, 72</li>
            <li>MTNL: 91 (for Delhi and Mumbai region)</li>
          </ul>

          <h3>Other Phone Number Types</h3>
          <ul>
            <li>Fixed line numbers (landlines) may begin with area codes like 11, 22, 33, etc.</li>
            <li>VoIP and virtual numbers start with 8 (especially for businesses or non-geographic services)</li>
          </ul>

          <h3>Common Use Cases</h3>
          <p>
            Our Indian phone number generator is perfect for:
          </p>
          <ul>
            <li>Testing applications for the Indian market</li>
            <li>Validating Indian phone formats</li>
            <li>Creating test data for Asian market applications</li>
            <li>Testing international SMS services</li>
            <li>Database testing with Indian formats</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 