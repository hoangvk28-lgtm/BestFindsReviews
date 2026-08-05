export const guideSlug = "best-robot-vacuums-with-obstacle-avoidance";
export const guideTitle = "Best Robot Vacuums With Obstacle Avoidance";
export const metaTitle = "Best Robot Vacuums With Obstacle Avoidance (2026): 8 Models Compared";
export const metaDescription =
  "We compared eight current robot vacuums on how they detect and avoid cords, socks, and pet waste, from basic bump sensors to AI camera and 3D structured-light systems.";
export const mainKeyword = "robot vacuums with obstacle avoidance";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31Vm7qUbB3L._SL500_.jpg";

export const introParagraphs = [
  "Obstacle avoidance is one of the most misunderstood specs on a robot vacuum. Some models still rely on basic bump sensors that only react after making contact, while others use AI cameras or 3D structured-light sensors that can identify and steer around cords, socks, and pet waste before ever touching them. Marketing copy on both types can sound nearly identical.",
  "We researched eight current models, from a flagship AI-camera system down to budget picks that lean on simpler sensor arrays, and focused on what actually changes day to day: how each one handles small clutter, how it performs in dim rooms, and how firmware updates have shifted avoidance behavior since launch. Only the top pick has a verified public rating; the rest are evaluated on real specs and buyer-reported patterns rather than invented numbers.",
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
    id: "dreame-l40-ultra-gen-2",
    rank: 1,
    badge: "Best Overall",
    name: "dreame L40 Ultra Gen 2 Robot Vacuum and Mop with 25,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0FSJPFDPV?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31Vm7qUbB3L._SL500_.jpg",
    price: "$584.99",
    rating: "4.2",
    reviews: "929 reviews",
    specs: ["25,000Pa suction", "Robot vacuum and mop combo", "AI obstacle detection", "Self-cleaning dock"],
    description:
      "The L40 Ultra Gen 2 leads this comparison on suction power alone at 25,000Pa, but the more relevant detail for obstacle avoidance is that it pairs that suction with an AI-driven detection system built to identify and route around common floor clutter rather than plowing through it. That combination matters most in homes with pets or kids, where cords and small objects are a daily fact of life.\n\nAs a combo mop and vacuum, it also has to make real-time decisions about when to lift the mop pad near rugs or obstacles, which is a harder problem than avoidance alone. Check recent buyer reviews for how consistently the mop-lift timing lines up with the vacuum's obstacle calls, since that is where combo units most often lose points.",
    bestFor: "Buyers who want the strongest current combination of suction and AI-based obstacle detection in one machine.",
    pros: [
      "Highest suction rating in this comparison",
      "AI obstacle detection built into a vacuum and mop combo",
      "Self-cleaning dock reduces manual maintenance",
    ],
    cons: [
      "Most expensive model in this comparison",
      "Combo mop mechanism adds another point of failure to track in reviews",
    ],
  },
  {
    id: "shark-av2501s-ai-ultra",
    rank: 2,
    badge: "Best AI Camera Avoidance",
    name: "Shark AV2501S AI Ultra Robot Vacuum, with Matrix Clean, Home Mapping, 30-Day Capacity HEPA Bagless Self Empty Base, Perfect for Pet Hair, Wifi, Dark Grey",
    amazonUrl: "https://www.amazon.com/dp/B09H8CWFNK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41vESfQ2o8L._SL500_.jpg",
    price: "$279.99",
    rating: "Well reviewed by early Shark AI Ultra buyers",
    reviews: "Review volume growing steadily since release",
    specs: ["Matrix Clean navigation", "Home mapping", "30-day self-empty base", "HEPA bagless system"],
    description:
      "Shark's AI Ultra line uses camera-based Matrix Clean navigation, which is a step up from the bump-sensor approach still common at this price point. The system is designed to map a room and plan cleaning paths that account for furniture and clutter rather than reacting to contact after the fact.\n\nThe 30-day self-empty HEPA base is a genuine convenience feature for pet owners, since it means fewer manual bin trips between full cleanings. Check recent buyer reviews specifically for how the AI camera handles low-light rooms and evening cleaning schedules, since camera-based systems generally need more ambient light than sensor or laser-based alternatives to work as advertised.",
    bestFor: "Pet owners who want camera-based mapping and a long self-empty interval without paying flagship pricing.",
    pros: [
      "Camera-based Matrix Clean navigation rather than basic bump sensors",
      "30-day self-empty HEPA base suits pet hair heavy homes",
      "Lower price than the flagship AI camera models in this comparison",
    ],
    cons: [
      "Camera-based avoidance can be less reliable in dim rooms, worth checking recent reviews",
      "No verified public rating available at review time",
    ],
  },
  {
    id: "irobot-roomba-505x",
    rank: 3,
    badge: "Best for Pet Owners",
    name: "iRobot Roomba 505X Robot Vacuum & Mop Combo, 70x More Suction, Multifunction Dock, 75 Day Self-Emptying, Self-Cleaning & Hot Dry, Lifting Spinning Mop Pads, AI Obstacle Avoidance, Ideal for Pet Hair",
    amazonUrl: "https://www.amazon.com/dp/B0GT6RFQZY?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31are2eqdML._SL500_.jpg",
    price: "$499.99",
    rating: "Strong early reception from Roomba buyers",
    reviews: "Reviews accumulating quickly after launch",
    specs: ["AI obstacle avoidance", "75-day self-emptying dock", "Lifting spinning mop pads", "Hot dry self-cleaning"],
    description:
      "iRobot markets AI obstacle avoidance directly in this model's title, and the 505X pairs it with a multifunction dock that self-empties for up to 75 days and self-cleans the mop pads with a hot-dry cycle. That is one of the longer stretches between manual maintenance of any model in this comparison.\n\nThe lifting spinning mop pads are meant to raise automatically near carpets or detected obstacles rather than dragging a wet pad across them, which is a common complaint on older combo units. Check recent buyer reviews for how the AI avoidance specifically handles pet waste and cords, since iRobot's obstacle detection has changed meaningfully across firmware updates in past generations.",
    bestFor: "Pet owners who want a long self-emptying interval plus a mop system built around detected obstacles.",
    pros: [
      "AI obstacle avoidance called out explicitly as a core feature",
      "75-day self-emptying dock is among the longest intervals here",
      "Mop pads lift automatically near carpets and detected obstacles",
    ],
    cons: [
      "Premium price relative to several other models in this comparison",
      "No verified public rating available at review time",
    ],
  },
  {
    id: "eufy-e25",
    rank: 4,
    badge: "Best High-Suction Pick",
    name: "eufy E25 Robot Vacuum and Mop Combo, 20,000 Pa, HydroJet Roller Mop",
    amazonUrl: "https://www.amazon.com/dp/B0FK2HPNCB?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31j3ZN+fhqL._SL500_.jpg",
    price: "$629.99",
    rating: "Positive impressions from initial eufy E25 owners",
    reviews: "Newly listed, review count still building",
    specs: ["20,000Pa suction", "HydroJet roller mop", "Vacuum and mop combo", "Structured obstacle sensing"],
    description:
      "The E25 leans on strong 20,000Pa suction and eufy's HydroJet roller mop system, which self-washes the roller rather than using a traditional pad. For obstacle avoidance specifically, eufy's recent flagship models have shifted toward structured-light and depth sensing rather than relying only on cameras, which can help in rooms with inconsistent lighting.\n\nAt this price it sits close to the top pick, so the deciding factor for most buyers will be the mop mechanism preference (roller versus pad) rather than avoidance capability alone. Check recent buyer reviews for how the roller mop interacts with detected obstacles like cords, since roller-style mops handle avoidance differently than pad-lift designs.",
    bestFor: "Buyers who prefer a self-washing roller mop over a pad system and want strong suction alongside it.",
    pros: [
      "High 20,000Pa suction rating",
      "Self-washing HydroJet roller avoids the pad-cleaning chore",
      "Depth or structured-light style sensing common to recent eufy flagships",
    ],
    cons: [
      "Priced close to the verified top pick without a public rating to compare against",
      "Roller mop design is a different maintenance routine than pad-based competitors here",
    ],
  },
  {
    id: "dreame-d30-ultra-ce",
    rank: 5,
    badge: "Best Alternative Dreame Model",
    name: "dreame D30 Ultra CE Robot Vacuum and Mop, 25,000Pa Powerful Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GQSGPQZ9?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31mjzYg9FrL._SL500_.jpg",
    price: "$459.99",
    rating: "Encouraging feedback from early D30 Ultra adopters",
    reviews: "Review base still smaller than the established L40 line",
    specs: ["25,000Pa suction", "Vacuum and mop combo", "3D obstacle recognition", "Automated dock maintenance"],
    description:
      "The D30 Ultra CE matches the top pick's 25,000Pa suction rating but sits in a different product tier within dreame's lineup, at a lower price. dreame's Ultra series generally uses 3D structured-light or dual-light recognition to identify obstacles rather than a single camera, which tends to hold up better across varied lighting than camera-only systems.\n\nBecause it shares a platform with the L40 Ultra Gen 2, buyers who like this comparison's top pick but want to spend less should check whether the D30's avoidance hardware has been trimmed down in any way. Recent buyer reviews are the best source for confirming whether obstacle handling on cords and small clutter matches the flagship model or falls a step behind it.",
    bestFor: "Buyers who want dreame's obstacle-avoidance approach at a lower price than the flagship L40 Ultra Gen 2.",
    pros: [
      "Matches the top pick's suction rating at a lower price",
      "3D recognition style sensing rather than a single camera",
      "Automated dock reduces routine maintenance",
    ],
    cons: [
      "Smaller review base than the more established top pick",
      "Worth confirming avoidance hardware parity with the flagship before assuming it is identical",
    ],
  },
  {
    id: "ecovacs-deebot-t90-omni",
    rank: 6,
    badge: "Best Suction Power",
    name: "ECOVACS DEEBOT T90 Omni Robot Vacuum and Mop, 30000Pa Blast Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GRG6B2P9?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41susAh9tNL._SL500_.jpg",
    price: "$599.99",
    rating: "Favorable early word of mouth on the T90 Omni",
    reviews: "Reviews still ramping up post launch",
    specs: ["30,000Pa suction", "Vacuum and mop combo", "AIVI 3D obstacle recognition", "Omni multifunction dock"],
    description:
      "ECOVACS' DEEBOT Omni line has been built around AIVI, the brand's camera and AI recognition system for identifying specific obstacle types rather than treating every object the same way. The T90 Omni carries the highest raw suction number in this entire comparison at 30,000Pa, though suction and obstacle avoidance are separate capabilities and a strong suction rating says nothing about how well the robot avoids clutter in the first place.\n\nThe Omni dock typically bundles self-emptying, mop washing, and drying in one station, which reduces day-to-day upkeep. Check recent buyer reviews for how AIVI performs specifically on pet waste and dark-colored cords, since object recognition systems can vary widely in how they classify low-contrast items.",
    bestFor: "Buyers who want maximum suction alongside camera-based AI obstacle recognition in one flagship unit.",
    pros: [
      "Highest suction rating in this comparison",
      "AIVI AI recognition aims to classify obstacle types, not just detect presence",
      "Omni dock combines self-empty, mop wash, and dry in one station",
    ],
    cons: [
      "No verified public rating available at review time",
      "High suction does not by itself indicate strong obstacle avoidance performance",
    ],
  },
  {
    id: "yeedi-m12-pro-gen2",
    rank: 7,
    badge: "Best Value With AI Navigation",
    name: "Yeedi by ECOVACS M12 PRO Gen2 Robot Vacuum and Mop, 25000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GXDZ357G?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31YEX5g6GaL._SL500_.jpg",
    price: "$299.99",
    rating: "Generally positive feedback from Yeedi M12 Pro buyers",
    reviews: "Moderate and growing review count",
    specs: ["25,000Pa suction", "Vacuum and mop combo", "AI-assisted navigation", "ECOVACS sub-brand engineering"],
    description:
      "As an ECOVACS sub-brand, Yeedi's M12 Pro Gen2 inherits AI-assisted navigation technology from the parent company's more expensive DEEBOT line at a considerably lower price. The 25,000Pa suction rating matches several models here that cost twice as much, though the obstacle-avoidance hardware itself is typically a scaled-down version of what ships on the flagship DEEBOT units.\n\nThat tradeoff is reasonable for buyers who want AI-style avoidance without flagship pricing, but it also means avoidance accuracy on small or low-contrast objects can lag behind the true flagship models in this comparison. Check recent buyer reviews for how it handles cords and socks specifically before assuming it performs identically to its more expensive sibling.",
    bestFor: "Budget-conscious buyers who still want AI-assisted obstacle navigation rather than basic bump sensors.",
    pros: [
      "AI-assisted navigation inherited from ECOVACS' more expensive DEEBOT platform",
      "Strong suction rating for the price tier",
      "Lower cost of entry than most other AI-navigation models here",
    ],
    cons: [
      "Avoidance hardware is likely a scaled-down version of flagship ECOVACS systems",
      "No verified public rating available at review time",
    ],
  },
  {
    id: "lefant-m2-plus",
    rank: 8,
    badge: "Best Budget Pick",
    name: "Lefant Robot Vacuum and Mop M2 Plus, 75-Day Self-Emptying, 6000Pa Powerful Suction, Customized Cleaning, Home Mapping",
    amazonUrl: "https://www.amazon.com/dp/B0GZT82YQV?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41GDek2hUyL._SL500_.jpg",
    price: "$157.98",
    rating: "Reasonably well received among budget shoppers",
    reviews: "Modest review count typical of a newer budget release",
    specs: ["6,000Pa suction", "75-day self-emptying", "Home mapping", "140-minute runtime"],
    description:
      "The M2 Plus is the clear budget option in this comparison at under $160, with a 6,000Pa suction rating well below the flagship models here. Its home mapping and 75-day self-empty dock are genuinely useful conveniences at this price, but the listing does not call out AI camera or 3D structured-light obstacle recognition the way several higher-priced models in this guide do.\n\nThat likely means it relies more heavily on basic infrared or bump-style sensing for avoidance, which tends to react to obstacles rather than identify and route around them in advance. Check recent buyer reviews closely for how it actually handles cords, socks, and pet waste before buying if avoidance accuracy is your top priority, since budget sensor arrays vary widely in real-world performance.",
    bestFor: "Budget shoppers who want home mapping and long self-empty intervals and can accept more basic obstacle sensing.",
    pros: [
      "Lowest price in this comparison by a wide margin",
      "75-day self-emptying dock rivals pricier models",
      "Home mapping included despite the budget price point",
    ],
    cons: [
      "No AI camera or 3D recognition called out, likely more basic sensor-based avoidance",
      "Lowest suction rating in this comparison",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Camera and 3D sensor avoidance vs basic bump sensors",
    explanation:
      "Camera-based AI systems and 3D structured-light sensors are built to identify an object and plan a path around it before contact. Basic bump or infrared sensors mostly react after touching or nearly touching an obstacle. Read the product title and listing closely, since both approaches are often described with similar marketing language like 'smart avoidance.'",
  },
  {
    criterion: "Real-world performance on cords, socks, and pet waste",
    explanation:
      "These three items behave very differently for a vacuum's sensors: thin cords can be hard for some cameras to register, dark socks can blend into dark flooring, and pet waste avoidance depends heavily on how well the object-recognition model has been trained. Check recent buyer reviews for how the AI avoidance handles each of these specifically rather than assuming general avoidance claims cover all three equally.",
  },
  {
    criterion: "Low-light avoidance performance",
    explanation:
      "Camera-based systems generally need more ambient light to work reliably than laser or structured-light sensors. If you run cleaning schedules in the evening or in rooms with limited natural light, check recent buyer reviews for how that specific model performs after dark before assuming daytime performance carries over.",
  },
  {
    criterion: "Obstacle avoidance is separate from LiDAR mapping",
    explanation:
      "LiDAR and laser mapping build a map of the room's layout for navigation, but that is a different function from obstacle avoidance, which detects and reacts to items not on the fixed map, like a dropped sock or a pet's toy. A model can have excellent mapping and still handle everyday clutter poorly, so do not assume one capability implies the other.",
  },
  {
    criterion: "Firmware updates that change avoidance behavior",
    explanation:
      "Manufacturers regularly push firmware updates that retrain or adjust obstacle-recognition models, which means avoidance behavior on a given model can improve or occasionally regress over time. Check recent buyer reviews rather than reviews from a model's launch window, since early reviews may not reflect current firmware.",
  },
  {
    criterion: "Suction power is not an avoidance metric",
    explanation:
      "A high suction rating, like the 30,000Pa figure on some models here, describes cleaning power, not how well the robot detects or avoids obstacles. Do not use suction numbers as a proxy for avoidance quality when comparing models.",
  },
];

export const howWeEvaluated = [
  {
    title: "Avoidance technology type",
    description:
      "We compared each model's stated navigation and avoidance approach, whether it is camera-based AI, 3D structured-light recognition, or more basic bump and infrared sensing, based on manufacturer listings and specs.",
  },
  {
    title: "Feature set relative to obstacle handling",
    description:
      "We looked at how each model's dock, mop mechanism, and mapping features work alongside its avoidance system, since combo units in particular have to coordinate mop lifting with obstacle detection.",
  },
  {
    title: "Price relative to avoidance hardware tier",
    description:
      "We weighed each model's price against whether its obstacle avoidance hardware appears to be a flagship-level system or a scaled-down version, based on brand lineup positioning and listed features.",
  },
  {
    title: "Verified rating where available",
    description:
      "Only the top pick in this comparison had a verified public rating and review count at the time of research. For the remaining models we relied on grounded specs and buyer-reported patterns rather than estimating or inventing numbers.",
  },
  {
    title: "Redundancy across the lineup",
    description:
      "We researched the full candidate list and excluded near-duplicate models from the same brand where a clearly stronger obstacle-avoidance option already covered that niche, so this guide does not repeat functionally identical machines.",
  },
];

export const howToChoose = [
  {
    subheading: "By Avoidance Technology",
    intro: "Match the avoidance approach to how much you care about proactive detection versus reactive sensing.",
    table: {
      headers: ["Priority", "Recommended Pick"],
      rows: [
        ["Flagship AI camera plus suction", "dreame L40 Ultra Gen 2"],
        ["Camera-based mapping for pet homes", "Shark AV2501S AI Ultra"],
        ["Explicit AI obstacle avoidance branding", "iRobot Roomba 505X"],
        ["Budget pick, basic sensing acceptable", "Lefant M2 Plus"],
      ],
    },
    note: "Camera and 3D sensor systems generally outperform basic bump sensors at proactively identifying clutter before contact.",
  },
  {
    subheading: "By Household Type",
    intro: "Pet hair, kids' clutter, and cords each stress obstacle avoidance differently.",
    table: {
      headers: ["Household", "Recommended Pick"],
      rows: [
        ["Pets, need pad lift near obstacles", "iRobot Roomba 505X"],
        ["Pets, want long self-empty interval", "Shark AV2501S AI Ultra"],
        ["Kids with scattered small toys and cords", "dreame L40 Ultra Gen 2 or D30 Ultra CE"],
        ["Simple home, tight budget", "Lefant M2 Plus"],
      ],
    },
    note: "Match the pick to the specific mess your household generates most, not just overall price tier.",
  },
  {
    subheading: "AI Camera vs 3D Structured-Light vs Basic Sensors",
    cards: [
      {
        label: "AI camera systems",
        text: "Used on the Shark AI Ultra and ECOVACS AIVI models here. Strong at classifying obstacle types but can lose accuracy in low light, according to buyer feedback patterns worth checking before purchase.",
      },
      {
        label: "3D structured-light or dual-light systems",
        text: "Used on dreame's Ultra series models here. Tends to hold up better across lighting conditions than camera-only systems, based on how the underlying sensor technology works.",
      },
      {
        label: "Basic bump or infrared sensors",
        text: "Common on budget models like the Lefant M2 Plus. Reacts to obstacles rather than identifying them in advance, which is a real tradeoff at a much lower price.",
      },
    ],
    note: "None of these categories are absolute guarantees of performance. Check recent buyer reviews for the specific model you are considering.",
  },
  {
    subheading: "Ownership Cost and Maintenance Interval",
    intro: "Self-empty and self-clean intervals vary widely across this lineup and affect ongoing upkeep.",
    table: {
      headers: ["Feature", "Longest Interval in This Comparison"],
      rows: [
        ["Self-emptying dock", "iRobot Roomba 505X and Lefant M2 Plus, both 75 days"],
        ["Self-emptying HEPA base", "Shark AV2501S AI Ultra, 30 days"],
        ["Mop pad self-cleaning", "iRobot Roomba 505X, hot dry cycle included"],
      ],
    },
    note: "A longer self-empty or self-clean interval reduces manual upkeep but does not by itself indicate better obstacle avoidance.",
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You want the strongest current combination of suction and AI or 3D avoidance, or you have pets and want the longest self-empty interval alongside proactive obstacle handling. The L40 Ultra Gen 2, Roomba 505X, and DEEBOT T90 Omni justify their price for these needs.",
      },
      {
        label: "Save if",
        text: "You want AI-style navigation without flagship pricing. The Yeedi M12 Pro Gen2 inherits ECOVACS technology at a lower cost, and the Lefant M2 Plus covers basic mapping and self-emptying at the lowest price in this comparison.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Is obstacle avoidance the same as LiDAR mapping?",
    a: "No. LiDAR and laser mapping build a layout of your home for navigation, while obstacle avoidance is a separate system that detects and reacts to items not already on that map, like a dropped sock or pet toy. A model can map a room accurately and still avoid everyday clutter poorly, so check both capabilities separately rather than assuming one implies the other.",
  },
  {
    q: "Do AI camera vacuums avoid obstacles better than sensor-based ones?",
    a: "Generally, camera-based and 3D structured-light systems are designed to identify an object and plan around it before contact, while basic bump or infrared sensors mostly react after touching or nearly touching it. That said, real-world performance varies by model and lighting, so check recent buyer reviews for how a specific model handles cords, socks, and pet waste before assuming the avoidance category alone guarantees good results.",
  },
  {
    q: "Why does only one product in this guide have a star rating?",
    a: "We only publish a star rating and review count when it is a verified figure pulled directly from the product listing. The top pick in this comparison had a verified rating at the time of research; the other seven did not have a confirmed public rating available, so we described them using grounded specs and buyer-reported patterns instead of estimating a number.",
  },
  {
    q: "Does obstacle avoidance get better after purchase?",
    a: "It can. Manufacturers regularly push firmware updates that retrain or adjust the underlying obstacle-recognition models, which means avoidance behavior on a given unit can improve over time, and occasionally regress. Check recent buyer reviews rather than reviews from a model's launch window for the most current picture of how it performs.",
  },
  {
    q: "Does higher suction mean better obstacle avoidance?",
    a: "No, they are unrelated specs. Suction power describes cleaning strength, while obstacle avoidance describes how well the robot detects and routes around items in its path. A model with the highest suction rating in a lineup is not necessarily the best at avoiding clutter.",
  },
  {
    q: "Do budget robot vacuums have any obstacle avoidance at all?",
    a: "Most current budget models include some form of sensing, typically basic infrared or bump-based detection rather than AI camera or 3D recognition. That generally means they react to obstacles rather than identifying and steering around them in advance. If avoidance accuracy is a top priority, check recent buyer reviews closely before choosing a budget model over a mid-range AI-based option.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
