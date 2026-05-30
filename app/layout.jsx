import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  variable: "--font-playfair",
  display: "swap",
  src: [
    { path: "./fonts/playfair-normal.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/playfair-italic.woff2", weight: "400 700", style: "italic" },
  ],
});

const dmSans = localFont({
  variable: "--font-dmsans",
  display: "swap",
  src: [
    { path: "./fonts/dmsans-normal.woff2", weight: "300 600", style: "normal" },
    { path: "./fonts/dmsans-italic.woff2", weight: "300 600", style: "italic" },
  ],
});

export const metadata = {
  title: "The Houndist — Premium Dog Walking & Sitting · Berowra",
  description:
    "Professional dog walking and dog sitting in Berowra & Berowra Heights. GPS-tracked walks, free basic training, and 24-hour sitting from $18.",
  metadataBase: new URL("https://thehoundist.com"),
  openGraph: {
    title: "The Houndist — Premium Dog Walking & Sitting · Berowra",
    description:
      "GPS-tracked walks, free basic training, and 24-hour sitting in Berowra & Berowra Heights.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#1A2E22",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
