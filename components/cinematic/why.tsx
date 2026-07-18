"use client";

import { Reveal } from "@/components/motion";
import { whyItems } from "@/lib/content";

export function CWhy() {
  return (
    <section className="bg-charcoal py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              Why Canvas &amp; Brick
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
              Chosen for the way we build, kept for the way we keep our word.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
              Most studios design. A few manufacture. Almost none have done both,
              in the same neighbourhood, for fifty years.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((w, i) => (
            <Reveal
              key={w.title}
              delay={0.06 * i}
              className="group bg-charcoal p-8 transition-colors duration-500 hover:bg-umber lg:p-10"
            >
              <div className="flex items-start justify-between">
                <w.icon
                  size={26}
                  strokeWidth={1.25}
                  className="text-brass transition-transform duration-500 group-hover:-translate-y-1"
                />
                <span className="font-serif text-sm text-ivory/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-base font-bold text-ivory">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                {w.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
