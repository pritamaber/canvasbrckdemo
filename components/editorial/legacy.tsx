"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion";
import { legacy } from "@/lib/content";

export function ELegacy() {
  return (
    <section id="legacy" className="py-24 scroll-mt-16 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* sticky intro */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow flex items-baseline gap-3 text-charcoal/45">
              <span className="font-serif text-base italic text-walnut">01</span>
              — Our legacy
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-charcoal sm:text-5xl">
              From a timber yard in Rajarhat to Eastern India’s most considered
              interiors.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/65">
              {legacy.intro}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-12 max-w-sm">
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-sand" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={legacy.image}
                alt={legacy.imageCaption}
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="relative mt-4 text-xs tracking-wide text-charcoal/45">
              {legacy.imageCaption}
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="relative border-l border-charcoal/15 pl-10 sm:pl-14 lg:mt-10">
          {legacy.timeline.map((t, i) => (
            <Reveal key={t.year} delay={0.08 * i} className="relative pb-16 last:pb-0">
              <span className="absolute -left-[45px] top-4 h-2.5 w-2.5 rounded-full bg-brass sm:-left-[61px]" />
              <p className="font-serif text-5xl text-walnut sm:text-6xl">
                {t.year}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-charcoal">
                {t.title}
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-charcoal/60">
                {t.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
