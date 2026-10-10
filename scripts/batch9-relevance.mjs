const STOP = new Set(["best", "for", "with", "and", "the", "top", "rated", "portable", "small", "home", "cheap", "good"]);
export const coreTokens = (seed) => seed.toLowerCase().split(/\W+/).filter((t) => t.length > 2 && !STOP.has(t)).map((t) => t.replace(/s$/, ""));
export const isRelevant = (title, seed) => { const t = (title || "").toLowerCase(); const c = coreTokens(seed); return c.filter((x) => t.includes(x)).length >= Math.min(2, c.length); };
