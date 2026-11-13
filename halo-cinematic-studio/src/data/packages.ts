export type PackageCategorySlug =
  | "weddings"
  | "engagement"
  | "puberty"
  | "events";

export interface PackageCategoryMeta {
  slug: PackageCategorySlug;
  label: string;
  shortLabel: string;
  eyebrow: string;
  description: string;
}

export interface StudioPackage {
  slug: string;
  category: PackageCategorySlug;
  name: string;
  tierLabel: string;
  priceDisplay: string;
  subline?: string;
  featured?: boolean;
  highlights: string[];
  notes?: string;
}

export const packageCategories: PackageCategoryMeta[] = [
  {
    slug: "weddings",
    label: "Wedding Packages",
    shortLabel: "Weddings",
    eyebrow: "Wedding Photography Package",
    description:
      "Full-day photography, dual-camera cinematography, 4K aerial drones, handcrafted fine-art albums, and wooden couple wall frames.",
  },
  {
    slug: "engagement",
    label: "Engagement (Registration)",
    shortLabel: "Engagement",
    eyebrow: "Engagement & Registration Packages",
    description:
      "Dedicated ceremony hours, edited soft copies, handcrafted albums, full event video, outdoor preshoots, and couple frames.",
  },
  {
    slug: "puberty",
    label: "Puberty Ceremony",
    shortLabel: "Puberty",
    eyebrow: "Traditional Milestone Ceremony",
    description:
      "Main coverage, outdoor sessions, 24\" × 12\" luxury presentation box albums, full event video, and stylized social media teasers.",
  },
  {
    slug: "events",
    label: "Birthday & Event Packages",
    shortLabel: "Birthdays & Events",
    eyebrow: "Birthday & Event Coverage",
    description:
      "Intimate milestone celebrations and birthdays with 24\" × 12\" box albums, unlimited edited soft copies, and outdoor coverage options.",
  },
];

export const studioPackages: StudioPackage[] = [
  // ── 1. WEDDING PACKAGES ─────────────────────────────────────────────────────
  {
    slug: "wedding-silver-basic",
    category: "weddings",
    name: "Silver — Basic",
    tierLabel: "Basic Package",
    priceDisplay: "LKR 197,500/=",
    subline: "Essential & Elegant Wedding Coverage",
    highlights: [
      "'WEDDING DAY' [FULL DAY] — Complete coverage of your traditional auspicious moments",
      "2 - PHOTOGRAPHER — Professional candid & traditional storytellers",
      "2 - VIDEOGRAPHER — High Definition cinematic videography coverage",
      "45 SHEET ALBUM — Premium High Quality Printed Album & Custom Box (2,500/= for each extra sheet)",
      "FULL WEDDING VIDEO — Full HD Master Video delivered in 32 GB Pendrive",
      "FREE BONUS: 1 COUPLE FRAME — 18\" × 12\" Elegant Wooden Wall Frame",
    ],
  },
  {
    slug: "wedding-silver-standard",
    category: "weddings",
    name: "Silver — Standard",
    tierLabel: "Standard Package",
    priceDisplay: "LKR 255,500/=",
    subline: "Wedding with Preshoot / Outdoor Session",
    highlights: [
      "'WEDDING DAY' [FULL DAY] — Complete full day wedding ritual & reception coverage",
      "2 - PHOTOGRAPHER — Main bridal photographer & creative candid shooter",
      "2 - VIDEOGRAPHER — Dual camera full HD cinematic wedding film",
      "PRESHOOT / OUTDOOR SHOOT [FULL DAY] — 1 Dedicated Photographer & 1 Videographer for Outdoor shoot",
      "55 SHEET ALBUM — High Quality Handcrafted Leatherette Album & Box (2,500/= for each extra sheet)",
      "FULL WEDDING VIDEO — Full HD Cinematic Edit in High Speed 64 GB Pendrive",
      "FREE BONUS: 1 WED COUPLE FRAME — 18\" × 12\" Premium Matte Finish Frame",
    ],
  },
  {
    slug: "wedding-royal-golden",
    category: "weddings",
    name: "Royal Golden",
    tierLabel: "Golden Package",
    featured: true,
    priceDisplay: "LKR 375,500/=",
    subline: "Wedding with Registration, Bride to be & Mehendi",
    highlights: [
      "'WEDDING DAY' [FULL DAY] — Coverage for Registration, Bride to be, Mehendi & Main Wedding",
      "2 - PHOTOGRAPHER — Master portraitist & candid moment specialist",
      "2 - VIDEOGRAPHER — Full HD cinematic feature film with creative teasers",
      "DRONE AERIAL COVERAGE — 4K Ultra HD aerial drone shots of venue & outdoor",
      "PRESHOOT / OUTDOOR SHOOT [FULL DAY] — 1 Photographer & 1 Videographer for full day preshoot",
      "65 SHEET ALBUM — Premium Quality Flush Mount Luxury Album & Gift Box (2,500/= for each extra sheet)",
      "FULL WEDDING VIDEO — Full HD Video in Customized 64 GB USB Pendrive",
      "FREE BONUS: 2 COUPLE FRAMES — Two 18\" × 12\" Premium Grand Wooden Frames",
    ],
  },
  {
    slug: "wedding-diamond-platinum",
    category: "weddings",
    name: "Diamond Platinum",
    tierLabel: "Platinum Package",
    priceDisplay: "LKR 565,500/=",
    subline: "Ultimate Wedding Experience with Registration, Bride to be & Mehendi",
    highlights: [
      "'WEDDING DAY' [FULL DAY COVERAGE] — All events: Registration, Bride to be, Mehendi & Grand Wedding",
      "3 - PHOTOGRAPHER — Triple master crew for comprehensive angle coverage",
      "2 - VIDEOGRAPHER — Ultra HD 4K Cinematic Wedding Feature Film",
      "DRONE AERIAL COVERAGE — 4K Cinematic aerial cinematography throughout",
      "PRESHOOT / OUTDOOR SHOOT (2 - FULL DAYS) — Destination shoot across other districts (1 Photographer, 1 Videographer & Drone)",
      "80 SHEET ALBUM + 30 SHEET MINI ALBUM — Main Album, Box & Family Mini Album (2,500/= for each extra sheet)",
      "FULL WEDDING VIDEO — Full HD Master Video in High Speed 64 GB USB Pendrive",
      "FREE BONUS: 2 COUPLE FRAMES — Two 18\" × 12\" Ultra Premium Luxury Frames",
    ],
  },

  // ── 2. ENGAGEMENT (REGISTRATION) PACKAGES ──────────────────────────────────
  {
    slug: "engagement-basic-01",
    category: "engagement",
    name: "Basic - 01",
    tierLabel: "Basic Package",
    priceDisplay: "Rs. 65,000",
    subline: "3-4 Hour Coverage",
    highlights: [
      "20 Sheets Album (40 pages)",
      "(2500/- for extra each sheet)",
      "Unlimited Edited Soft Copies",
      "3-4 Hour Coverage",
    ],
  },
  {
    slug: "engagement-basic-02",
    category: "engagement",
    name: "Basic - 02",
    tierLabel: "Basic Package",
    priceDisplay: "Rs. 85,000",
    subline: "4-5 Hour Coverage",
    highlights: [
      "30 Sheets Album (60 pages)",
      "(2500/- for extra each sheet)",
      "Unlimited Edited Soft Copies",
      "4-5 Hour Coverage",
    ],
  },
  {
    slug: "engagement-basic-03",
    category: "engagement",
    name: "Basic - 03",
    tierLabel: "Basic Package with Video",
    priceDisplay: "Rs. 125,000",
    subline: "4-5 Hour Coverage + Full Event Video",
    highlights: [
      "30 Sheets Album (60 pages)",
      "(2500/- for extra each sheet)",
      "Unlimited Edited Soft Copies",
      "4-5 Hour Coverage",
      "Full event edited Video (32GB Pendrive)",
    ],
  },
  {
    slug: "engagement-standard-01",
    category: "engagement",
    name: "Standard - 01",
    tierLabel: "Standard Package",
    priceDisplay: "Rs. 145,000",
    subline: "5-6 Hour Extended Coverage",
    highlights: [
      "45 Sheets Album (90 pages)",
      "(2500/- for extra each sheet)",
      "Unlimited Edited Soft Copies",
      "5-6 Hour Coverage",
    ],
  },
  {
    slug: "engagement-outstanding-01",
    category: "engagement",
    name: "Outstanding - 01",
    tierLabel: "Outstanding Package",
    priceDisplay: "Rs. 225,000",
    subline: "Event Day + Outdoor Preshoot (2-3 Hours)",
    highlights: [
      "55 Sheets Album (110 pages, 2500/- for extra each sheet)",
      "Unlimited Edited Soft Copies",
      "Event day 5-6 Hour Coverage",
      "Full event edited Video (64GB Pendrive)",
      "Outdoor / Preshoot 2-3 Hours",
      "12\" × 18\" Couple Frame",
    ],
  },
  {
    slug: "engagement-outstanding-02",
    category: "engagement",
    name: "Outstanding - 02",
    tierLabel: "Outstanding Package",
    priceDisplay: "Rs. 255,000",
    subline: "Event Day + Full Day Outdoor Preshoot",
    highlights: [
      "65 Sheets Album (130 pages, 2500/- for extra each sheet)",
      "Unlimited Edited Soft Copies",
      "Event day 5-6 Hour Coverage",
      "Full event edited Video (64GB Pendrive)",
      "Outdoor / Preshoot Full Day",
      "12\" × 18\" Couple Frame",
    ],
  },
  {
    slug: "engagement-outstanding-03",
    category: "engagement",
    name: "Outstanding - 03",
    tierLabel: "Outstanding Package",
    priceDisplay: "Rs. 315,000",
    subline: "Event Day + 2-Day Destination Preshoot",
    highlights: [
      "75 Sheets Album (150 pages, 2500/- for extra each sheet)",
      "Unlimited Edited Soft Copies",
      "Event day 5-6 Hour Coverage",
      "Full event edited Video (64GB Pendrive)",
      "Outdoor / Preshoot 2 Day (Out Districts)",
      "12\" × 18\" Couple Frame",
    ],
  },

  // ── 3. PUBERTY CEREMONY PACKAGES ───────────────────────────────────────────
  {
    slug: "puberty-basic",
    category: "puberty",
    name: "Basic Package",
    tierLabel: "Essential Photography & Cinematography",
    priceDisplay: "Rs. 80,000/-",
    subline: "1 - 2 Hours Main Coverage + Preshoot",
    highlights: [
      "20 Sheets Album (40 Pages) — 24\" × 12\" Premium Size Album with Custom Presentation Box",
      "Additional Sheets Support — Rs. 2,000/- for each extra sheet",
      "Unlimited Edited Soft Copies (High-resolution professionally retouched photographs)",
      "1 - 2 Hours Main Coverage (Dedicated event coverage capturing key moments)",
      "Pre-Shoot Coverage (1 - 2 Hours creative pre-wedding / portrait outdoor session)",
      "Social Media Post Video (2 - 3 Minutes stylized cinematic teaser video)",
      "Extra Time Flexibility — Rs. 1,000/- for each additional hour",
    ],
  },
  {
    slug: "puberty-standard",
    category: "puberty",
    name: "Standard Package",
    tierLabel: "Complete Event Coverage",
    priceDisplay: "Rs. 120,000/-",
    subline: "Complete Event Coverage + Full Video & Highlight",
    highlights: [
      "30 Sheets Album (60 Pages) — 24\" × 12\" Premium Size Album with Luxury Box",
      "Additional Sheets Support — Rs. 2,000/- for each extra sheet",
      "Unlimited Edited Soft Copies (Full resolution, color-graded imagery)",
      "1 - 2 Hours Coverage tailored to main rituals & highlights",
      "Full Event Video & 1-Min Highlight (Complete video coverage + cinematic fast-paced teaser)",
      "Digital Delivery in 32 GB USB (Full HD quality inside a custom branded USB drive)",
      "Extra Time Flexibility — Rs. 1,000/- for each additional hour",
    ],
  },
  {
    slug: "puberty-outstanding",
    category: "puberty",
    name: "Outstanding Package",
    tierLabel: "Ultimate Premium Cinema & Album Experience",
    priceDisplay: "Rs. 150,000/-",
    subline: "Event & Outdoor Coverage + Full Video & Highlight",
    highlights: [
      "40 Sheets Album (80 Pages) — 24\" × 12\" Grand Size Luxury Album with Custom Presentation Box",
      "Additional Sheets Support — Rs. 2,000/- for each extra sheet",
      "Unlimited Edited Soft Copies (Mastered & color-retouched high-resolution images)",
      "Event Coverage (1 - 2 Hours comprehensive story capture)",
      "Outdoor Coverage (1 - 2 Hours dedicated cinematic location shoot)",
      "Full Event & Outdoor Video + 1-Min Highlight (Complete film edit & high-energy teaser)",
      "Digital Delivery in 32 GB USB (Crystal clear Full HD on a 32 GB flash drive)",
    ],
  },

  // ── 4. BIRTHDAY & EVENT PACKAGES ───────────────────────────────────────────
  {
    slug: "birthday-basic",
    category: "events",
    name: "Basic Package",
    tierLabel: "Essential Package",
    priceDisplay: "Rs. 50,000",
    subline: "1-2 Hour Coverage",
    highlights: [
      "20 Sheets Album (40 pages) — 24\" × 12\" Size album with Box",
      "2,000/- for extra each sheet",
      "Unlimited Edited Soft Copies",
      "1-2 Hour Coverage",
    ],
  },
  {
    slug: "birthday-standard",
    category: "events",
    name: "Standard Package",
    tierLabel: "Popular Choice",
    priceDisplay: "Rs. 60,000",
    subline: "1-2 Hour Coverage",
    highlights: [
      "30 Sheets Album (60 pages) — 24\" × 12\" Size album with Box",
      "2,000/- for extra each sheet",
      "Unlimited Edited Soft Copies",
      "1-2 Hour Coverage",
    ],
  },
  {
    slug: "birthday-outstanding",
    category: "events",
    name: "Outstanding Package",
    tierLabel: "Premium Choice",
    priceDisplay: "Rs. 90,000",
    subline: "Event + Outdoor Coverage",
    highlights: [
      "40 Sheets Album (80 pages) — 24\" × 12\" Size album with Box",
      "2,000/- for extra each sheet",
      "Unlimited Edited Soft Copies",
      "1-2 Hour Coverage",
      "Outdoor 1-2 Hour Coverage",
    ],
  },
];

export function getPackagesByCategory(category: PackageCategorySlug): StudioPackage[] {
  return studioPackages.filter((p) => p.category === category);
}

export function getPackageBySlug(slug: string): StudioPackage | undefined {
  return studioPackages.find((p) => p.slug === slug);
}

export function getCategoryMeta(slug: PackageCategorySlug): PackageCategoryMeta {
  const meta = packageCategories.find((c) => c.slug === slug);
  if (!meta) {
    return packageCategories[0];
  }
  return meta;
}

export function isPackageCategorySlug(val: string): val is PackageCategorySlug {
  return packageCategories.some((c) => c.slug === val);
}

export const featuredPackages: StudioPackage[] = [
  studioPackages[2], // Royal Golden
  studioPackages[8], // Engagement Outstanding - 01
  studioPackages[12], // Puberty Standard
  studioPackages[15], // Birthday Standard
];
