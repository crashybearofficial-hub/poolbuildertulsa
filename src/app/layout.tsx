import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://poolbuildertulsa.com'),
  title: {
    default: "Pool Builder Tulsa | Legacy Engineering & Luxury Aquatic Design",
    template: "%s | Pool Builder Tulsa"
  },
  description: "Tulsa's most technical custom pool engineers. Specializing in high-performance gunite construction, geological stabilization, and luxury estate environments in the 918.",
  keywords: ["Pool Builder Tulsa", "Luxury Pools Tulsa", "Custom Pool Engineering Tulsa", "Jenks Pool Construction", "Broken Arrow Pool Builder"],
  openGraph: {
    title: "Pool Builder Tulsa | Legacy Engineering & Luxury Aquatic Design",
    description: "Tulsa's most technical custom pool engineers. Specializing in high-performance gunite construction and luxury estate environments.",
    url: "https://poolbuildertulsa.com",
    siteName: "Pool Builder Tulsa",
    images: [
      {
        url: "/gallery/midtown-enclave-hero.png",
        width: 1200,
        height: 630,
        alt: "Pool Builder Tulsa Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pool Builder Tulsa",
    description: "Tulsa's most technical custom pool engineers.",
    images: ["/gallery/midtown-enclave-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💧</text></svg>" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
