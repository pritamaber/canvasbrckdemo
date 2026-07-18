"use client";

import { Reveal } from "@/components/motion";
import { ESectionHeader } from "@/components/editorial/section-header";
import { whyItems } from "@/lib/content";

export function EWhy() {
  return (
    <section className="bg-sky-wash/60 py-24 md:py-36">
      <div className="container-x">
        <ESectionHeader
          number="02"
          label="Why Canvas & Brick"
          heading="Chosen for the way we build. Kept for the way we keep our word."
          intro="Most studios design. A few manufacture. Almost none have done both, in the same neighbourhood, for fifty years."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((w, i) => (
            <Reveal key={w.title} delay={0.06 * i}>
              <div className="group h-full rounded-sm border border-fern/12 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(59,74,43,0.4)]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sage-soft">
                  <w.icon size={20} strokeWidth={1.4} className="text-fern" />
                </span>
                <h3 className="mt-7 text-base font-bold text-forest">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {w.body}
                </p>
                <span className="mt-6 block h-px w-0 bg-sky transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
