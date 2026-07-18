"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "@/components/motion";
import { navLinks, site } from "@/lib/content";

export function CNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[65] h-[2px] origin-left bg-brass"
      />

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-ink/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Link href="/cinematic" className="font-serif text-2xl text-ivory">
            Canvas <span className="text-brass">&amp;</span> Brick
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/60 transition-colors duration-300 hover:text-brass-soft"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-full border border-brass/50 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-soft transition-all duration-300 hover:border-brass hover:bg-brass hover:text-ink sm:block"
            >
              Book Consultation
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center text-ivory lg:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex flex-col bg-ink"
          >
            <div className="container-x flex h-20 items-center justify-between">
              <p className="font-serif text-2xl text-ivory">
                Canvas <span className="text-brass">&amp;</span> Brick
              </p>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center text-ivory"
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
                  className="border-b border-white/5 py-4 font-serif text-4xl text-ivory transition-colors hover:text-brass-soft"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-x pb-10">
              <p className="text-sm text-ivory/50">{site.phone}</p>
              <p className="mt-1 text-sm text-ivory/50">{site.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
