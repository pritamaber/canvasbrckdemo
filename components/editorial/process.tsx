"use client";

import { Reveal } from "@/components/motion";
import { ESectionHeader } from "@/components/editorial/section-header";
import { processSteps } from "@/lib/content";

export function EProcess() {
  return (
    <section id="process" className="bg-sage-soft/50 py-24 scroll-mt-16 md:py-36">
      <div className="container-x">
        <ESectionHeader
          number="06"
          label="The process"
          heading="Six steps. No surprises."
          intro="From first conversation to five-year aftercare, the path is written down, priced and dated before we begin."
        />
      </div>

      {/* horizontal timeline — swipe on small screens, fits across on wide */}
      <div className="hide-scrollbar mt-14 overflow-x-auto">
        <div className="container-x flex gap-0">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={0.05 * i}
              className="w-[78vw] shrink-0 sm:w-[20rem] lg:w-auto lg:flex-1"
            >
              <div className="pr-6">
                {/* node + connector line */}
                <div className="flex items-center">
                  <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-fern/30 bg-ivory font-serif text-lg text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`h-px flex-1 ${
                      i < processSteps.length - 1 ? "bg-fern/25" : "bg-transparent"
                    }`}
                  />
                </div>

                <div className="mt-6">
                  <p className="font-serif text-xs italic text-fern">
                    {step.duration}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/60">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <p className="container-x mt-8 text-[11px] uppercase tracking-[0.24em] text-fern/50 lg:hidden">
        Swipe to follow the journey →
      </p>
    </section>
  );
}
