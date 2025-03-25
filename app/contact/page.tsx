import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contact Us - Random Phone Numbers',
  description: 'Contact the Random Phone Numbers team. Get support or share feedback about our phone number generation tool.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full relative bg-base-100">
      <ThemeController />
      
      {/* Header */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            We&apos;re here to help with any questions or feedback you might have
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Script
              async
              data-cfasync="false"
              src="//pl26170375.effectiveratecpm.com/e600160624986baf8eabc5850c18a018/invoke.js"
              strategy="afterInteractive"
            />
            <div
              id="container-e600160624986baf8eabc5850c18a018"
              className="w-full"
            ></div>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
            <p className="text-base-content/80 mb-6">
              Have questions or feedback about Random Phone Numbers? We&apos;d love to hear from you. 
              Our team is ready to assist with any inquiries you might have.
            </p>
            
            <div className="my-8 p-6 bg-base-300 rounded-lg text-center">
              <p className="text-base-content/80 mb-2">Email us at:</p>
              <a 
                href="mailto:contact@random-phone-numbers.com" 
                className="text-xl font-medium text-primary hover:underline flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@random-phone-numbers.com
              </a>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">How We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Technical Support</h3>
                <p className="text-base-content/80">Assistance with using the Random Phone Numbers generator and its features</p>
              </div>
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Format Questions</h3>
                <p className="text-base-content/80">Information about phone number formats for specific countries</p>
              </div>
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Feature Requests</h3>
                <p className="text-base-content/80">Suggestions for new features or improvements to our service</p>
              </div>
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Bug Reports</h3>
                <p className="text-base-content/80">Report any issues or unexpected behavior you encounter</p>
              </div>
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors md:col-span-2">
                <h3 className="font-semibold mb-2">Business Inquiries</h3>
                <p className="text-base-content/80">Partnership opportunities, commercial use, or other business-related questions</p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Response Time</h2>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base-content/80">
                We typically respond to all inquiries within <span className="font-semibold">24-48 business hours</span>.
              </p>
            </div>
            <p className="text-base-content/80 mt-4">
              For urgent matters, please indicate this in your email subject line, and we&apos;ll do our best to prioritize your request.
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