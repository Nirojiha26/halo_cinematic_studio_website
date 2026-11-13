import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
export function ContactCTA() {
  return <section className="editorial-cta" aria-labelledby="cta-heading"><Container>
    <p className="editorial-label">Let&apos;s make memories</p>
    <h2 id="cta-heading">Your Story Deserves<br />to Be <em>Captured.</em></h2>
    <p>Let&apos;s create something beautiful together. Tell us about your special occasion.</p>
    <div className="editorial-actions"><Link href="/booking" className="editorial-button">Book Your Session <ArrowUpRight size={17} /></Link><Link href="/contact" className="editorial-text-link">Contact Us <ArrowUpRight size={17} /></Link></div>
  </Container></section>;
}
