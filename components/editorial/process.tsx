"use client";

import { Reveal } from "@/components/motion";
import { ESectionHeader } from "@/components/editorial/section-header";
import { processSteps } from "@/lib/content";

export function EProcess() {
  return (
    <section id="process" className="bg-linen/50 py-24 scroll-mt-16 md:py-36">
      <div className="container-x">
        <ESectionHeader
          number="06"
          label="The process"
          heading="Six steps. No surprises."
          intro="From first conversation to five-year aftercare, the path is written down, priced and dated before we begin."
        />

        <div className="mt-14 border-t border-charcoal/10">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={0.05 * i}>
              <div className="group grid grid-cols-[4rem_1fr] items-baseline gap-6 border-b border-charcoal/10 py-9 sm:grid-cols-[7rem_1fr_8rem]">
                <span className="font-serif text-5xl text-sand transition-colors duration-500 group-hover:text-brass sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-charcoal/60">
                    {step.body}
                  </p>
                  <p className="mt-3 font-serif text-xs italic text-walnut sm:hidden">
                    {step.duration}
                  </p>
                </div>
                <p className="hidden text-right font-serif text-sm italic text-walnut sm:block">
                  {step.duration}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
