export const guideSlug = "40v-vs-80v-lawn-mowers";
export const guideTitle = "40V vs 80V Lawn Mowers";
export const metaTitle = "40V vs 80V Lawn Mowers (2026): Which Voltage Actually Fits Your Yard";
export const metaDescription = "40V vs 80V lawn mowers compared by watt-hours, deck width, runtime, weight, recharge workflow, and ecosystem cost so you buy the platform that matches your lawn, not the biggest number on the box.";
export const mainKeyword = "40v vs 80v lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41hGtP+Q5jL._SL500_.jpg";
export const introParagraphs = [
  "A higher voltage number is not automatically a stronger or longer-running mower. Voltage only describes electrical pressure; it says nothing about how much energy a pack actually stores. Two mowers with different voltage ratings can deliver similar runtime, or wildly different runtime, depending on the amp-hour rating of the battery that ships in the box.",
  "What actually predicts runtime and cutting power is watt-hours, which you get by multiplying nominal volts by amp-hours. A 40V mower with a large amp-hour pack can outlast an 80V mower with a small one. We compared real 40V and 80V mowers on included watt-hours, deck width, weight, self-propel draw, and recharge workflow so you can match the platform to your lawn instead of the label on the deck.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "greenworks-80v-21-self-propelled", rank: 1, badge: "Best Overall (80V)", name: "Greenworks 80V 21-Inch Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSC6B2T?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg", price: "$449.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4.0Ah battery", "320Wh nominal energy", "Self-propelled drive"],
    description: "The Greenworks 80V 21-Inch Self-Propelled Mower pairs a full 21-inch deck with a 4.0Ah pack on the 80V platform, which works out to roughly 320 watt-hours of included energy, and self-propel drive that reduces pushing effort on a standard lawn. It holds a 4.5 rating from 586 reviews, which is a reasonably large sample for this specific model and price tier.\n\nThe watt-hours here are ahead of most 40V single-pack mowers, so it holds up better in self-propel mode and on thicker grass before the pack needs a recharge. The tradeoff is a heavier deck and battery than the 40V machines in this comparison, plus an 80V-specific charger and extra packs cost more if the mower is your entry point into a battery ecosystem.",
    bestFor: "medium lawns where self-propel and higher included watt-hours matter more than upfront cost",
    pros: ["320Wh nominal energy from the included 4.0Ah pack", "Self-propelled drive reduces pushing effort", "4.5 rating across 586 reviews"],
    cons: ["Heavier than comparable 40V push mowers", "80V batteries and chargers cost more to replace or add"],
  },
  {
    id: "greenworks-40v-16-push", rank: 2, badge: "Best Overall (40V)", name: "Greenworks 40V 16-Inch Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B00BBQVL5U?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41hGtP+Q5jL._SL500_.jpg", price: "$249.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch deck", "40V 4.0Ah battery", "160Wh included energy", "Push drive"],
    description: "The Greenworks 40V 16-Inch Push Mower ships with a 4.0Ah battery on the 40V platform, roughly 160 watt-hours of included energy, driving a compact 16-inch deck. It is the most reviewed product in this comparison at 12,116 reviews with a 4.2 rating, which reflects a long track record rather than a recent release.\n\nAt 160Wh, this pack holds about half the energy of the 80V 21-inch mower above, but the deck is also narrower, so watts per square foot of cut is closer than the voltage numbers suggest. It is a lighter machine to push and store, and 40V packs and chargers are typically cheaper to replace, which matters if you also own other 40V yard tools on the same battery platform.",
    bestFor: "small to mid-size lawns and buyers already invested in a 40V tool platform",
    pros: ["160Wh included energy from the 4.0Ah pack", "Lighter deck and battery for easier pushing and storage", "4.2 rating across 12,116 reviews, a large sample size"],
    cons: ["Narrower 16-inch deck means more passes on larger lawns", "No self-propel option on this model"],
  },
  {
    id: "worx-wg752-40v-21", rank: 3, badge: "Widest 40V Deck", name: "Worx WG752 40V 21-Inch 3-in-1 Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CZRJWVJJ?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41RvKAwS-sL._SL500_.jpg", price: "$379.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "40V battery platform", "3-in-1 mulch, bag, side discharge", "Push drive"],
    description: "The Worx WG752 puts a full 21-inch deck on the 40V platform, which shows that deck width is a separate spec from voltage rather than something voltage determines. It carries a 4.4 rating from 332 reviews. The 3-in-1 cutting modes (mulch, bag, side discharge) add flexibility that the narrower 40V mower above does not offer.\n\nBecause a 21-inch deck covers more ground per pass, matched watt-hours matter even more here than on the compact 40V mower; verify the amp-hour rating of the specific kit before buying, since a wide deck on a small pack means more frequent recharge stops on a full-size lawn. This is the clearest case for comparing included watt-hours directly against the 80V options rather than assuming the lower voltage number means less capable.",
    bestFor: "buyers who want a full-width deck without moving to an 80V ecosystem",
    pros: ["21-inch deck matches the width of the 80V options here", "3-in-1 mulch, bag, and side discharge in one mower", "4.4 rating across 332 reviews"],
    cons: ["Confirm the included pack's amp-hour rating, since a wide deck on a small pack shortens runtime per charge"],
  },
  {
    id: "greenworks-80v-21-push", rank: 4, badge: "Also Consider (80V)", name: "Greenworks 80V 21-Inch Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSBDL43?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41VCBvwT7BL._SL500_.jpg", price: "$456.90",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4.0Ah battery", "320Wh nominal energy", "Push drive, no self-propel"],
    description: "This is the non-self-propelled version of the 80V 21-inch Greenworks mower above, with the same 4.0Ah pack and roughly 320 watt-hours of included energy, but without a drive motor drawing from that pack. It has the highest rating in this comparison at 4.6 from 200 reviews, a smaller sample than the self-propelled version but still a meaningfully positive signal.\n\nSkipping self-propel means more of the included energy goes toward the blade instead of the drive wheels, which can translate into longer mowing sessions on the same charge compared to the self-propelled version at the same voltage and pack size. It suits buyers who want the higher-capacity 80V pack without paying for or maintaining a drive system they may not need on a flat lawn.",
    bestFor: "flat lawns where higher included watt-hours matter more than self-propel",
    pros: ["Same 320Wh nominal energy as the self-propelled 80V model", "No drive motor draw, so more energy reaches the blade", "4.6 rating across 200 reviews"],
    cons: ["No self-propel, so pushing effort is entirely manual", "Smaller review sample than the self-propelled version"],
  },
  {
    id: "greenworks-80v-25-self-propelled", rank: 5, badge: "Widest Deck (80V)", name: "Greenworks 80V 25-Inch Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSBV8LJ?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41FbCSwEtJL._SL500_.jpg", price: "$717.27",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["25-inch deck", "80V 4.0Ah battery", "320Wh nominal energy", "Self-propelled drive"],
    description: "The Greenworks 80V 25-Inch Self-Propelled Mower uses the same 4.0Ah, roughly 320Wh pack as the 21-inch 80V models above, but spreads that energy across a wider 25-inch deck and adds self-propel drive. It holds a 4.0 rating from 142 reviews, the smallest sample and lowest rating among the 80V machines here.\n\nThis is the clearest example of why matching watt-hours to deck size and drive load matters more than voltage: the same included energy now has to cover more cutting width plus drive motor draw, so expect a shorter mowing session per charge than the narrower 80V mowers above unless you add a second pack. It fits larger open lawns where the wider deck's time savings per pass outweigh more frequent recharge stops.",
    bestFor: "larger open lawns where deck width matters more than maximizing runtime per charge",
    pros: ["25-inch deck covers more ground per pass than the 21-inch 80V options", "Self-propelled drive on a wider deck", "Same 80V ecosystem as the narrower Greenworks models above"],
    cons: ["Same included watt-hours spread across a wider deck plus drive load means shorter sessions per charge", "Lowest rating and smallest review sample in this comparison"],
  },
];
export const buyingCriteria = [
  { criterion: "Compare matched watt-hours, not the voltage label", explanation: "Multiply the nominal voltage by the pack's amp-hour rating to get watt-hours, the actual energy budget. A 40V mower with a larger pack can store more energy than an 80V mower with a small one, so put both mowers' watt-hours side by side before deciding voltage settles anything." },
  { criterion: "Compare deck width and grass load at the same energy level", explanation: "A wider deck and thicker or taller grass both draw down a battery faster. Before comparing two mowers across voltage classes, check that you are comparing similar deck widths and similar grass conditions, otherwise the comparison is really about deck size, not voltage." },
  { criterion: "Map out the runtime, cut, weight, and recharge workflow together", explanation: "Runtime per charge, cutting width, mower weight, and how long a depleted pack takes to recharge all interact. A heavier 80V deck with a long runtime may still cost you more total mowing time if the pack needs hours to recharge before the second half of a large lawn." },
  { criterion: "Weigh ecosystem breadth at equal cost", explanation: "If you already own trimmers, blowers, or other tools on a 40V or 80V platform from the same brand, a shared battery and charger across tools can be worth more than a marginal watt-hour advantage on the mower alone." },
  { criterion: "Know when lower voltage is lighter and cheaper, and when higher voltage enables wider decks", explanation: "40V mowers and packs are generally lighter and cheaper to replace, which suits small to mid-size lawns and buyers on a budget. 80V platforms more often support wider decks and self-propel without straining runtime, which suits larger or thicker lawns where deck width and drive assistance matter more than upfront cost." },
];
export const howWeEvaluated = [
  { title: "Included watt-hours over voltage label", description: "We calculated approximate watt-hours from the nominal voltage and the amp-hour rating of the pack included in the box, rather than ranking mowers by voltage alone." },
  { title: "Deck width against energy budget", description: "We compared each mower's deck width to its included watt-hours to judge whether the energy budget was proportional to the cutting width and drive load it has to support." },
  { title: "Weight, storage, and recharge workflow", description: "We considered mower weight, folding and storage footprint, full recharge time, and whether a second pack or charger was a realistic option for each platform." },
  { title: "Ecosystem and ownership cost", description: "We factored in replacement battery and charger cost, and whether the platform overlaps with other yard tools a buyer might already own on the same voltage system." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Scenario to a Named Pick", table: { headers: ["Buyer scenario", "Recommended pick"], rows: [["Small to mid-size lawn, budget-conscious, own other 40V tools", "Greenworks 40V 16-Inch Push Mower"], ["Full-width deck without moving to 80V", "Worx WG752 40V 21-Inch 3-in-1 Mower"], ["Medium lawn, want self-propel and higher included watt-hours", "Greenworks 80V 21-Inch Self-Propelled Mower"], ["Flat lawn, want 80V capacity without paying for self-propel", "Greenworks 80V 21-Inch Push Mower"], ["Larger open lawn where deck width outweighs runtime per charge", "Greenworks 80V 25-Inch Self-Propelled Mower"]] } },
  { subheading: "40V and 80V Side by Side", cards: [ { label: "40V platform", text: "Lighter mower and battery, generally cheaper packs and chargers to replace, and a lower entry price. Included watt-hours can still be competitive if the amp-hour rating is high, but many 40V kits ship with smaller packs than 80V kits." }, { label: "80V platform", text: "More often paired with wider decks and self-propel drive without straining runtime, since the higher voltage supports moving more current to both the blade motor and a drive motor at once. Packs, chargers, and replacement batteries typically cost more." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Item", "Verify before buying"], rows: [["Included energy", "Nominal voltage multiplied by the pack's amp-hour rating, not the voltage number alone"], ["Deck and drive load", "Deck width and whether self-propel draws from the same pack as the blade"], ["Recharge workflow", "Full charge time, and whether a second pack is available and worth the extra cost"], ["Ecosystem fit", "Whether the platform's batteries and chargers overlap with other yard tools you own or plan to buy"]] } },
];
export const faq = [
  { q: "Is an 80V mower always more powerful than a 40V mower?", a: "Not automatically. Voltage describes electrical pressure, not stored energy. A 40V mower with a large amp-hour battery can store more watt-hours than an 80V mower with a small pack, so compare watt-hours directly rather than assuming a higher voltage number wins." },
  { q: "How do I calculate watt-hours from the spec sheet?", a: "Multiply the nominal voltage by the battery's amp-hour rating. For example, a 40V battery rated at 4.0Ah stores approximately 160 watt-hours, while an 80V battery rated at 4.0Ah stores approximately 320 watt-hours. Always confirm the amp-hour rating of the specific kit, since the same mower model is sometimes sold with different pack sizes." },
  { q: "Does a wider deck need more watt-hours to cover the same lawn?", a: "Generally yes. A wider deck cuts more grass per pass, which increases power draw, and self-propel drive adds further load if it shares the same battery as the blade. Compare deck width against included watt-hours together rather than looking at either spec in isolation." },
  { q: "Are 40V batteries and chargers cheaper to replace than 80V?", a: "In this comparison, yes, the 40V packs and chargers were generally lower cost to replace or add as spares than the 80V equivalents. If you already own tools on one of these platforms, matching the mower to that ecosystem can reduce long-term battery and charger cost." },
  { q: "When does it make sense to choose 80V over 40V?", a: "Choose 80V when you want a wider deck, self-propel drive, or longer runtime under heavier grass load without the pack running down quickly, and when the higher battery and charger cost is acceptable. Choose 40V when the lawn is small to mid-size, you want a lighter mower, or you already own other 40V tools on the same battery platform." },
];
export const relatedGuides: { title: string; href: string }[] = [];
