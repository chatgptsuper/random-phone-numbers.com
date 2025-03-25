import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'
import Script from "next/script";
export const metadata: Metadata = {
  title: 'Japanese Phone Number Generator - Generate Random Japan Phone Numbers',
  description: 'Japanese Phone Number Generator. Create mobile numbers with valid carrier prefixes and proper formats for Japan.'
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About Japanese Phone Numbers
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
                Japanese Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Japanese mobile phone numbers follow a specific structure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>All numbers start with +81 (country code)</li>
                <li>Mobile numbers are typically 11 digits long</li>
                <li>Mobile numbers start with 070, 080, or 090</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Mobile Carrier Prefixes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>NTT Docomo: 090, 080, 070</div>
                <div>au (KDDI): 080, 090</div>
                <div>SoftBank: 070, 080, 090</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Regional Area Codes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>Tokyo: 03</div>
                <div>Osaka: 06</div>
                <div>Yokohama: 045</div>
                <div>Nagoya: 052</div>
                <div>Sapporo: 011</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Use Cases
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing applications for the Japanese market</li>
                <li>Validating Japanese phone formats</li>
                <li>Creating test data for Asian market applications</li>
                <li>Testing international SMS services</li>
                <li>Database testing with Japanese formats</li>
                <li>Mobile app development for Japan</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Phone Number Validation
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Mobile numbers must start with 070, 080, or 090</li>
                <li>Total length should be 11 digits (excluding country code)</li>
                <li>Area codes vary in length from 2-5 digits</li>
                <li>No spaces or special characters allowed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 