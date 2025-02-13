import { Metadata } from 'next'
import ThemeController from '@/components/themeController'

export const metadata: Metadata = {
  title: 'Privacy Policy - Phone Number Generator',
  description: 'Privacy policy for Phone Number Generator. Learn how we handle your data and protect your privacy when using our phone number generation tool.',
  keywords: [
    'privacy policy',
    'data protection',
    'user privacy',
    'phone number generator privacy',
    'data handling policy'
  ].join(', ')
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      <div className="container mx-auto px-4 py-12 prose max-w-3xl">
        <h1>Privacy Policy</h1>
        
        <section>
          <h2>Data Collection</h2>
          <p>We only collect essential usage data, including:</p>
          <ul>
            <li>Access logs</li>
            <li>Basic usage statistics</li>
            <li>Error reports</li>
          </ul>
        </section>

        <section>
          <h2>Cookie Usage</h2>
          <p>
            We use necessary cookies to improve user experience, including:
          </p>
          <ul>
            <li>Theme preferences</li>
            <li>Essential functionality cookies</li>
            <li>Google Analytics cookies</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement multiple measures to protect user data:
          </p>
          <ul>
            <li>HTTPS encryption</li>
            <li>Regular security audits</li>
            <li>Access controls</li>
          </ul>
        </section>
      </div>
    </main>
  )
} 