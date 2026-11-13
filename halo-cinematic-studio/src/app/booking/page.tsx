import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { StudioChannelsCard } from "@/components/shared/ContactDetails";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Container, Section } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Book Now",
  description:
    "Book your wedding photography, engagement session, puberty ceremony, or birthday milestone with HALO CINEMATIC STUDIO in Nelliady, Sri Lanka.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <PageTransition>
      {/* ── 1. Hero / Header (Dark blurred studio atmosphere matching navbar) ── */}
      <section className="relative overflow-hidden bg-[#090A0D] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-18 border-b border-[#2A2926]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-selected/ring-ceremony.webp"
            alt="HALO Cinematic Studio atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter blur-xl scale-110 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090A0D]/90 via-[#090A0D]/80 to-[#090A0D]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(215,25,32,0.22)_0%,transparent_75%)]" />
        </div>

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[2px] bg-[#D71920]" aria-hidden />
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                Reserve Your Date
              </p>
              <span className="w-8 h-[2px] bg-[#D71920]" aria-hidden />
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[1.1] text-[#FAF7F1]"
            >
              Book Your{" "}
              <span className="text-[#D71920] italic font-normal">
                Session.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A39E96] max-w-2xl mx-auto">
              Select your package and event details below to reserve your date with
              HALO CINEMATIC STUDIO via WhatsApp.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 2. Booking Channels & Enquiry Form ── */}
      <Section tone="blush" className="py-12 sm:py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[380px_1fr] lg:gap-10">
            <Reveal>
              <StudioChannelsCard />
            </Reveal>

            <Reveal delay={0.08}>
              <EnquiryForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
