import ThemeController from '../components/themeController'
import MainGenerator from '../components/mainGenerator'

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <ThemeController />
      <MainGenerator />
    </main>
  )
}