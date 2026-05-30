"use client";

import SectionHeader from "./SectionHeader";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { multiDog } from "@/lib/content";

export default function MultiDog() {
  return (
    <section className="section-pad relative bg-cream">
      <div className="container-luxe">
        <div className="hairline mb-20" />
        <SectionHeader eyebrow={multiDog.eyebrow} title={multiDog.title} sub={multiDog.sub} />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {multiDog.cards.map((c) => (
            <StaggerItem key={c.label}>
              <div className="group h-full rounded-[4px] border border-forest/12 bg-white/40 p-9 text-center transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:shadow-luxe-sm">
                <p className="font-display text-xl font-semibold text-forest">{c.label}</p>
                <p className="mt-6 font-display text-4xl font-semibold text-gold">{c.price}</p>
                <p className="mt-2 font-sans text-[13px] uppercase tracking-[0.1em] text-ink/55">
                  {c.per}
                </p>
                {c.extra && (
                  <div className="mt-6 border-t border-forest/10 pt-5">
                    {c.extra.map((e) => (
                      <p key={e} className="font-sans text-[13px] font-light text-ink/55">
                        {e}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
