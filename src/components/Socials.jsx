import { Twitter, Youtube, Instagram, Facebook, Pinterest } from 'lucide-react'

const socials = [
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'TikTok', icon: () => <span className="font-bold">TT</span>, href: 'https://tiktok.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Pinterest', icon: Pinterest, href: 'https://pinterest.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
]

export default function Socials() {
  return (
    <section id="socials" className="bg-[#0a0a0a] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Follow the Signal</h2>
        <p className="text-white/60 mt-2 max-w-2xl">We publish simultaneously across all major socials. Pick your channel and never miss a move.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-10">
          {socials.map(({ name, icon: Icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition flex items-center justify-center gap-2 text-white/80">
              <Icon className="text-white" size={20} />
              <span className="text-sm group-hover:text-white">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
