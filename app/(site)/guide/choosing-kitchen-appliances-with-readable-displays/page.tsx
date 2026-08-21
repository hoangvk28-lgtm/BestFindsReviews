import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Choosing Kitchen Appliances With Readable Displays",
  description:
    "What actually makes a kitchen appliance display easy to read from across the room, and the questions to ask before buying based on a product listing alone.",
  path: "/guide/choosing-kitchen-appliances-with-readable-displays",
});

const CRITERIA = [
  {
    heading: "Digit height matters more than brightness",
    body: "A display described as \"bright\" can still be hard to read if the digits themselves are small. Look for the actual digit height in the product specifications or measure it against a coin in the product photos. Roughly half an inch or taller is comfortable to read from a normal kitchen distance without stepping closer.",
  },
  {
    heading: "Display type: LED, LCD, or e-ink style",
    body: "LED displays (usually red or blue segments) tend to have the highest contrast and are easiest to read in bright kitchen lighting. Backlit LCD displays can wash out under direct sunlight. Check whether the listing or manual mentions the display technology, and if it doesn't, treat contrast claims skeptically until you can see buyer photos.",
  },
  {
    heading: "Viewing angle",
    body: "Some displays are only clearly readable when viewed straight on and become dim or distorted from an angle, which matters if the appliance sits on a counter you approach from the side rather than directly in front. Buyer review photos taken from a normal use angle are more reliable than a straight-on marketing photo for judging this.",
  },
  {
    heading: "Label contrast and font weight",
    body: "Beyond the digital display, check the printed labels next to buttons and dials. Thin gray text on a matching gray housing is a common readability failure even on otherwise well-designed appliances. Bold, high-contrast lettering on buttons is a genuine usability advantage that rarely gets called out in marketing copy.",
  },
  {
    heading: "Glare and reflective surfaces",
    body: "Glossy black control panels look sleek in photos but can create glare under kitchen lighting, making the display harder to read at certain times of day. A matte finish panel is generally more consistently readable across different lighting conditions, even if it looks less polished in a product photo.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` },
    { "@type": "ListItem", position: 3, name: "Kitchen Appliances With Readable Displays", item: `${SITE_URL}/guide/choosing-kitchen-appliances-with-readable-displays` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Choosing Kitchen Appliances With Readable Displays",
  description: "What actually makes a kitchen appliance display easy to read from across the room, and the questions to ask before buying based on a product listing alone.",
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
  author: { "@type": "Person", name: "Jamie Cole", url: `${SITE_URL}/author/jamie-cole` },
  publisher: { "@type": "Organization", name: "WorthRated", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/choosing-kitchen-appliances-with-readable-displays` },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Container className="py-12 max-w-3xl">
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-6">
          <Link prefetch={false} href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link prefetch={false} href="/guide" className="hover:text-brand transition-colors">Buying Guides</Link>
          <span>/</span>
          <span className="text-ink">Readable Displays</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Advice</span>
          <h1 className="mt-3 mb-4 tracking-tight">Choosing Kitchen Appliances With Readable Displays</h1>
          <p className="text-lg text-ink-secondary leading-relaxed">
            A display that looks clear in a product photo taken up close is not the same as a display you can actually read from across a kitchen. These are the specific things to check before buying, whether it is a coffee maker, microwave, or any other appliance with a digital readout.
          </p>
        </header>

        <div className="mb-8 p-4 rounded-xl bg-bg border border-border text-xs text-ink-secondary">
          <strong className="text-ink">Quick note:</strong> This is a research-based buying checklist that applies across appliance categories, not a ranked product roundup. We may earn a commission on Amazon links elsewhere on this site.{" "}
          <Link prefetch={false} href="/affiliate-disclosure" className="text-brand hover:underline">Affiliate disclosure</Link>.
        </div>

        <div className="space-y-8">
          {CRITERIA.map((item) => (
            <section key={item.heading}>
              <h2 className="text-xl font-bold text-ink mb-2 tracking-tight">{item.heading}</h2>
              <p className="text-ink-secondary leading-relaxed">{item.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-14 p-6 rounded-2xl border border-border bg-white">
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link prefetch={false} href="/guide/best-coffee-makers-for-seniors" className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-brand/40 hover:shadow-sm transition-all group">
              <span className="text-sm font-medium text-ink group-hover:text-brand transition-colors">Best Coffee Makers for Seniors</span>
              <svg className="w-4 h-4 text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <Link prefetch={false} href="/guide/how-to-choose-a-microwave-with-simple-controls" className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-brand/40 hover:shadow-sm transition-all group">
              <span className="text-sm font-medium text-ink group-hover:text-brand transition-colors">How to Choose a Microwave With Simple Controls</span>
              <svg className="w-4 h-4 text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
