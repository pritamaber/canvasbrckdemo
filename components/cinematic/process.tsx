"use client";

import { motion } from "framer-motion";
import { EASE, Reveal } from "@/components/motion";
import { processSteps } from "@/lib/content";

export function CProcess() {
  return (
    <section id="process" className="bg-charcoal py-28 scroll-mt-20 md:py-36">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow flex items-center justify-center gap-4 text-brass-soft">
            <span className="h-px w-10 bg-brass/60" />
            The process
            <span className="h-px w-10 bg-brass/60" />
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight text-ivory sm:text-5xl">
            Six steps. No surprises.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: EASE }}
              className="h-full origin-left bg-brass/70"
            />
          </div>

          <div className="grid gap-y-14 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-6 lg:gap-x-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={0.12 * i}>
                <div className="relative">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-brass/50 bg-charcoal font-serif text-lg text-brass-soft">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-ivory/50">
                    {step.body}
                  </p>
                  <p className="mt-4 font-serif text-xs italic text-brass/80">
                    {step.duration}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
