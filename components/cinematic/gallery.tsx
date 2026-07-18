"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { galleryCategories } from "@/lib/gallery";

/* a woven cross-section — the first couple of frames from each category */
const mosaic = galleryCategories
  .flatMap((c) => c.images.slice(0, 2).map((src) => ({ src, title: c.title })))
  .slice(0, 16);

export function CGallery() {
  return (
    <section id="gallery" className="bg-charcoal py-28 scroll-mt-20 md:py-40">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              The gallery
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-6xl">
              Fifty years, room by room.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ivory transition-colors hover:text-brass-soft"
            >
              Open full portfolio
              <span className="grid h-9 w-9 place-items-center rounded-full border border-ivory/25 transition-all duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
                <ArrowUpRight size={15} strokeWidth={2} />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 columns-2 gap-4 [column-fill:balance] md:columns-3 lg:columns-4">
          {mosaic.map((m, i) => (
            <Reveal key={m.src} delay={0.03 * (i % 4)} className="mb-4 block">
              <Link
                href="/portfolio"
                className="group relative block overflow-hidden rounded-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.src}
                  alt={m.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                <span className="absolute bottom-3 left-3 rounded-full bg-ink/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-brass-soft opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                  {m.title}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
