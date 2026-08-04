export const guideSlug = "best-french-press-coffee-makers";
export const guideTitle = "Best French Press Coffee Makers";
export const metaTitle = "Best French Press Coffee Makers (2026): 4 Models Compared";
export const metaDescription =
  "We compared four current French press coffee makers on real usable volume after grounds displacement, plunge force and stability, sediment, heat retention, and filter part availability.";
export const mainKeyword = "french press coffee makers";
export const lastUpdated = "2026-08-04";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/417dNkTrt6L._SL500_.jpg";

export const introParagraphs = [
  "French press capacity numbers on the box are measured as the volume of the empty carafe, not the volume of brewed coffee you actually pour into a cup. Once ground coffee and its displacement are accounted for, a 34oz press yields noticeably less than 34oz of drinkable coffee, and most comparisons never mention this.",
  "We compared four current French press models on usable brewed volume, how much force and stability the plunge actually requires, how each build retains heat, and how easy it is to source replacement screens and parts. Sediment is a property of French press brewing itself rather than something any of these models fully eliminates, so we focused on which ones manage it best rather than which ones falsely claim to remove it.",
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
    id: "cafe-du-chateau",
    rank: 1,
    badge: "Best Overall",
    name: "Cafe Du Chateau French Press Coffee Maker, 34 oz",
    amazonUrl: "https://www.amazon.com/dp/B01J4O0T4E?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/417dNkTrt6L._SL500_.jpg",
    price: "$39.99",
    rating: "4.5",
    reviews: "33,641 reviews",
    specs: ["34oz stated capacity", "Glass carafe", "Stainless steel filter", "4-piece filter structure"],
    description:
      "This press is stated at 34oz, but once you account for the volume that a standard dose of coarse grounds displaces, expect closer to 27 to 28oz of actual brewed coffee, roughly three to four 8oz cups rather than four full ones. That gap between stated and usable capacity applies to every glass press in this comparison, not just this one, so plan portions accordingly.\n\nThe glass carafe means you can watch the brew and see grounds settle, but it also means the plunge requires steady, even downward pressure since glass has no give if the plunger binds. A sudden hard push on an off-angle plunger is the most common way glass French press carafes crack, so plan to plunge slowly and hold the handle rather than pushing from the top.",
    bestFor: "Buyers who want a straightforward glass press and are comfortable adjusting portion expectations for real usable volume.",
    pros: [
      "Reasonable price for a 4-piece stainless filter structure",
      "Glass body lets you monitor brew color and grounds settling",
      "Replacement screens are commonly available for this model",
    ],
    cons: [
      "Actual usable brewed volume is meaningfully less than the 34oz stated capacity",
      "Glass carafe requires careful, even plunge pressure to avoid cracking",
    ],
  },
  {
    id: "muellerliving-french-press",
    rank: 2,
    badge: "Best for Heat Retention",
    name: "MuellerLiving French Press Coffee Maker, Double-Walled Stainless Steel, 34oz",
    amazonUrl: "https://www.amazon.com/dp/B07JGBK6XV?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41p-tjDGDKL._SL500_.jpg",
    price: "$54.99",
    rating: "4.7",
    reviews: "35,245 reviews",
    specs: ["34oz stated capacity", "Double-walled stainless steel", "4-level filtration", "Dishwasher safe"],
    description:
      "The double-walled stainless steel body holds heat noticeably longer than a single-wall glass carafe, which matters for French press specifically since the brew sits in contact with the grounds the entire time you are drinking it unless you decant it to a separate container. A steel build also survives an accidental drop or an uneven plunge far better than glass.\n\nSame displacement math applies here as with any French press: the stated 34oz becomes closer to 27 to 28oz of drinkable coffee once grounds are accounted for. Because the body is opaque, you lose the ability to visually check grounds settling before you plunge, which glass presses allow.",
    bestFor: "Buyers who want the coffee to stay hot longer and prefer a build that will not crack if dropped or plunged unevenly.",
    pros: [
      "Double-walled steel retains heat far longer than glass",
      "Far more durable than a glass carafe for daily use or travel",
      "4-level filtration reduces fine sediment reaching the cup",
    ],
    cons: [
      "Opaque body means you cannot see grounds settle before plunging",
      "Higher price than the comparable glass options here",
    ],
  },
  {
    id: "secura-french-press",
    rank: 3,
    badge: "Best Value",
    name: "Secura French Press Coffee Maker, 304 Stainless Steel, 34oz",
    amazonUrl: "https://www.amazon.com/dp/B00JE36GLQ?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41toI8EAifL._SL500_.jpg",
    price: "$25.69",
    rating: "4.7",
    reviews: "35,912 reviews",
    specs: ["34oz stated capacity", "304 stainless steel", "3-layer filter with 2 spare screens", "Cool-touch handle"],
    description:
      "At under $26, this is the lowest-priced press in this comparison and it still ships with two spare stainless filter screens, which addresses one of the real long-term costs of French press ownership: screens do eventually wear or bend, and having spares on hand from day one avoids a replacement-parts search later.\n\nIt is a single-wall stainless build, so it does not hold heat as long as the double-walled MuellerLiving, but it is more durable than glass. The same 34oz-stated, roughly 27 to 28oz-usable capacity math applies here too, and a standard mesh filter will not fully eliminate fine sediment; expect a small amount at the bottom of the cup regardless of filter quality.",
    bestFor: "Budget-conscious buyers who still want spare filter screens included rather than sourced separately later.",
    pros: [
      "Lowest price in this comparison and includes two spare screens",
      "Stainless steel body is more durable than glass",
      "Cool-touch handle and knob for safer pouring",
    ],
    cons: [
      "Single-wall construction does not retain heat as long as a double-walled press",
      "Opaque body, same as the MuellerLiving, so no visual check on grounds before plunging",
    ],
  },
  {
    id: "bodum-chambord",
    rank: 4,
    badge: "Best Classic Glass Design",
    name: "Bodum Chambord French Press Coffee Maker, 34oz",
    amazonUrl: "https://www.amazon.com/dp/B00008XEWG?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31je915XePL._SL500_.jpg",
    price: "$39.69",
    rating: "4.6",
    reviews: "28,722 reviews",
    specs: ["34oz stated capacity", "High-heat borosilicate glass", "Polished stainless steel frame", "Made in Portugal"],
    description:
      "The Chambord is the classic French press silhouette, with a borosilicate glass carafe held inside a stainless steel frame that gives it more drop resistance than an unframed glass carafe while keeping the visual benefit of glass. The steel frame also gives the plunger more stable guide contact, which reduces the chance of the plunger binding sideways mid-press, a common cause of glass presses cracking under uneven force.\n\nAs with every model here, treat the 34oz label as the carafe's fluid capacity, not your yield. Once grounds are in and displaced, expect roughly 27 to 28oz of drinkable coffee. The glass carafe still loses heat faster than a double-walled steel design, so if you tend to drink slowly over 30 minutes, expect the last cup to be noticeably cooler than the first.",
    bestFor: "Buyers who want the classic glass French press look with more structural support than an unframed glass carafe.",
    pros: [
      "Steel frame adds drop resistance and plunge stability versus unframed glass",
      "Retains the visual benefit of a glass carafe",
      "Widely available replacement glass beakers and screens",
    ],
    cons: [
      "Glass still loses heat faster than a double-walled steel press",
      "Costs more than the Secura for a comparable stated capacity",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Usable volume after grounds displacement",
    explanation:
      "A press stated at 34oz yields closer to 27 to 28oz of drinkable coffee once a standard dose of coarse grounds is accounted for. Plan your cup count around usable volume, not the number printed on the box.",
  },
  {
    criterion: "Plunge force, stability, and burn risk",
    explanation:
      "Plunging requires steady, even downward pressure, and an off-angle push is the most common way a glass carafe cracks. Framed glass designs like the Bodum Chambord add lateral stability during the plunge that unframed glass carafes lack.",
  },
  {
    criterion: "Sediment is inherent, not a design flaw",
    explanation:
      "No mesh filter, however fine, fully eliminates sediment in a French press, since the brewing method itself keeps fine particles in contact with the water. Expect a small amount at the bottom of the cup regardless of which model or filter layer count you choose.",
  },
  {
    criterion: "Heat retention: glass vs steel",
    explanation:
      "Double-walled stainless steel presses like the MuellerLiving hold heat noticeably longer than single-wall glass or single-wall steel. If you drink slowly over 20 to 30 minutes, this is a bigger practical difference than most spec sheets suggest.",
  },
  {
    criterion: "Screen and replacement part availability",
    explanation:
      "Filter screens eventually bend or wear from repeated plunging. Models that ship with spare screens, like the Secura, or that use widely sold standard-size parts, like the Bodum Chambord, save you a replacement-parts search later.",
  },
];

export const howWeEvaluated = [
  {
    title: "Usable brewed volume vs stated capacity",
    description:
      "We calculated realistic usable volume after grounds displacement for each stated capacity, rather than repeating the carafe's empty fluid capacity as if it were the yield.",
  },
  {
    title: "Plunge mechanics and build stability",
    description:
      "We compared how each carafe's construction, framed glass, unframed glass, or single or double-wall steel, affects plunge stability and crack or burn risk.",
  },
  {
    title: "Sediment management",
    description:
      "We noted that sediment cannot be fully eliminated by any French press filter and instead compared filter layer count as a means of reducing, not removing, it.",
  },
  {
    title: "Heat retention over a full serving session",
    description:
      "We compared glass, single-wall steel, and double-wall steel builds for how much heat is lost over a typical 20 to 30 minute drinking session.",
  },
  {
    title: "Cleaning and replacement part access",
    description:
      "We checked whether spare screens are included and how standard each model's parts are, since screen wear is a normal part of long-term French press ownership.",
  },
];

export const howToChoose = [
  {
    subheading: "By Priority: Heat Retention vs Visual Monitoring",
    table: {
      headers: ["Priority", "Recommended Pick"],
      rows: [
        ["Coffee stays hot longest, drink slowly", "MuellerLiving Double-Walled French Press"],
        ["Want to see the brew and grounds settle", "Cafe Du Chateau or Bodum Chambord"],
        ["Lowest price, still get spare parts", "Secura French Press"],
      ],
    },
  },
  {
    subheading: "Real Usable Volume, Not the Label",
    intro: "All four models here are stated at 34oz. Actual usable brewed coffee is meaningfully less once grounds are accounted for.",
    table: {
      headers: ["Stated Capacity", "Approx. Usable Brewed Volume", "Approx. 8oz Cups"],
      rows: [
        ["34oz", "27 to 28oz", "3 to 3.5 cups"],
      ],
    },
    note: "If you regularly serve four full 8oz cups, plan on using slightly more grounds and water than the stated capacity suggests, or choose a press with a larger stated capacity than you think you need.",
  },
  {
    subheading: "Glass vs Steel Build",
    cards: [
      {
        label: "Glass (Cafe Du Chateau, Bodum Chambord)",
        text: "Lets you monitor the brew visually and see grounds settle before plunging, but loses heat faster and requires more careful, even plunge pressure to avoid cracking.",
      },
      {
        label: "Steel (MuellerLiving, Secura)",
        text: "More durable against drops and uneven plunges, and the double-walled MuellerLiving retains heat significantly longer. You lose the ability to see the brew, and cleaning the opaque interior takes a bit more attention.",
      },
    ],
  },
  {
    subheading: "Plunge Technique to Reduce Cracking and Burn Risk",
    intro: "This applies to any French press, but matters most on unframed glass carafes.",
    note: "Push the plunger down slowly and evenly with the handle centered, never at an angle. Stop if you feel resistance rather than forcing it, since binding under force is what typically cracks a glass carafe or splashes hot coffee over the rim.",
  },
  {
    subheading: "When to Buy Spare Parts Upfront",
    cards: [
      {
        label: "Buy spares now if",
        text: "You brew daily. Filter screens wear from repeated plunging, and the Secura already includes two spares, which covers roughly a year or more of regular use before you need to source replacements.",
      },
      {
        label: "Skip spares for now if",
        text: "You brew occasionally. A single filter screen on any of these models will typically outlast several months of light, weekly use.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Why does my French press yield less coffee than its stated capacity?",
    a: "The stated capacity is the carafe's empty fluid volume, not the volume of brewed coffee you get after adding grounds. Coarse coffee grounds displace roughly 15 to 20 percent of that stated volume, so a 34oz press typically yields closer to 27 to 28oz of drinkable coffee.",
  },
  {
    q: "Will a French press always leave sediment at the bottom of the cup?",
    a: "Yes, to some degree. French press brewing keeps grounds in direct contact with water rather than filtering them out during brewing, so even a fine multi-layer mesh filter will let some sediment through. More filter layers reduce it but do not eliminate it entirely.",
  },
  {
    q: "Is a glass or steel French press better?",
    a: "Glass lets you monitor the brew and grounds visually but loses heat faster and is more prone to cracking under an uneven plunge. Steel, especially double-walled steel, holds heat significantly longer and survives drops and uneven plunges better, at the cost of losing visual monitoring.",
  },
  {
    q: "Why did my French press carafe crack?",
    a: "Cracking on glass carafes is most often caused by plunging at an angle or forcing the plunger through resistance instead of stopping and adjusting. Push slowly and evenly with the handle centered, and never force a binding plunger.",
  },
  {
    q: "How often do French press filter screens need to be replaced?",
    a: "With daily use, expect a filter screen to start losing effectiveness after roughly six months to a year of regular plunging, depending on grind coarseness and cleaning habits. Models that ship with spare screens, like the Secura, cover this without an immediate replacement-parts search.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
