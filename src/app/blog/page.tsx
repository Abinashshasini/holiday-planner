import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/utils/blogPosts";

export const metadata: Metadata = {
  title: "Odisha Travel Blog — Tips, Guides & Itineraries | Holiday Planner",
  description:
    "Discover Odisha through expert travel guides: temple pilgrimage routes, wildlife safaris, hidden hill stations, and coastal getaways. Plan your perfect Odisha trip.",
  keywords: [
    "Odisha travel blog",
    "Odisha tourism guide",
    "temple tours Odisha",
    "Odisha travel stories",
    "best places to visit Odisha",
  ],
  openGraph: {
    title: "Odisha Travel Blog — Tips, Guides & Itineraries",
    description:
      "Expert guides covering temples, wildlife, beaches, and hill stations across Odisha. Written by local travel experts.",
    url: "https://www.holidayplanner.in/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odisha Travel Blog — Tips, Guides & Itineraries | Holiday Planner",
    description:
      "Discover Odisha through expert travel guides: temple pilgrimage routes, wildlife safaris, hidden hill stations, and coastal getaways. Plan your perfect Odisha trip.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://www.holidayplanner.in/blog" },
};

const categoryColors: Record<string, string> = {
  Pilgrimage: "#e67e22",
  Heritage: "#8e44ad",
  "Nature & Hills": "#27ae60",
  Wildlife: "#2980b9",
};

export default function BlogPage() {
  const [heroBlog, ...remainingPosts] = blogPosts;

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Odisha Travel Blog",
    description:
      "Expert travel guides and stories about Odisha's temples, wildlife, beaches, and hill stations.",
    url: "https://www.holidayplanner.in/blog",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.holidayplanner.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.holidayplanner.in/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-white pt-[80px]">
        {/* Hero Blog */}
        <section className="relative h-[520px] md:h-[560px] max-md:h-[440px] overflow-hidden">
          <Image
            src={heroBlog.image}
            alt={heroBlog.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-[1]" />
          <div className="relative z-[2] h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 md:pb-16 max-w-[900px]">
            <span
              className="self-start text-[0.65rem] font-black tracking-[0.08em] uppercase text-white py-1.5 px-3 rounded-full backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.15)] mb-4"
              style={{
                background: categoryColors[heroBlog.category] ?? "#555",
              }}
            >
              {heroBlog.category}
            </span>
            <h1 className="text-[clamp(1.5rem,4vw,2.75rem)] font-black text-white leading-[1.12] mb-4 tracking-tight">
              <Link
                href={`/blog/${heroBlog.slug}`}
                className="text-inherit no-underline hover:underline decoration-gold-400 underline-offset-4"
              >
                {heroBlog.title}
              </Link>
            </h1>
            <p className="text-sm md:text-base text-white/75 leading-relaxed mb-5 max-w-[600px] line-clamp-2">
              {heroBlog.excerpt}
            </p>
            <div className="flex items-center gap-3 text-[0.8rem] text-white/55">
              <time dateTime={heroBlog.publishDate}>
                {new Date(heroBlog.publishDate).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-white/30">·</span>
              <span>{heroBlog.readTime}</span>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="py-16 md:py-24 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
            <h2 className="text-xl md:text-2xl font-black text-text-primary tracking-tight mb-10">
              All Articles
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] max-md:grid-cols-1 gap-7">
              {remainingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative bg-white rounded-3xl border border-gray-100 shadow-[var(--shadow-card-rest)] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[var(--shadow-card-elevated)] hover:-translate-y-1.5"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />
                  <div className="relative h-[210px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span
                      className="absolute top-4 left-4 text-[0.65rem] font-black tracking-[0.08em] uppercase text-white py-1.5 px-3 rounded-full backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                      style={{
                        background: categoryColors[post.category] ?? "#555",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="relative z-[3] p-6 pb-7 flex flex-col flex-1 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[0.75rem] text-text-muted mb-3">
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </time>
                      <span className="text-gray-300">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-[1.05rem] font-bold text-text-primary leading-[1.35] mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-inherit no-underline transition-colors duration-200 hover:text-gold-500"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.7rem] font-semibold text-gold-500 bg-gold-50 py-0.5 px-2.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-bold text-gold-500 no-underline tracking-wide self-start transition-colors duration-200 hover:text-gold-600"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
