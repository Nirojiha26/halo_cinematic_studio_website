/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Two-digit index label, e.g. 1 -> "01". */
export function pad2(n: number) {
  return String(n).padStart(2, "0");
}

/** Whether a nav item should be marked as the current page. */
export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
