export const guideSlug = "best-coffee-makers-under-100";
export const guideTitle = "Best Coffee Makers Under $100";
export const metaTitle = "Best Coffee Makers Under $100 (2026): 4 Models Compared";
export const metaDescription =
  "We compared four current drip, single-serve, and dual-mode coffee makers priced under $100 on capacity, flexibility, and true first-year ownership cost.";
export const mainKeyword = "coffee makers under $100";
export const lastUpdated = "2026-08-04";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41uojlAOZAL._SL500_.jpg";

export const introParagraphs = [
  "Amazon pricing in the under-$100 range moves often, and a machine sitting comfortably in this tier today can drift above $100 once a promotional discount expires. Every price and spec below comes from a live pull at the time this guide was last updated, so confirm the current price on the product page before assuming a listed model still fits this budget.",
  "Unlike the sub-$50 tier, drip, single-serve, and dual-mode machines all reasonably fit under $100, which opens up real flexibility that pure budget machines cannot offer. We compared four current models on that flexibility along with true first-year cost, including filters or pods and descaling, not just the sticker price.",
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
    id: "hamilton-beach-2way",
    rank: 1,
    badge: "Best Overall",
    name: "Hamilton Beach 2-Way Brewer Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B00EI7DPPI?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41uojlAOZAL._SL500_.jpg",
    price: "$88.99",
    rating: "4.5",
    reviews: "53,550 reviews",
    specs: ["12-cup carafe + single-serve", "Pod or ground compatible", "Dual reservoirs", "Auto shut-off"],
    description:
      "The 2-Way Brewer covers both a full 12-cup carafe and single-serve pod brewing from one machine, which is the kind of flexibility that only becomes realistic once you move past the sub-$50 tier. It uses separate reservoirs for each mode, so switching between a full pot and a single cup does not require refilling or reconfiguring anything.\n\nIt supports both K-Cup-style pods and ground coffee in the single-serve side, giving buyers a real choice on ongoing cost rather than locking them into pods. That flexibility, plus its large review base, is why it tops this list.",
    bestFor: "Households that want both a full carafe and single-serve pod brewing without buying two machines.",
    pros: [
      "Genuine dual-mode flexibility, full carafe and single-serve",
      "Works with pods or ground coffee",
      "Large, established review base",
    ],
    cons: [
      "Two reservoirs to manage instead of one",
      "Not as compact as a single-purpose drip machine",
    ],
  },
  {
    id: "ninja-fresh-brew",
    rank: 2,
    badge: "Best Standard Drip",
    name: "Ninja Fresh Brew Coffee Maker, 12 Cup Glass Carafe",
    amazonUrl: "https://www.amazon.com/dp/B07S98411N?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41SOX63H-GL._SL500_.jpg",
    price: "$89.99",
    rating: "4.4",
    reviews: "28,849 reviews",
    specs: ["12-cup capacity", "Stainless steel accents", "Fresh Brew technology", "Programmable"],
    description:
      "The Fresh Brew is a straightforward but well-built 12-cup drip machine without the added complexity of a single-serve mode, which keeps it simpler to use and clean than the dual-mode Hamilton Beach. Ninja's Fresh Brew technology is designed to pulse water over the grounds rather than a constant stream, aiming for more even extraction.\n\nFor a household that only ever needs a full pot and never a single cup, this avoids paying for pod compatibility you would not use.",
    bestFor: "Buyers who only need full-carafe brewing and want a simpler, single-purpose machine.",
    pros: [
      "Strong rating with a large review base",
      "Programmable start for full pots",
      "No unused pod-compatibility features to pay for",
    ],
    cons: [
      "No single-serve option if household needs vary",
      "Standard paper filter, ongoing cost to factor in",
    ],
  },
  {
    id: "ninja-single-serve-combo",
    rank: 3,
    badge: "Best Single-Serve",
    name: "Ninja Single Serve Coffee Maker, K-Cup Pods and Grounds",
    amazonUrl: "https://www.amazon.com/dp/B0C25Y15TL?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41qKrDZAkoL._SL500_.jpg",
    price: "$99.94",
    rating: "4.3",
    reviews: "11,498 reviews",
    specs: ["Single-serve only", "Pod or ground compatible", "Compact footprint", "Multiple cup sizes"],
    description:
      "This Ninja is a single-serve-only machine that, like the Hamilton Beach, accepts either K-Cup-style pods or ground coffee, giving buyers the ability to skip pods entirely if they prefer. It sits at the top of this budget tier price-wise but stays compact since it never has to accommodate a full carafe.\n\nFor a single user who never brews a full pot, the flexibility to switch between pods and grounds without needing carafe storage makes this the more space-efficient pick over the dual-mode Hamilton Beach.",
    bestFor: "A single user who wants pod flexibility without the footprint of a carafe machine.",
    pros: [
      "Accepts pods or ground coffee, not locked into one format",
      "Compact footprint with no carafe to store",
      "Multiple cup size settings",
    ],
    cons: [
      "No full-carafe option for guests or multiple people",
      "Highest price of the four models here",
    ],
  },
  {
    id: "krups-simply-brew",
    rank: 4,
    badge: "Best Value",
    name: "KRUPS Coffee Maker 10 Cups Simply Brew",
    amazonUrl: "https://www.amazon.com/dp/B08PP1H7QK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31SbNxvTcWL._SL500_.jpg",
    price: "$52.66",
    rating: "4.1",
    reviews: "22,693 reviews",
    specs: ["10-cup capacity", "900 watts", "Drip-free design", "Dishwasher-safe carafe"],
    description:
      "The Simply Brew is the lowest-priced machine in this comparison by a wide margin and still delivers a respectable 10-cup capacity with a dishwasher-safe carafe, a small but genuinely convenient detail that neither of the pricier machines here specifically call out. At 900 watts it is a straightforward, no-frills drip machine.\n\nIt lacks the single-serve or dual-mode flexibility of the other three picks, but for a buyer who just wants a reliable full pot without paying for features they will not use, it leaves real budget headroom under the $100 ceiling.",
    bestFor: "Buyers who want a reliable full-pot drip machine and to spend well under the $100 ceiling.",
    pros: [
      "Lowest price of the four models here by a wide margin",
      "Dishwasher-safe carafe simplifies cleanup",
      "Straightforward operation with no learning curve",
    ],
    cons: [
      "No single-serve or pod option",
      "Fewer advanced features than the dual-mode or Fresh Brew models",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Live pricing at this tier",
    explanation:
      "Under-$100 listings can shift with promotional pricing, sometimes moving a model above or below the threshold within weeks. Confirm the current price on the product page before assuming a listed model still qualifies.",
  },
  {
    criterion: "Product class flexibility",
    explanation:
      "Unlike the sub-$50 tier, drip, single-serve, and dual-mode machines are all realistically available under $100. Decide which mode you actually need, full carafe, single cup, or both, before comparing prices.",
  },
  {
    criterion: "Pod vs ground coffee compatibility",
    explanation:
      "Machines that accept both K-Cup-style pods and ground coffee, like the Hamilton Beach and the Ninja single-serve model here, give you the option to avoid pod costs entirely. Confirm this compatibility before assuming a single-serve machine is pod-only.",
  },
  {
    criterion: "First-year cost including filters, pods, and descaling",
    explanation:
      "A dual-mode or single-serve machine used daily with pods can add $150 to $275 per year in pod costs alone, while a paper-filter drip machine adds a more modest $20 to $30 per year. Factor this into the total cost comparison, not just the machine price.",
  },
  {
    criterion: "What the $150 to $200 tier adds",
    explanation:
      "Moving up from under $100 typically buys sturdier build quality, thermal carafes, and more precise temperature or strength control. If those matter more than staying under $100, it is worth comparing against pricier options separately.",
  },
];

export const howWeEvaluated = [
  {
    title: "Mode flexibility",
    description:
      "We compared single-serve, full-carafe, and dual-mode designs against realistic household needs, since paying for dual-mode flexibility only makes sense if you use both modes.",
  },
  {
    title: "Pod vs ground coffee cost",
    description:
      "We weighed the ongoing cost difference between pod-based and ground-coffee brewing to surface true first-year ownership cost.",
  },
  {
    title: "Build and cleanup convenience",
    description:
      "We noted details like dishwasher-safe carafes and drip-free designs that reduce daily friction beyond the core brewing function.",
  },
  {
    title: "Rating and review volume",
    description:
      "We factored in current rating and review count as a signal of real-world reliability across each model's time on the market.",
  },
  {
    title: "Live price verification",
    description:
      "We flagged that pricing at this tier shifts with promotions and noted the need to verify current pricing before purchase.",
  },
];

export const howToChoose = [
  {
    subheading: "By Brewing Needs",
    intro: "Match the machine's mode to how you actually drink coffee, not just to the most feature-rich option.",
    table: {
      headers: ["Need", "Recommended Pick"],
      rows: [
        ["Both full carafe and single-serve, same machine", "Hamilton Beach 2-Way Brewer"],
        ["Only full-carafe brewing, no single-serve needed", "Ninja Fresh Brew 12-Cup"],
        ["Only single-serve, compact footprint", "Ninja Single Serve Combo"],
        ["Reliable full pot, lowest price in this tier", "KRUPS Simply Brew"],
      ],
    },
  },
  {
    subheading: "First-Year Cost Estimate",
    intro: "Rough total cost including the machine plus a year of pods or filters and descaling, for a daily single-cup or single-pot habit.",
    table: {
      headers: ["Model", "Machine Price", "Est. Pods/Filters (Year 1)", "Est. Total"],
      rows: [
        ["Hamilton Beach 2-Way (pods, daily)", "$88.99", "~$150 to $275 (pods)", "~$240 to $365"],
        ["Ninja Fresh Brew (paper filters)", "$89.99", "~$20 to $30", "~$110 to $120"],
        ["Ninja Single Serve (pods, daily)", "$99.94", "~$150 to $275 (pods)", "~$250 to $375"],
        ["KRUPS Simply Brew (paper filters)", "$52.66", "~$20 to $30", "~$75 to $85"],
      ],
    },
    note: "Pod-based daily brewing adds far more to first-year cost than paper filters. If cost matters more than single-serve convenience, a filter-based drip machine like the Ninja Fresh Brew or KRUPS is meaningfully cheaper to run.",
  },
  {
    subheading: "Pod-Free Options",
    cards: [
      {
        label: "Fully pod-free",
        text: "The Ninja Fresh Brew and KRUPS Simply Brew use standard paper filters only, keeping ongoing cost low and predictable.",
      },
      {
        label: "Pod-optional",
        text: "The Hamilton Beach 2-Way and Ninja Single Serve both accept ground coffee as well as pods, so you can skip pod costs on the single-serve side if you choose.",
      },
    ],
  },
  {
    subheading: "When the $150 to $200 Tier Is Worth It",
    note: "If you specifically want a thermal carafe, precise temperature control, or noticeably sturdier build quality, moving above $100 typically delivers real improvement in those areas. If your needs are covered by full-carafe or single-serve brewing alone, the models in this guide cover that well under $100.",
  },
];

export const faq = [
  {
    q: "Are these prices guaranteed to stay under $100?",
    a: "No. Pricing at this tier shifts with promotions and can move a model above or below $100 within weeks. Every price here reflects a live pull at the time of the last update; check the current product page before assuming it still fits this budget.",
  },
  {
    q: "Can I get a machine that does both single-serve and a full pot under $100?",
    a: "Yes. The Hamilton Beach 2-Way Brewer in this comparison covers both modes from one machine with separate reservoirs, which is realistic in this tier but generally not available under $50.",
  },
  {
    q: "Is pod-based brewing much more expensive to run than a drip machine?",
    a: "Yes, meaningfully. A daily single-cup pod habit runs roughly $150 to $275 per year, while a paper-filter drip machine adds closer to $20 to $30 per year. Factor this into your choice if ongoing cost matters as much as the machine price.",
  },
  {
    q: "What do I gain by spending more than $100?",
    a: "Typically a thermal carafe instead of a warming plate, sturdier build quality, and more precise temperature or strength control. If none of those matter to you, the models in this guide cover full-carafe and single-serve brewing well under $100.",
  },
  {
    q: "Can single-serve machines under $100 use ground coffee instead of pods?",
    a: "Some can. The Hamilton Beach 2-Way and the Ninja Single Serve Combo in this comparison both accept ground coffee as well as pods, which lets you avoid pod costs on the single-serve side if you prefer.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
