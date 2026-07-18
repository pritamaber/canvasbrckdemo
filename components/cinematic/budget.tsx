"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { EASE, Reveal } from "@/components/motion";
import {
  bhkOptions,
  calcEstimate,
  defaultScope,
  formatLakh,
  formatStartingLakh,
  packageOptions,
  scopeItems,
  whatsappQuoteHref,
} from "@/lib/budget";

export function CBudget() {
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

  /* slow slideshow of KariGhars stills for the selected home type */
  useEffect(() => {
    setSlide(0);
    const t = setInterval(
      () => setSlide((s) => (s + 1) % bhk.imagesC.length),
      3600
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

  const maxLine = Math.max(...est.lines.map((l) => l.lakh), 0.001);

  return (
    <section id="estimate" className="bg-ink py-28 scroll-mt-20 md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-brass-soft">
              <span className="h-px w-10 bg-brass/60" />
              The estimate
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
              Know your number before you begin.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/50">
              Honest starting ranges, the way we quote in person — choose your
              home, package and scope. Two minutes, no phone number demanded.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* ————— media ————— */}
          <Reveal className="relative self-start lg:sticky lg:top-28">
            <div className="absolute -left-4 -top-4 h-full w-full border border-brass/25" />
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* CSS crossfade — all slides stay mounted, active one on top */}
              {bhk.imagesC.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${bhk.label} interior by Canvas & Brick`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className={`object-cover transition-opacity duration-1000 ease-out ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-serif text-3xl text-ivory">{bhk.label}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-brass-soft">
                  Starting from {formatStartingLakh(bhk.startingLakh)}*
                </p>
              </div>
              <div className="absolute bottom-6 right-5 flex gap-1.5">
                {bhk.imagesC.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === slide ? "w-6 bg-brass" : "w-2 bg-ivory/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* ————— controls ————— */}
          <div>
            {/* BHK */}
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">
                Your home
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {bhkOptions.map((b) => {
                  const active = b.id === bhkId;
                  return (
                    <button
                      key={b.id}
                      onClick={() => {
                        setBhkId(b.id);
                        setArea(b.defaultArea);
                      }}
                      className={`rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                        active
                          ? "border-brass bg-brass text-ink"
                          : "border-white/15 text-ivory/60 hover:border-brass/60 hover:text-ivory"
                      }`}
                    >
                      {b.label}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* package */}
            <Reveal delay={0.05}>
              <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">
                Package
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {packageOptions.map((p) => {
                  const active = p.id === pkgId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPkgId(p.id)}
                      className={`border p-4 text-left transition-all duration-300 ${
                        active
                          ? "border-brass bg-white/[0.04]"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-sm font-bold text-ivory">
                          {p.label}
                        </span>
                        {active && <Check size={14} className="text-brass" />}
                      </span>
                      <span className="mt-2 block text-xs leading-relaxed text-ivory/45">
                        {p.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* area */}
            <Reveal delay={0.1}>
              <div className="mt-10 flex items-baseline justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">
                  Carpet area
                </p>
                <p className="font-serif text-lg text-brass-soft">
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
                className="mt-4 w-full accent-brass"
              />
            </Reveal>

            {/* scope */}
            <Reveal delay={0.15}>
              <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">
                What should we include?
              </p>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {scopeItems.map((s) => {
                  const on = scope.has(s.id);
                  return (
                    <label
                      key={s.id}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 transition-all duration-300 ${
                        on
                          ? "border-brass/60 bg-white/[0.04]"
                          : "border-white/10 hover:border-white/25"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(s.id)}
                        className="sr-only"
                      />
                      <span
                        className={`grid h-4.5 w-4.5 shrink-0 place-items-center border transition-colors duration-300 ${
                          on ? "border-brass bg-brass" : "border-white/25"
                        }`}
                      >
                        {on && <Check size={12} className="text-ink" />}
                      </span>
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          on ? "text-ivory" : "text-ivory/50"
                        }`}
                      >
                        {s.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </Reveal>

            {/* result */}
            <Reveal delay={0.2}>
              <div className="mt-12 border-t border-white/10 pt-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">
                  Your indicative range
                </p>
                <motion.p
                  key={`${est.lowLakh.toFixed(1)}-${est.highLakh.toFixed(1)}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="mt-3 font-serif text-5xl text-brass-soft sm:text-6xl"
                >
                  {formatLakh(est.lowLakh)}{" "}
                  <span className="text-ivory/40">–</span>{" "}
                  {formatLakh(est.highLakh)}
                </motion.p>

                {/* breakdown */}
                <div className="mt-8 space-y-3">
                  {est.lines.map((l) => (
                    <div key={l.id}>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="text-ivory/55">{l.label}</span>
                        <span className="font-serif italic text-ivory/70">
                          {formatLakh(l.lakh)}
                        </span>
                      </div>
                      <div className="mt-1.5 h-px w-full bg-white/10">
                        <motion.div
                          animate={{ width: `${(l.lakh / maxLine) * 100}%` }}
                          transition={{ duration: 0.7, ease: EASE }}
                          className="h-full bg-brass/70"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappQuoteHref(bhk, pkg, area, scope, est)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-brass px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-brass-soft"
                  >
                    <MessageCircle size={15} />
                    Get exact quote on WhatsApp
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-ivory/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-ivory/70"
                  >
                    Book a site visit
                  </a>
                </div>

                <p className="mt-6 text-[11px] leading-relaxed text-ivory/35">
                  *Indicative range for the {pkg.label.toLowerCase()} package,
                  GST extra. Your final line-item estimate follows a free site
                  visit — and stays fixed once signed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
