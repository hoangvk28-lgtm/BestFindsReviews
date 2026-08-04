export const guideSlug = "best-cold-brew-coffee-makers";
export const guideTitle = "Best Cold Brew Coffee Makers";
export const metaTitle = "Best Cold Brew Coffee Makers (2026): 4 Models Compared";
export const metaDescription =
  "We compared four current cold brew coffee makers on real servings after dilution, usable yield after sediment, fridge footprint and seal quality, and manual steeping versus electric rapid brewing.";
export const mainKeyword = "cold brew coffee makers";
export const lastUpdated = "2026-08-04";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31dPKeu1VqL._SL500_.jpg";

export const introParagraphs = [
  "Cold brew pitcher capacity is usually advertised as if every ounce becomes a drinkable serving, but cold brew is a concentrate meant to be diluted with water, milk, or ice before drinking, and a portion of what you brew never leaves the grounds. Most comparisons repeat the fluid capacity of the pitcher as the number of servings, which overstates what you actually get to drink.",
  "We compared four current cold brew makers on realistic yield after dilution and sediment loss, how well each one fits and seals in a fridge door or shelf, how difficult grounds removal and cleaning really are, and the split between slow manual steep-and-strain systems and fast electric extraction systems, since the tradeoffs between those two approaches are genuinely different.",
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
    id: "takeya-deluxe-cold-brew",
    rank: 1,
    badge: "Best Overall",
    name: "Takeya Deluxe Cold Brew Coffee Maker, 2 Quart",
    amazonUrl: "https://www.amazon.com/dp/B07C36HVWK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31dPKeu1VqL._SL500_.jpg",
    price: "$34.99",
    rating: "4.6",
    reviews: "67,488 reviews",
    specs: ["2 quart (64oz) capacity", "Fine-mesh filter", "Airtight leak-proof lid", "Shatter-proof Tritan"],
    description:
      "The 2 quart capacity brews concentrate, not ready-to-drink coffee, and most people dilute this roughly 1:1 with water or milk, so a full pitcher realistically stretches to 8 to 10 finished 8oz servings rather than the 8 servings a straight fluid-capacity reading would suggest. After accounting for grounds absorbing some liquid and sediment left behind when pouring, expect slightly less concentrate than the full 64oz to actually strain out cleanly.\n\nThe patented airtight lid is a genuine advantage for fridge storage since it both seals in aroma and reduces spill risk if the pitcher gets bumped on a crowded shelf. The fine-mesh filter built into the lid handles grounds removal without a separate filter bag, but it still needs a thorough rinse after each batch since fine grounds can lodge in the mesh.",
    bestFor: "Buyers who want a reliable daily concentrate pitcher with a genuinely leak-proof lid for fridge storage.",
    pros: [
      "Airtight, leak-proof lid is a real advantage over open pitchers in a shared fridge",
      "Shatter-proof Tritan build handles fridge-door use better than glass",
      "Built-in fine-mesh filter avoids needing a separate filter bag",
    ],
    cons: [
      "Concentrate still needs dilution, so servings are fewer than the raw 64oz suggests",
      "Fine-mesh filter requires thorough rinsing to avoid trapped grounds carrying over to the next batch",
    ],
  },
  {
    id: "county-line-kitchen-cold-brew",
    rank: 2,
    badge: "Best Value",
    name: "County Line Kitchen 64oz Cold Brew Coffee Maker with Leak Proof Lid",
    amazonUrl: "https://www.amazon.com/dp/B07VJJJ764?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41rSmR3VAxL._SL500_.jpg",
    price: "$24.99",
    rating: "4.8",
    reviews: "24,785 reviews",
    specs: ["64oz capacity", "Leak-proof lid", "Manual steep-and-strain", "Fridge-door sized"],
    description:
      "This is a manual steep-and-strain pitcher: you combine coarse grounds and water, let it steep in the fridge for roughly 12 to 24 hours, then strain. That long steep time is the tradeoff for needing no electricity and no extraction equipment, just a pitcher and patience, which is the core difference between manual systems like this one and electric rapid-brew machines.\n\nAt 64oz it is sized to fit most standard fridge doors, and the leak-proof lid matters more here than on a countertop pitcher since it is meant to sit undisturbed in the fridge for most of a day. As with any cold brew concentrate, expect meaningful sediment at the bottom after straining unless you filter twice, and dilute before drinking since this is concentrate, not finished coffee.",
    bestFor: "Buyers who want the lowest-cost entry into cold brew and do not mind a 12 to 24 hour steep time.",
    pros: [
      "Lowest price in this comparison",
      "Sized to fit standard fridge doors without crowding shelves",
      "No electricity or equipment beyond the pitcher itself",
    ],
    cons: [
      "12 to 24 hour steep time versus minutes for an electric system",
      "More noticeable sediment after straining than a fine-mesh built-in filter design",
    ],
  },
  {
    id: "vinci-express-cold-brew",
    rank: 3,
    badge: "Best Electric, Fastest Brew",
    name: "VINCI Express Electric Cold Brew Coffee Maker, 47oz",
    amazonUrl: "https://www.amazon.com/dp/B0FY87PWGK?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41kfmP2+6tL._SL500_.jpg",
    price: "$99.99",
    rating: "4.3",
    reviews: "2,179 reviews",
    specs: ["47oz glass carafe", "Electric circulation extraction", "10 to 25 minute brew settings", "Built-in cleaning cycle"],
    description:
      "This is the electric alternative to steep-and-strain systems: instead of waiting 12 to 24 hours, it actively circulates water through the grounds and produces concentrate in as little as 10 minutes, with a 25-minute setting for a bolder brew. That speed is the entire value proposition, and it comes at a real equipment cost, roughly 3 to 4 times the price of a manual pitcher.\n\nThe 47oz capacity is smaller than the 64oz manual pitchers here, so it yields fewer diluted servings per batch even before accounting for concentrate-to-water ratios. It includes a dedicated cleaning cycle, which addresses grounds and residue in the internal brew path that a simple pitcher does not have to deal with, but it also means more internal components that could eventually need maintenance than a pitcher with no moving parts.",
    bestFor: "Buyers who want cold brew today rather than tomorrow and are willing to pay for electric equipment.",
    pros: [
      "Brews in 10 to 25 minutes instead of 12 to 24 hours",
      "Built-in cleaning cycle addresses internal residue a manual pitcher does not have",
      "Adjustable strength settings without needing to guess steep time",
    ],
    cons: [
      "Most expensive option here by a wide margin",
      "Smaller 47oz capacity yields fewer servings per batch than the 64oz manual pitchers",
    ],
  },
  {
    id: "junvpic-cold-brew",
    rank: 4,
    badge: "Best Budget Mason Jar Style",
    name: "JunVpic Cold Brew Coffee Maker, 64 oz Glass Mason Pitcher",
    amazonUrl: "https://www.amazon.com/dp/B0BNN7GGKR?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/4180g4zZT-L._SL500_.jpg",
    price: "$19.99",
    rating: "4.6",
    reviews: "4,365 reviews",
    specs: ["64oz glass mason pitcher", "Stainless steel filter", "Manual steep-and-strain", "Wide-mouth opening"],
    description:
      "This is another manual steep-and-strain pitcher, glass rather than plastic, with a wide-mouth mason-jar-style opening that makes both filling with grounds and cleaning afterward easier than pitchers with a narrower neck. Grounds removal is one of the more tedious parts of manual cold brew, and a wide mouth genuinely helps.\n\nGlass takes up roughly the same fridge footprint as the plastic County Line Kitchen pitcher but is heavier and, unlike shatter-proof Tritan, can break if dropped on a hard fridge shelf or floor. The same steep time and dilution math applies as any manual system: budget 12 to 24 hours to steep and dilute the concentrate before drinking.",
    bestFor: "Buyers who prefer a glass pitcher and want an easier-to-clean wide mouth over a narrower-necked design.",
    pros: [
      "Wide mouth makes filling and cleaning noticeably easier than narrow-neck pitchers",
      "Lowest price of the two manual pitchers compared here",
      "Glass avoids any plastic taste transfer some buyers notice with plastic pitchers",
    ],
    cons: [
      "Glass can break if dropped, unlike shatter-proof Tritan alternatives",
      "Same 12 to 24 hour steep time as any manual system",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Servings are lower than pitcher capacity suggests",
    explanation:
      "Cold brew concentrate is typically diluted roughly 1:1 with water, milk, or ice before drinking, and grounds absorb some liquid during steeping. A 64oz pitcher of concentrate yields meaningfully fewer finished 8oz servings than 8, not more, once you account for both dilution and loss to the grounds.",
  },
  {
    criterion: "Usable yield after sediment",
    explanation:
      "Straining always leaves some sediment behind or lets some through, depending on filter fineness. Built-in fine-mesh filters like Takeya's reduce this more than a basic mesh strainer, but no cold brew method eliminates sediment loss entirely.",
  },
  {
    criterion: "Fridge footprint and lid seal quality",
    explanation:
      "A pitcher needs to actually fit your fridge door or shelf and stay sealed while jostled by other items. Leak-proof, airtight lids like Takeya's and County Line Kitchen's matter more here than they would for a countertop pitcher.",
  },
  {
    criterion: "Grounds removal and cleaning difficulty",
    explanation:
      "Narrow-neck pitchers make grounds removal more tedious than wide-mouth mason-jar-style designs. Factor in how much daily cleanup friction you are willing to accept before committing to a narrower pitcher shape.",
  },
  {
    criterion: "Manual steep-and-strain vs electric rapid brewing",
    explanation:
      "Manual systems need no equipment cost beyond the pitcher but require 12 to 24 hours of steep time. Electric systems like the VINCI Express cost 3 to 4 times more but produce concentrate in 10 to 25 minutes. Choose based on whether time or equipment cost matters more to your routine.",
  },
];

export const howWeEvaluated = [
  {
    title: "Realistic servings after dilution",
    description:
      "We calculated approximate finished servings after accounting for typical dilution ratios and liquid absorbed by the grounds, rather than treating raw pitcher capacity as the serving count.",
  },
  {
    title: "Sediment and filter fineness",
    description:
      "We compared each model's filter design for how much sediment realistically makes it into the final pour, since no cold brew method removes all of it.",
  },
  {
    title: "Fridge fit and seal quality",
    description:
      "We assessed pitcher shape and lid seal quality specifically for fridge storage, including leak risk if the pitcher gets bumped by other items.",
  },
  {
    title: "Grounds removal and cleanup effort",
    description:
      "We compared opening width and filter design for how much effort grounds removal and post-brew cleaning actually take.",
  },
  {
    title: "Manual vs electric tradeoff",
    description:
      "We separated manual steep-and-strain pitchers from the electric rapid-brew system and evaluated each against its own tradeoff of time versus equipment cost, rather than judging them on the same scale.",
  },
];

export const howToChoose = [
  {
    subheading: "Manual Steep vs Electric Rapid Brew",
    table: {
      headers: ["Priority", "Recommended Pick"],
      rows: [
        ["Lowest cost, do not mind waiting 12 to 24 hours", "County Line Kitchen or JunVpic"],
        ["Want concentrate today, willing to pay more", "VINCI Express Electric Cold Brew"],
        ["Best balance of features and fridge-ready design", "Takeya Deluxe Cold Brew"],
      ],
    },
  },
  {
    subheading: "Realistic Servings Per Batch",
    intro: "Pitcher capacity is concentrate volume, not finished drink volume. Dilution roughly doubles the liquid but the grounds absorb some along the way.",
    table: {
      headers: ["Pitcher Capacity", "Approx. Concentrate Yield", "Approx. Diluted 8oz Servings"],
      rows: [
        ["64oz (County Line Kitchen, JunVpic)", "~52 to 56oz after grounds absorption", "9 to 10 servings diluted 1:1"],
        ["47oz (VINCI Express)", "~40 to 44oz after grounds absorption", "6 to 7 servings diluted 1:1"],
      ],
    },
    note: "Actual dilution ratio is a matter of taste; some people prefer closer to 1:2 concentrate to water, which stretches servings further but produces a weaker cup.",
  },
  {
    subheading: "Fridge Fit and Cleanup",
    cards: [
      {
        label: "Narrow pitchers",
        text: "Fit fridge doors well but make grounds removal more tedious. Both the Takeya and County Line Kitchen fall into this category.",
      },
      {
        label: "Wide-mouth mason style",
        text: "The JunVpic's wide opening makes filling and cleaning noticeably easier at the cost of taking up more shelf width than a narrow door-fit pitcher.",
      },
    ],
  },
  {
    subheading: "Glass vs Shatter-Proof Plastic",
    cards: [
      {
        label: "Glass (JunVpic)",
        text: "No plastic taste transfer, but can break if dropped on a hard fridge shelf or floor.",
      },
      {
        label: "Shatter-proof Tritan (Takeya)",
        text: "Handles drops and fridge-door use better than glass, with no meaningful taste tradeoff for most drinkers.",
      },
    ],
  },
  {
    subheading: "When Electric Rapid Brew Is Worth the Cost",
    cards: [
      {
        label: "Worth it if",
        text: "You want cold brew the same day you decide to make it, or you regularly run out and cannot wait a full steep cycle. The VINCI Express justifies its price for this specific need.",
      },
      {
        label: "Skip it if",
        text: "You can plan a day ahead. A manual pitcher costs a third to a quarter as much and produces essentially the same finished drink once diluted.",
      },
    ],
  },
];

export const faq = [
  {
    q: "How many servings do I actually get from a 64oz cold brew pitcher?",
    a: "Fewer than 64oz worth, since cold brew concentrate is meant to be diluted, typically close to 1:1 with water, milk, or ice, and grounds absorb some liquid during steeping. Expect roughly 9 to 10 finished 8oz servings from a full 64oz batch of concentrate, not 8.",
  },
  {
    q: "Why does my cold brew have sediment at the bottom of the glass?",
    a: "No cold brew filter, mesh or paper, catches every fine particle, so some sediment is normal regardless of which pitcher or filter you use. A finer built-in mesh filter, like Takeya's, reduces sediment more than a basic strainer but does not eliminate it.",
  },
  {
    q: "Is electric cold brew worth the extra cost over a manual pitcher?",
    a: "It depends on how much you value speed. An electric system like the VINCI Express produces concentrate in 10 to 25 minutes versus 12 to 24 hours for a manual pitcher, but costs 3 to 4 times more. If you can plan a day ahead, a manual pitcher produces essentially the same finished drink for less.",
  },
  {
    q: "How long does cold brew concentrate stay fresh in the fridge?",
    a: "Properly sealed cold brew concentrate typically stays fresh for about one to two weeks in the fridge. An airtight, leak-proof lid, like the one on the Takeya or County Line Kitchen pitchers, helps preserve aroma and prevent spills better than an open or loosely sealed container.",
  },
  {
    q: "Do I need a special grind for cold brew?",
    a: "Yes, a coarse grind, similar to French press. A finer grind increases sediment and makes straining more difficult regardless of which pitcher or filter design you use.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
