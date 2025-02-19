import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'UK Phone Number Generator - Create British Phone Numbers',
  description: 'Generate random UK phone numbers with our free British phone number generator. Create mobile and landline numbers with proper area codes and formats.',
  keywords: [
    'uk phone number generator',
    'british phone number generator',
    'random uk phone numbers',
    'fake uk phone numbers',
    'british mobile numbers',
    'uk mobile numbers'
  ].join(', ')
}

export default function UKPage() {
  const country = getCountryInfo('uk')

  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            UK Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random British phone numbers with proper area codes and formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="UK" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About UK Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Understanding UK Phone Number Formats</h2>
          <p>
            UK phone numbers follow different formats depending on their type:
          </p>
          <ul>
            <li>Mobile numbers start with &apos;07&apos; followed by 9 digits</li>
            <li>London landlines start with &apos;020&apos;</li>
            <li>Other geographic numbers start with &apos;01&apos; or &apos;02&apos;</li>
            <li>Non-geographic numbers use &apos;03&apos;</li>
            <li>Premium rate services use &apos;09&apos;</li>
          </ul>
          
          <h3>UK Mobile Number Prefixes</h3>
          <ul>
            <li>071-075 - Various mobile networks</li>
            <li>077-079 - Major mobile carriers</li>
            <li>07624 - Isle of Man</li>
            <li>07797/07829 - Jersey</li>
            <li>07911 - Guernsey</li>
          </ul>

          <h3>Common Applications</h3>
          <p>
            Our UK phone number generator is ideal for:
          </p>
          <ul>
            <li>Testing UK-focused applications</li>
            <li>Validating British phone formats</li>
            <li>Creating test data for UK businesses</li>
            <li>Testing SMS services</li>
            <li>CRM system testing</li>
          </ul>

          <h3>UK Phone Number Rules</h3>
          <ul>
            <li>Don&apos;t start with 0</li>
            <li>Can&apos;t contain spaces</li>
            <li>Shouldn&apos;t include special characters</li>
            <li>Must&apos;t exceed length limit</li>
            <li>Can&apos;t use invalid prefixes</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 