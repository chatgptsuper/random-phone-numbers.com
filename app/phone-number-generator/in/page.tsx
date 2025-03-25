import { Metadata } from "next";
import ThemeController from "@/components/themeController";
import MainGenerator from "@/components/mainGenerator";
import CountryInfo from "@/components/CountryInfo";
import { getCountryInfo } from "@/utils/countryUtils";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Indian Phone Number Generator - Generate Random India Phone Numbers",
  description:
    "Indian Phone Number Generator. Create mobile numbers with valid carrier prefixes and proper formats for India.",
};

export default function INPage() {
  const country = getCountryInfo("in");

  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />

      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Indian Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Indian phone numbers with proper carrier prefixes
            and formats.
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

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="IN" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">
              About Indian Phone Numbers
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
                Indian Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Indian mobile phone numbers follow a specific structure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>All numbers start with +91 (country code)</li>
                <li>Mobile numbers are 10 digits long</li>
                <li>First digit is always between 6-9</li>
                <li>Different prefixes for different carriers and circles</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Mobile Carrier Prefixes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>Jio: 89, 90, 70, 71, 72</div>
                <div>Airtel: 98, 99, 80, 81, 82</div>
                <div>Vodafone: 97, 96, 95, 91</div>
                <div>BSNL: 94, 93, 91, 92</div>
                <div>Vi (formerly Vodafone Idea): 70, 71, 72</div>
                <div>MTNL: 91 (for Delhi and Mumbai region)</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Other Phone Number Types
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>
                  Fixed line numbers (landlines) may begin with area codes like
                  11, 22, 33, etc.
                </li>
                <li>
                  VoIP and virtual numbers start with 8 (especially for
                  businesses or non-geographic services)
                </li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Use Cases
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing applications for the Indian market</li>
                <li>Validating Indian phone formats</li>
                <li>Creating test data for Asian market applications</li>
                <li>Testing international SMS services</li>
                <li>Database testing with Indian formats</li>
              </ul>
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
    </main>
  );
}
