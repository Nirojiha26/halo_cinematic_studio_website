"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

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
      className="hero-bg relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        {/* 1. Authentic HALO Studio Logo centered cleanly above headline */}
        <div className="mx-auto mb-6 flex items-center justify-center">
          <Logo
            sizes="(min-width: 640px) 230px, 180px"
            preload
            className="mx-auto w-[180px] sm:w-[230px] drop-shadow-[0_10px_28px_rgba(220,38,38,0.16)]"
          />
        </div>

        {/* 2. Headline */}
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

        {/* 3. Subtext */}
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

        {/* 4. CTAs */}
        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
          <Link
            href="/packages"
            className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 text-sm font-medium text-white shadow-lg shadow-[rgba(220,38,38,0.32)] transition-all hover:scale-[1.02]"
            style={{ height: 48 }}
          >
            <span>View Packages</span>
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/photos"
            className="btn-outline inline-flex items-center justify-center rounded-xl px-7 text-sm font-medium transition-all hover:bg-[#FFEEEE]"
            style={{ height: 48 }}
          >
            <span>View Photos</span>
          </Link>
        </div>

        {/* 5. Service category pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {serviceChips.map((chip) => (
            <Link
              key={chip.label}
              href={chip.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(220,38,38,0.28)] bg-white px-5 py-2.5 text-xs font-medium text-[#141414] shadow-[0_4px_14px_rgba(220,38,38,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E02424] hover:bg-[#FFEEEE] hover:text-[#B91C1C] hover:shadow-[0_6px_18px_rgba(220,38,38,0.22)] sm:text-sm"
            >
              <span className="size-1.5 rounded-full bg-[#E02424] transition-transform group-hover:scale-125" />
              <span>{chip.label}</span>
            </Link>
          ))}
        </div>

        {/* 6. Staggered Photo cards preview */}
        <div className="reveal mt-16 flex w-full items-end justify-center gap-3 pb-6 sm:gap-7">
          {/* Card 1 — Left */}
          <div
            className="overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.03]"
            style={{
              width: "clamp(100px, 22vw, 220px)",
              aspectRatio: "4/5",
              border: "6px solid #ffffff",
              boxShadow: "0 20px 42px -12px rgba(220, 38, 38, 0.28), 0 0 0 1px rgba(220, 38, 38, 0.16)",
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
              boxShadow: "0 28px 58px -14px rgba(220, 38, 38, 0.36), 0 0 0 1px rgba(220, 38, 38, 0.2)",
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
              boxShadow: "0 20px 42px -12px rgba(220, 38, 38, 0.28), 0 0 0 1px rgba(220, 38, 38, 0.16)",
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
