import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Ghana Phone Number Generator - Generate Random Ghana Phone Numbers',
  description: 'Generate random Ghana phone numbers with our free generator. Create MTN, Vodafone, AirtelTigo numbers with proper formats for testing and development.',
  keywords: [
    'ghana phone number generator',
    'ghana mobile numbers',
    'random ghana numbers',
    'mtn ghana numbers',
    'vodafone ghana numbers',
    'airteltigo numbers',
    'test phone numbers ghana',
    'fake ghana numbers'
  ].join(', ')
}

export default function GhanaPage() {
  const country = getCountryInfo('gh')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Ghana Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Ghana phone numbers with valid network prefixes and proper formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="GH" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Ghana Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Ghana Phone Number Format Guide</h2>
          <p>
            Ghana phone numbers follow specific formats based on the mobile network operator:
          </p>
          <ul>
            <li>MTN: Starts with 024, 054, 055</li>
            <li>Vodafone: Starts with 020, 050</li>
            <li>AirtelTigo: Starts with 027, 057</li>
            <li>All numbers are 10 digits long</li>
          </ul>
          
          <h3>Network Operators</h3>
          <ul>
            <li>MTN - Largest network in Ghana</li>
            <li>Vodafone - Second largest operator</li>
            <li>AirtelTigo - Third major network</li>
          </ul>

          <h3>Common Applications</h3>
          <p>
            Our Ghana phone number generator is frequently used for:
          </p>
          <ul>
            <li>Testing mobile money applications</li>
            <li>E-commerce platform development</li>
            <li>SMS service testing</li>
            <li>Database and CRM system testing</li>
            <li>Form validation testing</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 