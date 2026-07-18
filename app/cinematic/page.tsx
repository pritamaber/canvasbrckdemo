import type { Metadata } from "next";
import { CNav } from "@/components/cinematic/nav";
import { CHero } from "@/components/cinematic/hero";
import { CCategories } from "@/components/cinematic/categories";
import { CLegacy } from "@/components/cinematic/legacy";
import { CGallery } from "@/components/cinematic/gallery";
import { CTestimonials } from "@/components/cinematic/testimonials";
import { CFeaturedIn } from "@/components/cinematic/featured-in";
import { CAwards } from "@/components/cinematic/awards";
import { CFaq, CCta } from "@/components/cinematic/faq-cta";
import { SiteFooter } from "@/components/site-footer";
import { VariantSwitch } from "@/components/variant-switch";

export const metadata: Metadata = {
  title: "The Cinematic Direction",
  description:
    "Full-bleed film, deep charcoal and brass light — the immersive creative direction for Canvas & Brick, Kolkata.",
};

export default function CinematicPage() {
  return (
    <main className="bg-ink font-sans text-ivory">
      <CNav />
      <CHero />
      <CCategories />
      <CLegacy />
      <CGallery />
      <CTestimonials />
      <CFeaturedIn />
      <CAwards />
      <CFaq />
      <CCta />
      <SiteFooter />
      <VariantSwitch />
    </main>
  );
}
