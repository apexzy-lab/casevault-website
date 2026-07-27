import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casevault — Six UI Design Directions",
  description:
    "Six researched SaaS homepage concepts for Casevault immigration case management.",
  openGraph: {
    title: "Casevault — Six UI Design Directions",
    description:
      "One secure workspace for immigration cases, documents, deadlines, billing, and client communication.",
    type: "website",
    images: [{ url: "/og-gallery.png", width: 1733, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casevault — Six UI Design Directions",
    description:
      "One secure workspace for immigration cases, documents, deadlines, billing, and client communication.",
    images: ["/og-gallery.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
