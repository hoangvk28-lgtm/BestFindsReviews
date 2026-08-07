export const guideSlug = "best-lawn-mowers-under-500";
export const guideTitle = "Best Lawn Mowers Under $500";
export const metaTitle = "Best Lawn Mowers Under $500 (2026): 6 Models Compared";
export const metaDescription = "Best Lawn Mowers Under $500 compared by power source, deck width, propulsion, complete ownership cost, and real buyer ratings so you can shop by budget without guessing.";
export const mainKeyword = "lawn mowers under 500";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/418i3mcBfML._SL500_.jpg";
export const introParagraphs = [
  "A $500 ceiling still spans push electric mowers under $250, self-propelled electric mowers near $450, and gas self-propelled mowers in between, so the format you get for the money varies far more than the price alone suggests. Instead of ranking by price, we grouped these six current models by what a buyer actually gives up or gains as the price climbs from around $250 toward the $500 line.",
  "We compared deck width, propulsion, power source, and the complete price of what ships in the box (battery and charger included, or gas engine ready to start) against buyer ratings and review volume, so you can see where the extra spending actually buys capability rather than just a bigger number on the listing.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "ego-lm2114", rank: 1, badge: "Best Overall", name: "EGO Power+ LM2114 21-Inch Cordless Mower",
    amazonUrl: "https://www.amazon.com/dp/B0BLT8L937?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/418i3mcBfML._SL500_.jpg", price: "$399.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "Battery and charger included", "Push drive", "No gas or cords"],
    description: "The EGO Power+ LM2114 pairs a full 21-inch deck with a battery and charger included in the box, so there is no separate pack to buy before the first mow. Amazon shoppers rate it 4.5 out of 5 across roughly 2,160 reviews, one of the strongest ratings among the mowers here, though at $399.00 it sits well above the cheapest push electrics in this guide.\n\nBecause it has no self-propel drive, pushing effort on flat lawns is light but rises noticeably on slopes or thick grass compared to the self-propelled options below. It is the mower to choose when a full-width electric deck and a genuinely complete included battery kit matter more than drive assistance.",
    bestFor: "standard-size flat lawns where a full-width electric deck and complete included battery kit matter more than self-propel",
    pros: ["21-inch deck covers ground faster than the 16-inch models here", "Battery and charger included, no separate pack purchase", "Rated 4.5 out of 5 across roughly 2,160 reviews"],
    cons: ["No self-propel drive, so pushing effort rises on slopes or thick grass", "Costs more upfront than the push electric and several gas options in this guide"],
  },
  {
    id: "greenworks-40v-16", rank: 2, badge: "Best Value", name: "Greenworks 40V 16-Inch Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B00BBQVL5U?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41hGtP+Q5jL._SL500_.jpg", price: "$249.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch deck", "4.0Ah battery and charger included", "Push drive", "Lightest mower in this guide"],
    description: "At $249.99, the Greenworks 40V 16-Inch is the least expensive complete, ready-to-mow option in this comparison, and it is also the most reviewed, with roughly 12,116 ratings averaging 4.2 out of 5. The included 4.0Ah battery and charger mean there is nothing else to add before the first cut.\n\nThe narrower 16-inch deck means more passes on a medium or large lawn compared to the 21-inch electric and gas mowers ranked above and below it, and there is no self-propel assistance. It fits buyers with a small, flat lawn or anyone already using Greenworks 40V tools who wants to share a battery platform.",
    bestFor: "small flat lawns and buyers already invested in the Greenworks 40V battery platform",
    pros: ["Lowest complete price in this guide at $249.99", "Most-reviewed mower here, roughly 12,116 ratings at 4.2 out of 5", "Battery and charger included, nothing else to buy"],
    cons: ["16-inch deck means more passes on medium or large lawns", "No self-propel drive"],
  },
  {
    id: "greenworks-80v-21", rank: 3, badge: "Best Self-Propelled Electric", name: "Greenworks 80V 21-Inch Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSC6B2T?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg", price: "$449.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4.0Ah battery and charger included", "Self-propelled", "Highest price in this guide under $500"],
    description: "The Greenworks 80V 21-Inch is the most expensive mower in this guide that still stays under the $500 line, at $449.99, and it is the only self-propelled electric mower here. It shares the 4.5 out of 5 rating of the top-ranked EGO, though with a smaller review base of roughly 586 ratings.\n\nSelf-propel reduces pushing effort on slopes and larger flat lawns, but the drive motor draws from the same 80V pack that powers the blade, so runtime on a single charge is worth checking against the size of the lawn before buying. This is the mower for buyers who want electric power and self-propel together without moving into gas.",
    bestFor: "medium to larger lawns where self-propel assistance matters and gas is not wanted",
    pros: ["Only self-propelled electric mower in this guide", "21-inch deck with battery and charger included", "Rated 4.5 out of 5 across roughly 586 reviews"],
    cons: ["Highest price in this guide, close to the $500 ceiling", "Self-propel drive shares battery capacity with the blade, so runtime should be checked against lawn size"],
  },
  {
    id: "powersmart-22-170cc", rank: 4, badge: "Best Gas Self-Propelled", name: "PowerSmart 22-Inch 170cc Self-Propelled Gas Mower",
    amazonUrl: "https://www.amazon.com/dp/B0DX6X3X8N?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41kuicC5zCL._SL500_.jpg", price: "$299.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["22-inch deck", "170cc gas engine", "Self-propelled", "No battery or charging needed"],
    description: "The PowerSmart 22-Inch is a gas self-propelled mower at $299.99, priced below every electric self-propelled mower in this guide while offering the widest deck here at 22 inches. It carries a 4.2 out of 5 rating across roughly 936 reviews.\n\nGas power avoids battery cost and charging time entirely, but it adds fuel, oil changes, spark plug and air filter service, and seasonal starting maintenance that electric mowers do not need. It suits buyers who want self-propel and a wide deck at a lower upfront price and are comfortable with routine small-engine maintenance.",
    bestFor: "buyers wanting self-propel and the widest deck in this guide at a lower price than electric self-propelled options",
    pros: ["Widest deck in this guide at 22 inches", "Self-propelled at a lower price than the electric self-propelled option here", "No battery to buy or charge"],
    cons: ["Gas engine adds fuel, oil, and filter maintenance electric mowers avoid", "Seasonal starting and winterizing steps required"],
  },
  {
    id: "powersmart-21-hills", rank: 5, badge: "Best for Hills", name: "PowerSmart 21-Inch Gas Mower for Hills and Medium Yards",
    amazonUrl: "https://www.amazon.com/dp/B0H4QT361L?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41ZbkBDwx+L._SL500_.jpg", price: "$283.49",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "170cc OHV gas engine", "Rear-wheel drive self-propelled", "6-position cutting height"],
    description: "This PowerSmart 21-Inch is built around rear-wheel drive, which generally holds traction better on slopes and uneven terrain than front-wheel drive self-propelled mowers. At $283.49 it undercuts the wider 22-inch PowerSmart above it, and it holds a 4.1 out of 5 rating across roughly 1,046 reviews, the second-most-reviewed mower in this guide.\n\nThe 6-position height adjustment and 3-in-1 mulching, bagging, and discharge capability add flexibility that the push electric mowers in this guide do not offer. As with any gas mower, fuel and routine small-engine service are ongoing costs the electric options avoid.",
    bestFor: "hilly or uneven medium-size yards where rear-wheel drive traction matters",
    pros: ["Rear-wheel drive suited to slopes and uneven terrain", "6-position height and 3-in-1 mulching, bagging, discharge", "Rated 4.1 out of 5 across roughly 1,046 reviews"],
    cons: ["Gas engine requires fuel, oil, and filter maintenance", "Lower rating than the electric options in this guide"],
  },
  {
    id: "powersmart-21-steel", rank: 6, badge: "Also Consider", name: "PowerSmart 21-Inch Self-Propelled Gas Mower, Steel Deck",
    amazonUrl: "https://www.amazon.com/dp/B0C53MG5L6?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41rfkPV0N-L._SL500_.jpg", price: "$319.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch steel deck", "170cc OHV gas engine", "Rear-wheel drive self-propelled", "3-in-1 mulching, bagging, discharge"],
    description: "This PowerSmart 21-Inch shares the 170cc OHV engine and rear-wheel drive layout of the hills-focused model above it, but at $319.99 it costs more while carrying the lowest rating in this guide, 4.0 out of 5 across roughly 449 reviews, the smallest review base here as well.\n\nThe steel deck is durable but adds weight compared to the alloy deck used on the hills-focused PowerSmart, and the feature set otherwise overlaps closely with that mower. It is worth considering mainly if the steel deck construction or a specific retailer price makes it the better deal at the time of purchase.",
    bestFor: "buyers who specifically want a steel deck gas self-propelled mower and have compared it against the similarly equipped alloy-deck PowerSmart above",
    pros: ["Steel deck construction", "3-in-1 mulching, bagging, and discharge capability", "Rear-wheel drive self-propelled"],
    cons: ["Lowest rating and smallest review base in this guide, 4.0 out of 5 across roughly 449 reviews", "Costs more than the closely comparable hills-focused PowerSmart model above"],
  }
];
export const buyingCriteria = [
  { criterion: "Compare the complete, ready-to-mow price", explanation: "A battery mower's listed price should already include a battery and charger, and a gas mower's listed price should include the engine ready to start. Check the listing carefully so the number you compare against $500 reflects a mower you can actually use on day one, not a bare deck." },
  { criterion: "Exclude temporary sale-only qualification", explanation: "A mower that only clears $500 during a limited-time markdown is not reliably a sub-$500 mower. Check the current, non-promotional price before counting it toward this budget tier." },
  { criterion: "Set a minimum bar for cut quality, safety, and warranty", explanation: "Even at a lower price, look for a stated cutting height range, a blade-stop or bail safety switch, and a manufacturer warranty of at least two years before considering a mower a real candidate." },
  { criterion: "Separate power sources at this price point", explanation: "Under $500, gas mowers tend to offer wider decks and self-propel at a lower upfront price, while electric mowers avoid fuel and engine maintenance but add battery cost and charging time. Decide which tradeoff fits before comparing specific models." },
  { criterion: "Know what meaningfully improves above $500", explanation: "Moving past $500 typically buys a larger battery platform, dual-battery power, or a wider commercial-style deck. If none of those upgrades matter for the lawn size in question, staying under $500 usually is not a compromise." }
];
export const howWeEvaluated = [
  { title: "Complete price under the $500 line", description: "We only included mowers whose current, non-promotional listing price for a ready-to-mow unit stays under $500, including any battery and charger bundled with the electric models." },
  { title: "Power source and propulsion", description: "We compared push versus self-propelled drive and gas versus battery power, since both change daily effort and ongoing cost far more than price alone at this tier." },
  { title: "Deck width and yard fit", description: "We matched deck width against realistic lawn sizes, since a narrower deck can still be the right choice on a small or obstacle-heavy yard even at a similar price." },
  { title: "Buyer ratings and review volume", description: "We weighed each mower's current Amazon rating alongside how many buyers left that rating, since a strong average from a small review base carries less weight than one from thousands of buyers." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Scenario to a Named Pick", table: { headers: ["Buyer situation", "Recommended pick"], rows: [["Small flat lawn on a tight budget", "Greenworks 40V 16-Inch Push Mower"], ["Standard-size flat lawn, no self-propel needed", "EGO Power+ LM2114 21-Inch Cordless Mower"], ["Medium to larger lawn wanting self-propel without gas", "Greenworks 80V 21-Inch Self-Propelled Mower"], ["Wide deck and self-propel at the lowest gas price here", "PowerSmart 22-Inch 170cc Self-Propelled Gas Mower"], ["Hilly or uneven medium yard", "PowerSmart 21-Inch Gas Mower for Hills and Medium Yards"]] } },
  { subheading: "Weigh Gas Against Electric at This Price", cards: [ { label: "Electric under $500", text: "Avoids fuel, oil changes, and engine service, and starts with the push of a button, but battery capacity and charge time limit how much can be mowed in one session." }, { label: "Gas under $500", text: "Tends to offer wider decks and self-propel at a lower upfront price, but adds fuel costs, oil changes, filter service, and seasonal starting or winterizing steps." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Power", "Included battery watt-hours and charger, or engine displacement and fuel type"], ["Wear parts", "Blades, drive belts, air filters, and spark plugs for gas models"], ["Logistics", "Delivered deck width against gate, shed, and storage space"], ["Support", "Length of manufacturer warranty and nearest authorized service"]] } },
];
export const faq = [
  { q: "Can I get a genuinely good mower for under $500?", a: "Yes. Every mower in this guide is a complete, ready-to-mow unit, either with a battery and charger included or a gas engine ready to start, and several carry ratings of 4.2 or higher from over a thousand buyers." },
  { q: "Is gas or electric better under $500?", a: "Neither is universally better. Gas mowers in this price range tend to offer wider decks and self-propel at a lower upfront cost, while electric mowers avoid fuel and engine maintenance but come with less deck width or self-propel for the same money." },
  { q: "Does a higher price under $500 always mean a better mower?", a: "Not necessarily. The lowest-rated mower in this guide, the PowerSmart 21-Inch steel deck model, costs more than a closely comparable PowerSmart model with a stronger rating, so price alone does not track quality within this tier." },
  { q: "What do I give up compared to mowers priced above $500?", a: "Above $500, mowers typically add larger battery platforms, dual-battery power for longer runtime, or wider commercial-style decks. If the lawn is small to medium and those upgrades are not needed, a sub-$500 mower usually is not a real compromise." },
  { q: "Should I prioritize deck width or self-propel at this price?", a: "For small, flat lawns, deck width and a lighter push mower usually matter more. For medium to larger or sloped lawns, self-propel reduces fatigue more than a few extra inches of deck width." },
];
export const relatedGuides: { title: string; href: string }[] = [];
