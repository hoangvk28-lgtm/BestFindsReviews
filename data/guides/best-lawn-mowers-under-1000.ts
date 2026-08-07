export const guideSlug = "best-lawn-mowers-under-1000";
export const guideTitle = "Best Lawn Mowers Under $1000";
export const metaTitle = "Best Lawn Mowers Under $1000 (2026): 8 Models Compared";
export const metaDescription = "Best lawn mowers under $1000 compared by power source, deck size, included battery capacity, and real ownership cost across reel, corded, cordless, and gas options.";
export const mainKeyword = "lawn mowers under 1000";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg";
export const introParagraphs = [
  "This guide is a price-ladder comparison, distinct from our other lawn mower guides that focus on a single power source or brand. Here every mower is compared strictly on what a buyer can get for under $1000, ranging from a $65 corded trimmer combo to a $699 self-propelled cordless model, so the tradeoffs between price tiers are visible in one place.",
  "Under $1000 the market spans nearly every mower format: manual reel mowers with no motor at all, budget corded electrics, battery push and self-propelled mowers with included packs, and small gas engines. What separates the tiers is mostly deck width, self-propulsion, included battery capacity, and how much cutting the machine can do before it needs a break or a refuel.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "ego-lm2134sp-2", rank: 1, badge: "Best Overall", name: "EGO Power+ 21-Inch Cordless Self-Propelled Mower LM2134SP-2",
    amazonUrl: "https://www.amazon.com/dp/B0CVSG63DG?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41bI4lOM9KL._SL500_.jpg", price: "$699.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "Cordless battery platform", "Self-propelled drive", "Rated 4.5 stars across 316 reviews"],
    description: "The EGO Power+ LM2134SP-2 pairs a full 21-inch deck with self-propelled drive, which is the combination most buyers reach for once they have committed to spending closer to the top of this price range. It carries a 4.5-star rating across 316 reviews, a solid mark for a self-propelled cordless mower at this price.\n\nSelf-propulsion draws from the same battery that powers the blade, so runtime on hilly or overgrown lawns will run shorter than the flat-lawn figure most listings lead with. For a buyer with a mid-size or larger lawn who wants to walk behind rather than push, this is the strongest all-around pick under $1000.",
    bestFor: "mid-size to larger lawns where self-propelled drive is worth the added cost",
    pros: ["Full-width 21-inch deck for fewer passes", "Self-propelled drive reduces pushing effort", "Strong 4.5-star rating across 316 reviews"],
    cons: ["Highest price in this roundup, close to the $1000 ceiling", "Self-propel drive shortens runtime versus push-only use"],
  },
  {
    id: "greenworks-80v-21", rank: 2, badge: "Best Value Self-Propelled", name: "Greenworks 80V 21-Inch Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSC6B2T?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg", price: "$449.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4Ah battery and charger included", "Self-propelled drive", "Rated 4.5 stars across 586 reviews"],
    description: "The Greenworks 80V 21-Inch Self-Propelled Mower brings self-propulsion and a full-width deck in at roughly two-thirds the price of the EGO above, with a battery and charger included in the box. It shares the same 4.5-star rating as the pricier option, backed by 586 reviews, making it the better value pick if self-propel and a 21-inch deck are the priority but the budget needs to stay under $500.\n\nThe higher-energy included pack helps offset the runtime cost of the drive motor, but voltage alone does not establish runtime, and buyers should still expect shorter sessions than a push-only mower on the same battery. This is the mower to compare directly against the EGO LM2134SP-2 when deciding whether the extra $250 is worth it.",
    bestFor: "buyers who want self-propel and a 21-inch deck without spending near $700",
    pros: ["Self-propelled drive at a mid-range price", "Battery and charger included", "Matches the top pick's 4.5-star rating on 586 reviews"],
    cons: ["Fewer total reviews than the more established push mowers in this range", "Self-propel drive still shares battery capacity with the blade"],
  },
  {
    id: "ego-lm2114", rank: 3, badge: "Best Push Mower", name: "EGO Power+ LM2114 21-Inch Cordless Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B0BLT8L937?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/418i3mcBfML._SL500_.jpg", price: "$399.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "56V battery platform", "Battery and charger included", "Rated 4.5 stars across 2,160 reviews"],
    description: "The EGO Power+ LM2114 keeps the full 21-inch deck but drops self-propulsion, landing at $399 with a 4.5-star rating backed by 2,160 reviews, the largest review count of any mower in this guide. That review volume gives it the most established track record here, even though it sits in the middle of the price range.\n\nWithout a drive motor, all the included battery capacity goes toward the blade rather than being split with propulsion, which can mean a longer mowing session per charge than the self-propelled models above despite a similar battery platform. It is the pick for a standard-size lawn where pushing is not a burden.",
    bestFor: "standard-size lawns where a full-width deck matters more than self-propel",
    pros: ["21-inch deck at a mid-range price", "Battery and charger included", "Largest review base in this guide at 2,160 reviews and 4.5 stars"],
    cons: ["No self-propel, so larger or sloped lawns require more pushing effort", "Runtime under tall or damp grass will run below the flat-lawn figure"],
  },
  {
    id: "powersmart-easyglide", rank: 4, badge: "Best Gas Mower", name: "PowerSmart EasyGlide 21-Inch Gas Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CB9XSR1S?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/419ZsDeTwFL._SL500_.jpg", price: "$249.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "144cc 4-stroke OHV engine", "3-in-1 mulch, bag, side discharge", "Rated 4.3 stars across 932 reviews"],
    description: "The PowerSmart EasyGlide is the only gas mower in this guide, pairing a 144cc 4-stroke OHV engine with a full 21-inch steel deck and 3-in-1 mulch, bag, or side discharge capability. It holds a 4.3-star rating across 932 reviews, a solid showing for a budget gas mower.\n\nGas avoids battery charging and replacement entirely, but it adds fuel, oil changes, and engine maintenance that battery mowers do not need. For a buyer who wants the largest cutting capacity per session without watching a battery gauge, and who does not mind fuel and basic engine upkeep, this is the mower to consider instead of a battery push mower at a similar price.",
    bestFor: "buyers who want gas runtime and don't want to manage battery charging",
    pros: ["No battery to charge or eventually replace", "Full 21-inch deck with 3-in-1 discharge options", "Rated 4.3 stars across 932 reviews"],
    cons: ["Needs fuel, oil, and basic engine maintenance that battery mowers avoid", "Louder and heavier to start than a battery or corded mower"],
  },
  {
    id: "greenworks-40v-16", rank: 5, badge: "Best for Small Lawns", name: "Greenworks 40V 16-Inch Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B00BBQVL5U?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41hGtP+Q5jL._SL500_.jpg", price: "$249.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch deck", "40V 4Ah battery and charger included", "160Wh included energy", "Rated 4.2 stars across 12,116 reviews"],
    description: "The Greenworks 40V 16-Inch Push Mower trades deck width for a much lower price and a smaller, lighter machine, matched by 12,116 reviews at a 4.2-star average, the second-largest review base in this guide behind only the corded combo unit below. That volume suggests wide adoption specifically among small-lawn buyers.\n\nThe narrower 16-inch deck means more passes to cover the same area compared to the 21-inch mowers above, and the single included pack is sized for smaller yards rather than long sessions. It is the mower to pick for a compact lawn or as a second mower for tight spaces, not for a full-size property.",
    bestFor: "small lawns and buyers who want a lighter, easier-to-store mower",
    pros: ["Lower price than the 21-inch battery mowers in this guide", "Battery and charger included", "Very large review base at 12,116 reviews and 4.2 stars"],
    cons: ["16-inch deck requires more passes on a mid-size or larger lawn", "160Wh included energy limits session length before recharging"],
  },
  {
    id: "lawnmaster-meb1114k", rank: 6, badge: "Best Corded Mower", name: "LawnMaster MEB1114K 15-Inch Corded Mower",
    amazonUrl: "https://www.amazon.com/dp/B092CMM5XM?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41tLNlfosEL._SL500_.jpg", price: "$121.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["15-inch deck", "11-amp corded motor", "No battery to replace", "Rated 4.0 stars across 4,448 reviews"],
    description: "The LawnMaster MEB1114K is a corded electric mower with an 11-amp motor and a compact 15-inch deck, priced at $121 and rated 4.0 stars across 4,448 reviews. Because it plugs in, there is no battery to charge or eventually replace, and power never fades mid-mow the way a battery pack can.\n\nThe tradeoff is managing an extension cord around trees, beds, and the mowing path, plus staying within reach of an outlet, which limits it to smaller unobstructed yards. It is a reasonable low-cost option for a buyer with a small lawn close to the house who wants to avoid battery replacement cost entirely.",
    bestFor: "small unobstructed yards close to an outlet",
    pros: ["Lowest-cost dedicated mower in this guide with real spec detail", "No battery to charge or replace", "Rated 4.0 stars across 4,448 reviews"],
    cons: ["Cord management limits mowing pattern and range from the outlet", "15-inch deck is the narrowest powered mower in this guide"],
  },
  {
    id: "black-decker-besta512cm", rank: 7, badge: "Best 3-in-1 Combo", name: "BLACK+DECKER 3-in-1 Corded Mower, Trimmer, and Edger BESTA512CM",
    amazonUrl: "https://www.amazon.com/dp/B078YYPWLY?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31CdnGNWAvL._SL500_.jpg", price: "$65.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["12-inch corded push mower", "6.5-amp motor", "Converts to trimmer and edger", "Rated 4.2 stars across 9,666 reviews"],
    description: "The BLACK+DECKER BESTA512CM is a 3-in-1 corded tool that converts between a 12-inch push mower, a string trimmer, and an edger, at $65 it is the lowest total cost in this guide and holds a 4.2-star rating across 9,666 reviews. For a buyer with a very small patch of grass, a single cord-powered tool that also handles trimming and edging can replace three separate purchases.\n\nAt a 12-inch mowing width it is not a substitute for a full-size mower on anything beyond a small yard or as a supplement for edges and tight corners that a larger mower cannot reach. Treat it as a specialty or backup tool rather than a primary mower for a standard lawn.",
    bestFor: "very small yards, edging, and trimming rather than primary full-lawn mowing",
    pros: ["Lowest price in this guide and converts to three tools", "No battery to charge or replace", "Rated 4.2 stars across 9,666 reviews"],
    cons: ["12-inch mowing width is too narrow for a standard-size lawn", "Corded operation limits range and requires cord management"],
  },
  {
    id: "american-lawn-mower-1204-14", rank: 8, badge: "Best Reel Mower", name: "American Lawn Mower 1204-14 14-Inch 4-Blade Push Reel Mower",
    amazonUrl: "https://www.amazon.com/dp/B00004RA3F?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg", price: "$72.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["14-inch cutting width", "4-blade manual reel", "No motor, battery, or fuel", "Rated 4.3 stars across 15,053 reviews"],
    description: "The American Lawn Mower 1204-14 is a fully manual push reel mower with a 4-blade reel and a 14-inch cutting width, priced at $72 and rated 4.3 stars across 15,053 reviews, by far the most reviews of any product in this guide. It requires no motor, no battery, and no fuel, so there is nothing to charge, refuel, or eventually replace as a power source.\n\nManual reel mowers need more physical effort per pass and are best suited to small, flat, regularly maintained lawns rather than tall or thick grass. For a buyer with a small yard who wants the lowest possible ownership cost and no engine or battery to maintain, this is the mower with the strongest review record in the entire lineup.",
    bestFor: "small, flat, regularly mowed lawns where zero fuel or battery cost matters most",
    pros: ["No motor, battery, or fuel required, ever", "Lowest long-term ownership cost in this guide", "Highest review count in this guide at 15,053 reviews and 4.3 stars"],
    cons: ["Requires more physical effort per pass than a powered mower", "Struggles with tall, thick, or overgrown grass"],
  },
];
export const buyingCriteria = [
  { criterion: "Complete ready-to-mow price", explanation: "For battery mowers, confirm the listed price already includes at least one battery and a charger. A mower body sold separately can push the real ready-to-mow total well past the number on the page." },
  { criterion: "Exclude temporary sale-only qualification", explanation: "Check the mower's normal price, not a flash-sale or coupon price, before counting it as being under $1000. A model that only qualifies during a temporary discount may not stay under budget when you actually order." },
  { criterion: "Minimum cut, safety, and warranty standards", explanation: "Look for an adjustable cutting height range, a blade-stop or presence-control safety feature, and at least a standard residential warranty before comparing anything else." },
  { criterion: "Separate reel, corded, battery, and gas at this tier", explanation: "Under $1000 these are four genuinely different ownership experiences, not just price points. A manual reel mower, a corded electric, a battery mower, and a small gas engine each carry different effort, maintenance, and range tradeoffs that matter more than the price gap between them." },
  { criterion: "What a meaningful step up buys at the next tier", explanation: "Moving above $1000 typically buys a wider deck, a riding or zero-turn format, or commercial-grade components, rather than just a nicer version of the same walk-behind mower. Decide whether that step is actually necessary for your property before spending more." },
];
export const howWeEvaluated = [
  { title: "Price and what it actually includes", description: "We confirmed each price reflects the mower as sold, including any battery and charger required to actually mow with it, and excluded anything priced at or above $1000." },
  { title: "Power source tradeoffs", description: "We grouped mowers by reel, corded, battery, and gas power, since the ownership experience differs by power source more than it differs by brand at this price range." },
  { title: "Deck size and drive versus lawn size", description: "We compared deck width and the presence or absence of self-propelled drive against the lawn sizes each format realistically suits." },
  { title: "Review record where available", description: "Where a mower had a public rating and review count, we weighed that as a signal of real-world reliability rather than relying on marketing copy alone." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match Your Lawn to a Price Point", table: { headers: ["Buyer situation", "Recommended pick"], rows: [["Mid-size or larger lawn, want self-propel and top budget available", "EGO Power+ 21-Inch Cordless Self-Propelled Mower LM2134SP-2"], ["Want self-propel but not the top price", "Greenworks 80V 21-Inch Self-Propelled Mower"], ["Standard lawn, comfortable pushing, want a full-width deck", "EGO Power+ LM2114 21-Inch Cordless Push Mower"], ["Want gas power and don't mind engine upkeep", "PowerSmart EasyGlide 21-Inch Gas Mower"], ["Small yard, tightest budget, zero fuel or battery cost", "American Lawn Mower 1204-14 14-Inch 4-Blade Push Reel Mower"]] } },
  { subheading: "Choose the Power Source That Fits Your Routine", cards: [ { label: "Reel or corded", text: "Best for small, flat, close-to-the-house lawns where minimizing ownership cost and avoiding batteries or fuel matters most." }, { label: "Battery push or self-propelled", text: "Best for standard to mid-size lawns where cord-free range and a full-width deck matter, provided the included battery and charger are confirmed in the price." }, { label: "Gas", text: "Best for buyers who want the largest per-session cutting capacity without watching a battery gauge, and who accept fuel and basic engine maintenance." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Power", "Battery watt-hours and charger included, or fuel and oil for gas models"], ["Deck and drive", "Cutting width and whether the mower is push-only or self-propelled"], ["Wear parts", "Blades, reel sharpening, filters, and model-specific part availability"], ["Support", "Standard warranty length and where authorized service is available"]] } },
  { subheading: "Effort and Maintenance Tradeoffs", cards: [ { label: "Lower effort, higher cost", text: "Self-propelled battery mowers reduce pushing effort but cost more up front and depend on included battery capacity." }, { label: "Lower cost, higher effort", text: "Reel and corded mowers cost far less and need no charging, but require more physical effort or cord management per session." } ] },
];
export const faq = [
  { q: "What is the best lawn mower under $1000 overall?", a: "The EGO Power+ 21-Inch Cordless Self-Propelled Mower LM2134SP-2 offers the strongest combination of deck width, self-propelled drive, and review record among the mowers in this guide, at $699.00." },
  { q: "Is a battery mower worth it under $1000, or should I buy gas?", a: "A battery mower avoids fuel and engine maintenance entirely but depends on included watt-hours for runtime. A gas mower like the PowerSmart EasyGlide offers more cutting capacity per session without recharging, at the cost of fuel and basic engine upkeep. Choose based on which maintenance routine you'd rather manage." },
  { q: "Does the listed price always include the battery and charger?", a: "Not always. Confirm the listing includes at least one battery and a charger before comparing price, since a mower body sold separately can add significant cost to the total." },
  { q: "Are manual reel mowers actually usable, or just a budget gimmick?", a: "For a small, flat, regularly mowed lawn, a reel mower like the American Lawn Mower 1204-14 can be a practical, low-cost, zero-maintenance option. It is not suited to tall, thick, or large areas." },
  { q: "What do I get by spending closer to $1000 instead of $200?", a: "Near the top of this range you typically get a wider deck, self-propelled drive, and a larger included battery, rather than just a nicer version of the same mower. Whether that is worth it depends on lawn size and how much walking effort you want to avoid." },
];
export const relatedGuides: { title: string; href: string }[] = [];
