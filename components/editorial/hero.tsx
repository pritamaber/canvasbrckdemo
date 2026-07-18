"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Counter, EASE, LineReveal, Parallax } from "@/components/motion";
import { heroEditorial, stats } from "@/lib/content";

export function EHero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="pt-[4.5rem]">
      <div className="container-x pb-16 pt-12 sm:pt-16">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex items-center justify-between gap-6 border-b border-charcoal/10 pb-5"
        >
          <p className="eyebrow text-charcoal/50">{heroEditorial.metaLeft}</p>
          <p className="eyebrow text-walnut">{heroEditorial.metaRight}</p>
        </motion.div>

        {/* headline */}
        <LineReveal
          as="h1"
          delay={0.25}
          className="mt-10 font-serif text-[15vw] leading-[0.95] tracking-tight text-charcoal sm:text-8xl lg:text-[7.5rem]"
          lines={[
            heroEditorial.titleA,
            <span key="b">
              {heroEditorial.titleB}{" "}
              <em className="text-walnut">{heroEditorial.titleItalic}</em>
            </span>,
          ]}
        />

        {/* sub + ctas */}
        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="max-w-md text-[15px] leading-relaxed text-charcoal/65"
          >
            {heroEditorial.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-charcoal px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-walnut"
            >
              Book Consultation
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal"
            >
              Explore projects
              <ArrowDown
                size={14}
                className="transition-transform duration-500 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* hero film */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
          className="mt-14"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[16/9] lg:aspect-[2.35/1]">
            <Parallax range={50} className="absolute inset-0 -top-16 -bottom-16">
              <motion.div
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: EASE }}
                className="relative h-full w-full"
              >
                {videoFailed ? (
                  <Image
                    src={heroEditorial.poster}
                    alt={heroEditorial.caption}
                    fill
                    priority
                    sizes="100vw"
                    className="scale-110 object-cover"
                  />
                ) : (
                  <video
                    className="absolute inset-0 h-full w-full scale-110 object-cover"
                    src={heroEditorial.video}
                    poster={heroEditorial.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onError={() => setVideoFailed(true)}
                  />
                )}
              </motion.div>
            </Parallax>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs tracking-wide text-charcoal/45">
            <p>{heroEditorial.caption}</p>
            <p className="hidden font-serif italic sm:block">
              From timber to timeless spaces
            </p>
          </div>
        </motion.div>
      </div>

      {/* stats band */}
      <div className="border-y border-charcoal/10 bg-linen/60">
        <div className="container-x grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter
                to={s.value}
                suffix={s.suffix}
                className="font-serif text-4xl text-walnut sm:text-5xl"
              />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-charcoal/45">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
