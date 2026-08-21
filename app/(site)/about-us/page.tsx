import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";

// ── Metadata ──────────────────────────────────────────────────────────────────

const baseMeta = buildMetadata({
  title: "About WorthRated | Independent Buying Guides for Easier Living",
  description:
    "WorthRated helps active, independent adults, and the family members researching for them, find home products that are genuinely easy to use.",
  path: "/about-us",
});

export const metadata: Metadata = {
  ...baseMeta,
  keywords: [
    "WorthRated",
    "what is WorthRated",
    "WorthRated reviews",
    "easy to use products for seniors",
    "buying guides for older adults",
    "easy kitchen appliances",
    "simple tech for seniors",
  ],
  openGraph: {
    ...(baseMeta.openGraph as object),
    title: "About WorthRated",
    description:
      "Learn what WorthRated is, who it helps, how recommendations are created, and how the site earns through transparent affiliate links.",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const AUDIENCE = [
  {
    title: "Active, independent adults 55-70",
    desc: "Still living independently and shopping for themselves, looking for products that work well without a steep learning curve or fine print they can't read.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "Adult children researching for parents",
    desc: "Trying to find the right microwave, vacuum, or phone for a parent, someone who wants a genuinely good product, not something that looks patronizing or overly medical.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Anyone tired of confusing products",
    desc: "Readers who just want appliances and tools with clear buttons, readable displays, and manageable weight, without buying into a niche marketed only as 'for seniors.'",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
];

const DIFFERENTIATORS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    title: "Ease-of-use focused",
    desc: "Every product is evaluated for how easy it actually is to set up, operate, and maintain, not just for feature count. Ease of Use is the single largest factor in our score.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Clear product comparisons",
    desc: "We use a consistent Worth Rating across seven weighted criteria for every product we evaluate, so scores stay comparable across categories. See our full methodology on the How We Rate page.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Practical buying guides",
    desc: "Our guides are structured around real buying decisions: who a product is for, what trade-offs exist, and a clear recommendation with reasons, not a wall of near-identical listicle picks.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Fewer, better recommendations",
    desc: "We pick a small number of genuinely good options and explain clearly why, instead of a 15-item list designed to maximize affiliate links.",
  },
];

const COVERS = [
  { label: "Easy Kitchen", href: "/categories/easy-kitchen" },
  { label: "Easy Cleaning", href: "/categories/easy-cleaning" },
  { label: "Simple Tech", href: "/categories/simple-tech" },
  { label: "Garden & Yard", href: "/categories/garden-yard" },
];

const EDITORIAL_STANDARDS = [
  "We disclose affiliate links clearly on every page that contains them.",
  "We do not publish paid placements as independent editorial recommendations.",
  "We do not claim hands-on testing unless a specific article's data confirms it.",
  "We avoid exact prices unless they are verified and maintainable.",
  "We prioritize ease of use, controls, and long-term value over product quantity.",
  "We update guides when information changes or a recommendation no longer holds up.",
];

const FAQ_ITEMS = [
  {
    q: "What is WorthRated?",
    a: "WorthRated is a buying guide website focused on everyday home products, kitchen, cleaning, tech, and garden, that are genuinely easy to use. We research and compare products to help people choose with confidence, especially readers who want simple controls and dependable long-term value.",
  },
  {
    q: "Is WorthRated an online store?",
    a: "No. WorthRated is not an online store. We do not sell, stock, or ship products. We publish buying guides and product comparisons with links to retailers where products can be purchased.",
  },
  {
    q: "Does WorthRated sell products directly?",
    a: "No. WorthRated does not sell products directly. When you click a product link on WorthRated, you are taken to a third-party retailer, most commonly Amazon, to complete the purchase there.",
  },
  {
    q: "How does WorthRated make money?",
    a: "WorthRated earns a small commission when readers purchase products through affiliate links on the site, including through the Amazon Associates program. This does not add any extra cost to you.",
  },
  {
    q: "Are WorthRated recommendations paid placements?",
    a: "No. Recommendation rankings on WorthRated are not influenced by commission rates, brand payments, or sponsored placement fees. Affiliate commissions fund the site but do not decide which products we recommend.",
  },
  {
    q: "Is WorthRated part of Amazon?",
    a: "No. WorthRated is an independent editorial website, not owned by, affiliated with, or endorsed by Amazon. We participate in the Amazon Associates program, which lets independent publishers earn commissions on qualifying purchases, but we operate independently.",
  },
  {
    q: "How are WorthRated recommendations created?",
    a: "Recommendations are based on published product specifications, manufacturer documentation, and patterns in verified buyer feedback. Unless a specific article states otherwise, our guides are research-based comparisons, not hands-on lab tests. Our full methodology is explained on the How We Rate page.",
  },
];

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About WorthRated", item: `${SITE_URL}/about-us` },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About WorthRated",
  description:
    "WorthRated helps active, independent adults and the family members researching for them find genuinely easy-to-use home products through research-based buying guides.",
  url: `${SITE_URL}/about-us`,
  publisher: { "@type": "Organization", name: "WorthRated", url: SITE_URL },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WorthRated",
  url: SITE_URL,
  description:
    "Independent buying guide website comparing everyday home products on ease of use, setup, controls, and long-term value.",
  publishingPrinciples: `${SITE_URL}/how-we-review`,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <Container narrow className="py-14">

        {/* ── H1 Hero ────────────────────────────────────────────────── */}
        <header className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">About WorthRated</span>
          <h1 className="mt-2 mb-3 tracking-tight">
            We rate products for easier living.
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-2xl">
            WorthRated is an independent buying guide site for everyday home products, built for people who want something that&apos;s genuinely easy to use, not just full of features. Built on research, not sponsored rankings.
          </p>
        </header>

        {/* ── What Is WorthRated ──────────────────────────────────────── */}
        <section className="mb-12 p-6 bg-white rounded-2xl border border-border" aria-labelledby="what-is-worthrated">
          <h2 id="what-is-worthrated" className="mb-4 tracking-tight">What Is WorthRated?</h2>
          <div className="space-y-3 text-sm text-ink-secondary leading-relaxed">
            <p>
              <strong className="text-ink">WorthRated is not an online store.</strong> We do not sell products, stock inventory, or process orders. When you click a product link on WorthRated, you go directly to a third-party retailer, usually Amazon, to buy it there.
            </p>
            <p>
              WorthRated publishes <strong className="text-ink">buying guides and product comparisons</strong> to help people figure out which products are worth buying before they spend money. Every guide focuses on a specific product category and the questions that actually matter: how hard is this to set up, how clear are the controls, and will it hold up.
            </p>
            <p>
              If you have searched for something like <em>&ldquo;easiest microwave to use&rdquo;</em> or <em>&ldquo;lightweight vacuum for seniors&rdquo;</em> and found a WorthRated article, that is what we do, we research those questions and publish clear, structured answers.
            </p>
          </div>
        </section>

        {/* ── Mission ───────────────────────────────────────────────── */}
        <section className="mb-12" aria-labelledby="our-mission">
          <h2 id="our-mission" className="mb-4 tracking-tight">Our Mission</h2>
          <div className="space-y-4 text-sm text-ink-secondary leading-relaxed">
            <p>
              A good product shouldn&apos;t require a manual, a phone call to a grandchild, or a magnifying glass to operate. The right choice, one designed for genuine ease of use, makes daily life simpler for everyone, not just people with limited tech patience.
            </p>
            <p>
              WorthRated exists to help <strong className="text-ink">active, independent adults, and the family members researching on their behalf,</strong> find those products without wading through sponsored rankings, vague listicles, or guides that never mention how confusing the controls actually are.
            </p>
          </div>
        </section>

        {/* ── Who WorthRated Is For ───────────────────────────────────── */}
        <section className="mb-12" aria-labelledby="who-for">
          <h2 id="who-for" className="mb-2 tracking-tight">Who WorthRated Is For</h2>
          <p className="text-sm text-ink-secondary mb-6">
            Every guide on WorthRated is written with one of these readers in mind:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AUDIENCE.map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-border bg-white">
                <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── What WorthRated Covers ──────────────────────────────────── */}
        <section className="mb-12" aria-labelledby="what-covers">
          <h2 id="what-covers" className="mb-2 tracking-tight">What WorthRated Covers</h2>
          <p className="text-sm text-ink-secondary mb-5">
            WorthRated publishes guides across four initial content areas:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {COVERS.map((item) => (
              <Link prefetch={false}
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-white text-sm font-medium text-ink hover:border-brand/40 hover:text-brand transition-colors"
              >
                {item.label}
                <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
          <p className="text-xs text-ink-muted mt-4">
            Browse all categories at{" "}
            <Link prefetch={false} href="/categories" className="text-brand hover:underline font-medium">worthrated.com/categories</Link>.
          </p>
        </section>

        {/* ── What Makes WorthRated Different ────────────────────────── */}
        <section className="mb-12" aria-labelledby="different">
          <h2 id="different" className="mb-2 tracking-tight">What Makes WorthRated Different</h2>
          <p className="text-sm text-ink-secondary leading-relaxed mb-6">
            There are thousands of Amazon product roundup sites. Here is why we think WorthRated is worth your time:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-border bg-white">
                <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-ink-muted mt-4">
            Our scoring criteria are explained in full on{" "}
            <Link prefetch={false} href="/how-we-review" className="text-brand hover:underline font-medium">How We Rate</Link>.
          </p>
        </section>

        {/* ── How WorthRated Research Works ──────────────────────────── */}
        <section className="mb-12" aria-labelledby="research">
          <h2 id="research" className="mb-4 tracking-tight">How WorthRated Research Works</h2>
          <div className="space-y-4 text-sm text-ink-secondary leading-relaxed">
            <p>
              For every buying guide, we start with the questions that matter most for this audience: how easy is setup, how readable are the controls and display, how much does it weigh, and how much upkeep does it require? We evaluate products against those questions, not generic feature checklists.
            </p>
            <p>Our research draws on:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Published product specifications and manufacturer documentation",
                "Setup instructions and control layouts, evaluated for genuine clarity",
                "Verified buyer feedback patterns (with close attention to complaints about confusing controls or difficult setup)",
                "Weight, handling, and warranty information",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <svg className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We are transparent about one important thing:{" "}
              <strong className="text-ink">unless a specific article states otherwise, our guides are research-based comparisons, not hands-on lab tests.</strong>{" "}
              We believe being honest about this is more useful to you than pretending otherwise.
            </p>
            <p>
              You can read our complete methodology, including all seven scoring criteria and what each badge means, on our{" "}
              <Link prefetch={false} href="/how-we-review" className="text-brand hover:text-brand-dark font-medium underline underline-offset-2 transition-colors">
                How We Rate page
              </Link>.
            </p>
          </div>
        </section>

        {/* ── Editorial Standards ───────────────────────────────────── */}
        <section className="mb-12" aria-labelledby="standards">
          <h2 id="standards" className="mb-4 tracking-tight">Our Editorial Standards</h2>
          <div className="p-5 bg-white rounded-2xl border border-border">
            <ul className="space-y-3">
              {EDITORIAL_STANDARDS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-secondary">
                  <svg className="w-4 h-4 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {[
                { label: "How We Rate", href: "/how-we-review" },
                { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link prefetch={false} key={l.href} href={l.href} className="text-brand hover:underline font-medium">
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Affiliate Relationship ────────────────────────────────── */}
        <section className="mb-12 p-5 bg-white rounded-2xl border border-border" aria-labelledby="affiliate">
          <h2 id="affiliate" className="text-lg font-bold text-ink mb-3">Our Affiliate Relationship</h2>
          <div className="space-y-3 text-sm text-ink-secondary leading-relaxed">
            <p>
              WorthRated may earn a small commission when you purchase through links on this site. This does not add any extra cost to you, affiliate commissions come from the retailer margin, not from a price increase on your end.
            </p>
            <p>
              Recommendation rankings on WorthRated are not influenced by commission rates. We link to whatever product we genuinely believe is the best choice based on our evaluation criteria.
            </p>
            <p>
              Affiliate commissions help fund the research, writing, and maintenance of the site.
            </p>
          </div>
          <Link prefetch={false} href="/affiliate-disclosure" className="inline-block mt-3 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
            Read our full affiliate disclosure →
          </Link>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="mb-5 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none list-none font-semibold text-sm text-ink hover:text-brand transition-colors">
                  {item.q}
                  <svg
                    className="w-4 h-4 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-ink-secondary leading-relaxed border-t border-border pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </Container>
    </>
  );
}
