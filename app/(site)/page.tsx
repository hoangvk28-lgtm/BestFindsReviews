import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStats } from "@/components/sections/TrustStats";
import { FeaturedGuideHero } from "@/components/sections/FeaturedGuideHero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { FeaturedGuides } from "@/components/sections/FeaturedGuides";
import { CompareTools } from "@/components/sections/CompareTools";
import { DealsSection } from "@/components/sections/DealsSection";
import { HowWeReviewTeaser } from "@/components/sections/HowWeReviewTeaser";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { AffiliateDisclosureBar } from "@/components/affiliate/AffiliateDisclosureBar";
import { getPublicProducts } from "@/lib/public-products";
import { getFeaturedPublicGuides, getPublicGuideBySlug } from "@/lib/public-guides";
import { getPublicFeaturedDeals } from "@/lib/public-deals";
import { getPublicHomepageSettings, getPublicAffiliateSettings } from "@/lib/public-settings";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: "WorthRated | Products That Make Everyday Life Simpler",
  description:
    "Independent buying guides for easier to use home products. WorthRated compares setup, controls, handling, reliability and value to help you buy with confidence.",
  path: "/",
});

export default async function HomePage() {
  const [allProducts, homepageSettings, affiliateSettings] = await Promise.all([
    getPublicProducts(),
    getPublicHomepageSettings(),
    getPublicAffiliateSettings(),
  ]);

  const featuredGuideSlug = homepageSettings.featuredGuideSlug || "desk-lamps-small-desks";
  const guidesLimit = homepageSettings.sections.guides.limit || 6;

  const [featuredGuide, latestGuides, featuredDeals] = await Promise.all([
    getPublicGuideBySlug(featuredGuideSlug),
    getFeaturedPublicGuides(guidesLimit),
    getPublicFeaturedDeals(),
  ]);

  const featuredGuideProducts = featuredGuide
    ? allProducts.filter((p) => featuredGuide.recommendedProductIds.includes(p.id))
    : [];

  // Homepage deals: use featured DB deals with linked products, fallback to budget picks
  const dealProducts = featuredDeals.filter((d) => d.product).map((d) => d.product!).slice(0, 4);
  const budgetPicks = dealProducts.length > 0
    ? dealProducts
    : allProducts
        .filter((p) => p.subcategorySlug === "desk-lamps" || p.subcategorySlug === "laptop-stands")
        .sort((a, b) => b.scores.valueForMoney - a.scores.valueForMoney)
        .slice(0, 4);

  const disclosureBannerText =
    affiliateSettings.disclosureBannerText ||
    "We may earn a small commission on qualifying Amazon purchases at no extra cost to you. Recommendations are based on product specs, buyer feedback, and clear comparison criteria.";

  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroSection settings={homepageSettings} />

      {/* ── 2. Trust stats bar ── */}
      <TrustStats />

      <Container>
        {/* ── 3. Affiliate disclosure ── */}
        <div className="pt-10">
          <AffiliateDisclosureBar variant="banner" disclosureText={disclosureBannerText} />
        </div>

        {/* ── 4. Featured guide editorial card ── */}
        {featuredGuide && (
          <FeaturedGuideHero guide={featuredGuide} products={featuredGuideProducts} />
        )}

        {/* ── 5. Category grid ── */}
        <CategoryGrid />

        {/* ── 6. Latest buying guides ── */}
        <FeaturedGuides
          guides={latestGuides}
          title={homepageSettings.sections.guides.title}
        />

        {/* ── 7. Compare tools ── */}
        <CompareTools />

        {/* ── 8. Budget-friendly deals ── */}
        <DealsSection products={budgetPicks} />
      </Container>

      {/* ── 9. How we review teaser ── */}
      <HowWeReviewTeaser />

      {/* ── 10. Newsletter CTA ── */}
      <NewsletterCTA config={homepageSettings.newsletter} />
    </>
  );
}
