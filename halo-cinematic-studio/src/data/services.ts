import type { LucideIcon } from "lucide-react";
import { Cake, Flower2, Gift, Heart } from "lucide-react";

export type Service = {
  slug: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights?: string[];
};

/**
 * Core craft disciplines featured in the "What We Craft" section on the About page.
 */
export const services: Service[] = [
  {
    slug: "puberty-photography-cinematography",
    category: "Puberty Ceremony",
    title: "Puberty Photography & Cinematography",
    description: "Tradition, grace and family joy captured in timeless frames and cinematic films.",
    icon: Flower2,
    highlights: ["Ceremony Filming", "Fine-Art Portraits", "Heirloom Albums"],
  },
  {
    slug: "birthday-photography-cinematography",
    category: "Birthdays",
    title: "Birthday Photography & Cinematography",
    description: "Spontaneous smiles, vibrant celebrations and cherished milestone moments.",
    icon: Cake,
    highlights: ["Highlight Reel", "Candid Coverage", "Digital Gallery"],
  },
  {
    slug: "registration-engagement-photography",
    category: "Engagement & Registration",
    title: "Registration or Engagement Photography & Cinematography",
    description: "An intimate beginning captured with warmth, genuine emotion and elegance.",
    icon: Heart,
    highlights: ["Cinematic Teaser", "Couple Portraiture", "Fine-Art Prints"],
  },
  {
    slug: "3d-customised-gifts",
    category: "Custom Gifts & Keepsakes",
    title: "3D Customised Gifts",
    description: "Personalised 3D crystals, bespoke keepsakes and handcrafted frames that preserve your memories.",
    icon: Gift,
    highlights: ["3D Crystal Engraving", "Bespoke Keepsakes", "Gift Packaging"],
  },
];

export const serviceTitles = services.map((s) => s.title);
