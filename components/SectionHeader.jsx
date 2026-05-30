"use client";

import { Reveal } from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  light = false,
  maxWidth = "max-w-2xl",
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <div className={`flex flex-col ${alignCls} ${maxWidth}`}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.01em] sm:text-5xl lg:text-[3.4rem] ${
            light ? "text-cream" : "text-forest"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 font-sans text-lg font-light leading-relaxed ${
              light ? "text-cream/75" : "text-ink/65"
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
