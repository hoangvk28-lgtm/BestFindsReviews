export const guideSlug = "best-self-propelled-lawn-mowers";
export const guideTitle = "Best Self-Propelled Lawn Mowers";
export const metaTitle = "Best Self-Propelled Lawn Mowers (2026): Current Models Compared";
export const metaDescription = "Best Self-Propelled Lawn Mowers compared by drive type, low-speed control, turning effort, slope traction, and handle ergonomics.";
export const mainKeyword = "self-propelled lawn mowers";
export const categorySlug = "garden-yard";
export const lastUpdated = "2026-08-06";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg";
export const introParagraphs = [
  "A self-propelled mower is not just a push mower with a motor helping the wheels along. Drive systems differ by which wheels pull (front-wheel drive, rear-wheel drive, or all-wheel drive), how the speed is controlled at the handle, and how much of that drive power is left over once a slope or a full bag adds resistance. Two mowers with the same headline speed can feel completely different once the ground tilts or the grass gets thick.",
  "Most buyers move up from a push mower once pushing itself becomes the tiring part, not the cutting. That usually happens on lawns with slopes, on lawns over roughly a quarter acre, or with anyone who mows regularly and wants the drive to do the walking work. We compare drive type, control feel at low speed, turning effort, and how traction holds up as the bag fills, so you can match the mower to the property instead of the spec sheet.",
];
export interface GuideProduct { id: string; rank: number; badge: string; name: string; amazonUrl: string; imageUrl: string; price: string; ctaLabel?: string; shortCtaLabel?: string; specs: string[]; description: string; bestFor: string; pros: string[]; cons: string[]; }
export const products: GuideProduct[] = [
  {
    id: "greenworks-80v-21-sp", rank: 1, badge: "Best Overall", name: "Greenworks 80V 21-Inch Self-Propelled Mower",
    amazonUrl: "https://www.amazon.com/dp/B0CLSC6B2T?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/41XlO0UuWrL._SL500_.jpg", price: "$449.99",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "80V 4Ah battery", "320Wh nominal energy", "Self-propelled drive"],
    description: "The Greenworks 80V 21-Inch Self-Propelled Mower pairs a full 21-inch deck with an 80V 4Ah battery rated around 320Wh, which is enough nominal energy to run the drive system and the blade together without the drive immediately cutting into mowing time the way a smaller pack would. It currently holds a 4.5 rating across 586 reviews, a solid showing for a mower still relatively new to the lineup compared to older gas models.\n\nSelf-propel on a battery mower draws from the same pack that powers the blade, so pushing the drive speed higher on a slope or through thick grass will shorten the runtime you get per charge. It is still a push mower without an extension cord holding you back, and no oil changes or spark plugs to think about, which is the main appeal for someone moving up from a push electric model.",
    bestFor: "buyers moving up from a push mower who want battery convenience with real self-propel assistance",
    pros: ["21-inch deck covers a standard lawn efficiently", "320Wh nominal energy supports drive and blade together", "4.5 rating across 586 reviews"],
    cons: ["Drive speed use will reduce runtime versus blade-only operation", "Confirm current battery kit and charge time before buying"],
  },
  {
    id: "ezasin-170cc-gas-sp", rank: 2, badge: "Best Gas Option", name: "Ezasin 21-Inch Self-Propelled Gas Lawn Mower",
    amazonUrl: "https://www.amazon.com/dp/B0H7WZV1X5?tag=worthrated-20", imageUrl: "https://m.media-amazon.com/images/I/415GtVk9iTL._SL500_.jpg", price: "$299.98",
    ctaLabel: "Check price on Amazon", shortCtaLabel: "Check price",
    specs: ["21-inch deck", "170cc 4-cycle engine", "Self-propelled drive", "Gas powered"],
    description: "The Ezasin 21-Inch Self-Propelled Gas Lawn Mower runs a 170cc 4-cycle engine driving a 21-inch deck, with no battery pack limiting a mowing session and no charge time to plan around before starting. Gas self-propelled mowers in this class typically hold their drive traction better under a full bag or on a slope than a similarly priced battery mower, since engine output does not taper as a charge depletes.\n\nIt shows a rating and review count still building at this stage, so treat early feedback as a smaller sample than an established model with thousands of reviews. Gas mowers add their own tradeoffs versus battery: fuel storage, periodic oil changes, and starting effort are the cost of the steadier power delivery.",
    bestFor: "buyers who want gas-mower power delivery and are comfortable with fuel and basic engine maintenance",
    pros: ["170cc engine keeps drive power consistent through a mowing session", "No battery charge time between uses", "21-inch deck matches standard lawn widths"],
    cons: ["Review count is still small, treat early feedback cautiously", "Requires fuel storage, oil changes, and engine starting effort"],
  },
];
export const buyingCriteria = [
  { criterion: "Drive type: FWD, RWD, or AWD", explanation: "Front-wheel drive turns easiest around obstacles but can lose traction going uphill on wet grass. Rear-wheel drive holds traction better on slopes and when the bag is full and heavy. All-wheel drive costs more but keeps traction in both directions, useful on uneven or hilly lawns." },
  { criterion: "Low-speed control quality", explanation: "A drive system that surges or lags when you adjust speed makes trimming around beds and obstacles frustrating. Look for a speed control that responds smoothly at the slow end, not just at top speed on an open stretch." },
  { criterion: "Turning effort", explanation: "Self-propel adds resistance when you try to turn the mower, since the wheels keep pulling forward. Some mowers include a drive-disengage lever or single-wheel release for tight turns; without one, turning at the end of a row takes more arm effort." },
  { criterion: "Slope traction with bag full vs empty", explanation: "A full bag adds weight at the back of the mower and changes how the drive wheels grip on an incline. Traction that feels adequate with an empty bag can slip once the bag is near capacity, so account for the heaviest realistic condition, not the lightest." },
  { criterion: "Handle ergonomics", explanation: "Self-propelled mowers are walked behind for the full mowing session, so handle height adjustment, grip comfort, and control placement affect fatigue more than they do on a lightly used push mower." },
];
export const howWeEvaluated = [
  { title: "Drive system fit", description: "We compared drive type, power source, and how the drive behaves under real load such as a full bag or a slope, rather than accepting headline top speed alone." },
  { title: "Control and handling", description: "We looked at low-speed responsiveness, turning effort, and handle ergonomics, since these affect every pass across a lawn, not just the easy sections." },
  { title: "Power workflow", description: "We considered battery capacity and charge time versus fuel, starting effort, and maintenance, since self-propel draws down battery mowers faster than blade-only use." },
  { title: "Ownership signal", description: "We factored in current rating and review volume as a signal of real-world reliability, while noting that a newer model with fewer reviews is not necessarily lower quality, just less proven at scale." },
];
export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  { subheading: "Match the Property Before the Power Source", table: { headers: ["Buyer situation", "Recommended direction"], rows: [["Standard lawn, want battery convenience and no fuel", "Greenworks 80V 21-Inch Self-Propelled Mower"], ["Larger lawn or frequent mowing where steady power matters most", "Ezasin 21-Inch Self-Propelled Gas Lawn Mower"], ["Steep or safety-sensitive terrain", "Follow the exact manufacturer slope guidance before selecting any self-propelled mower"]] } },
  { subheading: "Battery vs Gas Self-Propel", cards: [ { label: "Battery self-propelled", text: "No fuel, no oil changes, and quieter operation, but drive speed use shortens runtime per charge and traction can taper as the battery depletes." }, { label: "Gas self-propelled", text: "Steadier power delivery through a full session and better traction under load, at the cost of fuel storage, periodic oil changes, and starting effort." } ] },
  { subheading: "Real Ownership Checklist", table: { headers: ["Cost or task", "Verify before buying"], rows: [["Power", "Battery watt-hours and charge time, or fuel type and oil change interval"], ["Drive controls", "Speed adjustment range and whether a drive-disengage feature exists for tight turns"], ["Wear parts", "Blades, drive belts or cables, and model-specific part availability"], ["Support", "Warranty terms and nearest authorized service for the drive system"]] } },
  { subheading: "Comfort and Workload Checklist", cards: [ { label: "During mowing", text: "Consider handle height adjustment, drive speed response, turning effort at row ends, and how traction holds as the bag fills." }, { label: "After mowing", text: "Check bag removal, deck cleaning, charging or refueling, and folding or storage footprint between uses." } ] },
];
export const faq = [
  { q: "What should I check before buying a self-propelled lawn mower?", a: "Confirm the drive type (front-wheel, rear-wheel, or all-wheel), how the speed control feels at low speed, and how the mower handles slopes with a full bag, not just an empty one. Then compare power source, deck width, and service access for your specific model." },
  { q: "Is rear-wheel drive always better than front-wheel drive?", a: "Not always. Rear-wheel drive generally holds traction better on slopes and with a full bag, but front-wheel drive is often easier to turn around obstacles on flat, detailed lawns. The right choice depends on your terrain, not a universal ranking." },
  { q: "Does self-propel reduce battery runtime on a cordless mower?", a: "Yes. Self-propel draws from the same battery that powers the blade, so using drive assistance, especially at higher speed or on a slope, will reduce the runtime you get per charge compared to blade-only operation." },
  { q: "When should I move up from a push mower to self-propelled?", a: "Consider self-propel once pushing itself becomes tiring, which is common on lawns with slopes, lawns over roughly a quarter acre, or for anyone mowing regularly rather than occasionally. A heavier mower deck also makes self-propel more worthwhile than it would be on a light push mower." },
  { q: "How much does gas versus battery affect ongoing maintenance?", a: "Gas self-propelled mowers need periodic oil changes, spark plug checks, and fuel storage. Battery self-propelled mowers avoid those tasks but need a charged battery on hand and eventual battery replacement as capacity fades with age." },
];
export const relatedGuides: { title: string; href: string }[] = [];
