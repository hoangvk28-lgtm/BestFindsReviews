const TAG = "worthrated-20";

export const amazonSearchLinks: Record<string, string> = {
  "easy-kitchen":  `https://www.amazon.com/s?k=easy+to+use+kitchen+appliances+for+seniors&tag=${TAG}`,
  "easy-cleaning": `https://www.amazon.com/s?k=lightweight+vacuum+for+seniors&tag=${TAG}`,
  "simple-tech":   `https://www.amazon.com/s?k=simple+easy+to+use+phone+for+seniors&tag=${TAG}`,
  "garden-yard":   `https://www.amazon.com/s?k=lightweight+garden+tools+for+seniors&tag=${TAG}`,
};

export const heroChipLinks = [
  { label: "Easy Kitchen",  href: amazonSearchLinks["easy-kitchen"] },
  { label: "Easy Cleaning", href: amazonSearchLinks["easy-cleaning"] },
  { label: "Simple Tech",   href: amazonSearchLinks["simple-tech"] },
  { label: "Garden & Yard", href: amazonSearchLinks["garden-yard"] },
];
