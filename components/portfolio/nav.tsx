"use client";

import Link from "next/link";
import { galleryCategories } from "@/lib/gallery";
import { site } from "@/lib/content";

export function PortfolioNav() {
  return (
    <header className="sticky top-0 z-[60] border-b border-white/[0.08] bg-ink/85 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/cinematic" className="font-serif text-2xl text-ivory">
          Canvas <span className="text-brass">&amp;</span> Brick
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/cinematic"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/55 transition-colors hover:text-brass-soft sm:block"
          >
            Home
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brass/50 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-soft transition-all duration-300 hover:border-brass hover:bg-brass hover:text-ink"
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* category quick-links */}
      <div className="border-t border-white/[0.06]">
        <div className="hide-scrollbar container-x flex gap-6 overflow-x-auto py-3.5">
          {galleryCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45 transition-colors hover:text-brass-soft"
            >
              {c.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
