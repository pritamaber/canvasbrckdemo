"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { EASE, Reveal } from "@/components/motion";
import { ESectionHeader } from "@/components/editorial/section-header";
import {
  bhkOptions,
  calcEstimate,
  defaultScope,
  formatLakh,
  packageOptions,
  scopeItems,
  whatsappQuoteHref,
} from "@/lib/budget";

export function EBudget() {
  const [bhkId, setBhkId] = useState(bhkOptions[2].id); // 3 BHK default
  const [pkgId, setPkgId] = useState(packageOptions[1].id); // Premium default
  const [area, setArea] = useState(bhkOptions[2].defaultArea);
  const [scope, setScope] = useState<Set<string>>(defaultScope);
  const [slide, setSlide] = useState(0);

  const bhk = bhkOptions.find((b) => b.id === bhkId)!;
  const pkg = packageOptions.find((p) => p.id === pkgId)!;
  const est = useMemo(
    () => calcEstimate(bhk, pkg, area, scope),
    [bhk, pkg, area, scope]
  );

  /* Floorsy-style auto slider over the BHK image set */
  useEffect(() => {
    setSlide(0);
    const t = setInterval(
      () => setSlide((s) => (s + 1) % bhk.imagesE.length),
      3000
    );
    return () => clearInterval(t);
  }, [bhk]);

  const toggle = (id: string) =>
    setScope((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  return (
    <section id="estimate" className="py-24 scroll-mt-16 md:py-36">
      <div className="container-x">
        <ESectionHeader
          number="07"
          label="Budget estimator"
          heading="What would your home cost?"
          intro="Choose your home, package and scope — and get the honest starting range we would quote in person. No phone number demanded."
        />

        <div className="mt-14 grid gap-10 rounded-sm border border-charcoal/10 bg-ivory p-5 sm:p-8 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:p-10">
          {/* ————— media ————— */}
          <div className="self-start lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={bhk.imagesE[slide]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={bhk.imagesE[slide]}
                    alt={`${bhk.label} interior design in Kolkata`}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-serif text-2xl text-ivory">{bhk.label}</p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brass-soft">
                  Starting from {formatLakh(bhk.startingLakh)}*
                </p>
              </div>
              <div className="absolute bottom-5 right-4 flex gap-1.5">
                {bhk.imagesE.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === slide ? "w-6 bg-ivory" : "w-1.5 bg-ivory/45"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* starting ladder — straight from the Floorsy homepage */}
            <div className="mt-5 grid grid-cols-4 gap-2">
              {bhkOptions.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    setBhkId(b.id);
                    setArea(b.defaultArea);
                  }}
                  className={`rounded-sm border px-2 py-2.5 text-center transition-all duration-300 ${
                    b.id === bhkId
                      ? "border-walnut bg-linen/70"
                      : "border-charcoal/10 hover:border-charcoal/30"
                  }`}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal">
                    {b.id === "4bhk" ? "4 BHK+" : b.label}
                  </span>
                  <span className="mt-1 block font-serif text-[13px] italic text-walnut">
                    {formatLakh(b.startingLakh)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ————— controls + result ————— */}
          <div>
            {/* package */}
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-charcoal/45">
              Package
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {packageOptions.map((p) => {
                const active = p.id === pkgId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPkgId(p.id)}
                    className={`rounded-sm border p-4 text-left transition-all duration-300 ${
                      active
                        ? "border-walnut bg-linen/60"
                        : "border-charcoal/10 hover:border-charcoal/30"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-sm font-bold text-charcoal">
                        {p.label}
                      </span>
                      {active && <Check size={14} className="text-walnut" />}
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-charcoal/55">
                      {p.note}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* area */}
            <div className="mt-8 flex items-baseline justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-charcoal/45">
                Carpet area
              </p>
              <p className="font-serif text-lg italic text-walnut">
                ~{area.toLocaleString("en-IN")} sq ft
              </p>
            </div>
            <input
              type="range"
              min={bhk.minArea}
              max={bhk.maxArea}
              step={10}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              aria-label="Carpet area in square feet"
              className="mt-3 w-full accent-walnut"
            />

            {/* scope */}
            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.26em] text-charcoal/45">
              What should we include?
            </p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {scopeItems.map((s) => {
                const on = scope.has(s.id);
                return (
                  <label
                    key={s.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 transition-all duration-300 ${
                      on
                        ? "border-walnut/60 bg-linen/50"
                        : "border-charcoal/10 hover:border-charcoal/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggle(s.id)}
                      className="sr-only"
                    />
                    <span
                      className={`grid h-4.5 w-4.5 shrink-0 place-items-center rounded-[3px] border transition-colors duration-300 ${
                        on ? "border-walnut bg-walnut" : "border-charcoal/25"
                      }`}
                    >
                      {on && <Check size={12} className="text-ivory" />}
                    </span>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        on ? "text-charcoal" : "text-charcoal/55"
                      }`}
                    >
                      {s.label}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* result */}
            <div className="mt-10 rounded-sm bg-charcoal p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/45">
                Your indicative range
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${est.lowLakh.toFixed(1)}-${est.highLakh.toFixed(1)}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="mt-3 font-serif text-4xl text-brass-soft sm:text-5xl"
                >
                  {formatLakh(est.lowLakh)}{" "}
                  <span className="text-ivory/40">–</span>{" "}
                  {formatLakh(est.highLakh)}
                </motion.p>
              </AnimatePresence>
              <p className="mt-3 text-xs leading-relaxed text-ivory/45">
                {bhk.label} · {pkg.label} package · ~
                {area.toLocaleString("en-IN")} sq ft ·{" "}
                {scope.size} of {scopeItems.length} scopes
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappQuoteHref(bhk, pkg, area, scope, est)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-brass-soft"
                >
                  <MessageCircle size={15} />
                  Get exact quote
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-ivory/25 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-ivory/70"
                >
                  Book a site visit
                </a>
              </div>
              <p className="mt-5 text-[11px] leading-relaxed text-ivory/35">
                *Indicative, GST extra. Final line-item estimate follows a free
                site visit — and stays fixed once signed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
