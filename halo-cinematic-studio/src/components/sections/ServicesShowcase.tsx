"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface CaptureService {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

const captureServices: CaptureService[] = [
  {
    title: "Wedding Photography",
    category: "Bridal & Weddings",
    description: "Traditional rituals, sacred vows, and timeless auspicious moments.",
    image: "/images/home-selected/traditional-wedding.webp",
    href: "/packages?category=weddings",
  },
  {
    title: "Engagement & Registration",
    category: "Couple Sessions",
    description: "An intimate beginning, captured with warmth and cinematic beauty.",
    image: "/images/home-selected/garden-couple.webp",
    href: "/packages?category=engagement",
  },
  {
    title: "Puberty Ceremony",
    category: "Cultural Milestone",
    description: "Family heritage, sacred blessings, and memories preserved with care.",
    image: "/images/home-selected/pink-saree-portrait.webp",
    href: "/packages?category=puberty",
  },
  {
    title: "Event Photography",
    category: "Celebrations & Birthdays",
    description: "Spontaneous laughter, atmosphere, and energy that bring events to life.",
    image: "/images/baby/miththu-01.jpg",
    href: "/packages?category=events",
  },
  {
    title: "Portrait Photography",
    category: "Fine-Art Framing",
    description: "Thoughtful studio and outdoor portraits crafted with artistic elegance.",
    image: "/images/home-selected/temple-portrait.webp",
    href: "/photos?collection=Portraits",
  },
  {
    title: "Cinematography",
    category: "Films & 4K Drone",
    description: "Motion, sound, and deep emotion woven into a film to return to forever.",
    image: "/images/editorial/filming.jpg",
    href: "/packages?category=weddings",
  },
];

export function EditorialServices() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const totalSlides = 2; // 2 sets of 3 cards = 6 cards total

  // Auto-play: Automatically alternate between the 2 sets of 3 cards every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const visibleServices =
    activeSlide === 0
      ? captureServices.slice(0, 3)
      : captureServices.slice(3, 6);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F1] border-b border-[#D8CFC1]"
      aria-labelledby="services-heading"
    >
      <Container size="wide">
        {/* ── Section Header (Arrow buttons removed as requested) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2.5">
              <span className="w-5 h-[2px] bg-[#D71920]" aria-hidden="true" />
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                What we capture
              </p>
            </div>
            <h2
              id="services-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] leading-[1.15] text-[#171716]"
            >
              Every Occasion Deserves
              <br />
              Its Own{" "}
              <span className="italic text-[#D71920] font-normal">Story.</span>
            </h2>
          </div>

          <div className="self-start sm:self-end">
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#171716] hover:text-[#D71920] transition-colors border-b border-[#D8CFC1] hover:border-[#D71920] pb-1 group"
            >
              <span>Discover Our Packages</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ── 3-Card Grid with Offset Backdrop & Vertical Labels (Auto-changing, pauses on hover) ── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative transition-opacity duration-500 ease-in-out"
        >
          <div
            key={activeSlide}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 animate-fade-in"
          >
            {visibleServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative block cursor-pointer select-none focus:outline-hidden"
              >
                {/* Card wrapper with padding to give room for offset backdrop */}
                <div className="relative pt-6 sm:pt-8 pr-9 sm:pr-11">
                  {/* 1. Offset Backdrop Panel (sticks out at the top and right) */}
                  <div
                    className="absolute top-0 right-0 left-5 sm:left-7 bottom-5 sm:bottom-7 bg-[#EFEAE1] border border-[#D8CFC1]/70 transition-all duration-300 group-hover:bg-[#E5DFCFC] group-hover:border-[#D71920]/40 shadow-xs"
                    aria-hidden="true"
                  />

                  {/* 2. Vertical Title in the sticking-out right gutter (Title Case, matching screenshot) */}
                  <div className="absolute right-0 top-0 bottom-5 sm:bottom-7 w-9 sm:w-11 flex items-center justify-center z-10 pointer-events-none">
                    <span
                      style={{
                        writingMode: "vertical-rl",
                      }}
                      className="text-xs sm:text-[13px] font-sans font-medium tracking-wide text-[#716B64] group-hover:text-[#D71920] transition-colors whitespace-nowrap"
                    >
                      {service.title}
                    </span>
                  </div>

                  {/* 3. Foreground Photo (offset to bottom and left) */}
                  <div className="relative z-10 aspect-[3/4.2] overflow-hidden bg-[#171716] shadow-sm transition-all duration-300 group-hover:shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Elegant hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#D71920]">
                        {service.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                        className="text-lg font-medium text-white mt-0.5 leading-snug"
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#FAF7F1]/90 font-medium line-clamp-2 mt-1">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white mt-3 group-hover:text-[#FAF7F1]">
                        <span>View Packages</span>
                        <ArrowUpRight className="size-3.5 text-[#D71920]" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Carousel Pagination Dots (exact match to screenshot) ── */}
        <div className="flex items-center justify-center gap-2.5 mt-10 sm:mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isActive = index === activeSlide;
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setActiveSlide(index);
                  setIsPaused(true);
                  // Resume auto-play after 8 seconds of manual interaction
                  const timeout = setTimeout(() => setIsPaused(false), 8000);
                  return () => clearTimeout(timeout);
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "cursor-pointer transition-all duration-300 rounded-full",
                  isActive
                    ? "size-2.5 bg-[#D71920] scale-110 shadow-xs"
                    : "size-2 bg-[#D8CFC1] hover:bg-[#716B64]",
                )}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
