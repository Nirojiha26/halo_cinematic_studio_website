import { WhatsAppButton } from "./WhatsAppButton";

/** Bottom-right floating WhatsApp shortcut (never overlaps bottom-left copy). */
export function FloatingActions() {
  return (
    <div
      style={{ viewTransitionName: "floating-ui" }}
      className="pointer-events-none fixed right-4 bottom-4 z-[900] flex items-center sm:right-6 sm:bottom-6"
    >
      <WhatsAppButton />
    </div>
  );
}
