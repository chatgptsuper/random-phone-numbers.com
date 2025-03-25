import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'
import Script from "next/script";
export const metadata: Metadata = {
  title: 'Chinese Phone Number Generator - Generate Random China Phone Numbers',
  description: 'Chinese Phone Number Generator. Create mobile numbers with valid carrier prefixes and proper formats for China.'
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About Chinese Phone Numbers
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
                Chinese Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Chinese mobile phone numbers follow a specific structure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>All numbers start with +86 (country code)</li>
                <li>Mobile numbers are 11 digits long</li>
                <li>Starts with carrier-specific prefixes (13x, 14x, 15x, etc.)</li>
                <li>Different prefixes represent different carriers</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Mobile Carrier Prefixes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>China Mobile: 134-139, 150-153, 157-159, 182-184</div>
                <div>China Unicom: 130-132, 155-156, 185-186</div>
                <div>China Telecom: 133, 180-181, 189</div>
                <div>Virtual Operators: 170-171, 175-177, 178, 179</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Use Cases
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing applications for the Chinese market</li>
                <li>Validating Chinese phone formats</li>
                <li>Creating test data for Asian market applications</li>
                <li>Testing international SMS services</li>
                <li>Database testing with Chinese formats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 