"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { EASE } from "@/components/motion";
import { navLinks, site } from "@/lib/content";
import { galleryCategories } from "@/lib/gallery";

const socials = [
  { label: "Instagram", tag: "Ig" },
  { label: "Facebook", tag: "Fb" },
  { label: "LinkedIn", tag: "In" },
  { label: "YouTube", tag: "Yt" },
];

/* nine rooms customers can browse ideas for */
const designIdeas = galleryCategories.filter((c) => c.slug !== "balcony");

export function ENav() {
  const [open, setOpen] = useState(false);
  const [ideasOpen, setIdeasOpen] = useState(false); // desktop dropdown
  const [ideasOpenM, setIdeasOpenM] = useState(false); // mobile accordion

  return (
    <>
      {/* ————— olive utility bar (scrolls away, desktop only) ————— */}
      <div className="hidden bg-forest text-ivory md:block">
        <div className="container-x flex h-11 items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2.5 transition-colors hover:text-sky-soft"
            >
              <Phone size={15} strokeWidth={1.6} className="text-sage" />
              <span className="text-[12px] leading-tight">
                <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-ivory/50">
                  Call any time
                </span>
                {site.phone}
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 transition-colors hover:text-sky-soft"
            >
              <Mail size={15} strokeWidth={1.6} className="text-sage" />
              <span className="text-[12px] leading-tight">
                <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-ivory/50">
                  Send email
                </span>
                {site.email}
              </span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#estimate"
              className="rounded-sm bg-sage-soft px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-forest transition-colors duration-300 hover:bg-sky-soft"
            >
              Budget Calculator
            </a>
            <span className="hidden items-center gap-2 lg:flex">
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-ivory/50">
                Follow
              </span>
              {socials.map((s) => (
                <span
                  key={s.label}
                  aria-label={s.label}
                  className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border border-ivory/25 text-[9px] font-bold text-ivory/80 transition-colors duration-300 hover:border-sky-soft hover:bg-sky-soft hover:text-forest"
                >
                  {s.tag}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* ————— sticky cream nav ————— */}
      <header className="sticky top-0 z-[60] border-b border-forest/10 bg-ivory/90 backdrop-blur-md">
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <Link
            href="/editorial"
            className="font-serif text-[1.4rem] text-forest"
          >
            Canvas <span className="text-sky">&amp;</span> Brick
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {/* Design Ideas — mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIdeasOpen(true)}
              onMouseLeave={() => setIdeasOpen(false)}
            >
              <Link
                href="/design-ideas"
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 transition-colors duration-300 hover:text-sky"
                aria-expanded={ideasOpen}
              >
                Design Ideas
                <ChevronDown
                  size={13}
                  strokeWidth={2}
                  className={`transition-transform duration-300 ${
                    ideasOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <AnimatePresence>
                {ideasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="absolute left-1/2 top-full z-50 w-[44rem] -translate-x-1/2 pt-4"
                  >
                    <div className="rounded-md border border-forest/10 bg-ivory p-5 shadow-2xl shadow-forest/10">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="eyebrow text-fern/70">
                          Browse ideas by room
                        </p>
                        <Link
                          href="/design-ideas"
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky transition-colors hover:text-forest"
                        >
                          See all →
                        </Link>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {designIdeas.map((c) => (
                          <Link
                            key={c.id}
                            href={`/design-ideas/${c.slug}`}
                            className="group flex items-center gap-3 rounded-sm p-2 transition-colors hover:bg-sage-soft/50"
                          >
                            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm bg-sage-soft">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={c.images[0]}
                                alt={c.title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </span>
                            <span>
                              <span className="block text-[13px] font-bold text-forest transition-colors group-hover:text-sky">
                                {c.title}
                              </span>
                              <span className="block text-[11px] text-charcoal/45">
                                {c.images.length} designs
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 transition-colors duration-300 hover:text-sky"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-full bg-sky px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-forest sm:block"
            >
              Book Consultation
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center text-forest lg:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex flex-col bg-ivory"
          >
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <p className="font-serif text-[1.4rem] text-forest">
                Canvas <span className="text-sky">&amp;</span> Brick
              </p>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center text-forest"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="container-x flex flex-1 flex-col gap-1 overflow-y-auto py-4">
              {/* Design Ideas accordion */}
              <button
                onClick={() => setIdeasOpenM((v) => !v)}
                aria-expanded={ideasOpenM}
                className="flex items-center justify-between border-b border-forest/10 py-4 font-serif text-4xl text-forest"
              >
                Design Ideas
                <ChevronDown
                  size={26}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${
                    ideasOpenM ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {ideasOpenM && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 py-3">
                      {designIdeas.map((c) => (
                        <Link
                          key={c.id}
                          href={`/design-ideas/${c.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between border-b border-forest/5 py-2.5 text-sm font-semibold text-charcoal/70"
                        >
                          {c.title}
                          <span className="text-[11px] text-charcoal/35">
                            {c.images.length}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
                  className="border-b border-forest/10 py-4 font-serif text-4xl text-forest transition-colors hover:text-sky"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-x pb-10">
              <a
                href="#estimate"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-sky px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory"
              >
                Budget Calculator
              </a>
              <p className="mt-5 text-sm text-charcoal/60">{site.phone}</p>
              <p className="mt-1 text-sm text-charcoal/60">{site.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
