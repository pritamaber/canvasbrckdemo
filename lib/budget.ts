import { cin, edi, site } from "@/lib/content";

/* ————————————————————————————————————————————————————————————
   Budget estimator — modelled on the Floorsy (floorsy.in) pricing
   ladder: BHK cards with image sliders and honest "starting from"
   figures (₹4.99L / ₹7.99L / ₹9.99L / ₹11.99L), extended into an
   interactive estimate: package tier + carpet area + scope.
—————————————————————————————————————————————————————————— */

export type BhkId = "1bhk" | "2bhk" | "3bhk" | "4bhk";
export type PackageId = "essential" | "premium" | "signature";

export type BhkOption = {
  id: BhkId;
  label: string;
  startingLakh: number;
  /** carpet area defaults & slider bounds, sq ft */
  defaultArea: number;
  minArea: number;
  maxArea: number;
  /** relative cost scale vs a 2 BHK */
  scale: number;
  /** slideshow imagery — editorial uses the Floorsy BHK sliders */
  imagesE: string[];
  /** slideshow imagery — cinematic uses KariGhars project stills */
  imagesC: string[];
};

export const bhkOptions: BhkOption[] = [
  {
    id: "1bhk",
    label: "1 BHK",
    startingLakh: 4.99,
    defaultArea: 500,
    minArea: 350,
    maxArea: 750,
    scale: 0.5,
    imagesE: [1, 2, 3, 4, 5].map((n) => edi(`bhk/1-${n}.jpg`)),
    imagesC: [cin("living-tall-1.jpg"), cin("living-square.jpg"), cin("bedroom-wood.jpg")],
  },
  {
    id: "2bhk",
    label: "2 BHK",
    startingLakh: 7.99,
    defaultArea: 780,
    minArea: 550,
    maxArea: 1100,
    scale: 0.79,
    imagesE: [1, 2, 3, 4, 5].map((n) => edi(`bhk/2-${n}.jpg`)),
    imagesC: [cin("bedroom-wood.jpg"), cin("living-tall-2.jpg"), cin("kitchen-film.jpg")],
  },
  {
    id: "3bhk",
    label: "3 BHK",
    startingLakh: 9.99,
    defaultArea: 1150,
    minArea: 850,
    maxArea: 1650,
    scale: 0.99,
    imagesE: [1, 2, 3, 4, 5].map((n) => edi(`bhk/3-${n}.jpg`)),
    imagesC: [cin("living-gold-1.jpg"), cin("living-gold-3.jpg"), cin("foyer-mirror.jpg")],
  },
  {
    id: "4bhk",
    label: "4 BHK & Villas",
    startingLakh: 11.99,
    defaultArea: 1850,
    minArea: 1300,
    maxArea: 3200,
    scale: 1.19,
    imagesE: [1, 2, 3, 4, 5].map((n) => edi(`bhk/4-${n}.jpg`)),
    imagesC: [cin("atrium.jpg"), cin("balcony-pool.jpg"), cin("living-dark.jpg")],
  },
];

export type PackageOption = {
  id: PackageId;
  label: string;
  note: string;
  mult: number;
};

export const packageOptions: PackageOption[] = [
  {
    id: "essential",
    label: "Essential",
    note: "Smart laminates, branded hardware, honest basics",
    mult: 1,
  },
  {
    id: "premium",
    label: "Premium",
    note: "Veneers, quartz counters, layered cove lighting",
    mult: 1.35,
  },
  {
    id: "signature",
    label: "Signature",
    note: "PU & veneer, Italian marble, brass jali detailing",
    mult: 1.8,
  },
];

export type ScopeItem = {
  id: string;
  label: string;
  lakh: number; // 2 BHK · Essential baseline
  default: boolean;
};

export const scopeItems: ScopeItem[] = [
  { id: "kitchen", label: "Modular kitchen", lakh: 2.8, default: true },
  { id: "wardrobes", label: "Wardrobes & storage", lakh: 2.2, default: true },
  { id: "living", label: "Living & dining", lakh: 1.6, default: true },
  { id: "bedrooms", label: "Bedrooms & beds", lakh: 1.5, default: true },
  { id: "ceiling", label: "False ceiling & lighting", lakh: 1.1, default: true },
  { id: "painting", label: "Painting & finishes", lakh: 0.9, default: true },
  { id: "pooja", label: "Pooja / mandir unit", lakh: 0.7, default: false },
];

export const defaultScope = () =>
  new Set(scopeItems.filter((s) => s.default).map((s) => s.id));

export type Estimate = {
  lowLakh: number;
  highLakh: number;
  /** per-line contribution at the midpoint, for breakdown bars */
  lines: { id: string; label: string; lakh: number }[];
};

export function calcEstimate(
  bhk: BhkOption,
  pkg: PackageOption,
  area: number,
  scope: Set<string>
): Estimate {
  // dampened area influence around the BHK default
  const areaFine = 1 + 0.45 * (area / bhk.defaultArea - 1);
  const factor = bhk.scale * pkg.mult * areaFine;

  const lines = scopeItems
    .filter((s) => scope.has(s.id))
    .map((s) => ({
      id: s.id,
      label: s.label,
      lakh: s.lakh * factor,
    }));

  const mid = lines.reduce((acc, l) => acc + l.lakh, 0);
  return { lowLakh: mid * 0.9, highLakh: mid * 1.12, lines };
}

export const formatLakh = (lakh: number) =>
  lakh >= 100
    ? `₹${(lakh / 100).toFixed(2)} Cr`
    : `₹${lakh.toFixed(lakh < 10 ? 2 : 1)}L`;

/** ladder prices keep their Floorsy-style paisa precision: ₹9.99L */
export const formatStartingLakh = (lakh: number) => `₹${lakh.toFixed(2)}L`;

export function whatsappQuoteHref(
  bhk: BhkOption,
  pkg: PackageOption,
  area: number,
  scope: Set<string>,
  est: Estimate
) {
  const scopeList = scopeItems
    .filter((s) => scope.has(s.id))
    .map((s) => s.label)
    .join(", ");
  const msg =
    `Hello Canvas & Brick! I used the budget estimator and would like an exact quote.\n` +
    `Home: ${bhk.label} (~${area} sq ft)\n` +
    `Package: ${pkg.label}\n` +
    `Scope: ${scopeList}\n` +
    `Indicative estimate shown: ${formatLakh(est.lowLakh)} – ${formatLakh(est.highLakh)}`;
  const phone = site.whatsapp.match(/wa\.me\/(\d+)/)?.[1] ?? "919830000000";
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
