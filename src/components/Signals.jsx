import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Clock } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Signals() {
  const [signals, setSignals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSignals = async () => {
      try {
        const res = await fetch(`${API_BASE}/signals`)
        const data = await res.json()
        setSignals(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchSignals()
  }, [])

  return (
    <section id="signals" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Latest Signals</h2>
        <p className="text-white/60 mt-2 max-w-2xl">Our feed is mirrored across platforms the moment a signal drops.</p>

        {loading ? (
          <div className="text-white/70 mt-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {signals.map((s) => (
              <article key={s._id || `${s.symbol}-${s.time}`} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition">
                <div className="flex items-center justify-between">
                  <div className="text-white text-lg font-semibold">{s.symbol}</div>
                  {s.type === 'buy' ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <TrendingUp size={16} /> Buy
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-rose-400">
                      <TrendingDown size={16} /> Sell
                    </span>
                  )}
                </div>
                <div className="mt-3 text-white/80 text-sm">Entry: <span className="text-white">{s.entry}</span></div>
                {s.targets && s.targets.length > 0 && (
                  <div className="mt-2 text-white/80 text-sm">Targets: <span className="text-white">{s.targets.join(', ')}</span></div>
                )}
                {s.stop && (
                  <div className="mt-2 text-white/80 text-sm">Stop: <span className="text-white">{s.stop}</span></div>
                )}
                <div className="mt-4 text-xs text-white/60 inline-flex items-center gap-1">
                  <Clock size={14} /> {new Date(s.time).toLocaleString()}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
