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
      className="hero-bg relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        {/* 1. Layered Halo Ring Emblem (Lime-inspired concentric ruby badge) */}
        <div className="mx-auto mb-5 flex items-center justify-center">
          <svg
            width={88}
            height={88}
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="blob-anim drop-shadow-[0_12px_24px_rgba(220,53,48,0.22)]"
          >
            <defs>
              <linearGradient id="haloRingOuter" x1="12" y1="10" x2="84" y2="86" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F2574B" />
                <stop offset="50%" stopColor="#DC3530" />
                <stop offset="100%" stopColor="#99141B" />
              </linearGradient>
              <linearGradient id="haloRingInner" x1="80" y1="16" x2="18" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF8A80" />
                <stop offset="100%" stopColor="#B91C24" />
              </linearGradient>
            </defs>
            <circle cx={48} cy={48} r={42} fill="rgba(220,53,48,0.06)" />
            <circle cx={48} cy={48} r={34} stroke="url(#haloRingOuter)" strokeWidth={11} />
            <circle cx={48} cy={48} r={24} stroke="url(#haloRingInner)" strokeWidth={4} opacity={0.85} />
            <circle cx={48} cy={48} r={18} fill="#FFFFFF" />
            <circle cx={48} cy={48} r={5} fill="#DC3530" />
          </svg>
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
          className="mx-auto text-center font-semibold tracking-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 6.4vw, 76px)",
            color: "#141414",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
          }}
        >
          Your Story.
          <br />
          <span className="grad-text">Our Vision.</span>
        </h1>

        {/* 4. Subtext */}
        <p
          className="mx-auto mt-6 max-w-xl text-balance text-center text-base leading-relaxed sm:text-[17px]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: "#5F5A5A",
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

        {/* 6. Service category pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {serviceChips.map((chip) => (
            <Link
              key={chip.label}
              href={chip.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(220,53,48,0.22)] bg-white px-5 py-2.5 text-xs font-medium text-[#141414] shadow-[0_2px_10px_rgba(220,53,48,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DC3530] hover:bg-[#FFF5F4] hover:text-[#DC3530] hover:shadow-[0_6px_16px_rgba(220,53,48,0.16)] sm:text-sm"
            >
              <span className="size-1.5 rounded-full bg-[#DC3530] transition-transform group-hover:scale-125" />
              <span>{chip.label}</span>
            </Link>
          ))}
        </div>

        {/* 7. Staggered Photo cards preview */}
        <div className="reveal mt-16 flex w-full items-end justify-center gap-3 pb-6 sm:gap-7">
          {/* Card 1 — Left */}
          <div
            className="overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(100px, 22vw, 220px)",
              aspectRatio: "4/5",
              border: "6px solid #ffffff",
              boxShadow: "0 20px 40px -12px rgba(220, 53, 48, 0.22), 0 0 0 1px rgba(220, 53, 48, 0.12)",
              transform: "translateY(14px)",
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

          {/* Card 2 — Center */}
          <div
            className="overflow-hidden rounded-[24px] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(140px, 30vw, 290px)",
              aspectRatio: "4/5",
              border: "6px solid #ffffff",
              boxShadow: "0 28px 56px -14px rgba(220, 53, 48, 0.3), 0 0 0 1px rgba(220, 53, 48, 0.15)",
              transform: "translateY(-10px)",
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
              sizes="(min-width: 640px) 290px, 160px"
            />
          </div>

          {/* Card 3 — Right */}
          <div
            className="overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(100px, 22vw, 220px)",
              aspectRatio: "4/5",
              border: "6px solid #ffffff",
              boxShadow: "0 20px 40px -12px rgba(220, 53, 48, 0.22), 0 0 0 1px rgba(220, 53, 48, 0.12)",
              transform: "translateY(8px)",
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
