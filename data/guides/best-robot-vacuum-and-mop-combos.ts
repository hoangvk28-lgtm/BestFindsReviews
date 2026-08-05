export const guideSlug = "best-robot-vacuum-and-mop-combos";
export const guideTitle = "Best Robot Vacuum and Mop Combos";
export const metaTitle = "Best Robot Vacuum and Mop Combos (2026): 8 Models Compared";
export const metaDescription =
  "We compared eight current robot vacuum and mop combos on suction power, mop lifting for carpet, dock maintenance, and price so you can pick the right one without guessing.";
export const mainKeyword = "robot vacuum and mop combos";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/411Xa7a-35L._SL500_.jpg";

export const introParagraphs = [
  "Robot vacuum and mop combos have become the default recommendation for buyers who used to purchase a robot vacuum and a separate mopping robot, mostly because a single dock that empties dust, washes its own mop pads, and refills clean water removes most of the daily upkeep that made early robot mops a hassle. The catch is that most listings market suction power and mopping as one combined feature, when in practice they are two separate systems with separate strengths.",
  "We looked at eight current, distinct models rather than color variants of the same machine, spanning budget picks under $150 up to premium docks near $500, and focused on the details that actually change daily use: how well the vacuum performs separately from the mop, whether the mop pad lifts automatically on carpet, how much manual dock maintenance each system still requires, and how suction power tracks with price.",
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
    id: "irobot-roomba-105-combo",
    rank: 1,
    badge: "Best Overall",
    name: "iRobot Roomba 105 Combo Robot Vacuum & Mop with AutoEmpty Dock, Self-Empties for 75 Days, Intense Power-Lifting Suction, LiDAR Navigation, Multiple Cleaning Modes",
    amazonUrl: "https://www.amazon.com/dp/B0DWFZ8Q7M?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/411Xa7a-35L._SL500_.jpg",
    price: "$299",
    rating: "4.4",
    reviews: "49,289 reviews",
    specs: ["AutoEmpty Dock, 75-day capacity", "LiDAR Navigation", "Intense Power-Lifting Suction", "Multiple Cleaning Modes"],
    description:
      "The Roomba 105 Combo pairs iRobot's long-standing vacuum navigation with an AutoEmpty dock rated to hold up to 75 days of debris before you have to touch the bin. LiDAR navigation gives it consistent room mapping, and the multiple cleaning modes let you set different suction and mop behavior for different rooms rather than one blanket setting for the whole home.\n\nWith close to 50,000 reviews and a 4.4 average, it has by far the largest track record of any model in this comparison, which is worth weighing heavily since combo units have more moving parts than a vacuum-only robot. As with any combo dock, the AutoEmpty bag still needs periodic replacement and the mop tank needs refilling, so it reduces maintenance rather than eliminating it entirely.",
    bestFor: "Buyers who want the most proven, widely reviewed combo on the market and are comfortable paying a mid-range price for that track record.",
    pros: [
      "Largest review base and highest rating of any model in this comparison",
      "75-day AutoEmpty dock capacity cuts down on manual bin emptying",
      "LiDAR navigation gives reliable, repeatable room mapping",
    ],
    cons: [
      "Costs more than several budget combos here for similar core suction specs",
      "AutoEmpty bags are a recurring cost separate from the mop pad and detergent",
    ],
  },
  {
    id: "roborock-q10-s5plus",
    rank: 2,
    badge: "Best for Hard Floors",
    name: "roborock Q10 S5+ Robot Vacuum and Mop, 10,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0DWXBCQVP?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31TzU0YZA6L._SL500_.jpg",
    price: "$279.99",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["10,000Pa Suction", "Self-Empty Dock", "Mop Function"],
    description:
      "The Q10 S5+ leads with 10,000Pa of rated suction, which puts it ahead of most models in this price range on paper vacuum performance. That number matters most on hard floors and low-pile carpet, since very high suction alone does not guarantee equally strong mopping, and we'd encourage buyers to judge the two systems somewhat separately rather than assuming a strong vacuum spec implies an equally strong mop.\n\nAs with most self-empty combo docks in this range, plan on periodically washing the mop pad and cleaning the dust tray by hand even with the automated bin emptying in place. That upkeep is standard across nearly every combo on the market, not a specific weakness of this model.",
    bestFor: "Homes with mostly hard flooring where high rated suction is the priority.",
    pros: [
      "10,000Pa suction rating is strong for the price tier",
      "Self-empty dock reduces daily bin emptying",
    ],
    cons: [
      "Mop pad and dock tray still need periodic hand cleaning",
      "High suction spec does not automatically mean equally strong mopping",
    ],
  },
  {
    id: "tikom-g8000-max",
    rank: 3,
    badge: "Best Budget Pick",
    name: "Tikom Robot Vacuum and Mop Combo, 5000Pa Robotic Vacuum Cleaner, 150 Min Max, App & Remote Control, Ideal for Hard Floor, Carpet, Pet Hair, Self-Charge (G8000 Max)",
    amazonUrl: "https://www.amazon.com/dp/B0DV53XDDJ?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41q-PYvv+sL._SL500_.jpg",
    price: "$108.22",
    rating: "Popular pick",
    reviews: "Frequently recommended",
    specs: ["5000Pa Suction", "150 Min Runtime", "App & Remote Control", "Self-Charge"],
    description:
      "The G8000 Max is the least expensive combo in this comparison by a wide margin, and it still covers the basics buyers actually use day to day: app control, a remote for manual driving, and a rated 150-minute runtime that should clear a typical small to mid-size home on one charge. At 5000Pa, its suction is meaningfully lower than the premium options here, so it is best matched to lighter daily upkeep rather than heavy pet hair or thick carpet.\n\nThis model does not include a self-emptying dock, so expect to empty the dustbin by hand and rinse the mop pad yourself after each session. For a first robot combo or a secondary unit for a small apartment, that tradeoff is a reasonable way to keep the price down.",
    bestFor: "Budget-conscious buyers or a secondary unit for a small apartment who don't need a self-empty dock.",
    pros: [
      "Lowest price in this comparison by a significant margin",
      "App and remote control cover most day-to-day needs",
    ],
    cons: [
      "No self-empty dock, dustbin and mop pad are hand-maintained",
      "Lower rated suction than the mid-range and premium picks here",
    ],
  },
  {
    id: "ropvacnic-combo",
    rank: 4,
    badge: "Best Compact Option",
    name: "ROPVACNIC Robot Vacuum and Mop Combo 5200Pa Suction Robotic Cleaner",
    amazonUrl: "https://www.amazon.com/dp/B0GDXV2KJ4?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/518+BuiWh6L._SL500_.jpg",
    price: "$139.99",
    rating: "Well-liked by buyers",
    reviews: "Strong buyer feedback",
    specs: ["5200Pa Suction", "Vacuum & Mop Combo", "Compact Robot Body"],
    description:
      "The ROPVACNIC combo sits in the same budget tier as the Tikom G8000 Max but comes from a lesser-known brand, which tends to mean a shorter review history to lean on. At 5200Pa it offers a slight suction bump over the G8000 Max at a similar price, making it worth cross-shopping if you want the extra suction headroom for pet hair.\n\nLike other lower-priced combos in this list, the dock here handles basic charging rather than automated emptying, so daily maintenance is more hands-on. Buyers with carpet should specifically check the current listing for whether the mop pad lifts automatically when the robot crosses onto carpet, since that detail is not always obvious from the marketing copy alone.",
    bestFor: "Buyers who want a slightly higher suction rating than the cheapest option without moving up to a mid-range price.",
    pros: [
      "5200Pa suction edges out other budget-tier combos",
      "Competitive price for a combined vacuum and mop unit",
    ],
    cons: [
      "Shorter brand track record than the more established names here",
      "No automated dock emptying at this price point",
    ],
  },
  {
    id: "eufy-omni-c20",
    rank: 5,
    badge: "Best Self-Emptying Combo",
    name: "eufy Omni C20 Robot Vacuum and Mop Combo for Hardwood and Carpet",
    amazonUrl: "https://www.amazon.com/dp/B0GCDZBK9Q?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31uX9zUZ5dL._SL500_.jpg",
    price: "$379.99",
    rating: "Customer favorite",
    reviews: "Widely purchased",
    specs: ["Omni All-in-One Dock", "Hardwood & Carpet Rated", "Self-Empty & Self-Wash"],
    description:
      "eufy's Omni line is built around an all-in-one dock designed to empty the dustbin, wash the mop pads, and refill the water tank without much hands-on involvement, which is the single biggest quality-of-life upgrade a combo dock can offer over a basic charging base. That said, even self-cleaning docks still need the clean water tank refilled, the dirty water tank emptied, and the detergent topped off periodically, so budget for that ongoing routine rather than expecting zero maintenance.\n\nThe listing specifically calls out hardwood and carpet coverage, which is worth noting since carpet performance is where cheaper combos most often fall short. If carpet is a significant part of your home, this is one of the stronger candidates here to research further on mop-lift behavior specifically.",
    bestFor: "Households that want the fullest self-cleaning dock experience and have a mix of hardwood and carpet.",
    pros: [
      "All-in-one dock automates dustbin, mop wash, and water refill",
      "Marketed specifically for mixed hardwood and carpet homes",
    ],
    cons: [
      "Meaningfully more expensive than the budget combos in this list",
      "Self-cleaning dock still requires periodic tank refills and detergent restocking",
    ],
  },
  {
    id: "roborock-qrevo-s5v",
    rank: 6,
    badge: "Best for Edge Cleaning",
    name: "roborock Qrevo S5V Robot Vacuum and Mop, FlexiArm Edge Mopping",
    amazonUrl: "https://www.amazon.com/dp/B0DSP8J476?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/317EXRVR2uL._SL500_.jpg",
    price: "$499.98",
    rating: "Frequently recommended",
    reviews: "Strong buyer feedback",
    specs: ["FlexiArm Edge Mopping", "Premium Navigation", "Vacuum & Mop Combo"],
    description:
      "The Qrevo S5V's headline feature is FlexiArm edge mopping, an extending arm designed to reach mop pads into corners and along baseboards that a fixed, centered mop pad typically misses. That is one of the more useful mopping-specific upgrades in this comparison rather than a suction claim, and it addresses a real, commonly reported gap in robot mopping generally.\n\nAt just under $500, it is the most expensive model in this list, and buyers should weigh whether edge mopping specifically matters enough in their home to justify the premium over the eufy Omni C20 at a lower price. As with the other premium docks here, expect periodic mop pad washing and tray cleaning even with automated features in place.",
    bestFor: "Buyers who specifically want better edge and corner mopping and are willing to pay a premium for it.",
    pros: [
      "FlexiArm edge mopping targets a common weak spot for robot mops",
      "Premium navigation and mapping typical of roborock's higher-tier lineup",
    ],
    cons: [
      "Highest price in this comparison",
      "Edge mopping is a specific feature, not a guarantee of stronger overall suction",
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
    rating: "Popular pick",
    reviews: "Well-reviewed on Amazon",
    specs: ["8,000Pa Suction", "Vacuum & Mop Combo", "Budget-Tier Pricing"],
    description:
      "The Q7 L5 brings a well-known brand and a rated 8,000Pa of suction down to the same roughly $140 price point as the ROPVACNIC and Tikom picks, which makes it one of the stronger suction-per-dollar options we found in this comparison. For buyers who trust the roborock ecosystem and app but don't want to spend $280 or more on the Q10 S5+, this is the natural step-down pick.\n\nLike the other budget entries here, it does not include a self-emptying dock, so factor in manual dustbin emptying and mop pad rinsing as part of the ongoing routine. The vacuum and mop performance should still be evaluated somewhat independently, since a solid suction rating doesn't automatically carry over to strong mopping results.",
    bestFor: "Buyers who want a recognized brand and strong suction rating without paying mid-range prices.",
    pros: [
      "8,000Pa suction is high for a budget-tier price",
      "Backed by roborock's broader app and support ecosystem",
    ],
    cons: [
      "No self-empty dock at this price",
      "Mop performance should be checked separately from the suction spec",
    ],
  },
  {
    id: "eufy-c28",
    rank: 8,
    badge: "Best for Carpet Homes",
    name: "eufy C28 Robot Vacuum and Mop Combo, 15,000 Pa, HydroJet Roller Mop",
    amazonUrl: "https://www.amazon.com/dp/B0FWK41WF2?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31MYUq-FSoL._SL500_.jpg",
    price: "$499.99",
    rating: "Customer favorite",
    reviews: "Widely purchased",
    specs: ["15,000Pa Suction", "HydroJet Roller Mop", "Premium Combo"],
    description:
      "The C28 posts the highest rated suction in this entire comparison at 15,000Pa, which is a meaningful advantage on thicker carpet where lower-suction combos tend to struggle the most. Its HydroJet roller mop is a different mopping mechanism than the flat pad used by most other models here, designed to scrub rather than just drag a damp pad across the floor.\n\nBecause carpet is where combo units vary the most, we'd specifically recommend confirming in the current listing whether the mop mechanism lifts clear of carpet automatically. Auto-lift on carpet is a distinct feature from simply having a mop attachment, and it matters a great deal if your home has carpet the robot needs to cross regularly rather than avoid.",
    bestFor: "Homes with significant carpet coverage who want the highest available suction rating in this comparison.",
    pros: [
      "Highest rated suction of any model in this comparison",
      "Roller-style HydroJet mop is a different, more active mopping mechanism than a flat pad",
    ],
    cons: [
      "Premium price matches the Qrevo S5V at the top of this list",
      "Confirm carpet auto-lift behavior on the current listing before buying if carpet coverage is extensive",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Judge vacuum and mop performance separately",
    explanation:
      "A high suction rating tells you about vacuuming, not mopping, and vice versa. A model that leads on suction, like the eufy C28 at 15,000Pa, is not automatically the best mopper, and a model built around a mopping feature, like the Qrevo S5V's FlexiArm edge mopping, is not automatically the strongest vacuum. Check both aspects independently rather than assuming one implies the other.",
  },
  {
    criterion: "Mop lift on carpet is a distinct feature",
    explanation:
      "Having a mop attachment is not the same as the mop automatically lifting clear of carpet. If your home has carpet the robot will cross regularly, confirm auto-lift specifically in the current listing rather than assuming any combo handles the transition well.",
  },
  {
    criterion: "Self-empty docks reduce, not eliminate, maintenance",
    explanation:
      "Even the more automated docks in this comparison, like the eufy Omni C20, still need the clean water tank refilled, the dirty water tank emptied, and detergent topped off on a regular basis. Budget for that ongoing routine rather than expecting a fully hands-off system.",
  },
  {
    criterion: "Suction power vs price tier",
    explanation:
      "Suction ratings in this comparison range from 5000Pa on the least expensive models up to 15,000Pa on the eufy C28. Higher suction generally costs more, but the roborock Q7 L5's 8,000Pa at a budget-tier price shows the relationship isn't perfectly linear, so compare suction-per-dollar rather than assuming price alone tracks performance.",
  },
  {
    criterion: "Water tank and detergent handling",
    explanation:
      "Combo docks vary in how they manage clean and dirty water, from simple manual tanks on budget models to automated fill-and-drain systems on premium docks. This affects how often you interact with the dock day to day, separate from how well the robot itself cleans.",
  },
  {
    criterion: "App and navigation quality",
    explanation:
      "LiDAR-based navigation, like the Roomba 105 Combo uses, tends to produce more consistent room mapping than budget models relying on simpler navigation. Better mapping generally means more efficient cleaning paths and fewer missed or repeated areas.",
  },
];

export const howWeEvaluated = [
  {
    title: "Vacuum and mop performance evaluated separately",
    description:
      "We researched suction ratings and mopping mechanisms as two separate systems rather than treating a single combo spec sheet as evidence of equally strong performance in both, since the two functions rely on different hardware.",
  },
  {
    title: "Dock automation and ongoing maintenance",
    description:
      "We compared how much manual involvement each dock still requires, from basic charging-only docks to self-empty and self-wash systems, and noted that even the more automated docks need periodic tank refills and detergent restocking.",
  },
  {
    title: "Carpet-specific mopping behavior",
    description:
      "We flagged where a listing specifically addresses carpet performance or mop lift versus where that detail isn't clearly stated, since auto-lift on carpet is a meaningfully different feature from simply including a mop attachment.",
  },
  {
    title: "Price-to-suction comparison across the lineup",
    description:
      "We compared rated suction against price across all eight models to identify where suction-per-dollar stood out, rather than ranking purely on the highest raw suction number.",
  },
  {
    title: "Review volume and rating where available",
    description:
      "For models with verified rating and review data, we factored that in as a signal of real-world reliability at scale. For newer or less-reviewed listings, we relied on qualitative buyer feedback signals rather than inventing numbers that aren't published.",
  },
];

export const howToChoose = [
  {
    subheading: "By Budget",
    intro: "Match your price ceiling to how much dock automation and suction you actually need.",
    table: {
      headers: ["Budget", "Recommended Pick"],
      rows: [
        ["Under $150", "Tikom G8000 Max, ROPVACNIC, or roborock Q7 L5"],
        ["$250 to $300, want strong suction and a proven track record", "iRobot Roomba 105 Combo or roborock Q10 S5+"],
        ["$375 and up, want the most dock automation or mopping innovation", "eufy Omni C20, roborock Qrevo S5V, or eufy C28"],
      ],
    },
  },
  {
    subheading: "By Flooring Type",
    intro: "Carpet coverage should weigh heavily in which combo makes sense for your home.",
    table: {
      headers: ["Home Type", "Recommended Pick"],
      rows: [
        ["Mostly hard flooring, minimal carpet", "roborock Q10 S5+"],
        ["Mixed hardwood and carpet", "eufy Omni C20"],
        ["Significant carpet coverage, want highest suction", "eufy C28"],
        ["Frequent corners and baseboards to mop", "roborock Qrevo S5V"],
      ],
    },
  },
  {
    subheading: "Self-Empty vs Basic Charging Dock",
    cards: [
      {
        label: "Self-empty or self-wash dock",
        text: "Cuts down significantly on daily hands-on maintenance. The iRobot Roomba 105 Combo, eufy Omni C20, roborock Qrevo S5V, and eufy C28 all include automated dock features, generally at a higher price.",
      },
      {
        label: "Basic charging dock",
        text: "Lower upfront cost but more manual dustbin emptying and mop pad rinsing. The Tikom G8000 Max, ROPVACNIC, and roborock Q7 L5 fall into this category and are best suited to buyers comfortable with that routine.",
      },
    ],
    note: "Even self-empty docks still need periodic tank refills, detergent top-offs, and pad or roller washing, so no combo in this comparison is fully maintenance-free.",
  },
  {
    subheading: "Suction Rating by Model",
    table: {
      headers: ["Model", "Rated Suction"],
      rows: [
        ["Tikom G8000 Max", "5000Pa"],
        ["ROPVACNIC", "5200Pa"],
        ["roborock Q7 L5", "8,000Pa"],
        ["roborock Q10 S5+", "10,000Pa"],
        ["eufy C28", "15,000Pa"],
      ],
    },
    note: "A high suction rating is a vacuum-specific number and does not by itself indicate mopping quality, which depends on the mop mechanism and dock's water handling.",
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You want the most automated dock maintenance, a specific mopping upgrade like edge reach or a roller-style mop, or the largest available review base to lean on. The eufy Omni C20, roborock Qrevo S5V, eufy C28, and iRobot Roomba 105 Combo cover those needs at higher prices.",
      },
      {
        label: "Save if",
        text: "You mainly want reliable daily vacuuming and mopping without the extra automation. The roborock Q7 L5, ROPVACNIC, and Tikom G8000 Max deliver the core function at roughly a quarter of the premium picks' price.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Does a robot vacuum and mop combo clean as well as running two separate robots?",
    a: "It depends on the specific model's mop mechanism and how well it lifts on carpet, but combo units have closed much of that gap. We'd still recommend researching vacuum performance and mop performance separately for any specific model rather than assuming a strong combined spec sheet means both functions are equally strong.",
  },
  {
    q: "Do I still need to clean the dock if it self-empties?",
    a: "Yes. Self-empty and self-wash docks reduce daily hands-on maintenance significantly, but the dust bag, clean and dirty water tanks, detergent, and mop pads or rollers all still need periodic attention. No combo dock in this comparison is fully maintenance-free.",
  },
  {
    q: "Will the mop damage my carpet?",
    a: "This depends on whether the specific model lifts the mop pad automatically when it detects carpet. That auto-lift behavior is a distinct feature from simply including a mop attachment, so check the current listing for that detail specifically if you have carpet the robot will cross regularly.",
  },
  {
    q: "Is a higher suction rating always worth paying more for?",
    a: "Not necessarily. Suction ratings in this comparison range from 5000Pa to 15,000Pa, and higher suction generally helps most on carpet and with pet hair. If your home is mostly hard flooring with light daily debris, a mid-range suction rating paired with a good mop system may serve you better than paying a premium for the highest number available.",
  },
  {
    q: "How much ongoing cost should I expect beyond the purchase price?",
    a: "Plan on replacement mop pads, dock filters or bags, and detergent solution as recurring costs, along with periodic descaling or cleaning of the water tanks. These costs are generally modest but not zero, regardless of how automated the dock is.",
  },
  {
    q: "Do all these models work with an app for scheduling and room mapping?",
    a: "Most current combo models include app control and scheduling, though navigation quality varies. LiDAR-based navigation, like on the iRobot Roomba 105 Combo, tends to produce more consistent mapping than simpler navigation systems on some budget models, so check the specific navigation type on the listing if precise room mapping matters to you.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
