"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion";
import { ESectionHeader } from "@/components/editorial/section-header";
import { craft } from "@/lib/content";

export function ECraft() {
  return (
    <section id="craft" className="py-24 scroll-mt-16 md:py-36">
      <div className="container-x">
        <ESectionHeader
          number="05"
          label="Craftsmanship & materials"
          heading={craft.heading}
          intro={craft.intro}
        />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {craft.materials.slice(0, 4).map((m, i) => (
            <Reveal key={m.name} delay={0.06 * i}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={m.imageE}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-sm font-bold text-charcoal">{m.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal/50">
                    {m.note}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* film band — a real Floorsy-style walkthrough */}
        <Reveal className="mt-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[16/9] lg:aspect-[2.4/1]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={craft.filmE}
              poster={craft.filmPosterE}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory/90">
              {craft.filmCaptionE}
            </p>
          </div>
        </Reveal>

        {/* pull quote */}
        <Reveal className="mx-auto mt-24 max-w-2xl text-center">
          <span className="mx-auto block h-10 w-px bg-brass" />
          <blockquote className="mt-8 font-serif text-2xl italic leading-snug text-walnut sm:text-3xl">
            {craft.quote}
          </blockquote>
          <p className="eyebrow mt-6 text-charcoal/45">
            {craft.quoteAttribution}
          </p>
          <span className="mx-auto mt-8 block h-10 w-px bg-brass" />
        </Reveal>
      </div>
    </section>
  );
}
