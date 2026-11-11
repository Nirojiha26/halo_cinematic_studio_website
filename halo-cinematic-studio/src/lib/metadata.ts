import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

/** Builds consistent per-page metadata (title, description, canonical, Open Graph). */
export function createMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: siteConfig.logo.src, width: siteConfig.logo.width, height: siteConfig.logo.height }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

