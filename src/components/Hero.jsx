import { Suspense, lazy, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const [failed, setFailed] = useState(false)

  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-black" id="home">
      {!failed && (
        <div className="absolute inset-0">
          <Suspense
            fallback={<div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10" />}
          >
            <Spline
              scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
              onError={() => setFailed(true)}
            />
          </Suspense>
        </div>
      )}

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-left text-white space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest">
            <span className="text-emerald-300">100% Accuracy</span>
            <span className="text-white/70">•</span>
            <span className="text-sky-300">Always Free</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            Ultra-Precise Crypto Signals
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500">by Anonymous Professionals</span>
          </h1>

          <p className="max-w-2xl text-white/80 text-base sm:text-lg">
            Real-time buy & sell calls shared across X, YouTube, TikTok, Instagram, Pinterest, and Facebook. Zero paywalls, zero noise — just signals.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#signals" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">View Latest Signals</a>
            <a href="#socials" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Follow Our Feeds</a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-white/70">
            <div>
              <span className="text-white font-semibold">Real-time</span> across 6 platforms
            </div>
            <div>
              <span className="text-white font-semibold">No ads</span>, no subscriptions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
