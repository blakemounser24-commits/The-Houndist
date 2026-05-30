"use client";

import { StaggerGroup, StaggerItem } from "./Reveal";
import { whyChooseUs } from "@/lib/content";

const icons = {
  "GPS Tracked": (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  "Training Included": (
    <>
      <path d="M5 13a7 7 0 0 1 14 0" />
      <path d="M12 6V3" />
      <path d="M12 13l3.5 5.5a2 2 0 0 1-3.5 2 2 2 0 0 1-3.5-2L12 13Z" />
    </>
  ),
  "Free Consultation": (
    <>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M9 10h6M9 13h3" />
    </>
  ),
  "Locally Based": (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative bg-cream">
      <div className="container-luxe">
        <StaggerGroup className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group flex flex-col items-start">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:border-gold group-hover:bg-gold/5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[f.title]}
                  </svg>
                </span>
                <span className="mt-6 block h-px w-8 bg-gold/50 transition-all duration-700 ease-luxe group-hover:w-14" />
                <h3 className="mt-5 font-display text-xl font-semibold text-forest">
                  {f.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] font-light leading-relaxed text-ink/60">
                  {f.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
