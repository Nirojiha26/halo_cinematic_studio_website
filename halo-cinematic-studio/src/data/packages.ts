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
  flyerImage?: string;
  notes?: string;
}

export const packageCategories: PackageCategoryMeta[] = [
  {
    slug: "weddings",
    label: "Wedding Packages",
    shortLabel: "Weddings",
    eyebrow: "Bridal & Wedding Cinematography",
    description:
      "Complete wedding day coverage, 4K aerial cinematography, pre-shoots, handcrafted luxury albums, and framed couple keepsakes.",
  },
  {
    slug: "engagement",
    label: "Engagement (Registration)",
    shortLabel: "Engagement",
    eyebrow: "Registration & Couple Sessions",
    description:
      "Focused ceremony coverage, fine-art albums, full event video, outdoor preshoots, and custom wooden couple frames.",
  },
  {
    slug: "puberty",
    label: "Puberty Ceremony",
    shortLabel: "Puberty",
    eyebrow: "Traditional Milestone Ceremony",
    description:
      "Traditional ceremony coverage, 24\" × 12\" presentation box albums, full event video, and stylized social media teasers.",
  },
  {
    slug: "events",
    label: "Birthday & Events",
    shortLabel: "Birthdays",
    eyebrow: "Birthday & Milestone Coverage",
    description:
      "Intimate celebrations and birthdays with 24\" × 12\" box albums, unlimited edited soft copies, and outdoor coverage options.",
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
    subline: "Essential & Elegant Wedding Day Coverage",
    flyerImage: "/images/flyers/wedding-silver-basic.jpg",
    highlights: [
      "Wedding Day Full Day traditional and auspicious ritual coverage",
      "2 Photographers (Professional candid and traditional storytellers)",
      "2 Videographers (High Definition cinematic videography coverage)",
      "45 Sheet Printed Album with Custom Box (2,500/= per extra sheet)",
      "Full Wedding Video (Full HD Master Video delivered on 32 GB USB)",
      "Free Bonus: 1 Couple Frame (18\" × 12\" Elegant Wooden Wall Frame)",
    ],
  },
  {
    slug: "wedding-silver-standard",
    category: "weddings",
    name: "Silver — Standard",
    tierLabel: "Standard Package",
    priceDisplay: "LKR 255,500/=",
    subline: "Wedding Day + Full Day Outdoor Preshoot",
    flyerImage: "/images/flyers/wedding-silver-standard.jpg",
    highlights: [
      "Wedding Day Full Day ritual and reception coverage",
      "Full Day Outdoor / Preshoot with 1 Photographer and 1 Videographer",
      "2 Photographers (Main bridal photographer & creative candid shooter)",
      "2 Videographers (Dual camera full HD cinematic wedding film)",
      "55 Sheet Handcrafted Leatherette Album & Box (2,500/= per extra sheet)",
      "Full Wedding Video (Full HD Cinematic Edit on High-Speed 64 GB USB)",
      "Free Bonus: 1 Couple Frame (18\" × 12\" Premium Matte Finish Frame)",
    ],
  },
  {
    slug: "wedding-royal-golden",
    category: "weddings",
    name: "Royal Golden",
    tierLabel: "Golden Package",
    featured: true,
    priceDisplay: "LKR 375,500/=",
    subline: "Wedding with Registration, Bride to Be & Mehendi",
    flyerImage: "/images/flyers/wedding-royal-golden.jpg",
    highlights: [
      "Full Day Coverage: Registration, Bride to Be, Mehendi & Main Wedding",
      "Full Day Outdoor / Preshoot (Dedicated Photographer & Videographer)",
      "2 Photographers (Master portraitist & candid moment specialist)",
      "2 Videographers (Full HD cinematic feature film with creative teasers)",
      "4K Ultra HD Drone Aerial Cinematography of venue and outdoor",
      "65 Sheet Flush Mount Luxury Album & Gift Box (2,500/= per extra sheet)",
      "Full HD Video in Customized 64 GB USB Pendrive",
      "Free Bonus: 2 Couple Frames (Two 18\" × 12\" Premium Grand Wooden Frames)",
    ],
  },
  {
    slug: "wedding-diamond-platinum",
    category: "weddings",
    name: "Diamond Platinum",
    tierLabel: "Platinum Package",
    priceDisplay: "LKR 565,500/=",
    subline: "Ultimate Experience with 2 Full Days Destination Preshoot",
    flyerImage: "/images/flyers/wedding-diamond-platinum.jpg",
    highlights: [
      "Complete Full Day Coverage: Registration, Bride to Be, Mehendi & Grand Wedding",
      "2 Full Days Destination Preshoot across other districts (Crew + Drone)",
      "3 Master Photographers for comprehensive multi-angle coverage",
      "2 Videographers (Ultra HD 4K Cinematic Wedding Feature Film)",
      "4K Drone Aerial Cinematography throughout all events",
      "80 Sheet Main Album + 30 Sheet Family Mini Album with Luxury Box",
      "Full HD Master Video on High-Speed 64 GB USB Pendrive",
      "Free Bonus: 2 Couple Frames (Two 18\" × 12\" Ultra Premium Luxury Frames)",
    ],
  },

  // ── 2. ENGAGEMENT (REGISTRATION) PACKAGES ──────────────────────────────────
  {
    slug: "engagement-basic-01",
    category: "engagement",
    name: "Basic - 01",
    tierLabel: "Essential Choice",
    priceDisplay: "Rs. 65,000",
    subline: "3-4 Hour Registration Coverage",
    flyerImage: "/images/flyers/engagement-basic-01.jpg",
    highlights: [
      "20 Sheets Album (40 Pages with custom box)",
      "3 - 4 Hours dedicated ceremony coverage",
      "Unlimited edited high-resolution soft copies",
      "2,500/- for each additional extra sheet",
    ],
  },
  {
    slug: "engagement-basic-02",
    category: "engagement",
    name: "Basic - 02",
    tierLabel: "Extended Coverage",
    priceDisplay: "Rs. 85,000",
    subline: "4-5 Hour Registration Coverage",
    flyerImage: "/images/flyers/engagement-basic-02.jpg",
    highlights: [
      "30 Sheets Album (60 Pages with custom box)",
      "4 - 5 Hours comprehensive event coverage",
      "Unlimited edited high-resolution soft copies",
      "2,500/- for each additional extra sheet",
    ],
  },
  {
    slug: "engagement-basic-03",
    category: "engagement",
    name: "Basic - 03",
    tierLabel: "Photo & Video",
    priceDisplay: "Rs. 125,000",
    subline: "4-5 Hour Coverage with Edited Video",
    flyerImage: "/images/flyers/engagement-basic-03.jpg",
    highlights: [
      "30 Sheets Album (60 Pages with presentation box)",
      "4 - 5 Hours photo and video coverage",
      "Full Event Edited Video on 32 GB USB Pendrive",
      "Unlimited edited high-resolution soft copies",
      "2,500/- for each additional extra sheet",
    ],
  },
  {
    slug: "engagement-standard-01",
    category: "engagement",
    name: "Standard - 01",
    tierLabel: "Standard Choice",
    priceDisplay: "Rs. 145,000",
    subline: "5-6 Hour Extended Event Coverage",
    flyerImage: "/images/flyers/engagement-standard-01.jpg",
    highlights: [
      "45 Sheets Album (90 Pages with custom presentation box)",
      "5 - 6 Hours comprehensive ceremony coverage",
      "Unlimited edited high-resolution soft copies",
      "2,500/- for each additional extra sheet",
    ],
  },
  {
    slug: "engagement-outstanding-01",
    category: "engagement",
    name: "Outstanding - 01",
    tierLabel: "Outstanding Package",
    featured: true,
    priceDisplay: "Rs. 225,000",
    subline: "Event Day + 2-3 Hours Outdoor Preshoot",
    flyerImage: "/images/flyers/engagement-outstanding-01.jpg",
    highlights: [
      "55 Sheets Album (110 Pages luxury album and box)",
      "5 - 6 Hours Event Day photo and video coverage",
      "2 - 3 Hours Outdoor / Preshoot session",
      "Full Event Edited Video on 64 GB USB Pendrive",
      "Free 12\" × 18\" Couple Frame + Unlimited Soft Copies",
      "2,500/- for each additional extra sheet",
    ],
  },
  {
    slug: "engagement-outstanding-02",
    category: "engagement",
    name: "Outstanding - 02",
    tierLabel: "Outstanding Package",
    priceDisplay: "Rs. 255,000",
    subline: "Event Day + Full Day Outdoor Preshoot",
    flyerImage: "/images/flyers/engagement-outstanding-02.jpg",
    highlights: [
      "65 Sheets Album (130 Pages luxury presentation album)",
      "5 - 6 Hours Event Day photo and video coverage",
      "Full Day Outdoor / Preshoot session",
      "Full Event Edited Video on 64 GB USB Pendrive",
      "Free 12\" × 18\" Couple Frame + Unlimited Soft Copies",
      "2,500/- for each additional extra sheet",
    ],
  },
  {
    slug: "engagement-outstanding-03",
    category: "engagement",
    name: "Outstanding - 03",
    tierLabel: "Destination Edition",
    priceDisplay: "Rs. 315,000",
    subline: "Event Day + 2-Day Destination Preshoot",
    flyerImage: "/images/flyers/engagement-outstanding-03.jpg",
    highlights: [
      "75 Sheets Album (150 Pages luxury grand album)",
      "5 - 6 Hours Event Day photo and video coverage",
      "2 Days Outdoor / Preshoot across out-districts",
      "Full Event Edited Video on 64 GB USB Pendrive",
      "Free 12\" × 18\" Couple Frame + Unlimited Soft Copies",
      "2,500/- for each additional extra sheet",
    ],
  },

  // ── 3. PUBERTY CEREMONY PACKAGES ───────────────────────────────────────────
  {
    slug: "puberty-basic",
    category: "puberty",
    name: "Basic Package",
    tierLabel: "Essential Ceremony",
    priceDisplay: "Rs. 80,000/-",
    subline: "1-2 Hours Main Coverage + Preshoot",
    flyerImage: "/images/flyers/puberty-flyer.jpg",
    highlights: [
      "20 Sheets Album (40 Pages) — 24\" × 12\" Size with Custom Box",
      "1 - 2 Hours main event ceremony coverage",
      "1 - 2 Hours pre-shoot / portrait outdoor session",
      "Social Media Teaser Video (2-3 minutes stylized edit)",
      "Unlimited edited high-resolution soft copies",
      "Rs. 2,000/- for each extra sheet • Extra hour: Rs. 1,000/-",
    ],
  },
  {
    slug: "puberty-standard",
    category: "puberty",
    name: "Standard Package",
    tierLabel: "Complete Coverage",
    featured: true,
    priceDisplay: "Rs. 120,000/-",
    subline: "Event Coverage + Full Video & Highlight",
    flyerImage: "/images/flyers/puberty-flyer.jpg",
    highlights: [
      "30 Sheets Album (60 Pages) — 24\" × 12\" Size with Luxury Box",
      "1 - 2 Hours professional ritual and highlight coverage",
      "Full Event Video and 1-Minute Cinematic Highlight",
      "Digital Delivery on Custom Branded 32 GB USB Drive",
      "Unlimited edited soft copies (color-graded imagery)",
      "Rs. 2,000/- for each extra sheet • Extra hour: Rs. 1,000/-",
    ],
  },
  {
    slug: "puberty-outstanding",
    category: "puberty",
    name: "Outstanding Package",
    tierLabel: "Premium Cinema Experience",
    priceDisplay: "Rs. 150,000/-",
    subline: "Event & Outdoor + Full Video & Highlight",
    flyerImage: "/images/flyers/puberty-flyer.jpg",
    highlights: [
      "40 Sheets Album (80 Pages) — 24\" × 12\" Grand Luxury Album with Box",
      "1 - 2 Hours comprehensive event documentation",
      "1 - 2 Hours dedicated outdoor cinematic location shoot",
      "Full Event and Outdoor Video + 1-Minute Highlight Teaser",
      "Delivered in crystal-clear Full HD on 32 GB Flash Drive",
      "Unlimited mastered & color-retouched high-resolution images",
    ],
  },

  // ── 4. BIRTHDAY & EVENT PACKAGES ───────────────────────────────────────────
  {
    slug: "birthday-basic",
    category: "events",
    name: "Basic Package",
    tierLabel: "Essential Milestone",
    priceDisplay: "Rs. 50,000",
    subline: "1-2 Hours Event Coverage",
    flyerImage: "/images/flyers/event-basic.jpg",
    highlights: [
      "20 Sheets Album (40 Pages) — 24\" × 12\" Size album with Box",
      "1 - 2 Hours dedicated milestone coverage",
      "Unlimited edited high-resolution soft copies",
      "Rs. 2,000/- for each additional extra sheet",
    ],
  },
  {
    slug: "birthday-standard",
    category: "events",
    name: "Standard Package",
    tierLabel: "Popular Choice",
    featured: true,
    priceDisplay: "Rs. 60,000",
    subline: "1-2 Hours Event Coverage",
    flyerImage: "/images/flyers/event-standard.jpg",
    highlights: [
      "30 Sheets Album (60 Pages) — 24\" × 12\" Size album with Box",
      "1 - 2 Hours dedicated celebration coverage",
      "Unlimited edited high-resolution soft copies",
      "Rs. 2,000/- for each additional extra sheet",
    ],
  },
  {
    slug: "birthday-outstanding",
    category: "events",
    name: "Outstanding Package",
    tierLabel: "Premium Choice",
    priceDisplay: "Rs. 90,000",
    subline: "Event Coverage + Outdoor Session",
    flyerImage: "/images/flyers/event-outstanding.jpg",
    highlights: [
      "40 Sheets Album (80 Pages) — 24\" × 12\" Size album with Box",
      "1 - 2 Hours event coverage + 1-2 Hours outdoor coverage",
      "Unlimited edited high-resolution soft copies",
      "Rs. 2,000/- for each additional extra sheet",
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
