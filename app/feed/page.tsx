import Image from "next/image";

const posts = [
  {
    id: 1,
    platform: "Facebook",
    user: "John Doe",
    content: "Just launched a new project! Check it out",
    likes: 24,
    comments: 5,
    time: "2 hours ago",
  },
  {
    id: 2,
    platform: "Instagram",
    user: "jane_smith",
    content: "Beautiful sunset today",
    image: "https://picsum.photos/600/400?random=1",
    likes: 156,
    comments: 12,
    time: "4 hours ago",
  },
  {
    id: 3,
    platform: "GitHub",
    user: "dev_user",
    content: "Pushed new commits to project repository",
    likes: 8,
    comments: 3,
    time: "5 hours ago",
  },
];

const platformColors: Record<string, string> = {
  Facebook: "bg-blue-500",
  Instagram: "bg-pink-500",
  TikTok: "bg-black",
  Telegram: "bg-blue-400",
  Gmail: "bg-red-500",
  GitHub: "bg-gray-800",
};

export default function FeedPage() {
  return (
    <div className="flex-1 cutie-bg min-h-screen">
      <div className="max-w-2xl mx-auto p-4 pt-6">
        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-5 card-3d light-overlay border border-white/20 dark:border-zinc-700/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${platformColors[post.platform]} flex items-center justify-center text-white`}>
                  {post.user[0]}
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-white">
                    {post.user}
                  </p>
                  <p className="text-xs text-zinc-500">{post.time}</p>
                </div>
                <span className={`ml-auto px-2 py-0.5 text-xs ${platformColors[post.platform]} text-white rounded-full`}>
                  {post.platform}
                </span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">{post.content}</p>
              {post.image && (
                <div className="mb-3 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt="Post"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              )}
              <div className="flex gap-6 text-zinc-500">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}