import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'Brazil Phone Number Generator - Generate Random Brazilian Phone Numbers',
  description: 'Generate random Brazilian phone numbers with our free generator. Create mobile and landline numbers with proper area codes for testing. Support for all Brazilian states and major cities.',
  keywords: [
    'brazil phone number generator',
    'brazilian mobile numbers',
    'random brazil numbers',
    'sao paulo phone numbers',
    'rio phone numbers',
    'brazilian area codes',
    'test phone numbers brazil',
    'fake brazilian numbers',
    'numeros de telefone brasil'
  ].join(', ')
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
          <h2 className="text-3xl font-semibold mb-8">
            About Brazilian Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>Brazilian Phone Number Format Guide</h2>
          <p>
            Brazilian phone numbers follow specific formats based on region and type:
          </p>
          <ul>
            <li>Mobile numbers start with 9</li>
            <li>Area codes: 11 (São Paulo), 21 (Rio), 31 (Belo Horizonte)</li>
            <li>Mobile numbers are 9 digits</li>
            <li>Total length: 11 digits (including area code)</li>
            <li>Format: (XX) 9XXXX-XXXX</li>
          </ul>
          
          <h3>Major Area Codes</h3>
          <ul>
            <li>11 - São Paulo metropolitan area</li>
            <li>21 - Rio de Janeiro</li>
            <li>31 - Belo Horizonte</li>
            <li>41 - Curitiba</li>
            <li>51 - Porto Alegre</li>
            <li>61 - Brasília</li>
          </ul>

          <h3>Common Applications</h3>
          <p>
            Our Brazilian phone number generator is frequently used for:
          </p>
          <ul>
            <li>Testing Brazilian e-commerce platforms</li>
            <li>Mobile app development</li>
            <li>CRM system testing</li>
            <li>Database testing</li>
            <li>Form validation</li>
          </ul>

          <h3>Additional Information</h3>
          <p>
            All generated numbers follow ANATEL (Brazilian National Telecommunications Agency) 
            formatting rules. These numbers are for testing purposes only and are not 
            intended for actual use.
          </p>
        </div>
      </section>
    </main>
  )
} 