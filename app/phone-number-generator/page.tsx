import { Metadata } from "next";
import ThemeController from "@/components/themeController";
import CountryGrid from "@/components/CountryGrid";
import Link from "next/link";
import CountrySearch from "@/components/CountrySearch";
import { Suspense } from 'react';
import Script from "next/script";

export const metadata: Metadata = {
  title: "Random Phone Numbers - Choose A Country To Generate Random Phone Numbers",
  description:
    "Generate random phone numbers for multiple countries. Create test phone numbers with proper formats and area codes. Perfect for testing and development.",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  };

export default function PhoneNumberGeneratorPage() {
  return (
    <main className="min-h-screen w-full relative bg-base-100">
            <Suspense fallback={<div>Loading...</div>}>
        <ThemeController />
      </Suspense>
      {/* Header Section */}
      <section className="py-10 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Random Phone Numbers</h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Select a country to generate random phone numbers with proper formats
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

      {/* Countries Selection Section */}
      <section className="py-8 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-6">
          <Suspense fallback={<div>Loading search...</div>}>
              <CountrySearch />
            </Suspense>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-lg">
            <Suspense fallback={<div>Loading countries...</div>}>
              <CountryGrid />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-base-200 p-8 rounded-xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-4">Global Coverage</h3>
              <p className="text-base-content/80">
                Generate phone numbers for multiple countries with proper area
                codes and formats
              </p>
            </div>
            <div className="bg-base-200 p-8 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Instant Generation</h3>
              <p className="text-base-content/80">
                Create single or multiple phone numbers instantly with our fast
                generator
              </p>
            </div>
            <div className="bg-base-200 p-8 rounded-xl">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-4">Easy Export</h3>
              <p className="text-base-content/80">
                Export generated numbers to Excel or copy directly to clipboard
              </p>
            </div>
          </div>
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

      {/* Usage Guide */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How to Use</h2>
            <div className="space-y-6">
              <div className="bg-base-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">1. Find Your Country</h3>
                <p className="text-base-content/80">
                  Use the search bar to quickly find your country by name or country code, 
                  or browse through the country grid below
                </p>
              </div>
              <div className="bg-base-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">2. Select Format</h3>
                <p className="text-base-content/80">
                  Choose the phone number format specific to your selected country
                </p>
              </div>
              <div className="bg-base-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">3. Set Quantity</h3>
                <p className="text-base-content/80">
                  Specify how many phone numbers you want to generate
                </p>
              </div>
              <div className="bg-base-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">4. Generate & Export</h3>
                <p className="text-base-content/80">
                  Click generate and use the export options to save your numbers as Excel 
                  or copy directly to clipboard
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="py-8 text-center mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
