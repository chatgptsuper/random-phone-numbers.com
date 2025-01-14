import type { Metadata } from 'next'
import ThemeController from '../components/themeController'
import MainGenerator from '../components/mainGenerator'

export const metadata: Metadata = {
  title: 'Phone Number Generator',
  description: 'Generate random phone numbers for different countries',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Phone Number Generator',
  description: 'Generate random phone numbers for multiple countries including US, UK, China, India, and more.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Multiple country support',
    'Customizable format',
    'Bulk generation',
    'Excel export',
    'Copy to clipboard'
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThemeController />
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <MainGenerator />
      </main>
    </>
  )
}