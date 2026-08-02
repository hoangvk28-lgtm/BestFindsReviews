import Link from "next/link";
import Image from "next/image";
import { products as staticProducts } from "@/data/products";
import { getPublicHomepageSettings } from "@/lib/public-settings";
import type { HomepageSettings } from "@/lib/site-settings-store";
import { HeroSearch } from "@/components/sections/HeroSearch";
import { heroChipLinks } from "@/lib/amazon-links";

interface Props {
  settings?: HomepageSettings;
}

export async function HeroSection({ settings: propSettings }: Props = {}) {
  const settings = propSettings ?? await getPublicHomepageSettings();
  const hero = settings.hero;

  // Top picks: use configured slugs if provided, else fallback to top 4 by overall score
  const top4 = hero.featuredProductSlugs.length > 0
    ? hero.featuredProductSlugs
        .map((slug) => staticProducts.find((p) => p.slug === slug))
        .filter(Boolean)
        .slice(0, 4) as typeof staticProducts
    : [...staticProducts].sort((a, b) => b.scores.overall - a.scores.overall).slice(0, 4);

  return (
    <section className="relative overflow-hidden">
      {/* Hero background image — priority for LCP */}
      <Image
        src="/hero-banner.jpg"
        alt="Amazon buying guides for small desks, dorm rooms, and compact home offices"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-right"
        sizes="100vw"
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,21,37,0.92) 0%, rgba(22,41,68,0.80) 55%, rgba(12,21,37,0.70) 100%)" }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-28">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start lg:items-center">

          {/* ── Left column ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-blue-400 rounded-full" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{hero.eyebrow}</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight mb-5"
              style={{ color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
            >
              {hero.headline}{" "}
              <span style={{ background: "linear-gradient(90deg, #bfdbfe, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {hero.headlineAccent}
              </span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.88)" }}>
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href={hero.primaryCtaHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-btn text-sm transition-all"
                style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "#ffffff", boxShadow: "0 4px 20px rgba(59,130,246,0.50), 0 1px 3px rgba(0,0,0,0.3)" }}
              >
                {hero.primaryCtaText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              {hero.secondaryCtaText && (
                <Link
                  href={hero.secondaryCtaHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-btn text-sm transition-all"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.28)" }}
                >
                  {hero.secondaryCtaText}
                </Link>
              )}
            </div>

            <div className="mb-10">
              <HeroSearch placeholder={hero.searchPlaceholder || "Search products, guides, categories…"} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs mr-1 shrink-0" style={{ color: "rgba(255,255,255,0.60)" }}>Shop on Amazon:</span>
              {heroChipLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="text-xs px-3 py-2.5 rounded-badge font-medium transition-all hover:bg-blue-500 hover:text-white hover:border-blue-500 min-h-[44px] flex items-center"
                  style={{ background: "rgba(255,255,255,0.11)", color: "rgba(255,255,255,0.82)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {hero.badgeText && (
              <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.48)" }}>{hero.badgeText}</p>
            )}
          </div>

          {/* ── Right column - Top Picks card ── */}
          <div className="block w-full lg:w-auto mt-2 lg:mt-0">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
            >
              <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.95)" }}>Our Top Picks</span>
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>Scored 1–10</span>
              </div>

              {top4.map((p, i) => (
                <Link key={p.id} href={`/reviews/${p.slug}`} className="px-5 py-4 flex items-center gap-3 hover:bg-white/5 transition-colors" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.75)" }}>{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug line-clamp-1" style={{ color: "rgba(255,255,255,0.96)" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.62)" }}>{p.priceRange}</p>
                  </div>
                  <span className="text-sm font-bold tabular-nums shrink-0 px-2 py-0.5 rounded-md" style={{ color: "#ffffff", background: "rgba(59,130,246,0.35)", border: "1px solid rgba(59,130,246,0.50)" }}>
                    {p.scores.overall.toFixed(1)}
                  </span>
                </Link>
              ))}

              <div className="px-5 py-3.5" style={{ background: "rgba(255,255,255,0.05)", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                <Link href="/compare" className="text-xs font-semibold flex items-center justify-between group transition-colors" style={{ color: "#93c5fd" }}>
                  Compare all {staticProducts.length} products
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-xs mt-3 text-center" style={{ color: "rgba(255,255,255,0.48)" }}>
              Scores based on specs, dimensions &amp; verified buyer feedback
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
