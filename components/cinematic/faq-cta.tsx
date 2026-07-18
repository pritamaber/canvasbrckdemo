"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Plus } from "lucide-react";
import { EASE, Reveal } from "@/components/motion";
import { cta, faqs, site } from "@/lib/content";

export function CFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-charcoal py-28 scroll-mt-20 md:py-36">
      <div className="container-x max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow flex items-center justify-center gap-4 text-brass-soft">
            <span className="h-px w-10 bg-brass/60" />
            Questions, answered
            <span className="h-px w-10 bg-brass/60" />
          </p>
          <h2 className="mx-auto mt-6 font-serif text-4xl leading-tight text-ivory sm:text-5xl">
            The honest details.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg text-ivory transition-colors duration-300 sm:text-xl">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="shrink-0 text-brass"
                  >
                    <Plus size={20} strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-ivory/55">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 scroll-mt-20 md:py-44"
    >
      <Image
        src={cta.image}
        alt="Evening light on a Canvas & Brick villa"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="container-x relative text-center">
        <Reveal>
          <p className="eyebrow text-brass-soft">Begin the conversation</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ivory sm:text-7xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ivory/65">
            {cta.sub}
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brass px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-brass-soft"
            >
              {cta.primary}
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-ivory/30 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-ivory"
            >
              {cta.secondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 border-t border-white/15 pt-10 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, label: "Studio", value: site.addressShort },
              { icon: Phone, label: "Phone", value: site.phone },
              { icon: Mail, label: "Email", value: site.email },
              { icon: Clock, label: "Hours", value: site.hours },
            ].map((c) => (
              <div key={c.label} className="flex gap-3.5">
                <c.icon
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-brass"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">
                    {c.label}
                  </p>
                  <p className="mt-1.5 text-sm text-ivory/80">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
