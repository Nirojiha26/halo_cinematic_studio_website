import Image from "next/image";

export function EditorialPhoto({ src, alt, className = "", priority = false, position = "center" }: {
  src: string; alt: string; className?: string; priority?: boolean; position?: string;
}) {
  return <div className={`editorial-photo ${className}`}>
    <Image src={src} alt={alt} fill preload={priority} sizes="(min-width: 1024px) 45vw, 90vw" style={{ objectPosition: position }} />
  </div>;
}
