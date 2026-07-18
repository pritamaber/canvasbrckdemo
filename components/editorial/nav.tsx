"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "@/components/motion";
import { navLinks, site } from "@/lib/content";

export function ENav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-charcoal/8 bg-ivory/85 backdrop-blur-md">
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <Link href="/editorial" className="font-serif text-[1.4rem] text-charcoal">
            Canvas <span className="text-walnut">&amp;</span> Brick
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55 transition-colors duration-300 hover:text-charcoal"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-full bg-charcoal px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-walnut sm:block"
            >
              Book Consultation
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center text-charcoal lg:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex flex-col bg-ivory"
          >
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <p className="font-serif text-[1.4rem] text-charcoal">
                Canvas <span className="text-walnut">&amp;</span> Brick
              </p>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center text-charcoal"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="container-x flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
                  className="border-b border-charcoal/10 py-4 font-serif text-4xl text-charcoal transition-colors hover:text-walnut"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-x pb-10">
              <p className="text-sm text-charcoal/60">{site.phone}</p>
              <p className="mt-1 text-sm text-charcoal/60">{site.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
