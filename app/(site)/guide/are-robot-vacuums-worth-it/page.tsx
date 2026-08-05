import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Are Robot Vacuums Worth It?",
  description:
    "A practical look at what a robot vacuum actually saves you, what it does not replace, and which households get the most value from one.",
  path: "/guide/are-robot-vacuums-worth-it",
});

const SECTIONS = [
  {
    heading: "What a robot vacuum actually saves you",
    body: "A robot vacuum handles the routine, everyday floor pass, the kind of light cleaning you would otherwise do every day or two just to keep dust and hair from building up. Run on a schedule, it keeps floors at a baseline level of clean without you having to think about it. That is a real, ongoing time save for the specific task of frequent light vacuuming, but it is a narrower job than \"cleaning the house.\"",
  },
  {
    heading: "What it does not replace",
    body: "Robot vacuums generally do not climb stairs, so a multi-level home still needs a separate plan for each floor without a unit up there, or manual vacuuming of stairs specifically. Deep cleaning under heavy furniture, edge and corner detail work, and picking up larger spills or debris often still needs a handheld or upright vacuum on hand. Most owners keep a second, traditional vacuum for these gaps rather than replacing it entirely.",
  },
  {
    heading: "The real cost is more than the sticker price",
    body: "Beyond the purchase price, expect ongoing costs: replacement filters, brushes, mop pads, and dustbin bags if the model uses them, plus detergent for models with self-washing mop docks. None of these are large individually, but they add up over a few years of ownership and are worth factoring in before comparing two models purely on upfront price.",
  },
  {
    heading: "Households that tend to get the most value",
    body: "Buyers who benefit most tend to be people who want floors kept at a consistent baseline without daily manual effort: households with pets shedding regularly, people managing mobility limitations who want to reduce how often they need to push a heavy upright vacuum, and busy households where daily vacuuming was realistically not happening anyway. If you already vacuum thoroughly once a week and that works fine for your home, a robot vacuum adds convenience rather than solving a real gap.",
  },
  {
    heading: "Where robot vacuums tend to struggle",
    body: "Homes with a lot of loose cables, low furniture with tight clearance, thick shag or high-pile rugs, or layouts with many small rooms and doorway thresholds tend to see more interventions (the robot getting stuck, missing a room, or needing a manual rescue) than open, simple layouts. If your home fits this description, it is worth reading reviews for the specific model you are considering with your exact floor plan in mind before buying.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` },
    { "@type": "ListItem", position: 3, name: "Are Robot Vacuums Worth It?", item: `${SITE_URL}/guide/are-robot-vacuums-worth-it` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Are Robot Vacuums Worth It?",
  description: "A practical look at what a robot vacuum actually saves you, what it does not replace, and which households get the most value from one.",
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  author: { "@type": "Person", name: "Jamie Cole", url: `${SITE_URL}/author/jamie-cole` },
  publisher: { "@type": "Organization", name: "WorthRated", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/are-robot-vacuums-worth-it` },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Container className="py-12 max-w-3xl">
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-6">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-brand transition-colors">Buying Guides</Link>
          <span>/</span>
          <span className="text-ink">Are Robot Vacuums Worth It?</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Advice</span>
          <h1 className="mt-3 mb-4 tracking-tight">Are Robot Vacuums Worth It?</h1>
          <p className="text-lg text-ink-secondary leading-relaxed">
            Before comparing specific models, it helps to be honest about what a robot vacuum actually does well, what it does not replace, and whether your specific home and habits are a good fit. Here is a straightforward answer, not a sales pitch.
          </p>
        </header>

        <div className="mb-8 p-4 rounded-xl bg-bg border border-border text-xs text-ink-secondary">
          <strong className="text-ink">Quick note:</strong> This is general buying advice, not a ranked product roundup. We may earn a commission on Amazon links elsewhere on this site.{" "}
          <Link href="/affiliate-disclosure" className="text-brand hover:underline">Affiliate disclosure</Link>.
        </div>

        <div className="space-y-8">
          {SECTIONS.map((item) => (
            <section key={item.heading}>
              <h2 className="text-xl font-bold text-ink mb-2 tracking-tight">{item.heading}</h2>
              <p className="text-ink-secondary leading-relaxed">{item.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-14 p-6 rounded-2xl border border-border bg-white">
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Best Robot Vacuums for Seniors", href: "/guide/best-robot-vacuums-for-seniors" },
              { title: "Best Self-Emptying Robot Vacuums", href: "/guide/best-self-emptying-robot-vacuums" },
              { title: "Best Robot Vacuums for Pet Hair", href: "/guide/best-robot-vacuums-for-pet-hair" },
              { title: "Robot Vacuum Brand Comparison", href: "/guide/robot-vacuum-brand-comparison" },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-brand/40 hover:shadow-sm transition-all group">
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
