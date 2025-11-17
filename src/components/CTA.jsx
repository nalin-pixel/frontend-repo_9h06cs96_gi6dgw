export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10 py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white">Free. Precise. Instant.</h3>
        <p className="text-white/70 mt-3">Tap in and track the next move before it happens. No paywalls, no catches.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#signals" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">See Signals</a>
          <a href="#socials" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Follow Socials</a>
        </div>
      </div>
    </section>
  )
}
