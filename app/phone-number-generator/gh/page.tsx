import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'
import Script from "next/script";
export const metadata: Metadata = {
  title: 'Ghana Phone Number Generator - Generate Random Ghana Phone Numbers',
  description: 'Ghana Phone Number Generator. Create MTN, Vodafone, AirtelTigo numbers with proper formats for testing and development.'
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About Ghana Phone Numbers
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
                Ghana Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Ghana phone numbers follow specific formats based on the mobile network operator:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>MTN: Starts with 024, 054, 055</li>
                <li>Vodafone: Starts with 020, 050</li>
                <li>AirtelTigo: Starts with 027, 057</li>
                <li>Glo: Starts with 026, 056, 058, 059</li>
                <li>All numbers are 9 digits long (not counting the country code)</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Network Operators
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>MTN - Largest network in Ghana</div>
                <div>Vodafone - Second largest operator</div>
                <div>AirtelTigo - Third major network</div>
                <div>Glo - A major operator in Ghana, with a growing presence</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Applications
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing mobile money applications</li>
                <li>E-commerce platform development</li>
                <li>SMS service testing</li>
                <li>Database and CRM system testing</li>
                <li>Form validation testing</li>
                <li>Customer support system testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 