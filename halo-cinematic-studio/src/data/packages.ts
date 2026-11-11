export type PackageCategorySlug =
  | "weddings"
  | "puberty"
  | "engagement"
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
  flyerImage?: string;
}

export const packageCategories: PackageCategoryMeta[] = [
  {
    slug: "weddings",
    label: "Wedding Packages",
    shortLabel: "Weddings",
    eyebrow: "Bridal & Wedding Coverage",
    description:
      "Full-day photography, 4K drone cinematography, pre-shoots, handcrafted wedding albums, and heirloom couple wall frames.",
  },
  {
    slug: "puberty",
    label: "Puberty Ceremony",
    shortLabel: "Puberty",
    eyebrow: "Traditional Milestone Coverage",
    description:
      "Dedicated coverage for main function, cake cutting, shower ceremonies, outdoor sessions, synthetic albums, and full-event video.",
  },
  {
    slug: "engagement",
    label: "Engagement & Registration",
    shortLabel: "Engagement",
    eyebrow: "Registration & Couple Sessions",
    description:
      "Focused ceremony hours, edited soft copies, fine-art albums, and optional outdoor pre-shoots with full event video.",
  },
  {
    slug: "events",
    label: "Event & Portrait",
    shortLabel: "Events",
    eyebrow: "Album & Cinematography Editions",
    description:
      "Flexible photo-only or complete photo & cinema collections for intimate celebrations, birthdays, portraits, and special occasions.",
  },
];

export const studioPackages: StudioPackage[] = [
  // ── WEDDINGS ────────────────────────────────────────────────────────────────
  {
    slug: "wedding-silver-basic",
    category: "weddings",
    name: "Silver — Basic",
    tierLabel: "Basic Package",
    priceDisplay: "LKR 197,500",
    subline: "Wedding Day — Full Day",
    highlights: [
      "2 Photographers & 2 Videographers",
      "45 Sheet Album + Custom Box (LKR 2,500 per extra sheet)",
      "Full HD Master Wedding Video on 32GB Pendrive",
      "Free Bonus: 1 Couple Frame (18\" × 12\" Wooden Wall Frame)",
    ],
    flyerImage: "/images/flyers/wedding-silver-basic.jpg",
  },
  {
    slug: "wedding-silver-standard",
    category: "weddings",
    name: "Silver — Standard",
    tierLabel: "Standard Package",
    priceDisplay: "LKR 255,500",
    subline: "Wedding Day + Full Day Preshoot",
    highlights: [
      "2 Photographers & 2 Videographers on Wedding Day",
      "Full Day Preshoot / Outdoor Shoot (1 Photographer & 1 Videographer)",
      "55 Sheet Handcrafted Leatherette Album + Box (LKR 2,500 per extra sheet)",
      "Full HD Cinematic Edit on High-Speed 64GB Pendrive",
      "Free Bonus: 1 Couple Frame (18\" × 12\" Matte Finish)",
    ],
    flyerImage: "/images/flyers/wedding-silver-standard.jpg",
  },
  {
    slug: "wedding-royal-golden",
    category: "weddings",
    name: "Royal Golden",
    tierLabel: "Most Popular",
    priceDisplay: "LKR 375,500",
    subline: "Full Day Coverage + 4K Drone + Preshoot",
    featured: true,
    highlights: [
      "Covers Registration, Bride to Be, Mehendi & Main Wedding",
      "2 Photographers, 2 Videographers + 4K Ultra HD Drone Aerial Coverage",
      "Full Day Preshoot / Outdoor Shoot (1 Photographer & 1 Videographer)",
      "65 Sheet Flush Mount Luxury Album + Gift Box (LKR 2,500 per extra sheet)",
      "Full HD Video on Customized 64GB USB Pendrive",
      "Free Bonus: 2 Grand Wooden Couple Frames (18\" × 12\")",
    ],
    flyerImage: "/images/flyers/wedding-royal-golden.jpg",
  },
  {
    slug: "wedding-diamond-platinum",
    category: "weddings",
    name: "Diamond Platinum",
    tierLabel: "Platinum Package",
    priceDisplay: "LKR 565,500",
    subline: "Grand Multi-Day + 2-Day Out-District Preshoot",
    highlights: [
      "Full Coverage: Registration, Bride to Be, Mehendi & Grand Wedding",
      "3 Photographers, 2 Videographers + 4K Cinematic Drone Aerial Coverage",
      "2 Full Days Out-District Destination Preshoot (Photo, Video & Drone)",
      "80 Sheet Main Album + Box + 30 Sheet Family Mini Album (LKR 2,500 extra sheet)",
      "Full HD Master Video on High-Speed 64GB USB Pendrive",
      "Free Bonus: 2 Ultra Premium Luxury Couple Frames (18\" × 12\")",
    ],
    flyerImage: "/images/flyers/wedding-diamond-platinum.jpg",
  },

  // ── PUBERTY CEREMONY ────────────────────────────────────────────────────────
  {
    slug: "puberty-basic-01",
    category: "puberty",
    name: "Puberty Basic 01",
    tierLabel: "Essential Photo Only",
    priceDisplay: "LKR 100,000",
    subline: "Function & Cake Cutting (6:00 AM – 8:00 PM)",
    highlights: [
      "30 Sheets Synthetic Album (LKR 2,500 per extra sheet)",
      "Unlimited Edited Softcopy",
      "01 Portrait Frame (12\" × 18\")",
      "One Full Day Coverage (6:00 AM – 8:00 PM)",
      "Album & Photography Only (Without Video)",
    ],
  },
  {
    slug: "puberty-basic-02",
    category: "puberty",
    name: "Puberty Basic 02",
    tierLabel: "Complete Single Day",
    priceDisplay: "LKR 140,000",
    subline: "Photo + Full Event Video (6:00 AM – 8:00 PM)",
    highlights: [
      "30 Sheets Synthetic Album (LKR 2,500 per extra sheet)",
      "Unlimited Edited Softcopy",
      "Full Event Video on 32GB Pendrive",
      "01 Portrait Frame (12\" × 18\")",
      "One Full Day Coverage for Function & Cake Cutting",
    ],
  },
  {
    slug: "puberty-basic-03",
    category: "puberty",
    name: "Puberty Basic 03",
    tierLabel: "Plus Shower Ceremony",
    priceDisplay: "LKR 160,000",
    subline: "Main Day + Shower Session (2–3 hrs another day)",
    highlights: [
      "35 Sheets Synthetic Album (LKR 2,500 per extra sheet)",
      "Unlimited Edited Softcopy",
      "Full Event Video on 32GB Pendrive",
      "01 Portrait Frame (12\" × 18\")",
      "One Full Day (6:00 AM – 8:00 PM) + 2–3 hr Shower Ceremony",
    ],
  },
  {
    slug: "puberty-standard-01",
    category: "puberty",
    name: "Puberty Standard 01",
    tierLabel: "Previous Day + Outdoor",
    priceDisplay: "LKR 180,000",
    subline: "Main Day + Previous Day Shower & 1/2 Day Outdoor",
    highlights: [
      "40 Sheets Synthetic Album (LKR 2,500 per extra sheet)",
      "Unlimited Edited Softcopy",
      "Full Event Video on 32GB Pendrive",
      "01 Portrait Frame (12\" × 18\")",
      "Main Function (6:00 AM – 8:00 PM) + Previous Day Shower & Half-Day Outdoor",
    ],
  },
  {
    slug: "puberty-standard-02",
    category: "puberty",
    name: "Puberty Standard 02",
    tierLabel: "Full Day Outdoor Experience",
    priceDisplay: "LKR 200,000",
    subline: "Main Day + Shower + Full-Day Outdoor",
    featured: true,
    highlights: [
      "45 Sheets Synthetic Album (LKR 2,500 per extra sheet)",
      "Unlimited Edited Softcopy",
      "Full Event Video on 64GB High-Capacity Pendrive",
      "01 Portrait Frame (12\" × 18\")",
      "Full Main Function + Shower + Full-Day Outdoor Session",
    ],
  },
  {
    slug: "puberty-standard-03",
    category: "puberty",
    name: "Puberty Standard 03",
    tierLabel: "Grand Celebration + Preshoot",
    priceDisplay: "LKR 235,000",
    subline: "1/2 Day Preshoot + Full Outdoor & Shower + Main Day",
    highlights: [
      "50 Sheets Synthetic Album (LKR 2,500 per extra sheet)",
      "Unlimited Edited Softcopy",
      "Full Event Video on 64GB Pendrive",
      "01 Portrait Frame (12\" × 18\") + 01 Family Frame (12\" × 18\")",
      "Preshoot (1/2 Day) + Shower & Outdoor (Full Day) + Main Function",
    ],
  },
  {
    slug: "puberty-royal-ultimate",
    category: "puberty",
    name: "Standard 04 — Royal Ultimate",
    tierLabel: "Destination Special",
    priceDisplay: "LKR 355,000",
    subline: "2-Day Out-District Destination + Shower + Main Day",
    highlights: [
      "60 Sheets Synthetic Album (LKR 2,500 per extra sheet)",
      "Unlimited Edited Softcopy",
      "Full Event Video on 64GB High-Speed Pendrive",
      "01 Portrait Frame (12\" × 18\") + 01 Family Frame (12\" × 18\")",
      "2-Day Out-District Destination Shoot + Previous Day Shower + Main Day",
    ],
  },

  // ── ENGAGEMENT / REGISTRATION ───────────────────────────────────────────────
  {
    slug: "engagement-basic-01",
    category: "engagement",
    name: "Engagement Basic 01",
    tierLabel: "Basic 01",
    priceDisplay: "LKR 65,000",
    subline: "3–4 Hour Coverage",
    highlights: [
      "20 Sheets Album / 40 Pages (LKR 2,500 per extra sheet)",
      "Unlimited Edited Soft Copies",
      "3–4 Hours Main Event Coverage",
    ],
    flyerImage: "/images/flyers/engagement-basic-01.jpg",
  },
  {
    slug: "engagement-basic-02",
    category: "engagement",
    name: "Engagement Basic 02",
    tierLabel: "Basic 02",
    priceDisplay: "LKR 85,000",
    subline: "4–5 Hour Coverage",
    highlights: [
      "30 Sheets Album / 60 Pages (LKR 2,500 per extra sheet)",
      "Unlimited Edited Soft Copies",
      "4–5 Hours Main Event Coverage",
    ],
    flyerImage: "/images/flyers/engagement-basic-02.jpg",
  },
  {
    slug: "engagement-basic-03",
    category: "engagement",
    name: "Engagement Basic 03",
    tierLabel: "Basic 03",
    priceDisplay: "LKR 125,000",
    subline: "4–5 Hour Coverage + Full Event Video",
    highlights: [
      "30 Sheets Album / 60 Pages (LKR 2,500 per extra sheet)",
      "Unlimited Edited Soft Copies",
      "4–5 Hours Main Event Coverage",
      "Full Event Edited Video (32GB Pendrive)",
    ],
    flyerImage: "/images/flyers/engagement-basic-03.jpg",
  },
  {
    slug: "engagement-standard-01",
    category: "engagement",
    name: "Engagement Standard 01",
    tierLabel: "Standard 01",
    priceDisplay: "LKR 145,000",
    subline: "5–6 Hour Extended Coverage",
    highlights: [
      "45 Sheets Album / 90 Pages (LKR 2,500 per extra sheet)",
      "Unlimited Edited Soft Copies",
      "5–6 Hours Main Event Coverage",
    ],
    flyerImage: "/images/flyers/engagement-standard-01.jpg",
  },
  {
    slug: "engagement-outstanding-01",
    category: "engagement",
    name: "Engagement Outstanding 01",
    tierLabel: "Outstanding 01",
    priceDisplay: "LKR 225,000",
    subline: "Event Day + Outdoor / Preshoot + Video + Frame",
    featured: true,
    highlights: [
      "55 Sheets Album / 110 Pages (LKR 2,500 per extra sheet)",
      "Unlimited Edited Soft Copies",
      "5–6 Hours Event Coverage + 2–3 Hours Outdoor / Preshoot",
      "Full Event Edited Video (64GB Pendrive)",
      "12\" × 18\" Couple Frame Included",
    ],
    flyerImage: "/images/flyers/engagement-outstanding-01.jpg",
  },
  {
    slug: "engagement-outstanding-02",
    category: "engagement",
    name: "Engagement Outstanding 02",
    tierLabel: "Outstanding 02",
    priceDisplay: "LKR 255,000",
    subline: "Event Day + Full-Day Outdoor / Preshoot",
    highlights: [
      "65 Sheets Album / 130 Pages (LKR 2,500 per extra sheet)",
      "Unlimited Edited Soft Copies",
      "5–6 Hours Event Coverage + Full-Day Outdoor / Preshoot",
      "Full Event Edited Video (64GB Pendrive)",
      "12\" × 18\" Couple Frame Included",
    ],
    flyerImage: "/images/flyers/engagement-outstanding-02.jpg",
  },
  {
    slug: "engagement-outstanding-03",
    category: "engagement",
    name: "Engagement Outstanding 03",
    tierLabel: "Outstanding 03",
    priceDisplay: "LKR 315,000",
    subline: "Event Day + 2-Day Out-District Preshoot",
    highlights: [
      "75 Sheets Album / 150 Pages (LKR 2,500 per extra sheet)",
      "Unlimited Edited Soft Copies",
      "5–6 Hours Event Coverage + 2-Day Out-District Preshoot",
      "Full Event Edited Video (64GB Pendrive)",
      "12\" × 18\" Couple Frame Included",
    ],
    flyerImage: "/images/flyers/engagement-outstanding-03.jpg",
  },

  // ── EVENTS & PORTRAITS (Photo-Only + Photo & Cinema) ────────────────────────
  {
    slug: "event-basic-photo",
    category: "events",
    name: "Event Basic (Photo Only)",
    tierLabel: "Photo Only",
    priceDisplay: "LKR 50,000",
    subline: "1–2 Hour Coverage",
    highlights: [
      "20 Sheets Album / 40 Pages (LKR 2,000 per extra sheet)",
      "24\" × 12\" Album with Custom Presentation Box",
      "Unlimited Edited Soft Copies",
      "1–2 Hours Main Coverage",
    ],
    flyerImage: "/images/flyers/event-basic.jpg",
  },
  {
    slug: "event-standard-photo",
    category: "events",
    name: "Event Standard (Photo Only)",
    tierLabel: "Photo Only",
    priceDisplay: "LKR 60,000",
    subline: "1–2 Hour Coverage",
    highlights: [
      "30 Sheets Album / 60 Pages (LKR 2,000 per extra sheet)",
      "24\" × 12\" Album with Presentation Box",
      "Unlimited Edited Soft Copies",
      "1–2 Hours Main Coverage",
    ],
    flyerImage: "/images/flyers/event-standard.jpg",
  },
  {
    slug: "event-outstanding-photo",
    category: "events",
    name: "Event Outstanding (Photo Only)",
    tierLabel: "Photo Only",
    priceDisplay: "LKR 90,000",
    subline: "Main Coverage + Outdoor Session",
    highlights: [
      "40 Sheets Album / 80 Pages (LKR 2,000 per extra sheet)",
      "24\" × 12\" Album with Presentation Box",
      "Unlimited Edited Soft Copies",
      "1–2 Hours Main Coverage + 1–2 Hours Outdoor Coverage",
    ],
    flyerImage: "/images/flyers/event-outstanding.jpg",
  },
  {
    slug: "event-basic-cinema",
    category: "events",
    name: "Event Basic (Photo & Cinema)",
    tierLabel: "Photo & Cinema",
    priceDisplay: "LKR 80,000",
    subline: "Main + Pre-Shoot + Social Teaser",
    highlights: [
      "20 Sheets Album / 40 Pages (24\" × 12\") with Custom Presentation Box",
      "Extra Sheets LKR 2,000/- • Extra Time LKR 1,000/hr",
      "Unlimited Edited Soft Copies",
      "1–2 Hours Main Coverage + 1–2 Hours Pre-Shoot Coverage",
      "Social Media Post Video (2–3 Min Teaser)",
    ],
  },
  {
    slug: "event-standard-cinema",
    category: "events",
    name: "Event Standard (Photo & Cinema)",
    tierLabel: "Photo & Cinema",
    priceDisplay: "LKR 120,000",
    subline: "Album + Full Event Video + 1-Min Highlight",
    featured: true,
    highlights: [
      "30 Sheets Album / 60 Pages (24\" × 12\") with Luxury Box",
      "Extra Sheets LKR 2,000/- • Extra Time LKR 1,000/hr",
      "Unlimited Edited Soft Copies",
      "Full Event Video & 1-Min Highlight",
      "Digital Delivery in Custom Branded 32GB USB",
    ],
  },
  {
    slug: "event-outstanding-cinema",
    category: "events",
    name: "Event Outstanding (Photo & Cinema)",
    tierLabel: "Photo & Cinema",
    priceDisplay: "LKR 150,000",
    subline: "Event + Outdoor Video + Luxury Album",
    highlights: [
      "40 Sheets Album / 80 Pages (24\" × 12\") Grand Luxury Album with Box",
      "Extra Sheets LKR 2,000/-",
      "Unlimited Edited Soft Copies",
      "1–2 Hours Event Coverage + 1–2 Hours Outdoor Coverage",
      "Full Event & Outdoor Video + 1-Min Highlight on 32GB USB",
    ],
  },
];

export const featuredPackages: StudioPackage[] = [
  studioPackages.find((p) => p.slug === "wedding-royal-golden")!,
  studioPackages.find((p) => p.slug === "puberty-standard-02")!,
  studioPackages.find((p) => p.slug === "engagement-outstanding-01")!,
  studioPackages.find((p) => p.slug === "event-standard-cinema")!,
];

export function isPackageCategorySlug(
  value: string,
): value is PackageCategorySlug {
  return packageCategories.some((c) => c.slug === value);
}

export function getPackageBySlug(slug: string): StudioPackage | undefined {
  return studioPackages.find((p) => p.slug === slug);
}

export function getPackagesByCategory(
  category: PackageCategorySlug,
): StudioPackage[] {
  return studioPackages.filter((p) => p.category === category);
}

export function getCategoryMeta(
  category: PackageCategorySlug,
): PackageCategoryMeta {
  return (
    packageCategories.find((c) => c.slug === category) ?? packageCategories[0]
  );
}

