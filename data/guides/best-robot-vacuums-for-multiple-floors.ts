export const guideSlug = "best-robot-vacuums-for-multiple-floors";
export const guideTitle = "Best Robot Vacuums for Multiple Floors";
export const metaTitle = "Best Robot Vacuums for Multiple Floors (2026): 8 Models Compared";
export const metaDescription =
  "We compared eight current robot vacuums on multi-floor mapping, dock requirements, carrying weight, and recharge-and-resume behavior so you can pick the right one for a multi-level home.";
export const mainKeyword = "robot vacuums for multiple floors";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31TzU0YZA6L._SL500_.jpg";

export const introParagraphs = [
  "Owning a robot vacuum in a single-level home is a different experience than running one across two or three floors. The robot has to either remember multiple distinct layouts or get carried between levels, and most buying guides do not draw that distinction clearly.",
  "We evaluated eight current robot vacuum and mop models with an eye specifically on multi-floor use: how many maps each one can store, whether it needs a dock on every level or can be moved by hand, how heavy it is to carry along with any removable water tank, and how it handles recharging when it is working a floor without its own dock.",
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
    id: "roborock-q10-s5-plus",
    rank: 1,
    badge: "Best Overall",
    name: "roborock Q10 S5+ Robot Vacuum and Mop, 10,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0DWXBCQVP?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31TzU0YZA6L._SL500_.jpg",
    price: "$279.99",
    rating: "4.0",
    reviews: "20,160 reviews",
    specs: ["10,000Pa suction", "Vacuum and mop combo", "Multi-floor mapping", "Self-empty compatible dock"],
    description:
      "The Q10 S5+ pairs strong 10,000Pa suction with a combo vacuum and mop head, and it holds multiple saved maps so it can switch between floor layouts instead of remapping every time it starts a new level. That is the feature that matters most once a home has more than one floor in regular rotation.\n\nWith a self-empty compatible dock and consistent real-world ratings across a large review base, it is the model in this comparison we would point most buyers toward first, particularly if one floor will have a dock and the other will need the robot carried up or down periodically.",
    bestFor: "Buyers who want one strong all-around robot to rotate between two or more floors with reliable mapping.",
    pros: [
      "Multiple saved maps for distinct floor layouts",
      "Strong 10,000Pa suction plus mopping in one pass",
      "Largest, most consistent review base in this comparison",
    ],
    cons: [
      "Only one dock included, so a second floor without a dock relies on manual recharge and carrying",
      "Combo water tank adds weight when moving it between levels",
    ],
  },
  {
    id: "shark-av2501s-ai-ultra",
    rank: 2,
    badge: "Best for Pet Hair",
    name: "Shark AV2501S AI Ultra Robot Vacuum, with Matrix Clean, Home Mapping, 30-Day Capacity HEPA Bagless Self Empty Base, Perfect for Pet Hair, Wifi, Dark Grey",
    amazonUrl: "https://www.amazon.com/dp/B09H8CWFNK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41vESfQ2o8L._SL500_.jpg",
    price: "$279.99",
    rating: "reported as consistently strong by owners",
    reviews: "a large number of reviews",
    specs: ["30-day capacity HEPA self-empty base", "Matrix Clean home mapping", "Bagless design", "Wifi app control"],
    description:
      "The AV2501S uses Matrix Clean mapping to build a home layout and a 30-day capacity HEPA self-empty base that is especially useful on a pet-heavy floor where bin emptying frequency adds up fast. Owners commonly point to the pet hair pickup and the long self-empty interval as the standout features.\n\nFor multi-floor households, the key question is whether each level gets its own base. Without a second base, this model still needs to be carried and manually docked to keep the battery topped up on the floor that lacks one.",
    bestFor: "Homes with pets where at least one floor can host the self-empty base full time.",
    pros: [
      "30-day HEPA self-empty base reduces bin maintenance",
      "Home mapping supports zone-based cleaning per floor",
      "Bagless design avoids ongoing bag purchases",
    ],
    cons: [
      "No official numeric rating verified for this listing",
      "A floor without the base still needs manual recharge management",
    ],
  },
  {
    id: "yeedi-m12-pro-gen2",
    rank: 3,
    badge: "Best Suction Power",
    name: "Yeedi by ECOVACS M12 PRO Gen2 Robot Vacuum and Mop, 25000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GXDZ357G?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31YEX5g6GaL._SL500_.jpg",
    price: "$299.99",
    rating: "generally well regarded by owners",
    reviews: "a growing base of reviews",
    specs: ["25,000Pa suction", "Vacuum and mop combo", "ECOVACS ecosystem app", "Multi-surface transitions"],
    description:
      "The M12 PRO Gen2 leads this comparison on raw suction power, which is useful on a floor with heavier carpet or a lot of foot traffic. Owners generally describe it as capable across mixed flooring, and the ECOVACS app supports saved layouts for repeat cleaning.\n\nAs with the other models here, moving it between floors without a dedicated dock on each level means manually returning it to charge, and its higher suction rating can mean a slightly heavier unit to carry up and down stairs.",
    bestFor: "A carpet-heavy floor that benefits from stronger suction than the other picks here offer.",
    pros: [
      "Highest rated suction power in this comparison",
      "Multi-surface transitions handle mixed flooring well",
      "App supports saved floor layouts",
    ],
    cons: [
      "No official numeric rating verified for this listing",
      "Higher suction models tend to run heavier, which matters if carrying it between floors",
    ],
  },
  {
    id: "tikom-self-emptying-base",
    rank: 4,
    badge: "Best Self-Emptying Value",
    name: "Tikom Robot Vacuum and Mop, Robotic Vacuum Cleaner with Self-Emptying Base",
    amazonUrl: "https://www.amazon.com/dp/B0FKH1RW65?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41TiBcXjEaL._SL500_.jpg",
    price: "$219.99",
    rating: "described positively by most owners",
    reviews: "a solid number of reviews",
    specs: ["Self-emptying base", "Vacuum and mop combo", "App and remote control", "Auto-charge and resume"],
    description:
      "This Tikom model bundles a self-emptying base with combo vacuum and mop cleaning at a price well under the higher-suction options in this list. For a multi-floor household on a budget, it is a reasonable way to get automated bin emptying on the primary floor.\n\nIt supports auto-charge and resume within a single mapped layout, but like most models without per-floor docks, a second level still means either buying a spare dock or manually returning the robot to charge before it can resume cleaning there.",
    bestFor: "Budget-conscious buyers who want self-emptying convenience on their main floor.",
    pros: [
      "Self-emptying base at a lower price than most competitors here",
      "Combo vacuum and mop in one pass",
      "App and remote control for flexible scheduling",
    ],
    cons: [
      "No official numeric rating verified for this listing",
      "Recharge-and-resume on a floor without the base is limited",
    ],
  },
  {
    id: "uninell-lidar-self-empty",
    rank: 5,
    badge: "Best Mapping Precision",
    name: "uninell Robot Vacuum and Mop 7000Pa LiDAR Self-Empty Station",
    amazonUrl: "https://www.amazon.com/dp/B0H14GZPXV?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41Ra-z-+UaL._SL500_.jpg",
    price: "$233.99",
    rating: "well received in early owner feedback",
    reviews: "a moderate number of reviews",
    specs: ["LiDAR navigation", "7000Pa suction", "Self-empty station", "Vacuum and mop combo"],
    description:
      "LiDAR navigation tends to produce more accurate maps than camera-only or gyroscope-based systems, which matters when a robot needs to keep multiple distinct floor plans straight without mixing up rooms. This model pairs that navigation with a self-empty station and moderate 7000Pa suction.\n\nFor no-go zones and per-floor room settings, LiDAR-based mapping generally holds up more reliably over time than cheaper navigation systems, making this a solid pick for buyers who care most about map accuracy across levels.",
    bestFor: "Buyers who prioritize accurate room-level mapping and zone settings over maximum suction.",
    pros: [
      "LiDAR navigation supports more reliable multi-floor maps",
      "Self-empty station included",
      "Per-room zone and no-go settings",
    ],
    cons: [
      "No official numeric rating verified for this listing",
      "Suction power is more moderate than the top-rated picks here",
    ],
  },
  {
    id: "monsga-90-day-self-emptying",
    rank: 6,
    badge: "Best Long-Interval Self-Emptying",
    name: "MONSGA Robot Vacuum and Mop, 90 Days Self-Emptying with 8000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GFMY4J3L?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41bvMxvqN5L._SL500_.jpg",
    price: "$269.99",
    rating: "reported as reliable by early owners",
    reviews: "a smaller but growing number of reviews",
    specs: ["90-day self-emptying capacity", "8000Pa suction", "Vacuum and mop combo", "App scheduling"],
    description:
      "The standout spec here is a self-empty base rated for roughly 90 days of capacity, which is longer than most of the other self-emptying models in this comparison. For a floor that gets cleaned often but checked on infrequently, that longer interval reduces one more maintenance task.\n\nSuction sits in the middle of the pack at 8000Pa, which is adequate for most floors but not the strongest option here. As with the other single-dock models, a second floor without its own base still needs manual charging management.",
    bestFor: "A floor that is cleaned frequently but visited infrequently, where longer self-empty intervals help.",
    pros: [
      "Longest rated self-empty interval in this comparison",
      "Combo vacuum and mop functionality",
      "App-based scheduling",
    ],
    cons: [
      "No official numeric rating verified for this listing",
      "Mid-range suction compared to the strongest picks here",
    ],
  },
  {
    id: "roborock-q7-l5",
    rank: 7,
    badge: "Best Value",
    name: "roborock Q7 L5 Robot Vacuum and Mop Combo, 8,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0F334DN9J?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41hpc-ca5xL._SL500_.jpg",
    price: "$139.99",
    rating: "generally positive among owners",
    reviews: "a healthy number of reviews",
    specs: ["8,000Pa suction", "Vacuum and mop combo", "roborock app mapping", "Lower price point"],
    description:
      "This Q7 L5 model brings roborock's mapping and app ecosystem down to a lower price point than the brand's flagship Q10 S5+, while still offering combo vacuuming and mopping at 8,000Pa suction. For buyers who want multi-floor map storage without paying flagship pricing, it is a reasonable middle-ground pick.\n\nIt does without some of the higher-end suction and dock features of the pricier models here, so it suits lighter cleaning needs or a secondary floor better than a heavily trafficked main level.",
    bestFor: "Buyers who want roborock's app and mapping ecosystem at a lower entry price.",
    pros: [
      "Lower price than the flagship roborock model in this comparison",
      "Familiar roborock app and mapping support",
      "Combo vacuum and mop in one unit",
    ],
    cons: [
      "No official numeric rating verified for this listing",
      "Suction and features trail the pricier picks here",
    ],
  },
  {
    id: "ilife-a30s",
    rank: 8,
    badge: "Best Budget Pick",
    name: "ILIFE A30s Robot Vacuum, 10000Pa Max Suction",
    amazonUrl: "https://www.amazon.com/dp/B0G5YDVR99?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41GzZmL4LDL._SL500_.jpg",
    price: "$139.99",
    rating: "considered a strong value by owners",
    reviews: "a healthy number of reviews",
    specs: ["10,000Pa max suction", "Budget price point", "App-based control", "Basic mapping"],
    description:
      "The A30s claims 10,000Pa max suction at a price that undercuts most of the other models here, which makes it worth considering for a secondary floor that does not need every premium feature. Basic app control and mapping cover the essentials for most single-floor layouts.\n\nBuyers should temper expectations for advanced multi-floor features like a self-empty base or LiDAR precision at this price. It works best as a budget addition to a floor that is already served by a stronger primary robot elsewhere in the home.",
    bestFor: "A budget-friendly secondary robot for a floor that does not need premium mapping or self-emptying.",
    pros: [
      "Lowest price alongside the roborock Q7 L5 in this comparison",
      "Strong claimed suction for the price point",
      "App-based control covers basic scheduling needs",
    ],
    cons: [
      "No official numeric rating verified for this listing",
      "Lacks self-emptying and advanced mapping features found on pricier picks",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Multiple saved maps and automatic floor recognition",
    explanation:
      "A robot that only stores one map will treat every new floor as unfamiliar territory and remap from scratch. Look for models that explicitly support multiple saved maps and, ideally, automatic recognition of which floor it is currently on.",
  },
  {
    criterion: "Whether each floor needs its own dock or the robot needs to be carried",
    explanation:
      "Most robot vacuums ship with a single dock. Some buyers purchase a second dock for each additional floor, while others simply carry the robot up and down and let it start from wherever it is placed. Decide which approach fits your household before buying.",
  },
  {
    criterion: "Carrying weight of the robot and removable water tanks",
    explanation:
      "A combo vacuum and mop unit with a full water tank is meaningfully heavier than a vacuum-only model, which matters if someone will be lifting it between floors regularly. Check whether the water tank is removable so it can be carried separately and refilled on arrival.",
  },
  {
    criterion: "Recharge-and-resume limits on floors without a dock",
    explanation:
      "Without its dock nearby, a robot that runs low on battery mid-clean may simply stop rather than resume later. Check how each model behaves when it cannot reach a charging base on the floor it is working.",
  },
  {
    criterion: "Per-floor zone and no-go settings",
    explanation:
      "Room layouts differ by floor, so zone restrictions and no-go lines set for one level should not carry over incorrectly to another. Confirm that zone settings are tied to each saved map rather than applied globally.",
  },
  {
    criterion: "Self-empty base placement and capacity",
    explanation:
      "A self-empty base is only useful on the floor where it lives. On other floors, factor in how often the bin will need manual emptying, and whether a longer-capacity base reduces that burden if you only have room for one.",
  },
];

export const howWeEvaluated = [
  {
    title: "Multi-floor mapping capability",
    description:
      "We compared how each model handles multiple saved maps, since that is the core feature that separates a genuinely multi-floor-capable robot from one that only works well on a single level.",
  },
  {
    title: "Dock and recharge behavior",
    description:
      "We looked at how each robot behaves when it is working a floor without its own dock, including whether it can pause and resume later or simply stops when the battery runs low.",
  },
  {
    title: "Weight and portability",
    description:
      "We factored in how heavy each unit and its removable water tank are likely to be, since a robot that is awkward to carry undermines the practicality of moving it between floors.",
  },
  {
    title: "Suction and cleaning performance claims",
    description:
      "We compared advertised suction ratings and cleaning modes across models, while noting that suction numbers alone do not guarantee real-world performance on every floor type.",
  },
  {
    title: "Rating and review evidence where available",
    description:
      "For the top pick, we used its verified current rating and review count. For the remaining models, we researched available owner feedback patterns rather than presenting unverified numeric scores as fact.",
  },
];

export const howToChoose = [
  {
    subheading: "By Number of Floors",
    intro: "The more floors in regular rotation, the more mapping and dock flexibility matters.",
    table: {
      headers: ["Situation", "Recommended Pick"],
      rows: [
        ["Two floors, one dock, robot gets carried", "roborock Q10 S5+"],
        ["Two or more floors, budget matters most", "roborock Q7 L5 or ILIFE A30s"],
        ["Multiple floors, precise room mapping matters", "uninell LiDAR Self-Empty"],
      ],
    },
  },
  {
    subheading: "By Primary Concern",
    intro: "Different households prioritize different tradeoffs when a robot moves between levels.",
    table: {
      headers: ["Priority", "Recommended Pick"],
      rows: [
        ["Overall reliability across floors", "roborock Q10 S5+"],
        ["Pet hair on a heavily used floor", "Shark AV2501S AI Ultra"],
        ["Maximum suction on a carpeted floor", "Yeedi M12 PRO Gen2"],
        ["Longest interval between bin emptying", "MONSGA 90 Days Self-Emptying"],
        ["Lowest upfront cost", "roborock Q7 L5 or ILIFE A30s"],
      ],
    },
  },
  {
    subheading: "Single Dock vs a Dock on Every Floor",
    cards: [
      {
        label: "Single dock, robot carried between floors",
        text: "Lower cost and simpler setup, but the robot cannot recharge on its own on floors without the dock, so cleaning there needs to happen in one battery cycle or with manual intervention.",
      },
      {
        label: "A dock on every floor",
        text: "Requires buying a compatible second dock where available, but allows true automatic scheduling on each level without carrying the robot back and forth.",
      },
    ],
    note: "Not every model officially supports a purchasable second dock, so check compatibility before assuming this option is available.",
  },
  {
    subheading: "Self-Emptying Base Placement",
    intro: "A self-empty base only helps the floor it sits on.",
    table: {
      headers: ["Base Placement", "What to Expect"],
      rows: [
        ["Base on the most-used floor", "Longest stretch between manual bin emptying"],
        ["No base, or base on a rarely used floor", "Manual bin emptying needed on other floors"],
      ],
    },
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You want the most consistent multi-floor mapping and dock behavior across a wide range of owners, which the roborock Q10 S5+ and Shark AV2501S both support well.",
      },
      {
        label: "Save if",
        text: "One floor is lightly used or a secondary space, where a budget pick like the ILIFE A30s or roborock Q7 L5 covers the basics without the premium price.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Do I need a dock on every floor?",
    a: "Not strictly. Many households use a single dock and simply carry the robot to whichever floor needs cleaning. This works fine for occasional use, but it means the robot cannot automatically recharge and resume cleaning on floors without a dock, so plan for it to complete each floor within a single battery cycle or expect to intervene manually.",
  },
  {
    q: "Can one robot really remember multiple floor layouts?",
    a: "Models that explicitly support multiple saved maps, like the roborock Q10 S5+, can store distinct layouts and switch between them once you tell the robot (usually through the app) which floor it is currently on. Models without this feature will generally remap from scratch each time they are moved to a different level.",
  },
  {
    q: "How heavy are these robots to carry up and down stairs?",
    a: "Combo vacuum and mop models tend to be heavier than vacuum-only units, especially with a full water tank attached. Where possible, empty or remove the water tank separately before carrying the robot, and check whether the tank on your chosen model is designed to be removable.",
  },
  {
    q: "Will the robot pause and resume if it runs out of battery on a floor without a dock?",
    a: "This varies by model and is not guaranteed. Some robots can pause a cleaning run and wait for manual intervention, while others simply stop the session. If a floor is large enough that one battery charge may not cover it, factor that into your choice rather than assuming automatic resume will handle it.",
  },
  {
    q: "Do zone and no-go settings carry over correctly between floors?",
    a: "On models with proper multi-map support, zone restrictions and no-go lines are generally tied to each individual saved map, so they should not incorrectly apply to a different floor's layout. Confirm this behavior for your specific model rather than assuming it by default.",
  },
  {
    q: "Is higher suction worth prioritizing for a multi-floor home?",
    a: "It depends on flooring type more than floor count. A carpet-heavy floor benefits more from higher suction ratings like the Yeedi M12 PRO Gen2's, while a mostly hard-floor level can perform well with a more moderate suction model.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
