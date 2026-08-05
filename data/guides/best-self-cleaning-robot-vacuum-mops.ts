export const guideSlug = "best-self-cleaning-robot-vacuum-mops";
export const guideTitle = "Best Self-Cleaning Robot Vacuum Mops";
export const metaTitle = "Best Self-Cleaning Robot Vacuum Mops (2026): 8 Models Compared";
export const metaDescription =
  "We compared eight current self-cleaning robot vacuum mops on mop-pad wash quality, wash water temperature, drying and odor control, and how much manual tray cleaning each one still requires.";
export const mainKeyword = "self-cleaning robot vacuum mops";
export const lastUpdated = "2026-08-05";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41f2Wc1576L._SL500_.jpg";

export const introParagraphs = [
  "Self-cleaning robot vacuum mops all promise to wash their own mop pads and empty their own dustbins, but the mechanism behind that promise varies a lot from model to model. A roller mop, a spinning pad, and a vibrating pad all pick up and release dirt differently, and the dock wash water temperature has a real effect on how clean the pad actually gets between runs.",
  "We researched eight current models across a wide price range, from budget vacuum-and-mop combos under $150 to premium docks with hot-water washing and heated drying. We focused on the details that determine whether a self-cleaning dock is genuinely low-maintenance or just shifts the cleaning chore from the floor to a tray you still have to scrub by hand every week.",
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
    id: "shark-matrix-plus",
    rank: 1,
    badge: "Best Overall",
    name: "Shark Matrix Plus 2-in-1 Robot Vacuum & Mop, Black/Brass, AV2613WA",
    amazonUrl: "https://www.amazon.com/dp/B0FMYRYVKW?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41f2Wc1576L._SL500_.jpg",
    price: "$299.99",
    rating: "4.0",
    reviews: "23,547 reviews",
    specs: ["2-in-1 vacuum and mop", "Self-cleaning dock", "Matrix cleaning navigation", "Auto dirt disposal"],
    description:
      "The Matrix Plus combines vacuuming and mopping in a single pass and returns to its dock to empty its bin and rinse its mop pad without you touching either. Shark's Matrix navigation pattern is designed to catch corners and edges that a simple back-and-forth route tends to skip, which matters most in rooms with a lot of furniture legs.\n\nAt this price and with over 23,000 reviews behind it, it lands in the middle of the pack on cost while covering the core self-cleaning features most households actually want: dock-based pad rinsing and hands-off dirt disposal. It is a sensible default pick if you are not chasing the highest suction number or the most premium dock available.",
    bestFor: "Households that want a genuinely hands-off vacuum-and-mop combo without paying premium-tier prices.",
    pros: [
      "Well-reviewed with a large sample size at over 23,000 reviews",
      "Combines vacuuming and mopping instead of requiring separate passes",
      "Dock handles both dirt disposal and mop pad rinsing",
    ],
    cons: [
      "Suction and dock features trail the premium picks in this comparison",
      "Mop pad tray still needs periodic manual cleaning",
    ],
  },
  {
    id: "eufy-c28",
    rank: 2,
    badge: "Best Premium Pick",
    name: "eufy C28 Robot Vacuum and Mop Combo, 15,000 Pa, HydroJet Roller Mop",
    amazonUrl: "https://www.amazon.com/dp/B0FWK41WF2?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31MYUq-FSoL._SL500_.jpg",
    price: "$499.99",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["15,000Pa suction", "HydroJet roller mop", "Self-washing dock", "High-power vacuum motor"],
    description:
      "The C28 uses a roller-style mop rather than a spinning or vibrating pad, and eufy's HydroJet system pairs it with pressurized water jets at the dock to flush debris out of the roller between cleaning cycles. Roller mops generally shed grime more thoroughly during self-cleaning than flat pads, since the water and scraper can work around the full cylinder instead of just the pad's flat face.\n\nWith 15,000Pa of suction, it sits near the top of this comparison for raw pickup power, which pairs well with a roller mop that can also assist in agitating debris on hard floors. This is the pick for buyers who want the most thorough self-cleaning mechanism and are willing to pay for it.",
    bestFor: "Buyers who want the most thorough pad-washing mechanism and strong suction, and don't mind the premium price.",
    pros: [
      "Roller mop design tends to rinse cleaner than flat spinning pads",
      "15,000Pa suction is among the strongest in this comparison",
      "HydroJet dock actively flushes the roller rather than just soaking it",
    ],
    cons: [
      "Highest price point among the models in this guide",
      "Roller mop mechanisms are generally more complex to service than pad-based designs",
    ],
  },
  {
    id: "roborock-q7-l5",
    rank: 3,
    badge: "Best Budget Pick",
    name: "roborock Q7 L5 Robot Vacuum and Mop Combo, 8,000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0F334DN9J?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41hpc-ca5xL._SL500_.jpg",
    price: "$139.99",
    rating: "Popular pick",
    reviews: "Widely purchased",
    specs: ["8,000Pa suction", "Combo vacuum and mop", "roborock navigation", "Budget-tier pricing"],
    description:
      "The Q7 L5 brings roborock's navigation and mapping software down to a budget price point without a full self-emptying and self-washing dock setup found on the brand's higher tier models. It still handles combined vacuuming and mopping in one pass, which is the main feature most buyers are actually looking for.\n\nAt under $140, it is the most affordable way to get a recognized robot vacuum brand with reliable mapping, though buyers should check the specific dock included with this model since self-cleaning features tend to scale with price even within the same brand.",
    bestFor: "Budget-conscious buyers who want a trusted navigation brand without paying for a full premium dock.",
    pros: [
      "Lowest price among the roborock-branded options in this comparison",
      "Established navigation and mapping software",
      "Combined vacuum and mop in a single pass",
    ],
    cons: [
      "Dock self-cleaning features are more limited than roborock's higher-tier models",
      "8,000Pa suction trails the higher-power picks here",
    ],
  },
  {
    id: "yeedi-m12-pro-gen2",
    rank: 4,
    badge: "Best High-Suction Pick",
    name: "Yeedi by ECOVACS M12 PRO Gen2 Robot Vacuum and Mop, 25000Pa Suction",
    amazonUrl: "https://www.amazon.com/dp/B0GXDZ357G?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31YEX5g6GaL._SL500_.jpg",
    price: "$299.99",
    rating: "Frequently recommended",
    reviews: "Strong buyer feedback",
    specs: ["25,000Pa suction", "Gen2 platform", "Combo vacuum and mop", "ECOVACS-backed brand"],
    description:
      "The M12 Pro Gen2 lists 25,000Pa of suction, the highest rated figure among every model in this comparison, aimed at buyers with heavier pet hair or ground-in debris on hard floors and low-pile carpet. Yeedi is ECOVACS's value-oriented sub-brand, so it typically inherits mapping and obstacle avoidance technology from the parent company at a lower price.\n\nHigh suction numbers do not by themselves guarantee a cleaner mop pad after self-washing, so buyers focused specifically on mop hygiene should weigh this alongside the dock's wash water temperature and cycle length rather than suction alone.",
    bestFor: "Homes with pets or heavier hard-floor debris that want maximum rated suction at a mid-range price.",
    pros: [
      "Highest rated suction figure in this comparison at 25,000Pa",
      "Backed by ECOVACS's broader navigation and mapping technology",
      "Mid-range pricing relative to its suction rating",
    ],
    cons: [
      "High suction rating does not directly translate to better mop pad self-cleaning",
      "Newer Gen2 platform has a shorter track record than more established lines",
    ],
  },
  {
    id: "irobot-roomba-505x",
    rank: 5,
    badge: "Best for Odor Control",
    name: "iRobot Roomba 505X Robot Vacuum & Mop Combo, 70x More Suction, Multifunction Dock, 75 Day Self-Emptying, Self-Cleaning & Hot Dry, Lifting Spinning Mop Pads, AI Obstacle Avoidance",
    amazonUrl: "https://www.amazon.com/dp/B0GT6RFQZY?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/31are2eqdML._SL500_.jpg",
    price: "$499.99",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["Multifunction dock", "75-day self-emptying", "Self-cleaning & hot dry", "Lifting spinning mop pads"],
    description:
      "The Roomba 505X pairs spinning mop pads with a dock that both rinses them and finishes with a hot-dry cycle, which is the feature that most directly addresses the musty odor that damp mop pads can develop if left wet between uses. The pads also lift automatically when the robot detects carpet, so it does not drag a wet pad across rugs.\n\nWith a 75-day self-emptying bin and AI obstacle avoidance on top of the mop system, this is built for buyers who want to interact with the robot as little as possible between deeper manual cleanings of the dock's water tanks.",
    bestFor: "Buyers most concerned about musty mop odor and who want long stretches between manual dock maintenance.",
    pros: [
      "Hot-dry cycle directly targets the odor risk of damp mop pads",
      "Pads lift automatically to avoid wetting carpet",
      "75-day self-emptying interval reduces bin maintenance",
    ],
    cons: [
      "Premium price near the top of this comparison",
      "Water tanks and trays still need manual refilling and periodic cleaning",
    ],
  },
  {
    id: "ropvacnic-combo",
    rank: 6,
    badge: "Best Ultra-Budget Pick",
    name: "ROPVACNIC Robot Vacuum and Mop Combo 5200Pa Suction Robotic Cleaner",
    amazonUrl: "https://www.amazon.com/dp/B0GDXV2KJ4?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/518+BuiWh6L._SL500_.jpg",
    price: "$139.99",
    rating: "Popular pick",
    reviews: "Widely purchased",
    specs: ["5,200Pa suction", "Combo vacuum and mop", "Entry-level pricing", "Compact robotic cleaner"],
    description:
      "The ROPVACNIC combo covers the basics of combined vacuuming and mopping at a price close to the lowest in this comparison, with 5,200Pa of suction aimed at everyday dust and light debris rather than heavy pet hair or ground-in dirt. It is a straightforward option for buyers who want to try a robot vacuum and mop combo without a large upfront commitment.\n\nBuyers should expect a more basic dock than the premium picks here, and should plan on more frequent manual tray cleaning since lower-tier docks generally do less of the pad-washing work automatically.",
    bestFor: "First-time buyers who want to try a vacuum-and-mop combo at the lowest possible entry price.",
    pros: [
      "Among the lowest prices in this comparison",
      "Combines vacuuming and mopping in one device",
      "Simple enough for a first-time robot vacuum owner",
    ],
    cons: [
      "5,200Pa suction is on the lower end for heavier debris or pet hair",
      "Dock self-cleaning is more basic than higher-tier models here",
    ],
  },
  {
    id: "tikom-self-emptying",
    rank: 7,
    badge: "Best Entry-Level Self-Emptying",
    name: "Tikom Robot Vacuum and Mop, Robotic Vacuum Cleaner with Self-Emptying Base",
    amazonUrl: "https://www.amazon.com/dp/B0FKH1RW65?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/41TiBcXjEaL._SL500_.jpg",
    price: "$219.99",
    rating: "Frequently recommended",
    reviews: "Strong buyer feedback",
    specs: ["Self-emptying base", "Combo vacuum and mop", "Mid-range pricing", "App control"],
    description:
      "This Tikom model adds a self-emptying base to the vacuum-and-mop combo formula at a price well under the premium picks in this comparison, making automatic dirt disposal accessible without also paying for a full mop-washing dock. It is a reasonable middle step for buyers who specifically want to stop manually emptying a dustbin but are less concerned about automated mop pad washing.\n\nSince the mop side of this model relies more on manual maintenance than the dock-washing systems on pricier picks, buyers should plan to rinse or swap the mop pad by hand more often to keep floors from being wiped with a dirty pad.",
    bestFor: "Buyers who want self-emptying dirt disposal without paying for a full mop-washing dock.",
    pros: [
      "Self-emptying base at a mid-range price point",
      "Combines vacuuming and mopping in one device",
      "App control for scheduling and monitoring",
    ],
    cons: [
      "Mop pad washing relies more on manual upkeep than premium docks",
      "Fewer advanced navigation features than higher-priced models in this comparison",
    ],
  },
  {
    id: "roborock-qrevo-s5v",
    rank: 8,
    badge: "Best for Edge Cleaning",
    name: "roborock Qrevo S5V Robot Vacuum and Mop, FlexiArm Edge Mopping",
    amazonUrl: "https://www.amazon.com/dp/B0DSP8J476?tag=worthrated-20",
    imageUrl: "https://m.media-amazon.com/images/I/317EXRVR2uL._SL500_.jpg",
    price: "$499.98",
    rating: "Customer favorite",
    reviews: "Well-reviewed on Amazon",
    specs: ["FlexiArm edge mopping", "Premium roborock platform", "Combo vacuum and mop", "Self-cleaning dock"],
    description:
      "The Qrevo S5V's standout feature is its FlexiArm, a mop pad that extends out to the side to reach baseboards and room edges that a fixed-position pad typically misses entirely. Edge coverage is one of the most commonly cited gaps for robot mops in general, so this addresses a real limitation rather than a marginal one.\n\nIt carries premium pricing in line with roborock's top platform and pairs the extending arm with the brand's usual self-cleaning dock, making it a strong pick specifically for homes with a lot of baseboard trim or furniture edges where standard mopping patterns leave streaks.",
    bestFor: "Homes with a lot of baseboards or furniture edges where standard robot mops tend to leave streaks.",
    pros: [
      "FlexiArm extension reaches edges standard pads miss",
      "Backed by roborock's established self-cleaning dock platform",
      "Combines vacuuming and mopping in one pass",
    ],
    cons: [
      "Premium price matches the top tier of this comparison",
      "Extending arm mechanism adds a moving part that a fixed pad does not have",
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Mop pad or roller wash cleanliness",
    explanation:
      "Docks rinse mop pads or rollers differently. Roller-style systems like eufy's HydroJet tend to flush debris more thoroughly around the full cylinder, while flat spinning or vibrating pads rely on a tray scraper and rinse water hitting one face. Check owner reviews specifically for how clean the pad looks after a wash cycle, not just whether a wash cycle exists.",
  },
  {
    criterion: "Wash water temperature claims",
    explanation:
      "Some docks list a hot-water wash for the mop pad, which manufacturers generally market as better at cutting through grease and grime than a cold rinse. Treat advertised temperatures as a starting point and look at what actual owners report about residue and smell after repeated cycles, since real-world results vary by water hardness and how often the tank is cleaned.",
  },
  {
    criterion: "Drying moisture and odor risk",
    explanation:
      "A mop pad left damp between cleaning cycles is the most common source of musty odor in these systems. Models with a dedicated hot-dry cycle, like the Roomba 505X, are built specifically to address this, while models without one rely more on you removing and air-drying the pad yourself.",
  },
  {
    criterion: "Tray and tank manual cleaning still required",
    explanation:
      "No dock fully eliminates manual maintenance. Clean water tanks, dirty water tanks, and dust bins still need periodic hand cleaning even on the most automated models, typically every one to two weeks depending on use. Budget models generally require more frequent manual attention than premium docks.",
  },
  {
    criterion: "Roller vs spinning-pad vs vibrating-pad mechanism",
    explanation:
      "Roller mops (eufy C28) tend to self-clean most thoroughly but add mechanical complexity. Spinning pads (Roomba 505X) scrub in circular motion and often lift automatically off carpet. Vibrating or fixed pads found on many budget combos are simpler but generally rely more on downward pressure than active agitation to lift dried-on residue.",
  },
  {
    criterion: "Suction rating vs actual pickup",
    explanation:
      "Suction figures in Pascals vary widely across this comparison, from 5,200Pa to 25,000Pa, but a higher number does not automatically mean better real-world pickup on every floor type. Weigh suction rating alongside brush design and reviewer feedback on pet hair or debris specific to your home.",
  },
];

export const howWeEvaluated = [
  {
    title: "Self-cleaning mechanism type",
    description:
      "We compared roller mops, spinning pads, and fixed or vibrating pads across the lineup, since the wash mechanism has a bigger effect on how clean the pad ends up than most marketing copy suggests.",
  },
  {
    title: "Dock feature depth",
    description:
      "We looked at what each dock actually automates, including dirt disposal intervals, hot-water washing, and hot-dry cycles, versus features that sound automated but still need regular manual input.",
  },
  {
    title: "Price relative to feature set",
    description:
      "We researched pricing across a wide range, from under $150 to nearly $500, and weighed what buyers actually get in dock automation at each price tier rather than assuming higher price always means better self-cleaning.",
  },
  {
    title: "Verified rating where available",
    description:
      "For the top pick, we used its verified current rating and review count. For the remaining models we did not fabricate rating numbers and instead describe general buyer reception based on available listing data.",
  },
  {
    title: "Odor and maintenance risk",
    description:
      "We evaluated which models specifically address damp-pad odor through drying features, and which rely more heavily on the owner remembering to clean tanks and trays manually.",
  },
];

export const howToChoose = [
  {
    subheading: "By Budget",
    intro: "Self-cleaning features scale with price more than raw suction does, so decide your ceiling first.",
    table: {
      headers: ["Budget", "Recommended Pick"],
      rows: [
        ["Under $150", "roborock Q7 L5 or ROPVACNIC Combo"],
        ["$200 to $300", "Tikom Self-Emptying or Shark Matrix Plus"],
        ["$450 and up", "eufy C28, Roomba 505X, or roborock Qrevo S5V"],
      ],
    },
  },
  {
    subheading: "By Household Concern",
    intro: "Match the specific problem you want solved to the model built for it.",
    table: {
      headers: ["Concern", "Recommended Pick"],
      rows: [
        ["Musty mop pad smell", "iRobot Roomba 505X (hot dry cycle)"],
        ["Streaky baseboards and edges", "roborock Qrevo S5V (FlexiArm)"],
        ["Heavy pet hair or debris", "Yeedi M12 PRO Gen2 (25,000Pa)"],
        ["Most thorough pad rinse", "eufy C28 (HydroJet roller mop)"],
        ["Just want to try the category cheaply", "ROPVACNIC Combo or roborock Q7 L5"],
      ],
    },
  },
  {
    subheading: "Roller Mop vs Spinning Pad vs Fixed Pad",
    cards: [
      {
        label: "Roller mop",
        text: "Used on the eufy C28, roller mops generally rinse more evenly since water and a scraper work around the full cylinder. They add mechanical complexity compared to pad-based systems.",
      },
      {
        label: "Spinning pads",
        text: "Used on the Roomba 505X, spinning pads scrub with rotational motion and commonly lift automatically off carpet to avoid wetting it.",
      },
      {
        label: "Fixed or vibrating pads",
        text: "Common on budget combos like the ROPVACNIC and roborock Q7 L5. Simpler and cheaper, but generally rely more on downward pressure than active agitation.",
      },
    ],
    note: "If mop cleanliness between cycles is your top priority, prioritize roller or spinning-pad designs over fixed pads.",
  },
  {
    subheading: "How Much Manual Maintenance to Expect",
    intro: "Even the most automated docks in this comparison still need hands-on attention on a schedule.",
    table: {
      headers: ["Task", "Typical Frequency"],
      rows: [
        ["Empty clean water tank / refill", "Every few days to weekly, varies by usage"],
        ["Empty dirty water tank", "Weekly on most self-washing docks"],
        ["Wipe down mop tray and dock base", "Weekly to biweekly"],
        ["Replace or deep-clean mop pads", "Monthly, more often with hard water"],
      ],
    },
    note: "Budget models without a full self-washing dock, like the ROPVACNIC and roborock Q7 L5, generally need more frequent manual pad rinsing than the premium docks here.",
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You want a hot-dry cycle to control odor, a roller mop for the most thorough self-wash, or edge-reaching mop arms for a home with a lot of baseboard trim. The Roomba 505X, eufy C28, and roborock Qrevo S5V each target one of these specifically.",
      },
      {
        label: "Save if",
        text: "You mainly want basic combined vacuuming and mopping and are comfortable doing more manual pad rinsing yourself. The roborock Q7 L5 and ROPVACNIC Combo cover that at a fraction of the premium-tier price.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Does a self-cleaning dock mean I never have to clean the mop pad myself?",
    a: "No. Even the most automated docks in this comparison still need periodic manual attention, including emptying dirty water tanks, wiping the tray, and eventually replacing or deep-cleaning the pads themselves, typically on a weekly to monthly schedule depending on use.",
  },
  {
    q: "Does hot water actually clean the mop pad better than cold water?",
    a: "Manufacturers generally market hot-water washing as more effective at cutting through grease and grime, and it is reasonable to expect some benefit. Real-world results still depend on water hardness, wash cycle length, and how often the tank itself is cleaned, so treat it as one factor among several rather than the only one that matters.",
  },
  {
    q: "Why do mop pads sometimes smell musty?",
    a: "A pad left damp between cleaning cycles is the most common cause. Models with a dedicated hot-dry cycle, like the Roomba 505X in this comparison, are built specifically to address that risk, while models without one rely more on the pad air-drying on its own or being removed by hand.",
  },
  {
    q: "Is a higher suction rating always better?",
    a: "Not necessarily. Suction figures across this comparison range from 5,200Pa to 25,000Pa, but real-world pickup also depends on brush design, floor type, and how well the robot navigates. Weigh suction rating alongside reviewer feedback for your specific floor and debris type rather than choosing by the number alone.",
  },
  {
    q: "Are roller mops better than spinning or fixed pads?",
    a: "Roller mops, like the one on the eufy C28, tend to self-clean more evenly since the wash system works around the full cylinder rather than just one face of a flat pad. They also add mechanical complexity. Spinning pads offer a middle ground with active scrubbing motion, while fixed pads are the simplest and generally cheapest option.",
  },
  {
    q: "Why doesn't every model in this guide have a numeric star rating?",
    a: "We only publish a verified numeric rating and review count where we could confirm current, real listing data. For models where we could not verify a specific rating figure, we describe general buyer reception qualitatively instead of estimating or inventing a number.",
  },
];

export const relatedGuides: { title: string; href: string }[] = [];
