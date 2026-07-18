"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Counter, EASE, LineReveal } from "@/components/motion";
import { heroCinematic, marqueeItems, stats } from "@/lib/content";

export function CHero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <>
      <section className="relative flex min-h-svh flex-col overflow-hidden">
        {/* full-bleed film */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
          className="absolute inset-0"
        >
          {videoFailed ? (
            <Image
              src={heroCinematic.poster}
              alt="Luxury interior by Canvas & Brick"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={heroCinematic.video}
              poster={heroCinematic.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={() => setVideoFailed(true)}
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />

        {/* headline */}
        <div className="container-x relative z-10 flex flex-1 flex-col justify-center pb-16 pt-36">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="eyebrow flex items-center gap-4 text-brass-soft"
          >
            <span className="h-px w-10 bg-brass/60" />
            {heroCinematic.eyebrow}
          </motion.p>

          <LineReveal
            as="h1"
            className="mt-7 max-w-5xl font-serif text-5xl leading-[1.02] text-ivory sm:text-7xl lg:text-8xl"
            lines={[
              heroCinematic.titleLines[0],
              <em key="i" className="text-brass-soft">
                {heroCinematic.titleLines[1]}
              </em>,
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
          >
            {heroCinematic.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-brass px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-brass-soft"
            >
              Book Consultation
            </a>
            <a
              href="#projects"
              className="rounded-full border border-ivory/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-ivory/70"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="relative z-10 border-t border-white/10"
        >
          <div className="container-x grid grid-cols-2 gap-y-8 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter
                  to={s.value}
                  suffix={s.suffix}
                  className="font-serif text-4xl text-brass-soft sm:text-5xl"
                />
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory/45">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-40 right-6 z-10 hidden flex-col items-center gap-3 lg:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/40 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <span className="relative h-16 w-px overflow-hidden bg-ivory/15">
            <motion.span
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-1/2 bg-brass"
            />
          </span>
        </motion.div>
      </section>

      {/* marquee */}
      <div className="overflow-hidden border-y border-white/5 bg-charcoal py-6">
        <div className="marquee-track flex w-max items-center gap-14">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i} className="flex items-center gap-14 whitespace-nowrap">
              <span className="font-serif text-2xl italic text-ivory/55">
                {m}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-brass/60" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
