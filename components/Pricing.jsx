"use client";

import SectionHeader from "./SectionHeader";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { pricing } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad relative bg-cream">
      <div className="container-luxe">
        <SectionHeader eyebrow={pricing.eyebrow} title={pricing.title} sub={pricing.sub} />

        {/* Dog Walking ledger */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-forest">
                {pricing.walkingTitle}
              </h3>
            </Reveal>
            <StaggerGroup className="mt-8" stagger={0.07}>
              {pricing.walks.map((w) => (
                <StaggerItem key={w.duration}>
                  <div className="group flex items-baseline gap-5 border-b border-forest/12 py-5 transition-colors duration-500 hover:border-gold/50">
                    <span className="w-20 shrink-0 font-display text-lg font-semibold text-forest sm:w-24">
                      {w.duration}
                    </span>
                    <span className="flex-1 font-sans text-[15px] font-light text-ink/60">
                      {w.note}
                      {w.flag && (
                        <span className="ml-3 inline-flex items-center gap-1 align-middle font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                          <span aria-hidden="true">★</span>
                          {w.flag}
                        </span>
                      )}
                    </span>
                    <span className="font-display text-2xl font-semibold text-forest transition-colors duration-500 group-hover:text-gold">
                      {w.price}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.1}>
              <p className="mt-5 font-sans text-[13px] font-light italic text-ink/45">
                {pricing.walksFootnote}
              </p>
            </Reveal>
          </div>

          {/* Sitting feature card */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[4px] bg-forest p-10 text-cream shadow-luxe">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-2xl" />
              <h3 className="relative font-display text-xl font-semibold leading-snug text-cream">
                {pricing.sitting.title}
              </h3>
              <div className="relative mt-8 flex items-end gap-2">
                <span className="font-display text-6xl font-semibold text-gold">
                  {pricing.sitting.price}
                </span>
                <span className="mb-2 font-sans text-sm uppercase tracking-[0.14em] text-cream/60">
                  {pricing.sitting.per}
                </span>
              </div>
              <p className="relative mt-3 font-sans text-[13px] font-light italic text-cream/55">
                {pricing.sitting.note}
              </p>
              <div className="relative my-7 h-px w-full bg-cream/15" />
              <ul className="relative grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {pricing.sitting.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-sans text-[14px] font-light text-cream/85"
                  >
                    <span className="mt-1 text-gold" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="btn-base relative mt-9 self-start rounded-full bg-gold px-7 py-3.5 text-forest transition-transform hover:scale-[1.03] hover:bg-gold-soft active:scale-95"
              >
                Enquire for a Quote
              </a>
            </div>
          </Reveal>
        </div>

        {/* Daytime visits */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-forest">
              {pricing.visitsTitle}
            </h3>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.visits.map((v) => (
              <StaggerItem key={v.label}>
                <div className="group flex h-full flex-col justify-between rounded-[4px] border border-forest/12 bg-white/40 p-7 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:shadow-luxe-sm">
                  <p className="font-sans text-[13px] uppercase tracking-[0.12em] text-ink/55">
                    {v.label}
                  </p>
                  <p className="mt-6 font-display text-3xl font-semibold text-forest transition-colors duration-500 group-hover:text-gold">
                    {v.price}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
