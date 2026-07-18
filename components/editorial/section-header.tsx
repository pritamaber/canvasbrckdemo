"use client";

import { Reveal } from "@/components/motion";

/** Numbered magazine-style section header used across the editorial direction. */
export function ESectionHeader({
  number,
  label,
  heading,
  intro,
}: {
  number: string;
  label: string;
  heading: string;
  intro?: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <Reveal>
        <p className="eyebrow flex items-baseline gap-3 text-charcoal/45">
          <span className="font-serif text-base italic text-walnut">
            {number}
          </span>
          — {label}
        </p>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.08] text-charcoal sm:text-5xl">
          {heading}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.15}>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal/55">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
