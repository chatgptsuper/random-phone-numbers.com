import { Metadata } from 'next'
import ThemeController from '@/components/themeController'
import MainGenerator from '@/components/mainGenerator'

export const metadata: Metadata = {
  title: 'US Phone Number Generator - Generate Random American Phone Numbers',
  description: 'Generate random US phone numbers with our free American phone number generator. Create bulk phone numbers with proper US area codes and formats.',
  keywords: [
    'us phone number generator',
    'american phone number generator', 
    'random us phone numbers',
    'fake us phone numbers'
  ].join(', ')
}

export default function USPage() {
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      <MainGenerator defaultCountry="US" />
      <section className="prose max-w-3xl mx-auto mt-8 px-4">
        <h2>Generate Random US Phone Numbers</h2>
        <p>
          Generate random United States phone numbers with proper area codes and formats.
          Perfect for testing, data samples, or any other use case requiring US phone numbers.
        </p>
        {/* 添加更多相关内容 */}
      </section>
    </main>
  )
} 