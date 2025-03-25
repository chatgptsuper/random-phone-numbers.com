import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'
import Script from "next/script";
export const metadata: Metadata = {
  title: 'Brazil Phone Number Generator - Generate Random Brazilian Phone Numbers',
  description: 'Brazil Phone Number Generator. Create mobile and landline numbers with proper area codes for testing. Support for all Brazilian states and major cities.'
}

export default function BrazilPage() {
  const country = getCountryInfo('br')
  
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Brazilian Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Brazilian phone numbers with valid area codes and proper formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="BR" />
        </div>
      </section>



      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About Brazilian Phone Numbers
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
                Brazilian Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Brazilian phone numbers follow specific formats based on region and type:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Mobile numbers always start with 9</li>
                <li>Area codes: 11 (São Paulo), 21 (Rio), 31 (Belo Horizonte), 41 (Curitiba), 51 (Porto Alegre), 61 (Brasília)</li>
                <li>Mobile numbers are 9 digits long, starting with 9</li>
                <li>Total length: 11 digits (including area code)</li>
                <li>Format: (XX) 9XXXX-XXXX</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Major Area Codes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>11 - São Paulo metropolitan area</div>
                <div>21 - Rio de Janeiro</div>
                <div>31 - Belo Horizonte</div>
                <div>41 - Curitiba</div>
                <div>51 - Porto Alegre</div>
                <div>61 - Brasília</div>
                <div>85 - Fortaleza</div>
                <div>82 - Maceió</div>
                <div>75 - Salvador</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Applications
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing Brazilian e-commerce platforms</li>
                <li>Mobile app development</li>
                <li>CRM system testing</li>
                <li>Database testing</li>
                <li>Form validation</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Additional Information
              </h3>
              <p className="text-base-content/80">
                All generated numbers follow ANATEL (Brazilian National Telecommunications Agency) 
                formatting rules. These numbers are for testing purposes only and are not 
                intended for actual use.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
} 