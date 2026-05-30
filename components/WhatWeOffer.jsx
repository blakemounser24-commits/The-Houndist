"use client";

import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { offer } from "@/lib/content";

export default function WhatWeOffer() {
  return (
    <section id="services" className="section-pad relative bg-cream">
      <div className="container-luxe">
        <SectionHeader eyebrow={offer.eyebrow} title={offer.title} sub={offer.sub} />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {offer.cards.map((card) => (
            <StaggerItem key={card.title}>
              <TiltCard className="group h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[4px] border border-forest/10 bg-white/40 p-8 shadow-luxe-sm transition-all duration-700 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:shadow-luxe lg:p-10">
                  {/* corner accent */}
                  <span className="absolute right-0 top-0 h-16 w-16 origin-top-right scale-0 bg-gold/10 transition-transform duration-700 ease-luxe group-hover:scale-100 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                  <span className="font-display text-sm tracking-[0.2em] text-gold">
                    {card.tag}
                  </span>
                  <span className="mt-6 block h-px w-10 bg-gold/60 transition-all duration-700 ease-luxe group-hover:w-20" />
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug text-forest">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-sans text-[15px] font-light leading-relaxed text-ink/65">
                    {card.body}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
