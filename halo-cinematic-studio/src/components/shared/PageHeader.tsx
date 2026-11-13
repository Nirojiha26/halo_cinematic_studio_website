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
      className="bg-[#EEE9DF] relative border-b border-[#D8CFC1] pt-32 pb-16 sm:pt-36 sm:pb-20"
    >
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {eyebrow ? <p className="chip-eyebrow mb-4">{eyebrow}</p> : null}
          <h1
            id="page-title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
            className="text-4xl font-normal text-[#171716] sm:text-5xl lg:text-6xl"
          >
            {title}
            {highlight ? <span className="text-[#D71920] italic font-serif"> {highlight}</span> : null}
          </h1>
          <p
            className="mt-5 max-w-2xl text-base font-normal text-[#716B64] sm:text-lg leading-relaxed"
          >
            {description}
          </p>
          {action ? <div className="mt-8 flex flex-wrap gap-3.5">{action}</div> : null}
        </div>
      </Container>
    </section>
  );
}
