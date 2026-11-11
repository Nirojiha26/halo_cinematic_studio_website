import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    no: "01",
    title: "Capture",
    detail: "Unscripted emotions, quiet details and genuine moments preserved with intention.",
  },
  {
    no: "02",
    title: "Create",
    detail: "Cinematic framing, thoughtful storytelling across photography, film and music videos.",
  },
  {
    no: "03",
    title: "Inspire",
    detail: "Polished films and custom photo frames built to stand the test of time.",
  },
];

export function AboutPreview() {
  return (
    <section className="section-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT — manifesto card */}
          <div className="order-2 lg:order-1">
            <div
              className="relative overflow-hidden rounded-[24px] border border-[rgba(20,20,20,0.08)] p-8 shadow-sm"
            >
              {/* soft red top-glow */}
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(220,53,48,0.12) 0%, transparent 70%)",
                }}
              />

              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  color: "#DC3530",
                  marginBottom: 24,
                }}
              >
                Capture · Create · Inspire
              </p>

              <ul>
                {pillars.map((item, i) => (
                  <li
                    key={item.no}
                    className={`flex gap-4 py-5 ${
                      i < pillars.length - 1
                        ? "border-b border-[rgba(20,20,20,0.08)]"
                        : ""
                    }`}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        color: "#DC3530",
                        flexShrink: 0,
                        paddingTop: 1,
                      }}
                    >
                      {item.no}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 600,
                          fontSize: 15,
                          color: "#141414",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                          fontSize: 13,
                          color: "#5F5A5A",
                          marginTop: 4,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — text */}
          <div className="order-1 lg:order-2">
            <p className="chip-eyebrow">Who We Are</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 4vw, 48px)",
                color: "var(--ink)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              We make moments{" "}
              <span className="grad-text">timeless.</span>
            </h2>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                color: "var(--muted)",
                marginTop: 16,
                lineHeight: 1.65,
              }}
            >
              HALO CINEMATIC STUDIO is a creative photography and film production studio focused on
              telling meaningful stories through powerful visuals.
            </p>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                color: "var(--muted)",
                marginTop: 16,
                lineHeight: 1.65,
              }}
            >
              From the emotion of a wedding day to the energy of a music video, we bring creativity,
              care and cinematic detail to every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-grad inline-flex items-center gap-2">
                Our Story
                <ArrowRight size={16} aria-hidden />
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
