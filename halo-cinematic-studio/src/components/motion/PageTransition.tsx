import { ViewTransition, type ReactNode } from "react";

/**
 * Subtle fade/rise between routes using React's <ViewTransition> (browser
 * View Transitions API). Zero client JS; unsupported browsers just swap pages.
 * Must be used inside each page (layouts persist, so enter/exit never fire there).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}

