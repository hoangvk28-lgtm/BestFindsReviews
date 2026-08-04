export const guideSlug = "best-1-cup-coffee-makers";
export const guideTitle = "Best 1-Cup Coffee Makers";
export const metaTitle = "Best 1-Cup Coffee Makers (2026): 4 Models Compared";
export const metaDescription =
  "We compared four current single-cup coffee makers on actual brewed ounces, fill style, and footprint so you know exactly what you are getting before you buy.";
export const mainKeyword = "1 cup coffee makers";
export const lastUpdated = "2026-08-04";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/310Vh-Nnu7L._SL500_.jpg";

export const introParagraphs = [
  "A 1-cup coffee maker means something different here than the 5oz manufacturer cup used to size a 12 or 14-cup carafe machine. In this category, 1 cup refers to a genuinely single-mug-sized brew, typically 6 to 14oz depending on the model, so the numbers below are actual brewed ounces, not the smaller industry cup unit. This is also a distinct product category from single-serve pod machines generally; if you are comparing K-Cup brewers specifically, our Keurig guide covers that ground in more depth.\n\nWe compared four current, distinct single-cup models, focusing on how many ounces each one actually brews, whether it uses a reservoir you fill once for multiple brews or fill fresh every time, and how each compares in footprint to slightly larger 2 to 4 cup alternatives.",
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
    id: "keurig-k-mini",
    rank: 1,
    badge: "Best Overall",
    name: "Keurig K-Mini Single Serve K-Cup Pod Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B07GV2S1GS?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/310Vh-Nnu7L._SL500_.jpg",
    price: "$71.95",
    rating: "4.3",
    reviews: "108,756 reviews",
    specs: ["Under 5in wide", "6 to 12oz brew range", "Fill-per-brew reservoir", "K-Cup pod compatible", "Auto off after 90 seconds"],
    description:
      "The K-Mini brews anywhere from 6 to 12oz per cup using K-Cup pods, with a one-cup reservoir that you fill fresh for every brew rather than keeping a tank topped off. At under 5 inches wide, it is the narrowest machine in this comparison, built specifically to fit tight counter space, dorms, or office desks.\n\nIt is also compatible with the My K-Cup reusable filter for brewing your own ground coffee instead of pods, and it has the largest review base of any model here by a wide margin, which tracks with how often it is bought as a first or secondary coffee maker.",
    bestFor: "Buyers who want the smallest possible footprint and are comfortable filling water for every single brew.",
    pros: [
      "Narrowest footprint of the four models here, under 5 inches wide",
      "Brew range of 6 to 12oz covers a mug or a travel cup",
      "Most reviewed model in this comparison",
    ],
    cons: [
      "Fill-per-brew reservoir means refilling water every single cup",
      "Requires K-Cup pods or the separately compatible reusable filter",
    ],
  },
  {
    id: "elite-gourmet-ehc111a",
    rank: 2,
    badge: "Best for Grounds",
    name: "Elite Gourmet EHC111A Personal Single-Serve Compact Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B08FVDYKKY?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31HDjcsUnyL._SL500_.jpg",
    price: "$22.99",
    rating: "4.3",
    reviews: "9,293 reviews",
    specs: ["Brews up to 12oz", "600-watt heater", "Includes stainless steel travel mug", "Brews in under 60 seconds", "Compact narrow design"],
    description:
      "The EHC111A brews up to 12oz directly from ground coffee, no pods required, using a single-touch button and a 600-watt heater that finishes a brew in under 60 seconds. It ships with a 12oz stainless steel insulated travel mug sized to fit directly under the dispenser, aimed at grab-and-go mornings.\n\nAt under $25 it is by far the least expensive machine in this comparison, and its compact narrow design fits easily into a dorm room, office, or small kitchen corner.",
    bestFor: "Buyers who want to brew ground coffee directly, without pods, at the lowest price in this comparison.",
    pros: [
      "Lowest price of the four models here",
      "Brews ground coffee directly, no pod cost over time",
      "Includes a travel mug sized to the dispenser",
    ],
    cons: [
      "12oz maximum, no smaller or larger brew size options",
      "No reservoir at all; water is added fresh per brew directly at the machine",
    ],
  },
  {
    id: "elite-gourmet-ehc113m",
    rank: 3,
    badge: "Best for Larger Mugs",
    name: "Elite Gourmet EHC113M Personal Single-Serve Compact Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B0B41D4PR1?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31yz6rZT4SL._SL500_.jpg",
    price: "$21.99",
    rating: "4.3",
    reviews: "9,293 reviews",
    specs: ["Brews up to 14oz", "Includes 14oz insulated travel mug", "600-watt heater", "Reusable filter for grounds or loose tea", "Brews in under 60 seconds"],
    description:
      "The EHC113M is a related model to the EHC111A but brews up to 14oz instead of 12oz, and ships with a matching 14oz stainless steel travel mug rather than a 12oz one. It uses the same one-touch, under-60-second brewing and a removable reusable filter that also works for loose-leaf tea, not just coffee grounds.\n\nIf your travel mug or morning routine runs larger than a standard 12oz cup, this is the more useful of the two Elite Gourmet models here, at essentially the same price.",
    bestFor: "Buyers who want a slightly larger single brew, up to 14oz, for a bigger travel mug.",
    pros: [
      "Brews up to 14oz, the largest single-cup output in this comparison",
      "Reusable filter also works for loose-leaf tea",
      "Same low price point as the EHC111A",
    ],
    cons: [
      "No reservoir; water is added fresh directly at the machine for every brew",
      "Smaller review base than the Keurig K-Mini or EHC111A",
    ],
  },
  {
    id: "horavie-single-serve",
    rank: 4,
    badge: "Best Pod-and-Grounds Hybrid",
    name: "Horavie Small Single Serve Coffee Maker for K-Cup and Grounds",
    amazonUrl: "https://www.amazon.com/dp/B0DCJMFPDH?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41savQk-eiL._SL500_.jpg",
    price: "$34.99",
    rating: "4.0",
    reviews: "3,682 reviews",
    specs: ["6 to 12oz brew range", "Works with K-Cup pods or grounds", "Built-in water tank with view window", "Brews in about 2 minutes", "Descale reminder light"],
    description:
      "The Horavie is the only model here that natively accepts both K-Cup pods and loose grounds in the same machine without a separate reusable filter accessory, brewing 6 to 12oz in about 2 minutes with one-button operation. Its built-in tank has a view window so you can see the water level before brewing, closer to a small reservoir than a strict fill-per-brew design.\n\nIt also includes a descale reminder light, a feature none of the other three models in this comparison advertise, which matters since skipped descaling is a common cause of slow or weak single-serve brews over time.",
    bestFor: "Buyers who want the flexibility to switch between K-Cup pods and ground coffee without buying a separate filter.",
    pros: [
      "Accepts both K-Cup pods and ground coffee natively",
      "Built-in descale reminder, unique among the four models here",
      "View window on the water tank for a quick level check",
    ],
    cons: [
      "Smallest review base of the four models in this comparison",
      "Slightly higher price than the two Elite Gourmet models",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Actual brewed ounces, not the 'cup' label",
    explanation:
      "In this category 1 cup means a real single-mug brew, typically 6 to 14oz depending on the model, not the 5oz manufacturer cup used to size larger carafe machines. Check the stated ounce range on the listing before assuming '1 cup' matches your usual mug size.",
  },
  {
    criterion: "Fill-per-brew vs small reservoir",
    explanation:
      "Models like the two Elite Gourmet units here have no reservoir at all, so you add water fresh at the machine every time, while the Horavie's small built-in tank and the Keurig's one-cup reservoir sit closer to a mini fill-once design. Fill-per-brew means fresher water each cup but an extra step every morning.",
  },
  {
    criterion: "Pods, grounds, or both",
    explanation:
      "The Keurig K-Mini is pod-based by default (reusable filter sold separately), the two Elite Gourmet models brew grounds only, and the Horavie accepts either natively. Match this to whether you want the convenience of pods or the lower ongoing cost of grounds.",
  },
  {
    criterion: "Brew time",
    explanation:
      "The Elite Gourmet models and Horavie all brew in under 2 minutes, faster than most larger drip machines, which matters if your morning routine is tight. Confirm brew time on the specific listing since it varies by model even within this compact category.",
  },
  {
    criterion: "Footprint vs a 2-4 cup alternative",
    explanation:
      "A true 1-cup machine like the K-Mini is narrower than any 2-4 cup model, but if you occasionally need to brew for a second person, a compact 4-cup carafe machine may be worth the few extra inches of counter space instead of brewing twice.",
  },
  {
    criterion: "Descale and maintenance reminders",
    explanation:
      "Only the Horavie in this comparison includes a built-in descale reminder. On models without one, set a manual reminder every 1 to 2 months of daily use, since single-serve machines' small internal tubing can clog faster than a large reservoir system.",
  },
];

export const howWeEvaluated = [
  {
    title: "Verified actual brewed ounces",
    description:
      "We checked each listing's stated ounce range to confirm what '1 cup' actually means on that specific model, since it varies from 6oz to 14oz across this category.",
  },
  {
    title: "Fill style and daily convenience",
    description:
      "We compared fill-per-brew designs against small built-in reservoirs to judge how much extra step is added to a daily routine.",
  },
  {
    title: "Pod and grounds compatibility",
    description:
      "We noted whether each model uses K-Cup pods, ground coffee, or both, since this affects both ongoing cost and brewing flexibility.",
  },
  {
    title: "Footprint against larger alternatives",
    description:
      "We measured each model's width and depth against typical 2-4 cup compact machines to judge whether the extra footprint savings are worth any tradeoffs.",
  },
  {
    title: "Maintenance features",
    description:
      "We checked for descale reminders and ease of cleaning, since single-serve machines' narrow internal tubing needs more frequent attention than a full-size reservoir system.",
  },
];

export const howToChoose = [
  {
    subheading: "Cup Size vs Manufacturer Cup",
    intro: "Do not confuse this category's real single-mug brews with the 5oz 'manufacturer cup' unit used on 10, 12, or 14-cup carafe machines.",
    table: {
      headers: ["Term", "What It Actually Means"],
      rows: [
        ["1 cup (this category)", "A genuine single brew, 6 to 14oz depending on the model"],
        ["'1 cup' on a 12-cup carafe spec sheet", "Approximately 5 fl oz, the manufacturer's sizing unit"],
      ],
    },
    note: "Always check the stated ounce range on the specific listing rather than assuming '1 cup' means the same thing across categories.",
  },
  {
    subheading: "By Brew Size Needed",
    table: {
      headers: ["Your Usual Mug Size", "Recommended Pick"],
      rows: [
        ["6 to 12oz", "Keurig K-Mini or Horavie Single Serve"],
        ["Up to 12oz, ground coffee only", "Elite Gourmet EHC111A"],
        ["Up to 14oz, larger travel mug", "Elite Gourmet EHC113M"],
      ],
    },
  },
  {
    subheading: "Pods vs Grounds",
    cards: [
      {
        label: "Prefer pods",
        text: "The Keurig K-Mini is the clear pick, with the largest pod ecosystem and fastest brew-to-cup convenience of the four models here.",
      },
      {
        label: "Prefer ground coffee",
        text: "Either Elite Gourmet model works well for grounds-only brewing at the lowest price point, or the Horavie if you want the option to switch to pods occasionally.",
      },
    ],
  },
  {
    subheading: "Single-Cup Machine vs a Compact 2-4 Cup Model",
    intro: "If you sometimes brew for two people, a slightly larger machine may save you from brewing twice.",
    table: {
      headers: ["Situation", "Better Fit"],
      rows: [
        ["Almost always brewing for one person", "Any of the four 1-cup models here"],
        ["Occasionally brewing for two people", "A compact 4-cup carafe machine instead"],
      ],
    },
    note: "A true 1-cup machine is narrower and simpler, but you will need to run it twice for two mugs at once, which some buyers find more annoying than a slightly larger footprint.",
  },
  {
    subheading: "Fill-Per-Brew vs Small Reservoir",
    cards: [
      {
        label: "Fill-per-brew",
        text: "Both Elite Gourmet models require adding water fresh at the machine every single brew, which means no standing water but one more step each time.",
      },
      {
        label: "Small reservoir",
        text: "The Keurig K-Mini's one-cup reservoir and the Horavie's built-in tank hold a small amount of water you top off, closer to a mini fill-once system, though still far smaller than a full 10-cup reservoir.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Does '1 cup' mean the same thing as the 'cups' on a 12-cup coffee maker?",
    a: "No. On a 12 or 14-cup carafe machine, a manufacturer cup is about 5 fluid ounces. In this single-cup category, 1 cup refers to an actual single-mug brew, typically 6 to 14oz depending on the model, so always check the stated ounce range.",
  },
  {
    q: "Is this the same as a single-serve pod machine guide?",
    a: "It overlaps but is not identical. This guide covers machines built to brew one genuine mug-sized cup, whether by pod or ground coffee. If you specifically want to compare K-Cup pod brewers in more depth, our Keurig coffee makers guide covers that category directly.",
  },
  {
    q: "Do I need to fill the reservoir every time I brew?",
    a: "It depends on the model. The two Elite Gourmet machines here have no reservoir at all, so you add water fresh for every brew. The Keurig K-Mini and Horavie use a small built-in tank you can top off, though it is still far smaller than a full 10-cup reservoir.",
  },
  {
    q: "Can I use ground coffee instead of pods?",
    a: "Yes, on the two Elite Gourmet models and the Horavie, which all brew grounds directly. The Keurig K-Mini is pod-based by default, though it is compatible with the separately sold My K-Cup reusable filter if you want to brew grounds on it too.",
  },
  {
    q: "How much smaller are these than a compact 4-cup machine?",
    a: "The Keurig K-Mini is under 5 inches wide, narrower than most 4-cup carafe machines, which commonly run 6 to 8 inches wide. If you occasionally brew for two people, though, the extra few inches of a compact 4-cup model may save you from running a 1-cup machine twice.",
  },
  {
    q: "How often should I descale a single-cup coffee maker?",
    a: "Roughly every 1 to 2 months with daily use, since the narrow internal tubing on single-serve machines can clog faster than a full-size reservoir system. Only the Horavie in this comparison includes a built-in descale reminder; set a manual reminder on the others.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
