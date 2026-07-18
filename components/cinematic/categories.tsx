"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/components/motion";
import { galleryCategories, portfolioHref } from "@/lib/gallery";

function CategoryBand({
  category,
  index,
}: {
  category: (typeof galleryCategories)[number];
  index: number;
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const useVideo = Boolean(category.video) && !videoFailed;
  const alignRight = index % 2 === 1;

  return (
    <Link
      href={portfolioHref(category.id)}
      className="group relative flex h-[86vh] min-h-[560px] items-end overflow-hidden"
    >
      {/* media */}
      <motion.div
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0"
      >
        {useVideo ? (
          <video
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            src={category.video}
            poster={category.images[0]}
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
            src={category.images[0]}
            alt={category.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25 transition-colors duration-500 group-hover:from-ink/95" />

      {/* label */}
      <div className="container-x relative z-10 pb-16 md:pb-24">
        <div className={alignRight ? "md:ml-auto md:text-right" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p
              className={`eyebrow flex items-center gap-4 text-brass-soft ${
                alignRight ? "md:justify-end" : ""
              }`}
            >
              <span className="h-px w-10 bg-brass/60" />
              {category.tag}
            </p>
            <h3 className="mt-4 font-serif text-5xl leading-[1] text-ivory sm:text-7xl lg:text-8xl">
              {category.title}
            </h3>
            <p
              className={`mt-5 max-w-md text-[15px] leading-relaxed text-ivory/65 ${
                alignRight ? "md:ml-auto" : ""
              }`}
            >
              {category.blurb}
            </p>
            <span
              className={`mt-7 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 group-hover:text-brass-soft ${
                alignRight ? "md:flex-row-reverse" : ""
              }`}
            >
              Explore {category.title}
              <span className="grid h-9 w-9 place-items-center rounded-full border border-ivory/25 transition-all duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
                <ArrowUpRight size={15} strokeWidth={2} />
              </span>
            </span>
          </motion.div>
        </div>
      </div>
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
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              What we design
            </p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-ivory sm:text-6xl">
              Pick a room. We&rsquo;ll take it from there.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
            Ten categories, hundreds of finished designs. Tap any space to open
            its full gallery in our portfolio.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {galleryCategories.map((c, i) => (
          <CategoryBand key={c.id} category={c} index={i} />
        ))}
      </div>
    </section>
  );
}
