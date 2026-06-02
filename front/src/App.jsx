import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LangProvider, useLang } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VSLSection from './components/VSLSection'
import CreativosSection from './components/CreativosSection'
import CategoryPage from './pages/CategoryPage'

function HomePage() {
  const { t } = useLang()
  const { state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [state])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <VSLSection />
      <CreativosSection />
      <footer className="mt-auto text-center py-5 text-xs text-gray-400 border-t border-gray-200 font-mono">
        <span style={{ color: '#0866FF' }}>$</span> {t.footer}
      </footer>
    </main>
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5547999718864"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-150 hover:scale-110"
      style={{ background: '#25D366' }}
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.829 1.782 6.86L2 30l7.338-1.762A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.88-1.604l-.42-.25-4.354 1.046 1.082-4.23-.274-.434A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.34-8.66c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.23.348-.894 1.132-1.096 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.934-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.087-.174-.78-1.882-1.07-2.578-.282-.676-.568-.584-.78-.594l-.664-.012c-.23 0-.608.086-.926.434-.318.348-1.214 1.186-1.214 2.892s1.242 3.354 1.416 3.586c.174.232 2.444 3.73 5.918 5.232.828.358 1.474.572 1.978.732.832.264 1.588.226 2.186.138.666-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.202-1.656-.086-.144-.318-.232-.666-.406z"/>
      </svg>
    </a>
  )
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vsl/:slug" element={<CategoryPage type="vsl" />} />
          <Route path="/criativos/:slug" element={<CategoryPage type="criativos" />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </LangProvider>
  )
}
