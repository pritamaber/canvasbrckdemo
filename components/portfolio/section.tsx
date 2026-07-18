"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { EASE, Reveal } from "@/components/motion";
import { GalleryStrip } from "@/components/portfolio/gallery-strip";
import type { GalleryCategory } from "@/lib/gallery";
import { site } from "@/lib/content";

export function PortfolioSection({
  category,
  index,
}: {
  category: GalleryCategory;
  index: number;
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const lead = category.images[0];
  const useVideo = Boolean(category.video) && !videoFailed;

  return (
    <section
      id={category.id}
      className="scroll-mt-24 border-t border-white/[0.06] py-16 md:py-24"
    >
      {/* full-bleed lead band */}
      <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
        {useVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={category.video}
            poster={lead}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onError={() => setVideoFailed(true)}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lead}
            alt={category.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

        <div className="container-x relative flex h-full flex-col justify-end pb-12">
          <Reveal>
            <span className="font-serif text-sm italic text-brass-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="eyebrow mt-3 flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              {category.tag}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              {category.title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/70">
              {category.blurb}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-brass-soft"
              >
                Design mine
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/45">
                {category.images.length} designs
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* swipable strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="container-x mt-8"
      >
        <GalleryStrip images={category.images} title={category.title} />
        <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-ivory/30">
          Swipe · drag · tap any image to enlarge
        </p>
      </motion.div>
    </section>
  );
}
