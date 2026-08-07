export const guideSlug = "best-craftsman-lawn-mowers";
export const guideTitle = "Best Craftsman Lawn Mowers";
export const metaTitle = "Best Craftsman Lawn Mowers (2026): Current Models and Buying Guide";
export const metaDescription = "Best Craftsman Lawn Mowers compared by mower class, handling, property fit, ownership cost, maintenance, and service support.";
export const mainKeyword = "lawn mowers craftsman";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-SLzFTztL._SL500_.jpg";
export const introParagraphs = [
  "The Craftsman range spans corded, V20 battery, gas, riding, and zero-turn mowers. This comparison focuses on two walk-behind options for smaller residential lawns: a mobile V20 battery model and a corded model that avoids charging and battery replacement.",
  "We compare mower format, yard fit, handling, power workflow, maintenance, storage, and long-term ownership needs so you can narrow the shortlist without paying for capacity you will not use.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "craftsman-cmcmw220p2", rank: 1, badge: "Best Overall", name: "CRAFTSMAN CMCMW220P2 V20 Push Mower",
    amazonUrl: "https://www.amazon.com/dp/B092GNZM5V?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41-SLzFTztL._SL500_.jpg", price: "$349.00",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["20-inch deck","Two 5Ah V20 batteries","Two chargers included","Up to 50-minute runtime"],
    description: "CRAFTSMAN CMCMW220P2 V20 Push Mower combines 20-inch deck, Two 5Ah V20 batteries, Two chargers included. That combination makes it a practical option for existing V20 owners and small to medium maintained lawns.\n\nTall or damp grass can shorten runtime, so larger lawns may need a recharge between sections. Compare its operating width, power setup, storage needs, and local service options with your property before buying.",
    bestFor: "existing V20 owners and small to medium maintained lawns",
    pros: ["20-inch deck","Two 5Ah V20 batteries","Two chargers included"],
    cons: ["Tall or damp grass can shorten runtime, so larger lawns may need a recharge between sections.","Check storage space, maintenance needs, and local service access before buying."],
  },
  {
    id: "craftsman-cmemw213", rank: 2, badge: "Best Alternative", name: "CRAFTSMAN CMEMW213 20-Inch Corded Mower",
    amazonUrl: "https://www.amazon.com/dp/B07Q69B31R?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41YHvJ4uy8L._SL500_.jpg", price: "$267.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["20-inch deck","13A corded motor","3-in-1 cutting modes","Six height settings"],
    description: "CRAFTSMAN CMEMW213 20-Inch Corded Mower combines 20-inch deck, 13A corded motor, 3-in-1 cutting modes. That combination makes it a practical option for small yards where an extension cord is manageable.\n\nThe current Amazon price is high for a corded mower and must be compared with local retail pricing. Compare its operating width, power setup, storage needs, and local service options with your property before buying.",
    bestFor: "small yards where an extension cord is manageable",
    pros: ["20-inch deck","13A corded motor","3-in-1 cutting modes"],
    cons: ["The current Amazon price is high for a corded mower and must be compared with local retail pricing.","Check storage space, maintenance needs, and local service access before buying."],
  }
];
export const buyingCriteria = [
  { criterion: "Exact SKU first", explanation: "Craftsman uses similar names across retailer and model-year variants. Record the full SKU before ordering blades, bags, wheels, batteries, or drive parts." },
  { criterion: "Current family", explanation: "Separate V20 battery, corded electric, gas walk-behind, compact rider, tractor, and zero-turn machines. They do not share the same service or ownership profile." },
  { criterion: "Included battery energy", explanation: "The V20 kit includes two 5Ah packs and chargers; verify operating configuration and total usable energy instead of comparing only the voltage label." },
  { criterion: "Cord or battery workflow", explanation: "Corded power avoids charging and pack replacement but adds cable routing. Battery power increases mobility but makes pack availability and charge time part of ownership." },
  { criterion: "Retailer and service", explanation: "Confirm who handles warranty and parts for the exact SKU. A Craftsman brand badge alone does not establish engine supplier or local service responsibility." }
];
export const howWeEvaluated = [
  { title: "Yard and mower fit", description: "We matched mower class, deck width, access, terrain, storage, and operator effort before comparing headline power or speed." },
  { title: "Handling and daily use", description: "Turning room, propulsion, control layout, bag handling, boundary work, and cleaning all affect how manageable a mower feels week after week." },
  { title: "Power workflow", description: "We considered fuel, cords, included battery capacity, charging, drive load, and the interruptions each power source can add to a mowing session." },
  { title: "Maintenance and ownership cost", description: "We included blades, belts, filters, tires, batteries, winter storage, delivery, service access, and likely replacement cycles." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Property Before the Brand", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Small or access-constrained lawn","CRAFTSMAN CMCMW220P2 V20 Push Mower"],["Medium maintained lawn","CRAFTSMAN CMEMW213 20-Inch Corded Mower"],["Large or specialized property","CRAFTSMAN CMEMW213 20-Inch Corded Mower"],["Steep or safety-sensitive terrain","Follow the exact manufacturer slope guidance before selecting any mower"]] } },
  { subheading: "Choose the Right Mower Format", cards: [ { label: "Walk-behind", text: "Best for smaller or detailed lawns where compact storage, easy trimming, and control around obstacles matter." }, { label: "Riding or zero-turn", text: "Best for larger properties when deck width, seating comfort, safe terrain handling, and transport space are already accounted for." }, { label: "Robot", text: "Best for frequent automated maintenance when the yard supports reliable navigation and the owner accepts setup, edge trimming, and seasonal care." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Power", "Fuel, battery watt-hours, extra packs, charger, and circuit needs"], ["Wear parts", "Blades, belts, filters, tires, and model-specific availability"], ["Logistics", "Delivered width, gate, shed, trailer, and service transport"], ["Support", "Residential/commercial warranty and nearest authorized service"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider starting steps, control reach, push or drive effort, turning room, noise, and how often the mower needs attention." }, { label: "After mowing", text: "Check bag removal, deck cleaning, charging or refueling, folding, storage footprint, and access to routine service parts." } ] },
];
export const faq = [
  { q: "What should I check before buying lawn mowers craftsman?", a: "Measure mowable area, narrowest access point, storage, terrain, and slope first. Then compare mower class, complete operating weight, power workflow, service access, and delivered ownership cost." },
  { q: "Can I trust voltage, horsepower, or deck width alone?", a: "No. Voltage is not battery capacity, horsepower does not establish cut quality or transmission durability, and deck width does not include every part that must pass through a gate or fit on a trailer." },
  { q: "Which mower type is easiest to live with?", a: "For a small flat lawn, a light battery or corded walk-behind is usually simplest. Self-propel helps on slopes, riding mowers reduce walking on large properties, and robots reduce routine mowing time but add setup and edge work." },
  { q: "When should I move from a push mower to self-propelled, riding, or robotic?", a: "Choose self-propel when slopes or mower weight make pushing tiring. Consider riding for large open lawns and long sessions. Consider a robot when the yard supports dependable navigation and frequent automated cuts matter more than a perfectly finished edge." },
  { q: "How should I compare long-term cost?", a: "Add batteries or fuel, chargers, blades, belts, filters, tires, winter storage, delivery, dealer transport, routine service, and expected replacement cycles to the purchase price." },
];
export const relatedGuides: { title: string; href: string }[] = [{"title":"Best Honda Lawn Mowers","href":"/guide/best-honda-lawn-mowers"},{"title":"Best Husqvarna Lawn Mowers","href":"/guide/best-husqvarna-lawn-mowers"},{"title":"Best John Deere Lawn Mowers","href":"/guide/best-john-deere-lawn-mowers"}];
