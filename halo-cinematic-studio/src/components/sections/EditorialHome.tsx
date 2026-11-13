import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { EditorialPhoto } from "@/components/shared/EditorialPhoto";
import { Reveal } from "@/components/motion/Reveal";
import { homePhotos } from "@/data/homePhotos";
export { EditorialServices } from "./ServicesShowcase";

export function StudioStory() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F1] border-b border-[#D8CFC1]"
      id="our-story"
      aria-labelledby="story-heading"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Editorial Typography & Story (matching screenshot) ── */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920] mb-2">
              About Us
            </p>

            {/* Main Title (clean, elegant, spaced serif like screenshot) */}
            <h2
              id="story-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-[0.08em] uppercase text-[#171716] leading-none"
            >
              HALO
            </h2>

            {/* Horizontal accent line under title (matching screenshot) */}
            <div className="w-16 sm:w-20 h-[2px] bg-[#D71920] mt-3.5 mb-6" aria-hidden="true" />

            {/* Sub-headline in spaced uppercase */}
            <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#716B64] leading-relaxed mb-4">
              Passion in Every Detail. Purpose in Every Story.
            </h3>

            {/* Polished, engaging body copy */}
            <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-[#2B2927]">
              <p>
                Based in Nelliady, Jaffna, HALO Cinematic Studio is a premier creative photography and cinematography collective dedicated to documenting life’s most cherished celebrations. We believe every genuine glance, auspicious blessing, and spontaneous burst of joy deserves to be captured with authentic cinematic elegance.
              </p>
              <p>
                From sacred garland exchanges and intimate pre-shoots to traditional puberty milestones and vibrant family festivities, our team crafts visuals that endure across generations. We don’t just capture frames — we preserve heirlooms to hold close, and timeless films to relive forever.
              </p>
            </div>

            {/* Bottom Signature & Explore Link (matching signature in screenshot) */}
            <div className="mt-8 pt-6 border-t border-[#D8CFC1]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="italic text-2xl sm:text-3xl text-[#171716] font-normal tracking-wide"
                >
                  Halo Cinematic Studio
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#716B64] mt-0.5">
                  Lead Storyteller &amp; Cinematographer
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#171716] hover:text-[#D71920] transition-colors border-b border-[#D8CFC1] hover:border-[#D71920] pb-1 group self-start sm:self-auto"
              >
                <span>Explore Our Story</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ── Right Column: Photo with Dot Grid & Terracotta/Red Offset Block (exact match to screenshot) ── */}
          <div className="relative flex justify-center lg:justify-end pt-4 sm:pt-6 pr-4 sm:pr-6">
            <div className="relative w-full max-w-[440px]">
              {/* 1. Subtle Dot Matrix Texture Pattern on Top-Left */}
              <div
                className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none opacity-40 bg-[radial-gradient(#716B64_1.5px,transparent_1.5px)] [background-size:16px_16px] z-0"
                aria-hidden="true"
              />

              {/* 2. Offset Terracotta / Studio Red Accent Block on Bottom-Right (exact match to screenshot) */}
              <div
                className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 w-2/3 h-2/3 bg-[#9E2A2B] z-0 pointer-events-none shadow-md"
                aria-hidden="true"
              />

              {/* 3. High-Quality Photo in Foreground (Cinematographer in golden hour) */}
              <div className="relative z-10 aspect-[4/4.8] overflow-hidden bg-[#171716] shadow-xl">
                <Image
                  src="/images/about/behind-the-scenes.jpg"
                  alt="HALO Cinematic Studio cinematographer capturing couple in golden hour"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle bottom tag */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4 sm:p-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                    Authentic Cinematic Craft
                  </p>
                  <p className="text-xs text-white/90 font-medium">
                    Nelliady, Jaffna &amp; Island-Wide Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



const moments = [
  { ...homePhotos.portfolio1, label: "The connection", type: "Wedding portraits", href: "/photos?collection=Wedding%20Portraits" },
  { ...homePhotos.portfolio2, label: "A moment of her own", type: "Portraits", href: "/photos?collection=Portraits" },
  { ...homePhotos.portfolio3, label: "The quiet joy", type: "Togetherness", href: "/photos" },
];
export function EditorialPortfolio() {
  return <section className="editorial-section" aria-labelledby="portfolio-heading"><Container>
    <div className="editorial-section-head"><div><p className="editorial-label">Selected moments</p><h2 id="portfolio-heading" className="editorial-heading">Stories We&apos;ve <em>Captured.</em></h2></div><p className="section-intro">Real emotions. Beautiful connections.<br />Memories that stay forever.</p></div>
    <div className="portfolio-editorial">{moments.map((photo, i) => <Reveal key={photo.src} as="figure" className={`portfolio-piece portfolio-piece-${i}`}><Link href={photo.href} aria-label={`View ${photo.type}`}><EditorialPhoto src={photo.src} alt={photo.alt} position={photo.position} /><figcaption><h3>{photo.label}</h3><span>{photo.type} <ArrowUpRight size={14} /></span></figcaption></Link></Reveal>)}</div>
    <div className="portfolio-bottom"><span>Every photograph, a feeling kept.</span><Link className="editorial-button" href="/photos">View Full Gallery <ArrowUpRight size={17} /></Link></div>
  </Container></section>;
}

export function StudioApproach() {
  return <section className="editorial-section approach-section" aria-labelledby="approach-heading"><Container>
    <div className="approach-top"><div><p className="editorial-label">The HALO experience</p><h2 id="approach-heading" className="editorial-heading">More Than Just<br /><em>Photography.</em></h2></div><EditorialPhoto {...homePhotos.approach} /></div>
    <div className="approach-steps">{[
      ["Understand the Story", "We take time to understand your vision and what makes your occasion special."],
      ["Capture the Emotion", "We focus on genuine expressions, meaningful details and unforgettable moments."],
      ["Preserve the Memories", "We transform beautiful moments into timeless photographs and cinematic films."],
    ].map(([title, body], i) => <Reveal as="article" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
  </Container></section>;
}
