export const guideSlug = "best-lawn-mowers-under-150";
export const guideTitle = "Best Lawn Mowers Under $150";
export const metaTitle = "Best Lawn Mowers Under $150 (2026): Honest Picks and Buying Guide";
export const metaDescription = "Best lawn mowers under $150 compared by power source, deck width, cut area, real owner ratings, and complete ready to mow price.";
export const mainKeyword = "lawn mowers under 150";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg";
export const introParagraphs = [
  "Under $150 is a thin tier for powered mowers. Most full-size gas and battery mowers with a real deck and self-propel start well above this price, so this list leans on a manual reel mower, compact corded electrics, and a couple of small cordless push mowers with limited review history. We priced every model at or below $150 as sold, not on a temporary sale.",
  "If you have a larger or uneven lawn, or you want more cutting width and a bigger battery, our Best Lawn Mowers Under $100 and Best Lawn Mowers Under $200 guides cover the tiers directly below and above this one, and the Under $200 guide in particular opens up more self-propelled and higher-capacity cordless options.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "american-lawn-mower-1204-14", rank: 1, badge: "Best Overall", name: "American Lawn Mower 1204-14 14-Inch 4-Blade Push Reel Mower",
    amazonUrl: "https://www.amazon.com/dp/B00004RA3F?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg", price: "$72.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["14-inch cutting width", "4-blade reel cutting head", "No motor, cord, or battery", "Push-powered operation"],
    description: "The American Lawn Mower 1204-14 is a manual reel mower with a 14-inch cutting width and a 4-blade reel head. It holds a 4.3 out of 5 rating across more than 15,000 reviews, the largest and most consistent review base of any mower in this price range, which points to a design that has held up across a large number of buyers over time.",
    bestFor: "small flat lawns where a buyer wants no motor, no cord, and no battery to maintain",
    pros: ["Highest review count and rating of any mower in this tier", "No fuel, charging, or battery replacement cost", "Simple design with few parts to fail"],
    cons: ["Cutting quality depends on consistent pushing speed and works best on flat, debris-free lawns", "Not practical for thick, tall, or large areas of grass"],
  },
  {
    id: "blackdecker-besta512cm", rank: 2, badge: "Best Value", name: "BLACK+DECKER BESTA512CM 3-in-1 Corded Mower, Trimmer, and Edger",
    amazonUrl: "https://www.amazon.com/dp/B078YYPWLY?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31CdnGNWAvL._SL500_.jpg", price: "$65.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["12-inch cutting width", "6.5-amp corded motor", "Converts to trimmer and edger", "Lowest price in this guide"],
    description: "The BLACK+DECKER BESTA512CM combines a compact 12-inch corded push mower with a trimmer and edger attachment in one 6.5-amp unit. It carries a 4.2 out of 5 rating from roughly 9,700 reviews, a strong result for a mower this size and price, and the lowest price of any product in this guide.",
    bestFor: "very small or oddly shaped yards where one tool needs to mow, trim, and edge",
    pros: ["Lowest price of any mower on this list", "Strong rating across a large review count", "Trimmer and edger functions in one purchase"],
    cons: ["12-inch cutting width means many passes even on small lawns", "Corded operation limits reach to the length of an extension cord"],
  },
  {
    id: "lawnmaster-meb1114k", rank: 3, badge: "Best for Slightly Larger Yards", name: "LawnMaster MEB1114K 15-Inch 11-Amp Corded Mower",
    amazonUrl: "https://www.amazon.com/dp/B092CMM5XM?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41tLNlfosEL._SL500_.jpg", price: "$121.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["15-inch cutting width", "11-amp corded motor", "No battery replacement needed", "Cord-dependent operation"],
    description: "The LawnMaster MEB1114K pairs a 15-inch deck with an 11-amp corded motor, the widest cutting path of any mower in this guide. It holds a 4.0 out of 5 rating from about 4,450 reviews, a solid result with a smaller review base than the reel mower and the BLACK+DECKER combo above it.",
    bestFor: "small unobstructed yards near an outlet that want the widest deck available under $150",
    pros: ["Widest cutting deck in this price tier", "No battery to buy or replace over time", "Solid rating across a meaningful review count"],
    cons: ["Managing an extension cord around trees, beds, and the mowing path is the core tradeoff", "At $121.00, leaves little room before crossing into the Under $200 tier"],
  },
  {
    id: "litheli-14in-5ah", rank: 4, badge: "Best Cordless Pick", name: "Litheli 14-Inch Cordless Push Mower with 5.0Ah Battery",
    amazonUrl: "https://www.amazon.com/dp/B0GXVD6ZLV?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/51zw5LOnu7L._SL500_.jpg", price: "$99.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["14-inch cutting width", "Brushless motor", "5.0Ah battery and charger included", "5-position height adjustment"],
    description: "The Litheli 14-Inch is a cordless push mower with a brushless motor and an included 5.0Ah battery and charger, rated for lawns up to about 3,000 square feet. It has a 3.9 out of 5 rating, but that rating comes from only 48 reviews, so treat it as an early signal rather than a proven track record.",
    bestFor: "small cord-free lawns where a buyer accepts a limited review history in exchange for battery convenience",
    pros: ["Battery and charger included at under $100", "Brushless motor and 5 height positions", "No cord to manage while mowing"],
    cons: ["Rating is based on a small number of reviews and could shift as more owners weigh in", "Runtime and cut quality in tall or damp grass are not established by this review volume"],
  },
  {
    id: "generic-13in-40v", rank: 5, badge: "Also Consider", name: "13-Inch 40V Cordless Electric Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H82DR75D?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41Wu7LRPntL._SL500_.jpg", price: "$119.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["13-inch cutting width", "40V cordless battery system", "Compact size for small yards or patios", "Lightweight push design"],
    description: "This 13-inch 40V cordless mower is built for very small patios and garden strips rather than a full lawn. Its 3.3 out of 5 rating is drawn from only 19 reviews, the smallest and lowest-rated review base in this guide, so it belongs on a shortlist only after the products above have been ruled out.",
    bestFor: "very small patio or garden strips where a buyer has already ruled out the higher-rated options above",
    pros: ["Compact and lightweight for tight storage spaces", "Cordless operation for small, contained areas"],
    cons: ["Lowest rating and smallest review count in this guide", "At $119.99, the LawnMaster above offers a wider deck and a larger review base for a similar price"],
  }
];
export const buyingCriteria = [
  { criterion: "Complete ready to mow price", explanation: "Add any required battery, charger, or extension cord that is not already included in the box. A mower that lists for $99 but needs a $40 battery pack is not actually a sub $150 purchase." },
  { criterion: "Excluding temporary sale only qualification", explanation: "Confirm a mower's regular price rather than a one time discount before counting it in this tier. A model that only dips under $150 during a sale event will not stay there when you actually check out." },
  { criterion: "Minimum cut, safety, and warranty standards", explanation: "Even at this price, expect a usable cutting width, a functioning safety bail or shutoff, and a manufacturer warranty. Skip listings that omit basic safety features to hit a lower price." },
  { criterion: "Separating power sources at this tier", explanation: "Manual reel, corded electric, and small cordless mowers behave very differently day to day. Decide which power source fits your yard and outlet access before comparing models within that group." },
  { criterion: "Meaningful improvement at the next tier", explanation: "Moving into the Under $200 tier typically buys a wider deck, self-propel, or a larger battery pack rather than just a higher price tag. Confirm the upgrade is real before paying more." },
];
export const howWeEvaluated = [
  { title: "Price ceiling verification", description: "We checked each mower's listed price against the $150 ceiling and excluded any product priced at or above that line, including near misses." },
  { title: "Review volume and rating context", description: "We weighed each mower's star rating against how many reviews support it, since a 3.9 rating from 48 reviews carries far less certainty than a 4.3 rating from over 15,000." },
  { title: "Power source and deck fit", description: "We grouped mowers by manual, corded, and cordless power and compared cutting width against the size of yard each format is realistically suited for." },
  { title: "Complete cost to use", description: "We looked at what is included in the box, such as battery, charger, or cord requirements, versus what a buyer would need to add before the mower is ready to use." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Mower to Your Situation", table: { headers: ["Buyer situation", "Recommended pick"], rows: [["Small flat lawn, no interest in cords or batteries", "American Lawn Mower 1204-14 14-Inch Push Reel Mower"], ["Tiny or irregular yard needing trim and edge too", "BLACK+DECKER BESTA512CM 3-in-1 Corded Mower, Trimmer, and Edger"], ["Slightly larger yard near an outlet, wants the widest deck", "LawnMaster MEB1114K 15-Inch 11-Amp Corded Mower"], ["Wants cord-free operation and accepts limited review history", "Litheli 14-Inch Cordless Push Mower with 5.0Ah Battery"]] } },
  { subheading: "Power Source Tradeoffs at This Price", cards: [ { label: "Manual reel", text: "No motor, cord, or battery to maintain, but cutting quality depends on push speed and grass length, and it is only practical on small, mostly flat lawns." }, { label: "Corded electric", text: "Consistent power and no battery to replace, but the mowing path is limited by extension cord length and needs to be managed around the yard." }, { label: "Small cordless", text: "No cord to manage, but at this price the battery, deck width, and review history are usually smaller than a corded or manual option costing the same or less." } ] },
  { subheading: "Ownership Checklist Before Buying", table: { headers: ["Item to verify", "Why it matters"], rows: [["Included battery or charger", "Confirms the listed price is the full ready to mow price"], ["Cutting width versus yard size", "A 12 to 15 inch deck changes how many passes a lawn needs"], ["Review count behind the rating", "A rating from under 50 reviews is far less certain than one from thousands"], ["Manufacturer warranty terms", "Confirms basic coverage exists even on a budget purchase"]] } },
];
export const faq = [
  { q: "Can you get a real self-propelled or gas mower under $150?", a: "Rarely as a new, current model. This tier is dominated by manual reel mowers, small corded electrics, and compact cordless push mowers. Self-propel and larger gas or battery decks typically start in the Under $200 tier and above." },
  { q: "Is a manual reel mower a reasonable choice in 2026?", a: "For a small, mostly flat lawn, yes. The American Lawn Mower 1204-14 in this guide holds a 4.3 rating across more than 15,000 reviews, which suggests it works well for the yards it is suited for, though it is not a fit for tall, thick, or large areas of grass." },
  { q: "Why does review count matter as much as star rating?", a: "A 3.9 or even 4.0 rating built on fewer than 50 reviews can shift significantly as more owners weigh in, while a rating built on thousands of reviews is a more stable signal. We noted review counts alongside ratings for this reason." },
  { q: "What is the real tradeoff with corded electric mowers at this price?", a: "Corded mowers avoid battery replacement cost and tend to have consistent power, but the mowing path is limited to the length of your extension cord, and you have to keep the cord clear of the blade path as you mow." },
  { q: "When should I look at the Under $200 tier instead?", a: "If you need a wider deck, self-propel, a larger cordless battery, or a stronger review history than the smaller cordless options in this guide, the Under $200 tier is where those upgrades typically start to appear." },
];
export const relatedGuides: { title: string; href: string }[] = [];
