import ThemeController from '../themeController'
import LanguageSelector from '../LanguageSelector'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="fixed top-0 left-0 right-0 h-12 flex items-center justify-end px-4 bg-base-100/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <LanguageSelector />
          </div>
          <div className="flex items-center justify-center">
            <ThemeController />
          </div>
        </div>
      </header>
      <main className="pt-12">
        {children}
      </main>
    </div>
  )
} 