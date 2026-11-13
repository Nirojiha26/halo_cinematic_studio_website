import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/shared/PageHeader";
import { EditorialPhoto } from "@/components/shared/EditorialPhoto";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = createMetadata({
  title: "About",
  description:
    "HALO CINEMATIC STUDIO is a creative photography and film production studio focused on telling meaningful stories through powerful visuals.",
  path: "/about",
});

const pillars = [
  {
    step: "01",
    title: "Our Vision",
    body: "To preserve the feeling of every meaningful occasion in photographs and films that people return to for generations.",
  },
  {
    step: "02",
    title: "Our Mission",
    body: "To understand each client's story and capture it with creativity, care and thoughtful attention to every detail.",
  },
  {
    step: "03",
    title: "Our Philosophy",
    body: "Polished films and custom photo frames built to stand the test of time and bring your memories back to life.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Who We Are"
        title="We make moments"
        highlight="timeless."
        description="HALO CINEMATIC STUDIO is a creative photography and film production studio focused on telling meaningful stories through powerful visuals."
      />

      {/* Brand story */}
      <Section tone="white" labelledBy="story-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <EditorialPhoto className="aspect-[4/5]" src="/images/editorial/engagement.jpg" alt="Couple sharing a quiet moment in warm woodland light" position="center 68%" />
            </Reveal>

            <Reveal delay={0.08}>
              <p className="chip-eyebrow mb-4">Our Story</p>
              <h2
                id="story-heading"
                style={{ fontFamily: "var(--font-playfair), serif" }}
                className="text-3xl font-semibold leading-tight text-[#141414] sm:text-4xl lg:text-5xl"
              >
                Your Moments. <span className="grad-text">Our Vision.</span> Your Story.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#625C5D] sm:text-lg">
                We capture the moments that matter and turn them into timeless memories. From weddings to music videos,
                every frame is created with passion.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#625C5D] sm:text-lg">
                From the emotion of a wedding day to the energy of a music video, we bring creativity, care and
                cinematic detail to every project — working closely with every client from the first idea to the final
                delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href="/packages" icon={<ArrowRight className="size-4" />}>
                  View Packages
                </Button>
                <Button href="/photos" variant="outline">
                  Browse Photos
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission, Vision & Philosophy */}
      <Section tone="blush" labelledBy="philosophy-heading">
        <Container>
          <SectionHeading
            id="philosophy-heading"
            eyebrow={siteConfig.tagline}
            title="Vision &"
            highlight="Mission"
            description="Three words guide how we shoot, edit and finish every commission."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} as="article">
                <div className="card relative h-full rounded-[20px] bg-white p-7 shadow-[0_12px_32px_rgba(217,11,23,0.08)] sm:p-8">
                  <p className="text-xs font-semibold text-[#B50812]">{p.step}</p>
                  <h3
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                    className="mt-4 text-2xl font-semibold text-[#141414]"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#625C5D]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Craft Disciplines */}
      <Section tone="white" labelledBy="craft-heading">
        <Container>
          <SectionHeading
            id="craft-heading"
            eyebrow="Studio Disciplines"
            title="What We"
            highlight="Craft"
            description="Every package is backed by in-house photographers, cinematographers, colourists, and album designers."
            action={
              <Button href="/packages" variant="outline" size="md" icon={<ArrowRight className="size-4" />}>
                Explore Packages
              </Button>
            }
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.2)}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </PageTransition>
  );
}
