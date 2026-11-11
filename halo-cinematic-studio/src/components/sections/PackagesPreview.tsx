import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredPackages, packageCategories } from "@/data/packages";
import { Reveal } from "@/components/motion/Reveal";
import { PackageCard } from "@/components/shared/PackageCard";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PackagesPreview() {
  return (
    <Section tone="canvas" labelledBy="home-packages-heading">
      <Container>
        <SectionHeading
          id="home-packages-heading"
          eyebrow="Transparent Pricing"
          title="Studio"
          highlight="Packages"
          description="Signature photography, 4K cinematography, handcrafted albums, and framed prints designed for every milestone."
          action={
            <Button
              href="/packages"
              variant="outline"
              size="md"
              icon={<ArrowRight className="size-4" />}
            >
              View All Packages
            </Button>
          }
        />

        {/* Quick category links */}
        <div className="mb-8 flex flex-wrap gap-2.5">
          {packageCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/packages?category=${cat.slug}`}
              className="inline-flex items-center gap-2 rounded-pill border border-line-strong bg-canvas px-4 py-2 text-xs font-bold tracking-[0.14em] text-ink uppercase transition-colors hover:border-brand hover:text-brand"
            >
              <span className="size-1.5 rounded-full bg-brand" aria-hidden />
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredPackages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={Math.min(i * 0.06, 0.24)}>
              <PackageCard pkg={pkg} index={i} showCategoryBadge />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
