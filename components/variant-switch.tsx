"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Floating switcher so the client can flip between the two demo directions. */
export function VariantSwitch() {
  const path = usePathname();

  const pill = (href: string, label: string) => {
    const active = path === href;
    return (
      <Link
        href={href}
        className={`rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
          active
            ? "bg-brass text-ink"
            : "text-ivory/60 hover:text-ivory"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex items-center gap-1 rounded-full border border-white/10 bg-ink/85 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-md">
      <Link
        href="/"
        aria-label="Back to direction selector"
        className="grid h-7 w-7 place-items-center rounded-full text-ivory/60 transition-colors hover:text-brass-soft"
      >
        <span className="font-serif text-sm leading-none">C&amp;B</span>
      </Link>
      <span className="h-4 w-px bg-white/10" />
      {pill("/cinematic", "Cinematic")}
      {pill("/editorial", "Editorial")}
    </div>
  );
}
