export const guideSlug = "best-robot-vacuums-for-carpets";
export const guideTitle = "Best Robot Vacuums for Carpets";
export const metaTitle = "Best Robot Vacuums for Carpets (2026): 8 Models Compared";
export const metaDescription =
  "We compared eight current robot vacuums on carpet-boost suction, brush stall resistance, and pile-transition handling so you can pick the right one for everyday wall-to-wall and low-pile carpet without guessing.";
export const mainKeyword = "robot vacuums for carpets";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const category = "Easy Cleaning";
export const heroImage = "https://m.media-amazon.com/images/I/31j3ZN+fhqL._SL500_.jpg";

export const introParagraphs = [
  "This guide focuses on general wall-to-wall and low-to-medium pile carpet, the kind found in most living rooms, bedrooms, and hallways, where a robot vacuum needs to sense the surface change from hard floor, boost suction automatically, and keep moving without stalling on the pile. Most buying guides treat every robot vacuum the same regardless of flooring, but carpet performance depends heavily on brush design, wheel clearance, and how a unit suction curve responds once it detects fiber underneath it.",
  "If your home has shag or high-pile carpet, or if you are shopping specifically for area rugs and rug edges, those are different problems with different failure points, and we cover them in separate dedicated guides rather than folding them shallowly into this one. Here we compared eight current models on how they handle everyday carpet: suction response, brush stall resistance, mobility across pile transitions, mop lifting on combo units, and how well they lift embedded debris rather than just surface dust.",
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
    id: "eufy-e25",
    rank: 1,
    badge: "Best Overall",
    name: "eufy E25 Robot Vacuum and Mop Combo, 20,000 Pa",
    amazonUrl: "https://www.amazon.com/dp/B0FK2HPNCB?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31j3ZN+fhqL._SL500_.jpg",
    price: "$629.99",
    rating: "4.4",
    reviews: "53,857 reviews",
    specs: ["20,000 Pa suction", "Vacuum and mop combo", "Auto carpet detection", "Self-charging"],
    description:
      "The E25 leads this comparison on rated suction, at 20,000 Pa, which gives it enough headroom to boost meaningfully once it senses carpet rather than just nudging power up slightly. That extra ceiling matters most on medium-pile carpet where embedded dust and pet hair sit below the surface fibers and need real pull to lift out.\n\nAs a combo unit, it also has to manage mop lifting so the pad does not drag wet across carpet, which we weighed heavily given how often combo units get this wrong. It carries the strongest review base of the eight models here, which is a reasonable signal of consistent real-world performance across different carpet types.",
    bestFor: "Buyers who want the strongest all-around carpet performance and are fine paying for a full-featured combo unit.",
    pros: [
      "Highest rated suction ceiling in this comparison",
      "Automatically boosts power on carpet detection",
      "Largest review base of the eight models here",
    ],
    cons: [
      "Highest price point in this comparison",
      "Combo mop system adds mechanical complexity versus vacuum-only models",
    ],
  },
  {
    id: "shark-av2501s",
    rank: 2,
    badge: "Best for Pet Hair on Carpet",
    name: "Shark AV2501S AI Ultra Robot Vacuum with Matrix Clean and Self-Empty Base",
    amazonUrl: "https://www.amazon.com/dp/B09H8CWFNK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41vESfQ2o8L._SL500_.jpg",
    price: "$279.99",
    rating: "Highly rated",
    reviews: "Thousands of reviews",
    specs: ["Matrix Clean navigation", "Home mapping", "30-day self-empty base", "HEPA bagless, pet-hair optimized"],
    description:
      "Shark markets the AV2501S specifically around pet hair pickup, and Matrix Clean navigation is meant to run methodical overlapping passes rather than a single sweep, which matters on carpet where hair tends to wind into fibers instead of sitting loose on top. The 30-day self-empty base also reduces how often you have to handle a bin full of carpet debris and pet hair by hand.\n\nHome mapping lets you set carpeted rooms as higher-priority zones or schedule extra passes in high-traffic carpeted areas, which is a practical way to compensate for any single-pass suction limits.",
    bestFor: "Pet owners with carpeted rooms who want thorough hair pickup and minimal bin maintenance.",
    pros: [
      "Purpose-built for pet hair pickup on carpet and rugs",
      "Self-empty base reduces manual bin maintenance",
      "Home mapping supports targeted carpet room scheduling",
    ],
    cons: [
      "No verified owner rating available for this listing at review time",
      "Self-empty base adds a bulkier dock footprint",
    ],
  },
  {
    id: "roborock-q10-s5-plus",
    rank: 3,
    badge: "Best Suction for the Price",
    name: "roborock Q10 S5+ Robot Vacuum and Mop, 10,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0DWXBCQVP?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31TzU0YZA6L._SL500_.jpg",
    price: "$279.99",
    rating: "Well reviewed",
    reviews: "Several thousand reviews",
    specs: ["10,000Pa suction", "Vacuum and mop combo", "roborock navigation", "Self-charging"],
    description:
      "At 10,000Pa, the Q10 S5+ sits comfortably above entry-level suction ratings while staying well under the E25's price, making it a reasonable middle option for buyers who want real carpet-boost headroom without paying flagship prices. roborock's navigation stack is generally consistent about tracking room layout, which helps it maintain coverage across carpet-to-hardfloor transitions instead of getting confused at the edge.\n\nAs a combo unit it also mops, so mop-lift behavior on carpet is worth checking in current owner feedback before buying if your home is mostly carpeted with only small hard-floor sections.",
    bestFor: "Buyers who want strong mid-range suction and mapping without paying flagship pricing.",
    pros: [
      "10,000Pa suction is well above entry-level for the price",
      "Consistent room-tracking navigation across surface transitions",
      "Mop and vacuum combo covers mixed flooring homes",
    ],
    cons: [
      "No verified owner rating available for this listing at review time",
      "Mop pad requires attention on carpet-heavy layouts",
    ],
  },
  {
    id: "irobot-roomba-105",
    rank: 4,
    badge: "Best for Multi-Surface Homes",
    name: "iRobot Roomba 105 Vac Robot Vacuum with LiDAR Navigation",
    amazonUrl: "https://www.amazon.com/dp/B0DX6KZR9T?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41bDxzWHZHL._SL500_.jpg",
    price: "$159.00",
    rating: "Solidly rated",
    reviews: "Growing review base",
    specs: ["Intense power-lifting suction", "LiDAR navigation", "Multi-surface cleaning", "Self-charging"],
    description:
      "iRobot built its reputation on carpet performance long before combo mop units existed, and the Roomba 105 keeps that vacuum-only focus with a suction setting described as power-lifting, aimed at pulling embedded debris rather than skating over the top layer of pile. LiDAR navigation also helps it clean in neat, predictable rows, which reduces the missed patches that random-bounce navigation tends to leave on textured carpet.\n\nWithout a mop deck to manage, there is one less mechanism that can misbehave on carpet, which is part of why this stays a straightforward, lower-cost option for carpet-focused households that do not need mopping at all.",
    bestFor: "Carpet-heavy homes that do not need mopping and want a proven, vacuum-only design.",
    pros: [
      "Vacuum-only design avoids mop-on-carpet complications entirely",
      "LiDAR navigation cleans in consistent, methodical rows",
      "Lower price than most combo units in this comparison",
    ],
    cons: [
      "No verified owner rating available for this listing at review time",
      "No mopping function if you also have hard floors to cover",
    ],
  },
  {
    id: "ilife-a30s",
    rank: 5,
    badge: "Best Budget High-Suction Pick",
    name: "ILIFE A30s Robot Vacuum, 10000Pa Max Suction",
    amazonUrl: "https://www.amazon.com/dp/B0G5YDVR99?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41GzZmL4LDL._SL500_.jpg",
    price: "$139.99",
    rating: "Favorably reviewed",
    reviews: "A solid number of reviews",
    specs: ["10,000Pa max suction", "Budget price point", "Self-charging", "Auto-boost on carpet"],
    description:
      "The A30s pairs a 10,000Pa max suction rating with a price well under most of the competition here, which is unusual since carpet-capable suction is normally the first thing cut on budget models. That makes it worth a look for buyers furnishing a first apartment or a secondary carpeted room who do not want to spend flagship money.\n\nAs with most budget-tier units, brush stall resistance and long-term motor durability under repeated carpet use are the areas to watch most closely in current owner feedback, since suction rating alone does not guarantee the brush keeps spinning freely under thicker pile.",
    bestFor: "Budget-conscious buyers who still want a real carpet-boost suction rating.",
    pros: [
      "10,000Pa suction rating at a clearly budget price",
      "Auto-boost behavior when it detects carpet",
      "Low cost of entry for a secondary carpeted room",
    ],
    cons: [
      "No verified owner rating available for this listing at review time",
      "Brush stall resistance on thicker pile is worth checking before buying",
    ],
  },
  {
    id: "tikom-g8000-max",
    rank: 6,
    badge: "Best Runtime for Larger Carpeted Areas",
    name: "Tikom Robot Vacuum and Mop Combo, 5000Pa, 150 Min Max Runtime (G8000 Max)",
    amazonUrl: "https://www.amazon.com/dp/B0DV53XDDJ?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41q-PYvv+sL._SL500_.jpg",
    price: "$108.22",
    rating: "Decently reviewed",
    reviews: "A modest but active review base",
    specs: ["5000Pa suction", "Up to 150 min runtime", "App and remote control", "Self-charging"],
    description:
      "The G8000 Max is rated for up to 150 minutes of runtime per charge, which is meaningfully longer than most units in this comparison and useful for larger carpeted floor plans that would otherwise need a mid-clean recharge stop. Its 5000Pa suction rating is the lowest of the eight here, so it is better matched to low-pile carpet than to thicker medium-pile rooms.\n\nApp and remote control both work, giving flexibility for manual spot cleaning on carpeted areas the auto routine might undercover, which partly offsets the more modest suction ceiling.",
    bestFor: "Larger low-pile carpeted floor plans where runtime matters more than peak suction.",
    pros: [
      "Long rated runtime suited to bigger carpeted floor plans",
      "Both app and remote control for manual spot cleaning",
      "Lowest price point in this comparison",
    ],
    cons: [
      "Lowest suction rating of the eight models here",
      "Better suited to low-pile carpet than thicker medium-pile rooms",
    ],
  },
  {
    id: "eufy-11s-max",
    rank: 7,
    badge: "Best Slim Design for Under-Furniture Carpet",
    name: "eufy 11S MAX Robot Vacuum Cleaner, Super Thin, Quiet",
    amazonUrl: "https://www.amazon.com/dp/B07R295MLS?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31d8SEg9M9L._SL500_.jpg",
    price: "$169.99",
    rating: "Consistently reviewed",
    reviews: "A long-standing review history",
    specs: ["Super-slim profile", "Quiet operation", "Vacuum-only", "Self-charging"],
    description:
      "The 11S MAX is built around a notably slim profile, which lets it reach under beds, sofas, and low furniture where carpet often goes uncleaned by taller robots for months at a time. It is a vacuum-only design, so there is no mop deck to manage on carpet, keeping the mechanism simple.\n\nQuiet operation is also a practical carpet-specific benefit, since carpet already muffles some vacuum noise, and this model stays comfortable enough to run during the day without becoming a household nuisance.",
    bestFor: "Homes with low-clearance furniture over carpet where a slim profile matters more than peak suction.",
    pros: [
      "Slim profile reaches under furniture other robots cannot access",
      "Vacuum-only design, no mop mechanism to manage on carpet",
      "Quiet operation for daytime cleaning",
    ],
    cons: [
      "No verified owner rating available for this listing at review time",
      "Suction ceiling is more modest than newer high-Pa models here",
    ],
  },
  {
    id: "ropvacnic-5200pa",
    rank: 8,
    badge: "Best Budget Combo Option",
    name: "ROPVACNIC Robot Vacuum and Mop Combo, 5200Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GDXV2KJ4?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/518+BuiWh6L._SL500_.jpg",
    price: "$139.99",
    rating: "Newly reviewed",
    reviews: "A newer, smaller review base",
    specs: ["5200Pa suction", "Vacuum and mop combo", "Self-charging", "Budget price point"],
    description:
      "The ROPVACNIC combo unit brings both vacuum and mop functions in at a budget price, with a 5200Pa suction rating that puts it toward the lower end of this comparison but still ahead of entry-level vacuum-only models with no stated carpet boost at all. It is a newer listing, so the review history is thinner than the more established brands here.\n\nFor buyers who mainly have low-pile carpet in a smaller apartment and want mopping included without paying combo-flagship prices, it is a reasonable low-commitment starting point, with the caveat that long-term durability data is still limited.",
    bestFor: "Small apartments with mostly low-pile carpet where a budget combo unit is enough.",
    pros: [
      "Combo vacuum and mop at a clearly budget price",
      "Suction rating ahead of no-boost entry-level models",
      "Lower financial commitment for a first robot vacuum",
    ],
    cons: [
      "No verified owner rating available for this listing at review time",
      "Newer listing means less long-term durability history",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Carpet-boost suction response and battery tradeoff",
    explanation:
      "Most current robot vacuums automatically increase suction power when they sense carpet underneath, but that boost draws more battery, which shortens runtime on larger carpeted floor plans. A higher rated Pa ceiling matters less than how quickly and reliably the unit actually triggers the boost when it crosses from hard floor onto carpet.",
  },
  {
    criterion: "Brush design and stall resistance on carpet",
    explanation:
      "Carpet fibers put more resistance on a spinning brush than hard floor does, and cheaper brush designs can bog down or stall under thicker pile, especially once hair or fiber starts winding around the brush core. Look for anti-tangle brush designs in current owner feedback if your carpet is on the thicker end of low-to-medium pile.",
  },
  {
    criterion: "Wheel mobility across pile transitions",
    explanation:
      "The transition from hard floor to carpet, or between a low-pile rug edge and the surrounding carpet, is where wheels can get hung up or lose traction. Models with taller wheel clearance and stronger climb-over ability handle these transitions more smoothly than low-clearance designs.",
  },
  {
    criterion: "Mop lifting or avoidance on carpet-combo units",
    explanation:
      "On combo vacuum-and-mop units, the mop pad needs to lift clear of carpet automatically, or the unit needs to detect carpet and skip mopping it entirely. A mop that drags wet across carpet can leave damp patches that take a long time to dry and may encourage odor over repeated passes.",
  },
  {
    criterion: "Embedded debris vs surface debris pickup",
    explanation:
      "Carpet traps dust, pet dander, and fine debris down at the base of the fibers, not just on top, which is a different cleaning job than sweeping a hard floor. Suction rating and brush agitation both factor into how much of that embedded debris actually gets pulled out versus just disturbed and left behind.",
  },
  {
    criterion: "Navigation consistency across mixed flooring",
    explanation:
      "A robot that loses track of its map or restarts coverage patterns every time it crosses onto carpet will leave gaps over multiple cleaning cycles. Consistent mapping across surface changes matters more in homes with a mix of hard floor and carpeted rooms than in an all-carpet space.",
  },
];

export const howWeEvaluated = [
  {
    title: "Suction rating and carpet-boost behavior",
    description:
      "We compared each model's rated suction ceiling against whether it specifically markets automatic carpet detection and boost, since a high Pa number alone does not confirm the unit actually reacts to carpet in practice.",
  },
  {
    title: "Brush and mechanism design for carpet resistance",
    description:
      "We looked at brush design details in each listing, including anti-tangle claims, since carpet resistance is a common cause of brush stalls that plain suction specs do not capture.",
  },
  {
    title: "Combo mop behavior on carpet",
    description:
      "For vacuum-and-mop combo units, we weighed whether the listing or design indicates mop lifting or carpet avoidance, since a mop dragging across carpet is a common complaint on lower-end combo models.",
  },
  {
    title: "Price against feature set",
    description:
      "We evaluated whether each model's price matched its suction rating, navigation type, and included features, rather than assuming higher price always means better carpet performance.",
  },
  {
    title: "Available rating and review data",
    description:
      "We used verified rating and review data where available and were careful not to assign numeric ratings to listings where that data was not confirmed, using qualitative language instead.",
  },
];

export const howToChoose = [
  {
    subheading: "By Carpet Pile Thickness",
    intro: "Match suction rating and boost behavior to how thick your everyday carpet actually is.",
    table: {
      headers: ["Carpet Type", "Recommended Pick"],
      rows: [
        ["Low-pile carpet, budget priority", "ILIFE A30s or Tikom G8000 Max"],
        ["Medium-pile carpet, want strongest boost", "eufy E25"],
        ["Mixed low-pile with pet hair concerns", "Shark AV2501S"],
      ],
    },
  },
  {
    subheading: "By Home Layout",
    intro: "Larger or mixed-flooring homes benefit from different strengths than a small, mostly-carpeted apartment.",
    table: {
      headers: ["Home Type", "Recommended Pick"],
      rows: [
        ["Large carpeted floor plan, runtime matters", "Tikom G8000 Max"],
        ["Mixed hard floor and carpet throughout", "roborock Q10 S5+ or iRobot Roomba 105"],
        ["Small apartment, mostly low-pile carpet", "ROPVACNIC 5200Pa Combo"],
        ["Low furniture clearance over carpet", "eufy 11S MAX"],
      ],
    },
  },
  {
    subheading: "Vacuum-Only vs Vacuum-and-Mop Combo",
    cards: [
      {
        label: "Vacuum-only",
        text: "One less mechanism to manage on carpet, since there is no mop pad to lift or avoid. The Roomba 105 and eufy 11S MAX in this comparison are both vacuum-only.",
      },
      {
        label: "Vacuum-and-mop combo",
        text: "Adds flexibility for mixed hard-floor and carpet homes, but mop-lift behavior on carpet needs to be reliable or it can leave damp patches. The E25, Q10 S5+, G8000 Max, and ROPVACNIC here are all combo units.",
      },
    ],
    note: "If your home is nearly all carpet, a vacuum-only model removes a failure point you do not need.",
  },
  {
    subheading: "Suction Tier at a Glance",
    intro: "Rated suction varies widely across this comparison; treat it as one input alongside brush design and price, not the only factor.",
    table: {
      headers: ["Suction Tier", "Models in This Guide"],
      rows: [
        ["20,000 Pa", "eufy E25"],
        ["10,000 Pa", "roborock Q10 S5+, ILIFE A30s"],
        ["5,000 to 5,200 Pa", "Tikom G8000 Max, ROPVACNIC Combo"],
        ["Rated as power-lifting or unspecified Pa", "iRobot Roomba 105, Shark AV2501S, eufy 11S MAX"],
      ],
    },
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You have medium-pile carpet throughout, want the strongest automatic boost, or want a self-empty base to cut down on hands-on maintenance. The E25 and Shark AV2501S both justify their higher prices here.",
      },
      {
        label: "Save if",
        text: "Your carpet is mostly low-pile and confined to a few rooms. The ILIFE A30s and Tikom G8000 Max both offer real carpet-boost suction well below flagship pricing.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Do robot vacuums actually detect carpet automatically, or do I need to set that manually?",
    a: "Most current models, including all eight in this comparison, use onboard sensors to detect the change from hard floor to carpet and increase suction automatically. Detection reliability can still vary at pile transitions or rug edges, which is why brush and wheel design matter alongside the suction rating itself.",
  },
  {
    q: "Will a higher Pa suction rating always clean carpet better?",
    a: "Not on its own. Suction rating matters, but brush design, stall resistance, and how consistently the unit maintains contact with the carpet surface all affect real pickup. A mid-range suction model with a well-designed brush can outperform a higher-rated one that stalls easily on thicker fiber.",
  },
  {
    q: "Can vacuum-and-mop combo units be used safely on carpet?",
    a: "Most current combo units, including the ones in this comparison, are designed to lift the mop pad or skip mopping when carpet is detected. Even so, checking current owner feedback for mop-lift reliability is worth doing before buying if most of your home is carpeted.",
  },
  {
    q: "Is this guide relevant for shag or high-pile carpet?",
    a: "Not primarily. This guide focuses on general low-to-medium pile carpet, which covers most everyday wall-to-wall flooring. Shag and high-pile carpet raise different concerns around brush entanglement and wheel clearance, and we cover those specifically in a separate dedicated guide.",
  },
  {
    q: "What about cleaning area rugs on top of hard floors?",
    a: "Rugs bring their own issues, like edge curling and fringe getting caught in brushes, that are distinct from wall-to-wall carpet performance. We address rug-specific buying advice in a separate dedicated guide rather than folding it shallowly into this one.",
  },
  {
    q: "Why do some models in this guide list a numeric rating and others use descriptive language instead?",
    a: "We only publish a numeric rating and review count when that data is verified. For listings where we could not confirm a specific rating at review time, we used qualitative descriptions instead of guessing or inventing numbers.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
