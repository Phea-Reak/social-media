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
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 metallic-bg">
      <div className="orb-1" />
      <div className="orb-2" />
      <div className="orb-3" />
      <div className="w-full max-w-sm mx-auto flex flex-col items-center relative z-10">
        <div className="mb-10">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-ios-lg ring-2 ring-white/20">
            <img
              src="/ROSTEN.jpg"
              alt="Eang Sopheareak"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="ios-title metallic-text mb-1">
          @rosten_404
        </h1>
        <p className="ios-caption metallic-text-static mb-10">
          Eang Sopheareak
        </p>

        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full glass-material px-5 py-4 flex items-center justify-between active:scale-[0.97] transition-transform"
            >
              <span className="ios-headline text-foreground">{link.label}</span>
              <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-ios-blue transition-colors text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
