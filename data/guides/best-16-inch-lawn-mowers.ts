export const guideSlug = "best-16-inch-lawn-mowers";
export const guideTitle = "Best 16-Inch Lawn Mowers";
export const metaTitle = "Best 16-Inch Lawn Mowers (2026): 4 Models Compared";
export const metaDescription = "Best 16-inch lawn mowers compared by cutting swath, drive type, weight, and bag capacity so small and medium lawns get the right match.";
export const mainKeyword = "16 inch lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41hGtP+Q5jL._SL500_.jpg";
export const introParagraphs = [
  "A 16-inch deck sits in an odd middle ground: wide enough to clear a small to medium lawn in a reasonable number of passes, narrow enough to squeeze through side-yard gates and store in a shed corner that a 21-inch mower will not fit. The category includes battery push mowers, a manual reel mower, and hybrid mulching units, so the products behind a 16-inch listing are not interchangeable.",
  "We compared four current 16-inch class mowers on cutting width, power source, operating weight, bag capacity, and included accessories, using the manufacturer specifications in each listing rather than assuming every 16-inch mower behaves the same way on the lawn.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "greenworks-40v-16-push", rank: 1, badge: "Best Overall", name: "Greenworks 40V 16-Inch Push Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B00BBQVL5U?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41hGtP+Q5jL._SL500_.jpg", price: "$249.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch deck", "40V 4.0Ah battery and charger included", "Push drive", "Corded and battery replacement not needed"],
    description: "The Greenworks 40V 16-Inch Push Lawn Mower pairs a 16-inch deck with a 40V 4.0Ah battery and charger included in the box, which removes the extra cost that some 16-inch mowers push onto a separate battery purchase. It carries a 4.2-star rating across more than 12,100 reviews, the largest review base of any mower in this comparison, which suggests a wide base of buyers have run it through a full season rather than just a first mow.\n\nA 16-inch swath means more passes on anything beyond a small lawn, and this is a push-only mower with no self-propel assist, so operator effort scales with lawn size and any slope. For a compact yard where storage space and battery hassle matter more than raw cutting width, it remains the most broadly reviewed option in the class.",
    bestFor: "small to medium lawns where included battery and a large review history matter most",
    pros: ["16-inch deck sized for compact yards and easy storage", "Battery and charger included, no separate purchase needed", "Large, established review base at a 4.2-star average"],
    cons: ["Push-only drive means more physical effort on slopes or longer sessions", "Single battery limits continuous runtime on larger lawns"],
  },
  {
    id: "mzk-40v-16-brushless", rank: 2, badge: "Best Alternative", name: "MZK 40V 16-Inch Brushless Cordless Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H8SHLHRP?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41lv2YY91tL._SL500_.jpg", price: "$159.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch deck", "40V brushless motor", "2-in-1 cutting", "Cordless push drive"],
    description: "The MZK 40V 16-Inch Brushless Cordless Push Mower combines a 16-inch deck with a 40V brushless motor and 2-in-1 cutting, which typically means mulching and side discharge without a bag attachment as the primary modes. It holds a 4.6-star rating from 201 reviews, the highest average rating in this comparison, though the review count is far smaller than the Greenworks model above it.\n\nA brushless motor generally runs cooler and lasts longer than a brushed motor at a similar price point, which is a meaningful spec difference for a mower in this price range. Because the review history is thinner, treat the rating as an early positive signal rather than a long-term reliability record, and confirm current bag or mulching configuration on the listing before buying.",
    bestFor: "buyers who want brushless motor durability at a lower price than the category leader",
    pros: ["Brushless motor for a cooler-running, longer-lasting drivetrain", "Highest average rating in this comparison at 4.6 stars", "Lower price than the top-ranked model"],
    cons: ["Much smaller review base than the established Greenworks option", "2-in-1 cutting configuration should be confirmed against current bagging needs"],
  },
  {
    id: "lawnmaster-lmrm1602-reel", rank: 3, badge: "Best for a Different Use", name: "LawnMaster LMRM1602 Push Reel Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CSYNFMB7?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31samEj-3EL._SL500_.jpg", price: "$81.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch cutting width", "5-blade reel design", "No battery, cord, or gas", "Manual push operation"],
    description: "The LawnMaster LMRM1602 is a manual push reel mower with a 16-inch cutting width and a 5-blade reel, a completely different mechanism from the battery mowers in this list. It has a 4.1-star rating from 1,837 reviews, a solid and well-established track record for a mower with no motor, battery, or cord to maintain.\n\nA reel mower needs no charging, no fuel, and produces a cleaner scissor-style cut on well-maintained, mostly flat grass, but it struggles with tall, thick, or uneven lawns compared to a motorized deck. At under $82, it is also the least expensive mower in this comparison, and it belongs on this list specifically for buyers who want a 16-inch machine without any power source to manage.",
    bestFor: "small, flat, regularly mowed lawns where a quiet, motor-free mower is preferred",
    pros: ["No battery, cord, or fuel to maintain or replace", "Established rating history at 4.1 stars across 1,837 reviews", "Lowest price in this comparison"],
    cons: ["Struggles with tall, thick, or uneven grass compared to motorized decks", "Requires more physical effort per pass than a self-propelled mower"],
  },
  {
    id: "komasty-40v-16-2in1", rank: 4, badge: "Also Consider", name: "KOMASTY 40V 16-Inch Cordless Battery Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H73N7V14?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41Uu4MejzNL._SL500_.jpg", price: "$99.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch cutting width", "2 x 40V 4.0Ah batteries and 2 chargers included", "2-in-1 mulching", "10.6-gallon bag, 5-position height adjustment"],
    description: "The KOMASTY 40V 16-Inch Cordless Battery Lawn Mower ships with two 40V 4.0Ah batteries and two chargers, a 10.6-gallon bag, and 5-position height adjustment, which is a heavier accessory kit than the other cordless mowers in this comparison at a lower price. It carries a 3.6-star rating from 180 reviews, the lowest average in this list, so the extra included hardware should be weighed against that more mixed feedback.\n\nTwo batteries can extend runtime or provide a hot-swap option on a larger lawn, and the included bag and height adjustment cover the basics for regular mowing. Given the lower rating and smaller review count relative to the Greenworks and LawnMaster models above, this is worth considering mainly as a budget option where the doubled battery kit offsets the price of buying a spare pack separately.",
    bestFor: "budget buyers who want two batteries and a bag included even with a more mixed rating history",
    pros: ["Two batteries and two chargers included for extended runtime", "10.6-gallon bag and 5-position height adjustment included", "Lowest price among the cordless options here"],
    cons: ["Lowest average rating in this comparison at 3.6 stars", "Smaller review base makes reliability harder to confirm"],
  }
];
export const buyingCriteria = [
  { criterion: "Actual cutting swath vs. total machine width", explanation: "The advertised 16-inch figure is the blade swath, not the width of the wheels, housing, or handles. Measure your narrowest gate or path against the mower's full outer width, not just the deck spec." },
  { criterion: "Overlap and pass-count time savings", explanation: "A narrower deck means more passes to cover the same lawn, and each pass needs a small overlap to avoid missed strips. On a mid-size lawn, moving from a 16-inch to a 21-inch deck can meaningfully cut mowing time, but only if the extra width still fits your access points." },
  { criterion: "Turning around tight obstacles", explanation: "Narrower 16-inch decks generally turn tighter around trees, beds, and fence corners than wider mowers, which is one of the main reasons buyers choose this class over a full-size deck." },
  { criterion: "Operating weight and bag size", explanation: "A lighter push mower is easier to maneuver and lift for storage, while a larger bag reduces how often you stop to empty clippings. Check both figures together since a small, light mower often pairs with a smaller bag." },
  { criterion: "When an adjacent deck size fits better", explanation: "A 14-inch mower may suit a very small patch, while an 18 or 21-inch deck may be worth the access tradeoff on a larger, open lawn. Confirm your actual mowable area and access constraints before assuming 16 inches is the right middle ground." },
];
export const howWeEvaluated = [
  { title: "Deck size and lawn fit", description: "We compared cutting width, total machine width, and how each mower's footprint matches small to medium lawns and tight access points." },
  { title: "Power source and drive", description: "We reviewed battery capacity, included accessories, manual versus motorized operation, and how each affects runtime and physical effort." },
  { title: "Real ownership feedback", description: "We weighed each product's rating and review count where available, and did not assign or estimate a rating for any listing without one." },
  { title: "Included accessories and cost", description: "We compared what ships in the box, including batteries, chargers, and bags, against the listed price to judge overall value." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Mower to Your Lawn and Budget", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Widest review history and included battery", "Greenworks 40V 16-Inch Push Lawn Mower"], ["Brushless motor at a lower price", "MZK 40V 16-Inch Brushless Cordless Push Mower"], ["No battery or cord to manage at all", "LawnMaster LMRM1602 Push Reel Lawn Mower"], ["Two batteries and a bag on a tight budget", "KOMASTY 40V 16-Inch Cordless Battery Lawn Mower"]] } },
  { subheading: "Choose the Right Power Source", cards: [ { label: "Cordless battery", text: "Best for buyers who want motorized cutting without managing a cord, and who are comfortable charging and storing a battery pack." }, { label: "Manual reel", text: "Best for small, flat, well-maintained lawns where no power source, charging, or fuel is preferred." }, { label: "Corded electric", text: "Best for a small yard near an outlet where avoiding battery replacement cost matters more than cordless freedom." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Power", "Included battery count, charger count, and watt-hours if listed"], ["Wear parts", "Blade sharpening or replacement, and reel adjustment for manual mowers"], ["Logistics", "Total machine width against your narrowest gate or storage space"], ["Support", "Warranty length and access to replacement blades or batteries"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider push effort, handle height, turning radius, and how many passes your lawn will need at a 16-inch swath." }, { label: "After mowing", text: "Check bag capacity and removal, blade cleaning, battery charging time, and folding or storage footprint." } ] },
];
export const faq = [
  { q: "Is a 16-inch mower wide enough for my lawn?", a: "A 16-inch deck works well for small to medium lawns, especially where narrow gates or storage space rule out a wider mower. On a larger, open lawn, a wider deck will cover the same area in fewer passes." },
  { q: "Should I buy a battery mower or a manual reel mower at 16 inches?", a: "A battery mower handles taller or thicker grass with less physical effort, while a manual reel mower like the LawnMaster LMRM1602 needs no charging or fuel and works best on flat, regularly mowed grass." },
  { q: "Does a higher star rating always mean a better mower?", a: "A higher rating is only meaningful alongside review count. A 4.6-star rating from 201 reviews and a 4.2-star rating from over 12,100 reviews both carry useful information, but the larger sample generally reflects a longer track record." },
  { q: "Why do some 16-inch mowers include two batteries and chargers?", a: "Some brands, like KOMASTY in this comparison, include two batteries and chargers to extend runtime or offer a hot-swap option, which can offset a lower individual rating for buyers focused on continuous mowing time." },
  { q: "What should I check before buying any 16-inch mower online?", a: "Confirm the total machine width against your gate or storage space, check what is included in the box (battery, charger, bag), and read the current rating and review count on the listing rather than assuming it matches this guide indefinitely." },
];
export const relatedGuides: { title: string; href: string }[] = [];
