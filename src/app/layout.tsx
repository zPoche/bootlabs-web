import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { siteContent } from "@/content/site";
import "./globals.css";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
