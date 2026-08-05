export const guideSlug = "best-roomba-robot-vacuums";
export const guideTitle = "Best Roomba Robot Vacuums";
export const metaTitle = "Best Roomba Robot Vacuums (2026): 8 Models Compared";
export const metaDescription =
  "We compared eight current Roomba models on vacuum-only vs combo mopping, dock type, LiDAR navigation, and pet hair handling so you can pick the right one without guessing.";
export const mainKeyword = "roomba robot vacuums";
export const lastUpdated = "2026-08-05";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41GoxaZPgPL._SL500_.jpg";

export const introParagraphs = [
  "The current Roomba lineup is bigger and more varied than it looks at first glance. It mixes straightforward vacuum-only models like the 105 Vac and 205 DustCompactor with 2-in-1 combo units that vacuum and mop, and multifunction systems like the 415X and Max 705 that add self-emptying docks, mop pad washing, and heated drying. Treating every model as a smaller or larger version of the same robot leads to buying the wrong one.",
  "We researched eight current, distinct models rather than color or bundle variants of the same base robot, and compared them on the details that actually change day-to-day ownership: whether a model vacuums only or also mops, what kind of dock it uses (if any), how it navigates and maps a home, and how well it is suited to pet hair and multi-room cleaning.",
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
    id: "roomba-plus-505-combo",
    rank: 1,
    badge: "Best Overall",
    name: "iRobot Roomba Plus 505 Combo Robot Vacuum & Mop with AutoWash Dock",
    amazonUrl: "https://www.amazon.com/dp/B0DWG1YNJR?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41GoxaZPgPL._SL500_.jpg",
    price: "$499",
    rating: "4.2",
    reviews: "8,964 reviews",
    specs: ["AutoWash Dock", "Extending spinning mop pads", "Self-empties", "LiDAR navigation"],
    description:
      "The Roomba Plus 505 Combo pairs vacuuming with an extending, spinning mop system and an AutoWash Dock that washes and heat-dries the mop pads between runs, so you are not pulling out a dirty pad by hand after every mopping pass. LiDAR navigation handles mapping and room-by-room cleaning, and the dock also empties the bin automatically.\n\nAmong the models we researched, this is the one that comes closest to a fully hands-off routine: vacuum, mop, empty, and wash the pads, all without you touching the robot between cycles. It carries a higher price than the vacuum-only or basic combo models here, but it is the most complete package for buyers who want both floor types handled well.",
    bestFor: "Buyers who want vacuuming and mopping fully automated, including pad washing, without manual cleanup.",
    pros: [
      "AutoWash Dock washes and heat-dries mop pads automatically",
      "Self-emptying bin plus LiDAR mapping",
      "Handles both vacuuming and mopping in one routine",
    ],
    cons: [
      "Highest price point in this comparison alongside the Max 705",
      "Dock takes up more floor space than a basic charging base",
    ],
  },
  {
    id: "roomba-105-vac",
    rank: 2,
    badge: "Best Budget Pick",
    name: "iRobot Roomba 105 Vac Robot Vacuum",
    amazonUrl: "https://www.amazon.com/dp/B0DX6KZR9T?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41bDxzWHZHL._SL500_.jpg",
    price: "$159",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["Vacuum-only", "Intense power-lifting suction", "LiDAR navigation", "Self-charging"],
    description:
      "The Roomba 105 Vac is a vacuum-only model, meaning there is no mop pad, no water tank, and no combo dock to think about. It still gets LiDAR navigation and power-lifting suction, which is more mapping capability than budget robot vacuums typically include at this price.\n\nFor buyers who have hard floors that do not need mopping, or who already mop by hand and just want dirt and debris handled automatically, this is the simplest and least expensive way into the current Roomba lineup.",
    bestFor: "Buyers who only want vacuuming handled and do not need a mopping function.",
    pros: [
      "Lowest price in this comparison",
      "LiDAR navigation despite the entry-level price",
      "Simple, vacuum-only design with fewer parts to maintain",
    ],
    cons: [
      "No mopping capability at all",
      "No self-emptying dock included at this price",
    ],
  },
  {
    id: "roomba-plus-405-2in1",
    rank: 3,
    badge: "Best Value",
    name: "iRobot Roomba Plus 405 2in1 Vacuum & Mop Robot with AutoWash Dock",
    amazonUrl: "https://www.amazon.com/dp/B0DPNKVFVW?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41ls+Hyby5L._SL500_.jpg",
    price: "$299.99",
    rating: "Popular pick",
    reviews: "Strong buyer feedback",
    specs: ["2in1 vacuum & mop", "AutoWash Dock", "Dual spinning mop pads", "Smart & fast mapping"],
    description:
      "The Roomba Plus 405 brings the AutoWash Dock and dual spinning mop pads down to a noticeably lower price than the flagship 505 Combo, while keeping smart, fast mapping for room-by-room cleaning. It is a genuine 2-in-1, not a vacuum with a bolted-on water tank, so mopping performance is closer to the higher-tier models than to a basic combo unit.\n\nFor buyers who want mopping and an automatically washed dock but do not need every feature of the top-tier model, this is the middle ground worth comparing first.",
    bestFor: "Buyers who want real vacuum-and-mop combo functionality without paying flagship pricing.",
    pros: [
      "AutoWash Dock at a meaningfully lower price than the top-tier combo",
      "Dual spinning mop pads for real mopping, not a token feature",
      "Smart and fast mapping",
    ],
    cons: [
      "Not as fully featured as the Plus 505 Combo",
      "Still a step up in price from vacuum-only models",
    ],
  },
  {
    id: "roomba-205-dustcompactor",
    rank: 4,
    badge: "Best for No-Dock Setup",
    name: "iRobot Roomba 205 DustCompactor Vac Robot Vacuum",
    amazonUrl: "https://www.amazon.com/dp/B0DX6N28N7?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41EmuKbddIL._SL500_.jpg",
    price: "$149",
    rating: "Frequently recommended",
    reviews: "Widely purchased",
    specs: ["Compacts dirt internally", "No emptying for 60 days", "No dock needed", "Bagless"],
    description:
      "The Roomba 205 DustCompactor takes a different approach than every other model here: instead of relying on a self-emptying dock, it compacts collected dirt inside the robot itself, going up to 60 days between manual bin emptying. That means no bulky dock taking up floor or counter space, just a compact charging base.\n\nIt is bagless and vacuum-only, so buyers who want mopping should look elsewhere in this lineup, but for anyone who does not want a large dock in their living space, this is the most space-efficient option we researched.",
    bestFor: "Buyers who want long stretches between emptying but do not want a bulky AutoEmpty dock.",
    pros: [
      "No large dock required, just a compact charging base",
      "Up to 60 days between manual emptying",
      "Bagless, so no ongoing bag costs",
    ],
    cons: [
      "Vacuum-only, no mopping function",
      "Still requires manual emptying eventually, unlike AutoEmpty dock models",
    ],
  },
  {
    id: "roomba-max-705",
    rank: 5,
    badge: "Best for Pet Hair",
    name: "iRobot Roomba Max 705 Robot Vacuum with AutoEmpty Dock",
    amazonUrl: "https://www.amazon.com/dp/B0DWG3C3ZF?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41TdR89fYFL._SL500_.jpg",
    price: "$499",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["AutoEmpty dock", "Powerful suction", "Dual rubber anti-tangle brushes", "LiDAR navigation"],
    description:
      "The Roomba Max 705 is a vacuum-only model built around powerful suction and dual rubber anti-tangle brushes, an iRobot design choice that has been a long-standing difference from competitors that use bristle brushes. Rubber brushes are worth checking against bristle-brush alternatives specifically for households with pets, since hair is less likely to wrap tightly around them over repeated cleaning cycles.\n\nIt pairs that with an AutoEmpty dock and LiDAR navigation, so it is a strong pick for anyone who wants top-tier suction and hands-off emptying without needing mopping.",
    bestFor: "Pet owners who want strong suction and low-maintenance brushes without needing a mopping function.",
    pros: [
      "Dual rubber anti-tangle brushes, a long-standing Roomba design advantage for pet hair",
      "AutoEmpty dock for hands-off bin emptying",
      "Powerful suction with LiDAR navigation",
    ],
    cons: [
      "Vacuum-only, matches the flagship 505 Combo in price without mopping",
      "AutoEmpty dock has a larger footprint than a basic charging base",
    ],
  },
  {
    id: "roomba-105-combo",
    rank: 6,
    badge: "Best Budget Combo Pick",
    name: "iRobot Roomba 105 Combo Robot Vacuum & Mop",
    amazonUrl: "https://www.amazon.com/dp/B0DWG2BB7X?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41usVjYNVfL._SL500_.jpg",
    price: "$199.99",
    rating: "Popular pick",
    reviews: "Strong buyer feedback",
    specs: ["Vacuum & mop combo", "LiDAR navigation", "Avoids mopping carpets", "Self-charging"],
    description:
      "The Roomba 105 Combo adds basic mopping to the entry-level 105 platform, with LiDAR navigation smart enough to detect carpet and avoid mopping it, so it will not drag a wet pad across rugs. It does not include an AutoWash Dock, so the mop pad needs to be rinsed and reattached by hand rather than washed automatically.\n\nIt is the least expensive combo model we researched, making it a reasonable entry point for buyers who want occasional light mopping on hard floors without paying for an automated washing dock.",
    bestFor: "Buyers who want basic mopping on hard floors at the lowest combo price, without an automated dock.",
    pros: [
      "Lowest price of any combo model in this comparison",
      "Smart enough to avoid mopping carpeted areas",
      "LiDAR navigation and self-charging",
    ],
    cons: [
      "No AutoWash Dock, mop pad must be cleaned manually",
      "Mopping capability is more basic than the Plus 405 or 505 Combo",
    ],
  },
  {
    id: "roomba-105x",
    rank: 7,
    badge: "Best Vacuum-Only Upgrade Pick",
    name: "iRobot Roomba 105X Robot Vacuum",
    amazonUrl: "https://www.amazon.com/dp/B0GSH1XG56?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41LzT6pJ0-L._SL500_.jpg",
    price: "$239.99",
    rating: "Frequently recommended",
    reviews: "Widely purchased",
    specs: ["Smart LiDAR mapping", "70X power-lifting suction", "Custom room cleaning", "App & voice control"],
    description:
      "The Roomba 105X sits above the base 105 Vac with stronger power-lifting suction and custom room cleaning through the iRobot Home app, which handles maps, no-go zones, and scheduling. Some of these functions, like setting a no-go zone or a room-specific schedule, are only accessible through the app rather than buttons on the robot itself, which is worth confirming if you would rather not rely on a phone for daily control.\n\nIt supports app and voice control on top of that, making it a solid step-up pick for buyers who want more customization than the base 105 Vac offers but still do not need mopping.",
    bestFor: "Buyers who want custom room-by-room cleaning and app control without a mopping function.",
    pros: [
      "Stronger suction than the base 105 Vac",
      "Custom room cleaning and voice control",
      "Smart LiDAR mapping for more precise navigation",
    ],
    cons: [
      "Some features require the iRobot Home app rather than robot controls",
      "Still vacuum-only, no mopping",
    ],
  },
  {
    id: "roomba-415x-combo",
    rank: 8,
    badge: "Best Premium Pick",
    name: "iRobot Roomba 415X Robot Vacuum & Mop Combo",
    amazonUrl: "https://www.amazon.com/dp/B0GT6BYB85?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41G2dm9C4bL._SL500_.jpg",
    price: "$759.99",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["2.3X suction", "90-day self-emptying", "Self-cleaning & hot dry dock", "Smart obstacle avoidance"],
    description:
      "The Roomba 415X is the most expensive model we researched and it is built to justify that with 2.3X suction, a multifunction dock that self-empties for up to 90 days, and self-cleaning plus hot drying for the mop pads. Smart obstacle avoidance adds another layer of navigation intelligence for homes with pet toys, cables, or other floor clutter.\n\nThis is the model for buyers who want the least hands-on ownership possible and are willing to pay a significant premium over the already well-equipped 505 Combo for longer stretches between manual maintenance.",
    bestFor: "Buyers who want the longest stretches between manual maintenance and are willing to pay a premium for it.",
    pros: [
      "Up to 90 days of self-emptying, longer than other dock models here",
      "Self-cleaning and hot-dry mop pad dock",
      "2.3X suction and smart obstacle avoidance",
    ],
    cons: [
      "Highest price in this comparison by a wide margin",
      "Premium dock features add significant footprint",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Vacuum-only vs combo mopping",
    explanation:
      "The current lineup mixes vacuum-only models like the 105 Vac and 205 DustCompactor with 2-in-1 combo and mop-and-dry systems like the 105 Combo, Plus 405, Plus 505, and 415X. Decide whether you actually want mopping handled before comparing prices, since a vacuum-only model can cost far less for the same suction tier.",
  },
  {
    criterion: "Dock type: AutoEmpty vs AutoWash vs no dock",
    explanation:
      "An AutoEmpty dock only empties the bin, an AutoWash Dock also washes and heat-dries mop pads, and models like the 205 DustCompactor skip a bulky dock entirely by compacting dirt internally. Match dock type to how much floor or counter space you can give up and how hands-off you want maintenance to be.",
  },
  {
    criterion: "App dependence for scheduling and mapping",
    explanation:
      "The iRobot Home app handles maps, no-go zones, and scheduling, and some functions are only available through the app rather than buttons on the robot. If you would rather not rely on a phone for daily control, confirm which features are app-only before buying.",
  },
  {
    criterion: "Pet hair handling and brush design",
    explanation:
      "Dual rubber anti-tangle brushes have long been a Roomba design difference worth checking against bristle-brush competitors, since hair is less likely to wrap tightly around rubber brushes over repeated use. This matters more for pet owners than the headline suction number alone.",
  },
  {
    criterion: "Price tier jump between entry and premium models",
    explanation:
      "There is a wide gap between the roughly $150 entry-level vacuum-only models and the $500 to $760 combo and multifunction dock models in this lineup. Be clear on which specific features (mopping, AutoWash, longer self-emptying intervals) justify that jump for your household before paying for the top tier.",
  },
  {
    criterion: "Carpet detection for mopping models",
    explanation:
      "Combo models need to reliably detect carpet and avoid mopping it, since dragging a wet pad across a rug is a real failure mode. Check that any mopping model you consider specifically advertises carpet avoidance rather than assuming all combo units handle mixed flooring the same way.",
  },
];

export const howWeEvaluated = [
  {
    title: "Vacuum-only vs combo feature comparison",
    description:
      "We compared each model's core function, vacuum-only versus 2-in-1 versus multifunction mop-and-dry system, against its price to see which tier actually delivers meaningful new capability rather than a marginal upgrade.",
  },
  {
    title: "Dock and maintenance interval research",
    description:
      "We researched what each dock actually does, from a basic charging base to AutoEmpty to a full AutoWash and hot-dry system, and how long each model can go between manual maintenance.",
  },
  {
    title: "Navigation and app control research",
    description:
      "We looked at which models use LiDAR mapping, smart obstacle avoidance, or custom room cleaning, and noted where key features are only accessible through the iRobot Home app rather than the robot itself.",
  },
  {
    title: "Pet hair and brush design comparison",
    description:
      "We compared rubber anti-tangle brush designs against typical bristle-brush competitors as a factor for pet owners specifically, since brush design affects long-term maintenance more than headline suction figures.",
  },
  {
    title: "Price tier and value positioning",
    description:
      "We grouped the eight models by price tier to identify which one represents the best value within budget, mid-range, and premium segments rather than ranking purely on price or purely on features.",
  },
];

export const howToChoose = [
  {
    subheading: "By Floor Type Needs",
    intro: "Decide whether mopping matters before comparing anything else, since it is the biggest functional split in the current lineup.",
    table: {
      headers: ["Need", "Recommended Pick"],
      rows: [
        ["Vacuuming only, no mopping needed", "Roomba 105 Vac or Roomba Max 705"],
        ["Light mopping on hard floors, budget-friendly", "Roomba 105 Combo"],
        ["Real 2-in-1 vacuum and mop with washed pads", "Roomba Plus 405 2in1"],
        ["Full vacuum, mop, wash, and dry automation", "Roomba Plus 505 Combo or Roomba 415X"],
      ],
    },
  },
  {
    subheading: "By Budget Tier",
    intro: "The lineup spans roughly $149 to $760, and the jump between tiers buys specific features, not just marginally better versions of the same robot.",
    table: {
      headers: ["Budget", "Recommended Pick"],
      rows: [
        ["Under $200", "Roomba 205 DustCompactor or Roomba 105 Vac"],
        ["$200 to $350", "Roomba 105X or Roomba Plus 405 2in1"],
        ["$450 and up", "Roomba Plus 505 Combo or Roomba Max 705"],
        ["Premium, longest maintenance intervals", "Roomba 415X Combo"],
      ],
    },
  },
  {
    subheading: "Dock Type: What You're Actually Getting",
    cards: [
      {
        label: "No dock or compact base",
        text: "The Roomba 205 DustCompactor compacts dirt internally for up to 60 days, so it skips a bulky dock entirely, best for buyers with limited dock space.",
      },
      {
        label: "AutoEmpty dock",
        text: "The Roomba Max 705 empties its own bin automatically but does not wash anything, a middle ground for vacuum-only households.",
      },
      {
        label: "AutoWash Dock",
        text: "The Plus 405 and Plus 505 Combo wash and heat-dry mop pads automatically, the most hands-off option for combo owners.",
      },
    ],
    note: "Bigger docks mean less manual maintenance but more floor and counter space required, so weigh that tradeoff before choosing a premium dock model.",
  },
  {
    subheading: "Pet Hair and Multi-Pet Households",
    intro: "Brush design and suction matter more than mopping for most pet owners.",
    cards: [
      {
        label: "Dual rubber anti-tangle brushes",
        text: "The Roomba Max 705 uses this long-standing Roomba brush design, worth comparing against bristle-brush competitors if pet hair tangling is a recurring problem.",
      },
      {
        label: "Stronger suction, still vacuum-only",
        text: "The Roomba 105X adds power-lifting suction and custom room cleaning without the added complexity of a mopping mechanism.",
      },
    ],
  },
  {
    subheading: "How Much You'll Rely on the App",
    intro: "The iRobot Home app handles maps, no-go zones, and scheduling, and on some models certain functions are app-only.",
    table: {
      headers: ["Preference", "Recommended Pick"],
      rows: [
        ["Comfortable managing everything through a phone app", "Roomba 105X or Roomba Plus 505 Combo"],
        ["Wants the simplest possible setup with minimal app reliance", "Roomba 105 Vac"],
      ],
    },
    note: "Confirm which specific features are app-only versus available on the robot's own buttons if avoiding phone dependence matters to you.",
  },
];

export const faq = [
  {
    q: "Do all current Roomba models mop, or just vacuum?",
    a: "Both. The current lineup mixes vacuum-only models like the 105 Vac, 205 DustCompactor, Max 705, and 105X with combo models that vacuum and mop, like the 105 Combo, Plus 405, Plus 505, and 415X. Decide whether you want mopping handled before comparing models, since vacuum-only options are generally less expensive for similar suction.",
  },
  {
    q: "What is the difference between an AutoEmpty dock and an AutoWash Dock?",
    a: "An AutoEmpty dock only empties the robot's dirt bin automatically. An AutoWash Dock, used on the Plus 405 and Plus 505 Combo, also washes and heat-dries the mop pads between cleaning runs, so you are not rinsing pads by hand.",
  },
  {
    q: "Are dual rubber brushes better than bristle brushes for pet hair?",
    a: "Dual rubber anti-tangle brushes have been a long-standing Roomba design choice, and they are generally less prone to hair wrapping tightly around them compared to bristle brushes over repeated cleaning cycles. If pet hair tangling has been a problem with a previous vacuum, it is worth checking rubber-brush models like the Max 705 against bristle-brush competitors specifically on this point.",
  },
  {
    q: "Do I need the iRobot Home app to use these robots, or can I control everything from the robot itself?",
    a: "The app handles maps, no-go zones, and scheduling, and on several models some of these functions are only available through the app rather than buttons on the robot. If you would prefer to avoid relying on a phone, confirm which specific features are app-only on the model you are considering before buying.",
  },
  {
    q: "Will a mopping model ruin my carpet by mopping it?",
    a: "The combo models we researched, including the 105 Combo, are designed to detect carpet through their navigation system and avoid mopping it, sticking to hard floors for the wet pass. Still, it is worth confirming carpet avoidance is specifically advertised on any combo model before relying on it in a mixed-flooring home.",
  },
  {
    q: "Is the most expensive model, the 415X, worth it over the Plus 505 Combo?",
    a: "The 415X adds stronger 2.3X suction, up to 90 days of self-emptying instead of shorter intervals, and additional self-cleaning dock features, for a significant price premium over the already well-equipped Plus 505 Combo. It is worth the extra cost mainly for buyers who specifically want the longest possible stretches between any manual maintenance.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
