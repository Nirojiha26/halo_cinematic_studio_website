import { createMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/motion/PageTransition";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PackagesExplorer } from "@/components/sections/PackagesExplorer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Packages",
  description:
    "Explore Wedding, Puberty Ceremony, Engagement, and Event & Portrait photography and cinematography packages from HALO Cinematic Studio.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Packages & Pricing"
        title="Studio"
        highlight="Packages"
        description="Transparent packages across Weddings, Puberty Ceremonies, Engagements, and Special Events — complete with fine-art albums, full-event video, and framed prints."
        action={
          <Button href="/contact" variant="primary" size="md">
            Enquire via WhatsApp
          </Button>
        }
      />

      <Section tone="canvas">
        <Container>
          <PackagesExplorer />
        </Container>
      </Section>

      <ContactCTA />
    </PageTransition>
  );
}

