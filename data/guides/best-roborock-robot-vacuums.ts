export const guideSlug = "best-roborock-robot-vacuums";
export const guideTitle = "Best Roborock Robot Vacuums";
export const metaTitle = "Best Roborock Robot Vacuums (2026): 7 Models Compared";
export const metaDescription =
  "We compared seven current Roborock models across the Q, Qrevo, and Saros series on suction power, navigation type, and dock features so you can pick the right tier without overpaying.";
export const mainKeyword = "roborock robot vacuums";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31ECgSwvaXL._SL500_.jpg";

export const introParagraphs = [
  "The Roborock lineup now spans three distinct tiers: the budget-focused Q-series, the mid-to-upper Qrevo series, and the flagship Saros series. That range makes it easy to either overspend on features you will not use or underspend and end up frustrated by a dock that cannot keep up with a busy household. Pa suction figures get most of the marketing attention, but they do not tell the whole story on their own.",
  "We researched and compared seven current, genuinely distinct Roborock models rather than color or regional variants of the same base unit, focusing on the details that actually change daily use: suction tier relative to price, navigation type, obstacle avoidance versus mapping accuracy, mop lifting behavior, and what each dock actually requires in ongoing upkeep.",
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
    id: "roborock-saros-10r",
    rank: 1,
    badge: "Best Overall",
    name: "roborock Saros 10R Robot Vacuum and Mop, 22000Pa, Edge Cleaning",
    amazonUrl: "https://www.amazon.com/dp/B0DHCJ571Z?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31ECgSwvaXL._SL500_.jpg",
    price: "$1099.99",
    rating: "4.0",
    reviews: "5,034 reviews",
    specs: ["22000Pa suction", "LiDAR navigation", "Edge cleaning arm", "Flagship Saros tier"],
    description:
      "The Saros 10R sits at the top of Roborock's current lineup, and the 22000Pa suction figure is the highest of any model in this comparison. What separates it from the Qrevo tier is not just raw suction but the extending edge-cleaning arm, which is designed to reach into corners that a round or even a standard square-edged chassis leaves behind. LiDAR handles the mapping itself, which is about navigation accuracy rather than the same thing as spotting small obstacles like cords or pet waste, so it is still worth checking recent owner reviews for how well obstacle avoidance performs in a specific home layout.\n\nAt over $1,000 this is a real investment, and the rating sits a bit lower than some cheaper models in this comparison, which is common for feature-dense flagship robots with more components that can need troubleshooting. For buyers who want the most complete edge-to-edge cleaning and are willing to pay for it, it is still the strongest all-around pick here.",
    bestFor: "Buyers who want the most complete corner and edge coverage and are not working with a tight budget.",
    pros: [
      "Highest suction figure in this comparison",
      "Extending arm targets edges and corners other designs miss",
      "Full LiDAR mapping for accurate navigation",
    ],
    cons: [
      "Most expensive model in this comparison by a wide margin",
      "More complex mechanism means more that can potentially need attention",
    ],
  },
  {
    id: "roborock-qrevo-s-pro-2026",
    rank: 2,
    badge: "Best Premium Pick",
    name: "roborock 2026 New Qrevo S Pro Robot Vacuum and Mop, 18,500Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GGRSMXKN?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31DKyfvT1pL._SL500_.jpg",
    price: "$549.99",
    rating: "Popular pick",
    reviews: "Strong buyer feedback",
    specs: ["18,500Pa suction", "2026 Qrevo S Pro", "LiDAR navigation", "Premium dock features"],
    description:
      "The Qrevo S Pro is Roborock's newest Qrevo-tier release and lands well under half the price of the Saros 10R while still offering 18,500Pa of suction, close enough to the flagship number that most households will not notice the difference in daily pickup. It represents the practical middle ground between the budget Q-series and the flagship Saros series, with premium dock functions like hot water washing typically included at this tier.\n\nThat kind of premium dock reduces daily hands-on work, but it adds its own maintenance in the form of detergent refills and periodic tray cleaning, which is worth factoring into ongoing upkeep rather than treating the dock as fully maintenance-free. As a 2026 release it does not yet have the long review history of older models, so buyers who want a longer track record before deciding may prefer the Qrevo Series pick below.",
    bestFor: "Buyers who want near-flagship suction and dock features without paying Saros-tier prices.",
    pros: [
      "18,500Pa suction close to the flagship model at roughly half the price",
      "Premium dock features reduce daily hands-on maintenance",
      "Recent release with current-generation navigation",
    ],
    cons: [
      "Shorter review history than more established models in this comparison",
      "Hot water dock still requires detergent and tray upkeep",
    ],
  },
  {
    id: "roborock-qrevo-series",
    rank: 3,
    badge: "Best for Self-Emptying",
    name: "roborock Qrevo Series Robot Vacuum and Mop, Upgraded from Qrevo S",
    amazonUrl: "https://www.amazon.com/dp/B0DQ82FJST?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41EeOg-wEcL._SL500_.jpg",
    price: "$649.99",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["Upgraded Qrevo S platform", "LiDAR navigation", "Auto-empty dock", "Mop lifting"],
    description:
      "This Qrevo Series model builds on the earlier Qrevo S platform with an upgraded dock and mop-lifting mechanism, so the mop pads lift automatically when the robot crosses onto carpet instead of dragging a wet pad across it. That single feature matters more than it sounds for households with mixed flooring, since a mop that does not lift can leave streaks or dampen rugs.\n\nIt costs more than the Qrevo S Pro above despite similar positioning, which reflects its longer time on the market and the more established self-emptying dock design. Buyers who specifically want a proven, well-reviewed auto-empty experience over the newest suction numbers will likely be better served here.",
    bestFor: "Households with mixed hard floors and carpet that want reliable mop lifting and a proven auto-empty dock.",
    pros: [
      "Automatic mop lifting on carpet prevents wet-pad streaking",
      "Established, well-reviewed auto-empty dock design",
      "Full LiDAR navigation",
    ],
    cons: [
      "Priced above the newer Qrevo S Pro despite being an earlier platform",
      "Suction figure not published as prominently as newer models",
    ],
  },
  {
    id: "roborock-qrevo-s5v",
    rank: 4,
    badge: "Best Mid-Range Pick",
    name: "roborock Qrevo S5V Robot Vacuum and Mop, FlexiArm Edge Mopping",
    amazonUrl: "https://www.amazon.com/dp/B0DSP8J476?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/317EXRVR2uL._SL500_.jpg",
    price: "$499.98",
    rating: "Frequently recommended",
    reviews: "Widely purchased",
    specs: ["FlexiArm edge mopping", "Qrevo mid-tier", "LiDAR navigation", "Sub-$500 pricing"],
    description:
      "The Qrevo S5V is the entry point into Roborock's Qrevo tier, bringing the FlexiArm edge-mopping mechanism, a smaller-scale version of the extending arm seen on the flagship Saros models, down to under $500. That gives buyers who want better edge coverage than the Q-series without stepping up to the priciest Qrevo models a genuine mid-range option.\n\nIt still relies on LiDAR for mapping, which handles navigation accuracy well but is a separate question from obstacle avoidance around cords, cables, or pet waste, so that is worth checking in recent reviews if a household has pets or loose cables on the floor. Compared to the higher-priced Qrevo models here, expect a simpler dock feature set.",
    bestFor: "Buyers who want FlexiArm edge mopping without paying for the top Qrevo or Saros dock features.",
    pros: [
      "FlexiArm edge mopping at a sub-$500 price point",
      "Full LiDAR mapping for accurate navigation",
      "Solid middle ground between Q-series and premium Qrevo",
    ],
    cons: [
      "Fewer premium dock features than higher-tier Qrevo models",
      "Obstacle avoidance for small objects should be checked separately from mapping specs",
    ],
  },
  {
    id: "roborock-q7-m5-plus",
    rank: 5,
    badge: "Best Value",
    name: "roborock Q7 M5+ Robot Vacuum and Mop, Up to 7-9 Weeks Self-Empty, 10000Pa",
    amazonUrl: "https://www.amazon.com/dp/B0DWX69JVG?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/418QVNeplbL._SL500_.jpg",
    price: "$299.99",
    rating: "Popular pick",
    reviews: "Strong buyer feedback",
    specs: ["10000Pa suction", "Self-empty up to 7-9 weeks", "Q-series", "LiDAR navigation"],
    description:
      "The Q7 M5+ is a Q-series model that still includes a self-emptying dock rated for up to 7 to 9 weeks between bag changes, which is a meaningful convenience jump over the Q10 S5+ below at a price difference of only about $20. 10000Pa suction is a solid mid-tier figure, well below the Qrevo and Saros models here but a real step up from entry-level robot vacuums outside this comparison.\n\nAs with every model in this guide, the Pa number alone does not determine real-world pickup on carpets and rugs as much as navigation consistency and brush design do, so buyers should weigh this alongside the self-empty convenience rather than shopping on suction figures in isolation.",
    bestFor: "Buyers who want long stretches between dock maintenance on a genuine budget.",
    pros: [
      "Self-empty dock rated up to 7-9 weeks between bag changes",
      "10000Pa suction is solid for its Q-series price tier",
      "Only a modest premium over the entry-level Q10 S5+",
    ],
    cons: [
      "Suction and navigation trail the Qrevo and Saros tiers",
      "Dock lacks the mopping-wash features found on premium models here",
    ],
  },
  {
    id: "roborock-q10-s5-plus",
    rank: 6,
    badge: "Best Budget Pick",
    name: "roborock Q10 S5+ Robot Vacuum and Mop, 10,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0DWXBCQVP?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31TzU0YZA6L._SL500_.jpg",
    price: "$279.99",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["10,000Pa suction", "Q10 S5+ entry model", "Self-empty dock", "LiDAR navigation"],
    description:
      "The Q10 S5+ is the least expensive model in this comparison and still delivers 10,000Pa of suction and a self-emptying dock, which used to be premium-only features on earlier Roborock generations. For buyers who mainly want a competent daily robot vacuum without stepping into Qrevo or Saros pricing, this is the clearest entry point into the current lineup.\n\nThe tradeoffs versus the Q7 M5+ above are modest, mainly a shorter self-empty interval and a slightly more basic dock, but the roughly $20 price gap is small enough that it comes down to whether the longer self-empty window is worth it for a given household.",
    bestFor: "First-time robot vacuum buyers who want core Roborock features at the lowest entry price.",
    pros: [
      "Lowest price of any model in this comparison",
      "Self-empty dock and 10,000Pa suction, both formerly premium-only features",
      "Straightforward LiDAR navigation",
    ],
    cons: [
      "Shorter self-empty interval than the Q7 M5+",
      "No mop-lifting or wash-dock features found on higher tiers",
    ],
  },
  {
    id: "roborock-q7-l5",
    rank: 7,
    badge: "Best Budget Pick for Small Spaces",
    name: "roborock Q7 L5 Robot Vacuum and Mop Combo, 8,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0F334DN9J?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41hpc-ca5xL._SL500_.jpg",
    price: "$139.99",
    rating: "Frequently recommended",
    reviews: "Widely purchased",
    specs: ["8,000Pa suction", "Vacuum and mop combo", "Lowest price in lineup", "Compact Q-series"],
    description:
      "The Q7 L5 is the most affordable model in this comparison by a wide margin, combining vacuuming and mopping in one pass at 8,000Pa of suction. It does not include a self-emptying dock, so it needs its bin emptied manually after each run, which is the main tradeoff for the low price.\n\nFor a smaller home, apartment, or as a secondary unit for a single level, that manual step is a reasonable compromise. Buyers who want to avoid emptying a bin by hand should budget for at least the Q10 S5+ instead, since self-empty docks start there in this lineup.",
    bestFor: "Small apartments, single-level homes, or a secondary unit where manual bin emptying is not a dealbreaker.",
    pros: [
      "Lowest price of any model in this comparison",
      "Combines vacuuming and mopping in a single pass",
      "Compact enough for smaller spaces",
    ],
    cons: [
      "No self-emptying dock, requires manual bin emptying",
      "Lowest suction figure in this comparison",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Suction tier vs price jump",
    explanation:
      "Roborock's lineup spans the budget Q-series at 8,000 to 10,000Pa, the mid-to-upper Qrevo series around 18,500Pa, and the flagship Saros series at 22,000Pa. Pa figures alone don't determine real-world pickup, though, so weigh suction tier against navigation type and dock features rather than chasing the highest number available.",
  },
  {
    criterion: "Navigation type vs obstacle avoidance",
    explanation:
      "Every model in this comparison uses LiDAR-based mapping, which is about navigation accuracy, not the same thing as obstacle avoidance for small objects like cords or pet waste. That distinction is worth checking separately in recent reviews if a household has pets or loose cables on the floor.",
  },
  {
    criterion: "Self-empty dock interval",
    explanation:
      "Self-empty intervals range from none on the entry-level Q7 L5 to up to 7 to 9 weeks on the Q7 M5+. A longer interval means less frequent bag changes, but it is not available on the cheapest models in the lineup.",
  },
  {
    criterion: "Mop lifting on mixed flooring",
    explanation:
      "Households with both hard floors and carpet should confirm whether a model automatically lifts its mop pad on carpet. Models without this can drag a wet pad across rugs, which is a real daily annoyance rather than a minor spec difference.",
  },
  {
    criterion: "Premium dock maintenance tradeoff",
    explanation:
      "Premium docks with hot water wash or auto-refill functions reduce daily hands-on work, but they add real ongoing maintenance in detergent refills and periodic tray cleaning. Factor that upkeep into the decision rather than assuming a premium dock is maintenance-free.",
  },
  {
    criterion: "Price tier jump between series",
    explanation:
      "The step from the Q-series to Qrevo roughly doubles the price, and the step from Qrevo to Saros roughly doubles it again. Decide which tier's features actually matter for your home before assuming the next tier up is worth the jump.",
  },
];

export const howWeEvaluated = [
  {
    title: "Suction tier relative to price",
    description:
      "We compared each model's published Pa suction figure against its price tier to see where the lineup offers genuine step-ups versus diminishing returns.",
  },
  {
    title: "Navigation and mapping approach",
    description:
      "We researched each model's LiDAR-based navigation and noted where mapping accuracy and obstacle avoidance are separate questions worth checking independently in current owner reviews.",
  },
  {
    title: "Dock features and ongoing maintenance",
    description:
      "We looked at self-empty intervals, mop lifting, and premium wash-dock functions, weighing the daily convenience each adds against the detergent and tray upkeep it requires.",
  },
  {
    title: "Distinct model selection",
    description:
      "We selected genuinely distinct models across the Q, Qrevo, and Saros tiers rather than including near-duplicate color or regional variants of the same base unit.",
  },
  {
    title: "Rating and review signal where available",
    description:
      "We used verified rating and review data where available, and relied on qualitative buyer-feedback signals rather than inventing numbers for listings without a confirmed rating.",
  },
];

export const howToChoose = [
  {
    subheading: "By Budget Tier",
    intro: "Roborock's lineup breaks cleanly into three price tiers, and the right one depends on how much you value the top-tier dock and edge-cleaning features.",
    table: {
      headers: ["Budget", "Recommended Pick"],
      rows: [
        ["Under $150", "roborock Q7 L5"],
        ["$250 to $350", "roborock Q10 S5+ or Q7 M5+"],
        ["$500 to $650", "roborock Qrevo S5V or Qrevo Series"],
        ["$1,000+", "roborock Saros 10R"],
      ],
    },
  },
  {
    subheading: "By Household Situation",
    intro: "Match dock features and mop behavior to how your home is actually laid out.",
    table: {
      headers: ["Situation", "Recommended Pick"],
      rows: [
        ["Small apartment or single level, budget matters most", "roborock Q7 L5"],
        ["Want long stretches between dock maintenance", "roborock Q7 M5+"],
        ["Mixed hard floors and carpet, want mop lifting", "roborock Qrevo Series"],
        ["Want near-flagship suction without flagship pricing", "roborock Qrevo S Pro (2026)"],
        ["Want the most complete edge and corner coverage, budget flexible", "roborock Saros 10R"],
      ],
    },
  },
  {
    subheading: "Q-Series vs Qrevo vs Saros",
    cards: [
      {
        label: "Q-series",
        text: "The Q7 L5, Q10 S5+, and Q7 M5+ cover the budget end, with suction between 8,000 and 10,000Pa. Self-empty docks appear starting at the Q10 S5+, but wash-dock and edge-arm features are reserved for higher tiers.",
      },
      {
        label: "Qrevo series",
        text: "The Qrevo S5V, Qrevo Series, and Qrevo S Pro sit in the mid-to-upper range, adding FlexiArm edge mopping and premium dock functions at roughly double the Q-series price.",
      },
      {
        label: "Saros series",
        text: "The Saros 10R is the flagship, with the highest suction and the most complete edge-cleaning arm in the lineup, at a price roughly double the Qrevo tier.",
      },
    ],
    note: "Jumping a full tier makes sense if you specifically need that tier's added edge coverage or dock convenience, not just because it is the next model up.",
  },
  {
    subheading: "Self-Empty Dock vs Manual Emptying",
    cards: [
      {
        label: "Self-empty dock",
        text: "Every model here except the Q7 L5 includes a self-emptying dock, with intervals ranging from several weeks up to 7 to 9 weeks on the Q7 M5+. This reduces hands-on maintenance but adds bag costs over time.",
      },
      {
        label: "Manual bin emptying",
        text: "The Q7 L5 requires emptying the bin by hand after runs, which keeps the price lowest but adds a recurring task. Reasonable for smaller spaces with less debris per run.",
      },
    ],
    note: "If avoiding manual bin emptying matters, budget for at least the Q10 S5+, since that is the entry point for self-empty docks in this lineup.",
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You have pets, area rugs, or a layout with tight corners where the Saros 10R's extending edge arm or the Qrevo tier's mop lifting will make a visible daily difference.",
      },
      {
        label: "Save if",
        text: "You have a smaller home or apartment and mainly want reliable daily coverage. The Q10 S5+ or Q7 M5+ cover the core features most households actually use.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Does a higher Pa suction number always mean better cleaning?",
    a: "Not on its own. Pa suction figures don't determine real-world pickup by themselves, navigation consistency, brush design, and how well the robot handles edges and corners matter just as much. Compare suction within a similar price tier rather than treating it as the only spec that matters.",
  },
  {
    q: "Do all these Roborock models avoid cords and pet waste automatically?",
    a: "LiDAR-based mapping, which every model in this comparison uses, is about navigation accuracy rather than the same thing as obstacle avoidance for small objects like cords or pet waste. That is worth checking separately in recent reviews for the specific model and your home's layout.",
  },
  {
    q: "Is a premium hot-water wash dock worth the extra cost?",
    a: "It depends on how much you value reduced daily hands-on work. Premium docks with hot water wash or auto-refill functions cut down on manual mop cleaning, but they add real ongoing maintenance in detergent refills and periodic tray cleaning, so they are not fully maintenance-free.",
  },
  {
    q: "What is the practical difference between the Q-series, Qrevo, and Saros tiers?",
    a: "The Q-series covers the budget end with 8,000 to 10,000Pa suction and basic to mid self-empty docks. Qrevo models add FlexiArm edge mopping and premium dock features around 18,500Pa. The Saros series is the flagship, with the highest suction and an extending edge-cleaning arm at roughly double the Qrevo price.",
  },
  {
    q: "Do I need a self-emptying dock?",
    a: "It depends on how much debris your home produces and how much manual maintenance you want to do. A self-empty dock, available starting at the Q10 S5+ in this lineup, means fewer manual bin trips but adds recurring bag costs. The Q7 L5 skips this feature to keep the price lowest.",
  },
  {
    q: "Are these all genuinely different models, or just color variants?",
    a: "This guide deliberately compares seven distinct models across the Q, Qrevo, and Saros tiers rather than including near-duplicate color or regional variants of the same base unit, so each pick here represents a real step up or down in features and price.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
