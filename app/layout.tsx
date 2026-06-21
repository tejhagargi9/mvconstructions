import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "MV Constructions - Civil Engineering",
    template: "%s | MV Constructions",
  },
  description: "Expert structural engineering consultation for safe, economical, and code-compliant construction.",
  keywords: ["structural engineering", "civil engineering", "construction", "building design", "structural consultancy", "RCC design", "StaadPro", "ETabs", "Pune", "Belgaum"],
  authors: [{ name: "Vaibhav Mirje", url: "https://www.linkedin.com/in/vaibhavmirje1699" }],
  creator: "MV Constructions",
  metadataBase: new URL("https://www.mvconstructions.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MV Constructions",
    title: "MV Constructions - Structural Engineering Consultancy",
    description: "Expert structural engineering consultation for safe, economical, and code-compliant construction across Pune and North Karnataka.",
    images: [
      {
        url: "/images/about_main_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "MV Constructions - Structural Engineering Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MV Constructions - Structural Engineering Consultancy",
    description: "Expert structural engineering consultation for safe, economical, and code-compliant construction.",
    images: ["/images/about_main_photo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const viewport = {
  themeColor: "#0F172A",
};