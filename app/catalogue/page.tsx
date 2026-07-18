import type { Metadata } from "next";
import Link from "next/link";
import { ENav } from "@/components/editorial/nav";
import { EDivider } from "@/components/editorial/divider";
import { CatalogueTabs } from "@/components/editorial/catalogue-tabs";
import { SiteFooter } from "@/components/site-footer";
import { EEnquireTab } from "@/components/editorial/enquire-tab";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Browse the Canvas & Brick catalogue by design style — Modern Contemporary, Modern Glam, Bauhaus, Neo Classical and Mid Century Modern — with trend boards and walk-through films for every room.",
};

export default function CataloguePage() {
  return (
    <main className="bg-ivory font-sans text-charcoal">
      <ENav />

      <section className="container-x pb-4 pt-20 text-center md:pt-24">
        <p className="eyebrow text-sky">
          <Link href="/editorial" className="hover:text-forest">
            Home
          </Link>{" "}
          / Catalogue
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-forest sm:text-6xl">
          Catalogue
        </h1>
        <EDivider />
        <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-charcoal/65">
          Explore our interiors by design language — from Modern Contemporary to
          Mid Century Modern. Each style pairs a walk-through film with a board
          of current trends, so you can find the look that fits your home before
          you ever pick up the phone.
        </p>
      </section>

      <section className="container-x pb-24 pt-8 md:pb-32">
        <CatalogueTabs />
      </section>

      <SiteFooter />
      <EEnquireTab />
    </main>
  );
}
