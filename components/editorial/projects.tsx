"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/components/motion";
import { ESectionHeader } from "@/components/editorial/section-header";
import { projectCategories, projects } from "@/lib/content";

export function EProjects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-sage-soft/40 py-24 scroll-mt-16 md:py-36">
      <div className="container-x">
        <ESectionHeader
          number="04"
          label="Selected projects"
          heading="Homes and workplaces, told like magazine features."
          intro="A living archive from across Kolkata and Bengal. Filter by what you’re dreaming about."
        />

        {/* filters */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {projectCategories.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  active
                    ? "border-fern bg-fern text-ivory"
                    : "border-fern/25 text-charcoal/55 hover:border-fern/50 hover:text-fern"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* masonry */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
          >
            {visible.map((p) => (
              <figure
                key={p.name}
                className="group mb-6 break-inside-avoid cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded-sm ${p.aspect}`}
                >
                  <Image
                    src={p.imageE}
                    alt={`${p.name} — ${p.location}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-sky-soft">
                      {p.category}
                    </p>
                    <p className="mt-1 font-serif text-xl text-ivory">
                      {p.name}
                    </p>
                  </div>
                </div>
                <figcaption className="mt-3.5 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-forest">{p.name}</p>
                    <p className="mt-0.5 text-xs text-charcoal/50">
                      {p.location} · {p.scope}
                    </p>
                  </div>
                  <span className="font-serif text-xs italic text-charcoal/40">
                    {p.year}
                  </span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
