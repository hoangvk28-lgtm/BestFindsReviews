export const guideSlug = "best-9-cup-coffee-makers";
export const guideTitle = "Best 9-Cup Coffee Makers";
export const metaTitle = "Coffee Maker 9 Cup: 3 Models Compared (2026)";
export const metaDescription =
  "True 9-cup-specific coffee makers are uncommon. We researched the current options, verified real capacity against each listing, and compared the closest genuine 9-cup picks.";
export const mainKeyword = "coffee maker 9 cup";
export const lastUpdated = "2026-08-04";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41o0XxoT2cL._SL500_.jpg";

export const introParagraphs = [
  "A 9-cup coffee maker sits between the far more common 8-cup and 10-cup sizes, and true 9-cup-specific models are genuinely uncommon on the market. A manufacturer cup is approximately 5 fluid ounces, so 9 cups works out to roughly 45 fluid ounces total, about 5.6 standard 8oz mugs, when a machine is actually built to that spec.\n\nBecause this is a narrower product category than 8-cup or 10-cup, we researched three current options and verified the real capacity of each against its own listing rather than trusting the cup number alone. Most buyers in this range should also seriously consider our 8-cup and 10-cup guides, both linked throughout this article, since genuinely 9-cup-labeled machines are limited.",
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
    id: "oxo-brew-9-cup",
    rank: 1,
    badge: "Best Overall",
    name: "OXO Brew 9-Cup Drip Coffee Maker, Programmable, Stainless Steel",
    amazonUrl: "https://www.amazon.com/dp/B00YEYKK8U?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41o0XxoT2cL._SL500_.jpg",
    price: "$223.00",
    rating: "3.9",
    reviews: "3,615 reviews",
    specs: ["SCA Gold Cup certified", "BetterBrew precision temperature control", "Rainmaker showerhead", "Double-wall thermal carafe", "Single-dial cup and timer programming"],
    description:
      "This is the one machine in this comparison actually labeled and sold as a 9-cup model, and it carries SCA Gold Cup certification, meaning its BetterBrew technology keeps water between roughly 197.6 and 204.8 degrees Fahrenheit across the whole cycle. A single dial lets you choose cup count and set the automatic wake-up timer without digging through menus, and a rainmaker showerhead is built to disperse water evenly whether you are brewing two cups or a full pot.\n\nIts double-wall stainless steel thermal carafe holds heat for hours, and a built-in mixing tube is designed to keep the last cup poured as strong as the first. It is the most expensive model here, which tracks with its certification and genuine 9-cup-specific engineering.",
    bestFor: "Buyers who specifically want a genuinely 9-cup-labeled, SCA-certified machine and are willing to pay for it.",
    pros: [
      "Only model here actually labeled and sold as 9-cup",
      "SCA Gold Cup certified for verified brew temperature",
      "Thermal carafe with an internal mixing tube for consistent strength pour to pour",
    ],
    cons: [
      "Highest price of the three models in this comparison by a wide margin",
      "Premium price for a capacity most 8-cup or 10-cup machines also cover",
    ],
  },
  {
    id: "moccamaster-kbt",
    rank: 2,
    badge: "Best Build Quality",
    name: "Technivorm Moccamaster 79112 KBT Coffee Brewer, 40oz, Polished Silver",
    amazonUrl: "https://www.amazon.com/dp/B002S4DI2S?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41xdT6KJEGL._SL500_.jpg",
    price: "$309.22",
    rating: "4.2",
    reviews: "3,285 reviews",
    specs: ["40oz total brewed capacity", "4 to 6 minute brew time", "Manual adjust brew basket", "Stainless steel thermal carafe", "5-year warranty"],
    description:
      "Worth flagging directly: Moccamaster states this model's capacity as 40oz, which by the standard 5oz manufacturer cup works out closer to 8 cups than 9, despite it sometimes appearing in 9-cup-adjacent searches. We are including it here because it is a genuinely well-regarded, precision-built machine in this capacity range, not because its labeled capacity is a perfect match, and buyers should treat its true output as roughly 8 cups.\n\nIt brews 40oz in 4 to 6 minutes with a manually adjustable brew basket for customizing extraction, and its stainless steel thermal carafe and 5-year warranty reflect a build quality tier above the other two machines in this comparison.",
    bestFor: "Buyers prioritizing brewing precision and long-term build quality over an exact 9-cup capacity match.",
    pros: [
      "Manually adjustable brew basket for extraction control",
      "5-year warranty, longest of the three models here",
      "Widely regarded for consistent, high-quality extraction",
    ],
    cons: [
      "Stated 40oz capacity is actually closer to 8 cups than 9",
      "Second-highest price in this comparison",
    ],
  },
  {
    id: "krups-simply-brew-9",
    rank: 3,
    badge: "Best Value",
    name: "KRUPS Coffee Maker 10 Cups Simply Brew Stainless Steel Drip Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B08PP1H7QK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31SbNxvTcWL._SL500_.jpg",
    price: "$52.66",
    rating: "4.1",
    reviews: "22,693 reviews",
    specs: ["1.5L / 51oz capacity", "900 watts", "Pause & Brew system", "Reusable filter, measuring spoon, no-drip carafe", "Dishwasher-safe glass carafe"],
    description:
      "Also worth flagging directly: this KRUPS model is sold and labeled as a 10-cup machine, with a stated 1.5L, or roughly 51oz, capacity, which is closer to 10 cups than 9. We include it here as the budget option for buyers in the 9-cup search range who are comfortable with a machine that actually brews slightly more, since true 9-cup machines are limited and this covers the same practical need at a fraction of the OXO's price.\n\nIts Pause & Brew system lets you pull the carafe mid-cycle for an early cup, and it ships with a reusable filter, measuring spoon, and a no-drip, dishwasher-safe glass carafe.",
    bestFor: "Buyers who want a low-cost machine covering roughly the same practical capacity as a 9-cup, even though it is labeled and sized as 10-cup.",
    pros: [
      "Lowest price by a wide margin in this comparison",
      "Stated capacity closely matches its 10-cup label, no false advertising",
      "Dishwasher-safe glass carafe and included reusable filter",
    ],
    cons: [
      "Not actually a 9-cup machine; brews closer to 50oz than 45oz",
      "No thermal carafe, needs an active warming plate to stay hot",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Confirming a true 9-cup capacity versus an adjacent size",
    explanation:
      "Only one model in this comparison, the OXO Brew, is actually labeled and engineered as 9-cup at roughly 45oz. The Moccamaster brews closer to 40oz (8 cups) and the KRUPS closer to 51oz (10 cups); check stated ounces directly rather than assuming a listing found under '9 cup' searches is truly that size.",
  },
  {
    criterion: "Whether exact capacity matters to you",
    explanation:
      "If your household brews a variable amount day to day, the difference between 40oz, 45oz, and 51oz total capacity is a matter of half a mug or so and may not matter in practice. If you need a precise 9-cup match for a specific routine, only the OXO delivers that exactly.",
  },
  {
    criterion: "Certification and brew temperature control",
    explanation:
      "The OXO carries SCA Gold Cup certification for verified brew temperature. Neither the Moccamaster nor the KRUPS in this comparison carry that specific certification, though the Moccamaster is independently well regarded for brewing consistency.",
  },
  {
    criterion: "Carafe type",
    explanation:
      "The OXO and Moccamaster both use thermal carafes that hold heat for hours without power; the KRUPS uses a glass carafe that needs an active warming plate to stay hot.",
  },
  {
    criterion: "Price spread across this category",
    explanation:
      "Prices in this comparison range from about $53 for the KRUPS to over $300 for the Moccamaster, a wider spread than most single-size categories, reflecting how differently positioned these three machines actually are.",
  },
  {
    criterion: "Considering the 8-cup or 10-cup guides instead",
    explanation:
      "Because genuinely 9-cup machines are limited, most buyers researching this size will find more current options by also checking our 8-cup and 10-cup guides, which cover the sizes immediately adjacent to what you are likely looking for.",
  },
];

export const howWeEvaluated = [
  {
    title: "Verified real capacity against each listing",
    description:
      "We checked stated ounce capacity for each model rather than trusting cup counts in titles alone, and we flag clearly where a model's true capacity sits closer to 8 or 10 cups than 9.",
  },
  {
    title: "Certification and brew temperature control",
    description:
      "We noted SCA and Gold Cup certification where present, since these reflect independently verified brewing standards.",
  },
  {
    title: "Build quality and warranty",
    description:
      "We compared included warranty length and construction materials, since this category includes machines at very different price and quality tiers.",
  },
  {
    title: "Carafe type and heat retention",
    description:
      "We compared thermal versus glass carafe designs across the three models, since heat retention approach varies significantly in this comparison.",
  },
  {
    title: "Value relative to actual capacity delivered",
    description:
      "We weighed each model's price against what it actually brews, not just its marketed cup count, to help buyers judge genuine value.",
  },
];

export const howToChoose = [
  {
    subheading: "Why This Category Is Narrower Than 8-Cup or 10-Cup",
    intro:
      "True 9-cup-specific coffee makers are uncommon. Only the OXO Brew in this comparison is actually labeled and engineered to that exact 45oz capacity; the other two are adjacent sizes included because they cover the same practical need.",
    note: "If exact 9-cup sizing is not essential to your routine, our best 8-cup coffee makers and best 10-cup coffee makers guides both cover this range in more depth with more current model options.",
  },
  {
    subheading: "Understanding '9 Cups'",
    table: {
      headers: ["Manufacturer Cups", "Fluid Ounces", "Standard 8oz Mugs"],
      rows: [
        ["9 cups", "~45 fl oz", "~5.6 mugs"],
        ["8 cups (for comparison)", "~40 fl oz", "~5 mugs"],
        ["10 cups (for comparison)", "~50 fl oz", "~6.25 mugs"],
      ],
    },
  },
  {
    subheading: "By Priority",
    table: {
      headers: ["What Matters Most", "Recommended Pick"],
      rows: [
        ["Exact 9-cup capacity, certified brewing", "OXO Brew 9-Cup"],
        ["Best build quality, precision extraction", "Technivorm Moccamaster KBT (brews closer to 8 cups)"],
        ["Lowest price, practical everyday use", "KRUPS Simply Brew (brews closer to 10 cups)"],
      ],
    },
  },
  {
    subheading: "Exact Match vs Practical Fit",
    cards: [
      {
        label: "Need an exact 9-cup match",
        text: "Only the OXO Brew 9-Cup in this comparison is actually built and labeled to that spec. It is also the most feature-rich and certified option here.",
      },
      {
        label: "Close enough is fine",
        text: "Either the Moccamaster or KRUPS covers roughly the same practical daily use, at very different price points, even though neither is precisely 9 cups.",
      },
    ],
  },
  {
    subheading: "Also Consider",
    intro: "Because this is a narrower category, check the adjacent sizes for more current options.",
    table: {
      headers: ["If You Want", "See Instead"],
      rows: [
        ["More 8-cup-specific options", "Best 8-Cup Coffee Makers guide"],
        ["More 10-cup-specific options", "Best 10-Cup Coffee Makers guide"],
      ],
    },
  },
];

export const faq = [
  {
    q: "Are there many genuine 9-cup coffee makers available?",
    a: "No, this is a narrower category than 8-cup or 10-cup. Of the three models we researched for this guide, only the OXO Brew 9-Cup is actually labeled and engineered to a true 45oz, 9-cup capacity.",
  },
  {
    q: "Does a 9-cup coffee maker really make 9 mugs of coffee?",
    a: "No, and this applies even to genuinely 9-cup machines. A manufacturer cup is about 5 fluid ounces, so 9 cups works out to roughly 45 fluid ounces total, about 5.6 standard 8oz mugs.",
  },
  {
    q: "Why did you include the Moccamaster and KRUPS if they are not actually 9-cup?",
    a: "Because genuinely 9-cup-labeled machines are limited, and both cover roughly the same practical daily capacity that most buyers searching for a '9 cup' machine actually need. We flag their true capacity clearly rather than implying they are an exact match.",
  },
  {
    q: "Should I check the 8-cup or 10-cup guides instead?",
    a: "If exact 9-cup sizing is not essential to your routine, yes. Both our best 8-cup coffee makers and best 10-cup coffee makers guides cover more current model options in those adjacent, more common sizes.",
  },
  {
    q: "What does SCA Gold Cup certification mean?",
    a: "It means the Specialty Coffee Association has independently verified that the machine brews within a recognized temperature range, roughly 197.6 to 204.8 degrees Fahrenheit for the OXO Brew here, for consistent extraction.",
  },
  {
    q: "Which of these three is the best value?",
    a: "The KRUPS Simply Brew is the clear value pick at roughly $53, though it actually brews closer to 10 cups than 9. If exact 9-cup capacity and certified brewing matter more to you than price, the OXO Brew is the better match despite costing significantly more.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
