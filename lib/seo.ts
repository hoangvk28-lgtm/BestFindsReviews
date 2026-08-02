import type { Metadata } from "next";

const SITE_NAME = "BestFindsHQ"; // TODO: confirm final brand name/casing
// Prefer env var so the same build can be deployed to any domain without code changes.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.bestfindshq.com";
const SITE_DESCRIPTION =
  "TODO: one-sentence site description for the homepage <meta description> and OG tags.";
const TWITTER_HANDLE = "@bestfindshq"; // TODO: confirm real handle or remove

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}): Metadata {
  // Build the display title once, with "| BestFindsHQ" appended if not already present.
  // Use { absolute } so the root layout template (%s | BestFindsHQ) never wraps it again.
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  // Support absolute Supabase image URLs directly; fall back to default OG image.
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/og-default.png`;

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      site: TWITTER_HANDLE,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
  };
}

export const defaultMetadata: Metadata = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export { SITE_NAME, SITE_URL, SITE_DESCRIPTION };
