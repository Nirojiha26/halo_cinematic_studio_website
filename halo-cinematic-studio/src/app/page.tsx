import { Hero } from "@/components/sections/Hero";
import { StudioStory, EditorialServices, EditorialPortfolio, StudioApproach } from "@/components/sections/EditorialHome";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageTransition } from "@/components/motion/PageTransition";
export default function HomePage() {
  return <PageTransition><div className="home-editorial"><Hero /><StudioStory /><EditorialServices /><EditorialPortfolio /><StudioApproach /><ContactCTA /></div></PageTransition>;
}
