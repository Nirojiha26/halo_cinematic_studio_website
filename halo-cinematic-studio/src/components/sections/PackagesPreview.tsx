import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredPackages, packageCategories } from "@/data/packages";
import { Reveal } from "@/components/motion/Reveal";
import { PackageCard } from "@/components/shared/PackageCard";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PackagesPreview() {
  return (
    <Section tone="blush" labelledBy="home-packages-heading">
      <Container>
        <SectionHeading
          id="home-packages-heading"
          eyebrow="Transparent Pricing"
          title="Studio"
          highlight="Packages"
          description="Signature wedding photography, 4K cinematography, puberty ceremonies, and handcrafted photo albums designed for every milestone."
          action={
            <Link
              href="/packages"
              className="btn-outline inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium"
            >
              <span>View All Packages</span>
              <ArrowRight className="size-4" />
            </Link>
          }
        />

        {/* Quick category filter pills */}
        <div className="mb-12 flex flex-wrap gap-3">
          {packageCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/packages?category=${cat.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(20,20,20,0.08)] bg-white px-4 py-2 text-xs font-medium text-[#141414] shadow-xs transition-all hover:border-[#D90B17] hover:text-[#B50812]"
            >
              <span className="size-1.5 rounded-full bg-[#D90B17]" aria-hidden />
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
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
