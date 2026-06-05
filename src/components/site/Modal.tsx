"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Placement = "center" | "top" | "right";

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

const overlayAlign: Record<Placement, string> = {
  center: "items-center justify-center p-4",
  top: "items-start justify-center p-4 pt-[12vh]",
  right: "items-stretch justify-end",
};

/**
 * Accessible modal primitive — shared by the lightbox, command palette, and
 * mobile nav. Handles: role="dialog" + aria-modal, focus trap, scroll lock,
 * Esc to close, backdrop click to dismiss, and focus restoration to the
 * trigger on close. Open/close transition respects reduced motion and stays
 * under 200ms. Children render the panel; `placement` aligns the overlay.
 */
export function Modal({
  open,
  onClose,
  label,
  labelledBy,
  placement = "center",
  panelClassName = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  /** aria-label for the dialog (use when there's no visible title). */
  label?: string;
  /** id of a visible title element (preferred when one exists). */
  labelledBy?: string;
  placement?: Placement;
  panelClassName?: string;
  children: ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
      );

    const raf = requestAnimationFrame(() => {
      const f = focusables();
      (f[0] ?? panelRef.current)?.focus();
    });

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const f = focusables();
      if (f.length === 0) {
        e.preventDefault();
        panelRef.current?.focus();
        return;
      }
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreRef.current?.focus?.();
    };
  }, [open, onClose]);

  const dur = reduced ? 0 : 0.18;
  const slide = placement === "right";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`fixed inset-0 z-50 flex ${overlayAlign[placement]} bg-black/60 backdrop-blur-sm`}
          initial={{ opacity: reduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reduced ? 1 : 0 }}
          transition={{ duration: dur }}
          // backdrop click (only when the overlay itself is the target)
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={labelledBy ? undefined : label}
            aria-labelledby={labelledBy}
            tabIndex={-1}
            initial={
              reduced
                ? false
                : slide
                  ? { x: "100%" }
                  : { opacity: 0, scale: 0.97, y: 8 }
            }
            animate={slide ? { x: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={
              reduced
                ? undefined
                : slide
                  ? { x: "100%" }
                  : { opacity: 0, scale: 0.97, y: 8 }
            }
            transition={{ duration: dur, ease: "easeOut" }}
            className={`outline-none ${panelClassName}`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
