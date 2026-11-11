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
      className="hero-bg relative pt-28 md:pt-36 pb-8 overflow-hidden"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
        {/* 1. Halo-ring SVG emblem */}
        <div className="relative mb-2 flex items-center justify-center">
          <svg
            width={84}
            height={84}
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="blob-anim"
          >
            <defs>
              <linearGradient id="haloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B91C24" />
                <stop offset="50%" stopColor="#DC3530" />
                <stop offset="100%" stopColor="#F2574B" />
              </linearGradient>
            </defs>
            <circle cx={48} cy={48} r={42} fill="rgba(220,53,48,0.06)" />
            <circle
              cx={48}
              cy={48}
              r={36}
              fill="none"
              stroke="url(#haloGrad)"
              strokeWidth={3}
              strokeDasharray="4 2"
            />
            <circle
              cx={48}
              cy={48}
              r={24}
              fill="none"
              stroke="url(#haloGrad)"
              strokeWidth={2}
            />
            <circle cx={48} cy={48} r={6} fill="#DC3530" />
          </svg>
        </div>

        {/* 2. Eyebrow chip */}
        <span className="chip-eyebrow mt-4">
          Photography · Cinematography · Creative Studio
        </span>

        {/* 3. Headline */}
        <h1
          id="hero-heading"
          className="mt-3 text-center font-semibold"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(38px, 6vw, 72px)",
            color: "var(--ink)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Your Story.
          <br />
          <span className="grad-text">Our Vision.</span>
        </h1>

        {/* 4. Subtext */}
        <p
          className="mt-4 max-w-xl text-center text-base sm:text-lg"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: "var(--muted)",
          }}
        >
          We capture the moments that matter and turn them into timeless
          memories. From weddings and engagements to puberty ceremonies, every
          frame is crafted with passion.
        </p>

        {/* 5. CTAs */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3.5">
          <Link
            href="/packages"
            className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 text-sm font-medium text-white shadow-md shadow-[rgba(220,53,48,0.25)]"
            style={{ height: 48 }}
          >
            <span>View Packages</span>
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/photos"
            className="btn-outline inline-flex items-center justify-center rounded-xl px-7 text-sm font-medium"
            style={{ height: 48 }}
          >
            <span>View Photos</span>
          </Link>
        </div>

        {/* 6. Service chips row */}
        <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {serviceChips.map((chip) => (
            <Link
              key={chip.label}
              href={chip.href}
              className="rounded-full border border-[rgba(20,20,20,0.08)] bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#141414] shadow-xs transition-all hover:border-[#DC3530] hover:text-[#DC3530]"
            >
              {chip.label}
            </Link>
          ))}
        </div>

        {/* 7. Staggered Photo cards preview */}
        <div className="reveal mt-14 flex items-end justify-center gap-3 sm:gap-6 pb-4">
          {/* Card 1 — left */}
          <div
            className="-translate-y-3 overflow-hidden rounded-[16px] sm:rounded-[20px] transition-transform hover:-translate-y-5"
            style={{
              width: "clamp(96px, 22vw, 224px)",
              aspectRatio: "4/5",
              border: "5px solid white",
              boxShadow: "0 12px 32px rgba(220,53,48,0.12)",
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
              sizes="(min-width: 640px) 224px, 120px"
            />
          </div>

          {/* Card 2 — centre, larger */}
          <div
            className="overflow-hidden rounded-[18px] sm:rounded-[22px] transition-transform hover:-translate-y-2"
            style={{
              width: "clamp(130px, 28vw, 280px)",
              aspectRatio: "4/5",
              border: "6px solid white",
              boxShadow: "0 20px 48px rgba(220,53,48,0.18)",
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
              sizes="(min-width: 640px) 280px, 150px"
            />
          </div>

          {/* Card 3 — right */}
          <div
            className="-translate-y-6 overflow-hidden rounded-[16px] sm:rounded-[20px] transition-transform hover:-translate-y-8"
            style={{
              width: "clamp(96px, 22vw, 224px)",
              aspectRatio: "4/5",
              border: "5px solid white",
              boxShadow: "0 12px 32px rgba(220,53,48,0.12)",
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
              sizes="(min-width: 640px) 224px, 120px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
