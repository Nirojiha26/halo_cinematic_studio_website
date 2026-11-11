import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="gallery-backdrop relative flex min-h-[76dvh] items-center overflow-hidden pt-28 pb-20">
      <div aria-hidden className="lens-ring top-[18%] -right-32 size-[420px] opacity-80" />
      <Container className="relative z-10">
        <div className="max-w-xl">
          <p className="eyebrow">Frame Not Found • 404</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none text-ink sm:text-6xl">
            Scene <span className="text-accent">Missing.</span>
          </h1>
          <p className="mt-5 text-base text-body sm:text-lg">
            The page you are looking for isn&apos;t here. Head back to the studio homepage or browse our studio photos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="/" size="lg" icon={<ArrowLeft className="size-4" />}>
              Back to Home
            </Button>
            <Button href="/photos" variant="outline" size="lg">
              View Photos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
