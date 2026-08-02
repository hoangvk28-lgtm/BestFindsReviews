// ─── Types ───────────────────────────────────────────────────────────────────

export interface GuideSection {
  heading: string;
  body: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideBuyingCriterion {
  criterion: string;
  content: string; // use \n to separate bullet points within a cell
}

export interface Guide {
  title: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  description: string;
  mainKeyword: string;
  subKeywords: string[];
  heroImage: string;
  thumbnailImage?: string;
  lastUpdated: string;
  author: string;
  readTime: string;
  recommendedProductIds: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
  relatedGuideSlugs: string[];
  buyingCriteria?: GuideBuyingCriterion[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// New guides are appended here by scripts/register-new-guides.mjs (see the
// generate-guide-page.mjs + data/guides/<slug>.ts pipeline documented in
// CLAUDE.md). This array starts empty for a fresh site.

export const guides: Guide[] = [
];
