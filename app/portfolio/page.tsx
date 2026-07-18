import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioNav } from "@/components/portfolio/nav";
import { PortfolioSection } from "@/components/portfolio/section";
import { SiteFooter } from "@/components/site-footer";
import { galleryCategories } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Portfolio — Canvas & Brick",
  description:
    "Room by room, category by category — pooja units, kitchens, wardrobes, living rooms and more, from the Canvas & Brick workshop.",
};

export default function PortfolioPage() {
  const total = galleryCategories.reduce((n, c) => n + c.images.length, 0);

  return (
    <main className="bg-ink font-sans text-ivory">
      <PortfolioNav />

      {/* intro */}
      <section className="container-x pb-6 pt-20 md:pt-28">
        <p className="eyebrow flex items-center gap-4 text-brass-soft">
          <span className="h-px w-10 bg-brass/60" />
          The portfolio
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.03] text-ivory sm:text-7xl">
          Every room we make, in one place.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/60">
          {total}+ finished designs across {galleryCategories.length} categories —
          each one built in our own Rajarhat workshop. Browse a category, swipe
          through the work, and save the ones that feel like your home.
        </p>
      </section>

      {galleryCategories.map((c, i) => (
        <PortfolioSection key={c.id} category={c} index={i} />
      ))}

      {/* tail cta */}
      <section className="container-x border-t border-white/[0.06] py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
          Found a few you love?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/60">
          Bring your shortlist to a free consultation — we&rsquo;ll turn the
          ideas you saved into a design and an honest, line-item estimate.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/cinematic#contact"
            className="rounded-full bg-brass px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-brass-soft"
          >
            Book a consultation
          </Link>
          <Link
            href="/cinematic"
            className="rounded-full border border-ivory/25 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-brass hover:text-brass-soft"
          >
            Back to home
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
