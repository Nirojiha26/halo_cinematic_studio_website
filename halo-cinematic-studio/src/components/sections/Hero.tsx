"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAICAgICAwEAAAAAAAAAAAECAxEEITESQVFhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCbqfI3L96ywqSoqpJKSoiCKP3Gw+mW9VW3JJ9ckm2T2pxCFRUeJAQA/9k=";

const photos = [
  { src: "/images/photos/wedding-couple-01.jpg", alt: "Wedding couple portrait 1" },
  { src: "/images/photos/wedding-couple-02.jpg", alt: "Wedding couple portrait 2" },
  { src: "/images/photos/wedding-couple-03.jpg", alt: "Wedding couple portrait 3" },
];

const serviceChips = [
  { label: "Weddings", href: "/packages?category=weddings" },
  { label: "Puberty Ceremony", href: "/packages?category=puberty" },
  { label: "Engagement", href: "/packages?category=engagement" },
  { label: "Events & Cinema", href: "/packages?category=events" },
];

export function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-bg relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36 lg:pt-48 lg:pb-40"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        {/* 1. Concentric Halo Camera-Lens SVG Emblem */}
        <div className="mx-auto mb-5 flex items-center justify-center">
          <div
            className="blob-anim relative grid size-18 place-items-center rounded-full sm:size-20"
            style={{
              background: "rgba(220, 53, 48, 0.08)",
              border: "2px solid rgba(220, 53, 48, 0.65)",
              boxShadow: "0 10px 28px rgba(220, 53, 48, 0.16)",
            }}
          >
            {/* Middle dashed aperture ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "9px",
                border: "1.5px dashed rgba(220, 53, 48, 0.55)",
              }}
            />
            {/* Inner ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "17px",
                border: "1px solid rgba(220, 53, 48, 0.4)",
              }}
            />
            {/* Core ruby lens glass */}
            <div
              className="relative rounded-full"
              style={{
                width: "14px",
                height: "14px",
                background: "linear-gradient(135deg, #B91C24 0%, #DC3530 50%, #FF5A52 100%)",
                boxShadow: "0 0 12px rgba(220, 53, 48, 0.5)",
              }}
            />
          </div>
        </div>

        {/* 2. Eyebrow chip */}
        <div className="mx-auto mb-5">
          <span className="chip-eyebrow">
            Photography · Cinematography · Creative Studio
          </span>
        </div>

        {/* 3. Headline */}
        <h1
          id="hero-heading"
          className="mx-auto text-center font-semibold"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 6.5vw, 76px)",
            color: "#141414",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}
        >
          Your Story.
          <br />
          <span className="grad-text">Our Vision.</span>
        </h1>

        {/* 4. Subtext */}
        <p
          className="mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: "#5F5A5A",
            lineHeight: 1.7,
          }}
        >
          We capture the moments that matter and turn them into timeless
          memories. From weddings and engagements to puberty ceremonies, every
          frame is crafted with passion.
        </p>

        {/* 5. CTAs */}
        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
          <Link
            href="/packages"
            className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 text-sm font-medium text-white shadow-lg shadow-[rgba(220,53,48,0.28)] transition-all hover:scale-[1.02]"
            style={{ height: 48 }}
          >
            <span>View Packages</span>
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/photos"
            className="btn-outline inline-flex items-center justify-center rounded-xl px-7 text-sm font-medium transition-all hover:bg-[#FFF5F4]"
            style={{ height: 48 }}
          >
            <span>View Photos</span>
          </Link>
        </div>

        {/* 6. Service category pills (Explicit pill cards with red accent dot) */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
          {serviceChips.map((chip) => (
            <Link
              key={chip.label}
              href={chip.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(220,53,48,0.25)] bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-[#141414] shadow-[0_3px_12px_rgba(220,53,48,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DC3530] hover:bg-[#FFF5F4] hover:text-[#DC3530] hover:shadow-[0_6px_18px_rgba(220,53,48,0.18)]"
            >
              <span className="size-1.5 rounded-full bg-[#DC3530] transition-transform group-hover:scale-125" />
              <span>{chip.label}</span>
            </Link>
          ))}
        </div>

        {/* 7. Staggered Photo cards preview with generous margin-top to prevent any overlap */}
        <div className="reveal mt-28 flex w-full items-center justify-center gap-4 sm:mt-32 sm:gap-7 md:mt-36">
          {/* Card 1 — Left (Offset downward) */}
          <div
            className="overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(96px, 22vw, 220px)",
              aspectRatio: "4/5",
              border: "6px solid #ffffff",
              boxShadow: "0 20px 40px -12px rgba(220, 53, 48, 0.22), 0 0 0 1px rgba(220, 53, 48, 0.12)",
              transform: "translateY(24px)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{ objectFit: "cover" }}
              sizes="(min-width: 640px) 220px, 110px"
            />
          </div>

          {/* Card 2 — Center (Hero focus, taller, standing proud) */}
          <div
            className="overflow-hidden rounded-[24px] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(136px, 28vw, 290px)",
              aspectRatio: "4/5",
              border: "6px solid #ffffff",
              boxShadow: "0 28px 56px -14px rgba(220, 53, 48, 0.32), 0 0 0 1px rgba(220, 53, 48, 0.16)",
              transform: "translateY(-8px)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{ objectFit: "cover" }}
              sizes="(min-width: 640px) 290px, 150px"
            />
          </div>

          {/* Card 3 — Right (Offset downward) */}
          <div
            className="overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(96px, 22vw, 220px)",
              aspectRatio: "4/5",
              border: "6px solid #ffffff",
              boxShadow: "0 20px 40px -12px rgba(220, 53, 48, 0.22), 0 0 0 1px rgba(220, 53, 48, 0.12)",
              transform: "translateY(24px)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{ objectFit: "cover" }}
              sizes="(min-width: 640px) 220px, 110px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
