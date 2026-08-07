export const guideSlug = "60v-vs-80v-lawn-mowers";
export const guideTitle = "60V vs 80V Lawn Mowers";
export const metaTitle = "60V vs 80V Lawn Mowers (2026): Which Voltage Actually Fits Your Yard";
export const metaDescription = "60V vs 80V lawn mowers compared by watt-hours, deck width, self-propel load, runtime, weight, recharge workflow, and ownership cost.";
export const mainKeyword = "60v vs 80v lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41R0pwuOOQL._SL500_.jpg";
export const introParagraphs = [
  "A higher voltage number is not automatically a stronger or longer-running mower. Voltage is electrical pressure, not stored energy, and a 60V pack with a larger amp-hour rating can hold more watt-hours than an 80V pack with a smaller one. Nominal volts multiplied by amp-hours gives the approximate watt-hours, and that number, not the voltage label, is what predicts runtime and cutting capacity under real grass load.",
  "We compared included battery capacity, deck width, self-propel drive load, operating weight, recharge workflow, and price across current 60V and 80V mowers so you can match the platform to your lawn instead of assuming the bigger number wins by default.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "greenworks-60v-21-push", rank: 1, badge: "Best 60V Overall", name: "Greenworks 60V 21-Inch Push Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0C2ZPBHC7?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41R0pwuOOQL._SL500_.jpg", price: "$389.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "60V 5.0Ah battery", "Approximately 300Wh nominal energy", "Push drive"],
    description: "Greenworks 60V 21-Inch Push Lawn Mower pairs a 21-inch deck with a 60V 5.0Ah battery and charger, which works out to roughly 300Wh of nominal included energy. Buyers rate it 4.4 out of 5 across 494 reviews, a sample size that supports the mower as a dependable full-width push option rather than a niche pick.\n\nAt 300Wh this pack sits ahead of some 80V mowers that ship with smaller amp-hour batteries, which is the core point of comparing watt-hours instead of voltage alone. It suits standard-size lawns where push drive is acceptable and a single charge should cover a normal mowing session.",
    bestFor: "standard lawns where push drive is fine and included watt-hours matter more than the voltage label",
    pros: ["21-inch deck", "Roughly 300Wh included energy from a single 5.0Ah pack", "4.4 rating across 494 reviews"],
    cons: ["Push-only drive means no motor assist on slopes or larger lawns.", "Confirm current-kit battery count and charger speed before buying."],
  },
  {
    id: "greenworks-80v-21-self-propelled", rank: 2, badge: "Best 80V Overall", name: "Greenworks 80V 21-Inch Self-Propelled Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSC6B2T?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg", price: "$449.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4.0Ah battery", "Approximately 320Wh nominal energy", "Self-propelled"],
    description: "Greenworks 80V 21-Inch Self-Propelled Lawn Mower combines a 21-inch deck with an 80V 4.0Ah battery and charger, close to 320Wh of nominal included energy, plus a self-propel drive. It holds a 4.5 rating from 586 reviews, indicating consistent buyer satisfaction with this pairing of deck size and drive assist.\n\nThe 320Wh figure is only slightly ahead of the 60V push mower above, which shows that matched watt-hours across voltage platforms is what should decide the comparison, not the 80V label by itself. Self-propel adds convenience on slopes but also draws energy that a push-only mower would put entirely into the blade.",
    bestFor: "medium lawns and slopes where self-propel assist is worth the added energy draw",
    pros: ["Self-propelled drive reduces pushing effort", "4.5 rating across 586 reviews", "21-inch deck matches most standard lawns"],
    cons: ["Self-propel drive load can shorten runtime compared with a push-only mower of similar watt-hours.", "Confirm included charger speed before relying on same-day recharge."],
  },
  {
    id: "greenworks-60v-21-self-propelled", rank: 3, badge: "Best 60V for Bigger Yards", name: "Greenworks 60V 21-Inch Self-Propelled Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H389SFNF?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/410Kmx0JdYL._SL500_.jpg", price: "$619.98",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "60V, 2 x 4.0Ah batteries", "Approximately 480Wh combined nominal energy", "Self-propelled with rapid charger"],
    description: "Greenworks 60V 21-Inch Self-Propelled Lawn Mower ships with two 4.0Ah batteries on a 60V platform, which is close to 480Wh of combined nominal energy, along with a rapid charger and an extra mower blade. Rating and review data were not listed for this configuration, so treat the ownership pattern of the platform, not a review score, as the deciding factor.\n\nThe dual-battery kit is built around covering roughly three-quarter-acre lawns without a mid-mow charging stop, which is a direct answer to the runtime limits that a single small pack can create on either voltage platform. Self-propel and hot-swappable batteries make this the stronger 60V option once lawn size grows past what a single-pack mower comfortably covers.",
    bestFor: "larger lawns up to about three-quarter acre needing self-propel and no mid-mow recharge stop",
    pros: ["Two included batteries for roughly 480Wh combined", "Self-propelled drive with rapid charger", "Extra blade included"],
    cons: ["No rating or review count is listed for this configuration.", "Higher price than single-battery 60V or 80V alternatives at this deck width."],
  },
  {
    id: "greenworks-80v-21-push", rank: 4, badge: "Best 80V Push Option", name: "Greenworks 80V 21-Inch Push Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSBDL43?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41VCBvwT7BL._SL500_.jpg", price: "$456.90",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4.0Ah battery", "Approximately 320Wh nominal energy", "Push drive"],
    description: "Greenworks 80V 21-Inch Push Lawn Mower keeps the 80V 4.0Ah battery and roughly 320Wh nominal energy of its self-propelled sibling but drops the drive motor, which puts more of that stored energy directly toward cutting. It carries a 4.6 rating across 200 reviews, the highest rating in this comparison.\n\nWithout a drive motor pulling from the same pack, buyers who do not need self-propel assist can expect the included watt-hours to stretch further per charge than on a self-propelled mower with the same battery. It is a reasonable case for choosing 80V specifically for the push-only variant rather than assuming self-propel is required at this voltage.",
    bestFor: "buyers who want the 80V platform without paying energy budget for self-propel drive",
    pros: ["4.6 rating across 200 reviews, the highest here", "Push-only drive leaves more watt-hours for the blade", "Same 320Wh pack as the self-propelled 80V option"],
    cons: ["No drive assist, which matters more on slopes or larger lawns.", "Review count is smaller than the top-ranked 60V and 80V picks."],
  },
  {
    id: "greenworks-80v-25-self-propelled", rank: 5, badge: "Best 80V Wide Deck", name: "Greenworks 80V 25-Inch Self-Propelled Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSBV8LJ?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41FbCSwEtJL._SL500_.jpg", price: "$717.27",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["25-inch deck", "80V 4.0Ah battery", "Approximately 320Wh nominal energy", "Self-propelled"],
    description: "Greenworks 80V 25-Inch Self-Propelled Lawn Mower uses the same 80V 4.0Ah battery and roughly 320Wh nominal energy as the 21-inch 80V models above but spreads that energy across a wider 25-inch deck. It holds a 4.0 rating from 142 reviews.\n\nA wider deck covers more lawn per pass, which can offset a fixed watt-hour budget by reducing total mowing time even though the energy available has not increased. This is the clearest example in this lineup of higher voltage enabling a wider, heavier deck at a given battery size rather than voltage itself adding runtime.",
    bestFor: "larger open lawns where a wider deck reduces total passes more than extra runtime would",
    pros: ["25-inch deck covers more area per pass", "Self-propelled drive", "Same 320Wh pack size as the 21-inch 80V models"],
    cons: ["4.0 rating is the lowest among the 80V options here.", "Wider, heavier deck adds weight to store and maneuver around obstacles."],
  },
  {
    id: "greenworks-60v-30-riding", rank: 6, badge: "Best 60V for Large Properties", name: "Greenworks 60V 30-Inch Riding Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0DLKLBRYP?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41uRION5OkL._SL500_.jpg", price: "$2,499.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["30-inch deck, riding", "60V, four 8.0Ah batteries", "1,920Wh max listed energy", "Tow rated up to 200 lbs"],
    description: "Greenworks 60V 30-Inch Riding Lawn Mower runs on four 8.0Ah batteries on a 60V platform, listed at up to 1,920Wh of maximum energy, rated for roughly 1.25 acres with a turbo wall charger included. It carries a 4.1 rating across 28 reviews. It shows that a 60V platform can scale to a riding mower and large-property watt-hour totals just as well as a higher voltage platform can, once enough battery capacity is stacked into the pack.\n\nThe 200-pound tow rating and riding format put this in a different ownership category than the walk-behind mowers in this list, with its own storage, transport, and charging-circuit needs. Anyone comparing it against 80V walk-behinds should weigh property size and format first, since voltage is not the reason this mower covers more ground.",
    bestFor: "properties around 1.25 acres where a riding format and high total watt-hours matter more than platform voltage",
    pros: ["1,920Wh max listed energy across four batteries", "30-inch deck rated for roughly 1.25 acres", "Tow rated up to 200 lbs"],
    cons: ["4.1 rating from a comparatively small 28-review sample.", "Riding format needs more storage space and a different transport plan than walk-behind mowers."],
  },
  {
    id: "senix-x6-60v-21", rank: 7, badge: "Also Consider (60V)", name: "SENIX X6 60V 21-Inch Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0GWL8DPV6?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/51URoz8Vl4L._SL500_.jpg", price: "$399.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck, 3-in-1", "60V 8.0Ah battery", "Approximately 480Wh nominal energy", "Smart display, 7-level height adjustment"],
    description: "SENIX X6 60V 21-Inch Self-Propelled Mower pairs an 8.0Ah battery on a 60V platform, close to 480Wh nominal energy, with a smart display and 7-level height adjustment at a price close to some smaller-pack 80V mowers. It has a 3.8 rating from a small sample of 16 reviews.\n\nThe higher watt-hour figure at this price point is notable, but the small review count means less buyer history to lean on than the Greenworks and EGO-adjacent options above. It fits buyers prioritizing included energy per dollar who are comfortable with a newer, less reviewed brand entry.",
    bestFor: "buyers prioritizing watt-hours per dollar who are comfortable with a lightly reviewed newer brand",
    pros: ["Approximately 480Wh nominal energy from a single 8.0Ah pack", "Self-propelled with a smart display and 7-level height adjustment", "Competitive price for the included energy"],
    cons: ["3.8 rating from only 16 reviews, a small sample.", "Less established brand history than the Greenworks and EGO options in this comparison."],
  }
];
export const buyingCriteria = [
  { criterion: "Match total watt-hours, not voltage", explanation: "Multiply nominal volts by amp-hours for every mower you compare, including across 60V and 80V, before assuming the higher voltage number means more runtime. A 60V pack with a large amp-hour rating can outscore an 80V pack with a small one." },
  { criterion: "Compare deck size and grass load side by side", explanation: "Watt-hours only tell part of the story. A wider deck or thicker, taller grass draws more current per pass, so compare mowers of similar deck width and expected grass conditions rather than voltage class alone." },
  { criterion: "Runtime, cut quality, weight, and recharge workflow together", explanation: "Self-propel drive, wider decks, and higher operating weight all draw down the same battery. Check advertised runtime against your lawn size, then check full recharge time and whether the mower supports hot-swappable packs." },
  { criterion: "Ecosystem breadth at equal cost", explanation: "If you already own 60V or 80V tools from the same brand, shared batteries and chargers can lower the effective cost of a mower on that platform even if a competing platform looks cheaper alone." },
  { criterion: "When lower voltage is lighter or cheaper, and when higher voltage enables wider machines", explanation: "A 60V single-pack push mower is typically lighter and less expensive than an 80V self-propelled mower. Higher voltage platforms more often support wider decks, riding formats, and multi-battery setups where large total watt-hours matter more than the per-pack voltage." },
];
export const howWeEvaluated = [
  { title: "Watt-hours over voltage label", description: "For every mower we multiplied nominal volts by rated amp-hours to get an approximate energy figure, then compared that figure across both 60V and 80V models rather than sorting by voltage alone." },
  { title: "Deck width and grass load", description: "We paired watt-hour figures with deck width and self-propel status, since a wider deck or drive motor pulls more current per pass regardless of platform voltage." },
  { title: "Recharge and battery workflow", description: "We looked at single-pack versus multi-pack kits, included chargers, and whether a platform supports hot-swappable batteries for larger lawns." },
  { title: "Ownership and ecosystem cost", description: "We considered price, listed ratings and review counts where available, and whether the mower fits into an existing 60V or 80V tool ecosystem." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match Your Yard to a Named Pick", table: { headers: ["Buyer situation", "Recommended pick"], rows: [["Standard lawn, push drive is fine, want strong included watt-hours", "Greenworks 60V 21-Inch Push Lawn Mower"], ["Standard lawn, want self-propel on a well-reviewed 80V mower", "Greenworks 80V 21-Inch Self-Propelled Lawn Mower"], ["Up to about three-quarter acre, need self-propel and no mid-mow charge stop", "Greenworks 60V 21-Inch Self-Propelled Lawn Mower"], ["Want the 80V platform but do not need self-propel", "Greenworks 80V 21-Inch Push Lawn Mower"], ["Larger open lawn where a wider deck saves passes", "Greenworks 80V 25-Inch Self-Propelled Lawn Mower"], ["Around 1.25 acres, want a riding mower on a battery platform", "Greenworks 60V 30-Inch Riding Lawn Mower"], ["Want high watt-hours per dollar and can accept a newer brand", "SENIX X6 60V 21-Inch Self-Propelled Mower"]] } },
  { subheading: "60V vs 80V, Side by Side", cards: [ { label: "60V platforms", text: "Often ship lighter, single-pack mowers at a lower price, but the top 60V mowers here also scale up through multi-battery kits and even a riding mower once enough watt-hours are stacked into the pack." }, { label: "80V platforms", text: "More commonly appear on wider decks and self-propelled configurations at this price range, but a smaller amp-hour rating on an 80V pack can still land at similar or lower total watt-hours than a well-specced 60V pack." } ] },
  { subheading: "Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Energy", "Nominal volts multiplied by amp-hours, and whether extra packs are included or sold separately"], ["Charging", "Full charge time, charger count, and whether the platform supports hot-swappable batteries"], ["Deck and drive", "Deck width, self-propel versus push, and how drive load affects runtime on your terrain"], ["Ecosystem", "Whether you already own 60V or 80V tools that share batteries with the mower"], ["Support history", "Listed rating and review count, since a small review sample carries less certainty than a large one"]] } },
];
export const faq = [
  { q: "Is an 80V lawn mower always stronger or longer-running than a 60V mower?", a: "No. Voltage is electrical pressure, not stored energy. An 80V mower with a small amp-hour battery can have fewer total watt-hours than a 60V mower with a larger amp-hour battery, so runtime and cutting capacity depend on the full energy figure, not the voltage label." },
  { q: "How do I compare battery capacity across 60V and 80V mowers?", a: "Multiply the nominal voltage by the rated amp-hours for each mower's included battery. That approximate watt-hour figure is comparable across platforms, unlike voltage or amp-hours alone." },
  { q: "Does self-propel drive change how much runtime I get?", a: "Yes. A self-propelled mower shares its battery between the drive motor and the blade, so a self-propelled mower and a push-only mower with the same included watt-hours will not necessarily run for the same amount of time." },
  { q: "When does a higher voltage platform actually matter?", a: "Higher voltage platforms more often support wider decks, riding formats, and multi-battery setups suited to larger properties. If you are comparing similar deck widths and single-pack kits, matched watt-hours matter more than the voltage number itself." },
  { q: "Should I stay on one voltage platform if I already own other tools?", a: "It can lower total cost if the mower shares batteries and chargers with tools you already own on that platform. Weigh that shared-battery savings against the watt-hours, deck width, and rating of the mower itself before deciding." },
];
export const relatedGuides: { title: string; href: string }[] = [];
