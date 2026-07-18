"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, Reveal } from "@/components/motion";
import { Diamond } from "@/components/editorial/section-header";
import { Lightbox } from "@/components/lightbox";
import { site } from "@/lib/content";
import { galleryBySlug } from "@/lib/gallery";

/* Resolve a room image safely — falls back to the first image if the
   requested index is out of range for that room's folder. */
const roomImg = (slug: string, i: number) => {
  const imgs = galleryBySlug[slug]?.images ?? [];
  return imgs[i] ?? imgs[0];
};

type Trend = { slug: string; i: number; label: string };

type Style = {
  id: string;
  name: string;
  tagline: string;
  blurb: string;
  video: string;
  trends: Trend[];
};

/* Five design languages, mirroring the Floorsy catalogue — each with its own
   walk-through film and a curated board of trend images pulled from the
   local room galleries. */
const styles: Style[] = [
  {
    id: "modern-contemporary",
    name: "Modern Contemporary",
    tagline: "Explore Current Trends In Modern Contemporary Design",
    blurb:
      "Clean lines, an easy neutral palette and quietly luxe materials. Contemporary interiors stay current without shouting — form follows the way you actually live.",
    video: "/assets/portfolio/videos/catalogue-tab-1.mp4",
    trends: [
      { slug: "living", i: 4, label: "Living Room" },
      { slug: "kitchen", i: 2, label: "Modular Kitchen" },
      { slug: "bedroom", i: 6, label: "Master Bedroom" },
      { slug: "tvunit", i: 1, label: "TV Unit" },
      { slug: "living", i: 18, label: "Living Room" },
      { slug: "wardrobe", i: 3, label: "Wardrobe" },
      { slug: "kitchen", i: 20, label: "Kitchen" },
      { slug: "living", i: 30, label: "Lounge" },
    ],
  },
  {
    id: "modern-glam",
    name: "Modern Glam",
    tagline: "Explore Current Trends In Modern Glam Design",
    blurb:
      "Soft metallics, mirror, velvet and layered light. Glam interiors turn the everyday theatrical — rich, tactile and unmistakably done up for guests.",
    video: "/assets/portfolio/videos/catalogue-tab-2.mp4",
    trends: [
      { slug: "bedroom", i: 10, label: "Master Bedroom" },
      { slug: "mandir", i: 6, label: "Pooja & Mandir" },
      { slug: "crockery", i: 4, label: "Crockery Unit" },
      { slug: "wardrobe", i: 12, label: "Dressing" },
      { slug: "living", i: 22, label: "Living Room" },
      { slug: "bedroom", i: 24, label: "Bedroom" },
      { slug: "tvunit", i: 8, label: "TV Unit" },
      { slug: "mandir", i: 12, label: "Mandir" },
    ],
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    tagline: "Explore Current Trends In Bauhaus Design",
    blurb:
      "Function first, ornament last. Primary geometry, honest materials and a designed-for-purpose logic that still feels a century ahead of the room.",
    video: "/assets/portfolio/videos/catalogue-tab-3.mp4",
    trends: [
      { slug: "tvunit", i: 3, label: "TV Unit" },
      { slug: "console", i: 1, label: "Console" },
      { slug: "kitchen", i: 8, label: "Modular Kitchen" },
      { slug: "living", i: 10, label: "Living Room" },
      { slug: "wardrobe", i: 20, label: "Wardrobe" },
      { slug: "tvunit", i: 18, label: "Media Wall" },
      { slug: "console", i: 6, label: "Foyer Console" },
      { slug: "kitchen", i: 35, label: "Kitchen" },
    ],
  },
  {
    id: "neo-classical",
    name: "Neo Classical",
    tagline: "Explore Current Trends In Neo Classical Design",
    blurb:
      "Proportion, symmetry and heritage detailing — cornices, mouldings and carved wood — reworked at a comfortable scale for a modern Indian home.",
    video: "/assets/portfolio/videos/catalogue-tab-4.mp4",
    trends: [
      { slug: "mandir", i: 1, label: "Pooja & Mandir" },
      { slug: "crockery", i: 9, label: "Crockery Unit" },
      { slug: "living", i: 40, label: "Living Room" },
      { slug: "console", i: 8, label: "Entryway" },
      { slug: "bedroom", i: 40, label: "Master Bedroom" },
      { slug: "mandir", i: 9, label: "Mandir" },
      { slug: "crockery", i: 14, label: "Display Unit" },
      { slug: "foyers", i: 1, label: "Foyer" },
    ],
  },
  {
    id: "mid-century-modern",
    name: "Mid Century Modern",
    tagline: "Explore Current Trends In Mid Century Modern Design",
    blurb:
      "Warm teak, tapered legs and organic curves. The 1950s language that never dated, translated for the way families live and gather today.",
    video: "/assets/portfolio/videos/catalogue-tab-5.mp4",
    trends: [
      { slug: "living", i: 12, label: "Living Room" },
      { slug: "bedroom", i: 16, label: "Master Bedroom" },
      { slug: "console", i: 3, label: "Console" },
      { slug: "wardrobe", i: 30, label: "Wardrobe" },
      { slug: "tvunit", i: 24, label: "TV Unit" },
      { slug: "living", i: 46, label: "Lounge" },
      { slug: "kitchen", i: 45, label: "Kitchen" },
      { slug: "bedroom", i: 50, label: "Bedroom" },
    ],
  },
];

export function CatalogueTabs() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const style = styles[active];
  const images = style.trends.map((t) => roomImg(t.slug, t.i));

  return (
    <div>
      {/* ————— tab strip (Floorsy tan tabs, active underlined in sky) ————— */}
      <div
        role="tablist"
        aria-label="Catalogue design styles"
        className="hide-scrollbar -mx-5 flex gap-px overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {styles.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={on}
              onClick={() => {
                setActive(i);
                setLightbox(null);
              }}
              className={`shrink-0 whitespace-nowrap border-b-2 px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 sm:px-6 ${
                on
                  ? "border-sky bg-sage-soft/70 text-forest"
                  : "border-transparent bg-sage-soft/25 text-charcoal/55 hover:bg-sage-soft/40 hover:text-forest"
              }`}
            >
              {s.name}
            </button>
          );
        })}
      </div>

      {/* ————— active style panel ————— */}
      <AnimatePresence mode="wait">
        <motion.div
          key={style.id}
          id={style.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="pt-14"
        >
          <div className="text-center">
            <h2 className="grad-head font-serif text-3xl uppercase leading-tight tracking-[0.12em] sm:text-4xl lg:text-5xl">
              {style.name} Design Trends
            </h2>
            <Diamond className="mx-auto mt-6" />
            <p className="mt-7 font-serif text-xl italic text-fern sm:text-2xl">
              {style.tagline}
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/60">
              {style.blurb}
            </p>
          </div>

          {/* walk-through film for this style */}
          <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-md sm:aspect-[16/9] lg:aspect-[2.4/1]">
            <video
              key={style.video}
              className="absolute inset-0 h-full w-full object-cover"
              src={style.video}
              poster={images[0]}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/95">
              {style.name} — walk-through
            </p>
          </div>

          {/* curated trend grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {style.trends.map((t, i) => (
              <Reveal key={`${style.id}-${i}`} delay={0.04 * i}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Zoom ${t.label} — ${style.name}`}
                  className="group relative block aspect-[3/4] w-full overflow-hidden rounded-sm border border-forest/10 bg-sage-soft"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[i]}
                    alt={`${style.name} ${t.label}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 right-3 text-left text-[11px] font-bold uppercase tracking-[0.18em] text-ivory">
                    {t.label}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/design-ideas"
              className="rounded-full border border-sky px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-sky transition-colors duration-300 hover:bg-sky-wash"
            >
              Browse designs by room
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sky px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory transition-colors duration-300 hover:bg-forest"
            >
              Talk to a designer
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      <Lightbox
        images={images}
        index={lightbox}
        alt={`${style.name} design`}
        caption={
          lightbox !== null
            ? `${style.name} — ${style.trends[lightbox].label}`
            : null
        }
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </div>
  );
}
