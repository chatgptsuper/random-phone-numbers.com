import { Metadata } from "next";
import ThemeController from "@/components/themeController";
import MainGenerator from "@/components/mainGenerator";
import CountryInfo from "@/components/CountryInfo";
import { getCountryInfo } from "@/utils/countryUtils";
import Script from "next/script";
export const metadata: Metadata = {
  title:
    "Singapore Phone Number Generator - Generate Random Singapore Phone Numbers",
  description:
    "Generate random Singapore phone numbers with our free generator. Create mobile numbers with valid carrier prefixes and proper formats for Singapore.",
};

export default function SGPage() {
  const country = getCountryInfo("sg");

  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />

      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Singapore Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Singapore phone numbers with proper carrier prefixes
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
          <MainGenerator defaultCountry="SG" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">
              About Singapore Phone Numbers
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
                Singapore Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Singapore mobile phone numbers follow a specific structure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>All numbers start with +65 (country code)</li>
                <li>Mobile numbers are 8 digits long</li>
                <li>Mobile numbers start with 8 or 9</li>
                <li>Different prefixes for different carriers and services</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Mobile Number Prefixes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>Singtel: 8xxx xxxx, 9xxx xxxx</div>
                <div>StarHub: 8xxx xxxx, 9xxx xxxx</div>
                <div>M1: 8xxx xxxx, 9xxx xxxx</div>
                <div>
                  Virtual Operators: Same prefixes as the main mobile carriers
                </div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Number Types
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>Mobile: 8xxx xxxx, 9xxx xxxx</div>
                <div>Fixed Line: 6xxx xxxx</div>
                <div>VoIP: 3xxx xxxx</div>
                <div>Pager (Legacy): 7xxx xxxx</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common Use Cases
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing applications for the Singapore market</li>
                <li>Validating Singapore phone formats</li>
                <li>Creating test data for Southeast Asian applications</li>
                <li>Testing international SMS services</li>
                <li>Database testing with Singapore formats</li>
                <li>Mobile app development for Singapore</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Phone Number Validation
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Mobile numbers must start with 8 or 9</li>
                <li>
                  Total length should be 8 digits (excluding country code)
                </li>
                <li>No spaces or special characters in the actual number</li>
                <li>Country code (+65) is optional but commonly used</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Business Usage
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>E-commerce platforms in Southeast Asia</li>
                <li>Regional business applications</li>
                <li>Financial services testing</li>
                <li>Telecommunications software</li>
                <li>Customer service systems</li>
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
