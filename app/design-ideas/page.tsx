import type { Metadata } from "next";
import Link from "next/link";
import { ENav } from "@/components/editorial/nav";
import { EDivider } from "@/components/editorial/divider";
import { SiteFooter } from "@/components/site-footer";
import { EEnquireTab } from "@/components/editorial/enquire-tab";
import { galleryCategories } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Design Ideas",
  description:
    "Carefully-curated interior design ideas across bedrooms, kitchens, living rooms, wardrobes and more — pick the designs that suit your home.",
};

/* nine rooms customers can browse ideas for */
const rooms = galleryCategories.filter((c) => c.slug !== "balcony");

export default function DesignIdeasPage() {
  return (
    <main className="bg-ivory font-sans text-charcoal">
      <ENav />

      <section className="container-x pb-6 pt-20 text-center md:pt-24">
        <h1 className="font-serif text-4xl leading-tight text-forest sm:text-6xl">
          Home Interior Designs
        </h1>
        <EDivider />
        <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-charcoal/65">
          We bring you carefully-curated interior design ideas, to give your home
          a brand new look. Explore exclusive designs across kitchen, bedroom,
          living room and more — put together by our own designers to help you
          pick a look that suits your home perfectly.
        </p>
      </section>

      <section className="container-x pb-24 pt-10 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => (
            <Link
              key={r.slug}
              href={`/design-ideas/${r.slug}`}
              className="group overflow-hidden rounded-md border border-forest/10 bg-ivory shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.images[0]}
                  alt={r.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <h2 className="text-lg font-bold text-forest transition-colors duration-300 group-hover:text-sky">
                  {r.title}
                </h2>
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                  {r.images.length} Designs
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
      <EEnquireTab />
    </main>
  );
}
