export default function DebugBanner({ backendUrl }) {
  return (
    <div className="fixed bottom-4 right-4 z-[1000] rounded-md bg-black/70 text-white/80 border border-white/20 px-3 py-2 text-xs">
      <div className="font-semibold text-white">Debug</div>
      <div>App mounted ✓</div>
      {backendUrl && (
        <div className="truncate max-w-[240px]">
          API: <span className="text-white">{backendUrl}</span>
        </div>
      )}
    </div>
  )
}
