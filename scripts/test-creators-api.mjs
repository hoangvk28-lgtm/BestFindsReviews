import { readFileSync } from "fs";
import { resolve } from "path";

function loadDotEnvLocal() {
  try {
    const content = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx <= 0) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const raw = trimmed.slice(eqIdx + 1).trim();
      const val = raw.replace(/^["'](.*)["']$/, "$1");
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch {}
}
loadDotEnvLocal();

const { getItems } = await import("../lib/creators-api.ts");

const testAsins = ["B01BECQEA2", "B084NY9PTB", "B0DTK6135S"];
try {
  const items = await getItems(testAsins);
  console.log(JSON.stringify(items, null, 2));
} catch (e) {
  console.error("ERROR:", e.message);
}
