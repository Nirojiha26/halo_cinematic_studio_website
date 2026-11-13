export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
  tabLabel: string;
};

/**
 * Hero slides:
 * 1. Cover photo: /images/hero/cover-10.jpg (from 10.jpg (1).jpeg requested by client)
 * 2-6. The 5 primary wedding/studio photos requested by client in exact order:
 *    - Dila-3 (2).JPG -> slide-01.jpg
 *    - 13.jpg -> slide-02.jpg
 *    - DSC05900.jpg -> slide-03.jpg
 *    - 17.jpg -> slide-04.jpg
 *    - 11.jpg -> slide-05.jpg
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-cover",
    image: "/images/hero/cover-10.jpg",
    alt: "HALO Cinematic Studio - Signature Ocean Sunset Preshoot Cover",
    title: "Real Moments, Carefully Made.",
    category: "Signature Cover",
    tabLabel: "Cover",
  },
  {
    id: "slide-1",
    image: "/images/hero/slide-01.jpg",
    alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Couple",
    title: "The feeling in every frame.",
    category: "Traditional Ceremony",
    tabLabel: "Ceremony",
  },
  {
    id: "slide-2",
    image: "/images/hero/slide-02.jpg",
    alt: "HALO Cinematic Studio - Newlywed Couple Portrait",
    title: "A day held in colour.",
    category: "Wedding Portraits",
    tabLabel: "Portraits",
  },
  {
    id: "slide-3",
    image: "/images/hero/slide-03.jpg",
    alt: "HALO Cinematic Studio - Auspicious Ceremony Rituals",
    title: "Where every detail becomes memory.",
    category: "Sacred Rituals",
    tabLabel: "Rituals",
  },
  {
    id: "slide-4",
    image: "/images/hero/slide-04.jpg",
    alt: "HALO Cinematic Studio - Wedding Celebration and Joy",
    title: "A moving portrait of your people.",
    category: "Celebrations",
    tabLabel: "Celebration",
  },
  {
    id: "slide-5",
    image: "/images/hero/slide-05.jpg",
    alt: "HALO Cinematic Studio - Bride and Groom Heritage Portrait",
    title: "Stories to hold forever.",
    category: "Heritage Vows",
    tabLabel: "Heritage",
  },
];
