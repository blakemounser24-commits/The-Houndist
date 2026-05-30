"use client";

import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";
import { hero } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const words = hero.titleLines.flatMap((line, li) =>
    line.map((w, wi) => ({
      word: typeof w === "string" ? w : w.text,
      accent: typeof w === "object" && w.accent,
      lineBreak: wi === line.length - 1 && li < hero.titleLines.length - 1,
    }))
  );

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-forest"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/logo.png"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-forest/85 via-forest/55 to-forest/25" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-forest/80 via-transparent to-forest/30" />

      {/* Three.js particle field */}
      <HeroParticles />

      {/* Content — editorial, left-weighted */}
      <div className="container-luxe relative z-10 px-6 pt-28 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.015em] text-cream sm:text-6xl lg:text-[5rem]">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${w.accent ? "italic text-gold" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.35 + i * 0.09 }}
                >
                  {w.word}
                </motion.span>
                {w.lineBreak ? <br /> : <span>&nbsp;</span>}
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-cream/85 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.05 }}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.25 }}
          >
            <a
              href="#contact"
              className="btn-base group rounded-full bg-gold px-8 py-4 text-forest transition-transform hover:scale-[1.03] hover:bg-gold-soft hover:shadow-gold active:scale-95"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#pricing"
              className="btn-base rounded-full border border-cream/40 px-8 py-4 text-cream transition-all hover:scale-[1.03] hover:border-cream hover:bg-cream/5 active:scale-95"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-cream/15 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 1.5 }}
          >
            {hero.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.18em] text-gold">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Seamless blend into next section */}
      <div className="absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
