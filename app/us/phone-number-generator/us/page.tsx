import { Metadata } from "next";
import ThemeController from "@/components/themeController";
import MainGenerator from "@/components/mainGenerator";
import CountryInfo from "@/components/CountryInfo";
import { getCountryInfo } from "@/utils/countryUtils";

export const metadata: Metadata = {
  title: "US Phone Number Generator - Generate Random American Phone Numbers",
  description:
    "Free US phone number generator. Create random American phone numbers with valid area codes. Perfect for testing and development purposes.",
  keywords: [
    "us phone number generator",
    "american phone number generator",
    "random us phone numbers",
    "fake us phone numbers",
    "usa phone number generator",
    "us area codes",
  ].join(", "),
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
            Generate random American phone numbers with valid area codes and
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
          <h2 className="text-3xl font-semibold mb-8">
            About US Phone Numbers
          </h2>
          <CountryInfo country={country} />
        </div>
      </section>

      {/* Additional Info for SEO */}
      <section className="py-12">
        <div className="container mx-auto px-4 prose max-w-3xl">
          <h2>US Phone Number Format Guide</h2>
          <p>
            American phone numbers follow a standardized format that consists
            of:
          </p>
          <ul>
            <li>A 3-digit area code (e.g., 212 for New York City)</li>
            <li>A 3-digit prefix</li>
            <li>A 4-digit line number</li>
          </ul>

          <h3>Common US Area Codes</h3>
          <ul>
            <li>212, 646, 332 - New York City</li>
            <li>213, 310, 818 - Los Angeles</li>
            <li>312, 773 - Chicago</li>
            <li>202 - Washington DC</li>
            <li>305, 786 - Miami</li>
            <li>415, 628 - San Francisco</li>
            <li>617, 857 - Boston</li>
            <li>512 - Austin</li>
            <li>213 - Los Angeles</li>
            <li>702 - Las Vegas</li>
          </ul>

          <h3>Uses for US Phone Numbers</h3>
          <p>Our US phone number generator is commonly used for:</p>
          <ul>
            <li>Testing US-focused applications</li>
            <li>Validating phone number input fields</li>
            <li>Creating sample data for CRM systems</li>
            <li>Testing SMS and calling features</li>
            <li>Database testing with US phone formats</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
