import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
import { PhotosPreview } from "@/components/sections/PhotosPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageTransition } from "@/components/motion/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <AboutPreview />
      <PackagesPreview />
      <PhotosPreview />
      <ContactCTA />
    </PageTransition>
  );
}
