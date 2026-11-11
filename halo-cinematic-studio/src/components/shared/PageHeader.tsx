import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  action?: ReactNode;
};

/** Bright white editorial opening header for inner routes. */
export function PageHeader({ eyebrow, title, highlight, description, action }: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="gallery-backdrop relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-40 sm:pb-20"
    >
      <div
        aria-hidden
        className="lens-ring -top-12 -right-40 size-[380px] opacity-80 sm:size-[480px] lg:-right-28"
      />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="eyebrow animate-(--animate-rise) mb-4 flex items-center gap-3">
            <span aria-hidden className="h-[2px] w-8 bg-brand" />
            {eyebrow}
          </p>
          <h1
            id="page-title"
            style={{ animationDelay: "80ms" }}
            className="animate-(--animate-rise) text-4xl font-black uppercase leading-[0.98] tracking-[-0.025em] text-ink sm:text-5xl lg:text-6xl"
          >
            {title}
            {highlight ? <span className="text-accent"> {highlight}</span> : null}
          </h1>
          <p
            style={{ animationDelay: "160ms" }}
            className="animate-(--animate-rise) mt-5 max-w-2xl text-base text-body sm:text-lg"
          >
            {description}
          </p>
          {action ? (
            <div style={{ animationDelay: "230ms" }} className="animate-(--animate-rise) mt-8 flex flex-wrap gap-3.5">
              {action}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
