import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Robot Vacuum Brand Comparison: Shark vs Eufy vs Roborock vs Dreame",
  description:
    "A matched-tier comparison of four robot vacuum brands at a similar price point, plus links to our deeper buying guide for each brand.",
  path: "/guide/robot-vacuum-brand-comparison",
});

const BRANDS = [
  {
    asin: "B0FJC51J12",
    brand: "Shark",
    name: "Shark Stratos 2-in-1 Robot Vacuum & Mop, AV2700ZE",
    amazonUrl: "https://www.amazon.com/dp/B0FJC51J12?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41QK4hUxlYL._SL500_.jpg",
    price: "$549.99",
    rating: "4.0",
    reviews: "23,548 reviews",
    guideHref: "/guide/best-shark-robot-vacuums",
    note: "Vacuum-and-mop 2-in-1 deck with a self-empty base. Shark's lineup splits clearly between vacuum-only and Matrix-style 2-in-1 models, worth checking before comparing on price alone.",
  },
  {
    asin: "B0FK2HPNCB",
    brand: "eufy",
    name: "eufy E25 Robot Vacuum and Mop Combo, 20,000 Pa",
    amazonUrl: "https://www.amazon.com/dp/B0FK2HPNCB?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31j3ZN+fhqL._SL500_.jpg",
    price: "$629.99",
    rating: "4.4",
    reviews: "53,857 reviews",
    guideHref: "/guide/best-eufy-robot-vacuums",
    note: "The highest rating and deepest review history of the four at this tier, paired with a HydroJet self-washing roller mop.",
  },
  {
    asin: "B0GGRSMXKN",
    brand: "Roborock",
    name: "roborock 2026 New Qrevo S Pro Robot Vacuum and Mop, 18,500Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GGRSMXKN?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31DKyfvT1pL._SL500_.jpg",
    price: "$549.99",
    rating: "4.2",
    reviews: "2,788 reviews",
    guideHref: "/guide/best-roborock-robot-vacuums",
    note: "Newest release of the four, so its review count is still building relative to the others, but it sits in Roborock's upper Qrevo tier with a premium dock feature set.",
  },
  {
    asin: "B0FSJPFDPV",
    brand: "Dreame",
    name: "dreame L40 Ultra Gen 2 Robot Vacuum and Mop with 25,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0FSJPFDPV?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31Vm7qUbB3L._SL500_.jpg",
    price: "$584.99",
    rating: "4.2",
    reviews: "929 reviews",
    guideHref: "/guide/best-dreame-robot-vacuums",
    note: "The highest stated suction figure of the four, though a high Pa number alone does not determine real-world pickup, worth weighing against navigation and dock quality too.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` },
    { "@type": "ListItem", position: 3, name: "Robot Vacuum Brand Comparison", item: `${SITE_URL}/guide/robot-vacuum-brand-comparison` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Robot Vacuum Brand Comparison: Shark vs Eufy vs Roborock vs Dreame",
  description: "A matched-tier comparison of four robot vacuum brands at a similar price point, plus links to our deeper buying guide for each brand.",
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  author: { "@type": "Person", name: "Jamie Cole", url: `${SITE_URL}/author/jamie-cole` },
  publisher: { "@type": "Organization", name: "WorthRated", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/robot-vacuum-brand-comparison` },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Container className="py-12 max-w-4xl">
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-6">
          <Link prefetch={false} href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link prefetch={false} href="/guide" className="hover:text-brand transition-colors">Buying Guides</Link>
          <span>/</span>
          <span className="text-ink">Brand Comparison</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Advice</span>
          <h1 className="mt-3 mb-4 tracking-tight">Robot Vacuum Brand Comparison</h1>
          <p className="text-lg text-ink-secondary leading-relaxed">
            Comparing brands by their absolute cheapest or most expensive model rarely tells you much, since a $150 budget robot and a $1,600 flagship from the same brand solve very different problems. Here we lined up one representative model from four popular brands at a similar price tier (roughly $550 to $630) so the comparison is actually apples to apples.
          </p>
        </header>

        <div className="mb-10 p-4 rounded-xl bg-bg border border-border text-xs text-ink-secondary">
          <strong className="text-ink">Quick note:</strong> This is a snapshot comparison at one price tier, not a full ranking of every model each brand sells. We may earn a commission on Amazon links on this page.{" "}
          <Link prefetch={false} href="/affiliate-disclosure" className="text-brand hover:underline">Affiliate disclosure</Link>.
        </div>

        <div className="overflow-x-auto mb-12 rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg text-left">
                <th className="px-4 py-3 font-bold text-ink">Brand</th>
                <th className="px-4 py-3 font-bold text-ink">Model</th>
                <th className="px-4 py-3 font-bold text-ink">Price</th>
                <th className="px-4 py-3 font-bold text-ink hidden sm:table-cell">Rating</th>
                <th className="px-4 py-3 font-bold text-ink hidden sm:table-cell">Reviews</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {BRANDS.map((b) => (
                <tr key={b.asin}>
                  <td className="px-4 py-3 font-semibold text-ink">{b.brand}</td>
                  <td className="px-4 py-3 text-ink-secondary">
                    <a href={b.amazonUrl} target="_blank" rel="noopener noreferrer sponsored" className="hover:text-brand hover:underline">
                      {b.name}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-ink-secondary">{b.price}</td>
                  <td className="px-4 py-3 text-ink-secondary hidden sm:table-cell">{b.rating}</td>
                  <td className="px-4 py-3 text-ink-secondary hidden sm:table-cell">{b.reviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-8 mb-12">
          {BRANDS.map((b) => (
            <div key={b.asin} className="flex flex-col sm:flex-row gap-5 p-5 rounded-2xl border border-border bg-white">
              <a
                href={b.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="shrink-0 flex items-center justify-center w-full sm:w-40 h-36 rounded-xl border border-border bg-gray-50 overflow-hidden hover:opacity-90 transition-opacity"
              >
                <Image src={b.imageUrl} alt={b.name} width={160} height={144} className="object-contain w-full h-full" unoptimized />
              </a>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-ink mb-1">{b.brand}: {b.name}</h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-3">{b.note}</p>
                <Link prefetch={false} href={b.guideHref} className="text-sm font-semibold text-brand hover:underline">
                  See the full {b.brand} buying guide &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink mb-3 tracking-tight">How to actually compare brands</h2>
          <p className="text-ink-secondary leading-relaxed mb-3">
            Matching price tier is a start, but a fair comparison also means checking the same things across brands: whether the dock washes and dries mop pads or just empties the dustbin, how navigation is handled (LiDAR mapping is common across all four brands here, but is a separate question from obstacle avoidance), and what ongoing consumables (pads, filters, detergent) actually cost per year.
          </p>
          <p className="text-ink-secondary leading-relaxed">
            Review count and rating are useful signals of real-world reliability at scale, but a newer release with fewer reviews is not automatically worse, it just has a shorter public track record to check against.
          </p>
        </section>

        <section className="p-6 rounded-2xl border border-border bg-white">
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Best Roomba Robot Vacuums", href: "/guide/best-roomba-robot-vacuums" },
              { title: "Best Robot Vacuum and Mop Combos", href: "/guide/best-robot-vacuum-and-mop-combos" },
            ].map((r) => (
              <Link prefetch={false} key={r.href} href={r.href} className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-brand/40 hover:shadow-sm transition-all group">
                <span className="text-sm font-medium text-ink group-hover:text-brand transition-colors">{r.title}</span>
                <svg className="w-4 h-4 text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
