"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "@/components/lightbox";

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

      <Lightbox
        images={images}
        index={lightbox}
        alt={`${title} design`}
        caption={
          lightbox !== null
            ? `${title} · ${lightbox + 1} / ${images.length}`
            : null
        }
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </>
  );
}
