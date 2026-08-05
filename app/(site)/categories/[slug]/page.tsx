import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FeaturedGuides } from "@/components/sections/FeaturedGuides";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryComparisonTable } from "@/components/product/CategoryComparisonTable";
import { AffiliateDisclosureBar } from "@/components/affiliate/AffiliateDisclosureBar";
import { Badge } from "@/components/ui/Badge";
import { CategoryHeroBanner } from "@/components/sections/CategoryHeroBanner";
import { categories } from "@/data/categories";
import {
  getCategoryBySlug,
  getAllCategories,
} from "@/lib/helpers";
import { getPublicProductsForCategoryHub } from "@/lib/public-products";
import { getPublicGuidesByCategory } from "@/lib/public-guides";
import { buildMetadata, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

// ─── Per-category editorial educational topics ────────────────────────────────

interface EducationalTopic {
  question: string;
  href?: string;      // internal route if guide exists
  comingSoon?: boolean;
}

// All topics are marked comingSoon until a real guide is published for that
// slug — avoids linking to guide pages that don't exist yet.
const educationalTopics: Record<string, EducationalTopic[]> = {
  "easy-kitchen": [
    { question: "How to choose a microwave with clear, simple controls", href: "/guide/how-to-choose-a-microwave-with-simple-controls" },
    { question: "What makes a coffee maker easy to use every morning", href: "/guide/best-easy-to-use-coffee-makers" },
    { question: "Choosing kitchen appliances with readable displays", href: "/guide/choosing-kitchen-appliances-with-readable-displays" },
  ],
  "easy-cleaning": [
    { question: "Are robot vacuums worth it?", href: "/guide/are-robot-vacuums-worth-it" },
    { question: "Robot vacuum brand comparison: Shark vs eufy vs Roborock vs Dreame", href: "/guide/robot-vacuum-brand-comparison" },
    { question: "What to look for in a low-maintenance cleaning tool", comingSoon: true },
  ],
  "simple-tech": [
    { question: "How to choose a phone with simple, readable menus", comingSoon: true },
    { question: "What makes a TV remote genuinely easy to use", comingSoon: true },
    { question: "Smart home devices that don't require a manual", comingSoon: true },
  ],
  "garden-yard": [
    { question: "Choosing garden tools that are comfortable to grip and lift", comingSoon: true },
    { question: "What to look for in a lightweight garden kneeler", comingSoon: true },
    { question: "How to pick yard tools that reduce bending and strain", comingSoon: true },
  ],
};

// ─── Static generation ────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.name} Buying Guides`,
    description: `Browse ${category.name.toLowerCase()} buying guides and product reviews on WorthRated, compared on ease of use, setup, and long-term value.`,
    path: `/categories/${slug}`,
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const [guides, products] = await Promise.all([
    getPublicGuidesByCategory(slug),
    getPublicProductsForCategoryHub(category),
  ]);
  const relatedCategories = getAllCategories().filter((c) => c.slug !== slug);
  const topics = educationalTopics[slug] ?? [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Categories", item: `${SITE_URL}/categories` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${SITE_URL}/categories/${slug}` },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name}, WorthRated`,
    description: category.description,
    url: `${SITE_URL}/categories/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <Container className="py-10">

      {/* ── 1. Breadcrumbs ──────────────────────────────────────────────── */}
      <Breadcrumbs
        crumbs={[
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />

      {/* ── 2. Category hero banner ─────────────────────────────────────── */}
      <div className="mt-6">
        <CategoryHeroBanner
          category={category}
          productCount={products.length}
          guideCount={guides.length}
          topProductName={products[0]?.name}
          topProductScore={products[0]?.scores?.overall}
          topProductSlug={products[0]?.slug}
        />
      </div>

      {/* Jump links */}
      <div className="flex flex-wrap gap-2 mb-10">
        <span className="text-xs text-ink-muted self-center mr-1">Jump to:</span>
        {guides.length > 0 && (
          <a href="#buying-guides" className="text-xs px-3 py-1.5 rounded-badge bg-white border border-border text-ink-secondary hover:border-brand hover:text-brand transition-all font-medium">
            Buying Guides
          </a>
        )}
        {products.length > 0 && (
          <>
            <a href="#products" className="text-xs px-3 py-1.5 rounded-badge bg-white border border-border text-ink-secondary hover:border-brand hover:text-brand transition-all font-medium">
              Product Reviews
            </a>
            <a href="#compare" className="text-xs px-3 py-1.5 rounded-badge bg-white border border-border text-ink-secondary hover:border-brand hover:text-brand transition-all font-medium">
              Compare
            </a>
          </>
        )}
        {topics.length > 0 && (
          <a href="#guides" className="text-xs px-3 py-1.5 rounded-badge bg-white border border-border text-ink-secondary hover:border-brand hover:text-brand transition-all font-medium">
            Guides & Tips
          </a>
        )}
      </div>

      {/* ── 3. Featured buying guides ────────────────────────────────────── */}
      {guides.length > 0 && (
        <div id="buying-guides" className="mb-14 scroll-mt-20">
          <FeaturedGuides
            guides={guides}
            title={`${category.name} Buying Guides`}
            showAll={false}
          />
        </div>
      )}

      {/* ── 4. Popular product reviews ───────────────────────────────────── */}
      {products.length > 0 && (
        <section id="products" className="mb-14 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                Product Reviews
              </span>
              <h2 className="text-2xl font-bold text-ink mt-1 tracking-tight">
                Top-Rated {category.name} Products
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors flex items-center gap-1 shrink-0"
            >
              All reviews →
            </Link>
          </div>

          <AffiliateDisclosureBar className="mb-5" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* ── 5. Comparison table ──────────────────────────────────────────── */}
      {products.length > 1 && (
        <section id="compare" className="mb-14 scroll-mt-20">
          <div className="mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Quick Compare
            </span>
            <h2 className="text-2xl font-bold text-ink mt-1 mb-2 tracking-tight">
              {category.name}, Side-by-Side
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl">
              All {products.length} {category.name.toLowerCase()} products we evaluated, sorted by
              overall score. Click any product name to read the full review.
            </p>
          </div>
          <CategoryComparisonTable products={products} />
          <p className="mt-3 text-xs text-ink-muted">
            Scores reflect small-space performance specifically.{" "}
            <Link href="/compare" className="text-brand hover:text-brand-dark font-medium transition-colors">
              See full comparison page →
            </Link>
          </p>
        </section>
      )}

      {/* ── 6. Educational guide links ───────────────────────────────────── */}
      {topics.length > 0 && (
        <section id="guides" className="mb-14 scroll-mt-20">
          <div className="mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Guides & Tips
            </span>
            <h2 className="text-2xl font-bold text-ink mt-1 mb-2 tracking-tight">
              {category.name} Buying Advice
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl">
              Specific buying advice for common small-space questions, each linked to our full guide where available.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {topics.map((topic) => (
              <div key={topic.question}>
                {topic.comingSoon ? (
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-lg border border-border opacity-70">
                    <svg
                      className="w-4 h-4 text-ink-muted shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-ink-secondary leading-snug">{topic.question}</p>
                    </div>
                    <Badge variant="muted">Coming soon</Badge>
                  </div>
                ) : (
                  <Link
                    href={topic.href!}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border hover:border-brand/30 hover:shadow-card transition-all group"
                  >
                    <svg
                      className="w-4 h-4 text-brand shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <p className="flex-1 text-sm font-medium text-ink group-hover:text-brand transition-colors leading-snug">
                      {topic.question}
                    </p>
                    <svg
                      className="w-4 h-4 text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 7. Related categories ────────────────────────────────────────── */}
      {relatedCategories.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group flex items-center gap-3 p-4 bg-white rounded-card border border-border hover:border-brand/30 hover:shadow-card transition-all"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white text-xs font-bold"
                  style={{ backgroundColor: cat.color }}
                  aria-hidden="true"
                >
                  {cat.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink text-sm group-hover:text-brand transition-colors leading-snug">
                    {cat.name}
                  </p>
                  <p className="text-xs text-ink-muted mt-0.5 truncate">{cat.shortDescription}</p>
                </div>
                <svg
                  className="w-4 h-4 text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      )}
      </Container>
    </>
  );
}
