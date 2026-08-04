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
    eyebrow: "INDEPENDENT BUYING GUIDES FOR EASIER LIVING",
    headline: "Products that make everyday life simpler.",
    headlineAccent: "",
    subtitle:
      "We compare ease of use, setup, controls and long-term value to help you choose with confidence.",
    primaryCtaText: "Explore Our Top Picks",
    primaryCtaHref: "/categories",
    secondaryCtaText: "How We Rate",
    secondaryCtaHref: "/how-we-review",
    searchPlaceholder: "What are you looking for? Microwaves, vacuums, remotes, garden tools…",
    badgeText: "Independent editorial picks - not sponsored or paid placement.",
    heroImageUrl: "",
    heroImageAlt: "",
    featuredProductSlugs: [],
  },
  trustBar: {
    items: [
      { number: "Ease of Use", unit: "25%", label: "The single biggest factor in our score", description: "How straightforward the product is to operate day-to-day." },
      { number: "Controls", unit: "20%", label: "Readable, understandable controls", description: "Clear labeling, legible displays, and intuitive layouts." },
      { number: "Setup", unit: "15%", label: "How hard it is to get started", description: "Out-of-box setup difficulty and instructions quality." },
      { number: "Value", unit: "5-15%", label: "Reliability, handling & value combined", description: "Weight, handling, warranty coverage, and price-to-performance." },
    ],
  },
  featuredGuideSlug: "",
  sections: {
    guides: {
      title: "Top-rated picks for easier living",
      description: "Independent guides comparing setup, controls, and long-term value — no padding, just honest picks.",
      limit: 6,
    },
    deals: {
      title: "Budget-Friendly Picks",
      description: "Well-priced products worth checking, curated by value score.",
    },
    categories: {
      title: "What would you like to make easier?",
      description: "Four focused areas covering everyday products that matter most.",
    },
  },
  newsletter: {
    enabled: true,
    eyebrow: "Stay Updated",
    title: "Get easier-living buying guides in your inbox.",
    description:
      "New guides, updated picks, and practical buying tips - no spam, no sponsored content, no fluff.",
    inputPlaceholder: "you@example.com",
    buttonText: "Notify me",
    disclaimer: "No account required. Unsubscribe anytime. We'll never share your email.",
  },
};

export const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = {
  siteName: "WorthRated",
  siteTagline: "We rate products for easier living.",
  header: {
    logoText: "WorthRated",
    showDealsButton: true,
    dealsButtonText: "Today's Deals",
  },
};

export const DEFAULT_AFFILIATE_SETTINGS: AffiliateSettings = {
  disclosureShort:
    "WorthRated is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you.",
  disclosureFull:
    "WorthRated participates in affiliate programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our recommendations are based on published specifications, manufacturer documentation, and patterns in verified buyer feedback — our editorial opinions are independent and are never influenced by affiliate relationships.",
  disclosureBannerText:
    "We may earn a commission when you buy through Amazon links. Our recommendations are based on published specs, manufacturer documentation, and clear comparison criteria.",
  amazonTag: "worthrated0d-20",
};

export const DEFAULT_FOOTER_SETTINGS: FooterSettings = {
  description:
    "Independent buying guides for products that make everyday life simpler. No sponsored posts. No fake reviews.",
  copyrightText: "WorthRated. All rights reserved.",
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
