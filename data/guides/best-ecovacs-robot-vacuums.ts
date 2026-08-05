export const guideSlug = "best-ecovacs-robot-vacuums";
export const guideTitle = "Best Ecovacs Robot Vacuums";
export const metaTitle = "Best Ecovacs Robot Vacuums (2026): 8 DEEBOT Models Compared";
export const metaDescription =
  "We compared eight current DEEBOT models across the T, N, and X series on suction, dock maintenance, edge cleaning, and obstacle avoidance so you can pick the right tier without guessing.";
export const mainKeyword = "ecovacs robot vacuums";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Emlkhml3L._SL500_.jpg";

export const introParagraphs = [
  "Ecovacs sells the DEEBOT line across three overlapping series, N, T, and X, and within each series there are near-identical variants that mostly differ by suction number and dock accessory. Most comparisons list every SKU as if they were meaningfully different products, which makes the lineup harder to navigate rather than easier.",
  "We researched eight current, genuinely distinct DEEBOT models spanning entry-level mapping units up to flagship roller-mop Omni docks, and focused on the differences that change daily ownership: whether the dock only empties dust or also washes the mop with hot water, how the ZeroTangle brush generation handles pet hair, what TruEdge edge-cleaning claims actually cover, and whether obstacle avoidance relies on cameras, mapping accuracy, or both.",
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
    id: "ecovacs-deebot-t50-pro-omni",
    rank: 1,
    badge: "Best Overall",
    name: "ECOVACS DEEBOT T50 PRO Omni Robot Vacuum and Mop, 3.19in Ultra-Slim",
    amazonUrl: "https://www.amazon.com/dp/B0DSB92P1N?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41Emlkhml3L._SL500_.jpg",
    price: "$299",
    rating: "4.0",
    reviews: "2,311 reviews",
    specs: ["3.19in ultra-slim body", "Omni auto-empty and wash dock", "Under-furniture access", "ZeroTangle brush"],
    description:
      "The T50 PRO Omni pairs a 3.19-inch ultra-slim body with a full Omni dock that empties the dustbin and washes the mop pads, a combination that is unusual at this price since slim-profile models often skip the hot-water wash step to keep the dock compact. The thin body lets it reach under sofas and low bed frames that taller Omni-tier robots cannot enter.\n\nAmong the eight models we researched, it carries the only verified rating and review count, which we treat as a meaningful reliability signal rather than a marketing number. It balances suction, dock convenience, and physical reach better than the other T-series Omni variants at a similar price.",
    bestFor: "Buyers who want a full self-washing dock plus the ability to clean under low furniture.",
    pros: [
      "Verified rating backed by a real review count, unlike most current DEEBOT listings",
      "Ultra-slim body reaches under furniture that taller Omni docks cannot access",
      "Full auto-empty and hot-water mop wash in one dock",
    ],
    cons: [
      "Slim profile means a smaller dustbin than bulkier Omni models",
      "Dock still takes up meaningful floor space against a wall",
    ],
  },
  {
    id: "ecovacs-deebot-t90-pro-omni",
    rank: 2,
    badge: "Best High-Suction Pick",
    name: "ECOVACS DEEBOT T90 PRO Omni Robot Vacuum and Mop, 30000Pa Blast Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GJ5S4V78?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/417ujUArYIL._SL500_.jpg",
    price: "$599",
    rating: "Not yet independently rated",
    reviews: "Recently listed, review count still building",
    specs: ["30000Pa blast suction", "Omni auto-empty and wash dock", "Hot water mop washing", "Obstacle avoidance"],
    description:
      "The T90 PRO Omni sits near the top of the current lineup on paper suction, at 30000Pa versus the 15,000 to 20,000Pa range of the mid-tier T-series models. That extra suction matters most on thick carpet and for pet owners dealing with embedded hair rather than on bare floors, where lower-suction models already perform adequately.\n\nIt pairs that suction with the same category of Omni dock as the flagship X-series, handling both auto-empty and hot-water mop washing. Since it is a newer listing without an established review history, we would treat the suction spec as a reason to shortlist it rather than a guarantee of real-world performance until more owner feedback accumulates.",
    bestFor: "Homes with thick carpet or heavy pet hair that want the highest listed suction without paying flagship X-series pricing.",
    pros: [
      "Highest listed suction figure among the models we compared",
      "Full Omni dock with hot-water mop washing included",
    ],
    cons: [
      "No established review history yet to confirm the suction claim holds up over time",
      "Costs roughly double the entry Omni-tier T-series models",
    ],
  },
  {
    id: "ecovacs-deebot-x12-omnicyclone",
    rank: 3,
    badge: "Best Flagship Splurge",
    name: "ECOVACS DEEBOT X12 OMNICYCLONE Robot Vacuum, FocusJet Pre-Spray Roller Mop",
    amazonUrl: "https://www.amazon.com/dp/B0GL7K63NV?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41Olsh8JyIL._SL500_.jpg",
    price: "$1,499.99",
    rating: "Not yet independently rated",
    reviews: "Limited owner feedback so far",
    specs: ["FocusJet pre-spray roller mop", "OMNICYCLONE dock system", "X-series flagship tier", "Roller-mop hot water wash"],
    description:
      "The X12 OMNICYCLONE is the most expensive model we researched by a wide margin, and it uses a rotating roller mop with pre-spray jets rather than the flat pad mops on the T and N series. Roller mops generally scrub floors more thoroughly since the roller physically agitates the surface, but they also require more dock maintenance and a larger, more complex base station.\n\nAt this price it competes with dedicated wash-and-dry robot systems from other brands rather than with the rest of the DEEBOT lineup. It is a reasonable pick only for buyers who specifically want roller-mop cleaning and are not price sensitive within the Ecovacs ecosystem.",
    bestFor: "Buyers who specifically want roller-mop scrubbing and are not price sensitive.",
    pros: [
      "Roller mop with pre-spray jets scrubs more thoroughly than flat pad mops",
      "Flagship X-series build and dock system",
    ],
    cons: [
      "Substantially more expensive than every other model in this comparison",
      "Roller-mop dock is larger and requires more upkeep than pad-mop docks",
    ],
  },
  {
    id: "ecovacs-deebot-x9-pro-omni",
    rank: 4,
    badge: "Best Self-Washing Mop",
    name: "ECOVACS DEEBOT X9 PRO Omni Robot Vacuum, OZMO Roller Instant Self-Washing",
    amazonUrl: "https://www.amazon.com/dp/B0DZXFNVQ2?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41IS7uR-UxL._SL500_.jpg",
    price: "$449",
    rating: "Not yet independently rated",
    reviews: "Newer listing, review count still building",
    specs: ["OZMO instant roller self-washing", "Omni dock", "X-series build", "Auto obstacle avoidance"],
    description:
      "The X9 PRO Omni brings roller-mop technology down to a lower price than the X12, using OZMO's instant self-washing roller that rinses continuously as it cleans rather than only between rooms. That continuous rinse cycle is meant to reduce the streaking that flat pad mops can leave when they redistribute dirty water across a floor.\n\nIt is priced well above the T-series pad-mop models but well under the X12 flagship, making it the middle ground for buyers who want roller-mop performance without flagship pricing.",
    bestFor: "Buyers who want roller-mop self-washing without paying flagship X12 pricing.",
    pros: [
      "Continuous roller self-washing reduces streaking versus flat pad mops",
      "Positioned between mid-tier T-series pricing and the X12 flagship",
    ],
    cons: [
      "No established review history to confirm long-term roller reliability",
      "Still a meaningful step up in price from the T-series Omni models",
    ],
  },
  {
    id: "ecovacs-deebot-t50-max-pro-omni",
    rank: 5,
    badge: "Best Mid-Tier Omni",
    name: "ECOVACS DEEBOT T50 MAX PRO Omni Robot Vacuum, 18500Pa Blast Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GWQ2T7R4?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41trK6dX2gL._SL500_.jpg",
    price: "$349",
    rating: "Not yet independently rated",
    reviews: "Newer listing, review count still building",
    specs: ["18500Pa blast suction", "Omni auto-empty and wash dock", "MAX PRO tier build", "ZeroTangle brush"],
    description:
      "The T50 MAX PRO Omni slots between the entry T30C and the higher-suction T90 PRO Omni, with 18500Pa suction that splits the difference between the two. It keeps the full Omni dock functionality, so buyers get hot-water mop washing and auto-emptying without stepping up to T90 or X-series pricing.\n\nThis is the model to consider if the base T50 PRO Omni's slim-body tradeoffs (smaller dustbin, less under-furniture reach needed) do not matter to you and you would rather have a bit more suction headroom for carpet.",
    bestFor: "Buyers who want more suction than the entry Omni tier without paying for T90 or X-series pricing.",
    pros: [
      "Full Omni dock at a mid-range price point",
      "Suction figure sits comfortably above entry-tier T-series models",
    ],
    cons: [
      "No established review history yet",
      "Not as slim as the T50 PRO Omni for under-furniture reach",
    ],
  },
  {
    id: "ecovacs-deebot-t30c",
    rank: 6,
    badge: "Best Value Omni Pick",
    name: "ECOVACS DEEBOT T30C Robot Vacuum and Mop, 20,000Pa Suction, TruEdge Adaptive Edge Mopping",
    amazonUrl: "https://www.amazon.com/dp/B0DZXDXW9Y?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41N0iomYJyL._SL500_.jpg",
    price: "$299",
    rating: "Not yet independently rated",
    reviews: "Newer listing, review count still building",
    specs: ["20,000Pa suction", "TruEdge adaptive edge mopping", "ZeroTangle 2.0 brush", "Hot water washing, self-emptying"],
    description:
      "The T30C matches the T50 PRO Omni on price while offering a higher listed suction figure and TruEdge adaptive edge mopping, which extends an arm to scrub baseboards that a standard round mop pad cannot reach flush against a wall. It also uses ZeroTangle 2.0, the newer generation of Ecovacs's hair-tangle-resistant brush design.\n\nIt gives up the T50 PRO Omni's ultra-slim body, so it will not fit under as much low furniture, but for buyers who prioritize edge cleaning and suction over under-furniture reach, it is a reasonable alternative at the same price.",
    bestFor: "Buyers who prioritize baseboard and edge mopping over under-furniture reach.",
    pros: [
      "TruEdge adaptive mopping targets baseboards that round pads miss",
      "Newer ZeroTangle 2.0 brush generation",
      "Same price as the ultra-slim top pick with higher listed suction",
    ],
    cons: [
      "Taller body than the T50 PRO Omni, less under-furniture reach",
      "No established review history yet",
    ],
  },
  {
    id: "ecovacs-deebot-n20",
    rank: 7,
    badge: "Best Budget Pick",
    name: "ECOVACS DEEBOT N20 Robot Vacuum Cleaner and Mop, 8000Pa Strong Suction, ZeroTangle Brush",
    amazonUrl: "https://www.amazon.com/dp/B0DZN9SL4Q?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31v7Fi2GKeL._SL500_.jpg",
    price: "$168.44",
    rating: "Not yet independently rated",
    reviews: "Newer listing, review count still building",
    specs: ["8000Pa suction", "ZeroTangle brush", "300-minute runtime", "TrueMapping path planning"],
    description:
      "The N20 is the entry point into the current DEEBOT lineup and the only N-series model we researched, sitting well below the T-series on both price and suction. It still includes ZeroTangle brush technology and TrueMapping for room-by-room path planning, but it does not come with an Omni-style dock, so there is no auto-emptying or mop washing.\n\nAt roughly a third the price of the T50 PRO Omni, it is a reasonable entry option for a smaller home or a first robot vacuum, as long as you are comfortable emptying the dustbin and rinsing the mop pad by hand.",
    bestFor: "Smaller homes or first-time buyers who do not need an auto-empty or mop-wash dock.",
    pros: [
      "Lowest price among the models we compared",
      "Long listed runtime and mapped path planning at this price",
    ],
    cons: [
      "No Omni dock, so dustbin emptying and mop rinsing are manual",
      "Lower suction than every other model in this comparison",
    ],
  },
  {
    id: "ecovacs-deebot-t8",
    rank: 8,
    badge: "Best for Basic Laser Navigation",
    name: "Ecovacs Deebot T8 Robot Vacuum and Mop Cleaner, Precise Laser Navigation, Multi-Floor Mapping",
    amazonUrl: "https://www.amazon.com/dp/B08CSVDHTR?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41lUcSlWkFL._SL500_.jpg",
    price: "$179.99",
    rating: "Not yet independently rated",
    reviews: "Older listing, mixed and dated feedback",
    specs: ["Precise laser navigation", "Multi-floor mapping", "No-go and no-mop zones", "Auto-empty station compatible"],
    description:
      "The T8 is the oldest model in this comparison and relies on laser-based navigation rather than the camera and AI obstacle avoidance found on newer T and X-series models. Laser navigation maps a room accurately but is generally slower to react to small objects on the floor, like cords or pet toys, than camera-based systems.\n\nIt is compatible with an auto-empty station, but unlike the Omni-tier models here, that dock is a separate accessory rather than an included hot-water mop-washing base. It is best considered by buyers who specifically want an older, simpler mapping-only robot at a lower price rather than the newer obstacle-avoidance and dock features.",
    bestFor: "Buyers who want basic mapped cleaning at a lower price and do not need camera-based obstacle avoidance.",
    pros: [
      "Multi-floor mapping with no-go and no-mop zone customization",
      "Lower price than every current-generation Omni model here",
    ],
    cons: [
      "Laser-only navigation reacts more slowly to small floor objects than camera-based obstacle avoidance",
      "Auto-empty station is a separate accessory, not an included Omni dock",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "ZeroTangle brush generation",
    explanation:
      "Newer models like the T30C use ZeroTangle 2.0, an updated version of the hair-tangle-resistant brush found on older models like the N20. If pet hair or long hair tangling around the brush roll has been a problem with a previous robot vacuum, prioritize a model with the newer brush generation.",
  },
  {
    criterion: "Auto-empty-only dock vs hot-water Omni dock",
    explanation:
      "Some models only empty the dustbin automatically, while Omni-tier docks also wash the mop pad with hot water and dry it to prevent mildew smell. That difference changes weekly maintenance significantly since a wash-and-dry dock needs its own water tanks refilled and drained periodically, unlike a simple auto-empty base.",
  },
  {
    criterion: "TruEdge edge-cleaning claims",
    explanation:
      "TruEdge adaptive mopping extends an arm toward baseboards to scrub edges that a fixed round mop pad cannot reach flush against a wall. This matters most in kitchens and bathrooms with grout lines or baseboard buildup, less so in open rooms without much furniture-adjacent flooring.",
  },
  {
    criterion: "AIVI and 3D obstacle avoidance vs mapping accuracy",
    explanation:
      "Camera-based obstacle avoidance on newer models is generally better at reacting to small objects like cords or shoes in real time, while laser mapping on older models like the T8 is accurate for room layout but slower to react to unexpected items on the floor. Homes with kids or pets that leave objects on the floor benefit more from camera-based avoidance.",
  },
  {
    criterion: "App map editing and account requirements",
    explanation:
      "Every current DEEBOT model requires the Ecovacs app and an account to edit room maps, set no-go zones, or schedule cleaning by room. If you are not comfortable managing a connected-home app account, factor that into the purchase regardless of which model you choose.",
  },
  {
    criterion: "Suction figures vs real floor type",
    explanation:
      "Listed suction in Pascals varies widely across this lineup, from 8000Pa on the N20 up to 30000Pa on the T90 PRO Omni, but suction matters most on carpet and for embedded pet hair. On bare floors, even the lower-suction models in this comparison generally perform adequately.",
  },
];

export const howWeEvaluated = [
  {
    title: "Distinct models, not color or accessory variants",
    description:
      "We researched eight genuinely distinct current DEEBOT models across the N, T, and X series and excluded near-duplicate listings that differ only by minor suction figures or included accessories on an otherwise identical robot.",
  },
  {
    title: "Dock functionality and maintenance burden",
    description:
      "We compared whether each model's dock only empties the dustbin or also washes and dries the mop pad, since that difference changes the weekly maintenance routine significantly.",
  },
  {
    title: "Navigation and obstacle avoidance approach",
    description:
      "We compared camera-based AIVI obstacle avoidance on newer models against laser-only mapping on older models like the T8, since this affects how well each robot handles unexpected objects on the floor.",
  },
  {
    title: "Price positioning across the lineup",
    description:
      "We mapped each model's price against its dock tier and suction figure to identify where the lineup offers genuine value versus where buyers are mainly paying for the X-series roller-mop premium.",
  },
  {
    title: "Verified rating and review data where available",
    description:
      "We used verified rating and review data for the one model in this comparison with an established sales history, and used qualitative language rather than invented numbers for newer listings without that history yet.",
  },
];

export const howToChoose = [
  {
    subheading: "By Budget Tier",
    intro: "Match your budget to the dock tier you actually need rather than the highest suction number available.",
    table: {
      headers: ["Budget", "Recommended Pick"],
      rows: [
        ["Under $200, no dock needed", "DEEBOT N20"],
        ["Around $180, want laser mapping over camera avoidance", "DEEBOT T8"],
        ["Around $300, want a full Omni dock", "DEEBOT T50 PRO Omni or T30C"],
        ["$1,000+, want roller-mop scrubbing", "DEEBOT X9 PRO Omni or X12 OMNICYCLONE"],
      ],
    },
  },
  {
    subheading: "By Household Cleaning Priority",
    intro: "Different DEEBOT models are built around different priorities, not just different price points.",
    table: {
      headers: ["Priority", "Recommended Pick"],
      rows: [
        ["Under-furniture reach", "DEEBOT T50 PRO Omni"],
        ["Baseboard and edge mopping", "DEEBOT T30C"],
        ["Heavy carpet or pet hair suction", "DEEBOT T90 PRO Omni"],
        ["Streak-free roller mopping", "DEEBOT X9 PRO Omni"],
        ["Lowest price, simple mapping", "DEEBOT N20"],
      ],
    },
  },
  {
    subheading: "Pad Mop vs Roller Mop",
    cards: [
      {
        label: "Flat pad mop",
        text: "Used on the N20, T8, T30C, T50 PRO Omni, T50 MAX PRO Omni, and T90 PRO Omni. Simpler dock, lower price, adequate for light daily mopping and touch-ups.",
      },
      {
        label: "Rotating roller mop",
        text: "Used on the X9 PRO Omni and X12 OMNICYCLONE. More thorough scrubbing since the roller agitates the floor, but a larger dock and meaningfully higher price.",
      },
    ],
    note: "If daily mopping is mostly light maintenance rather than deep scrubbing, a pad-mop model covers most households at a lower price.",
  },
  {
    subheading: "Auto-Empty Only vs Full Omni Wash Dock",
    cards: [
      {
        label: "Auto-empty only",
        text: "The T8 supports an auto-empty station as a separate accessory but does not wash the mop pad. Lower maintenance complexity, but you still rinse the mop by hand.",
      },
      {
        label: "Full Omni dock",
        text: "The T50 PRO Omni, T30C, T50 MAX PRO Omni, T90 PRO Omni, X9 PRO Omni, and X12 all wash the mop with hot water in the dock, which reduces hand maintenance but adds water tank refills to your routine.",
      },
    ],
    note: "A full Omni dock trades hand-washing the mop for periodically refilling and draining the dock's own water tanks.",
  },
  {
    subheading: "New Listings Without Review History",
    intro: "Most of this lineup is recent enough that verified ratings are not yet available.",
    table: {
      headers: ["Model", "Rating Status"],
      rows: [
        ["DEEBOT T50 PRO Omni", "Verified 4.0 rating, 2,311 reviews"],
        ["All other models in this comparison", "Newer listings, no established review history yet"],
      ],
    },
    note: "We recommend checking current owner reviews on the product page directly before buying any model without an established rating history.",
  },
];

export const faq = [
  {
    q: "What is the actual difference between the T-series and X-series DEEBOT models?",
    a: "The X-series uses a rotating roller mop instead of the flat pad mop found on N and T-series models, along with a larger, more complex dock. Roller mops scrub more thoroughly but cost significantly more and require more dock maintenance.",
  },
  {
    q: "Do I need an Omni dock, or is auto-empty enough?",
    a: "An Omni dock adds hot-water mop washing and drying on top of auto-emptying, which reduces hand-washing the mop pad but adds refilling and draining water tanks periodically. If you do not mop often, an auto-empty-only model like the T8 may be sufficient.",
  },
  {
    q: "Is higher suction always better?",
    a: "Higher suction mainly helps on carpet and with embedded pet hair. On bare floors, even the lower-suction N20 in this comparison should perform adequately, so match suction to your flooring rather than defaulting to the highest number.",
  },
  {
    q: "Why does only one model in this comparison have a rating and review count?",
    a: "Several of the current DEEBOT listings are recent enough that they have not built up a meaningful review history yet. We only report a rating and review count where it is verified, and we describe newer listings qualitatively instead of inventing numbers.",
  },
  {
    q: "Does every DEEBOT model require the Ecovacs app?",
    a: "Yes. Room map editing, no-go zones, and room-specific scheduling all require the Ecovacs app and an account on every current model in this comparison, regardless of price tier.",
  },
  {
    q: "What does TruEdge adaptive mopping actually do?",
    a: "It extends a mop arm toward baseboards and edges that a fixed round mop pad cannot reach flush against a wall, which is most useful in kitchens and bathrooms with grout lines or baseboard buildup.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
