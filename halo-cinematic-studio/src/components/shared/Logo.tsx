import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Responsive sizes hint for next/image. */
  sizes: string;
  /** Preload as the LCP image (use once per page, e.g. the hero). */
  preload?: boolean;
  /** Load immediately without preloading (above-the-fold but not LCP). */
  eager?: boolean;
  alt?: string;
};

/** The original HALO CINEMATIC STUDIO logo artwork (unchanged). */
export function Logo({ className, sizes, preload, eager, alt = siteConfig.logo.alt }: LogoProps) {
  return (
    <Image
      src={siteConfig.logo.src}
      width={siteConfig.logo.width}
      height={siteConfig.logo.height}
      alt={alt}
      sizes={sizes}
      preload={preload}
      loading={!preload && eager ? "eager" : undefined}
      className={cn("h-auto object-contain", className)}
    />
  );
}
