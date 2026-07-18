"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { EASE } from "@/components/motion";

/**
 * A horizontally swipable strip of design images with arrow controls and a
 * click-to-open lightbox. Plain <img> (lazy) is used deliberately — a single
 * portfolio category holds 40–60 images, so the built-in optimizer would be a
 * bottleneck for what is essentially a scrolling contact sheet.
 */
export function GalleryStrip({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollByCards = useCallback((dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.82, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (dir: number) =>
      setLightbox((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      ),
    [images.length],
  );

  // keyboard control while the lightbox is open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, step]);

  return (
    <>
      <div className="group/strip relative">
        <div
          ref={trackRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox(i)}
              className="group/card relative aspect-[3/4] w-[72vw] shrink-0 snap-start overflow-hidden rounded-sm bg-white/5 sm:w-[46vw] md:w-[30vw] lg:w-[23rem]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} design ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover/card:bg-ink/15" />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-brass-soft opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover/card:opacity-100">
                View
              </span>
            </button>
          ))}
        </div>

        {/* arrows */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCards(-1)}
          className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/70 text-ivory/80 backdrop-blur-sm transition-all duration-300 hover:border-brass hover:text-brass-soft md:grid"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollByCards(1)}
          className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/70 text-ivory/80 backdrop-blur-sm transition-all duration-300 hover:border-brass hover:text-brass-soft md:grid"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setLightbox(null)}
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
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative flex max-h-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[lightbox]}
                alt={`${title} design ${lightbox + 1}`}
                className="max-h-[82vh] w-auto rounded-sm object-contain"
              />
              <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory/50">
                {title} · {lightbox + 1} / {images.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
