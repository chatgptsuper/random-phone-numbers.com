import ThemeController from '../components/themeController'
import MainGenerator from '../components/mainGenerator'

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <ThemeController />
      <MainGenerator />
    </main>
  )
}