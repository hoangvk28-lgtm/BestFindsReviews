export const guideSlug = "best-lawn-mowers-under-100";
export const guideTitle = "Best Lawn Mowers Under $100";
export const metaTitle = "Best Lawn Mowers Under $100 (2026): Honest Picks and Buying Guide";
export const metaDescription = "Best lawn mowers under $100 compared by cut width, power source, maintenance, and real ownership cost, with an honest look at how thin this price tier actually is.";
export const mainKeyword = "lawn mowers under 100";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg";

export const introParagraphs = [
  "Search for a lawn mower under $100 and the honest answer is that the powered options at this price are limited. Most full-size gas and battery mowers cross $100 quickly once you add a real deck width, a usable battery pack, or a self-propel system, so the mowers that stay under this line are mostly manual reel mowers and a small number of compact corded electrics.",
  "We looked at what is actually available under $100 right now rather than padding the list with items priced just over the line. That means fewer entries than a typical roundup, a reel mower at the top for anyone with a small, flat, obstacle-light lawn, and clear notes on where a slightly higher budget buys real capability.",
];

export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }

export const products: GuideProduct[] = [
  {
    id: "american-lawn-mower-1204-14",
    rank: 1,
    badge: "Best Overall",
    name: "American Lawn Mower 1204-14 14-Inch 4-Blade Push Reel Mower",
    amazonUrl: "https://www.amazon.com/dp/B00004RA3F?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg",
    price: "$72.00",
    ctaLabel: "Check price on Amazon",
    shortCtaLabel: "Check price",
    specs: ["14-inch cutting width", "4-blade reel", "No motor, no battery, no fuel", "Push-powered"],
    description: "The American Lawn Mower 1204-14 is a manual push reel mower with a 14-inch cutting width and a 4-blade reel, and it is rated 4.3 stars across more than 15,000 reviews, which is a large review base for this price tier. There is no motor, battery, or fuel involved, so there is nothing to charge, no cord to manage, and no oil or spark plug to maintain.\n\nThe tradeoff of a reel mower is scope. A 14-inch width and manual power work well on a small, flat, regularly mowed lawn, but they are not a fit for tall grass, thick weeds, or a large property where a powered mower would finish in a fraction of the time. Blade adjustment and periodic sharpening are the main upkeep tasks.",
    bestFor: "small, flat, regularly mowed lawns where buyers want zero fuel or battery upkeep",
    pros: ["Rated 4.3 stars across over 15,000 reviews, a large track record for this price", "No battery, cord, or fuel to manage", "Simple mechanical design with minimal upkeep"],
    cons: ["Manual push power is tiring on larger lawns or thick grass", "14-inch width means more passes than a full-size powered mower"],
  },
  {
    id: "black-decker-besta512cm",
    rank: 2,
    badge: "Best Alternative",
    name: "BLACK+DECKER BESTA512CM 3-in-1 Corded Mower, Trimmer, and Edger",
    amazonUrl: "https://www.amazon.com/dp/B078YYPWLY?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31CdnGNWAvL._SL500_.jpg",
    price: "$65.00",
    ctaLabel: "Check price on Amazon",
    shortCtaLabel: "Check price",
    specs: ["12-inch cutting width", "6.5A corded motor", "Converts to trimmer and edger", "No battery replacement"],
    description: "The BLACK+DECKER BESTA512CM is a corded electric 3-in-1 tool that mows a 12-inch path and converts to a string trimmer and edger, and it holds a 4.2-star rating across roughly 9,600 reviews. Because it runs on a 6.5A corded motor rather than a battery, there is no pack to replace or recharge over the life of the tool.\n\nThe compact 12-inch mowing width and reliance on an extension cord make this best suited to a small yard, tight side strips, or trim work rather than a primary mower for a full-size lawn. Managing the cord around the mowing path is the main day-to-day tradeoff, and the multi-tool design means the mower deck is intentionally narrow.",
    bestFor: "small yards and edge or trim work where one compact corded tool needs to cover multiple jobs",
    pros: ["Rated 4.2 stars across about 9,600 reviews", "No battery to buy or replace", "Converts between mower, trimmer, and edger"],
    cons: ["12-inch width is narrow for anything beyond a small lawn or trim work", "Corded design limits range to the length of the extension cord"],
  },
  {
    id: "litheli-cordless-14",
    rank: 3,
    badge: "Also Consider",
    name: "Litheli Cordless Lawn Mower 14-Inch with 5.0Ah Battery",
    amazonUrl: "https://www.amazon.com/dp/B0GXVD6ZLV?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/51zw5LOnu7L._SL500_.jpg",
    price: "$99.99",
    ctaLabel: "Check price on Amazon",
    shortCtaLabel: "Check price",
    specs: ["14-inch cutting width", "5.0Ah battery and charger included", "Brushless motor", "5-position height adjustment"],
    description: "The Litheli 14-Inch is a cordless battery mower that lands right at the $100 line, with a brushless motor, an included 5.0Ah battery and charger, and 5-position height adjustment. It is the only battery-powered walk-behind on this list under $100, which matters for buyers who want the convenience of a powered mower without an extension cord.\n\nIts review base is small at 48 ratings averaging 3.9 stars, so there is much less track record here than the reel mower or the corded electric above it. The 14-inch deck and single included battery also point to a compact lawn rather than a full-size yard, and buyers should weigh the limited review history against the convenience of cordless operation before choosing it over the more established options on this list.",
    bestFor: "buyers who specifically want a cordless powered mower and are comfortable with a limited review history",
    pros: ["Only cordless battery walk-behind under $100 on this list", "Battery and charger included, no separate purchase needed", "5-position height adjustment"],
    cons: ["Only 48 reviews at 3.9 stars, a much smaller track record than the other picks", "14-inch deck and single battery limit it to smaller lawns"],
  },
];

export const buyingCriteria = [
  { criterion: "The complete, ready-to-mow price", explanation: "Confirm the listed price includes a usable battery and charger, or that a corded model includes the plug needed to run it. A price that excludes the battery is not really an under $100 price." },
  { criterion: "Excluding temporary sale-only qualification", explanation: "A mower that only fits this budget during a limited-time discount is not a reliable under $100 pick. Check whether the current price is a stable listing price or a flash discount that could revert." },
  { criterion: "Minimum cut, safety, and warranty standards", explanation: "Even at a low price, look for an enclosed blade guard, a dead-man safety bar or switch, and at least a basic manufacturer warranty rather than no coverage at all." },
  { criterion: "Separating power sources at this tier", explanation: "Reel, corded electric, and battery mowers behave very differently day to day. Decide which power source fits your yard and routine before comparing models within that category." },
  { criterion: "What meaningfully improves at the next tier", explanation: "Moving above $100 typically buys a wider deck, self-propel, or a larger battery pack. Know what you are giving up at this price so the tradeoff is a deliberate choice, not a surprise." },
];

export const howWeEvaluated = [
  { title: "Price discipline", description: "We excluded every product priced at or above $100 rather than rounding up, which limited the list to a reel mower and two compact electrics." },
  { title: "Yard fit at this budget", description: "We matched cutting width and power source to the small, flat, regularly maintained lawns this price tier realistically serves." },
  { title: "Review history where available", description: "We weighed real rating and review counts where Amazon provided them, and called out when a listing had too few reviews to draw a strong conclusion." },
  { title: "Power source tradeoffs", description: "We compared manual, corded, and battery power directly so buyers understand what changes about daily use at each option, not just the price tag." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Mower to Your Yard and Budget", table: { headers: ["Buyer situation", "Recommended pick"], rows: [["Small, flat lawn, no fuel or battery wanted", "American Lawn Mower 1204-14 14-Inch 4-Blade Push Reel Mower"], ["Small yard needing trim and edge work too", "BLACK+DECKER BESTA512CM 3-in-1 Corded Mower, Trimmer, and Edger"], ["Wants cordless power and can accept a thin review history", "Litheli Cordless Lawn Mower 14-Inch with 5.0Ah Battery"], ["Large, hilly, or overgrown lawn", "Look above $100 for a wider deck, self-propel, and a larger battery pack"]] } },
  { subheading: "Choose the Right Power Source at This Price", cards: [ { label: "Manual reel", text: "Best when the lawn is small and flat and the buyer wants no ongoing fuel, cord, or battery cost, in exchange for physical effort and a narrower cut path." }, { label: "Corded electric", text: "Best for small yards near an outlet where a cord is manageable, avoiding battery replacement entirely but limiting range to the cord length." }, { label: "Cordless battery", text: "Best for buyers who want powered mowing without a cord and are willing to accept less capacity and a shorter track record at this price point." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Item", "Verify before buying"], rows: [["Included parts", "Confirm the battery, charger, or power cord needed to run the mower is included in the listed price"], ["Blade care", "Reel blades need periodic sharpening and alignment; electric blades need periodic replacement"], ["Coverage area", "Match the cutting width and any battery capacity to your actual lawn size, not just the price"], ["Warranty", "Check the manufacturer warranty length and what it actually covers at this price tier"]] } },
];

export const faq = [
  { q: "Can I get a real powered lawn mower under $100?", a: "Options are limited. Most full-size gas and battery mowers with a usable deck width cross $100 once a real battery pack or self-propel system is included, so under $100 typically means a manual reel mower or a compact corded electric." },
  { q: "Is a manual reel mower actually practical?", a: "Yes, for a small, flat, regularly mowed lawn without thick grass or weeds. It requires more physical effort than a powered mower and is a poor fit for larger or overgrown yards." },
  { q: "Are corded electric mowers worth it at this price?", a: "They can be, for small yards near an outlet. You avoid battery replacement costs entirely, but you are limited by extension cord length and need to manage the cord around the mowing path." },
  { q: "Should I trust a cordless mower with very few reviews?", a: "Weigh it carefully. A low review count means less real-world track record, so it is worth comparing that risk against the convenience of cordless power before choosing it over a more established option." },
  { q: "When should I spend more than $100?", a: "Once a lawn is large, hilly, or has thick or overgrown grass, moving above $100 typically buys a wider deck, self-propel assistance, or a larger battery pack that a sub $100 mower cannot match." },
];

export const relatedGuides: { title: string; href: string }[] = [];
