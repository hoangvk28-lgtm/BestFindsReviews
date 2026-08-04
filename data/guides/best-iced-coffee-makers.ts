export const guideSlug = "best-iced-coffee-makers";
export const guideTitle = "Best Iced Coffee Makers";
export const metaTitle = "Best Iced Coffee Makers (2026): 5 Models Compared";
export const metaDescription =
  "We compared five current iced coffee makers across hot-over-ice, true cold brew, and pod-based systems, and checked which iced settings actually avoid a watered-down cup.";
export const mainKeyword = "iced coffee makers";
export const lastUpdated = "2026-08-04";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31DLZl5VZVL._SL500_.jpg";

export const introParagraphs = [
  "Iced coffee maker is used to describe several genuinely different brewing methods: machines that brew hot concentrate directly over ice, true cold brew systems that never touch heat, pod machines with a dedicated over-ice setting, and manual cold brew pitchers. Most roundups list them side by side as if they produce the same result.",
  "We compared five current models across those categories and focused on the detail most guides skip: ice melt dilutes coffee, so a machine brewing at normal hot-coffee strength will taste weak once it hits a full glass of ice unless it specifically brews stronger or colder for the iced setting.",
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
    id: "ninja-cm371",
    rank: 1,
    badge: "Best Overall",
    name: "Ninja Hot & Iced XL Coffee Maker with Rapid Cold Brew, CM371",
    amazonUrl: "https://www.amazon.com/dp/B0CSDRZSGG?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31DLZl5VZVL._SL500_.jpg",
    price: "$159.99",
    rating: "4.6",
    reviews: "19,690 reviews",
    specs: ["4 brew styles", "Rapid cold brew", "8 brew sizes", "Thermal flavor extraction"],
    description:
      "The CM371 covers two distinct iced methods in one machine: an Over Ice setting that brews hot concentrate directly onto ice, and a separate Rapid Cold Brew mode that never uses heat and finishes in about 10 minutes. That is a genuine solution to the dilution problem, since the Over Ice mode is specifically formulated stronger to survive melting ice, and it is not the same recipe as its regular hot coffee setting.\n\nThe removable reservoir with auto-metering also means you are not eyeballing water levels for iced batches, which matters since iced recipes typically use less water per cup than a full hot brew to account for ice.",
    bestFor: "Buyers who want both true cold brew and a stronger hot-over-ice option in one machine.",
    pros: [
      "Over Ice setting is a distinct, stronger recipe rather than a diluted afterthought",
      "True cold brew mode in about 10 minutes, no overnight steep",
      "8 brew sizes including travel-size options",
    ],
    cons: [
      "Highest price of the models compared here",
      "Largest footprint, needs real counter space",
    ],
  },
  {
    id: "keurig-k-iced",
    rank: 2,
    badge: "Best Pod-Based",
    name: "Keurig K-Iced Coffee Maker, Single Serve K-Cup Pod Iced Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B0BSMGNYN3?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31rjSxrANOL._SL500_.jpg",
    price: "$99.99",
    rating: "4.4",
    reviews: "9,232 reviews",
    specs: ["Auto temp adjust", "3 cup sizes for iced", "Fits tumblers up to 7in", "My K-Cup compatible"],
    description:
      "The K-Iced is genuinely designed around the dilution problem rather than just labeling a normal brew as iced: the listing describes the brew temperature starting hotter for full flavor extraction, then automatically cooling before it hits the ice, which is a real mechanical difference from simply brewing a regular pod over cubes. It also has a dedicated Strong Brew option to push extraction further for iced cups specifically.\n\nThe removable drip tray accommodates tumblers up to 7 inches tall, which covers most travel mugs, though very tall insulated tumblers may still be too tall to fit under the spout.",
    bestFor: "Single-serve pod users who want an iced setting that is mechanically different from marketing dressing on a hot brew.",
    pros: [
      "Auto temperature adjustment specifically engineered to reduce ice dilution",
      "Fits tumblers up to 7 inches tall under the spout",
      "Auto-off after 5 minutes saves standby power",
    ],
    cons: [
      "Pod-based, so ongoing cost per cup is higher than ground coffee methods",
      "3 cup sizes for iced is fewer options than the CM371's 8",
    ],
  },
  {
    id: "vinci-express",
    rank: 3,
    badge: "Best True Cold Brew",
    name: "VINCI Express Electric Cold Brew Coffee Maker, 10-Minute Fast Brewer",
    amazonUrl: "https://www.amazon.com/dp/B0FY87PWGK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41kfmP2+6tL._SL500_.jpg",
    price: "$99.99",
    rating: "4.3",
    reviews: "2,179 reviews",
    specs: ["Active extraction system", "10 to 25 minute settings", "47oz glass carafe", "Self-cleaning cycle"],
    description:
      "This is true cold brew, not hot coffee poured over ice. Water never gets heated; instead a Circle Flow system actively circulates room-temperature water through grounds to extract flavor in 10 to 25 minutes instead of the traditional 18- to 24-hour steep. That distinction matters because cold brew has a genuinely different, less acidic flavor profile than hot-brewed coffee cooled with ice, and no dilution math applies since you are not adding ice during brewing.\n\nBecause it brews and stores in the same glass carafe, cleanup is closer to washing a pitcher than descaling a machine, though the internal brew path still needs the included cleaning cup run periodically.",
    bestFor: "Buyers who specifically want cold brew's flavor profile without an overnight wait.",
    pros: [
      "Genuine cold brew extraction, not hot coffee over ice",
      "10-minute light setting is dramatically faster than traditional steeping",
      "Brew, serve, and store in one glass carafe",
    ],
    cons: [
      "Only produces cold brew concentrate, no hot coffee mode",
      "Smaller review base than the more established pod and drip options here",
    ],
  },
  {
    id: "takeya-cold-brew",
    rank: 4,
    badge: "Best No-Electricity Option",
    name: "Takeya Deluxe Cold Brew Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B07C36HVWK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31dPKeu1VqL._SL500_.jpg",
    price: "$34.99",
    rating: "4.6",
    reviews: "67,488 reviews",
    specs: ["2-quart Tritan pitcher", "Fine-mesh filter", "Airtight lid", "Dishwasher safe"],
    description:
      "The Takeya is a manual steep-in-the-fridge cold brew pitcher with no electronics, no cord, and no iced setting to evaluate for dilution since you control the ratio yourself with the built-in fine-mesh filter. Traditional cold brew steeping still takes roughly 12 to 24 hours in the refrigerator, which is the tradeoff for skipping any machine entirely.\n\nCleanup is simpler than any electric option here since there is no brew path or heating element, just a pitcher, filter, and lid that are all dishwasher safe. This is the cheapest way into genuine cold brew in this comparison.",
    bestFor: "Buyers who want true cold brew concentrate without buying any electric machine.",
    pros: [
      "Lowest price of the models compared here",
      "No electronics or brew path to clean or maintain",
      "Airtight lid keeps concentrate fresh in the fridge for days",
    ],
    cons: [
      "Requires 12 to 24 hours of passive steep time, no rapid setting",
      "Manual dilution, no built-in temperature or strength automation",
    ],
  },
  {
    id: "hamilton-beach-hot-iced",
    rank: 5,
    badge: "Best Budget",
    name: "Hamilton Beach 12 Cup Programmable Drip Hot & Iced Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B0GNTHXNKQ?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/318cjDL-+7L._SL500_.jpg",
    price: "$37.99",
    rating: "4.2",
    reviews: "74 reviews",
    specs: ["Bold and iced brew modes", "24-hour programmable", "Auto pause and pour", "Slim profile"],
    description:
      "This is a standard 12-cup drip machine with a Bold and an Iced brew mode added to the settings dial. The listing does not describe any temperature or strength adjustment specific to the iced mode the way the K-Iced or CM371 do, so the practical effect is closer to using the Bold setting and pouring over your own ice, which is worth knowing before assuming the iced button changes much mechanically.\n\nAt under $40 it is by far the cheapest machine here with any dedicated iced label, and the slim profile is genuinely useful for a small kitchen, but buyers wanting a verified anti-dilution mechanism should look at the K-Iced or CM371 instead.",
    bestFor: "Budget buyers who want a basic drip machine with a bold setting and don't need a verified anti-dilution mechanism.",
    pros: [
      "Lowest price in this comparison by a wide margin",
      "Auto pause and pour lets you grab a cup mid-brew",
      "Slim profile fits small kitchens",
    ],
    cons: [
      "Iced mode is not clearly differentiated from just brewing Bold and adding ice yourself",
      "Glass carafe on a warming plate, not a true cold or thermal system",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Which iced category the machine actually belongs to",
    explanation:
      "Hot-over-ice, true cold brew, and pod-based iced settings produce genuinely different cups. Confirm which one you are buying rather than assuming iced means the same thing across every listing.",
  },
  {
    criterion: "Whether the iced setting fights dilution",
    explanation:
      "A machine that brews at the same strength for hot and iced settings will taste watered down once ice melts into it. Look for listings that specifically describe a stronger brew, cooler pre-ice temperature, or reduced water ratio for the iced mode, like the K-Iced's auto temperature adjustment.",
  },
  {
    criterion: "Tumbler and travel mug clearance",
    explanation:
      "Check the stated clearance under the spout or drip tray, commonly 6 to 7 inches on single-serve iced machines. A tall insulated tumbler may not fit even when the listing says iced-friendly.",
  },
  {
    criterion: "True cold brew steep time vs rapid extraction",
    explanation:
      "Traditional cold brew pitchers need 12 to 24 hours in the fridge, while active extraction machines like the VINCI Express claim 10 to 25 minutes using continuous water circulation instead of passive steeping.",
  },
  {
    criterion: "Cleanup versus just brewing hot and adding ice",
    explanation:
      "Dedicated iced machines add a drip tray, extra reservoir settings, or a separate cold brew basket to clean, on top of the machine's regular maintenance. Weigh that against simply brewing a stronger hot pot and pouring it over ice yourself.",
  },
];

export const howWeEvaluated = [
  {
    title: "Category classification",
    description:
      "We separated each machine into hot-over-ice, true cold brew, or pod-based iced rather than treating iced coffee maker as one uniform category.",
  },
  {
    title: "Anti-dilution mechanism check",
    description:
      "We checked listing details for genuine strength, temperature, or ratio adjustments specific to the iced setting versus a shared recipe with the hot brew mode.",
  },
  {
    title: "Tumbler and cup clearance",
    description:
      "We noted stated spout or drip tray clearance for travel mugs and tall tumblers, since this is a common daily-use friction point.",
  },
  {
    title: "Speed to a finished iced cup",
    description:
      "We compared true cold brew steep or extraction time against rapid hot-over-ice brewing, since these differ by hours, not minutes.",
  },
  {
    title: "Cleanup and maintenance overhead",
    description:
      "We weighed the extra parts, drip trays, and reservoirs each iced-specific machine adds against the simplicity of a manual pitcher or brewing hot and adding ice.",
  },
];

export const howToChoose = [
  {
    subheading: "By Iced Coffee Category",
    intro: "These are genuinely different methods, not interchangeable marketing terms.",
    table: {
      headers: ["Category", "How it works", "Pick"],
      rows: [
        ["Hot concentrate over ice", "Brews hot, engineered stronger or cooled before hitting ice", "Ninja CM371 or Keurig K-Iced"],
        ["True cold brew, rapid", "Active circulation, no heat, 10 to 25 minutes", "VINCI Express"],
        ["True cold brew, traditional", "Passive steep in the fridge, 12 to 24 hours", "Takeya Deluxe Cold Brew"],
        ["Basic bold setting labeled iced", "Same recipe as hot brew, pour over ice yourself", "Hamilton Beach 12 Cup"],
      ],
    },
  },
  {
    subheading: "Does the Iced Setting Actually Fight Dilution?",
    table: {
      headers: ["Product", "Anti-Dilution Mechanism"],
      rows: [
        ["Ninja CM371", "Separate stronger Over Ice recipe plus true cold brew mode"],
        ["Keurig K-Iced", "Auto temperature adjustment, starts hot then cools before ice"],
        ["VINCI Express", "Not applicable, no ice used in brewing"],
        ["Takeya Deluxe", "Not applicable, concentrate diluted manually by the user"],
        ["Hamilton Beach 12 Cup", "Not clearly specified beyond a Bold setting"],
      ],
    },
    note: "If the anti-dilution mechanism is not described in the listing, assume it is a standard brew poured over ice rather than a specifically engineered iced recipe.",
  },
  {
    subheading: "Tumbler Clearance",
    cards: [
      { label: "Fits most tumblers", text: "Keurig K-Iced states clearance up to 7 inches, which covers most standard travel tumblers." },
      { label: "Check before buying", text: "The Ninja CM371 and Hamilton Beach models do not state an exact tumbler height limit, so measure your tallest tumbler against the product dimensions first." },
    ],
  },
  {
    subheading: "Speed vs Flavor Tradeoff",
    table: {
      headers: ["Priority", "Recommended Pick"],
      rows: [
        ["Iced coffee in minutes", "Ninja CM371 or Keurig K-Iced"],
        ["True cold brew flavor, fast", "VINCI Express, 10 to 25 minutes"],
        ["True cold brew flavor, cheapest", "Takeya Deluxe, 12 to 24 hour steep"],
      ],
    },
  },
  {
    subheading: "Is a Dedicated Iced Machine Worth It?",
    cards: [
      { label: "Worth it if", text: "You drink iced coffee daily and want a verified anti-dilution mechanism like the K-Iced or CM371 rather than guessing at ratios yourself." },
      { label: "Skip it if", text: "You only want iced coffee occasionally. Brewing a stronger pot on any regular drip machine and pouring it over ice achieves a similar result to the Hamilton Beach's Bold-plus-ice approach." },
    ],
  },
];

export const faq = [
  {
    q: "Is iced coffee from a machine the same as cold brew?",
    a: "No. Hot-over-ice machines brew hot and rely on strength or temperature adjustments to survive melting ice, while true cold brew, like the VINCI Express or Takeya, never uses heat at all and has a distinctly smoother, less acidic flavor.",
  },
  {
    q: "Why does my iced coffee taste watered down?",
    a: "If the machine brews at the same strength for hot and iced settings, melting ice dilutes it. Look for machines that specifically brew stronger or cooler for the iced mode, like the Keurig K-Iced's auto temperature adjustment, rather than assuming any iced label solves this.",
  },
  {
    q: "How long does true cold brew take to make?",
    a: "Traditional passive steeping takes 12 to 24 hours in the refrigerator, as with the Takeya pitcher. Active extraction machines like the VINCI Express claim 10 to 25 minutes by continuously circulating water through the grounds instead of steeping passively.",
  },
  {
    q: "Will my travel tumbler fit under an iced coffee maker's spout?",
    a: "It depends on the model. The Keurig K-Iced states clearance up to 7 inches. Machines that do not list an exact clearance should be checked against your tallest tumbler's height before buying.",
  },
  {
    q: "Is it worth buying a dedicated iced coffee maker instead of just adding ice to hot coffee?",
    a: "If you drink iced coffee daily, a machine with a verified anti-dilution mechanism produces a more consistent result than eyeballing extra-strong hot coffee yourself. For occasional iced coffee, brewing stronger on a regular drip machine and adding ice achieves a similar outcome.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
