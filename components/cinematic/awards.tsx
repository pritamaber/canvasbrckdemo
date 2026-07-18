"use client";

import { Award } from "lucide-react";
import { Reveal } from "@/components/motion";
import { awards } from "@/lib/content";

export function CAwards() {
  return (
    <section id="awards" className="bg-ink py-28 scroll-mt-20 md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              Recognition
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-6xl">
              Work the industry keeps noticing.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
              We build for our clients first — the awards are a happy
              by-product of doing the quiet work well.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={0.06 * i}>
              <div className="flex h-full gap-5 bg-ink p-8 md:p-10">
                <Award
                  size={26}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-brass"
                />
                <div>
                  <p className="font-serif text-3xl text-brass-soft">{a.year}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-ivory">
                    {a.title}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ivory/55">
                    {a.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
