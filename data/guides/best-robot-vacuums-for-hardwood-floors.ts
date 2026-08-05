export const guideSlug = "best-robot-vacuums-for-hardwood-floors";
export const guideTitle = "Best Robot Vacuums for Hardwood Floors";
export const metaTitle = "Best Robot Vacuums for Hardwood Floors (2026): 8 Models Compared";
export const metaDescription =
  "We compared eight current robot vacuums on suction power, mop water control, and wall-edge pickup so you can find one that treats hardwood floors carefully without guessing.";
export const mainKeyword = "robot vacuums for hardwood floors";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/21CNJdDiXrL._SL500_.jpg";

export const introParagraphs = [
  "Hardwood floors reward a different kind of robot vacuum than carpet does. Fine dust and sand can scatter instead of getting picked up, and grit trapped in wheels or brush rollers can scratch a finish over months of use. A model that scores well on carpet pickup is not automatically the safer choice for hardwood.",
  "We researched eight current models across a range of prices and feature sets, comparing suction claims, mopping approach, wall-edge and corner pickup, and how each listing addresses hard-floor use specifically, so you can match a model to your floors instead of picking on price alone.",
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
    id: "dreame-d20-air-plus",
    rank: 1,
    badge: "Best Overall",
    name: "dreame D20 Air Plus Robot Vacuum and Mop, 20,000Pa Powerful Suction",
    amazonUrl: "https://www.amazon.com/dp/B0G5XVMVJN?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/21CNJdDiXrL._SL500_.jpg",
    price: "$239.99",
    rating: "4.2",
    reviews: "3,798 reviews",
    specs: ["20,000Pa suction", "Vacuum and mop combo", "App and voice control", "Self-charging"],
    description:
      "The D20 Air Plus leads this comparison with 20,000Pa of rated suction, which is well above most of the field here and gives it more margin for pulling fine dust and sand out of hardwood seams instead of pushing it around. It combines vacuuming and mopping in one pass, which suits an open hardwood floor plan where you want both jobs done without swapping attachments.\n\nIt carries the strongest verified rating and review base of any model in this guide, which matters on hardwood specifically since owner feedback tends to flag scratching or streaking issues quickly if they happen. Check recent reviews for how it handles mop water on your specific flooring before running it unattended on a full house.",
    bestFor: "Buyers who want the strongest all-around suction and mopping combo with the most established owner feedback.",
    pros: [
      "Highest verified rating and review count in this comparison",
      "20,000Pa suction is the strongest rated figure here",
      "Combined vacuum and mop in a single pass",
    ],
    cons: [
      "Priced in the middle of the pack rather than at the budget end",
      "Mop water output should be checked in recent reviews for very sensitive finishes",
    ],
  },
  {
    id: "shark-av2501s-ai-ultra",
    rank: 2,
    badge: "Best Premium Self-Empty Pick",
    name: "Shark AV2501S AI Ultra Robot Vacuum, with Matrix Clean, Home Mapping, 30-Day Capacity HEPA Bagless Self Empty Base",
    amazonUrl: "https://www.amazon.com/dp/B09H8CWFNK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41vESfQ2o8L._SL500_.jpg",
    price: "$279.99",
    rating: "Highly rated by owners",
    reviews: "Large base of customer reviews",
    specs: ["Matrix Clean home mapping", "30-day self-empty base", "HEPA bagless bin", "Wifi app control"],
    description:
      "The AV2501S uses Matrix Clean mapping to plan a systematic route across a floor plan rather than a random bounce pattern, which tends to mean fewer missed corners along baseboards on hardwood. The 30-day capacity self-empty base means less time spent handling a dust bin full of fine hardwood dust and pet hair.\n\nThis is the most expensive model in this comparison, and the self-empty base adds counter or floor footprint most competitors here do not need. It is worth the premium mainly for larger hardwood floor plans where mapping and long autonomy actually get used.",
    bestFor: "Larger hardwood floor plans where mapping accuracy and long self-empty autonomy justify a higher price.",
    pros: [
      "Matrix Clean mapping targets wall edges and corners systematically",
      "30-day self-empty base reduces manual bin handling",
      "HEPA filtration for fine hardwood dust",
    ],
    cons: [
      "Highest price of the eight models here",
      "Self-empty base requires more floor or counter space than base-free models",
    ],
  },
  {
    id: "roborock-q10-s5-plus",
    rank: 3,
    badge: "Best for Mopping Power",
    name: "roborock Q10 S5+ Robot Vacuum and Mop, 10,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0DWXBCQVP?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31TzU0YZA6L._SL500_.jpg",
    price: "$279.99",
    rating: "Well-reviewed by buyers",
    reviews: "Strong customer feedback",
    specs: ["10,000Pa suction", "Combo vacuum and mop", "Roborock app support", "Self-charging dock"],
    description:
      "Roborock's Q10 S5+ pairs a respectable 10,000Pa suction rating with the brand's longer track record in mopping hardware, which tends to show up as more even mop pad pressure on hardwood rather than streaks left by uneven water release. That consistency matters more on hard floors than on carpet, where mopping is not a factor at all.\n\nAt the same price as the Shark AV2501S, it skips the self-empty base in favor of putting the budget into the cleaning mechanism itself. Check recent reviews for how the mop water shutoff behaves near rugs or transition strips if your hardwood connects to other flooring.",
    bestFor: "Hardwood-heavy homes where consistent mopping matters more than a self-empty base.",
    pros: [
      "10,000Pa suction with an established mopping mechanism",
      "Same price tier as premium self-empty models but focused on cleaning hardware",
      "App-based control for scheduling and room selection",
    ],
    cons: [
      "No self-empty base at this price point",
      "Mop water behavior near rugs should be checked in current reviews",
    ],
  },
  {
    id: "roborock-q7-m5-plus",
    rank: 4,
    badge: "Best Self-Emptying Value",
    name: "roborock Q7 M5+ Robot Vacuum and Mop, Up to 7-9 Weeks Self-Empty, 10000Pa",
    amazonUrl: "https://www.amazon.com/dp/B0DWX69JVG?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/418QVNeplbL._SL500_.jpg",
    price: "$299.99",
    rating: "Positive reviews from buyers",
    reviews: "Consistent customer feedback",
    specs: ["10,000Pa suction", "Self-empty base, up to 7-9 weeks", "Vacuum and mop combo", "App control"],
    description:
      "The Q7 M5+ matches the Q10 S5+ on suction but adds a self-empty base rated for up to 7 to 9 weeks between manual bin changes, which is a real convenience gain on hardwood where fine dust otherwise means frequent emptying. It sits at the top of the price range in this comparison, just above the Shark AV2501S.\n\nBecause the self-empty base handles more of the fine debris hardwood floors tend to produce, wheel and brush grit buildup gets less chance to accumulate between services. Check recent reviews for how the base handles pet hair specifically if that is a factor in your home.",
    bestFor: "Buyers who want self-emptying convenience alongside roborock's mopping consistency.",
    pros: [
      "Self-empty base rated for up to 7 to 9 weeks of capacity",
      "10,000Pa suction matches the higher-rated Q10 S5+",
      "Frequent emptying handled automatically, reducing grit buildup between services",
    ],
    cons: [
      "Highest price of the eight models in this comparison",
      "Base footprint adds to overall space needed",
    ],
  },
  {
    id: "eufy-11s-max",
    rank: 5,
    badge: "Best Slim Design",
    name: "eufy 11S MAX Robot Vacuum Cleaner, Super Thin, Quiet",
    amazonUrl: "https://www.amazon.com/dp/B07R295MLS?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31d8SEg9M9L._SL500_.jpg",
    price: "$169.99",
    rating: "Solid ratings from owners",
    reviews: "Long-standing review history",
    specs: ["Super-slim profile", "Quiet operation", "Vacuum only, no mop", "Self-charging"],
    description:
      "The 11S MAX is a vacuum-only model with a notably slim profile, which lets it reach under low furniture and baseboard heaters that block bulkier robots on a hardwood floor. It is also one of the quietest options here, which matters if it runs while the household is home.\n\nWithout a mop function, it will not address sticky spots or light film on hardwood, so it works best paired with occasional manual mopping rather than as a full replacement. It has one of the longer track records on the market among the models in this guide.",
    bestFor: "Homes with low-clearance furniture where a slim, quiet vacuum-only robot fits best.",
    pros: [
      "Slim profile reaches under low furniture other models cannot",
      "Quiet operation suits daytime runs while people are home",
      "Long-standing model with an established review history",
    ],
    cons: [
      "No mopping function, vacuum only",
      "Suction rating not published, so compare against rated models if that matters to you",
    ],
  },
  {
    id: "tikom-self-emptying",
    rank: 6,
    badge: "Best Budget Self-Empty",
    name: "Tikom Robot Vacuum and Mop, Robotic Vacuum Cleaner with Self-Emptying Base",
    amazonUrl: "https://www.amazon.com/dp/B0FKH1RW65?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41TiBcXjEaL._SL500_.jpg",
    price: "$219.99",
    rating: "Favorably reviewed by customers",
    reviews: "Growing base of customer feedback",
    specs: ["Self-emptying base", "Vacuum and mop combo", "App control", "Self-charging dock"],
    description:
      "This Tikom model brings a self-empty base in under the price of both roborock self-empty options here, making it the more accessible route to that convenience feature on a hardwood floor. It combines vacuuming and mopping in one unit, similar to the higher-priced picks in this guide.\n\nAs a newer entrant relative to the eufy and roborock lines, its long-term reliability track record is shorter. Check recent reviews for wheel and brush grit buildup over extended use, since that is a common wear point that can affect hardwood finishes on any budget model.",
    bestFor: "Buyers who want self-empty convenience without paying roborock or Shark pricing.",
    pros: [
      "Self-emptying base at a lower price than other self-empty picks here",
      "Combined vacuum and mop function",
      "App-based scheduling and control",
    ],
    cons: [
      "Shorter track record than more established brands in this comparison",
      "Long-term wheel and brush wear should be checked in recent reviews",
    ],
  },
  {
    id: "ropvacnic-combo",
    rank: 7,
    badge: "Best Budget Combo",
    name: "ROPVACNIC Robot Vacuum and Mop Combo 5200Pa Suction Robotic Cleaner",
    amazonUrl: "https://www.amazon.com/dp/B0GDXV2KJ4?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/518+BuiWh6L._SL500_.jpg",
    price: "$139.99",
    rating: "Well received by customers",
    reviews: "Steady stream of customer reviews",
    specs: ["5200Pa suction", "Vacuum and mop combo", "App control", "Self-charging"],
    description:
      "The ROPVACNIC combo offers both vacuuming and mopping at a price well under the mid-tier models in this guide, with a 5200Pa suction rating that is modest compared to the D20 Air Plus but workable for routine hardwood dust and debris rather than heavy embedded dirt.\n\nAt this price tier, listings tend to say less about hardwood-specific safeguards like grit-aware wheel design, so check recent reviews for scratching reports before running it unattended on a finish you care about.",
    bestFor: "Budget-focused buyers who want combined vacuum and mop coverage without premium pricing.",
    pros: [
      "Combined vacuum and mop function at a budget price",
      "Lower price point than most other combo models here",
      "App control for basic scheduling",
    ],
    cons: [
      "5200Pa suction rating is on the lower end of this comparison",
      "Hardwood-specific safeguards are not detailed in the listing, so check recent reviews",
    ],
  },
  {
    id: "lefant-m210",
    rank: 8,
    badge: "Best Ultra-Budget Pick",
    name: "Lefant Robot Vacuum Cleaner, Strong Suction, 120 Mins Runtime, Slim, Low Noise, M210",
    amazonUrl: "https://www.amazon.com/dp/B08R9LK9K3?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41ycih1ycCL._SL500_.jpg",
    price: "$89.99",
    rating: "Positively rated by owners",
    reviews: "Established base of customer reviews",
    specs: ["120-minute runtime", "Slim profile", "Vacuum only, no mop", "Wifi, app, and Alexa control"],
    description:
      "The M210 is the least expensive model in this guide and a vacuum-only design, with a 120-minute runtime and a slim body suited to daily upkeep on hardwood rather than deep cleaning. It supports app and Alexa control, which is a feature not every budget model in this price range includes.\n\nWithout a mop function or a published suction figure, it is best treated as a maintenance-level pick for light daily dust and pet hair on hardwood, paired with periodic manual mopping rather than a single do-everything solution.",
    bestFor: "Buyers on a tight budget who want daily light-duty hardwood upkeep without a mop function.",
    pros: [
      "Lowest price of the eight models in this comparison",
      "Wifi, app, and Alexa control included at this price",
      "Slim profile for reaching under low furniture",
    ],
    cons: [
      "No mopping function, vacuum only",
      "Suction is not published as a rated figure, so compare cautiously against rated models",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Fine dust and sand pickup vs scattering risk",
    explanation:
      "Hardwood shows fine dust and tracked-in sand more visibly than carpet, and a robot with weak suction can scatter it into corners instead of collecting it. Prioritize models with a clearly rated suction figure and check recent reviews for how well they handle fine debris specifically on hard floors.",
  },
  {
    criterion: "Wheel and brush grit buildup that can scratch floors over time",
    explanation:
      "Grit trapped in wheels or a brush roller can act like sandpaper against a hardwood finish over repeated passes. Check recent reviews for reports of scratching, and plan on periodically inspecting and cleaning wheels and brushes regardless of which model you choose.",
  },
  {
    criterion: "Mop water output and residual moisture control",
    explanation:
      "Too much mop water on hardwood risks warping or dulling a finish over time, especially at seams. Check recent reviews for how each model's mop water output behaves on hardwood specifically, and consider a vacuum-only model if you already mop manually.",
  },
  {
    criterion: "Whether the listing specifies hardwood-safe cleaning solution guidance",
    explanation:
      "Not every mop-equipped listing states which cleaning solutions are safe for hardwood versus tile or laminate. If a listing is silent on this, check recent reviews or the manufacturer's support page before adding anything beyond plain water to the mop tank.",
  },
  {
    criterion: "Wall-edge and corner pickup on hard floors",
    explanation:
      "Debris tends to collect along baseboards and in corners on hardwood more visibly than on carpet. Models with mapping or edge-sensing features, as noted in their listings, tend to handle these areas more consistently than ones that rely on a simple bounce pattern.",
  },
];

export const howWeEvaluated = [
  {
    title: "Suction rating and hardwood-specific pickup",
    description:
      "We compared each model's published suction figure and combined it with what listings and available details say about fine dust and debris pickup, since hardwood shows scattered debris more visibly than carpet.",
  },
  {
    title: "Mopping approach and moisture control",
    description:
      "For combo models, we looked at how mop function is described, since excess water is a real concern on hardwood finishes over time and not every listing addresses it clearly.",
  },
  {
    title: "Self-empty convenience vs added footprint",
    description:
      "We weighed the convenience of a self-empty base against the extra floor or counter space it requires, since not every hardwood floor plan has room to spare.",
  },
  {
    title: "Feature set vs price positioning",
    description:
      "We compared mapping, app control, and mop functionality against price across the eight models to identify where the meaningful upgrades actually happen versus where price increases without added capability.",
  },
  {
    title: "Verified rating where available",
    description:
      "We used a verified rating and review count for the top pick and used qualitative owner feedback signals for the remaining models, since we did not have verified numeric ratings for every listing at the time of research.",
  },
];

export const howToChoose = [
  {
    subheading: "By Budget",
    intro: "Price ranges widely across this comparison, from under $100 to nearly $300.",
    table: {
      headers: ["Budget", "Recommended Pick"],
      rows: [
        ["Under $100", "Lefant M210"],
        ["$100 to $200", "ROPVACNIC Combo or eufy 11S MAX"],
        ["$200 to $250", "dreame D20 Air Plus or Tikom Self-Emptying"],
        ["$250 and up", "roborock Q10 S5+, Q7 M5+, or Shark AV2501S"],
      ],
    },
  },
  {
    subheading: "By Household Need",
    intro: "Match feature set to how your hardwood floor plan and daily routine actually work.",
    table: {
      headers: ["Need", "Recommended Pick"],
      rows: [
        ["Strongest all-around suction and mopping", "dreame D20 Air Plus"],
        ["Large floor plan, want long self-empty autonomy", "Shark AV2501S AI Ultra"],
        ["Consistent mopping without a self-empty base", "roborock Q10 S5+"],
        ["Self-emptying convenience at a lower price", "Tikom Self-Emptying"],
        ["Low furniture clearance, quiet daytime runs", "eufy 11S MAX"],
        ["Tight budget, light daily upkeep only", "Lefant M210"],
      ],
    },
  },
  {
    subheading: "Vacuum-Only vs Vacuum-and-Mop Combo",
    cards: [
      {
        label: "Vacuum-only",
        text: "Simpler mechanism with no risk of excess mop water on your finish. The eufy 11S MAX and Lefant M210 in this comparison are vacuum-only, best paired with occasional manual mopping.",
      },
      {
        label: "Vacuum-and-mop combo",
        text: "More convenient for one-pass cleaning, but check recent reviews for mop water output on hardwood specifically. The dreame D20 Air Plus, both roborock models, the Tikom, and the ROPVACNIC combo all fall in this category.",
      },
    ],
    note: "If your hardwood finish is older or more sensitive, a vacuum-only model paired with manual mopping removes the moisture-control question entirely.",
  },
  {
    subheading: "Self-Empty Base or Not",
    cards: [
      {
        label: "Self-empty base",
        text: "Reduces manual bin handling and fine dust exposure, useful on hardwood where dust is more visible day to day. The roborock Q7 M5+, Shark AV2501S, and Tikom Self-Emptying all include this.",
      },
      {
        label: "No self-empty base",
        text: "Lower price and smaller footprint, at the cost of more frequent manual bin emptying. Most of the remaining models in this guide skip the self-empty base.",
      },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You have a large hardwood floor plan, want mapping accuracy along walls and corners, and would rather not empty a bin weekly. The Shark AV2501S and roborock Q7 M5+ target this.",
      },
      {
        label: "Save if",
        text: "You have a smaller hardwood area or want a straightforward maintenance-level vacuum. The Lefant M210 and ROPVACNIC combo cover that without the added cost of mapping or self-empty hardware.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Can robot vacuums scratch hardwood floors?",
    a: "It is possible if grit gets trapped in the wheels or brush roller and is dragged repeatedly across the finish. Periodically inspecting and cleaning wheels and brushes reduces this risk regardless of which model you choose, and checking recent reviews for scratching reports before buying is a reasonable extra step.",
  },
  {
    q: "Is a mopping robot safe to use on hardwood floors?",
    a: "Most mop-equipped robots are designed for hard floors, but water control matters. Check recent reviews for how much moisture a specific model leaves behind, and avoid running mop mode over hardwood with visible seams or an older, more porous finish without first confirming it handles moisture well.",
  },
  {
    q: "Why does this guide use qualitative ratings instead of numbers for most models?",
    a: "We verified a numeric rating and review count for the top pick at the time of research. For the other seven models, we did not have verified current numeric ratings, so we used qualitative language based on available review signals rather than inventing specific figures.",
  },
  {
    q: "Do I need a self-empty base for a hardwood floor?",
    a: "Not necessarily, but it does reduce how often you handle a bin full of fine dust, which tends to collect more visibly on hardwood than on carpet. If your floor plan is small, a base-free model with a smaller footprint may be the more practical choice.",
  },
  {
    q: "What suction rating actually matters for hardwood?",
    a: "Higher suction figures generally help pull fine dust and sand out of floor seams rather than pushing it around, but suction alone is not the only factor. Wheel and brush design, mapping accuracy along edges, and mop water control all affect real-world hardwood performance.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
