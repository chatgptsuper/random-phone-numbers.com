import { Metadata } from 'next'
import ThemeController from '@/components/themeController'

export const metadata: Metadata = {
  title: 'Contact Us - Random Phone Numbers Generator',
  description: 'Contact the Random Phone Numbers Generator team. Get support or share feedback about our phone number generation tool.',
  keywords: [
    'contact random phone numbers',
    'phone number generator contact',
    'support',
    'feedback',
    'help'
  ].join(', ')
}

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      
      <div className="container mx-auto px-4 py-12 prose max-w-3xl">
        <h1>Contact Us</h1>
        
        <section>
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We&apos;d love to hear from you. 
            Please email us at:
          </p>
          
          <div className="my-8 p-6 bg-base-200 rounded-lg text-center">
            <a 
              href="mailto:dthghjhe@gmail.com" 
              className="text-xl font-medium text-primary hover:underline"
            >
              dthghjhe@gmail.com
            </a>
          </div>

          <h3>What We Can Help With</h3>
          <ul>
            <li>Technical support for using the generator</li>
            <li>Questions about phone number formats</li>
            <li>Suggestions for new features</li>
            <li>Bug reports</li>
            <li>Business inquiries</li>
          </ul>

          <p className="text-base-content/80 mt-8">
            We typically respond to all inquiries within 24-48 business hours.
          </p>
        </section>
      </div>
    </main>
  )
} 