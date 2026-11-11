import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";

/** Camera-viewfinder corner brackets in black & HALO red. */
export function ViewfinderCorners({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-4 sm:inset-6", className)}>
      <span className="absolute top-0 left-0 size-5 border-t-2 border-l-2 border-brand" />
      <span className="absolute top-0 right-0 size-5 border-t-2 border-r-2 border-ink/80" />
      <span className="absolute bottom-0 left-0 size-5 border-b-2 border-l-2 border-ink/80" />
      <span className="absolute right-0 bottom-0 size-5 border-r-2 border-b-2 border-brand" />
    </div>
  );
}

/**
 * Architectural studio plate showcasing the original HALO logo cleanly on a
 * crisp white gallery mat framed by subtle black viewfinder details.
 */
export function LogoPanel({
  className,
  children,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  preload = false,
  caption = siteConfig.tagline,
}: {
  className?: string;
  children?: ReactNode;
  sizes?: string;
  preload?: boolean;
  caption?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-card border border-line-strong bg-canvas shadow-[0_24px_54px_-32px_rgba(10,10,11,0.22)]",
        className,
      )}
    >
      {/* Top viewfinder bar */}
      <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-3 text-[10px] font-bold tracking-[0.22em] text-muted uppercase">
        <span className="flex items-center gap-2 text-ink">
          <span className="inline-block size-2 rounded-full bg-brand" aria-hidden />
          Studio Mark
        </span>
        <span>24FPS • RAW</span>
      </div>

      {/* Crisp white stage — shows every detail and outline of logo.png cleanly */}
      <div className="relative grid min-h-[260px] flex-1 place-items-center bg-[radial-gradient(circle_at_center,#fff_55%,#f6f5f3_100%)] p-8 sm:min-h-[330px] sm:p-12">
        <ViewfinderCorners />
        <Logo sizes={sizes} preload={preload} className="relative w-[84%] max-w-[440px]" />
        {children}
      </div>

      {/* Bottom architectural strip */}
      <div className="flex items-center justify-between border-t border-line bg-canvas px-5 py-3 text-[10px] font-bold tracking-[0.24em] text-subtle uppercase">
        <span>{caption}</span>
        <span className="text-ink">{siteConfig.contact.phoneDisplay}</span>
      </div>
    </div>
  );
}
