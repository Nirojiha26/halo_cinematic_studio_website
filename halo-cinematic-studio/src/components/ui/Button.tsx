import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "outline-dark" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-card border font-extrabold uppercase tracking-[0.14em] whitespace-nowrap select-none " +
  "transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-(--ease-cinema) " +
  "hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Primary CTA: HALO red → crisp ink black on hover
  primary:
    "border-brand bg-brand text-white hover:border-ink hover:bg-ink hover:shadow-[0_12px_28px_-12px_rgba(10,10,11,0.38)]",
  // High-contrast ink button → HALO red on hover
  dark: "border-ink bg-ink text-white hover:border-brand hover:bg-brand hover:shadow-[0_12px_28px_-12px_rgba(237,23,31,0.35)]",
  // Editorial outline on light surfaces
  outline: "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
  // Editorial outline on dark contrast sections
  "outline-dark": "border-white/35 bg-transparent text-white hover:border-brand hover:bg-brand hover:text-white",
  ghost: "border-transparent bg-transparent text-ink hover:text-brand px-0!",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[11px]",
  lg: "h-13 px-7 text-xs",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Optional trailing icon; nudges right on hover. */
  icon?: ReactNode;
};

type LinkButtonProps = CommonProps & { href: string; external?: boolean } & Omit<
    ComponentProps<"a">,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

function Inner({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      {icon ? (
        <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">
          {icon}
        </span>
      ) : null}
    </>
  );
}

export function Button({ variant, size, className, children, icon, ...props }: ButtonProps) {
  const classes = buttonClasses({ variant, size, className });
  const content = <Inner icon={icon}>{children}</Inner>;

  if (typeof props.href === "string") {
    const { href, external, ...rest } = props as Omit<LinkButtonProps, keyof CommonProps>;
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      const newTab = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
      return (
        <a href={href} className={classes} {...newTab} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const { type, ...rest } = props as Omit<NativeButtonProps, keyof CommonProps>;
  return (
    <button type={type ?? "button"} className={classes} {...rest}>
      {content}
    </button>
  );
}
