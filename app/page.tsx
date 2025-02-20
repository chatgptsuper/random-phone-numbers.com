// 定义主页组件，包含主题切换和主生成器组件

import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import CountryGrid from '@/components/CountryGrid'
import Link from 'next/link'

// 定义热门国家数据
const popularCountries = [
  {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    format: '+1 (XXX) XXX-XXXX'
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    format: '+44 XXXX XXXXXX'
  },
  {
    code: 'gh',
    name: 'Ghana',
    flag: '🇬🇭',
    format: '+233 XX XXX XXXX'
  },
  {
    code: 'cn',
    name: 'China',
    flag: '🇨🇳',
    format: '+86 XXX XXXX XXXX'
  },
  {
    code: 'in',
    name: 'India',
    flag: '🇮🇳',
    format: '+91 XXXXX XXXXX'
  },
  {
    code: 'jp',
    name: 'Japan',
    flag: '🇯🇵',
    format: '+81 XX XXXX XXXX'
  },
  {
    code: 'ng',
    name: 'Nigeria',
    flag: '🇳🇬',
    format: '+234 XXX XXX XXXX'
  },
  {
    code: 'sg',
    name: 'Singapore',
    flag: '🇸🇬',
    format: '+65 XXXX XXXX'
  },
  {
    code: 'br',
    name: 'Brazil',
    flag: '🇧🇷',
    format: '+55 (XX) 9XXXX-XXXX'
  },
  {
    code: 'ca',
    name: 'Canada',
    flag: '🇨🇦',
    format: '+1 (XXX) XXX-XXXX'
  },
  {
    code: 'au',
    name: 'Australia',
    flag: '🇦🇺',
    format: '+61 4XX XXX XXX'
  }
]

// 添加静态 metadata
export const metadata: Metadata = {
  title: 'Random Phone Numbers - Free Phone Number Generator',
  description: 'Generate random phone numbers for multiple countries. Create fake phone numbers for testing. Features include bulk generation, US/UK/international phone numbers, customizable formats and Excel export.',
  keywords: [
    'random phone numbers',
    'phone number generator',
    'fake phone numbers',
    'international phone numbers',
    'test phone numbers'
  ].join(', ')
}

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      {/* Hero Section - 增加视觉冲击力 */}
      <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Random Phone Number Generator
          </h1>
          <p className="text-2xl text-center text-base-content/80 max-w-3xl mx-auto mb-12">
            Generate random phone numbers for any country with proper formats and area codes. 
            Perfect for testing, development, and data sampling needs.
          </p>
          {/* 添加快速开始按钮 */}
          <div className="flex justify-center gap-4">
            <Link 
              href="/phone-number-generator/us" 
              className="btn btn-primary btn-lg"
            >
              Start with US Numbers
            </Link>
            <Link 
              href="#countries" 
              className="btn btn-outline btn-lg"
            >
              View All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Countries Section - 大block设计更醒目 */}
      <section id="countries" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your Country
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Select from our wide range of country-specific phone number generators
            </p>
          </div>
          
          {/* 热门国家 - 大图标设计 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularCountries.map(country => (
              <Link
                key={country.code}
                href={`/phone-number-generator/${country.code}`}
                className="group p-8 bg-base-200 rounded-xl hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {country.flag}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                  <p className="text-base-content/70">{country.format}</p>
                  <span className="mt-4 inline-flex items-center text-primary">
                    Generate Numbers 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 其他国家网格 */}
          <div className="bg-base-200 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              More Countries
            </h3>
            <CountryGrid />
          </div>
        </div>
      </section>

      {/* Features Section - 增加视觉层次 */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-base-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">Country-Specific Formats</h3>
              <p className="text-base-content/80">Each country generator follows local phone number rules and formats, ensuring realistic results.</p>
            </div>
            <div className="bg-base-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Bulk Generation</h3>
              <p className="text-base-content/80">Generate multiple phone numbers at once and export them to Excel for easy use.</p>
            </div>
            <div className="bg-base-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Format Options</h3>
              <p className="text-base-content/80">Customize output with options like country codes, plus signs, and different separators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-base-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Software Testing</h3>
              <p>Generate test data for applications that handle phone numbers.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Database Population</h3>
              <p>Fill databases with realistic phone number samples.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">UI Development</h3>
              <p>Test phone number display formats in user interfaces.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Form Testing</h3>
              <p>Validate phone number input fields and forms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq" /> 
              <div className="collapse-title text-xl font-medium">
                Are these phone numbers real?
              </div>
              <div className="collapse-content">
                <p>No, these are randomly generated numbers following each country&apos;s phone number format rules. They should not be used to contact real people.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium">
                Can I use these phone numbers for testing?
              </div>
              <div className="collapse-content">
                <p>Yes! These numbers are perfect for testing applications, forms, and databases that need to handle phone numbers.</p>
              </div>
            </div>
            {/* Add more FAQ items */}
          </div>
        </div>
      </section>
    </main>
  )
}