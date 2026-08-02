export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: "Reviews",
    href: "/reviews",
    children: [
      { label: "Desk Setup", href: "/categories/desk-setup", description: "Lamps, stands & cable management" },
      { label: "Dorm Essentials", href: "/categories/dorm-essentials", description: "Space-saving dorm picks" },
      { label: "Small Room Storage", href: "/categories/small-room-storage", description: "Under-bed & rolling storage" },
      { label: "Compact Home Office", href: "/categories/compact-home-office", description: "Small WFH setups" },
      { label: "Budget Finds", href: "/categories/budget-finds", description: "Best value under $30–$50" },
    ],
  },
  {
    label: "Buying Guides",
    href: "/guide",
    children: [
      { label: "Desk Setup", href: "/guide/desk-setup", description: "Lamps, stands & cable management" },
      { label: "Dorm Essentials", href: "/guide/dorm-essentials", description: "Space-saving dorm picks" },
      { label: "Small Room Storage", href: "/guide/small-room-storage", description: "Under-bed & rolling storage" },
      { label: "Compact Home Office", href: "/guide/compact-home-office", description: "Small WFH setups" },
      { label: "Budget Finds", href: "/guide/budget-finds", description: "Best value under $30-$50" },
    ],
  },
  { label: "Compare", href: "/compare" },
  { label: "Deals", href: "/deals" },
  { label: "How We Review", href: "/how-we-review" },
];

export const footerNav = {
  categories: [
    { label: "Desk Setup", href: "/categories/desk-setup" },
    { label: "Dorm Essentials", href: "/categories/dorm-essentials" },
    { label: "Small Room Storage", href: "/categories/small-room-storage" },
    { label: "Compact Home Office", href: "/categories/compact-home-office" },
    { label: "Budget Finds", href: "/categories/budget-finds" },
  ],
  company: [
    { label: "About Us", href: "/about-deskfinds" },
    { label: "How We Review", href: "/how-we-review" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};
