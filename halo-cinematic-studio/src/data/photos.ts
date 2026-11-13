import type { PackageCategorySlug } from "./packages";

export type PhotoCollection =
  | "All"
  | "Wedding Portraits"
  | "Engagements"
  | "Portraits"
  | "Details & Film"
  | "Wedding Packages"
  | "Engagement Packages"
  | "Event Packages";

export const photoCollections: PhotoCollection[] = [
  "All",
  "Wedding Portraits",
  "Engagements",
  "Portraits",
  "Details & Film",
  "Wedding Packages",
  "Engagement Packages",
  "Event Packages",
];

export interface StudioPhoto {
  id: string;
  src: string;
  title: string;
  category: Exclude<PhotoCollection, "All">;
  subtitle: string;
  alt: string;
  packageCategory: PackageCategorySlug;
  packageSlug?: string;
  featuredOnHome?: boolean;
}

export const weddingPortraits: StudioPhoto[] = [
  {
    id: "portrait-wedding-01",
    src: "/images/photos/wedding-couple-01.jpg",
    title: "Traditional Ceremony Portrait",
    category: "Wedding Portraits",
    subtitle: "Wedding Day Editorial Framing",
    alt: "Bride and groom wedding ceremony portrait captured by HALO Cinematic Studio",
    packageCategory: "weddings",
    packageSlug: "wedding-silver-basic",
    featuredOnHome: true,
  },
  {
    id: "portrait-wedding-02",
    src: "/images/photos/wedding-couple-02.jpg",
    title: "Bridal & Groom Signature Frame",
    category: "Wedding Portraits",
    subtitle: "Natural Light & Candid Poise",
    alt: "Newlywed couple portrait in traditional attire by HALO Cinematic Studio",
    packageCategory: "weddings",
    packageSlug: "wedding-silver-standard",
    featuredOnHome: true,
  },
  {
    id: "portrait-wedding-03",
    src: "/images/photos/wedding-couple-03.jpg",
    title: "Ceremony Florals & Details",
    category: "Wedding Portraits",
    subtitle: "Full Day Coverage & Preshoot",
    alt: "Couple with floral garlands during traditional wedding celebration",
    packageCategory: "weddings",
    packageSlug: "wedding-royal-golden",
    featuredOnHome: true,
  },
  {
    id: "portrait-wedding-04",
    src: "/images/photos/wedding-couple-04.jpg",
    title: "Royal Garland Exchange",
    category: "Wedding Portraits",
    subtitle: "Mandapam Storytelling",
    alt: "Bride and groom exchanging smiles during the ceremony by HALO Cinematic Studio",
    packageCategory: "weddings",
    packageSlug: "wedding-diamond-platinum",
    featuredOnHome: true,
  },
];

export const packageBrochures: StudioPhoto[] = [
  {
    id: "flyer-wedding-silver-basic",
    src: "/images/flyers/wedding-silver-basic.jpg",
    title: "Wedding Silver — Basic",
    category: "Wedding Packages",
    subtitle: "LKR 197,500 • Full Day",
    alt: "HALO Cinematic Studio Wedding Silver Basic package brochure",
    packageCategory: "weddings",
    packageSlug: "wedding-silver-basic",
  },
  {
    id: "flyer-wedding-silver-standard",
    src: "/images/flyers/wedding-silver-standard.jpg",
    title: "Wedding Silver — Standard",
    category: "Wedding Packages",
    subtitle: "LKR 255,500 • Preshoot + Wedding Day",
    alt: "HALO Cinematic Studio Wedding Silver Standard package brochure",
    packageCategory: "weddings",
    packageSlug: "wedding-silver-standard",
  },
  {
    id: "flyer-wedding-royal-golden",
    src: "/images/flyers/wedding-royal-golden.jpg",
    title: "Royal Golden Wedding",
    category: "Wedding Packages",
    subtitle: "LKR 375,500 • 4K Drone + Preshoot",
    alt: "HALO Cinematic Studio Royal Golden wedding package brochure",
    packageCategory: "weddings",
    packageSlug: "wedding-royal-golden",
  },
  {
    id: "flyer-wedding-diamond-platinum",
    src: "/images/flyers/wedding-diamond-platinum.jpg",
    title: "Diamond Platinum Wedding",
    category: "Wedding Packages",
    subtitle: "LKR 565,500 • Multi-Day Destination",
    alt: "HALO Cinematic Studio Diamond Platinum wedding package brochure",
    packageCategory: "weddings",
    packageSlug: "wedding-diamond-platinum",
  },
  {
    id: "flyer-engagement-basic-01",
    src: "/images/flyers/engagement-basic-01.jpg",
    title: "Engagement Basic 01",
    category: "Engagement Packages",
    subtitle: "LKR 65,000 • 20 Sheets Album",
    alt: "HALO Cinematic Studio Engagement Basic 01 package sheet",
    packageCategory: "engagement",
    packageSlug: "engagement-basic-01",
  },
  {
    id: "flyer-engagement-basic-02",
    src: "/images/flyers/engagement-basic-02.jpg",
    title: "Engagement Basic 02",
    category: "Engagement Packages",
    subtitle: "LKR 85,000 • 30 Sheets Album",
    alt: "HALO Cinematic Studio Engagement Basic 02 package sheet",
    packageCategory: "engagement",
    packageSlug: "engagement-basic-02",
  },
  {
    id: "flyer-engagement-basic-03",
    src: "/images/flyers/engagement-basic-03.jpg",
    title: "Engagement Basic 03",
    category: "Engagement Packages",
    subtitle: "LKR 125,000 • Album + Full Video",
    alt: "HALO Cinematic Studio Engagement Basic 03 package sheet",
    packageCategory: "engagement",
    packageSlug: "engagement-basic-03",
  },
  {
    id: "flyer-engagement-standard-01",
    src: "/images/flyers/engagement-standard-01.jpg",
    title: "Engagement Standard 01",
    category: "Engagement Packages",
    subtitle: "LKR 145,000 • 45 Sheets Album",
    alt: "HALO Cinematic Studio Engagement Standard 01 package sheet",
    packageCategory: "engagement",
    packageSlug: "engagement-standard-01",
  },
  {
    id: "flyer-engagement-outstanding-01",
    src: "/images/flyers/engagement-outstanding-01.jpg",
    title: "Engagement Outstanding 01",
    category: "Engagement Packages",
    subtitle: "LKR 225,000 • Outdoor + Video + Frame",
    alt: "HALO Cinematic Studio Engagement Outstanding 01 package sheet",
    packageCategory: "engagement",
    packageSlug: "engagement-outstanding-01",
  },
  {
    id: "flyer-engagement-outstanding-02",
    src: "/images/flyers/engagement-outstanding-02.jpg",
    title: "Engagement Outstanding 02",
    category: "Engagement Packages",
    subtitle: "LKR 255,000 • Full-Day Preshoot",
    alt: "HALO Cinematic Studio Engagement Outstanding 02 package sheet",
    packageCategory: "engagement",
    packageSlug: "engagement-outstanding-02",
  },
  {
    id: "flyer-engagement-outstanding-03",
    src: "/images/flyers/engagement-outstanding-03.jpg",
    title: "Engagement Outstanding 03",
    category: "Engagement Packages",
    subtitle: "LKR 315,000 • 2-Day Out-District Preshoot",
    alt: "HALO Cinematic Studio Engagement Outstanding 03 package sheet",
    packageCategory: "engagement",
    packageSlug: "engagement-outstanding-03",
  },
  {
    id: "flyer-event-basic",
    src: "/images/flyers/event-basic.jpg",
    title: "Event Basic (Photo Only)",
    category: "Event Packages",
    subtitle: "LKR 50,000 • 20 Sheets Album",
    alt: "HALO Cinematic Studio Event Basic package sheet",
    packageCategory: "events",
    packageSlug: "event-basic-photo",
  },
  {
    id: "flyer-event-standard",
    src: "/images/flyers/event-standard.jpg",
    title: "Event Standard (Photo Only)",
    category: "Event Packages",
    subtitle: "LKR 60,000 • 30 Sheets Album",
    alt: "HALO Cinematic Studio Event Standard package sheet",
    packageCategory: "events",
    packageSlug: "event-standard-photo",
  },
  {
    id: "flyer-event-outstanding",
    src: "/images/flyers/event-outstanding.jpg",
    title: "Event Outstanding (Photo Only)",
    category: "Event Packages",
    subtitle: "LKR 90,000 • Main + Outdoor Coverage",
    alt: "HALO Cinematic Studio Event Outstanding package sheet",
    packageCategory: "events",
    packageSlug: "event-outstanding-photo",
  },
];

export const studioPhotos: StudioPhoto[] = [
  { id: "editorial-ceremony", src: "/images/editorial/ceremony.jpg", title: "A Celebration of Connection", category: "Wedding Portraits", subtitle: "Wedding ceremony", alt: "Bride and groom exchanging rose garlands during traditional wedding ceremony", packageCategory: "weddings" },
  { id: "editorial-bridal", src: "/images/editorial/bridal.jpg", title: "The Bridal Portrait", category: "Portraits", subtitle: "Tradition in every detail", alt: "Traditional bride in silk saree wearing temple gold jewellery and jasmine", packageCategory: "weddings" },
  { id: "editorial-engagement", src: "/images/editorial/engagement.jpg", title: "A Quiet Beginning", category: "Engagements", subtitle: "Connection in golden light", alt: "Couple holding hands in warm natural light captured by HALO Cinematic Studio", packageCategory: "engagement" },
  { id: "editorial-details", src: "/images/editorial/details.jpg", title: "Sacred Traditions & Details", category: "Details & Film", subtitle: "Ceremony rituals", alt: "Auspicious wedding ceremony flower garlands and traditional rituals", packageCategory: "weddings" },
  { id: "editorial-filming", src: "/images/editorial/filming.jpg", title: "Cinematic Celebration", category: "Details & Film", subtitle: "The craft of cinematography", alt: "Candid emotional moments and joyous celebration captured by HALO Cinematic Studio", packageCategory: "events" },
  ...weddingPortraits,
  ...packageBrochures,
];

