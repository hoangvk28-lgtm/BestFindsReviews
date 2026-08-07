export const guideSlug = "best-brushless-lawn-mowers";
export const guideTitle = "Best Brushless Lawn Mowers";
export const metaTitle = "Best Brushless Lawn Mowers (2026): Current Models and Buying Guide";
export const metaDescription = "Best Brushless Lawn Mowers compared by motor claim, runtime under load, deck size, controls, and ownership cost.";
export const mainKeyword = "brushless lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41lv2YY91tL._SL500_.jpg";
export const introParagraphs = [
  "A brushless motor claim tells you the motor design, not how the whole mower performs. Some listings put the word in the title to stand out, so we checked each product title directly for a brushless claim before including it here, and left out mowers that only imply the feature without stating it.",
  "Brushless alone is not automatic proof of overall mower quality. Deck width, battery capacity, controller protection, and how the machine holds up under tall or damp grass matter just as much as the motor label, so we compare the complete mower rather than ranking by motor type alone.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "mzk-40v-16-brushless", rank: 1, badge: "Best Overall", name: "MZK 40V 16-Inch 2-in-1 Brushless Cordless Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H8SHLHRP?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41lv2YY91tL._SL500_.jpg", price: "$159.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch deck", "40V battery platform", "Brushless motor (per title)", "2-in-1 mulch and bag"],
    description: "MZK 40V 16-Inch 2-in-1 Brushless Cordless Push Mower states a brushless motor directly in its listing title, and combines that with a 16-inch deck and 40V battery platform, making it a practical option for small to mid-size lawns where deck width and included battery capacity both matter. Buyers rate it 4.6 out of 5 across 201 reviews, which is a reasonably sized sample for this class.\n\nA brushless motor claim on the label does not by itself confirm runtime under tall or damp grass, controller heat handling, or long-term repairability. Compare its deck width, included battery capacity, and warranty terms against your yard before buying.",
    bestFor: "small to mid-size lawns wanting a stated brushless motor and a wider deck",
    pros: ["16-inch deck", "40V battery platform", "Brushless motor stated in the listing title"],
    cons: ["A brushless claim alone does not confirm runtime or bog-recovery under load.", "Verify motor warranty and parts availability before buying."],
  },
  {
    id: "mzk-20v-13-brushless", rank: 2, badge: "Best for Small Yards", name: "MZK 20V 13-Inch Compact Brushless Electric Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H8SH465J?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41bn6ghaLLL._SL500_.jpg", price: "$129.98",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["13-inch deck", "20V battery platform", "Brushless motor (per title)", "Compact push design"],
    description: "MZK 20V 13-Inch Compact Brushless Electric Lawn Mower also states a brushless motor in its title, paired with a smaller 13-inch deck and 20V battery platform suited to tight or small lawns rather than larger properties. It carries a 4.8 out of 5 rating, though that score is drawn from only 66 reviews, a small sample worth weighing against the higher-review options in this class.\n\nThe narrow deck limits productivity on anything beyond a small yard, and the small review count means less field history to judge long-term durability. Compare its cut width, controller build, and warranty coverage against how much lawn you actually need to cover.",
    bestFor: "small or tight lawns where a compact stated-brushless mower is enough",
    pros: ["13-inch compact deck", "20V battery platform", "Brushless motor stated in the listing title"],
    cons: ["Small review sample (66) limits confidence in long-term durability.", "Narrow deck limits productivity on larger lawns."],
  },
  {
    id: "litheli-14-brushless", rank: 3, badge: "Best Budget Pick", name: "Litheli Cordless Lawn Mower 14 Inch, Brushless Motor Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B0GXVD6ZLV?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/51zw5LOnu7L._SL500_.jpg", price: "$99.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["14-inch deck", "5.0Ah battery and charger included", "Brushless motor (per title)", "5-position height adjustment"],
    description: "Litheli Cordless Lawn Mower 14 Inch, Brushless Motor Push Mower is the lowest-priced option here at $99.99 and states its brushless motor directly in the title, with a 5.0Ah battery and charger included and a 14-inch deck rated for up to about 3,000 square feet. Its rating sits at 3.9 out of 5 from 48 reviews, the lowest score and smallest sample of the three mowers on this list.\n\nThe lower rating and small review count suggest more variability in real-world experience than the other picks, even with the brushless claim and included battery. Weigh the low price against that mixed feedback and the small deck before buying for anything beyond a compact yard.",
    bestFor: "very small lawns and buyers prioritizing price over review confidence",
    pros: ["Lowest price in this comparison", "Battery and charger included", "Brushless motor stated in the listing title"],
    cons: ["Lower rating (3.9) and small review sample (48) than the other picks.", "Small 14-inch deck limits use to smaller lawns."],
  },
];
export const buyingCriteria = [
  { criterion: "Brushless motor is not automatic proof of quality", explanation: "A brushless claim in a listing title describes motor design, not deck quality, controller durability, or how the mower behaves in thick grass. Treat it as one input, not a final verdict." },
  { criterion: "Runtime, heat, and bog-recovery under load", explanation: "Manufacturer runtime figures rarely reflect tall, damp, or dense grass. Check whether the motor and controller recover cleanly from a bog-down or need a full stop to cool." },
  { criterion: "Controller protection", explanation: "Brushless motors rely on an electronic controller. Overcurrent and thermal protection in that controller affects reliability more than the motor label alone." },
  { criterion: "Motor warranty and repairability", explanation: "Compare stated warranty length on the motor and controller, and whether replacement parts or repair service are realistically available for the brand." },
  { criterion: "Rank the complete mower, not just the motor label", explanation: "Deck width, battery capacity, build quality, and review history all affect whether a mower is a good buy, regardless of what the motor is called." },
];
export const howWeEvaluated = [
  { title: "Title verification", description: "We checked each product's actual listing title for a stated brushless motor claim and excluded mowers that did not state one, rather than assuming the feature from brand reputation." },
  { title: "Deck and battery fit", description: "We compared deck width and battery platform against typical small to mid-size residential lawns before weighing the motor claim." },
  { title: "Review evidence", description: "Where available, we weighed rating and review count as a signal of real-world experience, and flagged small review samples rather than treating any single score as conclusive." },
  { title: "Price and ownership", description: "We compared price alongside what is included (battery, charger) and considered warranty and parts availability as part of long-term ownership cost." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Mower to Your Yard", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Small to mid-size lawn wanting the widest deck here", "MZK 40V 16-Inch 2-in-1 Brushless Cordless Push Mower"], ["Small or tight lawn where compact size matters most", "MZK 20V 13-Inch Compact Brushless Electric Lawn Mower"], ["Very small lawn and price is the deciding factor", "Litheli Cordless Lawn Mower 14 Inch, Brushless Motor Push Mower"], ["Any brushless mower on a slope or safety-sensitive yard", "Follow the manufacturer's exact slope and safety guidance before use"]] } },
  { subheading: "What the Brushless Claim Does and Does Not Tell You", cards: [ { label: "What it can suggest", text: "A stated brushless motor generally points to less brush wear and potentially quieter operation compared to a brushed motor of similar size." }, { label: "What it does not confirm", text: "It does not confirm deck build quality, controller heat handling, bog-recovery under thick grass, or how long the unit will last with regular use." }, { label: "How to verify further", text: "Cross-check the rating, review count, warranty length, and included battery capacity rather than relying on the motor label alone." } ] },
  { subheading: "Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Battery and charging", "Included battery capacity, charger, and whether spare packs are sold separately"], ["Motor and controller", "Stated warranty length on motor and controller, not just the overall product warranty"], ["Deck fit", "Deck width against your lawn size and any narrow access points"], ["Review history", "Rating alongside review count, since a high rating on very few reviews carries less weight"]] } },
];
export const faq = [
  { q: "Does a brushless motor automatically mean a better lawn mower?", a: "No. A brushless motor claim in a listing title describes the motor design, not the deck quality, controller durability, or overall build. It is one factor among several, not automatic proof of quality." },
  { q: "How did you decide which mowers to include here?", a: "We checked each product's actual listing title for a stated brushless motor claim and excluded any mower that did not state one directly, rather than assuming the feature from the brand or category." },
  { q: "Why does review count matter alongside the rating?", a: "A high rating built on very few reviews carries less confidence than a similar rating built on hundreds of reviews. Compare both numbers together rather than the rating alone." },
  { q: "What should I check beyond the brushless label before buying?", a: "Check deck width against your lawn size, included battery capacity, stated motor and controller warranty, and the balance of rating and review count." },
  { q: "Are these mowers self-propelled or push mowers?", a: "The models compared here are push mowers. If you specifically need self-propelled drive, confirm that feature directly in the listing since it is separate from the brushless motor claim." },
];
export const relatedGuides: { title: string; href: string }[] = [];
