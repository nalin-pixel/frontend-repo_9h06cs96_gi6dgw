import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Signals from './components/Signals'
import Socials from './components/Socials'
import CTA from './components/CTA'
import ErrorBoundary from './components/ErrorBoundary'
import DebugBanner from './components/DebugBanner'

function App() {
  const [backendUrl, setBackendUrl] = useState('')

  useEffect(() => {
    setBackendUrl(import.meta.env.VITE_BACKEND_URL || '')
  }, [])

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-16">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <Signals />
        </ErrorBoundary>
        <ErrorBoundary>
          <Socials />
        </ErrorBoundary>
        <ErrorBoundary>
          <CTA />
        </ErrorBoundary>
      </main>
      <footer className="bg-black border-t border-white/10 py-8 text-center text-white/50 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          © {new Date().getFullYear()} Anonymous Alpha — Free, 100% precise crypto signals.
        </div>
      </footer>
      <DebugBanner backendUrl={backendUrl} />
    </div>
  )
}

export default App
