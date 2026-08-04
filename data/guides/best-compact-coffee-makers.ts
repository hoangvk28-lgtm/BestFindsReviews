export const guideSlug = "best-compact-coffee-makers";
export const guideTitle = "Best Compact Coffee Makers";
export const metaTitle = "Best Compact Coffee Makers (2026): 4 Space-Saving Picks";
export const metaDescription =
  "We compared four current mini coffee makers on real operational footprint, mug and reservoir clearance, and one-cup versus max-capacity performance so you know what actually fits your counter.";
export const mainKeyword = "mini coffee makers";
export const lastUpdated = "2026-08-04";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/310Vh-Nnu7L._SL500_.jpg";

export const introParagraphs = [
  "Most compact coffee maker roundups rank models by their published closed-box width and call it a day, then tack on a line about dorm or RV use. That number tells you almost nothing about whether the machine actually fits where you want to put it, because a coffee maker needs open space above and around it to load water, swap a mug, or lift a reservoir out for cleaning.",
  "We compared four current compact models on operational footprint rather than just box width: how much clearance the lid and reservoir need when open, whether a normal mug fits under the spout without tilting, how each performs on a single cup versus its stated maximum, and where cord storage and spill risk change the daily experience.",
];

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  amazonUrl: string;
  imageUrl: string;
  price: string;
  rating: string;
  reviews: string;
  specs: string[];
  description: string;
  bestFor: string;
  pros: string[];
  cons: string[];
}

export const products: GuideProduct[] = [
  {
    id: "keurig-k-mini",
    rank: 1,
    badge: "Best for Tiny Counters",
    name: "Keurig K-Mini Single Serve K-Cup Pod Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B07GV2S1GS?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/310Vh-Nnu7L._SL500_.jpg",
    price: "$71.95",
    rating: "4.3",
    reviews: "108,756 reviews",
    specs: ["Under 5in wide", "1-cup reservoir", "6 to 12oz brew", "Cord storage"],
    description:
      "The K-Mini's closed width is under five inches, but the number that matters more is what happens when you use it. The lid opens straight up with a few inches of clearance needed above the machine, and because it uses a one-cup reservoir instead of a tank, there is no reservoir to remove or wrestle out from a tight corner. You add water fresh through the top opening for every single brew.\n\nThat one-cup design means no meaningful difference between one-cup and max-capacity performance since every brew is effectively a fresh fill. The tradeoff is you refill it every time, and the drip tray needs to be removed to accommodate anything taller than a standard mug.",
    bestFor: "The smallest available counter footprint, dorm shelves, and anywhere refilling per cup is not a hassle.",
    pros: [
      "Smallest closed-box footprint of the models compared here",
      "No reservoir to remove for cleaning, since it fills fresh each brew",
      "Cord storage keeps the base tidy when moved often",
    ],
    cons: [
      "Requires a refill for every single cup, no standing reservoir",
      "Drip tray must come out for a travel mug taller than about 7 inches",
    ],
  },
  {
    id: "elite-gourmet-ehc111a",
    rank: 2,
    badge: "Best for Dorms and RVs",
    name: "Elite Gourmet EHC111A Personal Single-Serve Compact Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B08FVDYKKY?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31HDjcsUnyL._SL500_.jpg",
    price: "$22.99",
    rating: "4.3",
    reviews: "9,293 reviews",
    specs: ["Narrow personal design", "Includes travel mug", "Under 60-second brew", "600 watts"],
    description:
      "This model ships with its own 12oz stainless travel mug sized to sit directly under the dispenser, which removes a real source of frustration in tight spaces: guessing whether a mug you own will actually clear the spout height. The narrow body needs almost no side clearance, only vertical room to lift the mug straight out after brewing.\n\nAt 600 watts it draws less power than a full-size drip machine, a genuine consideration for RV or dorm circuits with limited amperage. It only brews one size at a time built around its included mug, so it is not the pick if you sometimes want a larger multi-cup batch.",
    bestFor: "Dorm rooms, RVs, and anyone who wants a known mug-to-spout fit without measuring.",
    pros: [
      "Includes a travel mug sized to the dispenser, no clearance guesswork",
      "Lower wattage suits RV or dorm circuit limits",
      "Brews in under 60 seconds for a quick single cup",
    ],
    cons: [
      "No multi-cup option if you need more than one serving at a time",
      "Reservoir is small, so back-to-back cups mean more refills",
    ],
  },
  {
    id: "amazon-basics-5cup",
    rank: 3,
    badge: "Best for Multi-Cup on a Small Counter",
    name: "Amazon Basics 5 Cup Drip Coffee Maker with Glass Coffee Pot",
    amazonUrl: "https://www.amazon.com/dp/B0D9QFRJMX?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/318PlOLQfYL._SL500_.jpg",
    price: "$19.94",
    rating: "4.3",
    reviews: "1,882 reviews",
    specs: ["5-cup (0.8 qt) carafe", "Auto shutoff", "Auto pause and pour", "Removable filter basket"],
    description:
      "This is the most compact way in this comparison to get an actual carafe rather than a single mug. The 0.8-quart glass pot keeps the overall footprint small while still holding enough for two people or a couple of refills, and the lid opens with the filter basket lifting straight out for grounds disposal without needing extra side clearance.\n\nOne-cup brews work fine but the machine is clearly tuned for its 5-cup max, where flavor and flow are most consistent based on its design; a single cup brewed alone can run weaker than a full pot. The 2-hour auto shutoff is a genuine safety plus for a unit likely to be left running in a small shared space.",
    bestFor: "Small kitchens or offices that want a real carafe instead of single-serve pods, without a full-size machine's footprint.",
    pros: [
      "Real 5-cup glass carafe in a compact drip body",
      "Auto pause lets you pour before the cycle finishes",
      "2-hour auto shutoff reduces spill and burn risk if left on",
    ],
    cons: [
      "Single-cup brews can taste weaker than a fuller pot",
      "Glass carafe adds breakage risk that a mug-based single-serve avoids",
    ],
  },
  {
    id: "keurig-k-express",
    rank: 4,
    badge: "Best for Frequent Refills",
    name: "Keurig K-Express Single Serve K-Cup Pod Coffee Maker",
    amazonUrl: "https://www.amazon.com/dp/B09715G57M?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41AbVx6q9jL._SL500_.jpg",
    price: "$69.99",
    rating: "4.3",
    reviews: "50,271 reviews",
    specs: ["42oz reservoir", "3 cup sizes", "Strong button", "Auto off after 5 min"],
    description:
      "The K-Express trades the K-Mini's ultra-narrow width for a 42oz removable reservoir, which holds roughly four 8oz cups before needing a refill. That reservoir has to lift straight up and out for filling at the sink, so it needs a few inches of clearance above the machine that a fixed one-cup design does not.\n\nOnce filled, it performs the same across its three cup sizes without the weaker-cup issue that a carafe machine can show on a single serving, since each K-Cup pod is dosed for its size regardless of how many cups you brew that day. The auto-off after 5 minutes helps offset the slightly larger standing footprint.",
    bestFor: "Anyone who wants single-serve convenience without refilling water before every cup.",
    pros: [
      "42oz reservoir means about four cups between refills",
      "Consistent per-cup performance regardless of daily cup count",
      "Auto off after 5 minutes limits standby power use",
    ],
    cons: [
      "Larger standing footprint than the K-Mini once the reservoir is in place",
      "No dedicated iced-coffee setting",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Operational footprint, not just closed width",
    explanation:
      "A published width like the K-Mini's under-5-inch spec only describes the machine sitting idle. Check how much clearance the lid needs to open fully and whether a reservoir has to lift straight up, since that open-and-loading space is what actually determines if it fits under a cabinet or on a narrow shelf.",
  },
  {
    criterion: "Mug and lid clearance",
    explanation:
      "A travel mug taller than about 7 inches will not clear the drip tray on several compact models unless you remove the tray first. Measure your actual mug or check whether the model ships with one sized to fit, like the Elite Gourmet EHC111A.",
  },
  {
    criterion: "One-cup vs max-capacity performance",
    explanation:
      "Carafe-style compact machines like the Amazon Basics 5-cup are tuned around their maximum batch size, and a single cup brewed alone can come out weaker. Single-serve pod machines avoid this since each pod is dosed for its cup size regardless of how many cups you brew that day.",
  },
  {
    criterion: "Reservoir type and refill frequency",
    explanation:
      "A fixed one-cup fill point like the K-Mini's needs no lifting or clearance for a tank, but requires a refill every single brew. A removable reservoir like the K-Express's 42oz tank needs vertical clearance to lift out, but covers roughly four cups before refilling.",
  },
  {
    criterion: "Cord storage and stored footprint",
    explanation:
      "If you plan to store the machine between uses, such as in an RV cabinet or dorm closet, built-in cord storage keeps the stored footprint close to the machine's own dimensions instead of adding a trailing cord that needs its own space.",
  },
  {
    criterion: "Spill risk on a small counter",
    explanation:
      "A removable drip tray that holds a full accidental brew, as on the K-Mini and K-Express, limits spill damage on a counter with little room to absorb an overflow. Confirm this feature specifically if your counter space is genuinely tight.",
  },
];

export const howWeEvaluated = [
  {
    title: "Real operational footprint",
    description:
      "We looked past the published closed-box width to the clearance each model needs when the lid is open or the reservoir is being removed, since that is the space you actually need to have available.",
  },
  {
    title: "Mug and reservoir clearance",
    description:
      "We checked maximum mug height under the spout and whether any component needed to be removed to fit a taller cup or travel mug.",
  },
  {
    title: "One-cup vs max-capacity brew consistency",
    description:
      "We compared how each model performs on a single serving versus its stated maximum, since carafe-style machines can brew weaker on a lone cup.",
  },
  {
    title: "Stored footprint and spill risk",
    description:
      "We factored in cord storage, drip tray capacity, and auto shutoff as measures of how safely and compactly each model lives on or off a small counter.",
  },
  {
    title: "Scenario fit",
    description:
      "We separated picks by realistic use case, tiny counter, dorm, RV, or multi-cup need, rather than ranking every model against a single generic use case.",
  },
];

export const howToChoose = [
  {
    subheading: "By Scenario",
    intro: "Match the pick to how and where you will actually use it, not just to the smallest box on the shelf.",
    table: {
      headers: ["Scenario", "Recommended Pick"],
      rows: [
        ["Tiny counter, single cup at a time", "Keurig K-Mini"],
        ["Dorm room or RV with a known mug", "Elite Gourmet EHC111A"],
        ["Small kitchen, want a real carafe", "Amazon Basics 5 Cup"],
        ["Single-serve without refilling every cup", "Keurig K-Express"],
      ],
    },
  },
  {
    subheading: "Clearance Checklist Before You Buy",
    cards: [
      {
        label: "Measure vertical clearance",
        text: "Check the height needed with the lid fully open and, for reservoir models, the extra inches needed to lift the tank straight up and out.",
      },
      {
        label: "Measure your mug",
        text: "A tall travel mug can require removing the drip tray on several compact models. Confirm your actual mug height against the model's stated maximum clearance.",
      },
    ],
  },
  {
    subheading: "One-Cup vs Full-Batch Machines",
    intro: "This is the split competitors usually skip.",
    table: {
      headers: ["Machine Type", "Single-Cup Performance", "Example"],
      rows: [
        ["Single-serve pod", "Consistent regardless of cup count", "Keurig K-Mini, Keurig K-Express"],
        ["Carafe-style drip", "Can taste weaker brewed alone vs a full batch", "Amazon Basics 5 Cup"],
      ],
    },
    note: "If you almost always brew just one cup, a pod-based machine avoids the weaker-single-cup issue that carafe-style compacts can show.",
  },
  {
    subheading: "Stored Weight and Cord Storage",
    cards: [
      {
        label: "Frequently moved or stowed",
        text: "Look for built-in cord storage, present on the K-Mini and K-Express, so the machine's stored footprint does not grow with a loose cord.",
      },
      {
        label: "Left in place permanently",
        text: "Cord storage matters less if the machine stays plugged in on one spot, in which case prioritize reservoir size and auto shutoff instead.",
      },
    ],
  },
  {
    subheading: "Spill Risk on Small Counters",
    intro: "A tight counter has less room to absorb an overflow, so spill protection carries more weight here than on a full kitchen counter.",
    note: "The K-Mini and K-Express both hold a full accidental brew in their removable drip trays. The Amazon Basics model's 2-hour auto shutoff reduces the risk of a forgotten, overflowing pot.",
  },
];

export const faq = [
  {
    q: "Does a compact coffee maker's listed width tell me if it will actually fit?",
    a: "Not fully. The closed-box width only describes the machine at rest. Check the clearance needed when the lid opens or a reservoir lifts out, since that operational footprint is usually larger than the resting width suggests.",
  },
  {
    q: "Will my travel mug fit under a compact coffee maker's spout?",
    a: "It depends on the model. Several compact machines require removing the drip tray to fit a mug taller than about 7 inches. Models like the Elite Gourmet EHC111A avoid this guesswork by including a travel mug sized to the dispenser.",
  },
  {
    q: "Does a single cup brew weaker on a compact drip carafe machine?",
    a: "It can. Carafe-style compact machines like the Amazon Basics 5 Cup are tuned around their maximum batch size, so one cup brewed alone may taste weaker than a full pot. Single-serve pod machines like the Keurig K-Mini avoid this since each pod is dosed per cup regardless of daily count.",
  },
  {
    q: "Is a one-cup reservoir or a removable tank better for a small space?",
    a: "A one-cup reservoir, like the K-Mini's, needs no lifting clearance but requires refilling every brew. A removable reservoir, like the K-Express's 42oz tank, covers roughly four cups before refilling but needs vertical clearance to lift out for filling.",
  },
  {
    q: "Are compact coffee makers safe to leave running in an RV or dorm room?",
    a: "Look for auto shutoff and a drip tray rated to hold a full accidental brew. The Amazon Basics model shuts off after 2 hours, and the Keurig models here both hold a complete accidental brew in their removable trays.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [
  { title: "Best Keurig Coffee Makers", href: "/guide/best-keurig-coffee-makers" },
  { title: "Best Bunn Coffee Makers", href: "/guide/best-bunn-coffee-makers" },
];
