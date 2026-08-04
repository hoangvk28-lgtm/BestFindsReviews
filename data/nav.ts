export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

// WorthRated's four initial content pillars. Category hub pages live under
// /categories/[slug] (existing routing architecture, kept as-is) rather than
// top-level slugs, so the URL structure and static-generation setup don't
// need to change.
export const mainNav: NavItem[] = [
  { label: "Easy Kitchen", href: "/categories/easy-kitchen" },
  { label: "Easy Cleaning", href: "/categories/easy-cleaning" },
  { label: "Simple Tech", href: "/categories/simple-tech" },
  { label: "Garden & Yard", href: "/categories/garden-yard" },
  { label: "How We Rate", href: "/how-we-review" },
  { label: "About", href: "/about-us" },
];

export const footerNav = {
  categories: [
    { label: "Easy Kitchen", href: "/categories/easy-kitchen" },
    { label: "Easy Cleaning", href: "/categories/easy-cleaning" },
    { label: "Simple Tech", href: "/categories/simple-tech" },
    { label: "Garden & Yard", href: "/categories/garden-yard" },
  ],
  company: [
    { label: "How We Rate", href: "/how-we-review" },
    { label: "About", href: "/about-us" },
    { label: "Compare Products", href: "/compare" },
    { label: "Today's Deals", href: "/deals" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};
