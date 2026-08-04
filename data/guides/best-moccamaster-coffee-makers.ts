export const guideSlug = "best-moccamaster-coffee-makers";
export const guideTitle = "Best Moccamaster Coffee Makers";
export const metaTitle = "Best Moccamaster Coffee Makers (2026): KBGV, KBT, and KB Compared";
export const metaDescription =
  "We compared three current Moccamaster models on model differences, thermal versus glass carafe tradeoffs, and long-term warranty value, and note who should skip Moccamaster entirely.";
export const mainKeyword = "moccamaster coffee makers";
export const lastUpdated = "2026-08-04";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41fMufGyNvL._SL500_.jpg";

export const introParagraphs = [
  "Moccamaster roundups tend to repeat the same three talking points: SCA certification, a copper heating element, and a fast brew time, without explaining what actually separates the KBGV, KBT, and KB model lines from each other. That leaves buyers guessing which model number matches their kitchen.",
  "We compared three current, distinct Technivorm Moccamaster models rather than color variants of the same unit: the KBGV Select with a glass carafe and half-batch switch, the KBT with a stainless thermal carafe, and the KB with a manually adjustable brew basket. We looked at how each differs in daily use, what the 5-year warranty is actually worth over time, and who should skip Moccamaster for a machine with a timer or built-in grinder instead.",
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
    id: "moccamaster-kbgv-select",
    rank: 1,
    badge: "Best Overall",
    name: "Technivorm Moccamaster KBGV Select 10-Cup Coffee Maker, Polished Silver, 40oz",
    amazonUrl: "https://www.amazon.com/dp/B093DYPBYR?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41fMufGyNvL._SL500_.jpg",
    price: "$366.94",
    rating: "4.2",
    reviews: "5,012 reviews",
    specs: ["Glass carafe, 40oz", "Half or full batch switch", "4 to 6 minute brew time", "Auto shutoff after 100 minutes"],
    description:
      "The KBGV Select is the standard glass-carafe Moccamaster and the model most people mean when they say Moccamaster. A brew-volume selector switch lets you brew a half batch instead of a full 40oz pot, which most competitors in this price range do not offer as a simple physical switch.\n\nBrewing is entirely manual: there is no built-in timer or programmable start, you fill the reservoir and flip the switch. The pump-free design heats water to a target temperature for extraction and finishes a full pot in 4 to 6 minutes, then shuts off automatically after 100 minutes so it is not left running indefinitely.",
    bestFor: "Buyers who want the classic Moccamaster brewing experience and do not need a programmable timer.",
    pros: [
      "Half-batch switch is a genuinely useful feature most competitors skip",
      "Fast 4 to 6 minute brew time for a full pot",
      "5-year warranty backs the build",
    ],
    cons: [
      "No programmable start timer, entirely manual operation",
      "Glass carafe on a warming plate will not hold heat as long as the thermal KBT",
    ],
  },
  {
    id: "moccamaster-kbt",
    rank: 2,
    badge: "Best Thermal Carafe",
    name: "Technivorm Moccamaster KBT Coffee Brewer, 40oz, Polished Silver",
    amazonUrl: "https://www.amazon.com/dp/B002S4DI2S?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41xdT6KJEGL._SL500_.jpg",
    price: "$309.22",
    rating: "4.2",
    reviews: "3,285 reviews",
    specs: ["Stainless thermal carafe, 40oz", "Manual adjustable brew basket", "4 to 6 minute brew time", "5-year warranty"],
    description:
      "The KBT swaps the glass carafe for a stainless steel thermal carafe, which holds heat for hours instead of relying on a warming plate that can slowly cook coffee sitting on it. If you do not drink the full pot within 30 to 45 minutes of brewing, this is the more practical choice of the two carafe styles.\n\nIt also adds a manually adjustable brew basket, letting you fine tune contact time between water and grounds. The tradeoff is a thermal carafe lid with more parts than a simple glass lid, so it needs a bit more attention when cleaning.",
    bestFor: "Buyers who brew a full pot but drink it over an hour or more rather than right away.",
    pros: [
      "Thermal carafe holds heat far longer than a warming plate without degrading flavor",
      "Adjustable brew basket adds control over extraction",
      "Same fast 4 to 6 minute brew time as the glass carafe model",
    ],
    cons: [
      "Thermal carafe lid has more parts to disassemble and clean than a glass carafe lid",
      "No pour-through capability while lid is closed, unlike some thermal carafes on other brands",
    ],
  },
  {
    id: "moccamaster-kb",
    rank: 3,
    badge: "Best for Basket Control",
    name: "Technivorm KB Coffee Brewer, 40oz, Brushed Silver",
    amazonUrl: "https://www.amazon.com/dp/B004JIQQK2?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/419w2rp0IqS._SL500_.jpg",
    price: "$329.79",
    rating: "4.4",
    reviews: "1,251 reviews",
    specs: ["Glass carafe, 40oz", "Brushed silver finish", "Manual operation", "5-year warranty"],
    description:
      "The KB is Moccamaster's other core glass-carafe line, distinguished mainly by its brushed silver finish and specific basket hardware rather than the half-batch switch found on the Select. Grind size and grounds amount matter more here since under-extraction from too coarse a grind or too little coffee can leave the brew under-pressured.\n\nLike the rest of the lineup, there is no digital display or programmable start, and reprogramming your grind and dose is a matter of trial and adjustment rather than app-based settings. It suits buyers who already know their preferred grind and want a manual, mechanical brewing process without added electronics.",
    bestFor: "Buyers who want manual control over grind and dose and prefer a brushed finish over polished silver.",
    pros: [
      "Brushed finish resists fingerprints better than polished silver",
      "Manual, mechanical process appeals to buyers who do not want extra electronics",
      "Same 5-year warranty as the rest of the Moccamaster lineup",
    ],
    cons: [
      "Requires more trial and error with grind size and dose than models with clearer guidance",
      "No half-batch switch like the KBGV Select",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Model number differences",
    explanation:
      "KBGV models add a half-batch brew switch, KBT models use a stainless thermal carafe instead of glass, and KB models are a simpler glass-carafe line without the half-batch switch. Match the letters to the specific feature you want rather than assuming all Moccamasters are interchangeable.",
  },
  {
    criterion: "Glass vs thermal carafe",
    explanation:
      "A glass carafe on a warming plate starts to degrade coffee flavor after roughly 30 to 45 minutes. If you regularly nurse a pot for an hour or more, the thermal KBT carafe is worth its higher price over a glass model.",
  },
  {
    criterion: "No built-in timer on base models",
    explanation:
      "None of the models here have a programmable auto-start timer, unlike many mainstream drip machines under $150. If waking up to a pot already brewed is important to you, Moccamaster is not the right fit without buying a separate smart plug workaround.",
  },
  {
    criterion: "Long-term value via warranty and parts",
    explanation:
      "Moccamaster backs its home brewers with a 5-year warranty, longer than most drip machines in this price range, and the company is known for supplying replacement parts rather than requiring a full machine replacement. Factor this into cost per year of ownership, not just the upfront price.",
  },
  {
    criterion: "Half-batch brewing accuracy",
    explanation:
      "The half-batch switch on KBGV models changes the brew cycle to suit a smaller water volume rather than just diluting a full-strength brew. If you often make less than a full pot, confirm the model you are buying actually includes this switch.",
  },
  {
    criterion: "Finish and fingerprint visibility",
    explanation:
      "Polished silver shows fingerprints more readily than a brushed or matte finish. If the machine sits in a high-traffic kitchen, a brushed finish will generally look cleaner between wipe-downs.",
  },
];

export const howWeEvaluated = [
  {
    title: "Model line differentiation",
    description:
      "We mapped the specific feature differences between the KBGV, KBT, and KB lines so buyers can match a model number to what they actually need rather than guessing from marketing photos.",
  },
  {
    title: "Carafe style and heat retention",
    description:
      "We compared how glass-and-warming-plate models hold flavor over time against the stainless thermal carafe option, and weighed the added cleaning burden of the thermal lid.",
  },
  {
    title: "Long-term value calculation",
    description:
      "We factored the 5-year warranty and Moccamaster's parts-replacement reputation into an estimated cost-per-year figure rather than judging models on upfront price alone.",
  },
  {
    title: "Manual operation reality",
    description:
      "We assessed how much the lack of a programmable timer and digital display affects daily convenience compared to mainstream automated drip machines.",
  },
];

export const howToChoose = [
  {
    subheading: "By Carafe Preference",
    table: {
      headers: ["You want", "Recommended Pick"],
      rows: [
        ["Drink the pot within 30 to 45 minutes", "Moccamaster KBGV Select (glass)"],
        ["Coffee sits for an hour or more before the last cup", "Moccamaster KBT (thermal)"],
        ["Manual grind and dose control, brushed finish", "Moccamaster KB"],
      ],
    },
  },
  {
    subheading: "Ten-Year Value Estimate",
    intro: "Based on the 5-year warranty and Moccamaster's reputation for supplying replacement parts rather than requiring a full machine replacement.",
    table: {
      headers: ["Scenario", "Approx. 10-Year Cost", "Notes"],
      rows: [
        ["Moccamaster with one part replacement", "$330 to $450", "Machine price plus one covered or low-cost part swap"],
        ["Budget drip machine, replaced twice", "$200 to $300", "Two $100 to $150 machines over the same period, more landfill waste"],
      ],
    },
  },
  {
    subheading: "Model Line Cheat Sheet",
    cards: [
      { label: "KBGV", text: "Glass carafe plus a half-batch brew switch, the most versatile everyday choice." },
      { label: "KBT", text: "Same brewing core with a stainless thermal carafe instead of glass, best for slow drinkers." },
      { label: "KB", text: "Glass carafe without the half-batch switch, simplest mechanical line with a brushed finish option." },
    ],
  },
  {
    subheading: "Who Should Skip Moccamaster",
    cards: [
      { label: "Skip Moccamaster if", text: "You want a programmable auto-start timer, a built-in grinder, or full one-touch automation. These models are entirely manual-fill with no scheduling." },
      { label: "Moccamaster makes sense if", text: "You already grind separately, are home to start the brew yourself, and want SCA-certified extraction quality with strong long-term durability." },
    ],
  },
  {
    subheading: "Half Batch vs Full Batch Quality",
    intro: "Not every Moccamaster handles a partial pot the same way.",
    note: "Only the KBGV Select's dedicated half-batch switch adjusts the brew cycle for a smaller volume. On models without that switch, brewing less than a full pot can under-extract, so stick to full batches on the KBT and KB unless you are comfortable adjusting grind and timing manually.",
  },
];

export const faq = [
  {
    q: "What is the difference between Moccamaster KBGV, KBT, and KB models?",
    a: "KBGV models add a half-batch brew switch and use a glass carafe, KBT models keep the same brewing core but swap in a stainless thermal carafe, and KB models are a simpler glass-carafe line without the half-batch switch. Match the letters to the feature you actually want.",
  },
  {
    q: "Does a Moccamaster have a programmable timer?",
    a: "No. All the models here are manual-fill with no built-in auto-start scheduling, unlike many mainstream drip machines under $150. If a scheduled brew matters to you, Moccamaster is not the right fit without a separate smart plug workaround.",
  },
  {
    q: "Is the Moccamaster thermal carafe worth the extra cost over glass?",
    a: "If you typically drink the full pot within 30 to 45 minutes, a glass carafe on the warming plate performs fine. If coffee regularly sits for an hour or more before the last cup, the KBT's thermal carafe preserves flavor noticeably better and is worth the price difference.",
  },
  {
    q: "How does the Moccamaster warranty affect long-term value?",
    a: "The 5-year warranty is longer than most drip machines in this price range, and Moccamaster is known for supplying replacement parts rather than requiring a full machine replacement. Over a decade, this can make the higher upfront price competitive with buying two cheaper machines.",
  },
  {
    q: "Can I brew less than a full pot on any Moccamaster?",
    a: "Only the KBGV Select has a dedicated half-batch switch that adjusts the brew cycle for a smaller volume. On the KBT and KB, brewing significantly less than a full pot without adjusting grind and dose can lead to under-extraction.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
