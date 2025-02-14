import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Canada Phone Number Generator - Generate Random Canadian Phone Numbers',
  description: 'Generate random Canadian phone numbers with our free generator. Create phone numbers with proper area codes for all provinces and territories. Perfect for testing and development.',
  keywords: [
    'canada phone number generator',
    'canadian phone numbers',
    'random canada numbers',
    'toronto phone numbers',
    'vancouver phone numbers',
    'montreal phone numbers',
    'test phone numbers canada',
    'fake canadian numbers',
    'canadian area codes'
  ].join(', ')
}

export default function CanadaPage() {
  const country = getCountryInfo('ca')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Canadian Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Canadian phone numbers with valid area codes and proper formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="CA" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About Canadian Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Canadian Phone Number Format Guide</h2>
          <p>
            Canadian phone numbers follow the North American Numbering Plan (NANP):
          </p>
          <ul>
            <li>Format: +1 (XXX) XXX-XXXX</li>
            <li>Major area codes: 416/647 (Toronto), 604 (Vancouver)</li>
            <li>Quebec area codes: 514 (Montreal), 418 (Quebec City)</li>
            <li>All numbers are 10 digits (excluding country code)</li>
          </ul>
          
          <h3>Popular Area Codes</h3>
          <ul>
            <li>416/647/437 - Greater Toronto Area</li>
            <li>604/778 - Greater Vancouver Area</li>
            <li>514/438 - Montreal</li>
            <li>403/587 - Calgary</li>
            <li>613/343 - Ottawa</li>
            <li>905/289 - Greater Toronto Area (Suburbs)</li>
          </ul>

          <h3>Common Applications</h3>
          <p>
            Our Canadian phone number generator is frequently used for:
          </p>
          <ul>
            <li>Software development and testing</li>
            <li>CRM system implementation</li>
            <li>E-commerce platform testing</li>
            <li>Mobile app development</li>
            <li>Database testing</li>
          </ul>

          <h3>Additional Information</h3>
          <p>
            All generated numbers comply with the Canadian Numbering Plan and follow 
            CRTC (Canadian Radio-television and Telecommunications Commission) guidelines. 
            These numbers are for testing purposes only.
          </p>
        </div>
      </section>
    </main>
  )
} 