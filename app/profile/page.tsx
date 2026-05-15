const connectedAccounts = [
  { name: "Facebook", username: "john.doe", connected: true, icon: "📘" },
  { name: "Instagram", username: "@jane_smith", connected: true, icon: "📷" },
  { name: "TikTok", username: "@tiktok_user", connected: false, icon: "🎵" },
  { name: "Gmail", username: "user@gmail.com", connected: true, icon: "📧" },
  { name: "Telegram", username: "@telegram_user", connected: true, icon: "✈️" },
  { name: "GitHub", username: "dev_user", connected: true, icon: "💻" },
];

export default function ProfilePage() {
  return (
    <div className="flex-1 ios-bg-aura min-h-screen">
      <div className="max-w-2xl mx-auto p-4 pt-6">
        <div className="glass-panel glass-dense p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-2xl shadow-ios-sm">
              👤
            </div>
            <div>
              <h2 className="ios-headline glass-text">
                John Doe
              </h2>
              <p className="ios-body glass-text-secondary">john.doe@email.com</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-ios-blue text-white rounded-full ios-headline text-white shadow-ios-sm active:scale-95 transition-transform">
            Edit Profile
          </button>
        </div>

        <h3 className="ios-caption mb-3">
          Connected Accounts
        </h3>
        <div className="space-y-2">
          {connectedAccounts.map((account) => (
            <div
              key={account.name}
              className="glass-material p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{account.icon}</span>
                <div>
                  <p className="ios-headline glass-text">
                    {account.name}
                  </p>
                  <p className="ios-caption glass-text-secondary">{account.username}</p>
                </div>
              </div>
              <span
                className={`px-2.5 py-0.5 text-xs rounded-full ${
                  account.connected
                    ? "bg-ios-green/15 text-ios-green dark:bg-ios-green/20"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {account.connected ? "Connected" : "Connect"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
