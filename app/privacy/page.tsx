import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Random Phone Numbers - Privacy Policy',
  description: 'Privacy policy for Random Phone Numbers. Learn how we handle your data and protect your privacy when using our phone number generator.'
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full relative bg-base-100">
      <ThemeController />
      
      {/* Header */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            How we handle your data and protect your privacy
          </p>
        </div>
      </section>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Data Collection</h2>
            <p className="text-base-content/80 mb-4">
              We only collect essential usage data to improve our service and ensure proper functionality:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base-content/80">
              <li>Access logs (IP address, browser type, referring page)</li>
              <li>Basic usage statistics (pages visited, features used)</li>
              <li>Error reports (to identify and fix issues)</li>
              <li>Device information (screen size, operating system)</li>
            </ul>
            <p className="text-base-content/80 mt-4">
              We do not collect or store any personally identifiable information or the phone numbers you generate.
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Cookie Usage</h2>
            <p className="text-base-content/80 mb-4">
              We use necessary cookies to improve user experience and provide essential functionality:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base-content/80">
              <li>Theme preferences (light/dark mode settings)</li>
              <li>Essential functionality cookies (session management)</li>
              <li>Google Analytics cookies (anonymous usage statistics)</li>
              <li>Performance cookies (to optimize site speed and responsiveness)</li>
            </ul>
            <p className="text-base-content/80 mt-4">
              You can control cookie settings through your browser preferences. Disabling certain cookies may affect site functionality.
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Data Security</h2>
            <p className="text-base-content/80 mb-4">
              We implement multiple measures to protect user data and ensure security:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base-content/80">
              <li>HTTPS encryption for all data transmission</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Data minimization practices (we only collect what&apos;s necessary)</li>
              <li>Regular updates to address security concerns</li>
            </ul>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Third-Party Services</h2>
            <p className="text-base-content/80 mb-4">
              We use the following third-party services that may collect data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base-content/80">
              <li>Google Analytics (for anonymous usage statistics)</li>
              <li>Vercel (for hosting and performance monitoring)</li>
              <li>CloudFlare (for content delivery and security)</li>
            </ul>
            <p className="text-base-content/80 mt-4">
              Each third-party service has its own privacy policy governing how they handle data.
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Your Rights</h2>
            <p className="text-base-content/80 mb-4">
              Under various privacy regulations (including GDPR), you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base-content/80">
              <li>Right to access any data we hold about you</li>
              <li>Right to request deletion of your data</li>
              <li>Right to object to data processing</li>
              <li>Right to data portability</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-base-content/80 mt-4">
              To exercise any of these rights, please contact us at privacy@randomnumbers.example.com
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}