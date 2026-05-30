"use client";

import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { packages } from "@/lib/content";

export default function Packages() {
  return (
    <section className="section-pad relative bg-cream">
      <div className="container-luxe">
        <div className="hairline mb-20" />
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeader
            eyebrow={packages.eyebrow}
            title={packages.title}
            sub={packages.sub}
          />

          <Reveal delay={0.12}>
            <div className="relative rounded-[4px] border-l-2 border-gold bg-white/50 p-9 shadow-luxe-sm lg:p-12">
              <span className="absolute -left-3 -top-6 font-display text-7xl leading-none text-gold/25">
                &ldquo;
              </span>
              <p className="relative font-display text-xl font-normal italic leading-relaxed text-forest sm:text-2xl">
                {packages.callout}
              </p>
              <a
                href="#contact"
                className="btn-base mt-9 rounded-full border border-forest/30 px-7 py-3.5 text-forest transition-all hover:scale-[1.03] hover:border-gold hover:text-gold active:scale-95"
              >
                {packages.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
