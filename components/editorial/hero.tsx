"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Counter, EASE, LineReveal } from "@/components/motion";
import { heroEditorial, stats } from "@/lib/content";

export function EHero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section>
      {/* full-bleed film with the headline set over it */}
      <div className="relative flex min-h-svh flex-col overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
          className="absolute inset-0"
        >
          {videoFailed ? (
            <Image
              src={heroEditorial.poster}
              alt={heroEditorial.caption}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover"
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
        {/* scrims for legibility over the film */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/75 via-forest/45 to-forest/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/10 to-transparent" />

        {/* meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="container-x relative z-10 flex items-center justify-between gap-6 pt-8"
        >
          <p className="eyebrow text-ivory/80">{heroEditorial.metaLeft}</p>
          <p className="eyebrow text-sky-soft">{heroEditorial.metaRight}</p>
        </motion.div>

        {/* headline over the film */}
        <div className="container-x relative z-10 flex flex-1 flex-col justify-center py-16">
          <LineReveal
            as="h1"
            delay={0.35}
            className="font-serif text-[15vw] leading-[0.95] tracking-tight text-ivory sm:text-8xl lg:text-[8rem]"
            lines={[
              heroEditorial.titleA,
              <span key="b">
                {heroEditorial.titleB}{" "}
                <em className="text-sky-soft">{heroEditorial.titleItalic}</em>
              </span>,
            ]}
          />

          <div className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
              className="max-w-md text-[15px] leading-relaxed text-ivory/80"
            >
              {heroEditorial.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="rounded-full bg-sky px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-sky-soft hover:text-forest"
              >
                Book Consultation
              </a>
              <a
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory"
              >
                Explore portfolio
                <ArrowDown
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-y-1"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="container-x relative z-10 pb-8"
        >
          <p className="text-xs tracking-wide text-ivory/60">
            {heroEditorial.caption}
          </p>
        </motion.div>
      </div>

      {/* stats band */}
      <div className="border-y border-fern/15 bg-sage-soft/50">
        <div className="container-x grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter
                to={s.value}
                suffix={s.suffix}
                className="grad-head font-serif text-4xl sm:text-5xl"
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
