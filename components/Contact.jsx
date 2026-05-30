"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { contact } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1];

const channelIcons = {
  "SMS / Text (Preferred)": (
    <path d="M4 5h16v11H8l-4 4V5Z" />
  ),
  Email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  Facebook: (
    <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a0 0 0 0 1 0 0Z" />
  ),
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
    </>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative bg-cream">
      <div className="container-luxe">
        <div className="hairline mb-20" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal as="p" className="eyebrow">
            Get In Touch
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.01em] text-forest sm:text-5xl lg:text-[3.6rem]">
              {contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-ink/65">
              Every new client starts with a free consultation and a free 20-minute
              demonstration walk — no pressure, no commitment.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-[4px] border border-forest/12 bg-forest/10 sm:grid-cols-2">
          {contact.channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group flex items-center gap-5 bg-cream p-8 transition-colors duration-500 hover:bg-white sm:p-10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:scale-105 group-hover:bg-gold/5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {channelIcons[c.label]}
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">
                  {c.label}
                </span>
                <span className="mt-1 block truncate font-display text-lg font-medium text-forest transition-colors duration-300 group-hover:text-gold">
                  {c.value}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
