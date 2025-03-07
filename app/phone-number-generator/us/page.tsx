import { Metadata } from "next";
import ThemeController from "@/components/themeController";
import MainGenerator from "@/components/mainGenerator";
import CountryInfo from "@/components/CountryInfo";
import { getCountryInfo } from "@/utils/countryUtils";

export const metadata: Metadata = {
  title: "US Phone Number Generator - Generate Random US Phone Number",
  description:
    "Free US phone number generator. Generate random US phone number with valid area codes. Perfect for testing and development purposes.",
};

export default function USPage() {
  const country = getCountryInfo("us");

  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />

      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            US Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random American phone number with valid area codes and
            proper formats.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <MainGenerator defaultCountry="US" />
        </div>
      </section>

      {/* Country Info Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            About US Phone Numbers
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
                US Phone Number Format Guide
              </h2>
              <p className="text-base-content/80 mb-4">
                American phone numbers follow a standardized format that consists of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>A 3-digit area code (e.g., 212 for New York City)</li>
                <li>A 3-digit prefix</li>
                <li>A 4-digit line number</li>
              </ul>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Common US Area Codes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base-content/80">
                <div>212, 646, 332 - New York City</div>
                <div>213, 310, 818 - Los Angeles</div>
                <div>312, 773 - Chicago</div>
                <div>202 - Washington DC</div>
                <div>305, 786 - Miami</div>
                <div>415, 628 - San Francisco</div>
                <div>617, 857 - Boston</div>
                <div>512 - Austin</div>
                <div>213 - Los Angeles</div>
                <div>702 - Las Vegas</div>
              </div>
            </div>

            <div className="bg-base-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Uses for US Phone Numbers
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li>Testing US-focused applications</li>
                <li>Validating phone number input fields</li>
                <li>Creating sample data for CRM systems</li>
                <li>Testing SMS and calling features</li>
                <li>Database testing with US phone formats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
