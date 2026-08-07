export const guideSlug = "best-gas-lawn-mowers";
export const guideTitle = "Best Gas Lawn Mowers";
export const metaTitle = "Best Gas Lawn Mowers (2026): Current Models and Buying Guide";
export const metaDescription = "Best Gas Lawn Mowers compared by engine class, drive type, deck size, fuel and maintenance workload, and real ownership cost.";
export const mainKeyword = "gas lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/419ZsDeTwFL._SL500_.jpg";
export const introParagraphs = [
  "Gas mower listings tend to lead with engine displacement (cc) as if a bigger number always means a better mower, but cc alone does not tell you how a mower starts, how much it vibrates, or how often it needs oil changes and filter cleaning. We looked past the engine spec sheet to how each mower is actually built and driven.",
  "We compare engine type, drive system, deck size, fuel workload, and the maintenance and seasonal storage tasks that come with owning a gas mower, so you can match a model to your yard instead of buying on cc alone.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "powersmart-easyglide-21", rank: 1, badge: "Best Overall", name: "PowerSmart EasyGlide 21-Inch Gas Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CB9XSR1S?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/419ZsDeTwFL._SL500_.jpg", price: "$249.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch steel deck", "144cc 4-stroke OHV engine", "3-in-1 mulch/bag/side discharge", "6-position height adjustment"],
    description: "The PowerSmart EasyGlide pairs a 21-inch steel deck with a 144cc 4-stroke OHV engine and gives you mulch, bag, and side discharge in one machine, so you are not locked into one grass-handling method for the whole season. The 6-position height adjustment covers most lawn conditions from a tight spring cut to letting grass run longer in summer heat.\n\nAt this writing it holds a 4.3 rating across 932 reviews on Amazon, which is a large enough sample to take seriously for a mower in this price range. A push (non-self-propelled) walk-behind still means you are supplying the forward effort yourself, so flat to gently sloped yards are the better fit than steep terrain.",
    bestFor: "buyers who want a full-featured, well-reviewed push mower without paying for self-propel",
    pros: ["21-inch steel deck with 3-in-1 discharge options", "144cc 4-stroke OHV engine", "4.3 rating across 932 reviews at time of writing"],
    cons: ["Push drive only, so you supply the forward effort on slopes", "Steel deck adds weight compared to poly decks"],
  },
  {
    id: "ezasin-21-self-propelled", rank: 2, badge: "Best for Larger Yards", name: "Ezasin 21-Inch Self-Propelled Gas Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H7WZV1X5?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/415GtVk9iTL._SL500_.jpg", price: "$299.98",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "170cc 4-cycle engine", "Self-propelled drive", "Larger displacement than most 21-inch mowers"],
    description: "The Ezasin steps up to a 170cc 4-cycle engine and adds self-propelled drive to a 21-inch deck, which is the combination that matters most once a yard is large enough that pushing a mower for the full session becomes tiring. The bigger engine also gives it more reserve power for thicker or taller grass than a smaller-displacement push mower.\n\nAt time of writing this listing shows a 5.0 rating, but that is from only 17 reviews, so treat it as an early signal rather than a settled track record the way a mower with hundreds of reviews would be. Buyers who want a larger, proven review history may prefer the PowerSmart EasyGlide above.\n\nAs with any self-propelled gas mower, factor in that the drive system adds another mechanical part (typically a drive cable and transmission) that can need adjustment or repair over the mower's life.",
    bestFor: "larger lawns or gently sloped yards where self-propel reduces fatigue",
    pros: ["170cc 4-cycle engine with more reserve power", "Self-propelled drive reduces pushing effort", "21-inch deck matches most residential lawns"],
    cons: ["Only 17 reviews at time of writing, a small sample size", "Self-propel drive is an added mechanical component to maintain"],
  },
  {
    id: "131cc-foldable-self-propelled", rank: 3, badge: "Best Budget Pick", name: "131cc Gas Powered Self-Propelled Lawn Mower (Foldable)",
    amazonUrl: "https://www.amazon.com/dp/B0GKFSJ7WR?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41MuYPVbecL._SL500_.jpg", price: "$129.98",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["131cc gas engine", "Self-propelled rear-wheel drive", "50L grass collection tank", "Foldable frame for storage"],
    description: "This 131cc self-propelled mower undercuts the other gas mowers here on price while still offering rear-wheel self-propelled drive and a 50L grass collection tank. The foldable frame is a genuine advantage for anyone with limited garage or shed space, since it collapses down for vertical storage rather than needing a full footprint year-round.\n\nAt time of writing it holds a 3.3 rating from 19 reviews, both lower and thinner than the other two mowers in this guide, so it is worth reading current owner feedback before buying rather than relying on the price alone. It is best treated as an entry-level option for buyers prioritizing low upfront cost and compact storage over engine size or a longer review track record.",
    bestFor: "buyers who want the lowest upfront cost and compact folded storage over a long review history",
    pros: ["Lowest price of the gas mowers in this guide", "Foldable frame saves storage space", "Self-propelled drive despite the smaller 131cc engine"],
    cons: ["3.3 rating from only 19 reviews at time of writing", "Smaller displacement than the other self-propelled option here"],
  }
];
export const buyingCriteria = [
  { criterion: "Cold and warm starting effort", explanation: "Gas mowers need a manual pull start (or an electric-assist start on some models), and cold starts after winter storage are typically harder than a warm restart mid-mowing. Check whether the model uses a primer bulb or choke and how many pulls owners typically report." },
  { criterion: "Fuel use and refueling frequency", explanation: "Engine displacement, deck width, and grass conditions all affect how much gas a mower burns per session. Plan around keeping fresh fuel on hand and how often the tank needs a refill during a full mowing session." },
  { criterion: "Noise and vibration", explanation: "Gas engines run louder and transmit more vibration through the handle than electric mowers. Hearing protection and glove use are worth planning for, especially for longer mowing sessions." },
  { criterion: "Oil, plug, and filter maintenance tasks", explanation: "Gas mowers need periodic oil checks and changes, spark plug replacement, and air filter cleaning or replacement on a schedule, unlike electric mowers which skip these tasks entirely." },
  { criterion: "Seasonal fuel storage and no-start risk", explanation: "Gasoline left in a mower over winter can degrade and gum up the carburetor, leading to hard starts or no-start conditions in spring. Draining fuel or using a stabilizer before storage reduces this risk." },
];
export const howWeEvaluated = [
  { title: "Engine and drive type", description: "We compared engine displacement, stroke type, and whether each mower is push or self-propelled before looking at any other spec, since these decide how much physical effort a mowing session takes." },
  { title: "Deck size and grass handling", description: "Deck width, discharge options (mulch, bag, side discharge), and height adjustment range all affect how well a mower fits a given lawn and how much time a full mow takes." },
  { title: "Fuel and maintenance workload", description: "We considered fuel type, oil and filter maintenance, spark plug access, and the seasonal storage steps each mower requires to stay reliable from one season to the next." },
  { title: "Review evidence and price", description: "Where Amazon rating and review counts were available, we weighed sample size alongside the score itself, since a high rating from very few reviews is a weaker signal than a similar score from hundreds of reviews." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Yard Before the Engine Size", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Standard yard, want a proven, well-reviewed push mower", "PowerSmart EasyGlide 21-Inch Gas Lawn Mower"], ["Larger or gently sloped yard, want self-propel and more engine reserve", "Ezasin 21-Inch Self-Propelled Gas Lawn Mower"], ["Tight budget or limited storage space", "131cc Gas Powered Self-Propelled Lawn Mower (Foldable)"], ["Steep terrain or safety-sensitive slopes", "Follow the exact manufacturer slope guidance before selecting any mower"]] } },
  { subheading: "Push vs. Self-Propelled Gas Mowers", cards: [ { label: "Push mowers", text: "Best for flat, smaller to mid-size lawns where the operator supplies forward effort and the mower stays lighter and simpler to maintain." }, { label: "Self-propelled mowers", text: "Best for larger lawns or gentle slopes where reduced walking fatigue outweighs the added drive-system maintenance." }, { label: "Foldable frames", text: "Best for owners with limited shed or garage space who want to store a mower vertically between uses." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Task or cost", "Verify before buying"], rows: [["Starting", "Pull-start effort, primer bulb or choke use, and cold-start reports from current owners"], ["Fuel", "Tank size, typical runtime per tank, and fresh-fuel storage needs"], ["Maintenance", "Oil change interval, spark plug type, and air filter access"], ["Storage", "Off-season fuel stabilization or draining steps and folded storage footprint"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider pull-start effort, engine noise, vibration through the handle, and how far a full tank of fuel gets you." }, { label: "After mowing", text: "Check bag or discharge cleanup, oil level checks, and how the mower stores between mows in your shed or garage." } ] },
];
export const faq = [
  { q: "What should I check before buying gas lawn mowers?", a: "Measure your lawn size and slope, then compare engine displacement, push vs. self-propelled drive, deck width and discharge options, and the ongoing oil, filter, and spark plug maintenance each model requires." },
  { q: "Does a bigger engine (higher cc) always mean a better mower?", a: "No. A larger engine gives more reserve power for thick or tall grass, but it also adds weight and fuel use. Deck width, drive type, and build quality matter as much as the cc number by itself." },
  { q: "Is a self-propelled gas mower worth the extra cost?", a: "For larger or gently sloped lawns, self-propel reduces walking fatigue significantly. For small flat lawns, a push mower is usually simpler to maintain and lighter to store." },
  { q: "How much maintenance does a gas mower need compared to an electric one?", a: "Gas mowers need periodic oil checks and changes, spark plug replacement, air filter cleaning, and fuel stabilization or draining before winter storage. Electric mowers skip all of these tasks." },
  { q: "How should I store a gas mower over winter?", a: "Either run the tank dry or add a fuel stabilizer before storage, since gasoline left sitting in the tank and carburetor over several months can degrade and cause hard starting or no-start problems in spring." },
];
export const relatedGuides: { title: string; href: string }[] = [];
