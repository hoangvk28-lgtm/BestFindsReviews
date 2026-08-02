export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatarUrl?: string;
  isPerson?: boolean; // true → Person schema; false/undefined → Organization
  expertise: string[];
  credentials: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

// TODO: replace this placeholder with a real author/editorial-team profile
// before launch. Every guide's `author` field (in data/guides/<slug>.ts)
// must match an entry's `name` here via getAuthorByName(), or the byline
// and author schema will fall back to nothing.
export const authors: Author[] = [
  {
    slug: "editorial-team",
    name: "Editorial Team",
    role: "Product Researchers & Editors",
    avatarUrl: "",
    bio: "TODO: one-line description of who researches and writes this site's buying guides.",
    longBio:
      "TODO: longer editorial-process bio. Describe the evaluation methodology, what buyer data is used, and how the scoring rubric works.",
    expertise: [],
    credentials: [
      { label: "Guides published", value: "TODO" },
      { label: "Products evaluated", value: "TODO" },
      { label: "Scoring criteria", value: "TODO" },
      { label: "Update frequency", value: "TODO" },
    ],
    social: [],
    editorial: {
      process:
        "TODO: describe the research and scoring process (keyword research, spec collection, verified buyer review analysis, scoring rubric).",
      independence:
        "TODO: state the affiliate-independence policy (no paid placement, low-scoring products excluded regardless of commission rate).",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
