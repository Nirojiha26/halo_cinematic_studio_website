import type { LucideIcon } from "lucide-react";
import { Camera, Clapperboard, Film, Frame, Music, Scissors } from "lucide-react";

export type Service = {
  slug: string;
  /** Category label shown next to the number, e.g. "WEDDINGS". */
  category: string;
  title: string;
  /** Short description — verbatim from the original website. */
  description: string;
  icon: LucideIcon;
};

/**
 * The six services offered on the original HALO CINEMATIC STUDIO website.
 * Copy is preserved verbatim; do not add services that the studio does not offer.
 */
export const services: Service[] = [
  {
    slug: "wedding-photography",
    category: "Weddings",
    title: "Wedding Photography",
    description: "Beautifully captured moments, details and emotions to keep for a lifetime.",
    icon: Camera,
  },
  {
    slug: "wedding-cinematography",
    category: "Weddings",
    title: "Wedding Cinematography",
    description: "Cinematic wedding films that bring your special day back to life.",
    icon: Clapperboard,
  },
  {
    slug: "documentary-filming",
    category: "Film",
    title: "Documentary Filming",
    description: "Authentic visual stories, events and real-life moments told with purpose.",
    icon: Film,
  },
  {
    slug: "music-videos",
    category: "Music",
    title: "Album Songs & Music Videos",
    description: "Creative concepts, filming and visuals for your original music.",
    icon: Music,
  },
  {
    slug: "video-editing",
    category: "Post-Production",
    title: "Professional Video Editing",
    description: "Careful editing, colour and finishing for a polished final production.",
    icon: Scissors,
  },
  {
    slug: "photo-frames",
    category: "Print",
    title: "Custom Photo Frames",
    description: "Personalised photo frames designed to showcase your favourite memories.",
    icon: Frame,
  },
];

export const serviceTitles = services.map((s) => s.title);

