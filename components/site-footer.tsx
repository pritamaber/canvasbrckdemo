"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { footerLinks, site } from "@/lib/content";

export function SiteFooter() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="border-t border-white/5 bg-ink text-ivory">
      <div className="container-x grid gap-14 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-10">
        {/* brand */}
        <div>
          <p className="font-serif text-3xl">
            Canvas <span className="text-brass">&amp;</span> Brick
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/50">
            The modern evolution of Mozammel Haque Timbers. Designing and
            building considered interiors from Rajarhat since 1974.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {["Instagram", "Facebook", "LinkedIn"].map((s) => (
              <span
                key={s}
                className="group cursor-pointer text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/50 transition-colors duration-300 hover:text-brass-soft"
              >
                {s}
                <span className="mt-1 block h-px w-0 bg-brass transition-all duration-500 group-hover:w-full" />
              </span>
            ))}
          </div>
        </div>

        {/* explore */}
        <nav aria-label="Explore">
          <p className="eyebrow text-taupe">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.explore.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-ivory/60 transition-colors hover:text-brass-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* services */}
        <div>
          <p className="eyebrow text-taupe">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/60">
            {footerLinks.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* studio + newsletter */}
        <div>
          <p className="eyebrow text-taupe">The studio</p>
          <p className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-ivory/60">
            <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brass" />
            {site.address}
          </p>
          <p className="mt-3 text-sm text-ivory/60">{site.hours}</p>

          <p className="mt-8 text-sm text-ivory/80">
            Quiet letters on design, once a month.
          </p>
          {joined ? (
            <p className="mt-3 text-sm text-brass-soft">
              Thank you — you’re on the list.
            </p>
          ) : (
            <form
              className="mt-3 flex items-center gap-4 border-b border-white/20 pb-2 focus-within:border-brass"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent text-sm text-ivory placeholder:text-ivory/30 focus:outline-none"
              />
              <button
                type="submit"
                className="eyebrow shrink-0 text-brass transition-colors hover:text-brass-soft"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-[11px] tracking-wide text-ivory/35 sm:flex-row sm:items-center">
          <p>
            © {site.year} Canvas &amp; Brick · {site.legalLine}
          </p>
          <p className="flex gap-5">
            <span className="cursor-pointer transition-colors hover:text-ivory/60">
              Privacy
            </span>
            <span className="cursor-pointer transition-colors hover:text-ivory/60">
              Terms
            </span>
            <span>{site.addressShort}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
