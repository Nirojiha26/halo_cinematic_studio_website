export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
  tabLabel: string;
};

/**
 * 6 Hero slides showcasing HALO Studio master wedding and preshoot photography:
 * 1. slide-01.jpg (Dila-3 (2).JPG) - Signature Traditional Couple with Garland
 * 2. slide-02.jpg (13.jpg) - Newlywed Bridal Portrait
 * 3. slide-03.jpg (DSC05900.jpg) - Auspicious Temple Ceremony
 * 4. slide-04.jpg (17.jpg) - Candid Celebration Joy
 * 5. slide-05.jpg (11.jpg) - Heritage Wedding Vows
 * 6. cover-10.jpg (10.jpg (1).jpeg) - Sunset Beach Intimacy
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero/slide-01.jpg",
    alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Couple",
    title: "The feeling in every frame.",
    category: "Signature Ceremony",
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
    tabLabel: "Joy",
  },
  {
    id: "slide-5",
    image: "/images/hero/slide-05.jpg",
    alt: "HALO Cinematic Studio - Bride and Groom Heritage Portrait",
    title: "Stories to hold forever.",
    category: "Heritage Vows",
    tabLabel: "Heritage",
  },
  {
    id: "slide-cover",
    image: "/images/hero/cover-10.jpg",
    alt: "HALO Cinematic Studio - Signature Ocean Sunset Preshoot Cover",
    title: "Real Moments, Carefully Made.",
    category: "Sunset Preshoot",
    tabLabel: "Sunset",
  },
];
