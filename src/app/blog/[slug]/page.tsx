import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug, getBlogSlugs } from "@/utils/blogPosts";

const SITE_URL = "https://www.holidayplanner.in";

/* ── Static Params ── */
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Holiday Planner Odisha`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

/* ── Page ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  /* BlogPosting structured data */
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Holiday Planner",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    url: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "en-IN",
    about: {
      "@type": "Place",
      name: "Odisha, India",
      "@id": "https://www.wikidata.org/wiki/Q20071",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-white pt-[60px]">
        {/* Breadcrumb */}
        <div className="max-w-[1180px] mx-auto px-6 pt-8 pb-4">
          <nav className="flex items-center gap-2 text-xs text-text-muted">
            <Link
              href="/"
              className="text-text-muted no-underline hover:text-gold-500 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href="/blog"
              className="text-text-muted no-underline hover:text-gold-500 transition-colors"
            >
              Blog
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-text-muted/60">{post.category}</span>
          </nav>
        </div>

        {/* Article Header */}
        <section className="max-w-[1180px] mx-auto px-6 pb-8">
          <span className="inline-block text-[0.7rem] font-black tracking-[0.08em] uppercase text-gold-500 mb-4">
            {post.category}
          </span>
          <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-black text-text-primary leading-[1.15] tracking-tight mb-5">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6 max-w-[660px]">
            {post.excerpt}
          </p>
          <div className="flex items-center flex-wrap gap-2 text-[0.82rem] text-text-muted">
            <span>By {post.author}</span>
            <span className="text-gray-300">·</span>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-gray-300">·</span>
            <span>{post.readTime}</span>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-[1180px] mx-auto px-6 mb-10">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-2xl object-cover max-h-[480px]"
            width={1200}
            height={600}
            sizes="100vw"
            priority
          />
        </div>

        {/* Article + Sidebar */}
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-[1fr_300px] gap-10 items-start max-[900px]:grid-cols-1">
          <article>
            {/* Content */}
            <div
              className="text-text-secondary text-base leading-relaxed [&_h2]:text-text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-gray-100 [&_h3]:text-text-primary [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-6 [&_ul]:text-text-secondary [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:mb-2 [&_a]:text-gold-500 [&_a]:font-semibold [&_a]:underline [&_a]:decoration-gold-400/30 hover:[&_a]:text-gold-600 hover:[&_a]:decoration-gold-500 [&_strong]:text-text-primary [&_strong]:font-bold [&_em]:text-text-muted [&_em]:italic [&_blockquote]:border-l-4 [&_blockquote]:border-l-gold-400 [&_blockquote]:bg-gold-50/50 [&_blockquote]:text-text-secondary [&_blockquote]:pl-4 [&_blockquote]:py-3 [&_blockquote]:my-6 [&_blockquote]:rounded-r-xl"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 pb-10 border-t border-gray-100 mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gold-50 text-gold-500 px-3 py-1 rounded-full font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 sticky top-[100px] max-[900px]:static">
            <div className="group relative bg-white rounded-3xl border border-gray-100 p-6 shadow-[var(--shadow-card-rest)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-[1]">
                <h3 className="text-base font-extrabold text-text-primary mb-2.5">
                  Plan Your Trip
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  Let our local experts design the perfect Odisha itinerary —
                  tailored to your dates, budget, and interests.
                </p>
                <Link
                  href="/packages"
                  className="block w-full py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold text-sm rounded-full text-center no-underline mb-2.5 hover:shadow-[var(--shadow-badge-glow)] transition-all duration-300"
                >
                  View Packages
                </Link>
                <Link
                  href="/contact"
                  className="block w-full py-3 border border-gold-400/25 text-gold-500 font-bold text-sm rounded-full text-center no-underline hover:bg-gold-50 transition-all duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl border border-gray-100 p-6 shadow-[var(--shadow-card-rest)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-[1]">
                <h3 className="text-base font-extrabold text-text-primary mb-2.5">
                  Need a Car?
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  Explore Odisha on your own schedule with our comfortable,
                  GPS-tracked fleet.
                </p>
                <Link
                  href="/car-booking"
                  className="block w-full py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-bold text-sm rounded-full text-center no-underline mb-2.5 hover:shadow-[var(--shadow-badge-glow)] transition-all duration-300"
                >
                  Book a Car
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50/60 py-16 border-t border-gray-100 mt-12">
            <div className="max-w-[1180px] mx-auto px-6">
              <div className="text-center mb-10">
                <span className="block text-[0.8rem] font-extrabold text-gold-400 uppercase tracking-[0.15em] mb-2">
                  Keep Reading
                </span>
                <h2 className="text-2xl font-black text-text-primary tracking-tight">
                  More Odisha Travel Guides
                </h2>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                {relatedPosts.map((p) => (
                  <article
                    key={p.slug}
                    className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[var(--shadow-card-rest)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-elevated)]"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />
                    <Image
                      src={p.image}
                      alt={p.title}
                      className="w-full h-[180px] object-cover block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="relative z-[3] p-5 border-t border-gray-100">
                      <span className="text-[0.7rem] font-extrabold tracking-[0.1em] uppercase text-gold-400 block mb-1.5">
                        {p.category}
                      </span>
                      <h3 className="text-[0.95rem] font-bold text-text-primary leading-snug mb-2">
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-inherit no-underline hover:text-gold-500 transition-colors"
                        >
                          {p.title}
                        </Link>
                      </h3>
                      <span className="text-xs text-text-muted">
                        {p.readTime}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
