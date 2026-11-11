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
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FFF5F4]">
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
          className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-white/90 text-[#DC3530] opacity-0 shadow-md backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100"
        >
          <Maximize2 className="size-4" />
        </span>
      </div>

      <div className="border-t border-[rgba(20,20,20,0.06)] bg-white p-4">
        <p className="text-[11px] font-semibold text-[#DC3530]">
          {photo.category}
        </p>
        <h3
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="mt-1 text-base font-semibold text-[#141414] transition-colors group-hover:text-[#DC3530]"
        >
          {photo.title}
        </h3>
        <p className="mt-0.5 text-xs text-[#5F5A5A]">{photo.subtitle}</p>
      </div>
    </>
  );

  const cardClasses =
    "group block w-full overflow-hidden rounded-[20px] border border-[rgba(20,20,20,0.08)] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(220,53,48,0.25)] hover:shadow-[0_16px_36px_rgba(220,53,48,0.12)]";

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
