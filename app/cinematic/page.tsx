import type { Metadata } from "next";
import { CNav } from "@/components/cinematic/nav";
import { CHero } from "@/components/cinematic/hero";
import { CLegacy } from "@/components/cinematic/legacy";
import { CWhy } from "@/components/cinematic/why";
import { CServices } from "@/components/cinematic/services";
import { CProjects } from "@/components/cinematic/projects";
import { CCraft } from "@/components/cinematic/craft";
import { CProcess } from "@/components/cinematic/process";
import { CBudget } from "@/components/cinematic/budget";
import { CTestimonials } from "@/components/cinematic/testimonials";
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
      <CLegacy />
      <CWhy />
      <CServices />
      <CProjects />
      <CCraft />
      <CProcess />
      <CBudget />
      <CTestimonials />
      <CFaq />
      <CCta />
      <SiteFooter />
      <VariantSwitch />
    </main>
  );
}
