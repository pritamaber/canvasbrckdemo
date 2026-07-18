"use client";

import { useState } from "react";
import Link from "next/link";
import { Lightbox } from "@/components/lightbox";
import { site } from "@/lib/content";

export function RoomGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => {
          const n = images.length - i;
          return (
            <article
              key={src}
              className="group overflow-hidden rounded-md border border-forest/10 bg-ivory shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/10"
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Zoom ${title} design ${n}`}
                className="relative block aspect-[4/3] w-full overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${title} design ${n}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-forest/0 transition-colors duration-500 group-hover:bg-forest/15" />
                <span className="absolute bottom-3 left-3 rounded-full bg-forest/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                  Click to zoom
                </span>
              </button>
              <div className="p-5">
                <h2 className="text-base font-bold text-forest">
                  {title} Design {n}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/editorial#estimate"
                    className="rounded-full border border-sky px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-sky transition-colors duration-300 hover:bg-sky-wash"
                  >
                    Free budget calculator
                  </Link>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-sky px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors duration-300 hover:bg-forest"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Lightbox
        images={images}
        index={lightbox}
        alt={`${title} design`}
        caption={
          lightbox !== null ? `${title} Design ${images.length - lightbox}` : null
        }
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </>
  );
}
