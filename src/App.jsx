import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Signals from './components/Signals'
import Socials from './components/Socials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Signals />
        <Socials />
        <CTA />
      </main>
      <footer className="bg-black border-t border-white/10 py-8 text-center text-white/50 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          © {new Date().getFullYear()} Anonymous Alpha — Free, 100% precise crypto signals.
        </div>
      </footer>
    </div>
  )
}

export default App
