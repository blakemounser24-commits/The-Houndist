import Image from "next/image";

export default function Logo({ dark = false, size = 44, showWord = true }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="relative shrink-0 overflow-hidden rounded-full ring-1 ring-black/5"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="The Houndist logo"
          fill
          sizes="56px"
          className="object-cover"
          priority
        />
      </span>
      {showWord && (
        <span
          className={`font-display text-xl font-semibold tracking-tight sm:text-[1.35rem] ${
            dark ? "text-cream" : "text-forest"
          }`}
        >
          The Houndist
        </span>
      )}
    </span>
  );
}
