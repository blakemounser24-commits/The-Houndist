import Logo from "./Logo";
import { nav, business, contact } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/[0.06] blur-3xl" />
      <div className="container-luxe relative px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark size={48} />
            <p className="mt-6 max-w-xs font-sans text-[15px] font-light leading-relaxed text-cream/65">
              Premium dog walking and 24-hour in-home sitting in {business.region}.
              GPS-tracked, training-included, and tailored to every tail.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline font-sans text-[15px] font-light text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
              Connect
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {contact.channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link-underline font-sans text-[15px] font-light text-cream/75 transition-colors hover:text-cream"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[13px] font-light text-cream/50">
            © {year} {business.name} · {business.region}, NSW, Australia
          </p>
          <p className="font-sans text-[13px] font-light text-cream/40">
            {business.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
