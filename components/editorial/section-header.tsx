"use client";

import { Reveal } from "@/components/motion";

/** Floorsy-style decorative diamond rule: ◆──◇◆◇──◆ */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex items-center justify-center gap-1.5 ${className}`}
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-fern/45 sm:w-16" />
      <span className="h-1 w-1 rotate-45 bg-gold/70" />
      <span className="h-1.5 w-1.5 rotate-45 border border-fern/50" />
      <span className="h-2 w-2 rotate-45 bg-fern/70" />
      <span className="h-1.5 w-1.5 rotate-45 border border-fern/50" />
      <span className="h-1 w-1 rotate-45 bg-gold/70" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-fern/45 sm:w-16" />
    </span>
  );
}

/** Centred, gradient magazine header — the Floorsy signature look. */
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
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="eyebrow flex items-center justify-center gap-2.5 text-fern/80">
        <span className="font-serif text-base italic text-sky">{number}</span>
        <span className="h-px w-5 bg-fern/40" />
        {label}
      </p>
      <h2 className="grad-head mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl">
        {heading}
      </h2>
      <Diamond className="mx-auto mt-7" />
      {intro && (
        <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-charcoal/60">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
