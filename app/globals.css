@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --cream: #f8f5f0;
  --forest: #1a2e22;
  --gold: #c9a84c;
  --ink: #151515;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 96px;
}

body {
  background-color: var(--cream);
  color: var(--ink);
  font-feature-settings: "kern", "liga", "calt";
  overflow-x: hidden;
}

::selection {
  background: rgba(201, 168, 76, 0.28);
  color: var(--forest);
}

/* Thin, refined scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--cream);
}
::-webkit-scrollbar-thumb {
  background: rgba(26, 46, 34, 0.25);
  border-radius: 999px;
  border: 3px solid var(--cream);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(26, 46, 34, 0.4);
}

@layer components {
  .section-pad {
    @apply px-6 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-[120px];
  }

  .container-luxe {
    @apply mx-auto w-full max-w-editorial;
  }

  .eyebrow {
    @apply font-sans text-[11px] font-medium uppercase tracking-eyebrow text-gold sm:text-xs;
  }

  .h-display {
    @apply font-display font-semibold leading-[1.04] tracking-[-0.01em] text-forest;
  }

  .hairline {
    @apply h-px w-full;
    background-color: rgba(26, 46, 34, 0.12);
  }

  .btn-base {
    @apply inline-flex items-center justify-center gap-2 font-sans text-[13px] font-medium uppercase tracking-[0.18em] transition-all duration-500 ease-luxe;
  }

  .link-underline {
    @apply relative inline-block;
  }
  .link-underline::after {
    content: "";
    @apply absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe;
  }
  .link-underline:hover::after {
    @apply w-full;
  }
}

/* Film-grain overlay (fixed, ultra-subtle) */
.grain {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 60;
  opacity: 0.04;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Reduced motion respect */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
