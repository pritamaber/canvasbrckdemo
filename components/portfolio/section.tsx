"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, Reveal } from "@/components/motion";
import { InViewVideo } from "@/components/in-view-video";
import { GalleryStrip } from "@/components/portfolio/gallery-strip";
import type { GalleryCategory } from "@/lib/gallery";
import { site } from "@/lib/content";

export function PortfolioSection({
  category,
}: {
  category: GalleryCategory;
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const lead = category.images[0];
  const useVideo = Boolean(category.video) && !videoFailed;

  return (
    <section id={category.id} className="scroll-mt-24">
      {/* full-bleed centered hero — KariGhars style */}
      <div className="relative flex min-h-[86vh] items-center justify-center overflow-hidden">
        {useVideo ? (
          <InViewVideo
            className="absolute inset-0 h-full w-full object-cover"
            src={category.video}
            poster={lead}
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
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <p className="eyebrow text-brass-soft">{category.title}</p>
          <h2 className="mt-5 max-w-4xl font-sans text-3xl font-light uppercase leading-[1.15] tracking-[0.16em] text-ivory sm:text-5xl lg:text-6xl">
            {category.headline}
          </h2>
          <span className="mt-7 h-px w-12 bg-ivory/45" />
          <p className="mt-6 max-w-xl text-sm font-light uppercase tracking-[0.28em] text-ivory/70 sm:text-base">
            {category.subtitle}
          </p>
        </motion.div>
      </div>

      {/* intro + swipable strip */}
      <div className="bg-ink py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-base leading-relaxed text-ivory/65">
              {category.blurb}
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="container-x mt-12"
        >
          <GalleryStrip images={category.images} title={category.title} />
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-[11px] uppercase tracking-[0.24em] text-ivory/30">
              Swipe · drag · tap any image to enlarge
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brass px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-brass-soft"
            >
              Design my {category.title.toLowerCase()}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
