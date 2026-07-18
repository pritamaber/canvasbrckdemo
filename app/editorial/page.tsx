import type { Metadata } from "next";
import { ENav } from "@/components/editorial/nav";
import { EHero } from "@/components/editorial/hero";
import { ELegacy } from "@/components/editorial/legacy";
import { EWhy } from "@/components/editorial/why";
import { EServices } from "@/components/editorial/services";
import { EProjects } from "@/components/editorial/projects";
import { ECraft } from "@/components/editorial/craft";
import { EProcess } from "@/components/editorial/process";
import { ETestimonials } from "@/components/editorial/testimonials";
import { EFaq, ECta } from "@/components/editorial/faq-cta";
import { SiteFooter } from "@/components/site-footer";
import { VariantSwitch } from "@/components/variant-switch";

export const metadata: Metadata = {
  title: "The Editorial Direction",
  description:
    "Warm ivory, magazine grids and quiet typography — the calm, image-led creative direction for Canvas & Brick, Kolkata.",
};

export default function EditorialPage() {
  return (
    <main className="bg-ivory font-sans text-charcoal">
      <ENav />
      <EHero />
      <ELegacy />
      <EWhy />
      <EServices />
      <EProjects />
      <ECraft />
      <EProcess />
      <ETestimonials />
      <EFaq />
      <ECta />
      <SiteFooter />
      <VariantSwitch />
    </main>
  );
}
