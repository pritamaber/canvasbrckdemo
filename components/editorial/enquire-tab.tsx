"use client";

/** Floorsy-style vertical "Enquire Now" tab pinned to the right edge. */
export function EEnquireTab() {
  return (
    <a
      href="#estimate"
      aria-label="Enquire now — open the budget estimator"
      className="fixed right-0 top-1/2 z-[55] hidden -translate-y-1/2 rounded-l-md bg-forest px-2.5 py-5 text-ivory shadow-[0_10px_30px_-10px_rgba(59,74,43,0.7)] transition-colors duration-300 hover:bg-sky md:block"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.28em] [writing-mode:vertical-lr]">
        Enquire Now
      </span>
    </a>
  );
}
