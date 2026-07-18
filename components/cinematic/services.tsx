"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/content";

export function CServices() {
  return (
    <section id="services" className="bg-ink py-28 scroll-mt-20 md:py-36">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow flex items-center gap-4 text-brass-soft">
            <span className="h-px w-10 bg-brass/60" />
            What we do
          </p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
            Every discipline a home needs, under one roof.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-white/8">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={0.04 * i}>
              <a
                href="#contact"
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/8 py-7 transition-colors duration-500 sm:gap-10 md:py-9"
              >
                <span className="w-8 font-serif text-sm text-ivory/30">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <h3 className="font-serif text-2xl text-ivory transition-colors duration-500 group-hover:text-brass-soft sm:text-3xl md:text-4xl">
                    {s.name}
                  </h3>
                  {s.comingSoon && (
                    <span className="rounded-full border border-brass/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-brass-soft">
                      Coming soon
                    </span>
                  )}
                  <p className="hidden w-full max-w-md text-sm leading-relaxed text-ivory/45 xl:block">
                    {s.blurb}
                  </p>
                </div>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.25}
                  className="text-ivory/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brass-soft"
                />

                {/* hover image */}
                <span className="pointer-events-none absolute right-[12%] top-1/2 z-10 hidden h-44 w-64 -translate-y-1/2 scale-95 overflow-hidden opacity-0 shadow-2xl shadow-black/50 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 lg:block">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="256px"
                    className="object-cover"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
