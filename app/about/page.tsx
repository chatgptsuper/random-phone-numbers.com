import { Metadata } from 'next'
import ThemeController from '@/components/themeController'

export const metadata: Metadata = {
  title: 'About Phone Number Generator - Free Random Phone Number Generator Tool',
  description: 'Learn about our free phone number generator tool. Generate random phone numbers for testing and development purposes across multiple countries.',
  keywords: [
    'about phone number generator',
    'phone number generator tool',
    'random number generator about',
    'phone number testing tool',
    'development phone numbers'
  ].join(', ')
}

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      <div className="container mx-auto px-4 py-12 prose max-w-3xl">
        <h1>About Phone Number Generator</h1>
        
        <section>
          <h2>Our Mission</h2>
          <p>
            Phone Number Generator is dedicated to providing developers, testers, and businesses with a high-quality phone number generation tool.
            Our goal is to simplify the process of creating test data and improve development efficiency.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>Support for multiple country phone number formats</li>
            <li>Random generation following country-specific rules</li>
            <li>Bulk generation and export functionality</li>
            <li>Completely free to use</li>
            <li>No registration required</li>
          </ul>
        </section>

        <section>
          <h2>Why Choose Us</h2>
          <ul>
            <li>Accurate number formats</li>
            <li>Real-time generation</li>
            <li>User-friendly interface</li>
            <li>Bulk operations support</li>
            <li>Regular updates and maintenance</li>
          </ul>
        </section>
      </div>
    </main>
  )
} 