export const guideSlug = "best-lawn-mowers-under-300";
export const guideTitle = "Best Lawn Mowers Under $300";
export const metaTitle = "Best Lawn Mowers Under $300 (2026): 6 Models Compared";
export const metaDescription = "Best lawn mowers under $300 compared by power source, cut width, complete ready-to-mow price, maintenance, and real ownership cost.";
export const mainKeyword = "lawn mowers under 300";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/410itr4mKuL._SL500_.jpg";
export const introParagraphs = [
  "A $300 ceiling still spans four different mowing categories: gas push mowers, cordless battery mowers, and manual push reel mowers all show up under that number, and each trades off differently on power, maintenance, and physical effort. Ranking them by price alone hides which tradeoff you are actually accepting.",
  "We compared complete ready-to-mow price, cut width, power source, starting effort, and upkeep across six current models that stay under $300, so you can pick the mower that matches your yard size and tolerance for maintenance rather than the one that happens to be cheapest on the page.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "powersmart-easycut-18-gas", rank: 1, badge: "Best Overall", name: "PowerSmart EasyCut 18-Inch Gas Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0D69LY9F9?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/410itr4mKuL._SL500_.jpg", price: "$189.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["18-inch cutting width", "144cc 4-cycle gas engine", "Side discharge", "5-position height adjustment"],
    description: "The PowerSmart EasyCut pairs an 18-inch deck with a 144cc 4-cycle gas engine, side discharge, and 5-position height adjustment, and it holds a 4.4 rating across 367 reviews, the strongest combination of score and volume among the gas models here. That width and engine size put it closer to what a full-size gas mower offers than most sub-$300 options manage.\n\nGas power means no battery to charge or replace, but it also means fuel, oil changes, spark plug checks, and off-season storage prep. Confirm you have a place to store fuel safely and are willing to keep up with basic small-engine maintenance before choosing it over a battery mower.",
    bestFor: "small to medium yards where buyers want full gas-mower cutting width without battery replacement cost",
    pros: ["18-inch deck covers ground faster than most mowers at this price", "144cc engine has enough power for uneven or slightly overgrown grass", "5-position height adjustment fits different lawn conditions"],
    cons: ["Requires fuel, oil, and routine small-engine maintenance", "Pull-start engines take more physical effort than a battery mower's switch"],
  },
  {
    id: "powersmart-18-144cc-gas", rank: 2, badge: "Best Alternative", name: "PowerSmart 18-Inch 144cc Gas Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0GXZDWCR2?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/418aH+tiswL._SL500_.jpg", price: "$189.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["18-inch cutting width", "144cc gas engine", "Side discharge", "Push drive"],
    description: "This PowerSmart 18-inch model shares the same 144cc engine class and side discharge as the EasyCut above, and carries a 4.3 rating from 414 reviews. It is effectively a sibling model rather than a distinct step down, and either one is a reasonable pick if only one is in stock or on sale at the moment you buy.\n\nBecause the two PowerSmart mowers are so close in spec and price, the deciding factor is usually availability and current price rather than a meaningful capability gap. Compare the listed price on both before ordering.",
    bestFor: "buyers who want the same 18-inch gas mower class as the top pick but need a specific model in stock",
    pros: ["Same 18-inch deck and 144cc engine class as the top pick", "Side discharge handles clippings without a bag", "Strong review volume backs up the rating"],
    cons: ["No meaningful advantage over the top pick, so buy whichever is priced lower at checkout", "Same fuel and maintenance requirements as any gas mower"],
  },
  {
    id: "wild-badger-40v-18", rank: 3, badge: "Best Cordless Electric", name: "Wild Badger Power 40V 18-Inch Brushless Cordless Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CCVGST3S?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/315PnHDtNwL._SL500_.jpg", price: "$167.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["18-inch cutting width", "40V brushless motor", "Battery-powered, no cord", "4.1 rating from 842 reviews"],
    description: "The Wild Badger Power 40V mower pairs an 18-inch deck with a brushless motor, and its 4.1 rating across 842 reviews is the largest review base among the cordless options in this price band. A brushless motor typically means less motor wear and quieter running than a brushed equivalent at a similar price.\n\nAs with any single-battery cordless mower, runtime on one charge is the practical limit rather than raw power, and it will be shorter in tall or damp grass than in short, dry grass. Check the included battery capacity against your lawn size before assuming one charge covers the whole yard.",
    bestFor: "buyers who want gas-mower deck width without fuel, cords, or engine maintenance",
    pros: ["18-inch deck is wide for a sub-$300 cordless mower", "Brushless motor reduces noise and motor wear versus brushed alternatives", "No fuel, oil, or pull-starting required"],
    cons: ["Runtime depends on grass height and moisture, and a single battery may not finish a large lawn in one charge", "Battery capacity should be checked against actual lawn size before buying"],
  },
  {
    id: "greenworks-40v-16-push", rank: 4, badge: "Best for an Established Battery Ecosystem", name: "Greenworks 40V 16-Inch Push Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B00BBQVL5U?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41hGtP+Q5jL._SL500_.jpg", price: "$249.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch cutting width", "40V 4Ah battery and charger included", "Push drive", "4.2 rating from 12,116 reviews"],
    description: "The Greenworks 40V 16-inch push mower includes a 4Ah battery and charger, and its 4.2 rating across 12,116 reviews is by far the largest review base of any mower in this roundup, reflecting how widely adopted the Greenworks 40V platform is. That popularity also means batteries, chargers, and other 40V tools are easy to find if you already own or plan to buy other Greenworks 40V equipment.\n\nAt $249.99 it is the most expensive mower on this list while still staying under the $300 ceiling, and its 16-inch deck is narrower than the gas and Wild Badger options above, so it fits smaller or more detailed lawns better than large open ones.",
    bestFor: "small lawns and buyers already invested in or planning to build out the Greenworks 40V tool platform",
    pros: ["Battery and charger included in the box", "Very large review base backs up real-world reliability", "Shares batteries with other Greenworks 40V tools"],
    cons: ["16-inch deck is narrower than the gas and 18-inch cordless options here", "Highest price on this list, close to the $300 ceiling"],
  },
  {
    id: "american-lawn-mower-1204-14", rank: 5, badge: "Best Budget Pick", name: "American Lawn Mower 1204-14 14-Inch 4-Blade Push Reel Mower",
    amazonUrl: "https://www.amazon.com/dp/B00004RA3F?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31f0r+Tws+L._SL500_.jpg", price: "$72.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["14-inch cutting width", "4-blade manual reel design", "No fuel, cord, or battery", "4.3 rating from 15,053 reviews"],
    description: "The American Lawn Mower 1204-14 is a fully manual push reel mower with a 4.3 rating across 15,053 reviews, the highest review count of any mower on this list. It needs no fuel, battery, or cord, which also makes it the lowest price and lowest maintenance option here by a wide margin.\n\nA manual reel mower depends entirely on the person pushing it, so it works best on small, flat, regularly mowed lawns rather than large or overgrown ones. It also will not handle thick or tall grass as cleanly as a motorized mower.",
    bestFor: "small flat lawns mowed on a regular schedule, and buyers who want the lowest cost and simplest maintenance",
    pros: ["Lowest price on this list by a wide margin", "No fuel, battery, cord, or engine maintenance ever needed", "Very large, strongly positive review base"],
    cons: ["Cutting performance depends entirely on operator effort and pace", "Struggles with tall, thick, or overgrown grass compared to a motorized mower"],
  },
  {
    id: "lawnmaster-lmrm1602", rank: 6, badge: "Also Consider", name: "LawnMaster LMRM1602 16-Inch 5-Blade Push Reel Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CSYNFMB7?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/31samEj-3EL._SL500_.jpg", price: "$81.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["16-inch cutting width", "5-blade manual reel design", "No fuel, cord, or battery", "4.1 rating from 1,837 reviews"],
    description: "The LawnMaster LMRM1602 is a manual push reel mower with a wider 16-inch deck and an extra blade compared to the American Lawn Mower pick above, and it holds a 4.1 rating from 1,837 reviews. The wider cut and additional blade can mean fewer passes and a slightly cleaner cut on a well-kept lawn.\n\nIt shares the same tradeoffs as any reel mower: no motor to maintain, but performance depends on the operator and it is not suited to tall or overgrown grass. Choose it over the American Lawn Mower model if the extra deck width matters more to you than the lower price and larger review base of that pick.",
    bestFor: "buyers who want a slightly wider manual reel mower and are comfortable with a smaller but still solid review base",
    pros: ["16-inch deck is wider than most reel mowers at this price", "5-blade design can leave a cleaner cut on regularly maintained grass", "No fuel, battery, or cord required"],
    cons: ["Still limited to small, flat, well-maintained lawns like any reel mower", "Smaller review base than the American Lawn Mower alternative"],
  }
];
export const buyingCriteria = [
  { criterion: "Complete ready-to-mow price", explanation: "Confirm the listed price already includes the battery and charger, or the components needed to run the mower, rather than a bare tool price that requires a separate purchase to actually mow." },
  { criterion: "Excluding temporary sale-only qualification", explanation: "A mower that only stays under $300 during a limited-time sale is not a reliable pick for this price tier. Check the regular price history, not just the price at the moment you are browsing." },
  { criterion: "Minimum cut, safety, and warranty standards", explanation: "Even at a lower price, expect a functioning height adjustment, a blade-stop safety mechanism, and a standard manufacturer warranty. A mower missing any of these is a poor value regardless of price." },
  { criterion: "Separating power sources at this tier", explanation: "Gas, cordless battery, and manual reel mowers all appear under $300, and each has a different maintenance and effort profile. Compare within a power source before comparing across them." },
  { criterion: "Meaningful improvement at the next tier", explanation: "Spending more than $300 should buy a real upgrade, such as self-propel, a wider deck, or a larger included battery, not just a different brand name on a similar spec sheet." },
];
export const howWeEvaluated = [
  { title: "Price and inclusions", description: "We confirmed the listed price covers a complete, ready-to-mow unit, including any included battery and charger, rather than a stripped-down base price." },
  { title: "Power source tradeoffs", description: "We compared gas, cordless battery, and manual reel mowers separately, since each carries a different maintenance, effort, and ongoing cost profile." },
  { title: "Cut width and yard fit", description: "We matched deck width and mower format against realistic yard sizes, since a narrow deck or manual reel design works differently on a large lawn than a small one." },
  { title: "Maintenance and ownership", description: "We considered fuel, batteries, blades, and basic upkeep each mower needs to keep performing well over repeated seasons." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Mower to Your Yard and Effort Tolerance", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Medium yard, want the widest cut for the money", "PowerSmart EasyCut 18-Inch Gas Lawn Mower"], ["Want gas-mower width without fuel or engine upkeep", "Wild Badger Power 40V 18-Inch Brushless Cordless Lawn Mower"], ["Already own Greenworks 40V tools or batteries", "Greenworks 40V 16-Inch Push Lawn Mower"], ["Small flat lawn, want the lowest cost and simplest upkeep", "American Lawn Mower 1204-14 14-Inch 4-Blade Push Reel Mower"]] } },
  { subheading: "Choose the Right Power Source Under $300", cards: [ { label: "Gas", text: "Best for medium yards where buyers want the widest cut and most cutting power for the price, and are willing to handle fuel, oil, and basic engine maintenance." }, { label: "Cordless battery", text: "Best for buyers who want to skip fuel and cords but need to size the included battery capacity to their actual lawn area and grass conditions." }, { label: "Manual push reel", text: "Best for small, flat, regularly mowed lawns where the lowest price and zero engine or battery maintenance matter more than raw cutting power." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Power", "Included battery and charger, or fuel and oil needs for a gas engine"], ["Wear parts", "Blades, and for reel mowers, blade sharpening and reel alignment over time"], ["Storage", "Shed or garage space, and off-season fuel or battery storage requirements"], ["Support", "Manufacturer warranty length and where to get parts or service"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider starting effort (pull-start, switch, or manual push), push weight, turning room, and noise level." }, { label: "After mowing", text: "Check clipping disposal method, blade cleaning, battery charging or refueling, and how much space the mower takes up in storage." } ] },
];
export const faq = [
  { q: "What mower types are actually available under $300?", a: "Gas push mowers, cordless battery mowers, and manual push reel mowers all appear under $300. Self-propelled and riding mowers are generally not available at this price with complete, ready-to-mow specs." },
  { q: "Is a manual push reel mower worth it at this price?", a: "For a small, flat, regularly mowed lawn, yes. Reel mowers avoid fuel and battery costs entirely, but they depend on operator effort and do not handle tall or thick grass as well as a motorized mower." },
  { q: "Should I buy gas or cordless battery under $300?", a: "Gas mowers at this price tend to offer wider decks and more cutting power, but require fuel and basic engine maintenance. Cordless battery mowers skip fuel and cords but limit mowing time to the included battery's runtime." },
  { q: "Does a lower price mean lower quality at this tier?", a: "Not necessarily. Several mowers under $300 carry strong review ratings and large review counts, but always confirm the listed price includes a battery and charger where applicable, and check that the price is not a temporary sale only." },
  { q: "When should I spend more than $300 on a mower?", a: "Move up in price when you need self-propel for a sloped or large yard, a wider deck than what is available under $300, or a larger included battery pack for longer cordless runtime." },
];
export const relatedGuides: { title: string; href: string }[] = [];
