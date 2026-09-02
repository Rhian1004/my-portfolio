import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haeryung Kim | Urban & Environmental Policy Researcher",
  description: "Research portfolio of Haeryung Kim, a quantitative researcher studying the socioeconomic impacts of urban green-space and land-use policies.",
  keywords: ["Haeryung Kim", "urban green space", "land-use policy", "spatial econometrics", "environmental policy", "urban economics", "causal inference"],
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
