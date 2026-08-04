export const guideSlug = "best-8-cup-coffee-makers";
export const guideTitle = "Best 8-Cup Coffee Makers";
export const metaTitle = "Best 8-Cup Coffee Makers (2026): 2 Genuine Models Compared";
export const metaDescription =
  "We researched current 8-cup drip coffee makers and found genuinely 8-cup-specific models are rare on Amazon. Here are the two we could verify, plus what to buy instead.";
export const mainKeyword = "8 cup coffee makers";
export const lastUpdated = "2026-08-04";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31wVxw3p+vL._SL500_.jpg";

export const introParagraphs = [
  "An 8-cup coffee maker is sized for one or two people, since a manufacturer cup is approximately 5 fluid ounces, so 8 cups works out to roughly 40 fluid ounces total, about 5 standard 8oz mugs. It sits between a single-serve machine and the far more common 10, 12, and 14-cup carafe models.\n\nWhen we pulled current listings for this size, most machines marketed loosely around the 8-cup label turned out to be 10 or 12-cup carafes with adjusted copy. We verified capacity against the stated ounces on each listing and found only two genuinely 8-cup-specific models currently available, both reviewed in full below, along with guidance on when a 10-cup machine with a good small-batch mode is the more practical buy.",
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
    id: "oxo-brew-8-cup",
    rank: 1,
    badge: "Best Overall",
    name: "OXO Brew 8-Cup Coffee Maker, Single-Serve, Thermal Carafe",
    amazonUrl: "https://www.amazon.com/dp/B07H9G93WK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31wVxw3p+vL._SL500_.jpg",
    price: "$194.03",
    rating: "4.0",
    reviews: "4,810 reviews",
    specs: ["Gold Cup Certified", "Double-wall thermal carafe", "Optional single-serve brew basket", "Rainmaker showerhead", "Built-in cleaning mode"],
    description:
      "The OXO Brew is Gold Cup Certified by the Specialty Coffee Association, meaning its BetterBrew precision technology holds water temperature between 194 and 205 degrees Fahrenheit to meet a recognized brewing standard rather than a marketing claim. Its double-wall vacuum-insulated thermal carafe holds heat for hours with no warming plate, and an optional single-serve brew basket lets the same machine handle one cup when you do not need the full 8.\n\nA rainmaker showerhead evenly saturates grounds for more consistent extraction, and a built-in cleaning mode helps manage mineral buildup. This is the more premium of the two genuine 8-cup machines we found, reflected clearly in its price.",
    bestFor: "Buyers who want SCA-certified brewing quality and a genuine thermal carafe at true 8-cup capacity.",
    pros: [
      "SCA Gold Cup Certified for verified brewing temperature standards",
      "Thermal carafe holds heat for hours without a warming plate",
      "Doubles as a single-serve brewer with the included basket",
    ],
    cons: [
      "Highest price in this comparison by a wide margin",
      "Larger investment than most people expect for an 8-cup size",
    ],
  },
  {
    id: "bonavita-8-cup",
    rank: 2,
    badge: "Best Fast Brew",
    name: "Bonavita 8 Cup Drip Coffee Maker Machine, One-Touch Pour Over (BV1901TS)",
    amazonUrl: "https://www.amazon.com/dp/B076PFMRGX?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41z647-T16L._SL500_.jpg",
    price: "$189.95",
    rating: "3.9",
    reviews: "10,392 reviews",
    specs: ["Brews full 8 cups in 6 minutes", "1500-watt heater", "SCA certified", "Optional bloom pre-infusion", "Dishwasher-safe carafe lid and basket"],
    description:
      "Bonavita's BV1901TS brews a full 8-cup carafe in about 6 minutes using a 1500-watt heater that maintains the 194 to 205 degree range associated with SCA-certified brewing. A specially designed showerhead evenly saturates grounds for consistent extraction, and an optional bloom pre-infusion mode gently pre-wets grounds before the main brew for a fuller-tasting cup.\n\nLike the OXO, it uses a stainless steel double-wall thermal carafe with strong heat retention, and the carafe lid, filter basket, and showerhead are all dishwasher safe, which simplifies routine cleaning.",
    bestFor: "Buyers who want the fastest full 8-cup brew time along with an optional bloom step for richer flavor.",
    pros: [
      "Brews a full 8-cup carafe in about 6 minutes",
      "SCA-certified temperature control with optional bloom pre-infusion",
      "Dishwasher-safe carafe lid, basket, and showerhead",
    ],
    cons: [
      "Similarly high price to the OXO, both well above typical 10-cup machines",
      "No built-in single-serve basket option like the OXO",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Confirming genuine 8-cup capacity",
    explanation:
      "Most listings marketed around this size are actually 10 or 12-cup carafes. Check the stated ounce capacity directly, roughly 40oz for a genuine 8-cup machine, before trusting the cup number in the title alone.",
  },
  {
    criterion: "SCA certification as a quality signal",
    explanation:
      "Both models we verified as genuinely 8-cup carry Specialty Coffee Association Gold Cup or SCA certification, meaning independent verification of brew temperature and extraction consistency, a stronger signal than uncertified marketing claims at this price point.",
  },
  {
    criterion: "Minimum batch brewing",
    explanation:
      "The OXO includes an optional single-serve brew basket for days you do not need a full 8 cups; the Bonavita does not offer this, so factor that in if your household size varies day to day.",
  },
  {
    criterion: "Thermal carafe heat retention",
    explanation:
      "Both models here use a double-wall thermal carafe rather than a glass carafe on a warming plate, meaning coffee stays hot for hours without power, at the cost of a heavier pour.",
  },
  {
    criterion: "Price relative to a larger machine",
    explanation:
      "Both genuine 8-cup models here run close to $190 to $195, meaningfully more than many 10 or 12-cup machines. Decide whether the smaller footprint and SCA certification are worth that premium for your household.",
  },
  {
    criterion: "Whether a 10-cup machine actually serves you better",
    explanation:
      "If price matters more than a compact true-8-cup footprint, a 10-cup machine brews only slightly more water and commonly costs less than either model reviewed here.",
  },
];

export const howWeEvaluated = [
  {
    title: "Verified genuine 8-cup capacity",
    description:
      "We checked each listing's stated ounce capacity to filter out 10 and 12-cup machines marketed loosely around the 8-cup size, keeping only models that genuinely brew close to 40oz.",
  },
  {
    title: "Brewing certification and temperature control",
    description:
      "We noted SCA and Gold Cup certification where present, since these reflect independently verified brew temperature standards rather than uncertified marketing language.",
  },
  {
    title: "Minimum batch and single-serve flexibility",
    description:
      "We checked whether each model offers a way to brew less than a full 8-cup pot without sacrificing quality.",
  },
  {
    title: "Carafe type and heat retention",
    description:
      "We compared thermal carafe insulation and pour comfort, since both verified models here use double-wall thermal carafes rather than glass.",
  },
  {
    title: "Price versus a 10-cup alternative",
    description:
      "We weighed each model's price against typical 10-cup machines to help buyers judge whether the smaller true-8-cup footprint is worth the premium.",
  },
];

export const howToChoose = [
  {
    subheading: "Why This Category Is Thin",
    intro:
      "Most Amazon listings marketed around '8 cups' are actually 10 or 12-cup carafes with adjusted title copy. After verifying stated ounce capacities, only two current models genuinely brew close to a true 8-cup, 40oz output.",
    note: "If neither of the two verified picks below fits your budget, a 10-cup machine is the more practical and typically less expensive alternative, brewing only slightly more water per pot.",
  },
  {
    subheading: "Understanding '8 Cups'",
    table: {
      headers: ["Manufacturer Cups", "Fluid Ounces", "Standard 8oz Mugs"],
      rows: [
        ["8 cups", "~40 fl oz", "~5 mugs"],
        ["10 cups (for comparison)", "~50 fl oz", "~6.25 mugs"],
      ],
    },
  },
  {
    subheading: "By Priority",
    table: {
      headers: ["What Matters Most", "Recommended Pick"],
      rows: [
        ["Fastest full-pot brew time", "Bonavita BV1901TS, about 6 minutes"],
        ["Flexibility to brew a single cup too", "OXO Brew 8-Cup with its optional basket"],
      ],
    },
  },
  {
    subheading: "8-Cup vs 6-Cup vs 10-Cup",
    cards: [
      {
        label: "Choose 6-cup",
        text: "If you almost always brew for one person and want the smallest possible reservoir and footprint, look outside this comparison at a dedicated 6-cup model.",
      },
      {
        label: "Choose 10-cup instead",
        text: "If price matters more than a true 8-cup footprint, a 10-cup machine brews only about 10oz more water per pot and commonly costs less than either model here.",
      },
    ],
  },
  {
    subheading: "SCA Certification: Is It Worth Paying For",
    note: "Both models reviewed here carry SCA-related certification, reflecting independently verified brew temperature performance. That certification is part of why both sit near $190 to $195. If certified brewing quality is not a priority for you, a standard uncertified 10-cup machine will cost significantly less for similar practical output.",
  },
];

export const faq = [
  {
    q: "Why are there so few genuine 8-cup coffee makers?",
    a: "Most current listings marketed around '8 cups' are actually 10 or 12-cup carafes with adjusted title copy. After checking stated ounce capacities directly, we found only two models currently available that genuinely brew close to a true 8-cup, 40oz output.",
  },
  {
    q: "Does an 8-cup coffee maker really make 8 mugs of coffee?",
    a: "No. A manufacturer cup is about 5 fluid ounces, so 8 cups works out to roughly 40 fluid ounces total, about 5 standard 8oz mugs.",
  },
  {
    q: "Should I just buy a 10-cup machine instead?",
    a: "If price matters more than having a true 8-cup footprint, yes. A 10-cup machine brews only about 10oz more water per pot and commonly costs meaningfully less than either genuine 8-cup model in this comparison.",
  },
  {
    q: "What does SCA or Gold Cup certification mean?",
    a: "It means the Specialty Coffee Association has independently verified that the machine brews within a recognized temperature range, generally 194 to 205 degrees Fahrenheit, for consistent extraction. Both models reviewed here carry this certification, which is part of why they cost more than typical uncertified drip machines.",
  },
  {
    q: "Can either of these brew a single cup instead of a full pot?",
    a: "The OXO Brew includes an optional single-serve brew basket for exactly this. The Bonavita does not offer a single-serve accessory, so it is better suited to households that consistently brew closer to the full 8-cup capacity.",
  },
  {
    q: "How often do these need descaling?",
    a: "Roughly every 2 to 3 months with average water hardness, more often with hard water. Both models here include a built-in cleaning or descale-related mode to help manage mineral buildup.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
