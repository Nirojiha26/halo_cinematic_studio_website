import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { EditorialPhoto } from "@/components/shared/EditorialPhoto";
import { Reveal } from "@/components/motion/Reveal";
import { homePhotos } from "@/data/homePhotos";
export { EditorialServices } from "./ServicesShowcase";

export function StudioStory() {
  return <section className="editorial-section" id="our-story" aria-labelledby="story-heading"><Container>
    <div className="story-grid">
      <Reveal><figure className="story-image"><EditorialPhoto {...homePhotos.story} /><figcaption>A little closer. A little more you.</figcaption></figure></Reveal>
      <Reveal className="story-copy">
        <p className="editorial-label">Our story</p>
        <h2 id="story-heading" className="editorial-heading">Behind Every<br />Beautiful <em>Frame.</em></h2>
        <h3>Passion in Every Detail.<br />Purpose in Every Story.</h3>
        <p>Based in Nelliady, HALO Cinematic Studio is a creative photography and cinematography studio dedicated to capturing meaningful memories.</p>
        <p>From the energy of a celebration to the quiet moments in between, we bring care, creativity and a considered eye to your story. Photographs to hold close. Films to feel all over again.</p>
        <Link href="/about" className="editorial-text-link">Explore Our Story <ArrowUpRight size={17} /></Link>
      </Reveal>
    </div>
  </Container></section>;
}



const moments = [
  { ...homePhotos.portfolio1, label: "The connection", type: "Wedding portraits", href: "/photos?collection=Wedding%20Portraits" },
  { ...homePhotos.portfolio2, label: "A moment of her own", type: "Portraits", href: "/photos?collection=Portraits" },
  { ...homePhotos.portfolio3, label: "The quiet joy", type: "Togetherness", href: "/photos" },
];
export function EditorialPortfolio() {
  return <section className="editorial-section" aria-labelledby="portfolio-heading"><Container>
    <div className="editorial-section-head"><div><p className="editorial-label">Selected moments</p><h2 id="portfolio-heading" className="editorial-heading">Stories We&apos;ve <em>Captured.</em></h2></div><p className="section-intro">Real emotions. Beautiful connections.<br />Memories that stay forever.</p></div>
    <div className="portfolio-editorial">{moments.map((photo, i) => <Reveal key={photo.src} as="figure" className={`portfolio-piece portfolio-piece-${i}`}><Link href={photo.href} aria-label={`View ${photo.type}`}><EditorialPhoto src={photo.src} alt={photo.alt} position={photo.position} /><figcaption><h3>{photo.label}</h3><span>{photo.type} <ArrowUpRight size={14} /></span></figcaption></Link></Reveal>)}</div>
    <div className="portfolio-bottom"><span>Every photograph, a feeling kept.</span><Link className="editorial-button" href="/photos">View Full Gallery <ArrowUpRight size={17} /></Link></div>
  </Container></section>;
}

export function StudioApproach() {
  return <section className="editorial-section approach-section" aria-labelledby="approach-heading"><Container>
    <div className="approach-top"><div><p className="editorial-label">The HALO experience</p><h2 id="approach-heading" className="editorial-heading">More Than Just<br /><em>Photography.</em></h2></div><EditorialPhoto {...homePhotos.approach} /></div>
    <div className="approach-steps">{[
      ["Understand the Story", "We take time to understand your vision and what makes your occasion special."],
      ["Capture the Emotion", "We focus on genuine expressions, meaningful details and unforgettable moments."],
      ["Preserve the Memories", "We transform beautiful moments into timeless photographs and cinematic films."],
    ].map(([title, body], i) => <Reveal as="article" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
  </Container></section>;
}
