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
    <div className="flex-1 cutie-bg min-h-screen">
      <div className="max-w-2xl mx-auto p-4 pt-6">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 card-3d light-overlay border border-white/20 dark:border-zinc-700/50 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                John Doe
              </h2>
              <p className="text-zinc-500 text-sm">john.doe@email.com</p>
            </div>
          </div>
          <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium">
            Edit Profile
          </button>
        </div>

        <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3">
          Connected Accounts
        </h3>
        <div className="space-y-2">
          {connectedAccounts.map((account) => (
            <div
              key={account.name}
              className="bg-white dark:bg-zinc-900 rounded-xl p-3 card-3d card-3d-press light-overlay border border-white/20 dark:border-zinc-700/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{account.icon}</span>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white text-sm">
                    {account.name}
                  </p>
                  <p className="text-xs text-zinc-500">{account.username}</p>
                </div>
              </div>
              <span
                className={`px-2.5 py-0.5 text-xs rounded-full ${
                  account.connected
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
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