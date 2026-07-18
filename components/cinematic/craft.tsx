"use client";

import Image from "next/image";
import { Parallax, Reveal } from "@/components/motion";
import { craft } from "@/lib/content";

export function CCraft() {
  return (
    <section id="craft" className="bg-ink scroll-mt-20">
      {/* parallax quote band */}
      <div className="relative flex min-h-[70vh] items-center overflow-hidden">
        <Parallax range={90} className="absolute inset-0 -top-24 -bottom-24">
          <Image
            src={craft.bandImage}
            alt="Workshop tools at Canvas & Brick"
            fill
            sizes="100vw"
            className="scale-110 object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-x relative py-32">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl text-center font-serif text-3xl leading-snug text-ivory sm:text-5xl">
              {craft.quote}
            </blockquote>
            <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-brass-soft">
              {craft.quoteAttribution}
            </p>
          </Reveal>
        </div>
      </div>

      {/* materials grid */}
      <div className="container-x py-28 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              {craft.eyebrow}
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
              {craft.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
              {craft.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {craft.materials.map((m, i) => (
            <Reveal key={m.name} delay={0.05 * i}>
              <figure className="group relative aspect-square overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-xl text-ivory">{m.name}</p>
                  <p className="mt-1.5 max-h-0 overflow-hidden text-xs leading-relaxed text-ivory/60 transition-all duration-500 group-hover:max-h-12">
                    {m.note}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
