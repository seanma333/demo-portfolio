import Navigation from "../../components/Navigation";
import Link from "next/link";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Sample blog post content
  const post = {
    title: "Getting Started with Next.js 16",
    date: "November 1, 2025",
    content: `
      Next.js 16 brings exciting new features that make building React applications even more enjoyable.
      The framework continues to push the boundaries of what's possible with server-side rendering and static generation.

      One of the standout features is the improved App Router, which provides a more intuitive way to structure your applications.
      The new caching strategies ensure optimal performance while maintaining developer productivity.

      TypeScript support has been enhanced, making it easier to catch errors early in the development process.
      Combined with better error boundaries and debugging tools, Next.js 16 offers a robust development experience.

      Whether you're building a simple portfolio or a complex enterprise application, Next.js 16 provides the tools and
      flexibility you need to create fast, scalable web applications.
    `,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-purple-600 mb-8 font-medium"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-6">
              <span className="text-sm font-medium text-blue-600">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              {post.title}
            </h1>
            <div className="prose prose-slate max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                return (
                  <p key={index} className="text-slate-700 leading-relaxed mb-4">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
