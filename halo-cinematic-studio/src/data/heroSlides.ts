export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
};

export type HeroThumbnail = {
  id: string;
  image: string;
  alt: string;
  label: string;
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
    title: "Signature Wedding Story",
    category: "Traditional Ceremony",
  },
  {
    id: "slide-2",
    image: "/images/hero/slide-02.jpg",
    alt: "HALO Cinematic Studio - Beautiful Couple Portrait",
    title: "Timeless Moments",
    category: "Wedding Portrait",
  },
  {
    id: "slide-3",
    image: "/images/hero/slide-03.jpg",
    alt: "HALO Cinematic Studio - Auspicious Ceremony Rituals",
    title: "Ceremony Emotions",
    category: "Vibrant Traditions",
  },
  {
    id: "slide-4",
    image: "/images/hero/slide-04.jpg",
    alt: "HALO Cinematic Studio - Wedding Celebration and Joy",
    title: "Joy & Celebration",
    category: "Cinematic Film",
  },
  {
    id: "slide-5",
    image: "/images/hero/slide-05.jpg",
    alt: "HALO Cinematic Studio - Bride and Groom Heritage Portrait",
    title: "Stories Worth Remembering",
    category: "Heritage Collection",
  },
];

/**
 * 5 authentic studio photos cropped from actual HALO wedding captures:
 * 1. Bride Portrait in Traditional Saree & Gold Jewelry
 * 2. Sacred Florals & Garland Ritual
 * 3. Couple Tender Smile
 * 4. Mandapam Blessing Moment
 * 5. Royal Wedding Couple Frame
 */
export const heroThumbnails: HeroThumbnail[] = [
  {
    id: "thumb-1",
    image: "/images/hero/thumbnails/thumb-01.jpg",
    alt: "Traditional Tamil Bride Portrait with Gold Jewelry and Jasmine",
    label: "Bridal Portrait",
  },
  {
    id: "thumb-2",
    image: "/images/hero/thumbnails/thumb-02.jpg",
    alt: "Wedding Ceremony Rose Garlands and Details",
    label: "Ceremony Garlands",
  },
  {
    id: "thumb-3",
    image: "/images/hero/thumbnails/thumb-03.jpg",
    alt: "Newlywed Couple Candid Smile",
    label: "Couple Candid",
  },
  {
    id: "thumb-4",
    image: "/images/hero/thumbnails/thumb-04.jpg",
    alt: "Mandapam Auspicious Ceremony Moment",
    label: "Mandapam Moment",
  },
  {
    id: "thumb-5",
    image: "/images/hero/thumbnails/thumb-05.jpg",
    alt: "Traditional Couple Wedding Portrait",
    label: "Heritage Frame",
  },
];
