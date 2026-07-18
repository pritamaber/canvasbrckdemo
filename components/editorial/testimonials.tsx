"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EASE, Reveal } from "@/components/motion";
import { testimonials } from "@/lib/content";

export function ETestimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const step = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-36">
      <div className="container-x max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow flex items-baseline justify-center gap-3 text-charcoal/45">
            <span className="font-serif text-base italic text-walnut">08</span>
            — Client words
          </p>
        </Reveal>

        <div className="relative mt-12 min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <blockquote className="mx-auto max-w-3xl font-serif text-2xl leading-snug text-charcoal sm:text-3xl md:text-4xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-walnut">
                  {t.name}
                </p>
                <p className="mt-1.5 text-xs text-charcoal/50">{t.meta}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            aria-label="Previous testimonial"
            onClick={() => step(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 text-charcoal/60 transition-all duration-300 hover:border-charcoal hover:text-charcoal"
          >
            <ChevronLeft size={17} strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-7 bg-brass" : "w-1.5 bg-charcoal/20"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => step(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 text-charcoal/60 transition-all duration-300 hover:border-charcoal hover:text-charcoal"
          >
            <ChevronRight size={17} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
