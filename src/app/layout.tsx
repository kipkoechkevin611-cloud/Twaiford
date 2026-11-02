import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twyford - Premium Tiles, Ceramics & Sanitary Ware",
  description: "Discover exceptional tile and sanitary ware solutions designed to transform modern spaces. Quality, reliability, and innovation in every product.",
  keywords: "tiles, ceramics, sanitary ware, bathroom fixtures, floor tiles, wall tiles, wash basins, faucets, Kenya",
  authors: [{ name: "Twyford" }],
  openGraph: {
    title: "Twyford - Premium Tiles, Ceramics & Sanitary Ware",
    description: "Discover exceptional tile and sanitary ware solutions designed to transform modern spaces.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
