import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import type { StudioPhoto } from "@/data/photos";
import { cn } from "@/lib/utils";

export function PhotoCard({
  photo,
  onSelect,
  href,
  sizes = "(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 94vw",
}: {
  photo: StudioPhoto;
  onSelect?: (photo: StudioPhoto) => void;
  href?: string;
  sizes?: string;
}) {
  const isPortrait = photo.category === "Wedding Portraits";

  const frame = (
    <>
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden",
          isPortrait ? "bg-paper" : "bg-paper",
        )}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className={cn(
            "transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            isPortrait ? "object-cover object-top" : "object-contain p-1.5",
          )}
        />
        <span
          aria-hidden
          className="absolute top-3 right-3 grid size-8 place-items-center rounded-pill border border-white/30 bg-ink/80 text-white opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100"
        >
          <Maximize2 className="size-3.5" />
        </span>
      </div>

      <div className="border-t border-line bg-canvas p-4">
        <p className="text-[10px] font-bold tracking-[0.2em] text-brand uppercase">
          {photo.category}
        </p>
        <h3 className="mt-1 font-display text-base font-black uppercase leading-snug text-ink transition-colors group-hover:text-brand">
          {photo.title}
        </h3>
        <p className="mt-0.5 text-xs text-muted">{photo.subtitle}</p>
      </div>
    </>
  );

  const cardClasses =
    "group block w-full overflow-hidden rounded-card border border-line-strong bg-canvas text-left transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_20px_42px_-24px_rgba(10,10,11,0.28)]";

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(photo)}
        className={cn(cardClasses, "cursor-pointer")}
        aria-label={`Open ${photo.title} in lightbox`}
      >
        {frame}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {frame}
      </Link>
    );
  }

  return <article className={cardClasses}>{frame}</article>;
}

