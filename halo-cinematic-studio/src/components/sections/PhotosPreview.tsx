import { ArrowRight } from "lucide-react";
import { weddingPortraits } from "@/data/photos";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoCard } from "@/components/shared/PhotoCard";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PhotosPreview() {
  return (
    <Section tone="paper" labelledBy="home-photos-heading">
      <Container>
        <SectionHeading
          id="home-photos-heading"
          eyebrow="Selected Frames"
          title="Studio"
          highlight="Photos"
          description="Real wedding stories, candid ceremony portraits, and official HALO package collections."
          action={
            <Button
              href="/photos"
              variant="outline"
              size="md"
              icon={<ArrowRight className="size-4" />}
            >
              Open Full Gallery
            </Button>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {weddingPortraits.map((photo, i) => (
            <Reveal key={photo.id} delay={Math.min(i * 0.06, 0.24)}>
              <PhotoCard
                photo={photo}
                href="/photos"
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

