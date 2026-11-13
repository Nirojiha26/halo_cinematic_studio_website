import Image from "next/image";
import { Sparkles } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/motion/PageTransition";
import { PhotosGallery } from "@/components/sections/PhotosGallery";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Photos",
  description:
    "Explore authentic wedding photography, engagement sessions, traditional ceremonies, and fine-art portraits in Nelliady, Sri Lanka by HALO CINEMATIC STUDIO.",
  path: "/photos",
});

export default function PhotosPage() {
  return (
    <PageTransition>
      {/* ── 1. Hero / Header (Dark blurred background matching navbar seamlessly, just like About page) ── */}
      <section className="relative overflow-hidden bg-[#090A0D] pt-28 pb-16 sm:pb-20 border-b border-[#2A2926]">
        {/* Blurred authentic studio background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/halo-1-51.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center filter blur-xl scale-110 opacity-30"
          />
          {/* Dark gradient wash overlays matching navbar */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090A0D]/90 via-[#090A0D]/80 to-[#090A0D]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(215,25,32,0.22)_0%,transparent_75%)]" />
        </div>

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Red Eyebrow */}
            <div className="inline-flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#D71920]" aria-hidden />
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                Gallery &amp; Archive
              </p>
              <span className="w-8 h-[2px] bg-[#D71920]" aria-hidden />
            </div>

            {/* Main Headline */}
            <h1
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.03em] leading-[1.08] text-[#FAF7F1]"
            >
              Stories in{" "}
              <span className="italic font-serif text-[#D71920]">Every Frame.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-[#FAF7F1]/90">
              Explore wedding moments, engagements, portraits, and sacred rituals in Nelliady.
            </p>

            {/* Quick Proof Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-[#D8CFC1]/80">
              <span className="flex items-center gap-1.5 text-[#FAF7F1]">
                <Sparkles className="size-3.5 text-[#D71920]" />
                <span>Nelliady</span>
              </span>
              <span className="text-[#D8CFC1]/40">•</span>
              <span>Sony Alpha 7 IV High-Resolution</span>
              <span className="text-[#D8CFC1]/40">•</span>
              <span>Authentic Studio Archive</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Gallery Section (Soft Cream #FAF7F1 Background) ── */}
      <section className="bg-[#FAF7F1] py-12 sm:py-16">
        <Container size="wide">
          <PhotosGallery />
        </Container>
      </section>
    </PageTransition>
  );
}
