import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ENav } from "@/components/editorial/nav";
import { EDivider } from "@/components/editorial/divider";
import { RoomGallery } from "@/components/editorial/room-gallery";
import { SiteFooter } from "@/components/site-footer";
import { EEnquireTab } from "@/components/editorial/enquire-tab";
import { galleryBySlug, galleryCategories } from "@/lib/gallery";

/* pre-render every room except the derived outdoor set */
export function generateStaticParams() {
  return galleryCategories
    .filter((c) => c.slug !== "balcony")
    .map((c) => ({ room: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ room: string }>;
}): Promise<Metadata> {
  const { room } = await params;
  const cat = galleryBySlug[room];
  return {
    title: cat ? `${cat.title} Interior Designs` : "Design Ideas",
    description: cat?.blurb,
  };
}

export default async function RoomDesignsPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;
  const cat = galleryBySlug[room];
  if (!cat) notFound();

  return (
    <main className="bg-ivory font-sans text-charcoal">
      <ENav />

      <section className="container-x pb-4 pt-20 text-center md:pt-24">
        <p className="eyebrow text-sky">
          <Link href="/design-ideas" className="hover:text-forest">
            Design Ideas
          </Link>{" "}
          / {cat.title}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-forest sm:text-6xl">
          {cat.title} Interior Designs
        </h1>
        <EDivider />
        <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-charcoal/65">
          {cat.blurb}
        </p>
      </section>

      <section className="container-x pb-24 pt-10 md:pb-32">
        <RoomGallery images={cat.images} title={cat.title} />

        {/* other rooms */}
        <div className="mt-20 border-t border-forest/10 pt-12 text-center">
          <p className="eyebrow text-fern/70">Browse other rooms</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {galleryCategories
              .filter((c) => c.slug !== "balcony" && c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/design-ideas/${c.slug}`}
                  className="rounded-full border border-forest/15 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/60 transition-colors duration-300 hover:border-sky hover:text-sky"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <EEnquireTab />
    </main>
  );
}
