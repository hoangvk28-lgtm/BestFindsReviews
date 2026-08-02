export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
}

// TODO: define this site's top-level categories before launch. Example shape:
// {
//   slug: "example-category",
//   name: "Example Category",
//   description: "Longer description for the category hub page.",
//   shortDescription: "One-line summary.",
//   icon: "Monitor", // lucide-react icon name
//   color: "#2563eb",
//   subcategories: ["sub-slug-1", "sub-slug-2"],
// }
export const categories: Category[] = [];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
