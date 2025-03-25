import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Nigeria Phone Number Generator - Generate Random Nigerian Phone Numbers',
  description: 'Nigeria Phone Number Generator. Generate random Nigerian phone number with valid area codes. Perfect for testing and development purposes.'
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About Nigerian Phone Numbers
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
                Nigerian Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Nigerian phone numbers follow specific formats based on the network provider:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>MTN: Starts with 0703, 0706, 0803, 0806</li>
                <li>Glo: Starts with 0705, 0805, 0807</li>
                <li>Airtel: Starts with 0701, 0708, 0802, 0808</li>
                <li>9mobile: Starts with 0809, 0817, 0818</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Major Network Providers
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>MTN Nigeria - Largest network</div>
                <div>Globacom (Glo) - Indigenous operator</div>
                <div>Airtel Nigeria - Pan-African network</div>
                <div>9mobile - Fourth major operator</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Use Cases
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing fintech applications</li>
                <li>E-commerce platform development</li>
                <li>Mobile banking testing</li>
                <li>SMS gateway integration</li>
                <li>Customer database testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 