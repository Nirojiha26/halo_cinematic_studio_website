import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "btn-grad",
  outline: "btn-outline",
  dark: "btn-grad",
  ghost: "bg-transparent border-transparent text-[#E50919] hover:opacity-80",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-13 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
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
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "font-medium transition-[transform,filter,background] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button({ variant, size, className, children, icon, ...props }: ButtonProps) {
  const classes = buttonClasses({ variant, size, className });

  const content = (
    <>
      <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500 }}>{children}</span>
      {icon ? <span aria-hidden className="ml-2">{icon}</span> : null}
    </>
  );

  if (typeof (props as LinkButtonProps).href === "string") {
    const { href, external, ...rest } = props as Omit<LinkButtonProps, keyof CommonProps>;
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      const newTab = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
      return (
        <a href={href} className={classes} {...newTab} {...(rest as ComponentProps<"a">)}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(rest as Omit<ComponentProps<typeof Link>, "href">)}>
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
