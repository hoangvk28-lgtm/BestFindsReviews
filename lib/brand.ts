// ─── Central brand configuration ──────────────────────────────────────────────
// Single source of truth for brand identity. Import from here instead of
// hardcoding brand strings in components/pages. lib/seo.ts re-exports the
// SEO-relevant subset for backward compatibility with existing imports.

export const BRAND_NAME = "WorthRated";
export const BRAND_TAGLINE = "We rate products for easier living.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.worthrated.com";

export const SITE_DESCRIPTION =
  "Independent buying guides for easier-to-use home products. WorthRated compares setup, controls, handling, reliability and value to help you buy with confidence.";

export const CONTACT_EMAIL = "hello@worthrated.com";

// No confirmed live social accounts yet — keep empty until real profiles exist.
// Populate as { platform: "twitter", url: "https://twitter.com/worthrated" } etc.
export const SOCIAL_LINKS: { platform: string; url: string }[] = [];

export const AMAZON_ASSOCIATE_TAG = "worthrated-20";

// ─── Audience & positioning (for editorial copy, not rendered directly) ──────
export const AUDIENCE_DESCRIPTION =
  "Active, independent adults roughly 55-70, and the adult children researching products for their parents.";

export const CONTENT_PILLARS = [
  { label: "Easy Kitchen", slug: "easy-kitchen" },
  { label: "Easy Cleaning", slug: "easy-cleaning" },
  { label: "Simple Tech", slug: "simple-tech" },
  { label: "Garden & Yard", slug: "garden-yard" },
] as const;

// ─── Worth Rating methodology (source of truth for "How We Rate") ────────────
export const RATING_CRITERIA = [
  { label: "Ease of Use", weight: 25 },
  { label: "Controls and Readability", weight: 20 },
  { label: "Weight and Handling", weight: 15 },
  { label: "Setup Difficulty", weight: 15 },
  { label: "Cleaning and Maintenance", weight: 10 },
  { label: "Reliability and Warranty", weight: 10 },
  { label: "Value for Money", weight: 5 },
] as const;

// ─── Language guardrails ──────────────────────────────────────────────────────
// Editorial copy should favor "research", "compare", "evaluate", "rate" and
// avoid claiming direct hands-on testing ("we tested", "our hands-on test")
// unless a specific article's data actually confirms hands-on testing.
export const DISCLOSURE_SHORT =
  "WorthRated is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you.";

export const DISCLOSURE_FULL =
  "WorthRated participates in affiliate programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our recommendations are based on published specifications, manufacturer documentation, and patterns in verified buyer feedback — our editorial opinions are independent and are never influenced by affiliate relationships.";
