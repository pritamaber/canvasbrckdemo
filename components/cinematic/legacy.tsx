"use client";

import Image from "next/image";
import { Parallax, Reveal } from "@/components/motion";
import { legacy } from "@/lib/content";

export function CLegacy() {
  return (
    <section
      id="legacy"
      className="relative overflow-hidden bg-ink py-28 scroll-mt-20 md:py-40"
    >
      {/* ghost year */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 select-none font-serif text-[38vw] leading-none text-ivory/[0.03]"
      >
        1974
      </span>

      <div className="container-x relative grid gap-20 lg:grid-cols-[1fr_1.1fr]">
        {/* left — intro + image */}
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              {legacy.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory sm:text-6xl">
              {legacy.heading}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/60">
              {legacy.intro}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-14 max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full border border-brass/25" />
            <div className="relative overflow-hidden">
              <Parallax range={30}>
                <Image
                  src={legacy.image}
                  alt={legacy.imageCaption}
                  width={900}
                  height={1100}
                  className="scale-110 object-cover"
                />
              </Parallax>
            </div>
            <p className="mt-4 text-xs tracking-wide text-ivory/40">
              {legacy.imageCaption}
            </p>
          </Reveal>
        </div>

        {/* right — timeline */}
        <div className="relative border-l border-white/10 pl-10 sm:pl-14">
          {legacy.timeline.map((t, i) => (
            <Reveal key={t.year} delay={0.1 * i} className="relative pb-16 last:pb-0">
              <span className="absolute -left-[45px] top-3 h-2 w-2 rotate-45 bg-brass sm:-left-[61px]" />
              <p className="font-serif text-5xl text-brass-soft sm:text-6xl">
                {t.year}
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.22em] text-ivory">
                {t.title}
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ivory/55">
                {t.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
