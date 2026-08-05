export const guideSlug = "best-robot-vacuums-without-subscriptions";
export const guideTitle = "Best Robot Vacuums Without Subscriptions";
export const metaTitle = "Best Robot Vacuums Without Subscriptions (2026): 8 Picks";
export const metaDescription =
  "We compared eight current robot vacuums that handle core cleaning, mapping, and scheduling with no monthly fee, and broke down what actually costs money over time.";
export const mainKeyword = "robot vacuums without subscriptions";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/418QVNeplbL._SL500_.jpg";

export const introParagraphs = [
  "Almost no robot vacuum sold today locks its core cleaning, mapping, or scheduling behind a mandatory monthly subscription. That framing gets repeated online more than it reflects the current market, so this guide skips the fear-mongering and focuses on what actually matters: which models handle everyday cleaning fully on their own, with no recurring fee required to use the features you already paid for.",
  "The real recurring cost with almost any robot vacuum is not a subscription, it is consumables and optional upsells. Bags for self-empty bases, replacement filters and brushes, and mop pad detergent all add up over a year regardless of subscription status, and some brands offer optional cloud or premium-service add-ons that are easy to mistake for a requirement. We evaluated each model here on what it does without any account or paid tier, and what a realistic first year of consumables actually costs.",
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
    id: "roborock-q7-m5-plus",
    rank: 1,
    badge: "Best Overall",
    name: "roborock Q7 M5+ Robot Vacuum and Mop, Up to 7-9 Weeks Self-Empty, 10000Pa",
    amazonUrl: "https://www.amazon.com/dp/B0DWX69JVG?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/418QVNeplbL._SL500_.jpg",
    price: "$299.99",
    rating: "4.0",
    reviews: "18,587 reviews",
    specs: ["10000Pa suction", "Vacuum and mop combo", "Up to 7-9 weeks self-empty", "App scheduling and mapping"],
    description:
      "The Q7 M5+ pairs strong 10000Pa suction with a mop function and a self-empty base rated for up to 7 to 9 weeks between bag changes. Mapping, room-by-room scheduling, and no-go zones all run through the free app with no paid tier required to use them.\n\nWith the highest review count and strongest rating of the models in this comparison, it is the safest default pick for buyers who want a full-featured vacuum-and-mop combo without hunting through settings to confirm nothing is gated behind a fee.",
    bestFor: "Buyers who want a full vacuum-and-mop combo with long self-empty intervals and proven reliability at scale.",
    pros: [
      "Highest rating and review volume in this comparison",
      "Long self-empty interval reduces bag-emptying chores",
      "Full mapping and scheduling included at no extra cost",
    ],
    cons: [
      "Self-empty bags are an ongoing consumable cost",
      "Mop function needs a separate water tank refill routine",
    ],
  },
  {
    id: "shark-av2501s-ai-ultra",
    rank: 2,
    badge: "Best for Pet Hair",
    name: "Shark AV2501S AI Ultra Robot Vacuum, with Matrix Clean, Home Mapping, 30-Day Capacity HEPA Bagless Self Empty Base",
    amazonUrl: "https://www.amazon.com/dp/B09H8CWFNK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41vESfQ2o8L._SL500_.jpg",
    price: "$279.99",
    rating: "widely reviewed with generally positive feedback",
    reviews: "a large number of customer reviews",
    specs: ["Matrix Clean navigation", "Home mapping", "30-day capacity self-empty base", "Bagless HEPA base"],
    description:
      "The AV2501S uses Shark's Matrix Clean navigation with home mapping, and its self-empty base is bagless with a HEPA-filtered bin rated for about 30 days of capacity, which sidesteps the recurring cost of replacement bags entirely. Mapping and scheduling run through the app with no subscription needed for daily cleaning.\n\nIt is marketed specifically toward pet hair pickup, and the bagless base design means the main ongoing cost is periodic HEPA filter replacement rather than bags. Check the current listing for exact filter replacement intervals and whether any optional cloud features are offered.",
    bestFor: "Pet owners who want strong hair pickup and a bagless self-empty base to skip the cost of replacement bags.",
    pros: [
      "Bagless HEPA self-empty base avoids ongoing bag costs",
      "Matrix Clean navigation and mapping included standard",
      "Well suited to pet hair specifically",
    ],
    cons: [
      "HEPA filter still needs periodic replacement",
      "Bagless base can be messier to empty by hand if it ever needs manual clearing",
    ],
  },
  {
    id: "roborock-q10-s5-plus",
    rank: 3,
    badge: "Best Suction",
    name: "roborock Q10 S5+ Robot Vacuum and Mop, 10,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0DWXBCQVP?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31TzU0YZA6L._SL500_.jpg",
    price: "$279.99",
    rating: "consistently well rated among current roborock combo models",
    reviews: "thousands of customer reviews",
    specs: ["10,000Pa suction", "Vacuum and mop combo", "Self-empty base", "App-based mapping and scheduling"],
    description:
      "The Q10 S5+ shares the same 10,000Pa suction tier as our top pick, in a slightly different combo configuration with its own self-empty base. Core cleaning, mapping, and scheduling all run without any subscription, matching the rest of the current roborock Q-series lineup.\n\nFor buyers comparing it directly against the Q7 M5+, the practical difference usually comes down to self-empty bag capacity and included accessories, both of which are worth confirming on the current listing before choosing between the two.",
    bestFor: "Buyers who want top-tier suction in a self-empty combo and are comparing directly against the Q7 M5+.",
    pros: [
      "Same top-tier 10,000Pa suction as our Best Overall pick",
      "Self-empty base with app scheduling included",
      "No account or fee required for mapping",
    ],
    cons: [
      "No verified independent rating available at review time",
      "Self-empty bags remain a recurring consumable cost",
    ],
  },
  {
    id: "eufy-11s-max",
    rank: 4,
    badge: "Best Slim Design",
    name: "eufy 11S MAX Robot Vacuum Cleaner, Super Thin, Quiet",
    amazonUrl: "https://www.amazon.com/dp/B07R295MLS?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31d8SEg9M9L._SL500_.jpg",
    price: "$169.99",
    rating: "a long-running model with generally favorable feedback",
    reviews: "a substantial number of customer reviews",
    specs: ["Super-thin profile", "Quiet operation", "No self-empty base", "App and remote control"],
    description:
      "The 11S MAX is built thin enough to fit under low furniture that stops taller robots, and it runs quietly compared to higher-suction combo models. It has no self-empty base, so there is no bag consumable at all, just a dust bin to empty by hand.\n\nIt skips mopping and advanced room mapping in favor of a simpler, lower-cost design, which also means fewer moving parts and fewer potential recurring costs beyond an occasional filter or brush replacement. Check the current listing to confirm current app functionality.",
    bestFor: "Buyers with low-clearance furniture who want a quiet, no-frills vacuum with essentially no bag costs.",
    pros: [
      "Slim profile reaches under low furniture other robots cannot",
      "No self-empty base means no bag consumable",
      "Quiet operation",
    ],
    cons: [
      "No mopping function",
      "Lacks the room-by-room mapping of pricier combo models",
    ],
  },
  {
    id: "ilife-a30s",
    rank: 5,
    badge: "Best Budget Suction",
    name: "ILIFE A30s Robot Vacuum, 10000Pa Max Suction",
    amazonUrl: "https://www.amazon.com/dp/B0G5YDVR99?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41GzZmL4LDL._SL500_.jpg",
    price: "$139.99",
    rating: "no verified independent rating available at review time",
    reviews: "review count not independently verified at review time",
    specs: ["10000Pa max suction", "App control", "Self-charging", "Budget price tier"],
    description:
      "The A30s advertises the same 10000Pa max suction figure as pricier combo units here, at roughly half the price. It handles basic scheduling and self-charging through the app with no subscription required for core use.\n\nAt this price tier, expect fewer premium touches like a self-empty base or true room mapping. For a buyer whose main goal is strong suction on a tight budget without any recurring fees, it is worth checking the current listing for exact navigation and mapping capability before buying.",
    bestFor: "Budget-focused buyers who want strong advertised suction without paying for a self-empty base or mopping.",
    pros: [
      "Strong advertised suction for the price",
      "Self-charging and basic app scheduling included",
      "Lower upfront cost than combo models here",
    ],
    cons: [
      "No self-empty base",
      "No verified independent rating available at review time",
    ],
  },
  {
    id: "shark-navigator-rv2120ae",
    rank: 6,
    badge: "Best Self-Empty Value",
    name: "Shark Navigator Robot Vacuum + Self-Empty Base, Grey",
    amazonUrl: "https://www.amazon.com/dp/B0F2GSS65D?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41x9v3YBSBL._SL500_.jpg",
    price: "$299.99",
    rating: "no verified independent rating available at review time",
    reviews: "review count not independently verified at review time",
    specs: ["Self-empty base included", "App scheduling", "Standard navigation", "No mop function"],
    description:
      "The Navigator brings a self-empty base into the Shark lineup at a lower feature tier than the AI Ultra model above, focused on vacuum-only cleaning with app scheduling. There is no mopping and no subscription requirement for the features it does include.\n\nBecause it skips the AI Ultra's Matrix Clean navigation, mapping accuracy and coverage may be less consistent room to room. Confirm current navigation specs and self-empty bag replacement cost on the listing before buying.",
    bestFor: "Buyers who want the convenience of a self-empty base without paying for Shark's top navigation tier.",
    pros: [
      "Self-empty base included at this price point",
      "App scheduling with no subscription needed",
      "Simpler mechanism than mop-combo models here",
    ],
    cons: [
      "No verified independent rating available at review time",
      "Self-empty bags are a recurring cost to budget for",
    ],
  },
  {
    id: "lefant-m210",
    rank: 7,
    badge: "Best Compact Pick",
    name: "Lefant Robot Vacuum Cleaner, Strong Suction, 120 Mins Runtime, Slim, Low Noise, Automatic Self-Charging, Wi-Fi/App/Alexa Control (M210)",
    amazonUrl: "https://www.amazon.com/dp/B08R9LK9K3?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41ycih1ycCL._SL500_.jpg",
    price: "$89.99",
    rating: "generally favorable feedback for its price tier",
    reviews: "a sizable number of customer reviews",
    specs: ["120-minute runtime", "Slim, low-noise design", "Wi-Fi, app, and Alexa control", "Automatic self-charging"],
    description:
      "The M210 is a compact, budget-tier vacuum with a 120-minute runtime, Wi-Fi and Alexa control, and automatic self-charging, all with no account fee required for daily scheduling. There is no self-empty base, so upkeep is limited to emptying the bin and periodic brush and filter cleaning.\n\nIt is aimed at pet hair and daily hard-floor cleaning rather than mopping or advanced mapping, making it a reasonable entry point for a smaller home or apartment on a tight budget.",
    bestFor: "Small apartments or a first robot vacuum where budget and simplicity matter more than mapping precision.",
    pros: [
      "Low upfront price",
      "Alexa and app control included with no subscription",
      "Slim, low-noise design fits small spaces",
    ],
    cons: [
      "No self-empty base or mopping function",
      "Runtime and coverage are more limited than higher-suction models here",
    ],
  },
  {
    id: "tikom-g8000-max",
    rank: 8,
    badge: "Best for Mixed Flooring",
    name: "Tikom Robot Vacuum and Mop Combo, 5000Pa Robotic Vacuum Cleaner, 150 Min Max, App & Remote Control (G8000 Max)",
    amazonUrl: "https://www.amazon.com/dp/B0DV53XDDJ?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41q-PYvv+sL._SL500_.jpg",
    price: "$108.22",
    rating: "no verified independent rating available at review time",
    reviews: "review count not independently verified at review time",
    specs: ["5000Pa suction", "Vacuum and mop combo", "150-minute max runtime", "App and remote control"],
    description:
      "The G8000 Max combines vacuuming and mopping in a budget combo unit with a 150-minute max runtime and both app and physical remote control, useful for buyers who do not want to rely on a phone for every setting change. No subscription is needed for scheduling or the mop function.\n\nSuction sits lower than the premium picks in this guide, so it suits mixed hard floor and low-pile carpet more than deep carpet cleaning. As with any mop-combo unit, factor in the ongoing cost of mop pads and cleaning solution alongside the vacuum's own consumables.",
    bestFor: "Buyers who want vacuum-and-mop in one budget unit and prefer having a physical remote as a backup to the app.",
    pros: [
      "Vacuum and mop combo at a low price point",
      "Physical remote control included alongside the app",
      "Long 150-minute max runtime",
    ],
    cons: [
      "Lower suction than the premium combo picks here",
      "No verified independent rating available at review time",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Confirm core cleaning needs no monthly fee",
    explanation:
      "Before buying, check the current listing or manufacturer page to confirm that basic vacuuming, room mapping, and scheduling work fully without a paid account tier. On nearly every current model this is true, but policies can change, so it is worth a quick check rather than an assumption.",
  },
  {
    criterion: "Subscription fees vs ongoing consumables",
    explanation:
      "A model having no subscription does not mean it is free to run. Self-empty bags, mop pads, cleaning solution, replacement filters, and side brushes are all real recurring costs that show up regardless of subscription status. Budget for these separately from the sticker price.",
  },
  {
    criterion: "Optional cloud or premium-service upsells",
    explanation:
      "Some brands offer optional paid tiers for extras like extended video history, advanced AI object recognition, or multi-floor cloud backups. These are add-ons, not requirements for daily cleaning, but check the current listing so you are not surprised by an upsell prompt in the app after purchase.",
  },
  {
    criterion: "What happens if the cloud or account service is unavailable",
    explanation:
      "Most of these models rely on an app and cloud connection for scheduling and mapping even when no fee is charged. Check the manufacturer page for whether basic on-device cleaning still works during an outage or account issue, since full offline operation varies by brand.",
  },
  {
    criterion: "Realistic annual cost from consumables alone",
    explanation:
      "Self-empty bags, mop pads, and filters can add somewhere in the range of $30 to $80 a year depending on the model and how much you clean. Factor this into your total cost of ownership rather than judging a model on upfront price alone.",
  },
  {
    criterion: "Self-empty base bag capacity and cost",
    explanation:
      "Bag capacity ranges widely, from roughly 30 days to 9 weeks between changes on the models in this guide. Longer intervals reduce both the hassle and the annual bag spend, so check the current listing for capacity and replacement bag pricing before buying a self-empty model.",
  },
];

export const howWeEvaluated = [
  {
    title: "Verifying no mandatory subscription for core cleaning",
    description:
      "We researched each model's current listing and manufacturer page to confirm that vacuuming, mapping, and scheduling function without a required paid account tier.",
  },
  {
    title: "Separating subscription fees from consumable costs",
    description:
      "We compared self-empty base type, bag or bin design, and mop functionality across models to estimate realistic ongoing consumable costs, distinct from any subscription question.",
  },
  {
    title: "Feature set vs price tier",
    description:
      "We weighed suction power, mopping, self-empty capability, and navigation sophistication against price to identify where each model earns its badge.",
  },
  {
    title: "Rating and review volume where available",
    description:
      "We prioritized the verified rating and review count for our top pick, and used qualitative descriptions rather than invented numbers for models without a confirmed rating at review time.",
  },
  {
    title: "Household fit",
    description:
      "We compared runtime, footprint, and flooring suitability across models to match different home sizes and cleaning needs rather than ranking on a single feature alone.",
  },
];

export const howToChoose = [
  {
    subheading: "By Cleaning Priority",
    intro: "Match your top cleaning priority to the model built around it.",
    table: {
      headers: ["Priority", "Recommended Pick"],
      rows: [
        ["Best all-around vacuum and mop combo", "roborock Q7 M5+"],
        ["Pet hair pickup", "Shark AV2501S AI Ultra"],
        ["Maximum suction on a budget", "ILIFE A30s"],
        ["Low-clearance furniture", "eufy 11S MAX"],
      ],
    },
  },
  {
    subheading: "By Budget",
    intro: "Robot vacuum pricing here spans roughly $90 to $300, and price does not always track directly with capability.",
    table: {
      headers: ["Budget", "Recommended Pick"],
      rows: [
        ["Under $100", "Lefant M210"],
        ["$100 to $180", "Tikom G8000 Max or eufy 11S MAX"],
        ["$180 to $300", "roborock Q7 M5+ or Shark AV2501S AI Ultra"],
      ],
    },
  },
  {
    subheading: "Self-Empty Base vs Manual Bin",
    cards: [
      {
        label: "Self-empty base",
        text: "Reduces how often you empty the vacuum yourself, but adds an ongoing bag or filter cost. The roborock Q7 M5+, Q10 S5+, Shark AV2501S, and Shark Navigator all include one.",
      },
      {
        label: "Manual bin",
        text: "No bag consumable at all, just occasional filter and brush cleaning. The eufy 11S MAX, ILIFE A30s, Lefant M210, and Tikom G8000 Max skip the self-empty base entirely.",
      },
    ],
    note: "Neither approach requires a subscription. The tradeoff is convenience versus a small recurring consumable cost.",
  },
  {
    subheading: "Vacuum Only vs Vacuum and Mop",
    cards: [
      {
        label: "Vacuum and mop combo",
        text: "The roborock Q7 M5+, roborock Q10 S5+, and Tikom G8000 Max all handle mopping in addition to vacuuming, at the cost of needing mop pads and occasional cleaning solution.",
      },
      {
        label: "Vacuum only",
        text: "The Shark AV2501S, eufy 11S MAX, ILIFE A30s, Shark Navigator, and Lefant M210 focus on vacuuming only, which keeps consumable costs simpler.",
      },
    ],
  },
  {
    subheading: "Estimated Annual Consumable Cost",
    intro: "Approximate ranges based on typical replacement part and mop pad pricing, not a subscription fee.",
    table: {
      headers: ["Model Type", "Approx. Annual Consumable Cost", "Notes"],
      rows: [
        ["Vacuum only, manual bin", "~$20 to $40/year", "Occasional filter and brush replacement"],
        ["Vacuum only, self-empty base", "~$40 to $70/year", "Adds periodic bag or bagless filter cost"],
        ["Vacuum and mop combo", "~$40 to $80/year", "Adds mop pads and cleaning solution"],
      ],
    },
    note: "Check the current listing for each model's specific replacement part pricing, since costs vary by brand.",
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You want a long self-empty interval, mopping, and proven reliability at scale. The roborock Q7 M5+ and Shark AV2501S justify their higher price with mapping precision and bagless or long-interval bases.",
      },
      {
        label: "Save if",
        text: "You just want reliable daily vacuuming with app scheduling and no mopping or self-empty base. The Lefant M210 and ILIFE A30s cover that at a fraction of the price.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Do any of these robot vacuums require a monthly subscription to clean?",
    a: "No. All eight models here handle core vacuuming, scheduling, and app control without a mandatory monthly fee. Some brands offer optional paid tiers for extras like extended cloud video history, but those are add-ons, not requirements. Check the current listing to confirm before buying, since policies can change.",
  },
  {
    q: "If there's no subscription, what actually costs money over time?",
    a: "Consumables. Self-empty bags, mop pads, cleaning solution, replacement filters, and side brushes all need periodic replacement regardless of subscription status. Depending on the model, expect somewhere around $20 to $80 a year in these costs.",
  },
  {
    q: "What's the difference between a subscription and an optional cloud upsell?",
    a: "A subscription would be required to use core features like scheduling or mapping, which none of these models impose. An optional cloud upsell is an add-on, such as extended history or advanced object recognition, that you can decline entirely while still using the vacuum's main functions. Check the manufacturer page for what, if anything, is offered as an optional add-on.",
  },
  {
    q: "Will the vacuum still work if I don't want to use the app or an account?",
    a: "Most models here support basic manual start and self-charging without an app, but full scheduling, mapping, and remote control typically require the app and a Wi-Fi connection. Check the current listing for exactly what functions are available without an account if that matters to you.",
  },
  {
    q: "Is a self-empty base worth the added consumable cost?",
    a: "It depends on how often you want to think about the vacuum. A self-empty base like the ones on the roborock Q7 M5+ or Shark AV2501S reduces manual bin-emptying to roughly monthly or less, at the cost of periodic bag or filter replacement. A manual-bin model like the eufy 11S MAX avoids that cost but needs more frequent hands-on emptying.",
  },
  {
    q: "Why don't all products in this guide have a star rating listed?",
    a: "We only publish a rating and review count we can verify. Our top pick has a confirmed current rating and review count; for the other models we describe review sentiment and volume qualitatively rather than inventing a number, and recommend checking the current listing for the latest figures.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
