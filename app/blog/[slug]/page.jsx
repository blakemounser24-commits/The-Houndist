import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { blog, articleBodies } from "@/lib/content";

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = blog.posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} · The Houndist`,
    description: post.excerpt,
  };
}

function Block({ block }) {
  if (block.type === "h2")
    return (
      <h2 className="mt-12 font-display text-3xl font-semibold text-forest">
        {block.text}
      </h2>
    );
  if (block.type === "h3")
    return (
      <h3 className="mt-8 font-display text-xl font-semibold text-forest">
        {block.text}
      </h3>
    );
  if (block.type === "ul")
    return (
      <ul className="mt-5 flex flex-col gap-3">
        {block.items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-3 font-sans text-[17px] font-light leading-relaxed text-ink/75"
          >
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {it}
          </li>
        ))}
      </ul>
    );
  return (
    <p className="mt-5 font-sans text-[17px] font-light leading-[1.85] text-ink/75">
      {block.text}
    </p>
  );
}

export default function Article({ params }) {
  const post = blog.posts.find((p) => p.slug === params.slug);
  const body = articleBodies[params.slug];
  if (!post || !body) notFound();

  return (
    <main className="relative bg-cream">
      <Navigation />

      <article className="px-6 pb-24 pt-36 sm:px-10 lg:px-16 lg:pt-44">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Link
              href="/#blog"
              className="font-sans text-[13px] font-medium uppercase tracking-[0.14em] text-forest/60 transition-colors hover:text-gold"
            >
              ← Back to Blog
            </Link>
            <p className="mt-10 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              {post.category}
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-forest sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 font-sans text-sm font-light italic text-ink/50">
              {post.byline}
            </p>
            <div className="mt-10 h-px w-full bg-forest/12" />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              {body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-[4px] bg-forest p-10 text-center text-cream">
              <p className="font-display text-2xl font-semibold">
                Ready to Meet The Houndist?
              </p>
              <p className="mx-auto mt-3 max-w-sm font-sans text-[15px] font-light text-cream/70">
                Free consultation and demo walk — no commitment, no pressure.
              </p>
              <Link
                href="/#contact"
                className="btn-base mt-7 rounded-full bg-gold px-8 py-4 text-forest transition-transform hover:scale-[1.03] hover:bg-gold-soft active:scale-95"
              >
                Get In Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </main>
  );
}
