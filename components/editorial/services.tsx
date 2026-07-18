"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { ESectionHeader } from "@/components/editorial/section-header";
import { services } from "@/lib/content";

export function EServices() {
  return (
    <section id="services" className="py-24 scroll-mt-16 md:py-36">
      <div className="container-x">
        <ESectionHeader
          number="03"
          label="Services"
          heading="Every discipline a home needs, under one roof."
          intro="Design, manufacturing and site execution as a single accountable team — the way it has worked in this family since 1974."
        />

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i}>
              <a href="#contact" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={s.imageE}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] ${
                      s.comingSoon ? "saturate-[0.65]" : ""
                    }`}
                  />
                  {s.comingSoon && (
                    <span className="absolute left-4 top-4 rounded-full bg-charcoal px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-ivory">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-charcoal transition-colors duration-300 group-hover:text-walnut">
                    {s.name}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-charcoal/35 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-walnut"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {s.blurb}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
