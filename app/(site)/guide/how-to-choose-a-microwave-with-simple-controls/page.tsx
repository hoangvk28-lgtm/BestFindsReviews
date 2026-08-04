import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Choose a Microwave With Clear, Simple Controls",
  description:
    "A practical checklist for finding a microwave with legible buttons, a readable display, and controls that make sense on the first try, not the tenth.",
  path: "/guide/how-to-choose-a-microwave-with-simple-controls",
});

const CRITERIA = [
  {
    heading: "Physical buttons versus a touch panel",
    body: "Physical buttons give tactile feedback, so you can confirm a press without looking, and they keep working if the touch sensor ever degrades. A touch panel looks sleeker but demands more visual attention and can misregister presses with wet or cold fingers. If you want to operate the microwave mostly by feel, prioritize a model with raised, physical buttons over a flat touch interface.",
  },
  {
    heading: "Number of buttons on the panel",
    body: "Many microwaves pack in a dozen or more preset buttons for popcorn, pizza, beverages, and other specific foods that most people rarely use. A simpler panel with a numeric keypad, a start button, and a handful of core presets is usually faster to operate day to day, since you are not scanning a wall of icons to find the one function you actually want.",
  },
  {
    heading: "Display size and contrast",
    body: "Look at the actual digit height and the contrast between the display and its background, not just whether it is described as \"bright.\" A dim green LED on a dark background is harder to read across a kitchen than a larger, high-contrast display. Photos in the product listing at an angle can reveal the true display size better than the marketing copy.",
  },
  {
    heading: "Dial versus button-only time entry",
    body: "A rotary dial for time and power level lets you set a rough duration quickly with one motion, without counting button presses. Button-only models require pressing a digit for each second or minute, which is more precise but slower for a quick reheat. If you mostly do fast reheats, a dial-based model is usually the faster daily interaction.",
  },
  {
    heading: "Auto-cook sensor reliability",
    body: "Sensor-based auto-cook settings (like \"add 30 seconds\" or a moisture sensor for popcorn) are convenient when they work consistently, but sensor accuracy varies by brand and by food type. Check recent buyer reviews specifically for complaints about the auto-sensor overcooking or undercooking, since this is a common failure point that a spec sheet won't reveal.",
  },
  {
    heading: "Door and handle operation",
    body: "A pull-handle door is usually easier to open one-handed than a push-button release, especially when your other hand is holding a plate. If one-handed operation matters to you, check whether the listing specifies a handle versus a push-to-open door before buying.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` },
    { "@type": "ListItem", position: 3, name: "How to Choose a Microwave With Simple Controls", item: `${SITE_URL}/guide/how-to-choose-a-microwave-with-simple-controls` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose a Microwave With Clear, Simple Controls",
  description: "A practical checklist for finding a microwave with legible buttons, a readable display, and controls that make sense on the first try, not the tenth.",
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
  author: { "@type": "Person", name: "Jamie Cole", url: `${SITE_URL}/author/jamie-cole` },
  publisher: { "@type": "Organization", name: "WorthRated", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/how-to-choose-a-microwave-with-simple-controls` },
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
          <span className="text-ink">Microwave Controls</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Advice</span>
          <h1 className="mt-3 mb-4 tracking-tight">How to Choose a Microwave With Clear, Simple Controls</h1>
          <p className="text-lg text-ink-secondary leading-relaxed">
            Most microwave listings advertise wattage and capacity in the headline, but rarely say anything useful about the actual control panel, the part you interact with every single time you use it. Here is what to check before buying.
          </p>
        </header>

        <div className="mb-8 p-4 rounded-xl bg-bg border border-border text-xs text-ink-secondary">
          <strong className="text-ink">Quick note:</strong> This is a research-based buying checklist, not a ranked product roundup. We may earn a commission on Amazon links elsewhere on this site.{" "}
          <Link href="/affiliate-disclosure" className="text-brand hover:underline">Affiliate disclosure</Link>.
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
            <Link href="/guide/best-easy-to-use-coffee-makers" className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-brand/40 hover:shadow-sm transition-all group">
              <span className="text-sm font-medium text-ink group-hover:text-brand transition-colors">Best Easy-to-Use Coffee Makers</span>
              <svg className="w-4 h-4 text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <Link href="/guide/best-coffee-makers-for-seniors" className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-brand/40 hover:shadow-sm transition-all group">
              <span className="text-sm font-medium text-ink group-hover:text-brand transition-colors">Best Coffee Makers for Seniors</span>
              <svg className="w-4 h-4 text-ink-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
          <p className="text-xs text-ink-muted mt-4">
            We do not yet have a dedicated microwave comparison guide with specific product picks. This checklist is meant to help you evaluate any microwave listing on its control panel, independent of brand.
          </p>
        </section>
      </Container>
    </>
  );
}
