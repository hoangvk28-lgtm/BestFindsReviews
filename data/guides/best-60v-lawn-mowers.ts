export const guideSlug = "best-60v-lawn-mowers";
export const guideTitle = "Best 60V Lawn Mowers";
export const metaTitle = "Best 60V Lawn Mowers (2026): Push, Self-Propelled, and Riding Models Compared";
export const metaDescription = "Best 60V lawn mowers compared by included battery capacity, deck size, drive type, and property fit, since voltage alone does not tell you runtime or cut quality.";
export const mainKeyword = "60v lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41R0pwuOOQL._SL500_.jpg";
export const introParagraphs = [
  "60V has become a popular label on cordless mower boxes, but the number by itself does not describe how long a mower will run or how it will feel on a real lawn. Voltage alone does not equal battery energy: two 60V mowers can ship with very different amp-hour packs, and a mower with more included watt-hours will typically outrun one with a bigger voltage number and a smaller pack.",
  "We compared four current 60V mowers across push, self-propelled, and riding formats, looking at included battery capacity, deck width, drive type, and what each model is realistically suited for, so you can match a mower to your property instead of shopping on the voltage label alone.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "greenworks-60v-21-push", rank: 1, badge: "Best Overall", name: "Greenworks 60V 21-Inch Push Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0C2ZPBHC7?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41R0pwuOOQL._SL500_.jpg", price: "$389.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "60V platform", "5.0Ah battery and charger included", "Push drive"],
    description: "The Greenworks 60V 21-Inch Push Lawn Mower pairs a full-width 21-inch deck with a 5.0Ah battery on the 60V platform, and it holds a 4.4 rating across 494 reviews, which is a solid sample size for a cordless push mower in this price range.\n\nA push mower without self-propel assist works best on flat to gently sloped lawns where the operator supplies all the forward motion. The included 5.0Ah pack gives a reasonable starting point, but actual runtime will still depend on grass height, moisture, and mowing speed, so it is worth confirming those details against the current listing before buying.",
    bestFor: "standard-size flat to gently sloped lawns where a well-reviewed push mower is enough",
    pros: ["Strong review history at 4.4 stars across 494 reviews", "21-inch deck covers standard lawns efficiently", "Battery and charger included in the box"],
    cons: ["No self-propel assist, so slopes and larger areas mean more physical effort", "Runtime in tall or damp grass should be checked against the current battery kit"],
  },
  {
    id: "greenworks-60v-21-self-propelled", rank: 2, badge: "Best Self-Propelled", name: "Greenworks 60V 21-Inch Brushless Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H389SFNF?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/410Kmx0JdYL._SL500_.jpg", price: "$619.98",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "Two 4.0Ah batteries included", "Self-propelled, brushless motor", "4-in-1 cutting, IPX4 rated"],
    description: "The Greenworks 60V 21-Inch Brushless Self-Propelled Mower ships with two 4.0Ah batteries and a rapid charger, which is meant to cover roughly three-quarter-acre lawns without a mid-mow recharge. The brushless motor and self-propel drive are aimed at buyers who want less physical effort on larger or uneven yards, and it also includes an extra mower blade and LED lights for low-light mowing.\n\nThis listing does not yet carry a public rating or review count, so treat the manufacturer's coverage claims as a starting point rather than a confirmed result. The dual-battery setup and IPX4 water resistance rating are worth weighing against the higher price compared to the single-battery push model above.",
    bestFor: "larger lawns up to about three-quarter acre where self-propel and dual batteries reduce recharge interruptions",
    pros: ["Two 4.0Ah batteries plus a rapid charger for extended coverage", "Self-propelled brushless drive reduces pushing effort", "Includes a spare blade and IPX4 water resistance"],
    cons: ["No public rating or review count available yet to confirm real-world reliability", "Notably higher price than a comparable single-battery push mower"],
  },
  {
    id: "greenworks-60v-30-riding", rank: 3, badge: "Best for Large Properties", name: "Greenworks 60V 30-Inch Riding Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0DLKLBRYP?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41uRION5OkL._SL500_.jpg", price: "$2,499.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["30-inch deck", "Four 8.0Ah batteries (1,920Wh max)", "Rated for up to 1.25 acres", "Tows up to 200 lbs"],
    description: "The Greenworks 60V 30-Inch Riding Lawn Mower moves into a completely different category from the push and self-propelled models above, with a 30-inch deck, a listed 1.25-acre coverage rating, and a substantial 1,920 watt-hour maximum battery capacity across four 8.0Ah packs. It holds a 4.1 rating from 28 reviews, a smaller sample than the entry-level push mower but consistent directionally with a positive reception.\n\nBecause this is a riding mower, the buying considerations shift toward transport width, storage space, and whether the property has open enough terrain to justify a ride-on machine instead of a walk-behind. The included battery capacity is large in absolute watt-hours, which is the more meaningful number here than the shared 60V platform label.",
    bestFor: "properties around one acre or more where a walk-behind mower would take too long",
    pros: ["1,920Wh maximum battery capacity from four included 8.0Ah packs", "30-inch deck and 1.25-acre rating suited to larger lots", "Can tow attachments up to 200 lbs"],
    cons: ["Review sample size (28) is smaller than the other models in this comparison", "Requires storage space and property access suited to a riding mower, not a walk-behind"],
  },
  {
    id: "senix-x6-60v-self-propelled", rank: 4, badge: "Also Consider", name: "SENIX X6 60V Max 21-Inch Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0GWL8DPV6?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/51URoz8Vl4L._SL500_.jpg", price: "$399.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "3-in-1 cutting", "8Ah battery and charger included", "Smart display, 7-level height adjustment"],
    description: "The SENIX X6 60V Max 21-Inch Self-Propelled Mower undercuts the Greenworks self-propelled model on price while still including an 8Ah battery, a smart display, and 7-level cutting height adjustment. It currently sits at a 3.8 rating from 16 reviews, which is a small sample, so early buyers should treat that number as a limited data point rather than a settled track record.\n\nThe larger 8Ah battery on paper suggests good runtime, but with so few reviews it is harder to confirm how that translates to real mowing sessions across different grass conditions. It is a reasonable option for buyers who want self-propel and a bigger included pack at a lower price than the Greenworks equivalent, as long as the limited review history is an acceptable tradeoff.",
    bestFor: "buyers who want a lower-priced self-propelled 60V mower and are comfortable with a limited review history",
    pros: ["8Ah battery included at a lower price than comparable self-propelled competitors", "Smart display and 7-level height adjustment for tuning cut quality", "Self-propelled drive with 3-in-1 cutting modes"],
    cons: ["Only 16 reviews on record, so the 3.8 rating is a limited sample", "Newer brand in this category with less of a track record than Greenworks or EGO"],
  }
];
export const buyingCriteria = [
  { criterion: "Normalize by watt-hours, not the voltage label", explanation: "Multiply nominal volts by the included amp-hours to estimate watt-hours, then compare that number across mowers. Two 60V mowers with different pack sizes, like a single 4.0Ah battery versus dual 4.0Ah batteries or a 1,920Wh riding pack, will run for very different lengths of time." },
  { criterion: "Runtime claims assume matched grass conditions", explanation: "Manufacturer runtime figures are typically measured under favorable, dry, moderate-height grass. Tall, damp, dense, or freshly overgrown grass draws more power per pass, so real sessions on a difficult lawn will run shorter than the advertised figure." },
  { criterion: "Charging and thermal delay between sessions", explanation: "Batteries can need a cooldown period before or during fast charging, especially after a long mowing session in hot weather. If a lawn needs more charge than one battery provides, factor in that delay rather than assuming back-to-back charging is instant." },
  { criterion: "Mower weight and deck performance often matter more than the voltage number", explanation: "A heavier deck, wheel size, and blade design affect cut quality and how the mower handles uneven ground as much as or more than the battery voltage. Two mowers on the same 60V platform can behave very differently once you account for deck construction and weight." },
  { criterion: "Replacement-pack and ecosystem cost", explanation: "Check the price of a spare or replacement battery on the same platform, and whether that battery is shared with other tools you might already own. A cheaper mower with an expensive proprietary replacement pack can cost more over time than a pricier mower with reasonable spare battery costs." }
];
export const howWeEvaluated = [
  { title: "Included battery energy over voltage label", description: "We looked at the actual amp-hours and number of batteries included with each mower rather than treating every 60V listing as equivalent, since included watt-hours is the better predictor of runtime." },
  { title: "Deck size and drive type versus property fit", description: "We compared deck width, push versus self-propelled versus riding drive, and the practical acreage each mower is suited to before comparing price or features." },
  { title: "Review evidence where available", description: "Where a listing had a public rating and review count, we noted it directly. Where a listing had no rating or a very small review sample, we called that out rather than treating early or absent review data as a settled result." },
  { title: "Ownership and charging workflow", description: "We considered included charger speed, whether extra batteries are included, and what replacement or spare battery costs look like on each platform over time." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Property Before the Voltage Number", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Standard flat to gently sloped lawn","Greenworks 60V 21-Inch Push Lawn Mower"],["Larger lawn up to about three-quarter acre","Greenworks 60V 21-Inch Brushless Self-Propelled Mower"],["Property around one acre or more","Greenworks 60V 30-Inch Riding Lawn Mower"],["Budget-conscious self-propel buyer comfortable with a newer listing","SENIX X6 60V Max 21-Inch Self-Propelled Mower"]] } },
  { subheading: "Choose the Right Drive Type", cards: [ { label: "Push", text: "Best for flat, standard-size lawns where the operator supplying forward motion is not a burden and a lower price matters more than assisted drive." }, { label: "Self-propelled", text: "Best for larger or uneven lawns where reduced pushing effort extends how long a mowing session stays comfortable." }, { label: "Riding", text: "Best for properties around an acre or more where a walk-behind mower, even a self-propelled one, would take too long or add too much physical effort." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Battery energy", "Confirm amp-hours and number of included batteries, not just the voltage label"], ["Wear parts", "Blades, and for riding mowers, tires and drive components"], ["Logistics", "Delivered width, gate access, and storage space, especially for the riding model"], ["Support", "Warranty terms and where to source a replacement battery or blade"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider starting steps, push or self-propel effort, turning room around obstacles, and how grass height affects both runtime and cut quality." }, { label: "After mowing", text: "Check battery charging time, cooldown delay before recharging, blade access for cleaning, and how the mower folds down for storage." } ] },
];
export const faq = [
  { q: "Does a 60V mower always run longer than a 40V or 56V mower?", a: "No. Voltage alone does not determine runtime. A 60V mower with a small single battery can run shorter than a 40V or 56V mower with a larger included pack. Compare amp-hours and the number of included batteries, not just the voltage number on the box." },
  { q: "How do I estimate runtime before buying?", a: "Multiply the nominal voltage by the included amp-hours to estimate watt-hours, then compare that figure across mowers. Keep in mind that manufacturer runtime claims are typically measured under favorable grass conditions, so tall or damp grass will shorten real sessions." },
  { q: "Is a self-propelled mower worth the extra cost over a push mower?", a: "It depends on the property. Self-propel reduces physical effort on larger or sloped lawns, but it also draws battery energy that could otherwise power the blade, and it adds to the purchase price. On a small flat lawn, a push mower is often enough." },
  { q: "When does a riding mower make sense over a self-propelled walk-behind?", a: "Consider a riding mower once the property approaches an acre or more, where even a self-propelled walk-behind mower would take a long time to cover. Riding mowers also require more storage space and transport width, so confirm those logistics first." },
  { q: "What should I check if a listing has no rating or very few reviews?", a: "Treat the manufacturer's specifications as a starting point rather than a confirmed result. A small review sample, like 16 or 28 reviews, is still informative but carries more uncertainty than a listing with hundreds or thousands of reviews." },
];
export const relatedGuides: { title: string; href: string }[] = [];
