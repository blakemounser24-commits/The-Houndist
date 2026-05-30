"use client";

import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { blog } from "@/lib/content";

export default function Blog() {
  return (
    <section id="blog" className="section-pad relative bg-cream">
      <div className="container-luxe">
        <SectionHeader eyebrow={blog.eyebrow} title={blog.title} sub={blog.sub} />

        <StaggerGroup className="mt-16 grid gap-7 md:grid-cols-3">
          {blog.posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-[4px] border border-forest/10 bg-white/40 p-8 transition-all duration-700 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:shadow-luxe lg:p-9"
              >
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                  {post.category}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-forest">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 font-sans text-[15px] font-light leading-relaxed text-ink/60">
                  {post.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 font-sans text-[13px] font-medium uppercase tracking-[0.14em] text-forest transition-colors duration-300 group-hover:text-gold">
                  Read article
                  <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
