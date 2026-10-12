import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { RichContent } from "@/components/ui/RichContent";
import { SITE_URL } from "@/lib/seo";

// ─── Informational guide (no product picks) served via the dynamic registry ───
// data/guides/<slug>.ts exports kind = "info" plus pre-sanitised article HTML.
// [slug]/page.tsx renders these through this component instead of RichGuidePage.

export interface InfoGuideModule {
  kind: "info";
  guideSlug: string;
  guideTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  lastUpdated: string;
  readTime: string;
  html: string;
  relatedGuides: { title: string; href: string }[];
}

export function InfoGuidePage({ slug, guide }: { slug: string; guide: InfoGuideModule }) {
  const { guideTitle, metaDescription, lastUpdated, readTime, html, relatedGuides } = guide;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guideTitle,
    description: metaDescription,
    datePublished: lastUpdated,
    dateModified: lastUpdated,
    author: { "@type": "Person", name: "Jamie Cole", url: `${SITE_URL}/author/jamie-cole` },
    publisher: { "@type": "Organization", name: "WorthRated", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/${slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guide` },
      { "@type": "ListItem", position: 3, name: guideTitle, item: `${SITE_URL}/guide/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Container className="py-12 max-w-3xl">
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-6">
          <Link prefetch={false} href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link prefetch={false} href="/guide" className="hover:text-brand transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-ink">{guideTitle}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Guide</span>
            <span className="text-ink-muted">&middot;</span>
            <span className="text-xs text-ink-muted">{readTime} read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-tight tracking-tight mb-4">{guideTitle}</h1>
          <p className="text-lg text-ink-secondary leading-relaxed">{metaDescription}</p>
          <p className="text-xs text-ink-muted mt-4">
            By{" "}
            <Link prefetch={false} href="/author/jamie-cole" className="hover:text-brand">Jamie Cole</Link>
            {" "}&middot; Updated {lastUpdated}
          </p>
        </header>

        <article className="mb-12">
          <RichContent html={html} />
        </article>

        {relatedGuides.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedGuides.map((g) => (
                <Link prefetch={false} key={g.href} href={g.href} className="p-4 rounded-xl border border-border bg-white hover:border-brand transition-colors">
                  <p className="font-bold text-ink text-sm">{g.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
