"use client";

import SectionHeader from "./SectionHeader";
import { Reveal } from "./Reveal";
import { serviceArea, business } from "@/lib/content";

export default function ServiceArea() {
  return (
    <section className="section-pad relative bg-cream">
      <div className="container-luxe">
        <div className="hairline mb-20" />
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              eyebrow={serviceArea.eyebrow}
              title={serviceArea.title}
              sub={serviceArea.sub}
            />
            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-col gap-4">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base self-start rounded-full border border-forest/25 px-7 py-3.5 text-forest transition-all hover:scale-[1.03] hover:border-gold hover:text-gold active:scale-95"
                >
                  {serviceArea.cta}
                </a>
                <div className="mt-2 flex items-start gap-3 font-sans text-[15px] font-light text-ink/60">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="mt-0.5 text-gold"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span>
                    <span className="font-display text-base font-semibold text-forest">
                      {serviceArea.place}
                    </span>
                    <br />
                    {serviceArea.address}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[4px] border border-forest/12 shadow-luxe">
              <iframe
                title="The Houndist service area — Berowra"
                src={serviceArea.mapEmbed}
                className="h-[360px] w-full grayscale-[0.25] sm:h-[440px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
