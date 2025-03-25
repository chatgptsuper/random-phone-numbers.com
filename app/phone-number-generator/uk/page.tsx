import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'
import CountryInfo from '@/components/CountryInfo'
import { getCountryInfo } from '@/utils/countryUtils'

export const metadata: Metadata = {
  title: 'UK Phone Number Generator - Generate Random UK Phone Number',
  description: 'Free UK phone number generator. Generate random UK phone number with valid area codes. Perfect for testing and development purposes.'
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About UK Phone Numbers
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
                Understanding UK Phone Number Formats
              </h2>
              <p className="text-base-content/80 mb-4">
                UK phone numbers follow different formats depending on their type:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Mobile numbers start with &apos;07&apos; followed by 9 digits</li>
                <li>London landlines start with &apos;020&apos;</li>
                <li>Other geographic numbers start with &apos;01&apos; or &apos;02&apos;</li>
                <li>Non-geographic numbers use &apos;03&apos;</li>
                <li>Premium rate services use &apos;09&apos;</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                UK Mobile Number Prefixes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>071-075 - Various mobile networks</div>
                <div>077-079 - Major mobile carriers</div>
                <div>07624 - Isle of Man</div>
                <div>07797/07829 - Jersey</div>
                <div>07911 - Guernsey</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Applications
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing UK-focused applications</li>
                <li>Validating British phone formats</li>
                <li>Creating test data for UK businesses</li>
                <li>Testing SMS services</li>
                <li>CRM system testing</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                UK Phone Number Rules
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Don&apos;t start with 0</li>
                <li>Can&apos;t contain spaces</li>
                <li>Shouldn&apos;t include special characters</li>
                <li>Must&apos;t exceed length limit</li>
                <li>Can&apos;t use invalid prefixes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 