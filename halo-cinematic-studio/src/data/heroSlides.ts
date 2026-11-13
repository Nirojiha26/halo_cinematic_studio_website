export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
};

/**
 * 5 primary hero photos requested by client in exact order:
 * 1. Dila-3 (2).JPG -> Home page 1st photo
 * 2. 13.jpg -> Home page 2nd photo
 * 3. DSC05900.jpg -> Home page 3rd photo
 * 4. 17.jpg -> Home page 4th photo
 * 5. 11.jpg -> Home page 5th photo
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero/slide-01.jpg",
    alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Couple",
    title: "The feeling in every frame.",
    category: "Signature Ceremony",
  },
  {
    id: "slide-2",
    image: "/images/hero/slide-02.jpg",
    alt: "HALO Cinematic Studio - Newlywed Couple Portrait",
    title: "A day held in colour.",
    category: "Wedding Portraits",
  },
  {
    id: "slide-3",
    image: "/images/hero/slide-03.jpg",
    alt: "HALO Cinematic Studio - Auspicious Ceremony Rituals",
    title: "Where every detail becomes memory.",
    category: "Sacred Rituals",
  },
  {
    id: "slide-4",
    image: "/images/hero/slide-04.jpg",
    alt: "HALO Cinematic Studio - Wedding Celebration and Joy",
    title: "A moving portrait of your people.",
    category: "Cinematic Celebrations",
  },
  {
    id: "slide-5",
    image: "/images/hero/slide-05.jpg",
    alt: "HALO Cinematic Studio - Bride and Groom Heritage Portrait",
    title: "Stories to hold forever.",
    category: "Heritage Collection",
  },
];
