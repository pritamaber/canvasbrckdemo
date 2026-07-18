"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/components/motion";
import { InViewVideo } from "@/components/in-view-video";
import { galleryCategories, portfolioHref } from "@/lib/gallery";
import { useState } from "react";

function CategoryBand({
  category,
}: {
  category: (typeof galleryCategories)[number];
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const useVideo = Boolean(category.video) && !videoFailed;

  return (
    <Link
      href={portfolioHref(category.id)}
      className="group relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* media */}
      <div className="absolute inset-0">
        {useVideo ? (
          <InViewVideo
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            src={category.video}
            poster={category.images[0]}
            onError={() => setVideoFailed(true)}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={category.images[0]}
            alt={category.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-ink/55 transition-colors duration-500 group-hover:bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/60" />

      {/* centered label — KariGhars style */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <h3 className="max-w-4xl font-sans text-3xl font-light uppercase leading-[1.15] tracking-[0.16em] text-ivory sm:text-5xl lg:text-6xl">
          {category.headline}
        </h3>
        <span className="mt-7 h-px w-12 bg-ivory/45" />
        <p className="mt-6 text-sm font-light uppercase tracking-[0.28em] text-ivory/70 sm:text-base">
          {category.subtitle}
        </p>
        <span className="mt-10 grid h-16 w-16 place-items-center rounded-full border border-ivory/40 text-ivory transition-all duration-500 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
          <ArrowUpRight size={22} strokeWidth={1.4} />
        </span>
        <span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/40">
          {category.title} · {category.images.length} designs
        </span>
      </motion.div>
    </Link>
  );
}

export function CCategories() {
  return (
    <section id="categories" aria-label="Design categories" className="scroll-mt-20">
      <div className="container-x py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center"
        >
          <p className="eyebrow flex items-center justify-center gap-4 text-brass-soft">
            <span className="h-px w-10 bg-brass/60" />
            What we design
            <span className="h-px w-10 bg-brass/60" />
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight text-ivory sm:text-6xl">
            Pick a room. We&rsquo;ll take it from there.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ivory/50">
            Ten categories, hundreds of finished designs. Tap any space to open
            its full gallery in our portfolio.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {galleryCategories.map((c) => (
          <CategoryBand key={c.id} category={c} />
        ))}
      </div>
    </section>
  );
}
