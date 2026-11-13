import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";

/**
 * Elegant studio logo presentation on a soft white card with subtle red glow.
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
        "relative flex flex-col overflow-hidden rounded-[24px] border border-[rgba(20,20,20,0.08)] bg-white p-8 shadow-[0_12px_32px_rgba(217,11,23,0.10)] sm:p-12",
        className,
      )}
    >
      {/* Soft corner red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-[radial-gradient(circle,rgba(217,11,23,0.16)_0%,transparent_70%)]"
      />

      <div className="relative z-10 flex min-h-[240px] flex-col items-center justify-center text-center">
        <Logo sizes={sizes} preload={preload} className="relative w-[84%] max-w-[380px] drop-shadow-sm" />
        {children}
        <p className="mt-6 text-xs font-medium text-[#625C5D]">{caption}</p>
      </div>
    </div>
  );
}
