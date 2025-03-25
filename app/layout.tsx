// 定义整个app的布局，包括主题切换、Google Analytics、页面元数据等

import "./globals.css";
import { ThemeProvider } from "../components/providers/ThemeProvider"; // 引入ThemeProvider组件，用于设置主题切换功能
import type { Metadata } from "next"; // 引入Metadata组件，用于设置页面元数据
import Script from "next/script"; // 引入Script组件，用于在页面中插入Google Analytics脚本
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://random-phone-numbers.com"),
  authors: [{ name: "Ethan Ye" }],
  creator: "Ethan Ye",
  publisher: "Ethan Ye",
  formatDetection: {
    // 移动端浏览器会自动检测页面中的电话、邮箱和地址，并将其转换为可点击的链接
    email: false, // 通过formatdetection可以禁用自动检测功能
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Random Phone Numbers - Free Phone Number Generator",
    description:
      "Generate random phone numbers for multiple countries. Features include bulk generation, US/UK/international phone numbers and Excel export.",
    type: "website",
    locale: "en_US",
    siteName: "Random Phone Numbers",
  },

  robots: {
    // 搜索引擎爬虫控制
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology", // 网站分类
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  // 作用是提供给搜索引擎的结构化数据，帮助搜索引擎更好地理解网页内容
  "@context": "https://schema.org",
  "@type": "WebApplication", // 定义类型为web应用
  name: "Random Phone Numbers - Free Phone Number Generator",
  description:
    "Generate random phone numbers for multiple countries.Features include bulk generation, US/UK/international phone numbers, customizable formats and Excel export.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  url: "https://random-phone-numbers.com",
  author: {
    "@type": "Person",
    name: "Ethan Ye",
  },
  offers: {
    // 免费声明
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    // 功能亮点
    "Generate random phone numbers for multiple countries",
    "US, UK, China, India phone number formats",
    "Bulk phone number generation",
    "Customizable number formats",
    "Excel export feature",
    "Copy to clipboard function",
    "Free to use",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning 是防止在SSR过程中出现警告
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <head>
        <link rel="icon" href="/webico.ico" />
        <link rel="canonical" href="https://random-phone-numbers.com" />
        <meta name="robots" content="index,follow" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5237772343297981"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://kulroakonsu.net/88/tag.min.js"
          data-zone="138777"
          async
          data-cfasync="false"
        ></Script>
        <meta
          name="google-adsense-account"
          content="ca-pub-5237772343297981"
        ></meta>
      </head>
      <body
        className={`min-h-screen bg-base-100 text-base-content transition-colors duration-300 ${inter.className}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WRR1YQ8W48"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WRR1YQ8W48');
          `}
        </Script>
      </body>
    </html>
  );
}
