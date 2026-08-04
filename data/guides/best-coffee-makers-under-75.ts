export const guideSlug = "best-coffee-makers-under-75";
export const guideTitle = "Best Coffee Makers Under $75";
export const metaTitle = "Best Coffee Makers Under $75 (2026): 4 Models Compared";
export const metaDescription =
  "We compared four current coffee makers priced under $75 on capacity, features, and true first-year ownership cost so you know what this middle tier actually buys you.";
export const mainKeyword = "coffee makers under $75";
export const lastUpdated = "2026-08-04";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41YdXZ4h-WL._SL500_.jpg";

export const introParagraphs = [
  "Amazon pricing shifts constantly at this tier, and a machine sitting at $45 today can drift back up past $75 once a temporary discount ends. Every price and spec below reflects a live pull at the time this guide was last updated, so confirm the current price on the product page before assuming a listed model still fits this budget.",
  "This roughly $50 to $75 range sits between our Under $50 guide and our Under $100 guide, and it generally buys sturdier build quality and more genuine programmability than the cheapest tier without yet reaching the flexibility of dual-mode or single-serve machines. We compared four current models on features, capacity, and a first-year cost estimate that includes filters and descaling, not just the sticker price.",
];

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  amazonUrl: string;
  imageUrl: string;
  price: string;
  rating: string;
  reviews: string;
  specs: string[];
  description: string;
  bestFor: string;
  pros: string[];
  cons: string[];
}

export const products: GuideProduct[] = [
  {
    id: "shardor-10-cup",
    rank: 1,
    badge: "Best Overall",
    name: "SHARDOR 10-Cup Programmable Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B0DLK75SZJ?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41YdXZ4h-WL._SL500_.jpg",
    price: "$39.97",
    rating: "4.3",
    reviews: "1,557 reviews",
    specs: ["10-cup capacity", "Regular/Strong brew", "Auto shut-off", "Permanent filter included"],
    description:
      "The SHARDOR sits comfortably under this tier's $75 ceiling while offering programmable brew start, a regular-or-strong selector, and a permanent filter that removes ongoing paper filter costs entirely. That combination is normally what separates this middle tier from the bare-bones sub-$50 machines.\n\nWith real budget headroom left under $75, buyers who want to spend a little more within this tier could pair it with a better burr grinder or a second reusable filter without ever approaching the Under $100 range.",
    bestFor: "Buyers who want programmable brewing and a permanent filter while leaving room in the $75 budget.",
    pros: [
      "Permanent filter included, no ongoing paper filter cost",
      "Programmable start and genuine strong-brew option",
      "Leaves real budget headroom under the $75 ceiling",
    ],
    cons: [
      "10-cup carafe is more than a single user typically needs daily",
      "Fewer features than dual-mode machines in the Under $100 tier",
    ],
  },
  {
    id: "krups-simply-brew",
    rank: 2,
    badge: "Best Build Quality",
    name: "KRUPS Coffee Maker 10 Cups Simply Brew",
    amazonUrl: "https://www.amazon.com/dp/B08PP1H7QK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31SbNxvTcWL._SL500_.jpg",
    price: "$52.66",
    rating: "4.1",
    reviews: "22,693 reviews",
    specs: ["10-cup capacity", "900 watts", "Drip-free design", "Dishwasher-safe carafe"],
    description:
      "KRUPS is a more established appliance brand than several sub-$50 alternatives, and the Simply Brew's dishwasher-safe carafe and drip-free pour design reflect a build-quality step up that is a genuine, if modest, upgrade over the cheapest tier. At 900 watts it is a straightforward, no-frills drip machine.\n\nIt sticks to standard paper filters rather than a permanent one, which is a small recurring cost, but the sturdier overall build and easier cleanup are worth the tradeoff for buyers prioritizing longevity over the absolute lowest price in this tier.",
    bestFor: "Buyers who want a sturdier build and easier cleanup without paying the full $75.",
    pros: [
      "More established brand reputation than the cheapest sub-$50 options",
      "Dishwasher-safe carafe simplifies cleanup",
      "Drip-free pour design",
    ],
    cons: [
      "Requires ongoing paper filter purchases",
      "No programmable start",
    ],
  },
  {
    id: "bd-12-cup-vortex",
    rank: 3,
    badge: "Best for Larger Households",
    name: "BLACK+DECKER 12-Cup Drip Coffee Maker with Vortex Brewing",
    amazonUrl: "https://www.amazon.com/dp/B01GJOMWVA?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41QB48wA6UL._SL500_.jpg",
    price: "$31.49",
    rating: "4.4",
    reviews: "49,912 reviews",
    specs: ["12-cup capacity", "Vortex brewing technology", "Sneak-a-cup", "Removable filter basket"],
    description:
      "This BLACK+DECKER model has the largest carafe in this comparison at 12 cups and uses Vortex brewing technology aimed at more even water distribution over the grounds than a basic drip stream. For a household that regularly brews a full pot, it delivers the most capacity for the price in this tier.\n\nIt is also the lowest-priced machine here, which leaves the most budget headroom of the four if you want to also buy a reusable filter or a better grinder within the same $75 ceiling.",
    bestFor: "Larger households that want maximum carafe capacity and the most budget headroom in this tier.",
    pros: [
      "Largest carafe capacity in this comparison at 12 cups",
      "Lowest price of the four models here",
      "Large, established review base",
    ],
    cons: [
      "Requires ongoing paper filter purchases",
      "No programmable start",
    ],
  },
  {
    id: "brew-12-cup-programmable",
    rank: 4,
    badge: "Best No-Drip Carafe",
    name: "BREW 12-Cup Programmable Coffee Maker with No-Drip Glass Carafe",
    amazonUrl: "https://www.amazon.com/dp/B0DPNJVG1Z?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31jUgwVuvFL._SL500_.jpg",
    price: "$29.99",
    rating: "3.8",
    reviews: "2,175 reviews",
    specs: ["12-cup capacity", "Programmable", "No-drip glass carafe", "Auto shut-off"],
    description:
      "The BREW combines a 12-cup capacity with genuine programmable start at the lowest price of any model in this comparison, undercutting even the sub-$50 tier while still fitting comfortably within this guide. Its no-drip carafe spout is a small but real convenience during pouring that not every budget machine includes.\n\nWith the smallest review base of the four picks here, it has less of a track record than the more established KRUPS or BLACK+DECKER options, though its current rating is in line with the rest of this comparison.",
    bestFor: "Buyers who want programmable start and a no-drip carafe at the lowest price in this tier.",
    pros: [
      "Lowest price of the four models here despite programmable start",
      "No-drip carafe spout for cleaner pours",
      "12-cup capacity for larger households",
    ],
    cons: [
      "Smallest review base of the four models here",
      "Requires ongoing paper filter purchases",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Live pricing at this tier",
    explanation:
      "The $50 to $75 range shifts with promotional pricing more than higher tiers do, sometimes dropping a machine below $50 or pushing it above $75 within weeks. Confirm the current price on the product page before assuming a listed model still fits this budget.",
  },
  {
    criterion: "Where this tier sits between $50 and $100",
    explanation:
      "This tier generally buys sturdier build quality and more genuine programmability than the sub-$50 tier, without yet reaching the dual-mode or single-serve flexibility common in the Under $100 tier. Decide whether those specific gains matter before paying more than the cheapest option.",
  },
  {
    criterion: "Filter type and ongoing cost",
    explanation:
      "A permanent filter, like the one included with the SHARDOR here, avoids the recurring cost of paper filters, which run roughly $15 to $30 per year for daily use. Factor this into total cost, not just the machine price.",
  },
  {
    criterion: "First-year cost including filters and descaling",
    explanation:
      "Add roughly $20 to $30 per year for paper filters and descaling solution to any machine's sticker price for a realistic first-year total. A $30 machine with paper filters can approach $55 to $60 in true first-year cost.",
  },
  {
    criterion: "Minimum performance and warranty expectations",
    explanation:
      "At this tier, expect at least a basic one-year warranty and either programmable start or a meaningfully sturdier build than sub-$50 options, since $50 to $75 buys real, if modest, improvement over the cheapest tier.",
  },
];

export const howWeEvaluated = [
  {
    title: "Capacity vs footprint",
    description:
      "We compared carafe size against realistic household size, since a 12-cup carafe only helps if you brew full pots regularly.",
  },
  {
    title: "Feature set relative to price within the tier",
    description:
      "We weighed programmability, filter type, and pour design against each model's specific price within the $50 to $75 range, rather than treating the whole tier as identical.",
  },
  {
    title: "Filter cost over a full year",
    description:
      "We estimated ongoing paper filter costs versus the permanent filter option to surface true first-year cost beyond the sticker price.",
  },
  {
    title: "Build quality and brand track record",
    description:
      "We looked at review base size and brand reputation as a proxy for durability, since this tier includes both established brands and newer entrants.",
  },
  {
    title: "Live price verification",
    description:
      "We noted that pricing in this range shifts frequently and flagged the need to verify current pricing before purchase.",
  },
];

export const howToChoose = [
  {
    subheading: "By Household Size",
    intro: "Match carafe capacity to how much coffee your household actually drinks per sitting.",
    table: {
      headers: ["Household", "Recommended Pick"],
      rows: [
        ["One to two people, want extra features", "SHARDOR 10-Cup Programmable"],
        ["Prioritize build quality and easy cleanup", "KRUPS Simply Brew"],
        ["Larger household, maximum capacity", "BLACK+DECKER 12-Cup Vortex"],
        ["Want programmable start at the lowest price here", "BREW 12-Cup Programmable"],
      ],
    },
  },
  {
    subheading: "First-Year Cost Estimate",
    intro: "Rough total cost including the machine, filters, and descaling solution for a daily one-pot habit.",
    table: {
      headers: ["Model", "Machine Price", "Est. Filters/Descaling (Year 1)", "Est. Total"],
      rows: [
        ["SHARDOR 10-Cup (permanent filter)", "$39.97", "~$10 (descaling only)", "~$50"],
        ["KRUPS Simply Brew", "$52.66", "~$20 to $30", "~$75 to $85"],
        ["BLACK+DECKER 12-Cup Vortex", "$31.49", "~$20 to $30", "~$55 to $60"],
        ["BREW 12-Cup Programmable", "$29.99", "~$20 to $30", "~$50 to $60"],
      ],
    },
    note: "The permanent-filter SHARDOR has the lowest true first-year cost despite not being the cheapest machine upfront.",
  },
  {
    subheading: "Minimum Expectations at This Tier",
    cards: [
      {
        label: "What to expect",
        text: "At least a basic one-year warranty, and typically either genuine programmable start or a noticeably sturdier build than the cheapest sub-$50 machines.",
      },
      {
        label: "What not to expect yet",
        text: "Dual-mode single-serve and carafe brewing, thermal carafes, or precise temperature control. Those generally require moving into the Under $100 tier or higher.",
      },
    ],
  },
  {
    subheading: "This Tier vs Under $50 vs Under $100",
    table: {
      headers: ["Tier", "What You Typically Get"],
      rows: [
        ["Under $50", "Bare-bones drip or percolator, minimal features"],
        ["$50 to $75 (this guide)", "Programmable start or sturdier build, still single-mode drip"],
        ["Under $100", "Dual-mode or single-serve flexibility, better warming or thermal options"],
      ],
    },
    note: "If dual-mode or single-serve flexibility matters to you, our Under $100 guide covers that tier specifically.",
  },
];

export const faq = [
  {
    q: "Are these prices guaranteed to stay under $75?",
    a: "No. Pricing in this range shifts with promotions and lightning deals, sometimes moving a model above or below $75 within weeks. Every price here reflects a live pull at the time of the last update; check the current product page before buying.",
  },
  {
    q: "What does $50 to $75 actually buy over a sub-$50 machine?",
    a: "Typically genuine programmable start, a permanent filter option, or a sturdier build and easier cleanup, as with the KRUPS model here. It is a modest but real step up from the bare-bones sub-$50 tier.",
  },
  {
    q: "Should I spend up to $100 instead of staying under $75?",
    a: "If you specifically want dual-mode single-serve and carafe brewing or a thermal carafe, the Under $100 tier delivers that. If you just want a reliable full pot with programmable start, this tier covers it without the extra cost.",
  },
  {
    q: "Is a permanent filter worth it over paper filters at this price point?",
    a: "Over a year of daily brewing, yes. Paper filters typically cost $15 to $30 per year, while a permanent filter like the SHARDOR's has no ongoing cost beyond occasional cleaning, which can make it cheaper in true first-year cost despite a similar sticker price.",
  },
  {
    q: "What is the real first-year cost at this tier, not just the machine price?",
    a: "Add roughly $20 to $30 for paper filters and descaling solution over a year, unless the machine includes a permanent filter. A $30 machine can approach $55 to $60 in true first-year cost once that is included.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
