import Link from "next/link";
import { ArrowUpRight, Camera, Flower2, Film, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { EditorialPhoto } from "@/components/shared/EditorialPhoto";
import { Reveal } from "@/components/motion/Reveal";
import { homePhotos } from "@/data/homePhotos";

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

const services = [
  { title: "Wedding Photography", description: "The big feelings, the small gestures, and everything that makes the day yours.", href: "/packages?category=weddings", icon: Camera },
  { title: "Engagement & Registration", description: "An intimate beginning, captured with warmth and a sense of who you are.", href: "/packages?category=engagement", icon: Users },
  { title: "Puberty Ceremony", description: "Family, tradition and a meaningful milestone, remembered with care.", href: "/packages?category=puberty", icon: Flower2 },
  { title: "Event Photography", description: "The people, atmosphere and spontaneous moments that bring your occasion to life.", href: "/packages?category=events", icon: Camera },
  { title: "Portrait Photography", description: "Thoughtful portraits with room for your own personality to shine.", href: "/contact?service=Portrait%20Photography", icon: Users },
  { title: "Cinematography", description: "Movement, sound and emotion, woven into a film to return to.", href: "/contact?service=Cinematography", icon: Film },
];

export function EditorialServices() {
  return <section className="editorial-section services-section" aria-labelledby="services-heading"><Container>
    <div className="editorial-section-head"><div><p className="editorial-label">What we capture</p><h2 id="services-heading" className="editorial-heading">Every Occasion Deserves<br />Its Own <em>Story.</em></h2></div><Link href="/packages" className="editorial-text-link">Discover Our Packages <ArrowUpRight size={17} /></Link></div>
    <div className="services-editorial">
      <Reveal className="services-feature"><EditorialPhoto {...homePhotos.services} /><span className="service-image-caption">Together, in every chapter.</span></Reveal>
      <div className="service-list">{services.map((service, index) => <Reveal key={service.title} as="article" className="service-row" delay={index * 0.03}><span className="service-number">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p><Link href={service.href}>View More <ArrowUpRight size={14} /></Link></div><service.icon size={20} strokeWidth={1} aria-hidden /></Reveal>)}</div>
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
