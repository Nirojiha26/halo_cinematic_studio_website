/**
 * Central site configuration.
 * All values are taken from the original index.html. Empty values are
 * intentionally left blank (not invented) — fill them in when available and
 * the UI will render them automatically.
 */

export type NavItem = { label: string; href: string };

export type SocialLink = { label: string; href: string };

export const siteConfig = {
  name: "HALO CINEMATIC STUDIO",
  shortName: "HALO",
  tagline: "Capture every precious moment",
  motto: "Every moment deserves to be remembered.",
  description:
    "HALO CINEMATIC STUDIO — Wedding photography and cinematic films crafted with feeling in Nelliady, Sri Lanka.",
  /** Set this to the production domain once deployed (used for metadata). */
  url: "https://halocinematicstudio.com",
  themeColor: "#ffffff",

  logo: {
    src: "/logos/logo.png",
    width: 1536,
    height: 1024,
    alt: "HALO Cinematic Studio logo",
  },

  contact: {
    /** Display format, as shown on the original site. */
    phoneDisplay: "077 532 1978",
    /** International format for tel: links. */
    phoneIntl: "+94775321978",
    /** WhatsApp number without "+" (used by wa.me). */
    whatsapp: "94775321978",
    /** Studio contact email shown on official package brochures. */
    email: "halostudio18@gmail.com",
    location: "Nelliady, Sri Lanka",
    bookingStatus: "Now open for enquiries",
    servicesSummary: "Wedding • Puberty • Engagement • Events",
  },

  socials: [
    { label: "Facebook", href: "https://www.facebook.com/share/18G3kQ7vff/" },
    { label: "Instagram", href: "https://www.instagram.com/halo_cinematic_studio?psln=MWZ5cnQ4eGNmcGowaQ==" },
    { label: "TikTok", href: "https://www.tiktok.com/@tharsan_offcl?_r=1&_t=ZS-9BOC640Df3U" },
    { label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb9T6yaAYlUMkyyujH1P" },
  ] as SocialLink[],
  tiktok: "https://www.tiktok.com/@tharsan_offcl?_r=1&_t=ZS-9BOC640Df3U",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb9T6yaAYlUMkyyujH1P",

  /** Place a licensed MP3 at public/audio/background.mp3 to enable music. */
  backgroundMusic: "/audio/background.mp3",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Packages", href: "/packages" },
    { label: "Photos", href: "/photos" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  cta: { label: "Book Now", href: "/contact#booking" } satisfies NavItem,
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

