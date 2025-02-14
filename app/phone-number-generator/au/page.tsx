import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Australia Phone Number Generator - Generate Random Australian Phone Numbers',
  description: 'Generate random Australian phone numbers with our free generator. Create mobile and landline numbers with proper area codes for testing and development. Perfect for testing applications, databases, and CRM systems.',
  keywords: [
    'australia phone number generator',
    'australian mobile numbers',
    'random australia numbers',
    'sydney phone numbers',
    'melbourne phone numbers',
    'australian area codes',
    'test phone numbers australia',
    'fake australian numbers'
  ].join(', ')
}

export default function AustraliaPage() {
  const country = getCountryInfo('au')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Australian Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Australian phone numbers with valid area codes and proper formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="AU" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Australian Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Australian Phone Number Format Guide</h2>
          <p>
            Australian phone numbers follow specific formats for mobile and landline numbers:
          </p>
          <ul>
            <li>Mobile numbers start with 04</li>
            <li>Area codes: 02 (Sydney), 03 (Melbourne), 07 (Brisbane)</li>
            <li>Mobile numbers are 10 digits</li>
            <li>Landline numbers are 8 digits plus area code</li>
          </ul>
          
          <h3>Major Area Codes</h3>
          <ul>
            <li>02 - Sydney, Canberra</li>
            <li>03 - Melbourne, Hobart</li>
            <li>07 - Brisbane, Gold Coast</li>
            <li>08 - Adelaide, Perth, Darwin</li>
          </ul>

          <h3>Uses for Australian Phone Numbers</h3>
          <p>
            Our Australian phone number generator is commonly used for:
          </p>
          <ul>
            <li>Testing Australian-focused applications</li>
            <li>Validating phone number input fields</li>
            <li>Creating sample data for CRM systems</li>
            <li>Testing SMS and calling features</li>
            <li>Database testing with Australian formats</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 