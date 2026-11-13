import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  action?: ReactNode;
};

/** Soft red & white editorial opening header for inner routes. */
export function PageHeader({ eyebrow, title, highlight, description, action }: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="hero-bg relative border-b border-[rgba(20,20,20,0.06)] pt-32 pb-16 sm:pt-36 sm:pb-20"
    >
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {eyebrow ? <p className="chip-eyebrow mb-4">{eyebrow}</p> : null}
          <h1
            id="page-title"
            style={{
              fontFamily: "var(--font-playfair), serif",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
            className="text-4xl font-semibold text-[#141414] sm:text-5xl lg:text-6xl"
          >
            {title}
            {highlight ? <span className="grad-text"> {highlight}</span> : null}
          </h1>
          <p
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            className="mt-5 max-w-2xl text-base font-normal text-[#625C5D] sm:text-lg"
          >
            {description}
          </p>
          {action ? <div className="mt-8 flex flex-wrap gap-3.5">{action}</div> : null}
        </div>
      </Container>
    </section>
  );
}
