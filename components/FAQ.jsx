"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Reveal } from "./Reveal";
import { faq } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1];

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-forest/12">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-forest sm:text-xl">
          {item.q}
        </span>
        <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
          <span className="absolute h-px w-4 bg-gold" />
          <motion.span
            className="absolute h-4 w-px bg-gold"
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.4, ease }}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 font-sans text-[15px] font-light leading-relaxed text-ink/65">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState("0-0");

  return (
    <section id="faq" className="section-pad relative bg-cream">
      <div className="container-luxe">
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} maxWidth="max-w-3xl" />
        <Reveal delay={0.1}>
          <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.12em] text-ink/45">
            {faq.meta}
          </p>
          <p className="mt-6 font-sans text-[15px] font-light text-ink/65">
            {faq.helpline.lead}{" "}
            <a
              href={`sms:${faq.helpline.phone.replace(/\s/g, "")}`}
              className="link-underline font-medium text-forest"
            >
              {faq.helpline.phone}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${faq.helpline.email}`}
              className="link-underline font-medium text-forest"
            >
              {faq.helpline.email}
            </a>
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-x-20">
          {faq.groups.map((group, gi) => (
            <Reveal key={group.heading} delay={0.05 * gi}>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {group.heading}
                </h3>
                <div className="mt-3 border-t border-forest/12">
                  {group.items.map((item, ii) => {
                    const id = `${gi}-${ii}`;
                    return (
                      <Item
                        key={id}
                        item={item}
                        isOpen={open === id}
                        onToggle={() => setOpen(open === id ? null : id)}
                      />
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
