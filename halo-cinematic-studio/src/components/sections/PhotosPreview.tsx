import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { weddingPortraits } from "@/data/photos";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoCard } from "@/components/shared/PhotoCard";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PhotosPreview() {
  return (
    <Section tone="white" labelledBy="home-photos-heading">
      <Container>
        <SectionHeading
          id="home-photos-heading"
          eyebrow="Selected Frames"
          title="Studio"
          highlight="Photos"
          description="Real wedding moments, candid ceremony portraits, and official HALO cinematic package collections."
          action={
            <Link
              href="/photos"
              className="btn-outline inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium"
            >
              <span>Open Full Gallery</span>
              <ArrowRight className="size-4" />
            </Link>
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
