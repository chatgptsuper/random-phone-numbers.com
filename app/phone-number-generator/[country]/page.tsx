import { Metadata } from "next";
import { notFound } from "next/navigation";
import ThemeController from "@/components/themeController";
import MainGenerator from "@/components/mainGenerator";
import CountryInfo from "@/components/CountryInfo";
import { getCountryInfo } from "@/utils/countryUtils";
import Script from "next/script";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const countryInfo = getCountryInfo(country);
  if (!countryInfo) return {};

  return {
    title: `${countryInfo.name} Phone Number Generator - Random ${countryInfo.name} Numbers`,
    description: `${countryInfo.name} Phone Number Generator. Create phone numbers with proper ${countryInfo.name} formats and area codes.`,
    keywords: [
      `${countryInfo.name.toLowerCase()} phone number generator`,
      `random ${countryInfo.name.toLowerCase()} phone numbers`,
      `fake ${countryInfo.name.toLowerCase()} phone numbers`,
      "phone number generator",
    ].join(", "),
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const countryInfo = getCountryInfo(country);
  if (!countryInfo) notFound();

  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />

      {/* Hero Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            {countryInfo.name} Phone Number Generator
          </h1>
          <p className="text-xl text-center text-base-content/80 max-w-2xl mx-auto">
            Generate random phone numbers for {countryInfo.name} with proper
            formats and area codes.
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
          <MainGenerator defaultCountry={country.toUpperCase()} />
        </div>
      </section>

      {/* tion */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">
            About {countryInfo.name} Phone Numbers
          </h2>
          <CountryInfo country={countryInfo} />
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
