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
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 dot-bg">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center relative z-10">
        <div className="relative mb-8">
          <div className="w-28 h-28 border-2 border-accent overflow-hidden">
            <img
              src="/reak.jpg"
              alt="Eang Sopheareak"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-accent" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-accent" />
        </div>

        <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground mb-1">
          @rosten_404
        </h1>
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-[0.2em] mb-10">
          Eang Sopheareak
        </p>

        <div className="w-full flex flex-col gap-px">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-5 py-4 flex items-center justify-between font-mono text-sm transition-colors hover:border-accent hover:bg-accent/5 dark:hover:bg-accent/10"
            >
              <span className="text-foreground">{link.label}</span>
              <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-accent transition-colors text-xs">
                →
              </span>
            </a>
          ))}
        </div>

      
      </div>
    </div>
  );
}
