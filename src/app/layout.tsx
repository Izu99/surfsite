import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WaveX — California's Premier Kite School",
  description:
    "Master the elements with WaveX. IKO-certified instructors, premium equipment, and world-class lessons on the Malibu coast. Join the blue lifestyle today.",
  keywords: ["kite school", "kitesurfing", "California", "Malibu", "WaveX", "kite lessons", "water sports"],
  openGraph: {
    title: "WaveX — Ride the Blue Waves",
    description: "Wind. Water. Blue Lifestyle. Learn kitesurfing with California's elite instructors.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "WaveX Kite School",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-primary selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
