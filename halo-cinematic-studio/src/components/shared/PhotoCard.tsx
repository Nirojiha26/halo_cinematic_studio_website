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
  const isPortrait = !photo.category.endsWith("Packages");

  const frame = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF7F1]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className={cn(
            "transition-transform duration-500 ease-out group-hover:scale-[1.04]",
            isPortrait ? "object-cover object-top" : "object-contain p-2",
          )}
        />
        {/* Soft hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span
          aria-hidden
          className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-white/90 text-[#D71920] opacity-0 shadow-md backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100"
        >
          <Maximize2 className="size-4" />
        </span>
      </div>

      <div className="border-t border-[#D8CFC1] bg-[#FAF7F1] p-4">
        <p className="text-[11px] font-semibold text-[#D71920]">
          {photo.category}
        </p>
        <h3
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="mt-1 text-base font-semibold text-[#171716] transition-colors group-hover:text-[#D71920]"
        >
          {photo.title}
        </h3>
        <p className="mt-0.5 text-xs text-[#716B64]">{photo.subtitle}</p>
      </div>
    </>
  );

  const cardClasses =
    "group block w-full overflow-hidden rounded-[20px] border border-[#D8CFC1] bg-[#FAF7F1] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D71920]/60 hover:shadow-md";

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
