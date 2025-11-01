import Navigation from "../components/Navigation";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 16",
    date: "November 1, 2025",
    excerpt: "Next.js 16 brings exciting new features including improved performance, better TypeScript support, and enhanced developer experience. Let's explore what's new.",
    slug: "getting-started-with-nextjs-16",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-slate-600">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
