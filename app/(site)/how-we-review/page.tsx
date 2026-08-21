import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { guides } from "@/data/guides";
import { categories } from "@/data/categories";

export const metadata: Metadata = buildMetadata({
  title: "How We Review and Compare Products",
  description:
    "Our full methodology for evaluating easier-to-use home products: scoring criteria, research process, badge meanings, and what we do and don't claim about our testing.",
  path: "/how-we-review",
});

const SCORE_DIMS = [
  {
    key: "easeOfUse",
    label: "Ease of Use",
    weight: "25%",
    description:
      "How straightforward the product is to operate day-to-day, without a learning curve. This is the single biggest factor in every score we publish.",
  },
  {
    key: "controlsReadability",
    label: "Controls and Readability",
    weight: "20%",
    description:
      "Clear labeling, legible displays, and buttons that are easy to find by touch or sight. We penalize products with cramped, unlabeled, or overly small controls.",
  },
  {
    key: "weightHandling",
    label: "Weight and Handling",
    weight: "15%",
    description:
      "How comfortable the product is to lift, carry, and maneuver during normal use. We look at real operating weight, balance, and grip, not just a spec-sheet number.",
  },
  {
    key: "setupDifficulty",
    label: "Setup Difficulty",
    weight: "15%",
    description:
      "How much work it takes to get the product running out of the box - assembly steps, pairing/connection process, and whether the manual is actually clear.",
  },
  {
    key: "cleaningMaintenance",
    label: "Cleaning and Maintenance",
    weight: "10%",
    description:
      "How much ongoing upkeep the product demands to keep working well - filter changes, battery care, cleaning frequency, and part replacement.",
  },
  {
    key: "reliabilityWarranty",
    label: "Reliability and Warranty",
    weight: "10%",
    description:
      "Build quality signals and the manufacturer's warranty coverage, cross-checked against patterns in verified buyer feedback around long-term failure.",
  },
  {
    key: "valueForMoney",
    label: "Value for Money",
    weight: "5%",
    description:
      "Price weighed against durability, features, and long-term use. We do not penalize a product simply for being expensive - we evaluate whether the price is justified by what you get.",
  },
];

const BADGES = [
  {
    label: "Best Overall",
    meaning:
      "The top-scoring product in the category once our seven weighted criteria are combined into a single Worth Rating. This is our primary recommendation for most buyers.",
  },
  {
    label: "Best Budget",
    meaning:
      "The highest-scoring product at the lower end of the price range. It may trade some build quality or features for a lower price, but it represents the best value for cost-conscious buyers.",
  },
  {
    label: "Best for Seniors",
    meaning:
      "The product most suited to buyers who weigh ease of use, weight, and controls above all else - even if it isn't the single highest-scoring product overall.",
  },
  {
    label: "Editor's Choice",
    meaning:
      "A product that earns a strong recommendation for reasons not fully captured in our seven scored criteria - typically exceptional design, a standout single feature, or unusually strong buyer satisfaction.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "How We Review", item: `${SITE_URL}/how-we-review` },
  ],
};

const methodologyArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How We Review and Compare Products",
  description:
    "Our full methodology for evaluating small-space products: scoring criteria, research process, badge meanings, and what we do and don't claim about our testing.",
  url: `${SITE_URL}/how-we-review`,
  author: {
    "@type": "Organization",
    name: "WorthRated",
    url: SITE_URL,
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function HowWeReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyArticleSchema) }} />
    <Container narrow className="py-14">
      {/* Header */}
      <header className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">Methodology</span>
        <h1 className="text-4xl font-bold text-ink mt-2 mb-4 tracking-tight">
          How We Review and Compare Products
        </h1>
        <p className="text-lg text-ink-secondary leading-relaxed max-w-2xl">
          Every recommendation on WorthRated follows the same documented process. Here is exactly how we evaluate products, how we assign scores, and what our editorial badges mean.
        </p>
      </header>

      {/* Honest disclaimer callout */}
      <div className="mb-10 p-5 rounded-lg border-l-4 border-brand bg-brand-light/40">
        <p className="text-sm text-ink leading-relaxed">
          <strong>Important:</strong> Unless explicitly stated otherwise, our guides are based on product research and comparison - not hands-on lab testing. We evaluate products using manufacturer specifications, use-case analysis, and buyer feedback patterns from verified Amazon reviews. We do not operate a physical testing facility. We believe this is the honest way to publish an affiliate comparison site, and we flag it prominently so readers can make informed decisions.
        </p>
      </div>

      {/* Research process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">Our Research Process</h2>
        <p className="text-ink-secondary leading-relaxed mb-6">
          For every buying guide, we follow the same six-step process before publishing a recommendation:
        </p>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              title: "Define the use case",
              body: "Who is buying this, and what will make it easier or harder for them day to day? We write buying guides around specific contexts - an active, independent adult using a product solo is different from an adult child buying it for a parent. Use-case framing is set before any product is evaluated.",
            },
            {
              n: "2",
              title: "Build the candidate list",
              body: "We identify relevant products through Amazon category searches, manufacturer documentation, and consumer review aggregators. We aim to consider all current products that could plausibly earn a recommendation.",
            },
            {
              n: "3",
              title: "Filter by specifications",
              body: "Products that don't meet baseline requirements for ease of use - unclear controls, illegible displays, unreasonably heavy for the task, or discontinued/unavailable listings - are excluded before scoring.",
            },
            {
              n: "4",
              title: "Score against our seven criteria",
              body: "Remaining products are scored across Ease of Use, Controls and Readability, Weight and Handling, Setup Difficulty, Cleaning and Maintenance, Reliability and Warranty, and Value for Money. Each dimension is weighted to produce a single Worth Rating on a 1-10 scale.",
            },
            {
              n: "5",
              title: "Analyze negative reviews",
              body: "We read 1-3 star Amazon reviews specifically to find failure patterns not visible in aggregate ratings. These patterns often reveal durability issues, size mismatches, or compatibility problems that positive reviews mask.",
            },
            {
              n: "6",
              title: "Select picks and write reasons",
              body: "We choose top picks, document the specific reasons clearly and honestly, and flag any notable trade-offs. We do not bury weaknesses.",
            },
          ].map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="w-7 h-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                {step.n}
              </span>
              <div>
                <p className="font-semibold text-ink text-sm">{step.title}</p>
                <p className="text-sm text-ink-secondary leading-relaxed mt-0.5">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Scoring criteria */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-2 tracking-tight">Scoring Criteria</h2>
        <p className="text-ink-secondary leading-relaxed mb-6">
          We score every product on a 1-10 scale across seven dimensions. A weighted combination produces the Worth Rating shown on each review and comparison page.
        </p>

        <div className="rounded-card border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-bg border-b border-border">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-ink">Criterion</th>
                <th className="text-left px-5 py-3 font-semibold text-ink w-20">Weight</th>
                <th className="text-left px-5 py-3 font-semibold text-ink">What We Evaluate</th>
              </tr>
            </thead>
            <tbody>
              {SCORE_DIMS.map((dim, i) => (
                <tr key={dim.key} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-bg/50"}`}>
                  <td className="px-5 py-4 font-semibold text-ink align-top">{dim.label}</td>
                  <td className="px-5 py-4 font-bold text-brand align-top">{dim.weight}</td>
                  <td className="px-5 py-4 text-ink-secondary leading-relaxed">{dim.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Score scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">Score Scale</h2>
        <div className="space-y-3">
          {[
            { range: "9.0-10.0", label: "Excellent", color: "text-score-high bg-score-high/10 border-score-high/30", desc: "Best-in-class for easy, everyday use. We recommend this product without hesitation to anyone in the target use case." },
            { range: "8.0-8.9", label: "Very Good",  color: "text-score-mid bg-score-mid/10 border-score-mid/30", desc: "Strong performer with minor trade-offs. A confident recommendation - the caveats are noted clearly in the review." },
            { range: "7.0-7.9", label: "Good",        color: "text-score-mid bg-score-mid/10 border-score-mid/30", desc: "Solid product that performs its core function well, but better alternatives exist in at least one important dimension." },
            { range: "6.0-6.9", label: "Fair",        color: "text-score-low bg-score-low/10 border-score-low/30", desc: "Acceptable but with noticeable shortcomings. We include these only when they represent the best available budget option." },
            { range: "Below 6.0", label: "Not Included", color: "text-ink-muted bg-bg border-border", desc: "We generally do not include products that score below 6.0 in our published guides." },
          ].map((row) => (
            <div key={row.range} className="flex flex-col gap-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold self-start ${row.color}`}>
                <span>{row.range}</span>
                <span>·</span>
                <span>{row.label}</span>
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed">{row.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Badge meanings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-2 tracking-tight">What Our Badges Mean</h2>
        <p className="text-ink-secondary leading-relaxed mb-6">
          Each product in a guide may carry one editorial badge. Here is exactly what each badge means:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BADGES.map((badge) => (
            <div key={badge.label} className="p-4 rounded-card border border-border bg-white">
              <span className="inline-block px-2.5 py-1 rounded-full bg-brand text-white text-xs font-bold mb-2">
                {badge.label}
              </span>
              <p className="text-sm text-ink-secondary leading-relaxed">{badge.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we don't do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">What We Don&apos;t Do</h2>
        <ul className="space-y-3">
          {[
            "We do not accept payment from brands or manufacturers for higher placement, better scores, or favorable reviews.",
            "We do not claim hands-on lab testing unless we explicitly state it in the review. Our evaluations are research-based.",
            "We do not publish guides on products where we cannot find sufficient real-world review data to evaluate responsibly.",
            "We do not use AI-generated filler. Every guide is researched, scored, and written by a human editor.",
            "We do not bury product weaknesses. Trade-offs and cons are documented in every review.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed">
              <svg className="w-4 h-4 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Guide updates */}
      <section className="mb-12 p-5 bg-white rounded-card border border-border">
        <h2 className="text-lg font-bold text-ink mb-2">Guide Updates</h2>
        <p className="text-sm text-ink-secondary leading-relaxed">
          We review and update our guides when: (a) a better product in the category becomes available, (b) significant price changes make a previous recommendation less compelling, or (c) a pattern of new negative reviews indicates a quality or availability change. Every guide and review displays its last-updated date.
        </p>
      </section>

      {/* Internal links */}
      <section>
        <h2 className="text-xl font-bold text-ink mb-5 tracking-tight">Explore Our Work</h2>

        <div className="mb-6">
          <p className="text-sm font-semibold text-ink-secondary uppercase tracking-wide mb-3">Buying Guides</p>
          <div className="flex flex-wrap gap-2">
            {guides.map((guide) => (
              <Link prefetch={false}
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="px-3 py-1.5 rounded-full border border-border bg-white text-sm text-ink-secondary hover:border-brand hover:text-brand transition-colors"
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink-secondary uppercase tracking-wide mb-3">Product Categories</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link prefetch={false}
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="px-3 py-1.5 rounded-full border border-border bg-white text-sm text-ink-secondary hover:border-brand hover:text-brand transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
    </>
  );
}
