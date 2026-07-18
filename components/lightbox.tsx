"use client";

import { useCallback, useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { EASE } from "@/components/motion";

/**
 * A full-screen image zoom with prev/next, keyboard control and scroll-lock.
 * State (the open index) lives in the caller so the same component works for a
 * swipe strip and a grid.
 */
export function Lightbox({
  images,
  index,
  alt,
  caption,
  onClose,
  onNavigate,
}: {
  images: string[];
  index: number | null;
  alt: string;
  /** caption for the currently open image */
  caption?: ReactNode;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const step = useCallback(
    (dir: number) => {
      if (index === null) return;
      onNavigate((index + dir + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, step, onClose]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          onClick={onClose}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-ivory/80 transition-colors hover:border-brass hover:text-brass-soft"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-ivory/80 transition-colors hover:border-brass hover:text-brass-soft sm:left-8"
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-ivory/80 transition-colors hover:border-brass hover:text-brass-soft sm:right-8"
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index]}
              alt={alt}
              className="max-h-[82vh] w-auto rounded-sm object-contain"
            />
            {caption && (
              <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory/50">
                {caption}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
