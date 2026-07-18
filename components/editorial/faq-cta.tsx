"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { EASE, Reveal } from "@/components/motion";
import { cta, faqs, site } from "@/lib/content";

export function EFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-linen/50 py-24 scroll-mt-16 md:py-36">
      <div className="container-x max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow flex items-baseline justify-center gap-3 text-charcoal/45">
            <span className="font-serif text-base italic text-walnut">08</span>
            — Questions, answered
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
            The honest details.
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-charcoal/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-charcoal/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg text-charcoal sm:text-xl">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="shrink-0 text-walnut"
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
                      <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-charcoal/65">
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

export function ECta() {
  return (
    <section id="contact" className="bg-charcoal py-24 scroll-mt-16 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow text-brass-soft">Begin the conversation</p>
          <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl">
            {cta.heading}
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ivory/60">
            {cta.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-brass px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-brass-soft"
            >
              <MessageCircle size={15} />
              {cta.primary}
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-ivory/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-ivory/70"
            >
              {cta.secondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-7 border-l border-white/10 pl-8 lg:mt-4">
            {[
              { icon: MapPin, label: "Studio", value: site.address },
              { icon: Phone, label: "Phone", value: site.phone },
              { icon: Mail, label: "Email", value: site.email },
              { icon: Clock, label: "Hours", value: site.hours },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <c.icon
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-brass"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/40">
                    {c.label}
                  </p>
                  <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ivory/80">
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
