import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-violet-500 animate-pulse" />
          <span className="text-white font-semibold tracking-tight">Anonymous Alpha</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#signals" className="hover:text-white transition">Signals</a>
          <a href="#socials" className="hover:text-white transition">Socials</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}
