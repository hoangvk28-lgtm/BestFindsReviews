export const guideSlug = "best-lawn-mowers-under-200";
export const guideTitle = "Best Lawn Mowers Under $200";
export const metaTitle = "Best Lawn Mowers Under $200 (2026): Tested Value Picks and Buying Guide";
export const metaDescription = "Best Lawn Mowers Under $200 compared by power source, deck width, cut quality, safety standards, and complete ready-to-mow price.";
export const mainKeyword = "lawn mowers under 200";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/410itr4mKuL._SL500_.jpg";
export const introParagraphs = [
  "Under $200 covers three very different power sources, small gas mowers, corded or battery electrics, and manual reel mowers, and each one asks for a different tradeoff between price, effort, and yard size. We compared complete ready-to-mow price, deck width, cut quality, and safety and warranty basics rather than ranking by price alone.",
  "This site also publishes a separate Best Lawn Mowers Under $100 guide for the tightest budgets and a Best Lawn Mowers Under $300 guide for buyers who can stretch past this tier for self-propel, larger decks, or more battery capacity. Use this guide if a complete, ready-to-mow setup under $200 is the goal.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "powersmart-easycut-18", rank: 1, badge: "Best Overall", name: "PowerSmart EasyCut 18-Inch Gas Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0D69LY9F9?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/410itr4mKuL._SL500_.jpg", price: "$189.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["18-inch deck", "144cc 4-cycle engine", "Side discharge", "5-position height adjustment"],
    description: "PowerSmart EasyCut 18-Inch Gas Lawn Mower combines an 18-inch deck, a 144cc 4-cycle engine, and side discharge, and it carries a 4.4 rating from 367 reviews, the strongest rating of any pick in this guide. That combination makes it a practical option for small to mid-size yards where a wider deck and gas power cut mowing time compared to a manual or narrow electric mower.\n\nAt $189.99 it sits close to the top of this price tier, so it leaves little room before crossing into the next bracket, and gas power adds fuel, oil changes, and seasonal engine maintenance that electric and reel mowers do not need. Compare its deck width, fuel workflow, and storage needs with your property before buying.",
    bestFor: "small to mid-size yards where a wider gas-powered deck is worth the added maintenance",
    pros: ["18-inch deck covers ground faster than the narrower electrics in this guide", "144cc 4-cycle engine with side discharge", "Highest rating in this guide at 4.4 from 367 reviews"],
    cons: ["At $189.99 it leaves little room under the $200 ceiling before crossing into the next tier.", "Gas power adds fuel, oil, and seasonal engine maintenance that electric or reel mowers avoid."],
  },
  {
    id: "american-lawn-mower-1204-14", rank: 2, badge: "Best Budget Pick", name: "American Lawn Mower 1204-14 14-Inch Push Reel Mower",
    amazonUrl: "https://www.amazon.com/dp/B00004RA3F?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg", price: "$72.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["14-inch cutting width", "4-blade reel design", "No fuel or battery required", "Push-powered operation"],
    description: "American Lawn Mower 1204-14 14-Inch Push Reel Mower combines a 14-inch cutting width, a 4-blade reel design, and push-powered operation with no fuel or battery to manage, and it has the largest review base in this guide at 15,053 reviews with a 4.3 rating. That combination makes it a practical option for small, flat, well-maintained lawns where the buyer wants the lowest ongoing cost and no charging or fueling routine.\n\nThe narrow 14-inch deck and manual push effort limit how much lawn it can realistically cover in one session, and reel mowers struggle with taller or thicker grass compared to powered options. Compare its cutting width and your yard size and terrain before buying.",
    bestFor: "small, flat lawns where the lowest ongoing cost and no fueling or charging matter most",
    pros: ["Largest review base in this guide, 15,053 reviews at a 4.3 rating", "No fuel, battery, or charging required", "Lowest price in this guide at $72.00"],
    cons: ["The 14-inch deck and manual push effort limit coverage on larger lawns.", "Reel mowers handle taller or thicker grass poorly compared to gas or electric options."],
  },
  {
    id: "lawnmaster-meb1114k", rank: 3, badge: "Best Corded Electric", name: "LawnMaster MEB1114K 15-Inch Corded Electric Mower",
    amazonUrl: "https://www.amazon.com/dp/B092CMM5XM?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41tLNlfosEL._SL500_.jpg", price: "$121.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["15-inch deck", "11-amp corded motor", "No battery to replace", "Cord-limited workflow"],
    description: "LawnMaster MEB1114K 15-Inch Corded Electric Mower combines a 15-inch deck with an 11-amp corded motor and needs no battery to buy or replace, and it holds a 4.0 rating from 4,448 reviews. That combination makes it a practical option for small, unobstructed yards near an outlet where consistent power without charging or fueling matters.\n\nManaging an outdoor extension cord around trees, beds, and the mowing path is the core tradeoff of any corded mower, and the 15-inch deck means more passes on a larger lawn. Compare its cord workflow and yard layout before buying.",
    bestFor: "small unobstructed yards near an outlet that want consistent power without batteries",
    pros: ["11-amp corded motor with no battery to buy or replace", "4.0 rating from 4,448 reviews", "Consistent power output with no charge time between sessions"],
    cons: ["Managing an outdoor extension cord around trees, beds, and the mowing path is the core tradeoff.", "The 15-inch deck means more passes on larger lawns."],
  },
  {
    id: "blackdecker-besta512cm", rank: 4, badge: "Best for Small Yards and Edges", name: "BLACK+DECKER BESTA512CM 3-in-1 Mower, Weed Eater and Edger",
    amazonUrl: "https://www.amazon.com/dp/B078YYPWLY?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31CdnGNWAvL._SL500_.jpg", price: "$65.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["12-inch cutting width", "6.5-amp corded motor", "3-in-1 mower, trimmer, and edger", "Compact push design"],
    description: "BLACK+DECKER BESTA512CM 3-in-1 Mower, Weed Eater and Edger combines a compact 12-inch cutting width with a 6.5-amp corded motor that converts between mowing, trimming, and edging, and it holds a 4.2 rating from 9,666 reviews. That combination makes it a practical option for very small yards, patios, or tight side strips where one tool replacing three saves storage space and money.\n\nThe 12-inch cutting width is the narrowest in this guide, so it is not a fit for a full-size lawn, and switching between mowing, trimming, and edging modes takes setup time compared to a dedicated mower. Compare its cutting width against your actual mowable area before buying.",
    bestFor: "very small yards, patios, or edge strips that also want a trimmer and edger in one purchase",
    pros: ["Converts between mower, weed eater, and edger, replacing three tools", "4.2 rating from 9,666 reviews", "Lowest price in this guide at $65.00"],
    cons: ["The 12-inch cutting width is the narrowest in this guide and is not suited to a full-size lawn.", "Switching between mowing, trimming, and edging modes adds setup time versus a dedicated mower."],
  },
  {
    id: "litheli-14in-5ah", rank: 5, badge: "Best Battery-Powered", name: "Litheli 14-Inch Cordless Lawn Mower, 5.0Ah Battery",
    amazonUrl: "https://www.amazon.com/dp/B0GXVD6ZLV?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/51zw5LOnu7L._SL500_.jpg", price: "$99.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["14-inch deck", "Brushless motor", "5.0Ah battery and charger included", "5-position height adjustment"],
    description: "Litheli 14-Inch Cordless Lawn Mower, 5.0Ah Battery combines a 14-inch deck with a brushless motor and an included 5.0Ah battery and charger, and it currently holds a 3.9 rating from a smaller review base of 48 reviews. That combination makes it a practical option for buyers who want cordless freedom without a corded mower's cable management, rated to cut up to 3,000 square feet on a charge.\n\nThe review base is still small compared to the corded and reel options in this guide, so buyer feedback on long-term battery life is limited so far, and the 14-inch deck suits small lawns rather than larger properties. Compare its rated coverage area with your lawn size before buying.",
    bestFor: "small lawns up to about 3,000 square feet where cordless convenience is worth more than a corded mower's lower price",
    pros: ["Brushless motor with battery and charger included in the price", "Cordless operation with no extension cord to manage", "5-position height adjustment"],
    cons: ["The 3.9 rating is based on a smaller review base of 48 reviews so far, so long-term feedback is limited.", "The 14-inch deck suits small lawns rather than larger properties."],
  },
  {
    id: "generic-13in-40v", rank: 6, badge: "Also Consider", name: "13-Inch Cordless Lawn Mower, 40V",
    amazonUrl: "https://www.amazon.com/dp/B0H82DR75D?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41Wu7LRPntL._SL500_.jpg", price: "$119.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["13-inch deck", "40V battery platform", "Lightweight cordless design", "Compact for small spaces"],
    description: "13-Inch Cordless Lawn Mower, 40V combines a compact 13-inch deck with a 40V battery platform in a lightweight cordless build, and it currently holds a 3.3 rating from a small review base of 19 reviews. That combination makes it a practical option for very small patches of lawn, courtyards, or backup mowing duty where light weight matters more than deck width.\n\nWith only 19 reviews and a 3.3 rating, buyer feedback is limited and lower than the other picks in this guide, so treat this as a secondary option rather than a primary lawn mower for a full-size yard. Compare its 13-inch deck and review base against the other picks here before buying.",
    bestFor: "very small patches of lawn or backup mowing duty where light weight matters most",
    pros: ["Lightweight and compact for small or tight spaces", "Cordless 40V battery platform with no extension cord"],
    cons: ["The 3.3 rating from only 19 reviews is the lowest and smallest review base in this guide.", "The 13-inch deck is impractical for anything beyond a very small area."],
  }
];
export const buyingCriteria = [
  { criterion: "Complete, ready-to-mow price", explanation: "Under $200, check whether the listed price already includes the battery, charger, or a full tank of gas, or whether those are sold separately. A mower that needs an extra purchase to actually run is not really under $200." },
  { criterion: "Excluding temporary sale-only qualification", explanation: "A mower that only fits under $200 during a limited-time sale is not a reliable pick for this tier. Confirm the regular list price so the purchase still makes sense if the sale ends." },
  { criterion: "Minimum cut, safety, and warranty standards", explanation: "Even at a low price, a mower should have a functioning blade-stop safety feature, a clear height-adjustment range, and a manufacturer warranty covering at least the first year of ownership." },
  { criterion: "Separating power sources at this tier", explanation: "Reel, corded electric, battery electric, and gas mowers behave very differently under $200. A reel mower has no ongoing power cost but limited grass handling, corded mowers need outlet access and cord management, battery mowers add charging time and a battery to eventually replace, and gas mowers need fuel and engine upkeep." },
  { criterion: "Meaningful improvement at the next tier", explanation: "Moving into the $200 to $300 range typically buys wider decks, self-propel drive, larger included batteries, or gas engines with more displacement. Confirm the extra spend actually solves a problem your current yard has before paying more." },
];
export const howWeEvaluated = [
  { title: "Yard size and power source fit", description: "We matched deck width and power source, reel, corded, battery, or gas, against realistic yard sizes rather than assuming every mower under $200 suits every lawn." },
  { title: "Complete ready-to-mow price", description: "We looked at whether the listed price includes the battery, charger, and any accessories needed to actually mow, since a mower that needs extra purchases is not truly complete at that price." },
  { title: "Rating and review volume", description: "Where available, we weighed both the star rating and the number of reviews behind it, since a rating from a handful of reviews carries less weight than one backed by thousands." },
  { title: "Ownership and maintenance load", description: "We considered cord management, battery charging and eventual replacement, and gas engine upkeep as ongoing costs and effort that extend beyond the sticker price." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match Your Yard and Budget Situation", table: { headers: ["Buyer situation", "Recommended pick"], rows: [["Small to mid-size yard, want the strongest overall rating", "PowerSmart EasyCut 18-Inch Gas Lawn Mower"], ["Small flat lawn, lowest ongoing cost is the priority", "American Lawn Mower 1204-14 14-Inch Push Reel Mower"], ["Small yard near an outlet, want a proven corded electric", "LawnMaster MEB1114K 15-Inch Corded Electric Mower"], ["Very small yard or patio, also want a trimmer and edger", "BLACK+DECKER BESTA512CM 3-in-1 Mower, Weed Eater and Edger"], ["Small lawn, want cordless freedom without a corded mower's cable", "Litheli 14-Inch Cordless Lawn Mower, 5.0Ah Battery"]] } },
  { subheading: "Choose the Right Power Source at This Price", cards: [ { label: "Reel", text: "Best for small, flat, well-maintained lawns where the lowest ongoing cost and no fueling or charging matter most, and the buyer accepts more physical effort." }, { label: "Corded electric", text: "Best for small yards within reach of an outdoor outlet where consistent power without charging or battery replacement is worth managing an extension cord." }, { label: "Battery electric", text: "Best for small to mid-size lawns where cordless freedom matters most and the buyer accepts charging time and an eventual battery replacement." }, { label: "Gas", text: "Best for slightly larger lawns at this price tier where a wider deck and no cord or charge time outweigh fuel and engine maintenance." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Complete price", "Whether the battery, charger, or fuel needed to run the mower is included in the listed price"], ["Wear parts", "Blade sharpening or replacement, and belt or filter availability for the model"], ["Power workflow", "Outlet access and cord length for corded models, or charge time and battery life for cordless models"], ["Support", "Manufacturer warranty length and access to authorized service or replacement parts"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider push effort, cutting width, height adjustment range, and how the mower handles the densest or tallest part of the lawn." }, { label: "After mowing", text: "Check clipping cleanup, folding for storage, cord winding or battery charging, and how much space the mower needs when not in use." } ] },
];
export const faq = [
  { q: "What should I check before buying a lawn mower under $200?", a: "Confirm the listed price already includes anything needed to run the mower, such as a battery, charger, or a tank of gas. Then match deck width and power source to your yard size and confirm a basic manufacturer warranty applies." },
  { q: "Can I trust a mower's star rating alone at this price?", a: "Weigh the rating together with the number of reviews behind it. A 4.3 rating from over 15,000 reviews reflects more real-world use than a 3.9 or 3.3 rating from fewer than 50 reviews." },
  { q: "Is a reel mower or an electric mower better under $200?", a: "A reel mower has the lowest ongoing cost and works well on small, flat, well-maintained lawns, but it struggles with taller or thicker grass. A corded or battery electric mower handles more grass conditions but adds a cord to manage or a battery to eventually replace." },
  { q: "Is a gas mower worth it under $200?", a: "A gas mower under $200, like the 144cc option in this guide, typically offers the widest deck at this price and no cord or charge time, but it adds fuel costs and seasonal engine maintenance that electric and reel mowers do not need." },
  { q: "When should I move up to the $200 to $300 range instead?", a: "Move up if your lawn needs a wider deck, self-propel drive on slopes, a larger included battery for longer runtime, or a gas engine with more power. If a mower under $200 already covers your yard comfortably, the extra spend may not be necessary." },
];
export const relatedGuides: { title: string; href: string }[] = [];
