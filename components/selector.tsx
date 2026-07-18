"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE } from "@/components/motion";
import { img } from "@/lib/content";

const directions = [
  {
    href: "/cinematic",
    number: "Direction 01",
    name: "The Cinematic",
    desc: "Full-bleed film, deep charcoal, brass light. An immersive, gallery-paced experience.",
    image: img("1613490493576-7fde63acd811", 1800),
    dark: true,
  },
  {
    href: "/editorial",
    number: "Direction 02",
    name: "The Editorial",
    desc: "Warm ivory, magazine grids, quiet typography. Calm, architectural, image-led.",
    image: img("1600585154340-be6161a56a0c", 1800),
    dark: false,
  },
];

export function Selector() {
  return (
    <div className="flex min-h-svh flex-col bg-ink text-ivory">
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="flex flex-col items-center gap-3 px-6 pb-8 pt-10 text-center"
      >
        <p className="font-serif text-3xl sm:text-4xl">
          Canvas <span className="text-brass">&amp;</span> Brick
        </p>
        <p className="eyebrow text-taupe">
          Two creative directions · choose an experience
        </p>
      </motion.header>

      <div className="flex flex-1 flex-col gap-px md:flex-row">
        {directions.map((d, i) => (
          <motion.div
            key={d.href}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 + i * 0.15, ease: EASE }}
            className="group relative min-h-[38svh] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex-1 md:hover:flex-[1.45]"
          >
            <Link href={d.href} className="absolute inset-0 block">
              <Image
                src={d.image}
                alt={d.name}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  d.dark
                    ? "bg-gradient-to-t from-ink via-ink/45 to-ink/15"
                    : "bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="eyebrow text-brass-soft">{d.number}</p>
                <p className="mt-3 font-serif text-4xl sm:text-5xl">{d.name}</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
                  {d.desc}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory">
                  Enter experience
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-1.5"
                  />
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="px-6 py-5 text-center text-[11px] tracking-wide text-ivory/35"
      >
        Demo prototype for Canvas &amp; Brick · Rajarhat, Kolkata · A
        Mozammel Haque Timbers company, est. 1974
      </motion.footer>
    </div>
  );
}
