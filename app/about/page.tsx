import { Metadata } from "next";
import ThemeController from "@/components/themeController";
import Link from "next/link";
import Script from "next/script";
export const metadata: Metadata = {
  title: "About Random Phone Numbers - Free Phone Number Generator",
  description:
    "Learn about our free phone number generator tool. Generate random phone numbers for testing and development purposes across multiple countries.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full relative bg-base-100">
      <ThemeController />

      {/* Header */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Random Phone Numbers
          </h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            Providing high-quality random phone number generation tools for
            developers and testers
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
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Our Mission
            </h2>
            <p className="text-base-content/80 mb-4">
              Random Phone Numbers is dedicated to providing developers,
              testers, and businesses with a high-quality phone number
              generation tool. Our goal is to simplify the process of creating
              test data and improve development efficiency.
            </p>
            <p className="text-base-content/80">
              We understand the importance of having access to sample phone
              number data that conforms to various country-specific formats
              during software development and testing. Our tool aims to address
              this need, allowing you to focus on your core development work.
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Multi-Country Support</h3>
                <p className="text-base-content/80">
                  Support for multiple country phone number formats including
                  US, Canada, UK, Australia and more
                </p>
              </div>
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Compliant Generation</h3>
                <p className="text-base-content/80">
                  Random generation following country-specific rules ensuring
                  correct formats
                </p>
              </div>
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Bulk Operations</h3>
                <p className="text-base-content/80">
                  Bulk generation and export functionality for multiple numbers
                  at once
                </p>
              </div>
              <div className="border border-base-300 rounded-lg p-4 hover:bg-base-300/30 transition-colors">
                <h3 className="font-semibold mb-2">Completely Free</h3>
                <p className="text-base-content/80">
                  All features are completely free to use with no registration
                  required
                </p>
              </div>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Why Choose Us
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base-content/80">
              <li>
                <span className="font-semibold">Accurate number formats</span> -
                All generated numbers comply with national telecom standards
              </li>
              <li>
                <span className="font-semibold">Real-time generation</span> -
                Quickly generate large volumes of numbers with no waiting
              </li>
              <li>
                <span className="font-semibold">User-friendly interface</span> -
                Clean, intuitive design that&apos;s easy to use
              </li>
              <li>
                <span className="font-semibold">Bulk operations support</span> -
                Generate multiple numbers at once for increased efficiency
              </li>
              <li>
                <span className="font-semibold">Regular updates</span> -
                Continuous improvements and maintenance to ensure quality
                service
              </li>
            </ul>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Common Use Cases
            </h2>
            <div className="space-y-4 text-base-content/80">
              <p>
                Our phone number generator is widely used in the following
                scenarios:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border border-base-300 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">
                    Software Development & Testing
                  </h3>
                  <p>
                    Providing realistic test data for applications, validating
                    forms and input validation
                  </p>
                </div>
                <div className="border border-base-300 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Database Population</h3>
                  <p>
                    Quickly generating large volumes of test data to populate
                    databases for performance testing
                  </p>
                </div>
                <div className="border border-base-300 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">
                    CRM System Implementation
                  </h3>
                  <p>
                    Providing test contact data for customer relationship
                    management systems
                  </p>
                </div>
                <div className="border border-base-300 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">UI/UX Design Testing</h3>
                  <p>
                    Using realistic phone number formats in design prototypes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-200 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Our Technology
            </h2>
            <p className="text-base-content/80 mb-4">
              Our phone number generator is built using modern web technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base-content/80">
              <li>
                Developed with Next.js framework for high performance and good
                SEO
              </li>
              <li>
                Built using React and TypeScript for type safety and
                component-based architecture
              </li>
              <li>
                Styled with TailwindCSS for responsive design that works on all
                devices
              </li>
              <li>
                Deployed on high-availability cloud platforms for service
                reliability
              </li>
            </ul>
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
  );
}
