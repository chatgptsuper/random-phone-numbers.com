import { Metadata } from "next";
import ThemeController from "@/components/themeController";
import MainGenerator from "@/components/mainGenerator";
import CountryInfo from "@/components/CountryInfo";
import { getCountryInfo } from "@/utils/countryUtils";
import Script from "next/script";
export const metadata: Metadata = {
  title:
    "Australia Phone Number Generator - Generate Random Australian Phone Numbers",
  description:
    "Australia Phone Number Generator. Create mobile and landline numbers with proper area codes for testing and development. Perfect for testing applications, databases, and CRM systems."
};

export default function AustraliaPage() {
  const country = getCountryInfo("au");

  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />

      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Australian Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random Australian phone numbers with valid area codes and
            proper formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="AU" />
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Script
              async
              data-cfasync="false"
              src="//pl26170375.effectiveratecpm.com/e600160624986baf8eabc5850c18a018/invoke.js"
              strategy="lazyOnload"
            />
            <div id="container-e600160624986baf8eabc5850c18a018"></div>
          </div>
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">
              About Australian Phone Numbers
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
                Australian Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                Australian phone numbers follow specific formats for mobile and
                landline numbers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Mobile numbers start with 04</li>
                <li>Area codes: 02 (Sydney), 03 (Melbourne), 07 (Brisbane)</li>
                <li>Mobile numbers are 10 digits</li>
                <li>Landline numbers are 8 digits plus area code</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Major Area Codes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>02 - Sydney, Canberra</div>
                <div>03 - Melbourne, Hobart</div>
                <div>07 - Brisbane, Gold Coast</div>
                <div>08 - Adelaide, Perth, Darwin</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Uses for Australian Phone Numbers
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing Australian-focused applications</li>
                <li>Validating phone number input fields</li>
                <li>Creating sample data for CRM systems</li>
                <li>Testing SMS and calling features</li>
                <li>Database testing with Australian formats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
