"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EASE, Reveal } from "@/components/motion";
import { testimonials } from "@/lib/content";

export function CTestimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const step = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ink py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow flex items-center gap-4 text-brass-soft">
            <span className="h-px w-10 bg-brass/60" />
            Client words
          </p>
        </Reveal>

        <div className="relative mt-10 min-h-[280px] sm:min-h-[240px]">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-14 left-0 select-none font-serif text-[10rem] leading-none text-brass/15"
          >
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative pt-10"
            >
              <blockquote className="max-w-4xl font-serif text-2xl leading-snug text-ivory sm:text-4xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brass-soft">
                  {t.name}
                </p>
                <p className="mt-1.5 text-xs tracking-wide text-ivory/45">
                  {t.meta}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <div className="flex gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={() => step(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-ivory/70 transition-all duration-300 hover:border-brass hover:text-brass-soft"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => step(1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-ivory/70 transition-all duration-300 hover:border-brass hover:text-brass-soft"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
          <p className="font-serif text-sm italic text-ivory/40">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
