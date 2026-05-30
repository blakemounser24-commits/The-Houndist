"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Reveal } from "./Reveal";
import { reviews, business } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1];

function Stars() {
  return (
    <span className="text-gold" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden bg-forest">
      <div className="container-luxe relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionHeader
            eyebrow={reviews.eyebrow}
            title={reviews.title}
            sub={reviews.sub}
            light
            maxWidth="max-w-xl"
          />

          <Reveal delay={0.1}>
            <div className="flex items-center gap-6 rounded-[4px] border border-cream/15 bg-cream/[0.04] p-7 backdrop-blur-sm lg:justify-self-end">
              <p className="font-display text-6xl font-semibold text-cream">
                {reviews.rating}
              </p>
              <div>
                <div className="text-lg tracking-[0.15em]">
                  <Stars />
                </div>
                <p className="mt-1 font-sans text-[13px] font-light text-cream/70">
                  {reviews.ratingMeta}
                </p>
                <p className="mt-1 font-sans text-[13px] font-light text-cream/50">
                  <span className="mr-1 font-medium text-cream/80">G</span> Google Maps
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Editorial masonry */}
        <div className="mt-16 [column-fill:_balance] sm:columns-2 lg:columns-3 sm:gap-6 lg:gap-7">
          {reviews.items.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease, delay: (i % 3) * 0.08 }}
              className="group mb-6 break-inside-avoid rounded-[4px] border border-cream/10 bg-cream/[0.03] p-7 transition-colors duration-500 hover:border-gold/30 lg:mb-7"
            >
              <span className="block font-display text-5xl leading-[0.6] text-gold/40">
                &ldquo;
              </span>
              <blockquote className="mt-3 font-sans text-[15px] font-light leading-relaxed text-cream/85">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-cream/10 pt-5">
                <p className="font-display text-base font-semibold text-cream">{r.name}</p>
                <p className="mt-0.5 font-sans text-[12px] font-light tracking-wide text-cream/45">
                  {r.when}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <a
              href={business.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base rounded-full border border-cream/30 px-8 py-4 text-cream transition-all hover:scale-[1.03] hover:border-gold hover:text-gold active:scale-95"
            >
              {reviews.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
