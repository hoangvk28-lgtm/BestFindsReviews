import { isSupabaseConfigured } from "@/lib/supabase/server";
import type {
  HomepageSettings,
  GlobalSettings,
  AffiliateSettings,
  FooterSettings,
} from "@/lib/site-settings-store";

// ── Defaults - match current hardcoded website copy ──────────────────────────

export const DEFAULT_HOMEPAGE_SETTINGS: HomepageSettings = {
  hero: {
    eyebrow: "Amazon Buying Guides",
    headline: "Smart Amazon Buying",
    headlineAccent: "for Small Spaces",
    subtitle:
      "Find practical, space-saving products for dorm rooms, study desks, small apartments, and compact home offices.",
    primaryCtaText: "Explore Buying Guides",
    primaryCtaHref: "/guide",
    secondaryCtaText: "How We Review",
    secondaryCtaHref: "/how-we-review",
    searchPlaceholder: "What are you looking for? Desk lamps, storage carts, laptop stands…",
    badgeText: "Independent editorial picks - not sponsored or paid placement.",
    heroImageUrl: "",
    heroImageAlt: "",
    featuredProductSlugs: [],
  },
  trustBar: {
    items: [
      { number: "14", unit: "products", label: "Evaluated for small-space use", description: "Every product scored on five criteria - specs, buyer feedback, value, build, and space fit." },
      { number: "6", unit: "buying guides", label: "With side-by-side comparisons", description: "Structured like Wirecutter - clear top pick, honest trade-offs, and a comparison table." },
      { number: "5", unit: "scoring criteria", label: "Tuned for small-space fit", description: "Space fit, build quality, ease of use, value, and buyer feedback - all weighted for compact living." },
      { number: "1–10", unit: "score scale", label: "Consistent across all products", description: "The same rubric for every product we evaluate - so scores are genuinely comparable across guides." },
    ],
  },
  featuredGuideSlug: "desk-lamps-small-desks",
  sections: {
    guides: {
      title: "Latest Buying Guides",
      description: "Carefully evaluated product comparisons for small-space living - no padding, just our honest picks.",
      limit: 6,
    },
    deals: {
      title: "Budget-Friendly Picks",
      description: "Products worth checking for small spaces - curated by value score.",
    },
    categories: {
      title: "Browse by Category",
      description: "Find products organized by room type and use case.",
    },
  },
  newsletter: {
    enabled: true,
    eyebrow: "Stay Updated",
    title: "Get smarter small-space buying guides.",
    description:
      "New guides, updated picks, and buying tips for compact living - no spam, no sponsored content, no fluff.",
    inputPlaceholder: "you@example.com",
    buttonText: "Notify me",
    disclaimer: "No account required. Unsubscribe anytime. We'll never share your email.",
  },
};

export const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = {
  siteName: "BestFindsReviews",
  siteTagline: "Amazon Buying Guides for Small Rooms & Dorms",
  header: {
    logoText: "SmartSpacePicks",
    showDealsButton: true,
    dealsButtonText: "Today's Deals",
  },
};

export const DEFAULT_AFFILIATE_SETTINGS: AffiliateSettings = {
  disclosureShort:
    "BestFindsReviews earns a small commission on qualifying Amazon purchases at no extra cost to you.",
  disclosureFull:
    "BestFindsReviews is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our editorial opinions are independent and are never influenced by affiliate relationships.",
  disclosureBannerText:
    "We may earn a commission when you buy through Amazon links. Our recommendations are based on product specs, buyer feedback, use cases, and clear comparison criteria.",
  amazonTag: "bestfindsreviews0d-20",
};

export const DEFAULT_FOOTER_SETTINGS: FooterSettings = {
  description:
    "Honest buying guides for small rooms, dorm setups, and compact home offices. No sponsored posts. No fake reviews.",
  copyrightText: "BestFindsReviews. All rights reserved.",
  showAffiliateDisclosure: true,
};

// ── Public helpers with fallback ──────────────────────────────────────────────

async function safeFetch<T>(fetcher: () => Promise<T | null>, fallback: T): Promise<T> {
  if (!isSupabaseConfigured()) return fallback;
  try {
    const result = await fetcher();
    return result ?? fallback;
  } catch (e) {
    console.warn("[public-settings] Supabase error:", (e as Error).message);
    return fallback;
  }
}

export async function getPublicHomepageSettings(): Promise<HomepageSettings> {
  const { getHomepageSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getHomepageSettings, DEFAULT_HOMEPAGE_SETTINGS);
}

export async function getPublicGlobalSettings(): Promise<GlobalSettings> {
  const { getGlobalSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getGlobalSettings, DEFAULT_GLOBAL_SETTINGS);
}

export async function getPublicAffiliateSettings(): Promise<AffiliateSettings> {
  const { getAffiliateSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getAffiliateSettings, DEFAULT_AFFILIATE_SETTINGS);
}

export async function getPublicFooterSettings(): Promise<FooterSettings> {
  const { getFooterSettings } = await import("@/lib/site-settings-store");
  return safeFetch(getFooterSettings, DEFAULT_FOOTER_SETTINGS);
}
