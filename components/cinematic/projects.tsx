"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion";
import { projects } from "@/lib/content";

/* a curated six for the cinematic edit — one per category feel */
const featured = [
  projects[0], // Ivory Residence
  projects[9], // Villa Meridian
  projects[6], // Charcoal Kitchen
  projects[3], // Atelier Forty-Seven
  projects[7], // Haque Lounge Chair
  projects[2], // Sienna Apartment
];

export function CProjects() {
  return (
    <section id="projects" className="bg-charcoal py-28 scroll-mt-20 md:py-40">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              Selected work
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-6xl">
              Six spaces, told slowly.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
              A short edit from five decades of making. The complete portfolio
              travels with us to your consultation.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-24 md:grid-cols-12">
          {featured.map((p, i) => {
            const wide = i % 2 === 0;
            return (
              <Reveal
                key={p.name}
                delay={0.05}
                className={
                  wide
                    ? "md:col-span-7"
                    : "md:col-span-5 md:mt-28"
                }
              >
                <figure className="group cursor-pointer">
                  <div
                    className={`relative overflow-hidden ${
                      wide ? "aspect-[16/11]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} — ${p.location}`}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <span className="absolute bottom-5 left-5 translate-y-3 rounded-full bg-ink/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.26em] text-brass-soft opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {p.category}
                    </span>
                  </div>
                  <figcaption className="mt-5 flex items-baseline justify-between gap-6 border-b border-white/8 pb-5">
                    <div>
                      <p className="font-serif text-2xl text-ivory transition-colors duration-500 group-hover:text-brass-soft">
                        {p.name}
                      </p>
                      <p className="mt-1.5 text-xs tracking-wide text-ivory/45">
                        {p.location} · {p.scope}
                      </p>
                    </div>
                    <span className="font-serif text-sm italic text-ivory/35">
                      {p.year}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-ivory/25 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-ivory transition-all duration-300 hover:border-brass hover:text-brass-soft"
          >
            Request the full portfolio
          </a>
        </Reveal>
      </div>
    </section>
  );
}
