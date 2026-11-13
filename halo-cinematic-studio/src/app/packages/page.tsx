import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/motion/PageTransition";
import { PackagesExplorer } from "@/components/sections/PackagesExplorer";
import { Container, Section } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Packages",
  description:
    "Explore authentic Wedding, Engagement & Registration, Puberty Ceremony, and Birthday photography and cinematography packages from HALO CINEMATIC STUDIO in Nelliady, Sri Lanka.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <PageTransition>
      {/* ── 1. Hero / Header (Dark blurred studio atmosphere matching navbar seamlessly) ── */}
      <section className="relative overflow-hidden bg-[#090A0D] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-18 border-b border-[#2A2926]">
        {/* Background authentic studio photo with blur and dark gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-selected/garland-exchange.webp"
            alt="HALO Cinematic Studio atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter blur-xl scale-110 opacity-30"
          />
          {/* Dark gradient wash overlays matching navbar */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090A0D]/90 via-[#090A0D]/80 to-[#090A0D]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(215,25,32,0.22)_0%,transparent_75%)]" />
        </div>

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Red Eyebrow */}
            <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[2px] bg-[#D71920]" aria-hidden />
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                Collections &amp; Pricing
              </p>
              <span className="w-8 h-[2px] bg-[#D71920]" aria-hidden />
            </div>

            {/* Main Headline */}
            <h1
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[1.1] text-[#FAF7F1]"
            >
              Studio{" "}
              <span className="text-[#D71920] italic font-normal">
                Packages.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A39E96] max-w-2xl mx-auto">
              Transparent, complete packages across Weddings, Engagements,
              Puberty Ceremonies, and Birthdays — with handcrafted fine-art
              albums, 4K cinematography, and framed keepsakes.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 2. Packages Explorer (Segmented filter, clear cards, red text accents) ── */}
      <Section tone="blush" className="py-12 sm:py-16">
        <Container>
          <PackagesExplorer />
        </Container>
      </Section>
    </PageTransition>
  );
}
