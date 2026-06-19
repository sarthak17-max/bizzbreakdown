import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BizzBreakdown — Understand Any Indian Business in 5 Minutes",
  description: "Explore, compare, and track India's top startups and companies. Get clear insights on valuations, revenue, funding, and more — all in one place.",
  keywords: "Indian startups, startup data, company comparison, Zomato, Swiggy, Zepto, fintech, edtech, healthtech, Indian business",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "BizzBreakdown — Understand Any Indian Business in 5 Minutes",
    description: "Explore, compare, and track India's top startups and companies. Clear insights. Smart comparisons. Better decisions.",
    url: "https://bizzbreakdown-pip4.vercel.app",
    siteName: "BizzBreakdown",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizzBreakdown — Understand Any Indian Business in 5 Minutes",
    description: "Explore, compare, and track India's top startups. Clear insights. Smart comparisons. Better decisions.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">{children}</body>
    </html>
  );
}