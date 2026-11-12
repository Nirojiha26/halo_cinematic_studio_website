export type HeroSlide = {
  id: string;
  image: string;
  filmImage: string;
  alt: string;
  category: string;
  caption: string;
  timecode: string;
};

/**
 * One place to swap the opening gallery images later. The film stills reuse
 * the studio's supplied photographs until a licensed reel is available.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "halo-01",
    image: "/images/photos/wedding-couple-03.jpg",
    filmImage: "/images/photos/wedding-couple-01.jpg",
    alt: "A newlywed couple sharing a quiet smile during their traditional ceremony",
    category: "Signature wedding story",
    caption: "The feeling in every frame.",
    timecode: "00:18:42",
  },
  {
    id: "halo-02",
    image: "/images/photos/wedding-couple-01.jpg",
    filmImage: "/images/photos/wedding-couple-04.jpg",
    alt: "Newlyweds standing together in traditional wedding dress",
    category: "Wedding portraits",
    caption: "A day held in colour.",
    timecode: "00:24:16",
  },
  {
    id: "halo-03",
    image: "/images/photos/wedding-couple-04.jpg",
    filmImage: "/images/photos/wedding-couple-02.jpg",
    alt: "Bride and groom sharing a tender moment in traditional attire",
    category: "Ceremony moments",
    caption: "Where every detail becomes memory.",
    timecode: "00:31:08",
  },
  {
    id: "halo-04",
    image: "/images/photos/wedding-couple-02.jpg",
    filmImage: "/images/photos/wedding-couple-03.jpg",
    alt: "A bride and groom looking at one another during their wedding celebration",
    category: "Cinematic films",
    caption: "A moving portrait of your people.",
    timecode: "00:42:27",
  },
  {
    id: "halo-05",
    image: "/images/photos/wedding-couple-03.jpg",
    filmImage: "/images/photos/wedding-couple-01.jpg",
    alt: "Couple surrounded by ceremony flowers and warm evening light",
    category: "The quiet in between",
    caption: "The moments you almost miss.",
    timecode: "00:49:03",
  },
];
