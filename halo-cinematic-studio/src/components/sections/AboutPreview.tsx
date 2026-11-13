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
    <section className="section-white py-[var(--space-section)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — manifesto card */}
          <div className="order-2 lg:order-1">
            <div
              className="relative h-full overflow-hidden rounded-[24px] border border-[rgba(20,20,20,0.08)] bg-white p-6 shadow-sm sm:p-8"
            >
              {/* soft red top-glow */}
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(217,11,23,0.14) 0%, transparent 70%)",
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  fontSize: 13,
                  color: "#B50812",
                  marginBottom: 24,
                }}
              >
                Capture · Create · Inspire
              </p>

              <ul>
                {pillars.map((item, i) => (
                  <li
                    key={item.no}
                    className={`grid grid-cols-[3.25rem_1fr] gap-4 py-5 ${
                      i < pillars.length - 1
                        ? "border-b border-[rgba(20,20,20,0.08)]"
                        : ""
                    }`}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        color: "#B50812",
                        flexShrink: 0,
                        paddingTop: 1,
                      }}
                    >
                      {item.no}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 600,
                          fontSize: 15,
                          color: "#141414",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400,
                          fontSize: 13,
                          color: "#625C5D",
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
          <div className="order-1 lg:order-2 max-w-xl">
            <p className="chip-eyebrow mb-4">Who We Are</p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
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
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: 17,
                color: "var(--muted)",
                marginTop: 20,
                lineHeight: 1.65,
              }}
            >
              HALO CINEMATIC STUDIO is a creative photography and film production studio focused on
              telling meaningful stories through powerful visuals.
            </p>
            <p
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: 17,
                color: "var(--muted)",
                marginTop: 20,
                lineHeight: 1.65,
              }}
            >
              From the emotion of a wedding day to the energy of a music video, we bring creativity,
              care and cinematic detail to every project.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
