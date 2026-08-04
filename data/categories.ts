export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
}

// WorthRated's four initial content pillars. Colors alternate navy/teal so
// category cards stay within brand (amber is reserved for badges only).
export const categories: Category[] = [
  {
    slug: "easy-kitchen",
    name: "Easy Kitchen",
    description:
      "Kitchen gadgets and appliances rated on how simple they are to set up, operate, and clean, clear buttons, readable displays, and manageable weight, not just features on a spec sheet.",
    shortDescription: "Appliances and gadgets with clear controls and simple daily use.",
    icon: "Kitchen",
    color: "#17324D",
    subcategories: [],
  },
  {
    slug: "easy-cleaning",
    name: "Easy Cleaning",
    description:
      "Vacuums, mops, and cleaning tools evaluated for weight, maneuverability, and how much ongoing maintenance they demand, practical picks for keeping a home comfortable without a fight.",
    shortDescription: "Lightweight, low-maintenance tools for a comfortable home.",
    icon: "Cleaning",
    color: "#2F7D78",
    subcategories: [],
  },
  {
    slug: "simple-tech",
    name: "Simple Tech",
    description:
      "Phones, remotes, and smart-home devices compared on setup difficulty and everyday usability, technology that helps rather than adds another manual to read.",
    shortDescription: "Everyday tech that's genuinely easy to set up and use.",
    icon: "Tech",
    color: "#17324D",
    subcategories: [],
  },
  {
    slug: "garden-yard",
    name: "Garden & Yard",
    description:
      "Tools and equipment for staying active outdoors, rated on handling, weight, and how comfortably they work for an afternoon in the garden or yard.",
    shortDescription: "Comfortable, manageable tools for the garden and yard.",
    icon: "Garden",
    color: "#2F7D78",
    subcategories: [],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
