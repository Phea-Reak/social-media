const links = [
  { label: "Facebook", url: "https://www.facebook.com/nhnghzreqk" },
  { label: "Instagram", url: "https://www.instagram.com/rosten_404/" },
  { label: "TikTok", url: "https://www.tiktok.com/@nhnghzreqk" },
  { label: "YouTube", url: "https://www.youtube.com/@RO-STEN" },
  { label: "Facebook Page", url: "https://www.facebook.com/RostenOfficial404" },
  { label: "Telegram", url: "https://t.me/Reak404" },
  { label: "GitHub", url: "https://github.com/Phea-Reak" },
  { label: "Gmail", url: "mailto:Sopheareak.me@gmail.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/eang-sopheareak" },
];

export default function Home() {
  return (
    <div className="perspective-3d relative flex flex-col items-center justify-center min-h-screen px-6 py-16 cutie-bg">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center relative z-10">
        <div className="mb-10">
          <div className="w-28 h-28 rounded-full overflow-hidden avatar-3d">
            <img
              src="/ROSTEN.jpg"
              alt="Eang Sopheareak"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground mb-1">
          @rosten_404
        </h1>
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-[0.2em] mb-10">
          Eang Sopheareak
        </p>

        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full bg-white dark:bg-zinc-900 px-5 py-4 flex items-center justify-between font-mono text-sm rounded-2xl card-3d card-3d-press light-overlay border border-white/20 dark:border-zinc-700/50"
            >
              <span className="text-foreground">{link.label}</span>
              <span className="text-zinc-300 dark:text-zinc-600 group-hover:text-accent transition-colors text-xs group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>

      
      </div>
    </div>
  );
}
