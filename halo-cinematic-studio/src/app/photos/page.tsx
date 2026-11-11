import { createMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/motion/PageTransition";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PhotosGallery } from "@/components/sections/PhotosGallery";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Photos",
  description:
    "Explore wedding couple portraits and official HALO Cinematic Studio package collections in high resolution.",
  path: "/photos",
});

export default function PhotosPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Gallery & Collections"
        title="Studio"
        highlight="Photos"
        description="Real wedding portraits captured by our team alongside official Wedding, Engagement, and Event brochure sheets."
        action={
          <Button href="/packages" variant="outline" size="md">
            View Package Pricing
          </Button>
        }
      />

      <Section tone="canvas">
        <Container>
          <PhotosGallery />
        </Container>
      </Section>

      <ContactCTA />
    </PageTransition>
  );
}

