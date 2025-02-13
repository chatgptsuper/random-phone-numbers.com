import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Singapore Phone Number Generator - Generate Random Singapore Phone Numbers',
  description: 'Generate random Singapore phone numbers with our free generator. Create mobile numbers with valid carrier prefixes and proper formats for Singapore.',
  keywords: [
    'singapore phone number generator',
    'singapore phone numbers',
    'random singapore phone numbers',
    'fake singapore phone numbers',
    'singapore mobile numbers',
    'singapore cell phone numbers',
    'sg phone generator',
    'singapore number format'
  ].join(', ')
}

export default function SGPage() {
  const country = getCountryInfo('sg')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Singapore Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Singapore phone numbers with proper carrier prefixes and formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="SG" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Singapore Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Singapore Phone Number Format Guide</h2>
          <p>
            Singapore mobile phone numbers follow a specific structure:
          </p>
          <ul>
            <li>All numbers start with +65 (country code)</li>
            <li>Mobile numbers are 8 digits long</li>
            <li>Mobile numbers start with 8 or 9</li>
            <li>Different prefixes for different carriers and services</li>
          </ul>
          
          <h3>Mobile Number Prefixes</h3>
          <ul>
            <li>Singtel: 8xxx xxxx, 9xxx xxxx</li>
            <li>StarHub: 8xxx xxxx, 9xxx xxxx</li>
            <li>M1: 8xxx xxxx, 9xxx xxxx</li>
            <li>Virtual Operators: 8xxx xxxx, 9xxx xxxx</li>
          </ul>

          <h3>Number Types</h3>
          <ul>
            <li>Mobile: 8xxx xxxx, 9xxx xxxx</li>
            <li>Fixed Line: 6xxx xxxx</li>
            <li>VoIP: 3xxx xxxx</li>
            <li>Pager: 7xxx xxxx (legacy)</li>
          </ul>

          <h3>Common Use Cases</h3>
          <p>
            Our Singapore phone number generator is perfect for:
          </p>
          <ul>
            <li>Testing applications for the Singapore market</li>
            <li>Validating Singapore phone formats</li>
            <li>Creating test data for Southeast Asian applications</li>
            <li>Testing international SMS services</li>
            <li>Database testing with Singapore formats</li>
            <li>Mobile app development for Singapore</li>
          </ul>

          <h3>Phone Number Validation</h3>
          <p>
            When validating Singapore phone numbers, consider these rules:
          </p>
          <ul>
            <li>Mobile numbers must start with 8 or 9</li>
            <li>Total length should be 8 digits (excluding country code)</li>
            <li>No spaces or special characters in the actual number</li>
            <li>Country code (+65) is optional but commonly used</li>
          </ul>

          <h3>Business Usage</h3>
          <p>
            Singapore phone numbers are essential for:
          </p>
          <ul>
            <li>E-commerce platforms in Southeast Asia</li>
            <li>Regional business applications</li>
            <li>Financial services testing</li>
            <li>Telecommunications software</li>
            <li>Customer service systems</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 