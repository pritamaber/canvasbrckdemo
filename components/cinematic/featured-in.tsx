"use client";

import { Reveal } from "@/components/motion";
import { pressLogos } from "@/lib/content";

export function CFeaturedIn() {
  return (
    <section className="border-y border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow text-ivory/40">As featured in</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {pressLogos.map((name) => (
              <span
                key={name}
                className="font-serif text-xl italic text-ivory/35 transition-colors duration-300 hover:text-brass-soft sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
