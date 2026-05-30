"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { nav } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxe ${
          scrolled
            ? "bg-cream/80 shadow-[0_1px_0_rgba(26,46,34,0.06),0_18px_40px_-30px_rgba(26,46,34,0.45)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-luxe flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <a href="#top" aria-label="The Houndist — home">
            <Logo size={scrolled ? 40 : 44} />
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-forest/80 transition-colors duration-300 hover:text-forest"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-base rounded-full bg-forest px-6 py-3 text-cream hover:bg-forest-soft hover:shadow-gold"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span className="h-px w-7 bg-forest" />
            <span className="h-px w-7 bg-forest" />
            <span className="h-px w-5 self-start bg-forest" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[55] bg-forest/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[56] flex w-[82%] max-w-sm flex-col bg-forest px-8 py-7 text-cream lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="flex items-center justify-between">
                <Logo dark size={40} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-2xl text-cream/80 transition-colors hover:text-gold"
                >
                  ✕
                </button>
              </div>

              <div className="mt-14 flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease }}
                    className="border-b border-cream/10 py-4 font-display text-2xl text-cream/90 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-base mt-auto rounded-full bg-gold px-6 py-4 text-forest hover:bg-gold-soft"
              >
                Book a Consultation
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
