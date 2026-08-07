export const guideSlug = "best-80v-lawn-mowers";
export const guideTitle = "Best 80V Lawn Mowers";
export const metaTitle = "Best 80V Lawn Mowers (2026): Current Models and Buying Guide";
export const metaDescription = "Best 80V Lawn Mowers compared by included watt-hours, deck width, drive type, charging workflow, and real ownership cost.";
export const mainKeyword = "80v lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg";
export const introParagraphs = [
  "80V is a nominal voltage rating, not a measure of stored energy. Two 80V mowers can ship with very different amp-hour packs, so the number on the box does not by itself tell you how long a mower will run or how it will handle a full-size lawn.",
  "We compared included battery capacity in watt-hours, deck width, drive type, charging time, and the practical tradeoffs of a heavier 80V platform so you can match a mower to your lawn instead of shopping on voltage alone.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "greenworks-80v-21-self-propelled", rank: 1, badge: "Best Overall", name: "Greenworks 80V 21-Inch Self-Propelled Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSC6B2T?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg", price: "$449.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4.0Ah battery and charger included", "Self-propelled drive", "Rated 4.5 stars from 586 reviews"],
    description: "Greenworks 80V 21-Inch Self-Propelled Lawn Mower ships with a 21-inch deck and an included 80V 4.0Ah battery and charger, and it has built up a 4.5 star average across 586 reviews, one of the larger review counts in this class. That combination makes it a practical option for standard to medium lawns where self-propel reduces pushing effort.\n\nThe included pack is a single 4.0Ah battery, so runtime on tall, damp, or dense grass should be checked against the current listing rather than assumed from the voltage figure alone. Compare its deck width, drive type, charging time, and included battery capacity with your lawn size before buying.",
    bestFor: "standard to medium lawns where self-propel reduces pushing effort",
    pros: ["21-inch deck", "80V 4.0Ah battery and charger included", "Self-propelled drive"],
    cons: ["Runtime on tall or dense grass depends on the single included battery pack, not the voltage rating.", "Self-propel drive draws from the same battery as the blade, which can shorten total mowing time."],
  },
  {
    id: "greenworks-80v-21-push", rank: 2, badge: "Best Alternative", name: "Greenworks 80V 21-Inch Push Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSBDL43?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41VCBvwT7BL._SL500_.jpg", price: "$456.90",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4.0Ah battery and charger included", "Push drive", "Rated 4.6 stars from 200 reviews"],
    description: "Greenworks 80V 21-Inch Push Lawn Mower combines the same 21-inch deck and included 80V 4.0Ah battery and charger as the self-propelled version, without a drive motor, and it carries a 4.6 star average from 200 reviews. That combination makes it a practical option for flatter yards where an operator does not need powered drive assistance.\n\nWithout self-propel, all of the included battery capacity goes to the blade, which can help runtime on a flat lawn but adds physical effort on slopes. Compare its deck width, drive type, charging time, and included battery capacity with your lawn size before buying.",
    bestFor: "flatter yards where an operator does not need powered drive assistance",
    pros: ["21-inch deck", "80V 4.0Ah battery and charger included", "No drive motor consuming battery capacity"],
    cons: ["No self-propel, so slopes and larger lawns require more manual pushing effort.", "Single included battery limits back-to-back mowing without a spare pack or extended charging delay."],
  },
  {
    id: "greenworks-80v-25-self-propelled", rank: 3, badge: "Best for a Larger Lawn", name: "Greenworks 80V 25-Inch Self-Propelled Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSBV8LJ?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41FbCSwEtJL._SL500_.jpg", price: "$717.27",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["25-inch deck", "80V 4.0Ah battery and charger included", "Self-propelled drive", "Rated 4.0 stars from 142 reviews"],
    description: "Greenworks 80V 25-Inch Self-Propelled Lawn Mower steps up to a 25-inch deck while keeping the same included 80V 4.0Ah battery and charger, and it holds a 4.0 star average across 142 reviews. That combination makes it a practical option for larger lawns where fewer passes and a wider cut matter more than a compact footprint.\n\nThe wider deck covers more ground per pass but also asks more of the same single included battery, so charging frequency and pack replacement cost deserve a closer look before buying for a large property. Compare its deck width, drive type, charging time, and included battery capacity with your lawn size before buying.",
    bestFor: "larger lawns where fewer passes and a wider cut matter more than a compact footprint",
    pros: ["25-inch deck for fewer passes on bigger lawns", "80V 4.0Ah battery and charger included", "Self-propelled drive"],
    cons: ["A wider deck draws more energy per pass from the same single included battery pack.", "Higher price and heavier build make storage and transport considerations more important."],
  }
];
export const buyingCriteria = [
  { criterion: "Watt-hours, not voltage", explanation: "Multiply the nominal 80V rating by the included amp-hours to compare approximate stored energy. Two mowers marketed at 80V can ship with different amp-hour packs and meaningfully different runtime." },
  { criterion: "Runtime is grass-dependent", explanation: "Any runtime figure tied to a battery pack assumes even, dry, moderate-height grass. Tall, damp, dense, or mulched grass draws more current and can cut runtime well below the marketed number." },
  { criterion: "Charging and thermal delay", explanation: "Full charge time is only part of the story. Some packs need a cooldown period after heavy use before they will accept a fast charge, which can delay a second pass on a large lawn." },
  { criterion: "Weight and deck performance vs marketing", explanation: "A higher voltage number does not guarantee better cut quality or easier handling. Compare actual deck width, operating weight, and self-propel behavior rather than the voltage figure alone." },
  { criterion: "Replacement battery cost", explanation: "An 80V platform's replacement or second battery pack is a real ongoing cost. Check current pack pricing and availability before assuming the included battery will always be enough." }
];
export const howWeEvaluated = [
  { title: "Battery capacity and platform fit", description: "We looked at included amp-hours and pack count alongside the 80V rating, since voltage alone does not establish runtime or usable energy." },
  { title: "Deck width and drive type", description: "We compared deck width, self-propelled versus push drive, and how drive assistance shares battery capacity with the cutting blade." },
  { title: "Charging workflow", description: "We considered full charge time, cooldown behavior after heavy use, and whether a second battery is a realistic option for larger lawns." },
  { title: "Ownership cost and reviews", description: "We weighed listed price, available rating and review counts, and the likely cost of a replacement or spare battery pack over time." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Property Before the Voltage Number", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Standard to medium lawn, wants powered drive", "Greenworks 80V 21-Inch Self-Propelled Lawn Mower"], ["Flatter yard, prefers a lighter push mower", "Greenworks 80V 21-Inch Push Lawn Mower"], ["Larger lawn, wants fewer passes", "Greenworks 80V 25-Inch Self-Propelled Lawn Mower"], ["Steep or safety-sensitive terrain", "Follow the exact manufacturer slope guidance before selecting any mower"]] } },
  { subheading: "Choose the Right Drive and Deck Combination", cards: [ { label: "Push, standard deck", text: "Best for flatter lawns where the operator does not need drive assistance and wants the included battery to run the blade only." }, { label: "Self-propelled, standard deck", text: "Best for typical residential lawns with some slope or distance where powered drive reduces physical effort." }, { label: "Self-propelled, wider deck", text: "Best for larger properties where a wider cutting path reduces the total number of passes needed." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Battery", "Included amp-hours, number of packs, and current spare or replacement pack price"], ["Charging", "Full charge time and whether the pack needs a cooldown period after heavy use"], ["Deck and drive", "Deck width, self-propelled versus push drive, and operating weight"], ["Support", "Warranty terms and nearest authorized service for the specific model"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider starting steps, self-propel speed control, turning room, and how the mower feels on the harder or sloped parts of the yard." }, { label: "After mowing", text: "Check bag removal, deck cleaning, battery charging routine, and storage footprint for the included battery and charger." } ] },
];
export const faq = [
  { q: "What should I check before buying 80v lawn mowers?", a: "Check the included amp-hours, not just the 80V voltage rating, along with deck width, drive type, and charging time. Then compare that against your lawn size and terrain." },
  { q: "Does a higher voltage mean longer runtime?", a: "No. Voltage is a measure of electrical pressure, not stored energy. Two 80V mowers can have different amp-hour battery packs and different real-world runtime." },
  { q: "How does self-propel affect runtime on an 80V mower?", a: "Self-propelled drive shares the same battery as the cutting blade, so using drive assistance, especially on slopes or at higher speed, can reduce total mowing time compared to a push model." },
  { q: "Is a wider deck always better on an 80V platform?", a: "A wider deck covers more ground per pass but also draws more energy from the same included battery. On a small lawn a narrower deck may give more consistent runtime." },
  { q: "How should I plan for battery replacement cost?", a: "Check current pricing and availability for a spare or replacement battery pack for the specific model before buying, since this can be a significant part of long-term ownership cost on any battery mower." },
];
export const relatedGuides: { title: string; href: string }[] = [];
