import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Canada Phone Number Generator - Generate Random Canadian Phone Numbers',
  description: 'Canada Phone Number Generator. Create phone numbers with proper area codes for all provinces and territories. Perfect for testing and development.'
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About Canadian Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
        </div>
      </section>

            {/* Additional Info for SEO */}
            <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Canadian Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Canadian phone numbers follow the North American Numbering Plan (NANP):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Format: +1 (XXX) XXX-XXXX</li>
                <li>Major area codes: 416/647 (Toronto), 604 (Vancouver)</li>
                <li>Quebec area codes: 514 (Montreal), 418 (Quebec City)</li>
                <li>All numbers are 10 digits (excluding country code)</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Popular Area Codes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>416/647/437 - Greater Toronto Area</div>
                <div>604/778 - Greater Vancouver Area</div>
                <div>514/438 - Montreal</div>
                <div>403/587 - Calgary</div>
                <div>613/343 - Ottawa</div>
                <div>905/289 - Greater Toronto Area (Suburbs)</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Applications
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Software development and testing</li>
                <li>CRM system implementation</li>
                <li>E-commerce platform testing</li>
                <li>Mobile app development</li>
                <li>Database testing</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Additional Information
              </h3>
              <p className="text-base-content/80">
                All generated numbers comply with the Canadian Numbering Plan and follow 
                CRTC (Canadian Radio-television and Telecommunications Commission) guidelines. 
                These numbers are for testing purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 